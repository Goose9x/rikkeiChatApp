import { loginPage } from "../page/loginPage/index";
import { registerPage } from "../page/registerPage/index";
import { chatPage } from "../page/chatPage/index";
import { resetPasswordPage } from "../page/resetPasswordPage/index";
import { validateLoginInfor } from "../controller/index";
import { validateResetInfor } from "../controller/index";
import { validateRegisterInfor } from "../controller/index";

export let renderErrorMessage = (id, text) => {
  const errorMessage = document.getElementById(id);
  if (errorMessage) {
    errorMessage.innerText = text;
  }
};
export let setActiveScreen = (screenName) => {
  let app = document.getElementById("app");
  switch (screenName) {
    case "loginPage":
      if (app) {
        app.innerHTML = loginPage;
      }
      const loginForm = document.getElementById("login-form");
      if (loginForm) {
        console.log(loginForm);
        loginForm.addEventListener("submit", (event) => {
          event.preventDefault();

          const email = loginForm.email.value;
          const password = loginForm.password.value;
          // Controller làm nhiệm vụ validate thông tin
          // Tạo hàm validateLoginInfo nhận vào email và password trong controller
          // Export hàm validateLoginInfo
          // Import hàm validateLoginInfo trong view
          // Trong Screen Login, gọi hàm validateLoginInfo() với email và pass lấy
          // từ form

          // Trong controller, logic của hàm validateLoginInfo sẽ là kiểm tra xem
          // có phải email hợp lệ không, có bỏ trống trường nào không

          // Tạo một hàm setMessage ở view và export sang controller để in ra lỗi
          // từ những trường hợp validate đó

          console.log(email);
          console.log(password);
          //   validateLoginInfor(email,password)
          validateLoginInfor(email, password);
        });
      }
      const switchToRes = document.getElementsByClassName("register-link");
      switchToRes[0].onclick = function () {
        return setActiveScreen("registerPage");
      };
      const switchToReset = document.getElementsByClassName(
        "forgot-password-link"
      );
      switchToReset[0].onclick = function () {
        return setActiveScreen("resetPasswordPage");
      };
      break;
    case "registerPage":
      if (app) {
        app.innerHTML = registerPage;
      }
      const registerForm = document.getElementById("register-form");
      if (registerForm) {
        console.log(registerForm);
        registerForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const firstName = registerForm.firstName.value;
          const lastName = registerForm.lastName.value;
          const email = registerForm.email.value;
          const password = registerForm.password.value;
          const confirmPassword = registerForm.confirmPassword.value;

          validateRegisterInfor(
            firstName,
            lastName,
            email,
            password,
            confirmPassword
          );
        });
      }
      const switchToLogin = document.getElementsByClassName("login-again-link");
      switchToLogin[0].onclick = function () {
        return setActiveScreen("loginPage");
      };
      break;
    case "chatPage":
      if (app) {
        app.innerHTML = chatPage;
      }
      break;
    case "resetPasswordPage":
      if (app) {
        app.innerHTML = resetPasswordPage;
      }
      const resetForm = document.getElementById("reset-form");
      if (resetForm) {
        console.log(resetForm);
        resetForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const email = resetForm.email.value;
          validateResetInfor(email);
        });
      }
      const switchResetToLogin = document.getElementsByClassName("login-link");
      switchResetToLogin[0].onclick = function () {
        return setActiveScreen("loginPage");
      };
      break;
    default:
      break;
  }
};

export let success = () => {
  let backgroundApp = document.getElementById("backgroundApp");
  let popUp = document.getElementById("success");
  popUp.style.display = "block";
  backgroundApp.style.backgroundColor = "black";
  backgroundApp.style.opacity = "40%";
  setTimeout(() => {
    popUp.style.display = "none";
    backgroundApp.style.backgroundColor = "white";
    backgroundApp.style.opacity = "100%";
  }, 1000);
};
