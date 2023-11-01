/* eslint-disable */
import React from 'react';
import {
  Box,
  Card,
  Table,
  Button,
  Divider,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  CardHeader,
  TableContainer
} from '@material-ui/core';
import { Icon } from '@iconify/react';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import { Link as RouterLink } from 'react-router-dom';
import Scrollbar from '../Scrollbar';

const ShowAllTable = ({ appointments }) => (
  <Card>
    <CardHeader title="Appointments" sx={{ mb: 3 }} />
    <Scrollbar>
    <TableContainer sx={{ minWidth: 720 }}>
        <Table>
        <TableHead>
            <TableRow>
                <TableCell>Appointment ID</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Patient</TableCell>
                <TableCell>Doctor</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Purpose</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {appointments.map((row, i) => {
                console.log(row);
                return (
                  <TableRow key={i}>
                    <TableCell>{row.appointment.split('#')[1]}</TableCell>
                    <TableCell>{row.type.split('#')[1]}</TableCell>
                    <TableCell>{row.patientName}</TableCell>
                    <TableCell>{row.doctorName}</TableCell>
                    <TableCell>{row.dateTime.split('^^')[0].split('T')[0]}</TableCell>
                    <TableCell>{row.dateTime.split('^^')[0].split('T')[1]}</TableCell>
                    <TableCell>{row.purpose.split('^^')[0]}</TableCell>
                  </TableRow>
                );
            })}
        </TableBody>
        </Table>
    </TableContainer>
    </Scrollbar>

      <Divider />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          to="#"
          size="small"
          color="inherit"
          component={RouterLink}
          endIcon={<Icon icon={arrowIosForwardFill} />}
        >
          View All
        </Button>
      </Box>
    </Card>
  );


export default ShowAllTable;