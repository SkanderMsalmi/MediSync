import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowAllSubMedical from '../../components/medicalEquip/ShowAllSubMedical';

function SurgicalEquipment() {
  const [surgicalEquipment, setSurgicalEquipment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiUrl = 'http://localhost:8080/hospital/show/skander/Get_Surgical_Equipment';

    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response);
        setSurgicalEquipment(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching Surgical Equipment data: ', error);
        setIsLoading(false);
      });
    return () => {
      setSurgicalEquipment([]);
    };
  }, []);
  return <ShowAllSubMedical medicals={surgicalEquipment} type="Surgical Equipment" />;
}

export default SurgicalEquipment;
