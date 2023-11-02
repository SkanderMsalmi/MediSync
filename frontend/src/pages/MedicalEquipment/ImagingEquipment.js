import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowAllSubMedical from "../../components/medicalEquip/ShowAllSubMedical";

function ImagingEquipment() {
  const [imagingEquipment, setImagingEquipment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const apiUrl =
      "http://localhost:8080/hospital/show/skander/Get_Imaging_Equipment";

    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response);
        setImagingEquipment(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Imaging Equipment data: ", error);
        setIsLoading(false);
      });
    return () => {
      setImagingEquipment([]);
    };
  }, []);
  return (
    <ShowAllSubMedical medicals={imagingEquipment} type="Imaging Equipment" />
  );
}

export default ImagingEquipment;
