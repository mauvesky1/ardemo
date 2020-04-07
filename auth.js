console.log("in the auth");
const signupButton = document.querySelector("#sign");

signupButton.addEventListener("click", (e) => {
  console.log("button clicked!");
  auth
    .createUserWithEmailAndPassword("rob.draper@live.com", "chnrchnr")
    .then((cred) => {
      console.log("user", cred);
    });
});
