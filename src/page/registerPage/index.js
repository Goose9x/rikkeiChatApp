import "./sign-up.css";
export let registerPage =
  /*html*/
  `  
<div id="res-background">
<div class="res-logo"><img src="./king-logo.png" alt=""></div>
<div class="res-title">
    <p>Create New Account</p>
    <div id ="resAlertErr" ></div>
</div>
<div class="perfect-res-height">
    <form action="" id="register-form" class="form-input-register">
        <span>First Name</span>
        <input type="text" name="firstName" placeholder="Please enter your first name">
        <div id= "res-fisrt-name-err"></div>
        
        <span>Last Name</span>
        <input type="text" name="lastName" placeholder="Please enter your last name">
        <div id= "res-last-name-err"></div>
        
        <span>Email address</span>
        <input type="email" name="email" placeholder="Please enter your email">
        <div id= "res-email-err"></div>
        
        <span>Password</span>
        <input type="password" name="password" placeholder="Please enter your password">
        <div id= "res-password-err"></div>
        
        <span>Confirm Your Password</span>
        <input type="password" name="confirmPassword" placeholder="Please confirm your password">
        <div id= "res-confirm-password-err"></div>
        
        <button class="sign-up-btn">Register</button>
    </form>
</div>
<div class="login-again-link">
        <span class="text-fp">Already have account? Click here</span>
</div>
</div>
`;
