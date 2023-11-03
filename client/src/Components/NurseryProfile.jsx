import "../Styles/Nurseryprofile.css";

export default function NurseryProfile() {
  return (
    <>
      <h3 className="profile-head">Your Nursery Profile</h3>
      <div className="profile-container">
      <div className="profile-image-container">
  <img
    src="https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bnVyc2VyeSUyMGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D"
    alt="Profile"
    className="profile-image"
  />
  <div className="image-overlay">
    <button className="edit-pic-btn">
      <i className="fa-solid fa-pen-to-square fa-2x"></i>Edit Photo
    </button>
  </div>
</div>


        <div className="profile-content">
          <div className="profile-item">
            <span>
              <i className="fa-brands fa-pagelines fa-2x"></i>
            </span>
            <span>
              Nursery Name: <span>ABC</span>
            </span>
            <button className="edit-btn">
              <i className="fa-solid fa-pen-to-square fa-2x"></i>
            </button>
          </div>

          <div className="profile-item">
            <span>
              <i className="fa-solid fa-user fa-2x"></i>
            </span>
            <span>
              Owner Name: <span>ABC</span>
            </span>
            <button className="edit-btn">
              <i className="fa-solid fa-pen-to-square fa-2x"></i>
            </button>
          </div>

          <div className="profile-item">
            <span>
              <i className="fa-solid fa-envelope fa-2x"></i>
            </span>
            <span>
              Email: <span>ABC</span>
            </span>
            <button className="edit-btn">
              <i className="fa-solid fa-pen-to-square fa-2x"></i>
            </button>
          </div>

          <div className="profile-item">
            <span>
              <i className="fa-solid fa-location-dot fa-2x"></i>
            </span>
            <span>
              Address: <span>ABC</span>
            </span>
            <button className="edit-btn">
              <i className="fa-solid fa-pen-to-square fa-2x"></i>
            </button>
          </div>

          <div className="profile-item">
            <span>
              <i className="fa-solid fa-seedling fa-2x"></i>
            </span>
            <span>
              Plant Speciality: <span>ABC</span>
            </span>
            <button className="edit-btn">
              <i className="fa-solid fa-pen-to-square fa-2x"></i>
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
