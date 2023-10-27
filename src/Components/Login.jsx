import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";

const Login = () => {
    const navigate = useNavigate()

    return (
        <>
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form">
            <label htmlFor="email">Email</label>
            <input
                type="text"
                id="email"
                placeholder="Enter your email"
                required
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                placeholder="Enter your password"
                required
            />
            <button type="submit" onClick={() => navigate('/airquality')}>Login</button>
            </form>
        </div>
        </>
    );
}

export default Login
