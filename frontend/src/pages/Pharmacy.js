import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Outlet, useLocation } from 'react-router-dom';
import ShowAllPharmacy from '../components/pharmacy/ShowAllPharmacy';

function Pharmacy() {
  const [pharmacyData, setPharmacyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const apiUrl = 'http://localhost:8080/hospital/show/skander/Get_Pharmacy';

    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response);
        setPharmacyData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching Pharmacy data: ', error);
        setIsLoading(false);
      });
    return () => {
      setPharmacyData([]);
    };
  }, []);
  const isPharmacyRoute = location.pathname === '/dashboard/pharmacy';
  if (isPharmacyRoute) {
    return (
      <div style={{ padding: '2rem' }}>
        <ShowAllPharmacy pharmacys={pharmacyData} />{' '}
      </div>
    );
  }
  return (
    <div style={{ padding: '2rem' }}>
      <Outlet />
    </div>
  );
}

export default Pharmacy;
