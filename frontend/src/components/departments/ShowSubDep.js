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

const ShowSubDep = ({ departments, type }) => (
  <Card>
    <CardHeader title={type} sx={{ mb: 3 }} />
    <Scrollbar>
      <TableContainer sx={{ minWidth: 720 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Department ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Equipment</TableCell>
              <TableCell>Medical Staff</TableCell>
              <TableCell>Patients</TableCell>
              <TableCell>Floor Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {departments.map((row, i) => {
              console.log(row);
              return (
                <TableRow key={i}>
                  <TableCell>{row.department.split("#")[1]}</TableCell>
                  <TableCell>{row.departmentName}</TableCell>
                  <TableCell>
                    {row.equipmentList
                      ? row.equipmentList.split(",").map((e) => {
                          return (
                            <div style={{ marginBottom: "0.5rem" }}>
                              <Label variant="ghost" color="warning">
                                {e}
                              </Label>
                            </div>
                          );
                        })
                      : "No Patient Yet"}
                  </TableCell>
                  <TableCell>
                    {row.medicalStaffList
                      ? row.medicalStaffList.split(",").map((e) => {
                          return (
                            <div style={{ marginBottom: "0.5rem" }}>
                              <Label variant="ghost" color="info">
                                {e}
                              </Label>
                            </div>
                          );
                        })
                      : "No Patient Yet"}
                  </TableCell>
                  <TableCell>
                    {row.patientList
                      ? row.patientList.split(",").map((e) => {
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
    </Scrollbar>

    {departments.length != 0 ? (
      <>
        {" "}
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
      </>
    ) : (
      <div style={{ marginInline: "auto", width: "25%" }}>
        <h2>No departments available</h2>
      </div>
    )}
  </Card>
);

export default ShowSubDep;
