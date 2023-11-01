/* eslint-disable */
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import axios from 'axios';
// utils


// ----------------------------------------------------------------------




import { useLocation } from 'react-router-dom';
import ShowAllDep from '../components/departments/ShowAllDep';


export default function Department() {
  const [departments, setDepartments] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // Make an Axios GET request to fetch the data from your endpoint
    axios
      .get('http://localhost:8081/hospital/show/adam/getAllDepartments')
      .then((response) => {
        // Update the state with the fetched data
        setDepartments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);



  // Check if the current route is "/departments"
  const isDepartmentsRoute = location.pathname === '/dashboard/department';
  // Conditionally render components based on the route
  if (isDepartmentsRoute) {
    return <ShowAllDep departments={departments} />;
  } else {
    return <Outlet />;
  }
}
