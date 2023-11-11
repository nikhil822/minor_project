import "../Styles/NurseryDet.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar"
export default function NurseryDet() {
  const navigate = useNavigate()

  return (
    <>
    <Navbar />
    <div className="main">
      <div className="image">
        <img src="../Images/nurseryimg.png" alt="Form image" />
      </div>
      <div className="form">
        <div className="nursery-icon">
        <i className="fa-brands fa-4x fa-pagelines"></i>       
        </div>

        <div className="head">NURSERY DETAILS</div>
        <div className="form-body">
          <section className="nursery-basic">

            <div className="inp-field">
              <label htmlFor="Nname">Nursery Name</label>
              <input type="text" id="fname" placeholder="Enter Nursery Name" />
            </div>

            <div className="inp-field">
            <label htmlFor="ownername">Owner Name</label>
              <input type="text" id="lname" placeholder="Enter Owner Name" />
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
              <label htmlFor="loc">Plant Speciality</label>
              <select>
                <option>Herbal Plants</option>
                <option>Floral Plants</option>
                <option>vegetables</option>
                <option>Others</option>
              </select>
            </div>

            <div className="inp-field">
              <label htmlFor="photo">Upload Plant/Nursery Photo</label>
              <input
                type="file" accept="image/*"
                id="photo"
               
              />
            </div>

            <div className="inp-field">
              <label htmlFor="g-loc">Enter Google map Location</label>
              <input
                type="text" 
                placeholder="https://maps.app.goo.gl/XYZ"
                id="g-loc"
               
              />
            </div>

          </section>

          <button className="reg" href="#" onClick={() => navigate('/nurseryProfile')}>
            ENLIST NURSERY
          </button>
        </div>
      </div>
    </div>
    </>
    
  );
}

