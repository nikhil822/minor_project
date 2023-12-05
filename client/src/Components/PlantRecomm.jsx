import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/PlantRecomm.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";
import NavbarWithLogin from "./NavbarWithLogin";

const MyComponent = () => {
  const {state} = useLocation()
  const nameFromAirQuality = state && state.name;
  // console.log(state)
  const [jsonData, setJsonData] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [selectBox, setSelectBox] = useState()
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      if (!localStorage.getItem("user-app")) {
        navigate("/login");
      }
      else {
        const p = localStorage.getItem("user-app")
        const userAppObject = JSON.parse(p);
        // console.log(userAppObject.selectedCheckboxes)
        if (userAppObject && userAppObject.selectedCheckboxes) {
          setSelectBox(userAppObject.selectedCheckboxes);
        } else {
          console.error("Invalid user-app data in local storage");
          // Handle the case where the data is incomplete or invalid
        }
      }
    };
    fetch();
  }, []);

  // console.log(selectBox)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./Plants.json");
        const data = await response.json();
        console.log(data)
        
        const filteredData = data.filter((item) => {
          return selectBox.includes(item.suitability)
        })
        setJsonData(filteredData);
        
      } catch (error) {
        console.error("Error fetching or parsing data: ", error);
      }
    };

    fetchData();
  }, [selectBox]);
  
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
      <NavbarWithLogin />
      <h1 className="heading">Plant Recommendation</h1>
      <div className="recomm-info">
        <div className="info">Area: {nameFromAirQuality}</div>
        <div className="info">Suitability: {selectBox?.join(',')}</div>
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
