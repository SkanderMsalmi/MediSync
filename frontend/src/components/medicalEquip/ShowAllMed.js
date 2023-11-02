/* eslint-disable */
import React, { useState } from "react";
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

import Scrollbar from "../Scrollbar";
import Label from "../Label";
function ShowAllMed({ equipments }) {
  console.log(equipments);
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <Card>
        <CardHeader title=" Equipment" sx={{ mb: 3 }} />
        <Scrollbar>
          <TableContainer sx={{ minWidth: 720 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>

                  <TableCell>Status</TableCell>
                  <TableCell>Manu Facturer</TableCell>
                  <TableCell>Purchase Date</TableCell>
                  <TableCell>Operated By</TableCell>
                  <TableCell>Located In Departement</TableCell>
                  <TableCell>Used By Patient</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {equipments.map((row, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell>{row.sampleName}</TableCell>

                      <TableCell>
                        {row.sampleStatus === "Operational" ? (
                          <Button variant="contained" color="success">
                            {row.sampleStatus}
                          </Button>
                        ) : row.sampleStatus === "Under Maintenance" ? (
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
                      <TableCell>
                        {row.samplePurchaseDate
                          .split("^")[0]
                          .replace("T", " at ")}
                      </TableCell>

                      <TableCell>Tech. {row.sampleTechnicians}</TableCell>
                      <TableCell>{row.sampleDepartmentNames}</TableCell>
                      <TableCell>
                        {row.samplePatientNames
                          ? row.samplePatientNames.split(",").map((e) => {
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
      </Card>
    </div>
  );
}

export default ShowAllMed;
