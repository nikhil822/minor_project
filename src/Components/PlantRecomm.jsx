import  { useEffect, useState } from 'react';
import '../Styles/PlantRecomm.css'; // Import your CSS file

const MyComponent = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./Plants.json');
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error('Error fetching or parsing data: ', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="centered-content">
      <h1 className='heading'>Plant Recommendation</h1>
      <div className='recomm-info'>
        <div className='info'>Area:</div>
        <div className='info'>Suitability:</div>
      </div>
      <div className="plant-container">
        {jsonData ? (
          jsonData.map((plant) => (
            <div key={plant.id} className="plant-card">
              <div className="plant-image">
                <img src={plant.imageUrl} alt={plant.name} />
              </div>
              <div className="plant-info">
                <h3>{plant.name}</h3>
                <p>Suitability: {plant.suitability}</p>
                <p>Type: {plant.type}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className='recomm-btn-cont'><button className='recomm-btn'>VIEW NEARBY NURSERY</button></div>
    </div>
  );
};

export default MyComponent;
