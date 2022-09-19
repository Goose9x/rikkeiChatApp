import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { renderErrorMessage, setActiveScreen, success } from "../view/index";

export let createNewUser = (email, password, firstName, lastName) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password, firstName, lastName)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      updateUserProfile(firstName, lastName);
      console.log(user);
      // ...
    })
    .catch((error) => {
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..

      renderErrorMessage(
        "resAlertErr",
        errorMessage
          .replace("Firebase: ", "")
          .replace("(auth/weak-password).", "")
      );
    });
};

export let signInNewUser = function (email, password) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      success();
      setTimeout(function () {
        setActiveScreen("chatPage"), 1000;
      });
      console.log(user);
      let userDisplayName = document.getElementById("displayName");
      userDisplayName.innerHTML = `${user.displayName}`;
      // <i class="fa-solid fa-user" style= "margin-right: 10px;"></i>${user.displayName} <button><i class="fa-solid fa-right-from-bracket"></i></button>
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      renderErrorMessage(
        "loginErrMess",
        errorMessage
          .replace("Firebase: Error (auth/wrong-password).", "Wrong Password")
          .replace(
            "Firebase: Error (auth/user-not-found).",
            "User is not existed"
          )
      );
    });
};

export let resetPassword = (email) => {
  // const auth = getAuth();
  // signInWithEmailAndPassword(auth, email)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // ...
  //     console.log(user);
  //     renderErrorMessage(
  //       "resetNotification",
  //       `Password reset email was sent to ${user} `
  //     );
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     renderErrorMessage(
  //       "resetNotification",
  //       errorMessage.replace(
  //         "Firebase: Error (auth/internal-error).",
  //         "User is not existed"
  //       )
  //     );
  //   });
};

let updateUserProfile = (firstName, lastName) => {
  const auth = getAuth();
  updateProfile(auth.currentUser, {
    displayName: `${firstName} ${lastName}`,
    // photoURL: "https://example.com/jane-q-user/profile.jpg",
  })
    .then(() => {
      // Profile updated!
      // ...
    })
    .catch((error) => {
      // An error occurred
      // ...
    });
};
