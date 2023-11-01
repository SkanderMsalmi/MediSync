import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ShowAllFollowUp from '../../components/appointments/ShowAllFollowUp';

function FollowUp() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Make an Axios GET request to fetch the data from your endpoint
    axios
      .get('http://localhost:8081/hospital/show/adam/getAllFollowUp')
      .then((response) => {
        // Update the state with the fetched data
        setAppointments(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return <ShowAllFollowUp appointments={appointments} />;
}

export default FollowUp;
