import { auth } from "./firebase.js";

import {
    GoogleAuthProvider,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const loginBtn =
    document.getElementById("googleLogin");

loginBtn.addEventListener("click", async () => {

    const provider =
        new GoogleAuthProvider();

    try {

        const result =
            await signInWithPopup(auth, provider);

        alert(
            `${result.user.displayName} さん、ようこそ！`
        );

        location.href = "../index.html";

    } catch(error) {

        console.error(error);

        alert("ログインに失敗しました");
    }
});
