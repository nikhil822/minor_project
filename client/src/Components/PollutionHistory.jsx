import React, { useEffect, useState } from "react";

const PollutionHistory = () => {
  const [pollutionHistory, setPollutionHistory] = useState([]);

  useEffect(() => {
    // Retrieve pollution history from session storage
    const storedHistory = localStorage.getItem("pollution_history");
    if (storedHistory) {
      // Parse the JSON string to get the pollution history data
      const parsedHistory = JSON.parse(storedHistory);
      setPollutionHistory(parsedHistory);
    }
  }, []);

  return (
    // <h1>hiii</h1>
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Pollution History</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Date/Time</th>
            <th style={styles.tableHeader}>Carbon Monoxide (CO)</th>
            <th style={styles.tableHeader}>Nitrogen Monoxide (NO)</th>
            <th style={styles.tableHeader}>Nitrogen Dioxide (NO2)</th>
            <th style={styles.tableHeader}>Ozone (O3)</th>
            <th style={styles.tableHeader}>Sulphur Dioxide (SO2)</th>
            <th style={styles.tableHeader}>Ammonia (NH3)</th>
          </tr>
        </thead>
        <tbody>
          {pollutionHistory.map((entry, index) => (
            <tr key={index}>
              <td style={styles.tableData}>{entry.dateTime}</td>
              <td style={styles.tableData}>{entry.aqi.co}</td>
              <td style={styles.tableData}>{entry.aqi.no}</td>
              <td style={styles.tableData}>{entry.aqi.no2}</td>
              <td style={styles.tableData}>{entry.aqi.o3}</td>
              <td style={styles.tableData}>{entry.aqi.so2}</td>
              <td style={styles.tableData}>{entry.aqi.nh3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
const styles = {
    tableHeader: {
      backgroundColor: "#f2f2f2",
      padding: "10px",
      border: "1px solid #ddd",
      textAlign: "left"
    },
    tableData: {
      padding: "10px",
      border: "1px solid #ddd",
      textAlign: "left"
    }
  };
export default PollutionHistory;
