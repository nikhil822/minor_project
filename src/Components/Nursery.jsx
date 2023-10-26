import "../Styles/Nursery.css";
import Navbar from "./Navbar";
export default function Nursery() {
  return (
    <>
    <Navbar />
      <div className="container">
        <div>
          <form action="" className="search-bar">
            <input type="search" name="search" pattern=".*\S.*" required />
            <button className="search-btn" type="submit">
            </button>
          </form>
        </div>
        <div className="nursery-desc">
          <img src="../Images/dam.png" alt="plant" className="n-img" />

          <div className="n-cont">
            <h2>DAM NURSERY - CENTRAL LINE BURLA</h2>
            <h4>
              <span>Address:</span> Central line burla, power house road, Burla,
              Odisha 768017
            </h4>
            <p>
              <span>Phone:</span> 8457091946
            </p>
            <p>
              <span>View Loction:</span>{" "}
              <a href="https://maps.app.goo.gl/yNnvnGDETbPUa7WAA">
                Dam Nursery
              </a>
            </p>
          </div>
        </div>

        <div className="nursery-desc">
          <img src="../Images/plantvilla.png" alt="plant" className="n-img" />

          <div className="n-cont">
            <h2>Plants villa</h2>
            <h4>
              <span>Address:</span>near, Hrisikesh nagar, ladbagicha, Sambalpur,
              Odisha 768004
            </h4>
            <p>
              <span>Phone:</span> 9777225224
            </p>
            <p>
              <span>View Location:</span>
              <a href="https://maps.app.goo.gl/z2vLCU2okLK5P7RZ8">
                Plants villa
              </a>
            </p>
          </div>
        </div>

        <div className="nursery-desc">
          <img src="../Images/horti.png" alt="plant" className="n-img" />

          <div className="n-cont">
            <h2>Horticulture Nursery </h2>
            <h4>
              <span>Address:</span>
              FXG7+2G2, Modipada, Sambalpur, Odisha 768003
            </h4>
            <p>
              <span>Phone:</span> 9857091946
            </p>
            <p>
              <span>View Location:</span>
              <a href="https://maps.app.goo.gl/MS95uNnxmVwAbVv49">
                Horticulture Nursery
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
