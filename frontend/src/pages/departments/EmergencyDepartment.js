import React, { useEffect, useState } from "react";
import ShowSubDep from "../../components/departments/ShowSubDep";
import axios from "axios";

function EmergencyDepartment() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    // Make an Axios GET request to fetch the data from your endpoint
    axios
      .get("http://localhost:8080/hospital/show/adam/getAllEmergency")
      .then((response) => {
        // Update the state with the fetched data
        setDepartments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return <ShowSubDep departments={departments} type="Emergency Department" />;
}

export default EmergencyDepartment;
