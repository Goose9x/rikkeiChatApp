import { renderErrorMessage, setActiveScreen, success } from "../view/index";
import { createNewUser } from "../model/index";
import { signInNewUser } from "../model/index";
import { resetPassword } from "../model/index";
import { getDisplayName } from "../model/index";

export function validateLoginInfor(email, password) {
  // regex, regular expression
  // email regex

  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("login-email-err", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("login-email-err", "Invalid email");
  } else {
    renderErrorMessage("login-email-err", "");
  }

  if (!password) {
    renderErrorMessage("login-password-err", "Please enter your password");
  } else {
    renderErrorMessage("login-password-err", "");
  }
  if (email && password) {
    signInNewUser(email, password);
    // getDisplayName();
    success();
    setTimeout(setActiveScreen("chatPage"), 1000);
  }
}
export function validateResetInfor(email) {
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("reset-password-err", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("reset-password-err", "Invalid email");
  } else {
    renderErrorMessage("reset-password-err", "");
    // resetPassword(email);
  }
}
export function validateRegisterInfor(
  firstName,
  lastName,
  email,
  password,
  confirmPassword
) {
  if (!firstName) {
    renderErrorMessage("res-fisrt-name-err", "Please enter your first name");
  } else {
    renderErrorMessage("res-fisrt-name-err", "");
  }
  if (!lastName) {
    renderErrorMessage("res-last-name-err", "Please enter your last name");
  } else {
    renderErrorMessage("res-last-name-err", "");
  }
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("res-email-err", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("res-email-err", "Invalid email");
  } else {
    renderErrorMessage("res-email-err", "");
  }

  if (!password) {
    renderErrorMessage("res-password-err", "Please enter your password");
  } else {
    renderErrorMessage("res-password-err", "");
  }
  if (!confirmPassword) {
    renderErrorMessage(
      "res-confirm-password-err",
      "Please enter your password"
    );
  }
  if (password !== confirmPassword) {
    renderErrorMessage("res-confirm-password-err", "Not match");
  } else {
    renderErrorMessage("res-confirm-password-err", "");
  }
  if (
    firstName &&
    lastName &&
    email &&
    password &&
    confirmPassword &&
    password === confirmPassword
  ) {
    createNewUser(email, password, firstName, lastName);
    success();
    setTimeout(setActiveScreen("loginPage"), 1000);
  }
}
