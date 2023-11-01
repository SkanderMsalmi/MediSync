import React, { useState } from 'react';
import axios from 'axios';

function MedicalRecords() {
  const [medicalRecords, setMedicalRecords] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllMedicalRecords = async () => {
    setLoading(true);

    try {
      const response = await axios.get('http://localhost:8080/hospital/show/houssem/get_all_medical_record');
      setMedicalRecords(response.data);
    } catch (error) {
      console.error('Error fetching medical records:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPhysicalMedicalRecords = async () => {
    setLoading(true);

    try {
      const response = await axios.get('http://localhost:8080/hospital/show/houssem/get_physical_medical_record');
      setMedicalRecords(response.data);
    } catch (error) {
      console.error('Error fetching physical medical records:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchDigitalMedicalRecords = async () => {
    setLoading(true);

    try {
      const response = await axios.get('http://localhost:8080/hospital/show/houssem/get_digital_medical_record');
      setMedicalRecords(response.data);
    } catch (error) {
      console.error('Error fetching digital medical records:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMedicalRecordsSortedByDate = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        'http://localhost:8080/hospital/show/houssem/get_all_medical_record_sorted_by_date'
      );
      setMedicalRecords(response.data);
    } catch (error) {
      console.error('Error fetching medical records sorted by date:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMedicalRecordsOfThisMonth = async () => {
    setLoading(true);

    try {
      const response = await axios.get('http://localhost:8080/hospital/show/houssem/get_medical_record_of_this_month');
      setMedicalRecords(response.data);
    } catch (error) {
      console.error('Error fetching medical records of this month:', error);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to extract the date part from the date string
  const extractDate = (str) => {
    const parts = str.split('^^');
    return parts[0];
  };
  const formatRecordDate = (str) => {
    const [date, time] = str.split('T');
    return `${date} ${time}`;
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
      <h1 style={styles.header}>Medical Records</h1>
      <button onClick={fetchAllMedicalRecords} disabled={loading} style={styles.fetchButton}>
        Show All Medical Records
      </button>
      <button onClick={fetchPhysicalMedicalRecords} disabled={loading} style={styles.fetchButton}>
        Show Physical Medical Records
      </button>
      <button onClick={fetchDigitalMedicalRecords} disabled={loading} style={styles.fetchButton}>
        Show Digital Medical Records
      </button>
      <button onClick={fetchMedicalRecordsSortedByDate} disabled={loading} style={styles.fetchButton}>
        Show Medical Records Sorted by Date
      </button>
      <button onClick={fetchMedicalRecordsOfThisMonth} disabled={loading} style={styles.fetchButton}>
        Show Medical Records of This Month
      </button>
      {loading && <p>Loading...</p>}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Medical Record</th>
            <th style={styles.th}>Record Type</th>
            <th style={styles.th}>Record Date</th>
            <th style={styles.th}>Recorded By Doctor</th>
            <th style={styles.th}>Patient Name</th>
            <th style={styles.th}>Record Diagnosis</th>
            <th style={styles.th}>Record Treatment History</th>
            <th style={styles.th}>Record Prescription</th>
          </tr>
        </thead>
        <tbody>
          {medicalRecords.map((record, index) => (
            <tr key={index}>
              <td style={styles.td}>{record.medicalRecord.replace('http://www.medisync.com#', '')}</td>
              <td style={styles.td}>{record.recordType.replace('http://www.medisync.com#', '')}</td>
              <td style={styles.td}>{formatRecordDate(extractDate(record.recordDate))}</td>
              <td style={styles.td}>{record.recordedByDR}</td>
              <td style={styles.td}>{record.patientName}</td>
              <td style={styles.td}>{record.recordDiagnosis}</td>
              <td style={styles.td}>{record.recordTreatmentHistory}</td>
              <td style={styles.td}>{record.recordPrescription}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MedicalRecords;
