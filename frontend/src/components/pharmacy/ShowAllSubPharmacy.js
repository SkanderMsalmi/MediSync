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

function ShowAllSubPharmacy({ pharmacy, type }) {
  return (
    <div>
      <h1 style={{ marginBottom: "2rem" }}>{type} Pharmacy</h1>
      <Card>
        <Scrollbar>
          <TableContainer sx={{ minWidth: 720 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Location</TableCell>
                  {type === "In Hospital" ? (
                    <TableCell>Located In Hospital</TableCell>
                  ) : (
                    <></>
                  )}

                  <TableCell>Patients</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pharmacy.map((row, i) => {
                  console.log(row);
                  return (
                    <TableRow key={i}>
                      <TableCell>{row.sampleName}</TableCell>

                      <TableCell>{row.sampleLocation}</TableCell>
                      {type === "In Hospital" ? (
                        <TableCell>
                          {" "}
                          {row.sampleHospitals ? (
                            <TableCell>{row.sampleHospitals}</TableCell>
                          ) : (
                            <TableCell>
                              <Label variant="ghost" color="info">
                                Privée
                              </Label>
                            </TableCell>
                          )}
                        </TableCell>
                      ) : (
                        <></>
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
                                  </div>
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

export default ShowAllSubPharmacy;
