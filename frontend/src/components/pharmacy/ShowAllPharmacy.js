/* eslint-disable */
import React from "react";
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
  TableContainer,
} from "@material-ui/core";
import { Icon } from "@iconify/react";
import arrowIosForwardFill from "@iconify/icons-eva/arrow-ios-forward-fill";
import { Link as RouterLink } from "react-router-dom";
import Scrollbar from "../Scrollbar";

import Label from "../Label";
function ShowAllPharmacy({ pharmacys }) {
  return (
    <div>
      <h1 style={{ marginBottom: "2rem" }}>Pharmacy </h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="contained"
          onClick={(event) => {
            event.preventDefault();
            filterBySurgicalEquipment();
          }}
        >
          Show Departments with surgical equipment
        </Button>
        <Button
          variant="contained"
          onClick={(event) => {
            event.preventDefault();
            filterByImagingEquipment();
          }}
        >
          Show Departments with imaging equipment
        </Button>
        <Button
          variant="contained"
          onClick={(event) => {
            event.preventDefault();
            getAllDepartments();
          }}
        >
          Reset{" "}
        </Button>
      </div>
      <Card>
        <Scrollbar>
          <TableContainer sx={{ minWidth: 720 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Located In Hospital</TableCell>
                  <TableCell>Patients</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pharmacys.map((row, i) => {
                  console.log(row);
                  return (
                    <TableRow key={i}>
                      <TableCell>{row.sampleName}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color={
                            row.sampleType.split("#")[1].split("_")[0] ==
                            "Outpatient"
                              ? "info"
                              : "primary"
                          }
                        >
                          {row.sampleType.split("#")[1].split("_")[0]}
                        </Button>
                      </TableCell>
                      <TableCell>{row.sampleLocation}</TableCell>
                      {row.sampleHospitals ? (
                        <TableCell>{row.sampleHospitals}</TableCell>
                      ) : (
                        <TableCell>
                          <Label variant="ghost" color="info">
                            Privée
                          </Label>
                        </TableCell>
                      )}
                      <TableCell>
                        {row.samplePatients
                          ? row.samplePatients.split(",").map((e) => {
                              return (
                                <>
                                  <div style={{ marginBottom: "0.5rem" }}>
                                    <Label variant="ghost" color="success">
                                      {e}
                                    </Label>
                                    <br />
                                  </div>{" "}
                                </>
                              );
                            })
                          : "No Patient Yet"}
                      </TableCell>
                      <TableCell>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
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

        <Box sx={{ p: 2, textAlign: "right" }}>
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

export default ShowAllPharmacy;
