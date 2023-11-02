import axios from "axios";
import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import ShowAllMed from "../components/medicalEquip/ShowAllMed";
import { Button, Divider } from "@material-ui/core";
function MedicalEquipment() {
  const [medicalEquipment, setMedicalEquipment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  const Get_All_Medical_Equipment = () => {
    const apiUrl =
      "http://localhost:8080/hospital/show/skander/Get_All_Medical_Equipment";
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response);
        setMedicalEquipment(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    // Define the URL

    // Make the GET request
    Get_All_Medical_Equipment();
    return () => {
      setMedicalEquipment([]);
    };
  }, []);

  const get_Scalpel_Equip = () => {
    axios
      .get("http://localhost:8080/hospital/show/skander/Get_Scalpel_Equip")
      .then((response) => {
        // Update the state with the fetched data
        setMedicalEquipment(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const filter_Surgical_Equip = () => {
    axios
      .get("http://localhost:8080/hospital/show/skander/Get_Surgical_Robot")
      .then((response) => {
        // Update the state with the fetched data
        setMedicalEquipment(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const isMedEquipRoute = location.pathname === "/dashboard/medical-equipment";
  if (isMedEquipRoute) {
    return (
      <>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="contained"
            onClick={(event) => {
              event.preventDefault();
              get_Scalpel_Equip();
            }}
          >
            Show Scalpel Equipment
          </Button>
          <Button
            variant="contained"
            onClick={(event) => {
              event.preventDefault();
              filter_Surgical_Equip();
            }}
          >
            Show Surgical Equip
          </Button>
          <Button
            variant="contained"
            onClick={(event) => {
              event.preventDefault();
              Get_All_Medical_Equipment();
            }}
          >
            Reset{" "}
          </Button>
        </div>
        <Divider style={{ marginTop: "1rem", marginBottom: "1rem" }} />
        <ShowAllMed equipments={medicalEquipment} />
      </>
    );
  }
  return <Outlet />;
}

export default MedicalEquipment;
