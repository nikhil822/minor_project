import '../Styles/Footer.css'
function Footer() {
    return (
        <>
            <div className="footer">  
                <div className='footer-icon'>
                    <i className="foot-icon fa-circle fa-stack fab fa-inverse fa-2x fa-twitter"></i>
                    <i className="foot-icon fa-stack fab fa-2x fa-inverse fa-facebook-f"></i>
                    <i className="foot-icon fa-stack fab fa-2x fa-inverse fa-instagram"></i>
                    <i className="foot-icon fa-stack fas fa-2x fa-inverse fa-envelope"></i>
                </div>
                  
                    <br/>
                    <p className="footer-text">©Copyright 2023  EcoReleaf</p>
            </div>
        </>
    )
}
export default Footer