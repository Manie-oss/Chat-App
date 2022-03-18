import './Login.css';

function Login() {

  return (
    <>
      <div className = "loginContainer">
          <span>Login to your Account</span>
          <input type = "text" placeholder = "username" ></input>
          <input type = "password" placeholder = "password" ></input>
          <button className='logIn'> Log In</button>
          <a className="signupButton" href="/signup">or Sign Up</a>
      </div>
    </>
  );
}

export default Login;
