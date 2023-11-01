/* eslint-disable */
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import axios from 'axios';
import ShowAllTable from '../components/appointments/ShowAllTable';
// utils


// ----------------------------------------------------------------------




import { useLocation } from 'react-router-dom';


export default function Appointment() {
  const [appointments, setAppointments] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // Make an Axios GET request to fetch the data from your endpoint
    axios
      .get('http://localhost:8081/hospital/show/adam/getAllAppointments')
      .then((response) => {
        // Update the state with the fetched data
        setAppointments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);



  // Check if the current route is "/appointments"
  const isAppointmentsRoute = location.pathname === '/dashboard/appointments';
  // Conditionally render components based on the route
  if (isAppointmentsRoute) {
    return <ShowAllTable appointments={appointments} />;
  } else {
    return <Outlet />;
  }
}
