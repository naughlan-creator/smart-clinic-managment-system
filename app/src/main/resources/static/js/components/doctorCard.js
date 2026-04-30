import { deleteDoctor } from '../services/doctorServices.js';
import { getPatientDetails } from '../services/patientServices.js';

export function createDoctorCard(doctor) {
  const card = document.createElement('div');
  card.classList.add('doctor-card');

  const role = localStorage.getItem('userRole');

  const infoDiv = document.createElement('div');
  infoDiv.classList.add('doctor-info');

  const name = document.createElement('h3');
  name.textContent = doctor.name;

  const specialization = document.createElement('p');
  specialization.textContent = doctor.specialization;

  const email = document.createElement('p');
  email.textContent = doctor.email;

  const availability = document.createElement('p');

  if (Array.isArray(doctor.availableTimes) && doctor.availableTimes.length > 0) {
    availability.textContent = 'Available Times: ' + doctor.availableTimes.join(', ');
  } else {
    availability.textContent = 'No available times';
  }

  infoDiv.appendChild(name);
  infoDiv.appendChild(specialization);
  infoDiv.appendChild(email);
  infoDiv.appendChild(availability);

  const actionsDiv = document.createElement('div');
  actionsDiv.classList.add('card-actions');

  if (role === 'ADMIN') {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    
    deleteBtn.addEventListener('click', async () => {
      const confirmDelete = confirm(`Are you sure you want to delete Dr. ${doctor.name}?`);
      if (!confirmDelete) {
        return;
      }
      
      const token = localStorage.getItem('token');

      await deleteDoctor(doctor.id, token);

      card.remove();
    });

    actionsDiv.appendChild(deleteBtn);
  } else if (role === 'PATIENT') {
    const bookBtn = document.createElement('button');
    bookBtn.textContent = 'Book Now';

    bookBtn.addEventListener('click', () => {
      alert('Please log in to book an appointment.');
    });

    actionsDiv.appendChild(bookBtn);
  } else if (role === 'LOGGED_IN_PATIENT') {
    const bookBtn = document.createElement('button');
    bookBtn.textContent = 'Book Now';

    bookBtn.addEventListener('click', async () => {
      const token = localStorage.getItem('token');
      const patientData = await getPatientDetails(token);

      showBookingOverlay(doctor, patientData);
    });

    actionsDiv.appendChild(bookBtn); 
  }

  card.appendChild(infoDiv);
  card.appendChild(actionsDiv);

  return card;
}