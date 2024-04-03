import React, { useState } from 'react';
import {
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from '@material-ui/core';

const ManageDoctors = () => {
  const [doctors, setDoctors] = useState([
    { id: 1, name: 'Dr. John Doe', specialization: 'Cardiology' },
    { id: 2, name: 'Dr. Jane Smith', specialization: 'Pediatrics' },
    { id: 3, name: 'Dr. Sancho', specialization: 'Pulmonology' },
    { id: 4, name: 'Dr. Alexis', specialization: 'Gasterology' },
  ]);

  const [openAddDoctorDialog, setOpenAddDoctorDialog] = useState(false);
  const [newDoctorName, setNewDoctorName] = useState('');
  const [newDoctorSpecialization, setNewDoctorSpecialization] = useState('');

  const handleDeleteDoctor = (doctorId) => {
    setDoctors((prevDoctors) => prevDoctors.filter((doctor) => doctor.id !== doctorId));
  };

  const handleAddDoctor = () => {
    // You may want to perform validation before adding the new doctor
    const newDoctor = {
      id: doctors.length + 1,
      name: newDoctorName,
      specialization: newDoctorSpecialization,
    };

    setDoctors((prevDoctors) => [...prevDoctors, newDoctor]);
    handleCloseAddDoctorDialog();
  };

  const handleClickAddDoctor = () => {
    setOpenAddDoctorDialog(true);
  };

  const handleCloseAddDoctorDialog = () => {
    setOpenAddDoctorDialog(false);
    setNewDoctorName('');
    setNewDoctorSpecialization('');
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Manage Doctors
      </Typography>
      <Button variant="outlined" color="primary" onClick={handleClickAddDoctor}>
        Add Doctor
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Specialization</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {doctors.map((doctor) => (
              <TableRow key={doctor.id}>
                <TableCell>{doctor.id}</TableCell>
                <TableCell>{doctor.name}</TableCell>
                <TableCell>{doctor.specialization}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="secondary" onClick={() => handleDeleteDoctor(doctor.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Doctor Dialog */}
      <Dialog open={openAddDoctorDialog} onClose={handleCloseAddDoctorDialog}>
        <DialogTitle>Add Doctor</DialogTitle>
        <DialogContent>
          <TextField
            label="Doctor Name"
            value={newDoctorName}
            onChange={(e) => setNewDoctorName(e.target.value)}
            fullWidth
          />
          <TextField
            label="Specialization"
            value={newDoctorSpecialization}
            onChange={(e) => setNewDoctorSpecialization(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddDoctorDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddDoctor} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ManageDoctors;
