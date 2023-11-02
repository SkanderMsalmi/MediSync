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
  TablePagination,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import { fDate } from "../../utils/formatTime";
import Label from "src/components/Label";

const TABLE_HEAD = [
  { id: "select", label: "Select", alignRight: false },
  { id: "staffName", label: "Technician Name", alignRight: false },
  { id: "worksInDepartment", label: "Department", alignRight: false },
  { id: "staffEmploymentDate", label: "Employment Date", alignRight: false },
  { id: "staffContactInfo", label: "Contact", alignRight: false },
  { id: "operatesEquipment", label: "Equipment", alignRight: false },
  { id: "" },
];

export default function TechniciansList() {
  const theme = useTheme();
  const [technicians, setTechnicians] = useState([]);
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const fetchData = (endpoint) => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => setTechnicians(data))
      .catch((error) => console.error("Error fetching technicians:", error));
  };

  useEffect(() => {
    fetchData("http://localhost:8080/hospital/show/jasser/getAllTechnicians");
  }, []);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = technicians.map((t) => t.staffName);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const filteredTechnicians = technicians.filter(
    (technician) =>
      !filterName ||
      technician.staffName.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <Container maxWidth="lg">
      <Button
        variant="contained"
        color="primary"
        style={{ marginRight: theme.spacing(1) }}
        onClick={() =>
          fetchData(
            "http://localhost:8080/hospital/show/jasser/getAllTechnicians"
          )
        }
      >
        All Technicians
      </Button>
      <Box display="flex" justifyContent="center" marginBottom={2}>
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: theme.spacing(1) }}
          onClick={() =>
            fetchData(
              "http://localhost:8080/hospital/show/jasser/getLabTechnicians"
            )
          }
        >
          Lab Technicians
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            fetchData(
              "http://localhost:8080/hospital/show/jasser/getRadiologyTechnicians"
            )
          }
        >
          Radiology Technicians
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
              {filteredTechnicians
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((technician) => {
                  const isItemSelected =
                    selected.indexOf(technician.staffName) !== -1;

                  return (
                    <TableRow
                      hover
                      key={technician.technician}
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
                              technician.staffName
                            );
                            if (selectedIndex === -1) {
                              newSelecteds.push(technician.staffName);
                            } else {
                              newSelecteds.splice(selectedIndex, 1);
                            }
                            setSelected(newSelecteds);
                          }}
                        />
                      </TableCell>
                      <TableCell>{technician.staffName}</TableCell>
                      <TableCell>{technician.worksInDepartment}</TableCell>
                      <TableCell>
                        {fDate(technician.staffEmploymentDate)}
                      </TableCell>
                      <TableCell>{technician.staffContactInfo}</TableCell>
                      <TableCell>{technician.operatesEquipment}</TableCell>
                      <TableCell>
                        {technician.operatesEquipment
                          ? technician.operatesEquipment.split(",").map((e) => {
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
          count={technicians.length}
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
