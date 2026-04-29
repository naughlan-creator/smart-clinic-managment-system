## MySQL Database Design

### Table: patients
- id: INT, Primary Key, Auto Increment
- name: VARCHAR(100), Not Null
- email: VARCHAR(200), Not Null, Unique
- password: VARCHAR(255), Not Null
- phone: VARCHAR(15), Not Null
- address: VARCHAR(255)

### Table: doctors
- id: INT, Primary Key, Auto Incrememt
- name: VARCHAR(100), Not Null
- specialty: VARCHAR(100), Not Null
- email: VARCHAR(255), Not Null, Unique
- password: VARCHAR(255), Not Null
- phone: VARCHAR(15), Not Null

### Table: doctors_availability
- id: INT, Primary Key, Auto Increment
- doctor_id: INT, Foreign Key -> doctors(id)
- available_date: DATE, Not Null
- start_time: TIME, Not Null
- end_time: TIME, Not Null
- is_booked: BOOLEAN, Default FALSE

### Table: appointments
- id: INT, Primary Key, Auto Increment
- doctor_id: INT, Foreign Key -> doctors(id)
- patient_id: INT, Foreign Key -> patients(id)
- availability_id: INT, Foreign Key -> doctors_availability(id)
- appointment_time: DATETIME, Not Null
- status: ENUM(0 = Scheduled, 1 = Completed, 2 = Cancelled)
- getEndTime: DATETIME, Not Null
- getAppointmentDate: DATE, Not Null
- getAppointmentTime: TIME, Not Null

### Table: admin
- id: INT, Primary Key, Auto Increment
- username: VARCHAR(10), NOT NULL
- password: VARCHAR(255), NOT NULL

## MongoDB Collection Design

### Collection: prescriptions

```json
{
    "_id": "ObjectId('64abc123456')",
    "patientName": "Marilyn Monroe",
    "appointmentId": 51,
    "medication": "Paracetamol",
    "dosage": "500mg",
    "doctorNotes": "Take 1 tablet every 6 hours.",
    "refillCount": 2,
    "pharmacy": {
        "name": "Dischem Pharmacy",
        "location": "Jean Crossings"
    }
}


### Collection: feedback
```json
{
    "_id": "ObjectId('65abc123456')",
    "full_Name": "Nolo Theledi",
    "subject": "experience",
    "message": "I had a wonderful time... The service was superb!!!",
    "createdAt": "2026-04-29T10:00:00Z"
}

### Collection: logs
```json
{
    "_id": "ObjectId('66abc123456')",
    "userId": 12,
    "userRole": "doctor",
    "action": "Created prescription",
    "details": "Doctor created prescription for appointment 51",
    "timestamp": "2026-04-29T10:30:00Z",
    "level": "INFO"
}
