import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowAllSubPharmacy from '../../components/pharmacy/ShowAllSubPharmacy';

function OutHospital() {
  const [outpatientPharmacyData, setOutpatientPharmacyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiUrl = 'http://localhost:8080/hospital/show/skander/Get_OutPatient_Pharmacy';

    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response);
        setOutpatientPharmacyData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching Outpatient Pharmacy data: ', error);
        setIsLoading(false);
      });
    return () => {
      setOutpatientPharmacyData([]);
    };
  }, []);
  return <ShowAllSubPharmacy pharmacy={outpatientPharmacyData} type="Out Patient" />;
}

export default OutHospital;
