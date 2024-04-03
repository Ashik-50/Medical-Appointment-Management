import React, { useState } from 'react';
import { Container, List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const DoctorAppointmentList = ({ appointment, onDelete }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    onDelete(appointment);
    handleClose();
  };

  return (
    <div>
      <ListItem
        alignItems="flex-start"
        sx={{
          borderBottom: '1px solid #ccc',
          paddingY: 3, // Increase vertical padding
          transition: 'background-color 0.3s',
          '&:hover': {
            backgroundColor: '#f5f5f5',
          },
        }}
      >
        <ListItemAvatar sx={{ marginRight: 3 }}>
          <Avatar
            alt="Doctor's Picture"
            src={appointment.doctor.photoUrl}
            sx={{
              width: 80,
              height: 80,
            }}
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography variant="h5" sx={{ fontSize: '1.5rem', marginBottom: 1 }}>
              {appointment.doctor.name}
            </Typography>
          }
          secondary={
            <React.Fragment>
              <Button
                onClick={handleClickOpen}
                variant="outlined"
                size="large" // Increase button size
                sx={{ marginRight: 2 }}
              >
                View Details
              </Button>
              <Button
                onClick={handleDelete}
                variant="outlined"
                size="large" // Increase button size
                color="error"
              >
                Delete Appointment
              </Button>
            </React.Fragment>
          }
        />
      </ListItem>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{appointment.doctor.name}</DialogTitle>
        <DialogContent>
          <Typography>
            <strong>Specialization:</strong> {appointment.doctor.specialization}
          </Typography>
          <Typography>
            <strong>Date:</strong> {appointment.date}
          </Typography>
          <Typography>
            <strong>Time:</strong> {appointment.time}
          </Typography>
          <Typography>
            <strong>Location:</strong> {appointment.location}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const DoctorAppointmentsContainer = () => {
  const [appointments, setAppointments] = useState([
    {
      doctor: {
        name: 'Dr John Doe',
        specialization: 'Cardiology',
        photoUrl: 'https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg',
      },
      date: '2023-01-01',
      time: '10:00 AM',
      location: 'Apollo Hospital',
    },
    {
      doctor: {
        name: 'Dr Jane Smith',
        specialization: 'Pediatrics',
        photoUrl: 'https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg',
      },
      date: '2023-02-01',
      time: '02:00 PM',
      location: 'West Ham Pediatrics',
    },
  ]);

  const handleDeleteAppointment = (appointmentToDelete) => {
    setAppointments((prevAppointments) => prevAppointments.filter((appointment) => appointment !== appointmentToDelete));
  };

  return (
    <Container>
      <List>
        {appointments.map((appointment, index) => (
          <DoctorAppointmentList key={index} appointment={appointment} onDelete={handleDeleteAppointment} />
        ))}
      </List>
    </Container>
  );
};

export default DoctorAppointmentsContainer;
