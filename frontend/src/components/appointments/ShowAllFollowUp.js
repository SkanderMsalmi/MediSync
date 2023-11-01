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

const ShowAllFollowUp = ({ appointments }) => (
  <Card>
    <CardHeader title="Follow Ups" sx={{ mb: 3 }} />
    <Scrollbar>
    <TableContainer sx={{ minWidth: 720 }}>
        <Table>
        <TableHead>
            <TableRow>
                <TableCell>Appointment ID</TableCell>
                <TableCell>Patient</TableCell>
                <TableCell>Doctor</TableCell>
                <TableCell>Purpose</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Time</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {appointments.map((row, i) => {
                console.log(row);
                return (
                  <TableRow key={i}>
                    <TableCell>{row.followUp.split('#')[1]}</TableCell>
                    <TableCell>{row.patientName}</TableCell>
                    <TableCell>{row.doctorName}</TableCell>
                    <TableCell>{row.purpose}</TableCell>
                    <TableCell>{row.dateTime.split('^^')[0].split(' ')[0]}</TableCell>
                    <TableCell>{row.dateTime.split('^^')[0].split(' ')[1]}</TableCell>
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


export default ShowAllFollowUp;