/* eslint-disable */
import {
    Box,
    Card,
    Table,
    Button,
    TableRow,
    Checkbox,
    TableBody,
    TableCell,
    Container,
    TableContainer,
    TablePagination
  } from '@material-ui/core';
  import { useTheme } from '@material-ui/core/styles';
  import { useState, useEffect } from 'react';
  import { fDate } from '../../utils/formatTime'; 
  
  const TABLE_HEAD = [
    { id: 'select', label: 'Select', alignRight: false },
    { id: 'patientName', label: 'Patient Name', alignRight: false },
    { id: 'hasAppointment', label: 'Appointment', alignRight: false },
    { id: 'treatedBy', label: 'Treated By', alignRight: false },
    { id: 'patientAddress', label: 'Address', alignRight: false },
    { id: 'hasMedicalRecord', label: 'Medication', alignRight: false },
    { id: 'patientMedicalHistory', label: 'Medical History', alignRight: false },
    { id: '' }
  ];
  
  export default function PatientsList() {
    const theme = useTheme();
    const [patients, setPatients] = useState([]);
    const [page, setPage] = useState(0);
    const [selected, setSelected] = useState([]);
    const [filterName, setFilterName] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(5);
  
    const fetchData = (endpoint) => {
      fetch(endpoint)
        .then((response) => response.json())
        .then((data) => setPatients(data))
        .catch((error) => console.error("Error fetching patients:", error));
    };
  
    useEffect(() => {
      fetchData("http://localhost:8080/hospital/show/jasser/getAllPatients");
    }, []);
  
    const handleSelectAllClick = (event) => {
      if (event.target.checked) {
        const newSelecteds = patients.map((p) => p.patientName);
        setSelected(newSelecteds);
        return;
      }
      setSelected([]);
    };
  
    const handleFilterByName = (event) => {
      setFilterName(event.target.value);
    };
  
    const filteredPatients = patients.filter(
      (patient) => !filterName || patient.patientName.toLowerCase().includes(filterName.toLowerCase())
    );
  
    return (
      <Container maxWidth="lg">
        <Button 
            variant="contained" 
            color="primary" 
            style={{ marginRight: theme.spacing(1) }}
            onClick={() => fetchData("http://localhost:8080/hospital/show/jasser/getAllPatients")}
          >
            All Patients
        </Button>
        <Box display="flex" justifyContent="center" marginBottom={2}>
          <Button 
            variant="contained" 
            color="primary" 
            style={{ marginRight: theme.spacing(1) }}
            onClick={() => fetchData("http://localhost:8080/hospital/show/jasser/getOutPatient")}
          >
            Out Patients
          </Button>
  
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => fetchData("http://localhost:8080/hospital/show/jasser/getInPatient")}
          >
            In Patients
          </Button>
        </Box>
        <Card>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  {TABLE_HEAD.map((headCell) => (
                    <TableCell key={headCell.id}>{headCell.label}</TableCell>
                  ))}
                </TableRow>
              </TableBody>
              <TableBody>
                {filteredPatients.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((patient) => {
                  const isItemSelected = selected.indexOf(patient.patientName) !== -1;
  
                  return (
                    <TableRow
                      hover
                      key={patient.patient}
                      tabIndex={-1}
                      role="checkbox"
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox checked={isItemSelected} onChange={() => {
                          const newSelecteds = [...selected];
                          const selectedIndex = selected.indexOf(patient.patientName);
                          if (selectedIndex === -1) {
                            newSelecteds.push(patient.patientName);
                          } else {
                            newSelecteds.splice(selectedIndex, 1);
                          }
                          setSelected(newSelecteds);
                        }} />
                      </TableCell>
                      <TableCell>{patient.patientName}</TableCell>
                      <TableCell>{patient.hasAppointment}</TableCell>
                      <TableCell>{patient.treatedBy}</TableCell>
                      <TableCell>{patient.patientAddress}</TableCell>
                      <TableCell>{patient.hasMedicalRecord}</TableCell>
                      <TableCell>{patient.patientMedicalHistory}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
  
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={patients.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(event, newPage) => setPage(newPage)}
            onRowsPerPageChange={(event) => {
              setRowsPerPage(parseInt(event.target.value, 10));
              setPage(0);
            }}
          />
        </Card>
      </Container>
    );
  }
  