import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowAllRegular from "../../components/appointments/ShowAllRegular";

function RegularCheckup() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Make an Axios GET request to fetch the data from your endpoint
    axios
      .get("http://localhost:8080/hospital/show/adam/getAllRegularCheckup")
      .then((response) => {
        // Update the state with the fetched data
        setAppointments(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return <ShowAllRegular appointments={appointments} />;
}

export default RegularCheckup;
