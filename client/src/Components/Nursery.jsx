import "../Styles/Nursery.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function Nursery() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container">
        {/* search bar */}
        <div>
          <form action="" className="search-bar">
            <input
              type="search"
              name="search"
              pattern=".*\S.*"
              required
              placeholder="Search..."
            />
            <button className="search-btn" type="submit">
              <i className="fa-solid fa-search"></i>
            </button>
          </form>
        </div>

        <div className="nursery-desc">
          <div className="n-img-container">
            <img src="../Images/dam.png" alt="plant" className="n-img" />
          </div>
          <div className="n-info">
            <h2>DAM NURSERY - CENTRAL LINE BURLA</h2>
            <div className="n-details">
              <div className="n-detail">
                <i className="fa-solid fa-address-card n-icon fa-2xl"></i>
                <span>Address:</span> Central line burla, power house road,
                Burla, Odisha 768017
              </div>
              <div className="n-detail">
                <i className="fa-solid fa-square-phone n-icon fa-2xl"></i>
                <span>Phone:</span> 8457091946
              </div>
              {/* <div className="n-detail">
                <i className="fa-solid fa-indian-rupee-sign n-icon fa-2xl"></i>
                <span>Price Range:</span> $300 - $500
              </div>
              <div className="n-detail">
                <i className="fa-solid fa-star-half-stroke n-icon fa-2xl"></i>
                <span>Rating:</span> 3/5
              </div>
              <div className="n-detail">
                <i className="fa-solid fa-star-half-stroke n-icon fa-2xl"></i>
                <span>Home Delivery:</span> Yes
              </div> */}
              <div className="n-detail">
              <i className="fa-solid fa-location-dot n-icon fa-2xl"></i> 
              <span>View Location:</span>
               <a href="https://maps.app.goo.gl/T9k5Xnio4dPidgVg6">https://maps.app.goo.gl/T9k5Xnio4dPidgVg6</a> 
              </div>

              <div className="n-detail">
                <button onClick={() => navigate("/nurseryDetails")}>
                VIEW DETAILS
                </button>
             
             </div>
            
              </div>
            
          </div>
        </div>

        <div className="nursery-desc">
          <div className="n-img-container">
          <img src="../Images/plantvilla.png" alt="plant" className="n-img" />
          </div>
          <div className="n-info">
          <h2>Plants villa</h2>
            <div className="n-details">
              <div className="n-detail">
                <i className="fa-solid fa-address-card n-icon fa-2xl"></i>
                <span>Address:</span> near, Hrisikesh nagar, ladbagicha, Sambalpur,
              Odisha 768004
              </div>
              <div className="n-detail">
                <i className="fa-solid fa-square-phone n-icon fa-2xl"></i>
                <span>Phone:</span> 9777225224
              </div>
              {/* <div className="n-detail">
                <i className="fa-solid fa-indian-rupee-sign n-icon fa-2xl"></i>
                <span>Price Range:</span> $300 - $500
              </div>
              <div className="n-detail">
                <i className="fa-solid fa-star-half-stroke n-icon fa-2xl"></i>
                <span>Rating:</span> 3/5
              </div> */}
              <div className="n-detail">
              <i className="fa-solid fa-location-dot n-icon fa-2xl"></i> 
              <span>View Location:</span>
               <a href="https://maps.app.goo.gl/T9k5Xnio4dPidgVg6">https://maps.app.goo.gl/T9k5Xnio4dPidgVg6</a> 
              </div>
              <div className="n-detail">
                <button onClick={() => navigate("/nurseryDetails")}>
               VIEW DETAILS
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="nursery-desc">
          <div className="n-img-container">
          <img src="../Images/horti.png" alt="plant" className="n-img" />
          </div>
          <div className="n-info">
          <h2>Horticulture Nursery </h2>
            <div className="n-details">
              <div className="n-detail">
                <i className="fa-solid fa-address-card n-icon fa-2xl"></i>
                <span>Address:</span> FXG7+2G2, Modipada, Sambalpur, Odisha 768003
              </div>
              <div className="n-detail">
                <i className="fa-solid fa-square-phone n-icon fa-2xl"></i>
                <span>Phone:</span> 9857091946
              </div>
              {/* <div className="n-detail">
                <i className="fa-solid fa-indian-rupee-sign n-icon fa-2xl"></i>
                <span>Price Range:</span> $300 - $500
              </div>
              <div className="n-detail">
                <i className="fa-solid fa-star-half-stroke n-icon fa-2xl"></i>
                <span>Rating:</span> 3/5
              </div> */}
              <div className="n-detail">
              <i className="fa-solid fa-location-dot n-icon fa-2xl"></i> 
              <span>View Location:</span>
               <a href="https://maps.app.goo.gl/T9k5Xnio4dPidgVg6">https://maps.app.goo.gl/T9k5Xnio4dPidgVg6</a> 
              </div>
              <div className="n-detail">
                <button onClick={() => navigate("/nurseryDetails")}>
                VIEW DETAILS
                </button>
              </div>
            </div>
          </div>
        </div>


  
      </div>
    </>
  );
}
