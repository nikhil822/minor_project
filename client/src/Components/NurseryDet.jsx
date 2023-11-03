import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "../Styles/NurseryDet.css";
import Navbar from "./Navbar";
import { nRegisterRoute } from "../utils/APIRoutes";
import { useEffect, useState } from "react";

export default function NurseryDet() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    nurseryname: "",
    ownername: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
    state: "",
    city: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    if (localStorage.getItem("nursery-app")) {
      navigate("/login");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    console.log("validate");
    const { email, password, confirmPassword } = values;
    if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password should be same.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(values);
    if (handleValidation()) {
      const {
        nurseryname,
        ownername,
        email,
        password,
        phone,
        address,
        state,
        city,
      } = values;
      const { data } = await axios.post(
        nRegisterRoute,
        {
          nurseryname,
          ownername,
          email,
          password,
          phone,
          address,
          state,
          city,
        },
        {
          withCredentials: true,
        }
      );
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem("nursery-app", JSON.stringify(data.user));
        navigate("/nurseryprofile");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="main">
        <div className="image">
          <img src="../Images/nurseryimg.png" alt="Form image" />
        </div>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <div className="form">
            <div className="nursery-icon">
              <i className="fa-brands fa-4x fa-pagelines"></i>
            </div>

            <div className="head">NURSERY DETAILS</div>
            <div className="form-body">
              <section className="nursery-basic">
                <div className="inp-field">
                  <label htmlFor="Nname">Nursery Name</label>
                  <input
                    type="text"
                    name="nurseryname"
                    placeholder="Enter Nursery Name"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="inp-field">
                  <label htmlFor="ownername">Owner Name</label>
                  <input
                    type="text"
                    name="ownername"
                    placeholder="Enter Owner Name"
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="inp-field">
                  <label htmlFor="Phonenum">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter Phone Number"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="inp-field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="inp-field">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="inp-field">
                  <label htmlFor="confirmPwd">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="inp-field">
                  <label htmlFor="addr">Address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter address"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="inp-field">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    name="state"
                    placeholder="Enter State"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="inp-field">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter City"
                    onChange={(e) => handleChange(e)}
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
                  <input type="file" accept="image/*" id="photo" />
                </div>
              </section>

              <button className="reg">ENLIST NURSERY</button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}
