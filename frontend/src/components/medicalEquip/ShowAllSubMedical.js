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
import Label from '../Label';

function ShowAllSubMedical({ medicals, type }) {
  return (
    <div>
      <h1 style={{ marginBottom: '2rem' }}>{type}</h1>
      <Card>
        <Scrollbar>
          <TableContainer sx={{ minWidth: 720 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Manu Facturer</TableCell>
                  <TableCell>Purchase Date</TableCell>
                  <TableCell>Operated By</TableCell>
                  <TableCell>Located In Dep</TableCell>
                  <TableCell>Used By Patient</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {medicals.map((row, i) => {
                  console.log(row);
                  return (
                    <TableRow key={i}>
                      <TableCell>{row.sampleName}</TableCell>
                      <TableCell>{row.sampleType.split('#')[1]}</TableCell>
                      <TableCell>
                        {row.sampleStatus === 'Operational' ? (
                          <Button variant="contained" color="success">
                            {row.sampleStatus}
                          </Button>
                        ) : row.sampleStatus === 'Under Maintenance' ? (
                          <Button variant="contained" color="error">
                            {row.sampleStatus}
                          </Button>
                        ) : (
                          <Button variant="contained" color="warning">
                            Not Started Yet
                          </Button>
                        )}
                      </TableCell>
                      <TableCell>{row.sampleManufacturer}</TableCell>
                      <TableCell>{row.samplePurchaseDate.split('^')[0].replace('T', ' at ')}</TableCell>

                      <TableCell>{row.sampleTechnicians}</TableCell>
                      <TableCell>{row.sampleDepartmentNames}</TableCell>
                      <TableCell>
                        {row.samplePatientNames
                          ? row.samplePatientNames.split(',').map((e) => {
                              return (
                                <Label variant="ghost" color="success">
                                  {e}
                                </Label>
                              );
                            })
                          : 'No Patient Yet'}
                      </TableCell>
                      <TableCell>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                          <Button variant="outlined" color="info" style={{ marginRight: '1rem' }}>
                            Edit
                          </Button>
                          <Button variant="outlined" color="error">
                            Delete
                          </Button>
                        </div>
                      </TableCell>
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
    </div>
  );
}

export default ShowAllSubMedical;
