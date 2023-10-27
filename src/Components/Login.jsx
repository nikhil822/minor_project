import Navbar from "../Components/Navbar"
import '../Styles/Login.css';

export default function Login() {
  return (
    <>
    <Navbar />
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" placeholder="Enter your email" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" required />
        <button type="submit">Login</button>
      </form>
    </div>
    </>
  )
}
