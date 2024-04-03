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

const ListUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'Ashik', email: 'Ashik@outlook.com' },
    { id: 2, username: 'User2', email: 'user2@yahoo.com' },
  ]);

  const [openAddUserDialog, setOpenAddUserDialog] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handleAddUser = () => {
    // You may want to perform validation before adding the new user
    const newUser = {
      id: users.length + 1,
      username: newUsername,
      email: newEmail,
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
    handleCloseAddUserDialog();
  };

  const handleClickAddUser = () => {
    setOpenAddUserDialog(true);
  };

  const handleCloseAddUserDialog = () => {
    setOpenAddUserDialog(false);
    setNewUsername('');
    setNewEmail('');
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        List of Users
      </Typography>
      <Button variant="outlined" color="primary" onClick={handleClickAddUser}>
        Add User
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add User Dialog */}
      <Dialog open={openAddUserDialog} onClose={handleCloseAddUserDialog}>
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <TextField
            label="Username"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            fullWidth
          />
          <TextField
            label="Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddUserDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddUser} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ListUsers;
