import "../Styles/UserDet.css";

export default function UserDet() {
  return (
    <div className="main">
      <div className="image">
        <img src="../Images/userimg.png" alt="Form image" />
      </div>
      <div className="form">
        <div className="user-icon">
        <i className="fa-solid fa-circle-user fa-4x"></i>
        </div>

        <div className="head">USER DETAILS</div>
        <div className="form-body">
          <section className="basic">

            <div className="inp-field">
              <label htmlFor="fname">Full Name</label>
              <input type="text" id="fname" placeholder="Enter Full Name" />
            </div>
          
            <div className="inp-field">
            <label htmlFor="Phonenum">Phone Number</label>
              <input
                type="tel"
                id="Phonenum"
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="inp-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter Email" />
            </div>
            <div className="inp-field">
              <label htmlFor="password">Password</label>
              <input type="password" id="pwd" placeholder="Enter Password" />
            </div>
            <div className="inp-field">
              <label htmlFor="confirmPwd">Confirm Password</label>
              <input type="password" id="confirmPwd" placeholder="Confirm Password" />
            </div>


            <div className="inp-field">
              <label htmlFor="addr">Address</label>
              <input
                type="text"
                id="addr"
                placeholder="Enter address"
              />
            </div>
            <div className="inp-field">
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                placeholder="Enter State"
              />
            </div>
            <div className="inp-field">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                placeholder="Enter City"
              />
            </div>
            <div className="inp-field">
              <label htmlFor="pincode">Pincode</label>
              <input
                type="text"
                id="pincode"
                placeholder="Enter Pincode"
              />
            </div>
            <div className="inp-field">
              <label htmlFor="loc">Type of Location</label>
              <select>
                <option>Balcony</option>
                <option>Garden</option>
                <option>Farm</option>
              </select>
            </div>
           
          </section>

          <button className="reg" href="#">
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
}
