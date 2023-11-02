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
  const get_Operational_Equip = () => {
    axios
      .get("http://localhost:8080/hospital/show/skander/Get_Equip_Operationnal")
      .then((response) => {
        // Update the state with the fetched data
        setMedicalEquipment(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const get_Under_Maintenance_Equip = () => {
    axios
      .get(
        "http://localhost:8080/hospital/show/skander/Get_Equip_Under_Maintenance"
      )
      .then((response) => {
        // Update the state with the fetched data
        setMedicalEquipment(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
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
        <h1 style={{ marginBottom: "2rem" }}>Medical Equipment</h1>
        <div
          style={{
            display: "flex",
            marginLeft: "auto",
            marginRight: "auto",
            justifyContent: "space-around",
            width: "80%",
          }}
        >
          <Button
            variant="contained"
            color="info"
            onClick={(event) => {
              event.preventDefault();
              get_Operational_Equip();
            }}
          >
            Show Operational Equipment
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={(event) => {
              event.preventDefault();
              get_Under_Maintenance_Equip();
            }}
          >
            Show Under Maintenance Equipment
          </Button>
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
            color="secondary"
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
