import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import ShowAllMed from '../components/medicalEquip/ShowAllMed';

function MedicalEquipment() {
  const [medicalEquipment, setMedicalEquipment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Define the URL
    const apiUrl = 'http://localhost:8080/hospital/show/skander/Get_All_Medical_Equipment';

    // Make the GET request
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response);
        setMedicalEquipment(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setIsLoading(false);
      });
    return () => {
      setMedicalEquipment([]);
    };
  }, []);
  const isMedEquipRoute = location.pathname === '/dashboard/medical-equipment';
  if (isMedEquipRoute) {
    return <ShowAllMed equipments={medicalEquipment} />;
  }
  return <Outlet />;
}

export default MedicalEquipment;
