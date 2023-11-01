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
  { id: 'staffName', label: 'Nurse Name', alignRight: false },
  { id: 'worksInDepartment', label: 'Department', alignRight: false },
  { id: 'staffEmploymentDate', label: 'Employment Date', alignRight: false },
  { id: 'staffContactInfo', label: 'Contact', alignRight: false },
  { id: 'treatedPatients', label: 'Assisted Patients', alignRight: false },
  { id: '' }
];

export default function NursesList() {
  const theme = useTheme();
  const [nurses, setNurses] = useState([]);
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const fetchData = (endpoint) => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => setNurses(data))
      .catch((error) => console.error("Error fetching nurses:", error));
  };

  useEffect(() => {
    fetchData("http://localhost:8080/hospital/show/jasser/getAllNurses");
  }, []);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = nurses.map((n) => n.staffName);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const filteredNurses = nurses.filter(
    (nurse) => !filterName || nurse.staffName.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <Container maxWidth="lg">
      <Button 
          variant="contained" 
          color="primary" 
          style={{ marginRight: theme.spacing(1) }}
          onClick={() => fetchData("http://localhost:8080/hospital/show/jasser/getAllNurses")}
        >
          All Nurses
        </Button>
      <Box display="flex" justifyContent="center" marginBottom={2}>
        <Button 
          variant="contained" 
          color="primary" 
          style={{ marginRight: theme.spacing(1) }}
          onClick={() => fetchData("http://localhost:8080/hospital/show/jasser/getHeadNurses")}
        >
          Head Nurses
        </Button>

        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => fetchData("http://localhost:8080/hospital/show/jasser/getRegisteredNurses")}
        >
          Registered Nurses
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
              {filteredNurses.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((nurse) => {
                const isItemSelected = selected.indexOf(nurse.staffName) !== -1;

                return (
                  <TableRow
                    hover
                    key={nurse.nurse}
                    tabIndex={-1}
                    role="checkbox"
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox checked={isItemSelected} onChange={() => {
                        const newSelecteds = [...selected];
                        const selectedIndex = selected.indexOf(nurse.staffName);
                        if (selectedIndex === -1) {
                          newSelecteds.push(nurse.staffName);
                        } else {
                          newSelecteds.splice(selectedIndex, 1);
                        }
                        setSelected(newSelecteds);
                      }} />
                    </TableCell>
                    <TableCell>{nurse.staffName}</TableCell>
                    <TableCell>{nurse.worksInDepartment}</TableCell>
                    <TableCell>{nurse.staffEmploymentDate}</TableCell>
                    <TableCell>{nurse.staffContactInfo}</TableCell>
                    <TableCell>{nurse.assistedPatients}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={nurses.length}
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
