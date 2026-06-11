import { auth } from "./firebase.js";

import {
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const loginButton =
  document.getElementById("googleLogin");

loginButton.addEventListener("click", async () => {

  const provider =
    new GoogleAuthProvider();

  try {

    await signInWithPopup(
      auth,
      provider
    );

    alert("ログイン成功");

    window.location.href =
      "../index.html";

  } catch(error) {

    console.error(error);

    alert("ログイン失敗");
  }

});
