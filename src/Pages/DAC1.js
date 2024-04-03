//DAC1.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const Doctor1AppointmentCard = ({ appointment }) => {
  return (
    <Card sx={{ maxWidth: 600, margin: 'auto', marginTop: 10, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <CardMedia
        component="img"
        height="200"
        image={appointment.doctor.photoUrl}
        alt="Doctor's Picture"
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {appointment.doctor.name}
        </Typography>
        <Typography color="text.secondary">
          <strong>Specialization:</strong> {appointment.doctor.specialization}
        </Typography>
        <Typography color="text.secondary">
          <strong>Date:</strong> {appointment.date}
        </Typography>
        <Typography color="text.secondary">
          <strong>Time:</strong> {appointment.time}
        </Typography>
        <Typography color="text.secondary">
          <strong>Location:</strong> {appointment.location}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default Doctor1AppointmentCard;