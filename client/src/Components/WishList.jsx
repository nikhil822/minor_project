import Navbar from "./Navbar";
// import emptyWishlistImage from "./public/Images/heart.png";
import "../Styles/Wishlist.css";
import { useLocation } from "react-router-dom";

const WishList = () => {
  const location = useLocation();
  const { state } = location;
  const wishlistItems = state.key || [];

  if (wishlistItems.length === 0) {
    return (
      <div>
        <Navbar />
        <div className="empty-wishlist">
        <h3>Your wishlist is empty !</h3>
          <img src="../Images/heart.png" alt="Empty Wishlist" />
          
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div>
        {wishlistItems.map((plant) => (
          <div key={plant.id} className="wishlist-item">
            <img src={plant.imageUrl} alt={plant.name} className="wishlist-image" />
            <div className="wishlist-info">
              <h3>{plant.name}</h3>
              <button className="delete-btn">
                Delete
              </button>
            </div>
            <div className="nursery-info">
              <div className="nursery-detail">
                <strong>Nursery:</strong> ABC
              </div>
              <div className="nursery-detail">
                <strong>Rating:</strong> ABC
              </div>
              <div className="nursery-detail">
                <strong>Price Range:</strong> ABC
              </div>
              <div className="nursery-detail-icon"> 
              <i className="fa-solid fa-circle-chevron-right fa-2x"></i>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
