import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/PlantRecomm.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const MyComponent = () => {
  const [jsonData, setJsonData] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./Plants.json");
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error("Error fetching or parsing data: ", error);
      }
    };

    fetchData();
  }, []);

  const addToWishlist = (plant) => {
    setWishlist([...wishlist, plant]);
    toast.success("Item added to wishlist!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000, 
    });
  };

  // const removeFromWishlist = (id) => {
  //   const updatedWishlist = wishlist.filter((item) => item.id !== id);
  //   setWishlist(updatedWishlist);
  // };

  const handleViewWishlist = () => {
    const data = {
      key: wishlist
    };
    navigate("/wishlist", { state: data });
  };

  return (
    <div className="centered-content">
      <Navbar />
      <h1 className="heading">Plant Recommendation</h1>
      <div className="recomm-info">
        <div className="info">Area:</div>
        <div className="info">Suitability:</div>
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
              </div>{" "}
              <button
                className="add-to-wishlist-btn"
                onClick={() => addToWishlist(plant)}
              >
                <i className="fa-solid fa-circle-plus fa-xl"></i> Add to Wishlist
              </button>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
        <div className="recomm-btn-cont">
          <button className="recomm-btn" onClick={() => navigate("/nursery")}>
            VIEW NEARBY NURSERY
          </button>
          <button className="recomm-btn" onClick={handleViewWishlist}>
            VIEW WISHLIST
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyComponent;
