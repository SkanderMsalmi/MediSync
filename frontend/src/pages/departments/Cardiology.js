import React, { useEffect, useState } from 'react';
import ShowSubDep from '../../components/departments/ShowSubDep';
import axios from 'axios';

function Cardiology() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    // Make an Axios GET request to fetch the data from your endpoint
    axios
      .get('http://localhost:8081/hospital/show/adam/getAllCardiology')
      .then((response) => {
        // Update the state with the fetched data
        setDepartments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return <ShowSubDep departments={departments} type="Cardiology"/>;
}

export default Cardiology;
