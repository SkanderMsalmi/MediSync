import React, { useState } from 'react';
import axios from 'axios';

function Hospital() {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchHospitals = async () => {
    setLoading(true);

    try {
      const response = await axios.get('http://localhost:8080/hospital/show/houssem/get_hospitals');
      setHospitals(response.data);
    } catch (error) {
      console.error('Error fetching hospitals:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPublicHospitals = async () => {
    setLoading(true);

    try {
      const response = await axios.get('http://localhost:8080/hospital/show/houssem/get_public_hospitals');
      setHospitals(response.data);
    } catch (error) {
      console.error('Error fetching public hospitals:', error);
    } finally {
      setLoading(false);
    }
  };
  const fetchPrivateHospitals = async () => {
    setLoading(true);

    try {
      const response = await axios.get('http://localhost:8080/hospital/show/houssem/get_private_hospitals');
      setHospitals(response.data);
    } catch (error) {
      console.error('Error fetching public hospitals:', error);
    } finally {
      setLoading(false);
    }
  };
  const fetchHospitalWithCardiologyDep = async () => {
    setLoading(true);

    try {
      const response = await axios.get('http://localhost:8080/hospital/show/houssem/get_hospital_with_cardiology_dep');
      setHospitals(response.data);
    } catch (error) {
      console.error('Error fetching public hospitals:', error);
    } finally {
      setLoading(false);
    }
  };
  const fetchHospitalWithNeurologyDep = async () => {
    setLoading(true);

    try {
      const response = await axios.get('http://localhost:8080/hospital/show/houssem/get_hospital_with_neurology_dep');
      setHospitals(response.data);
    } catch (error) {
      console.error('Error fetching public hospitals:', error);
    } finally {
      setLoading(false);
    }
  };
  const fetchHospitalsThatHavePharmacy = async () => {
    setLoading(true);

    try {
      const response = await axios.get('http://localhost:8080/hospital/show/houssem/get_hospitals_that_have_pharmacy');
      setHospitals(response.data);
    } catch (error) {
      console.error('Error fetching public hospitals:', error);
    } finally {
      setLoading(false);
    }
  };
  const fetchHospitalWithMoreThan200beds = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        'http://localhost:8080/hospital/show/houssem/get_hospital_with_more_than_200beds'
      );
      setHospitals(response.data);
    } catch (error) {
      console.error('Error fetching public hospitals:', error);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to extract the number from a string like "140^^http://www.w3.org/2001/XMLSchema#integer"
  const extractNumber = (str) => {
    const parts = str.split('^^');
    return parts[0];
  };

  const styles = {
    header: {
      textAlign: 'center',
      fontSize: '24px',
      marginBottom: '20px'
    },
    fetchButton: {
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      marginRight: '10px',
      marginTop: '10px'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      borderSpacing: 0,
      marginTop: '20px'
    },
    th: {
      padding: '12px',
      textAlign: 'left',
      borderBottom: '1px solid #ddd',
      backgroundColor: '#f2f2f2'
    },
    td: {
      padding: '12px',
      textAlign: 'left',
      borderBottom: '1px solid #ddd'
    }
  };

  return (
    <div>
      <h1 style={styles.header}>Hospitals</h1>
      <button onClick={fetchHospitals} disabled={loading} style={styles.fetchButton}>
        Show All Hospitals
      </button>
      <button onClick={fetchPublicHospitals} disabled={loading} style={styles.fetchButton}>
        Show Public Hospitals
      </button>
      <button onClick={fetchPrivateHospitals} disabled={loading} style={styles.fetchButton} my-2>
        Show Private Hospitals
      </button>
      <button onClick={fetchHospitalWithCardiologyDep} disabled={loading} style={styles.fetchButton}>
        Show Hospitals With Cardiology Department
      </button>
      <button onClick={fetchHospitalWithNeurologyDep} disabled={loading} style={styles.fetchButton}>
        Show Hospitals With Neurology Department
      </button>
      <button onClick={fetchHospitalsThatHavePharmacy} disabled={loading} style={styles.fetchButton} mt-4>
        Show Hospitals With Pharmacy
      </button>
      <button onClick={fetchHospitalWithMoreThan200beds} disabled={loading} style={styles.fetchButton}>
        Show Hospitals With More Than 200 Beds
      </button>
      {loading && <p>Loading...</p>}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Hospital Name</th>
            <th style={styles.th}>Hospital Type</th>
            <th style={styles.th}>Hospital Address</th>
            <th style={styles.th}>Hospital Beds</th>
            <th style={styles.th}>Department Name</th>
            <th style={styles.th}>Hospital Contact</th>
            <th style={styles.th}>Managed Pharmacy Name</th>
          </tr>
        </thead>
        <tbody>
          {hospitals.map((hospital, index) => (
            <tr key={index}>
              <td style={styles.td}>{hospital.hospitalName}</td>
              <td style={styles.td}>{hospital.hospitalType.replace('http://www.medisync.com#', '')}</td>
              <td style={styles.td}>{hospital.hospitalAddress}</td>
              <td style={styles.td}>{extractNumber(hospital.hospitalBeds)}</td>
              <td style={styles.td}>{hospital.departmentName}</td>
              <td style={styles.td}>{hospital.hospitalContact}</td>
              <td style={styles.td}>{hospital.managedPharmacyName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Hospital;
