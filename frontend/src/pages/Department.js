/* eslint-disable */
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import axios from 'axios';
// utils


// ----------------------------------------------------------------------




import { useLocation } from 'react-router-dom';
import ShowAllDep from '../components/departments/ShowAllDep';
import { Button, Divider } from '@material-ui/core';


export default function Department() {
  const [departments, setDepartments] = useState([]);

  const location = useLocation();

  useEffect(() => {
    // Make an Axios GET request to fetch the data from your endpoint
getAllDepartments();
  }, []);
  const getAllDepartments = () => {
    axios
      .get('http://localhost:8081/hospital/show/adam/getAllDepartments')
      .then((response) => {
        // Update the state with the fetched data
        setDepartments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  const filterBySurgicalEquipment = () => {
    axios
    .get('http://localhost:8081/hospital/show/adam/getFilteredDepartmentBySurgicalEquipment')
    .then((response) => {
      // Update the state with the fetched data
      setDepartments(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  }
  const filterByImagingEquipment = () => {
    axios
    .get('http://localhost:8081/hospital/show/adam/getFilteredDepartmentByImagingEquipment')
    .then((response) => {
      // Update the state with the fetched data
      setDepartments(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  }
  

  // Check if the current route is "/departments"
  const isDepartmentsRoute = location.pathname === '/dashboard/department';
  // Conditionally render components based on the route
  if (isDepartmentsRoute) {
    return <>    
    <div style={{display:"flex", justifyContent:"space-between"}}>
      <Button variant="contained" onClick={(event) => {
        event.preventDefault();
        filterBySurgicalEquipment();
      }}>
        Show Departments with surgical equipment
      </Button>
      <Button variant="contained" onClick={(event) => {
        event.preventDefault();
        filterByImagingEquipment();
      }}>
        Show Departments with imaging equipment
      </Button>
      <Button variant="contained"  onClick={(event) => {
        event.preventDefault();
        getAllDepartments();
      }}>
Reset      </Button>
</div>
      <Divider style={{marginTop:"1rem",marginBottom:"1rem"}}/>
      <ShowAllDep departments={departments} />
    </>;

  } else {
    return <Outlet />;
  }
}
