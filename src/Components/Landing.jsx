import Navbar from "./Navbar";
import "../Styles/Landing.css";
import ProdDesc from "./ProdDesc";
import Footer from "./Footer";

function Landing() {
  return (
    <>
      <Navbar />
      <div className="container-top">
        <img src="../Images/leafbg.png" className="cont-top" alt="Background" />
        <div className="text-overlay">
          {/* <h2>ECORELEAF</h2> */}
          <h3 className="quote-top">“To plant a garden is to believe in tomorrow.”</h3>

          <p>
            Join EcoReleaf as we try to combat pollution by making the earth a more green place.
          </p>
          <div>
            <h2>JOIN US AS </h2>
          <button className="join-btn">CONTRIBUTOR</button>
          <button className="join-btn">NURSERY OWNER</button>
          </div>
          
        </div>
      </div>
      <ProdDesc />
      <div className="feature-cont">
        <div className="feature">
           <div className="num">01</div>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>
        <div className="feature">
        <div className="num">02</div>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>
        <div className="feature">
        <div className="num">03</div>

          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
