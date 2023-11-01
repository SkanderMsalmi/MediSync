/* eslint-disable */
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import axios from "axios";
import ShowAllTable from "../components/appointments/ShowAllTable";
// utils

// ----------------------------------------------------------------------

import { useLocation } from "react-router-dom";
import { Button, Divider } from "@material-ui/core";

export default function Appointment() {
  const [appointments, setAppointments] = useState([]);
  const location = useLocation();
  const getAllAppointments = () => {
    axios
      .get("http://localhost:8080/hospital/show/adam/getAllAppointments")
      .then((response) => {
        // Update the state with the fetched data
        setAppointments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  useEffect(() => {
    // Make an Axios GET request to fetch the data from your endpoint
    getAllAppointments();
  }, []);
  const getFilteredByDoctors = () => {
    axios
      .get(
        "http://localhost:8080/hospital/show/adam/getFilteredAppointmentByDoctor"
      )
      .then((response) => {
        // Update the state with the fetched data
        setAppointments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const getFilteredByNurses = () => {
    axios
      .get(
        "http://localhost:8080/hospital/show/adam/getFilteredAppointmentByNurse"
      )
      .then((response) => {
        // Update the state with the fetched data
        setAppointments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const getFilteredByMonth = () => {
    axios
      .get(
        "http://localhost:8080/hospital/show/adam/getFilteredAppointmentByMonth"
      )
      .then((response) => {
        // Update the state with the fetched data
        setAppointments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // Check if the current route is "/appointments"
  const isAppointmentsRoute = location.pathname === "/dashboard/appointments";
  // Conditionally render components based on the route
  if (isAppointmentsRoute) {
    return (
      <>
        {" "}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="contained"
            onClick={(event) => {
              event.preventDefault();
              getFilteredByDoctors();
            }}
          >
            Show Appointments with doctors
          </Button>
          <Button
            variant="contained"
            onClick={(event) => {
              event.preventDefault();
              getFilteredByNurses();
            }}
          >
            Show Appointments with nurses
          </Button>
          <Button
            variant="contained"
            onClick={(event) => {
              event.preventDefault();
              getFilteredByMonth();
            }}
          >
            Show this month's Appointments
          </Button>
          <Button
            variant="contained"
            onClick={(event) => {
              event.preventDefault();
              getAllAppointments();
            }}
          >
            Reset{" "}
          </Button>
        </div>
        <Divider style={{ marginTop: "1rem", marginBottom: "1rem" }} />
        <ShowAllTable appointments={appointments} />
      </>
    );
  } else {
    return <Outlet />;
  }
}
