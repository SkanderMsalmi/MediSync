import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowAllSubPharmacy from '../../components/pharmacy/ShowAllSubPharmacy';

function InHospital() {
  const [inHospitalPharmacyData, setInHospitalPharmacyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiUrl = 'http://localhost:8080/hospital/show/skander/Get_In_Hospital_Pharmacy';

    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response);
        setInHospitalPharmacyData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching In-Hospital Pharmacy data: ', error);
        setIsLoading(false);
      });
    return () => {
      setInHospitalPharmacyData([]);
    };
  }, []);
  return <ShowAllSubPharmacy pharmacy={inHospitalPharmacyData} type="In Hospital" />;
}

export default InHospital;
