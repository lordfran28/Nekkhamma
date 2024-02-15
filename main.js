import { app } from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// select emailInput
const emailInput = document.querySelector("#emailInput") 
// select passInput
const passInput = document.querySelector ("#passwordInput")
// select enterBtn
const enterBtn = document.querySelector ("#enterBtn")

// upon clicking on "register" btn, then it should fire this event listener
enterBtn.addEventListener ("click", function(event) {
  console.log ("you clicked reg button")
  console.log(emailInput.value, passInput.value)

  const auth = getAuth(app);
  createUserWithEmailAndPassword(auth, emailInput.value, passInput.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log("User was registerd successfully!", user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });
})




