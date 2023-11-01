import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ShowAllEmergencyVisit from '../../components/appointments/ShowAllEmergencyVisit';

function EmergencyVisit() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Make an Axios GET request to fetch the data from your endpoint
    axios
      .get('http://localhost:8081/hospital/show/adam/getAllEmergencyVisit')
      .then((response) => {
        // Update the state with the fetched data
        setAppointments(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return <ShowAllEmergencyVisit appointments={appointments} />;
}

export default EmergencyVisit;
