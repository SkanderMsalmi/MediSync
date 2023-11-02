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
  Typography,
  TableContainer,
  TablePagination,
} from "@material-ui/core";
import { useTheme, styled } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import plusFill from "@iconify/icons-eva/plus-fill";
import { fDate } from "../../utils/formatTime"; // If you have a date formatting function, otherwise use a standard date library
import Label from "src/components/Label";

const TABLE_HEAD = [
  { id: "select", label: "Select", alignRight: false },
  { id: "staffName", label: "Doctor Name", alignRight: false },
  { id: "worksInDepartment", label: "Department", alignRight: false },
  { id: "staffEmploymentDate", label: "Employment Date", alignRight: false },
  { id: "staffContactInfo", label: "Contact", alignRight: false },
  { id: "treatedPatients", label: "Treated Patients", alignRight: false },
  { id: "" },
];

export default function DoctorsList() {
  const theme = useTheme();
  const [doctors, setDoctors] = useState([]);
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const fetchData = (endpoint) => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => setDoctors(data))
      .catch((error) => console.error("Error fetching doctors:", error));
  };

  useEffect(() => {
    // Fetch doctors from the backend
    fetch("http://localhost:8080/hospital/show/jasser/getAllDoctors")
      .then((response) => response.json())
      .then((data) => setDoctors(data))
      .catch((error) => console.error("Error fetching doctors:", error));
  }, []);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = doctors.map((n) => n.staffName);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const filteredDoctors = doctors.filter(
    (doctor) =>
      !filterName ||
      doctor.staffName.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <Container maxWidth="lg">
      <Button
        variant="contained"
        color="primary"
        style={{ marginRight: theme.spacing(1) }}
        onClick={() =>
          fetchData("http://localhost:8080/hospital/show/jasser/getAllDoctors")
        }
      >
        All doctors
      </Button>
      <Box display="flex" justifyContent="center" marginBottom={2}>
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: theme.spacing(1) }}
          onClick={() =>
            fetchData(
              "http://localhost:8080/hospital/show/jasser/getGeneralPractitioners"
            )
          }
        >
          General Practitioners
        </Button>

        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: theme.spacing(1) }}
          onClick={() =>
            fetchData(
              "http://localhost:8080/hospital/show/jasser/getPediatricians"
            )
          }
        >
          Pediatricians
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            fetchData("http://localhost:8080/hospital/show/jasser/getSurgeons")
          }
        >
          Surgeons
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
              {filteredDoctors
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((doctor) => {
                  const isItemSelected =
                    selected.indexOf(doctor.staffName) !== -1;

                  return (
                    <TableRow
                      hover
                      key={doctor.doctor}
                      tabIndex={-1}
                      role="checkbox"
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          onChange={() => {
                            const newSelecteds = [...selected];
                            const selectedIndex = selected.indexOf(
                              doctor.staffName
                            );
                            if (selectedIndex === -1) {
                              newSelecteds.push(doctor.staffName);
                            } else {
                              newSelecteds.splice(selectedIndex, 1);
                            }
                            setSelected(newSelecteds);
                          }}
                        />
                      </TableCell>
                      <TableCell>{doctor.staffName}</TableCell>
                      <TableCell>{doctor.worksInDepartment}</TableCell>
                      <TableCell>{fDate(doctor.staffEmploymentDate)}</TableCell>
                      <TableCell>{doctor.staffContactInfo}</TableCell>

                      <TableCell>
                        {doctor.treatedPatients
                          ? doctor.treatedPatients.split(",").map((e) => {
                              return (
                                <div style={{ marginBottom: "0.5rem" }}>
                                  <Label variant="ghost" color="success">
                                    {e}
                                  </Label>
                                </div>
                              );
                            })
                          : "No Patient Yet"}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={doctors.length}
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
