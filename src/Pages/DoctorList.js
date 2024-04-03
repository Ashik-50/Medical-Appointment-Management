//DoctorList.js
import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, TextField, MenuItem, Grid } from '@mui/material';
import { useAppointments } from '../AppointmentsContext';

const DoctorList = () => {
  const { dispatch } = useAppointments();
  const doctorsData = [
    {
      id: 1,
      name: 'Dr. John Doe',
      specialization: 'Cardiology',
      experience: '10 years',
      description: 'Board-certified cardiologist with expertise in heart diseases.',
      price: '$150 per appointment',
      photoUrl: 'https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg',
    },
    {
      id: 2,
      name: 'Dr. Jane Smith',
      specialization: 'Pediatrics',
      experience: '8 years',
      description: 'Experienced pediatrician dedicated to children\'s health and well-being.',
      price: '$120 per appointment',
      photoUrl: 'https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg',
    },
    {
      id: 3,
      name: 'Dr. Sancho',
      specialization: 'Pulmonology',
      experience: '13 years',
      description: 'Qualified Pulmonologist with 10+ years of experience.',
      price: '$180 per appointment',
      photoUrl: 'https://professions.ng/wp-content/uploads/2023/07/The-Process-of-Becoming-a-Doctor-in-Nigeria-A-Roadmap2.jpg',
    },
    {
      id: 4,
      name: 'Dr. Alexis',
      specialization: 'Gasterology',
      experience: '7 years',
      description: 'Expertised in gasterology and quality skills.Indigestion Specialist.',
      price: '$110 per appointment',
      photoUrl: 'https://www.shutterstock.com/image-photo/man-portrait-doctor-wearing-white-600nw-2278090533.jpg',
    },
  
  ];
  const initialDoctorStates = doctorsData.reduce((acc, doctor) => {
    acc[doctor.id] = { selectedTime: '', patientName: '' };
    return acc;
  }, {});

  const [doctorStates, setDoctorStates] = useState(initialDoctorStates);

  const handleBookAppointment = (selectedDoctorId) => {
    const { selectedTime, patientName } = doctorStates[selectedDoctorId];
  
    if (selectedTime && patientName) {
      const appointment = {
        doctorId: selectedDoctorId,
        time: selectedTime,
        patientName: patientName,
      };
      dispatch({ type: 'ADD_APPOINTMENT', payload: appointment });
  
      // Clear the state for the selected doctor
      setDoctorStates((prevStates) => ({
        ...prevStates,
        [selectedDoctorId]: { selectedTime: '', patientName: '' },
      }));
  
      // Show a success message
      window.alert('Appointment booked successfully!');
    } else {
      window.alert('Please fill in all details.');
    }
  };

  const handleTimeChange = (selectedDoctorId, value) => {
    setDoctorStates((prevStates) => ({
      ...prevStates,
      [selectedDoctorId]: { ...prevStates[selectedDoctorId], selectedTime: value },
    }));
  };

  const handlePatientNameChange = (selectedDoctorId, value) => {
    setDoctorStates((prevStates) => ({
      ...prevStates,
      [selectedDoctorId]: { ...prevStates[selectedDoctorId], patientName: value },
    }));
  };

  return (
    <Grid container spacing={3} justifyContent="center">
      {doctorsData.map((doctor) => (
        <Grid item key={doctor.id} xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ height: '100%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <img src={doctor.photoUrl} alt={doctor.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {doctor.name}
              </Typography>
              <Typography color="text.secondary">
                {doctor.description}
              </Typography>
              <Typography color="text.secondary">
                Specialization: {doctor.specialization}
              </Typography>
              <Typography color="text.secondary">
                Experience: {doctor.experience}
              </Typography>
              <Typography color="text.secondary">
                Price: {doctor.price}
              </Typography>
              <TextField
                select
                label="Select Time"
                value={doctorStates[doctor.id].selectedTime}
                onChange={(e) => handleTimeChange(doctor.id, e.target.value)}
                style={{ marginTop: 20, width: '100%' }}
              >
                <MenuItem value="10:00 AM">10:00 AM</MenuItem>
                <MenuItem value="02:00 PM">02:00 PM</MenuItem>
                <MenuItem value="04:30 PM">04:30 PM</MenuItem>
                {/* Add more time options as needed */}
              </TextField>
              <TextField
                label="Your Name"
                value={doctorStates[doctor.id].patientName}
                onChange={(e) => handlePatientNameChange(doctor.id, e.target.value)}
                style={{ marginTop: 20, width: '100%' }}
              />
               <Button
              variant="contained"
              color="primary"
              onClick={() => handleBookAppointment(doctor.id)}
              style={{ marginTop: 20, backgroundColor: 'black', color: 'white' }}
            >
                Book Appointment
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
export default DoctorList;