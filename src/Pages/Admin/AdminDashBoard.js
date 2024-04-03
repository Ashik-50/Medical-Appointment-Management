// AdminDashboard.js
import React from 'react';
import { Typography, Link } from '@material-ui/core';

const AdminDashboard = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <ul>
        <li>
          <Link href="/admin/manage-doctors">Manage Doctors</Link>
        </li>
        <li>
          <Link href="/admin/list-users">List of Users</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminDashboard;
