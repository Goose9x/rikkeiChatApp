import "./sign-in.css";
export let loginPage =
  /*html*/`
<div id="login-screen">
    <div class="logo"><img src="./king-logo.png" alt=""></div>
    <div class="login-title">
      <p>Sign in to xKingx Chat</p>
      <div id="loginErrMess"></div>
    </div>
    <div>
      <form id="login-form" action="" class="form-input">
          <span>Email address</span>
          <input type="email" name="email" placeholder="Please enter your email">
          <div id = "login-email-err"></div>
          <span>Password</span>
          <input type="password" name="password"  placeholder="Please enter your password">
          <div id = "login-password-err"></div>
          <button class="login-btn">Login</button>
      </form>
  </div>
  <div class="register-link">
      <p>New to xKingx Chat? Create account</p>
    </div>
    <div class="forgot-password-link">
      <span class="text-fp">Forgot your password ? Click here</span>
    </div>
  </div>`;
