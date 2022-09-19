import "./forgot-password.css";
export let resetPasswordPage = /*html*/ `
<div id="reset">
<div class="logo"><img src="./king-logo.png" alt=""></div>
<div class="forgot-password-title">
    <p>Reset Your Password</p>
    <div id="resetNotification"></div>
</div>
<div>
    <form action="" id="reset-form" class="forgot-form-input">
        <span>Email address</span>
        <input type="email" placeholder="Please enter your email" name="email">
        <div id = "reset-password-err"></div>
        <button class="forgot-btn">Reset Password</button>
    </form>
</div>
<div class="login-link">
    <p class="text-login-link">Already have account? Login here</p>
</div></div>`;
