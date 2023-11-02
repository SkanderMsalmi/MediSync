import React, { useState, useEffect } from "react";
import axios from "axios";
import { Outlet, useLocation } from "react-router-dom";
import ShowAllPharmacy from "../components/pharmacy/ShowAllPharmacy";
import { Button, Divider } from "@material-ui/core";

function Pharmacy() {
  const [pharmacyData, setPharmacyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const get_Pharmacy_InHospital = () => {
    axios
      .get(
        "http://localhost:8080/hospital/show/skander/Get_In_Hospital_Pharmacy"
      )
      .then((response) => {
        // Update the state with the fetched data
        setPharmacyData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const get_Pharmacy_outPatient = () => {
    axios
      .get(
        "http://localhost:8080/hospital/show/skander/Get_OutPatient_Pharmacy"
      )
      .then((response) => {
        // Update the state with the fetched data
        setPharmacyData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const get_Order_Pharmacy = () => {
    axios
      .get("http://localhost:8080/hospital/show/skander/Get_Pharmacy_Order")
      .then((response) => {
        // Update the state with the fetched data
        setPharmacyData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const get_all_pharmacies = () => {
    const apiUrl = "http://localhost:8080/hospital/show/skander/Get_Pharmacy";
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response);
        setPharmacyData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Pharmacy data: ", error);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    get_all_pharmacies();

    return () => {
      setPharmacyData([]);
    };
  }, []);
  const isPharmacyRoute = location.pathname === "/dashboard/pharmacy";
  if (isPharmacyRoute) {
    return (
      <div style={{ padding: "2rem" }}>
        <h1 style={{ marginBottom: "2rem" }}>Pharmacy</h1>
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
              get_Pharmacy_InHospital();
            }}
          >
            Show In Hospital Pharmacy
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={(event) => {
              event.preventDefault();
              get_Pharmacy_outPatient();
            }}
          >
            Show Out Patient Pharmacy
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={(event) => {
              event.preventDefault();
              get_Order_Pharmacy();
            }}
          >
            Order By Name |
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={(event) => {
              event.preventDefault();
              get_all_pharmacies();
            }}
          >
            Reset{" "}
          </Button>
        </div>
        <Divider style={{ marginTop: "1rem", marginBottom: "1rem" }} />
        <ShowAllPharmacy pharmacys={pharmacyData} />{" "}
      </div>
    );
  }
  return (
    <div style={{ padding: "2rem" }}>
      <Outlet />
    </div>
  );
}

export default Pharmacy;
