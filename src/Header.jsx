import React, { useState } from "react";
import { GoogleLogo } from "phosphor-react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "/src/config/firebase.js";

const Header = () => {

  function handleGoogleSignIn(){
    const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        })
  }
  
  return (
    <header className="bg-gray-800 black">
      <div className="h-40 bg-local bg-center selection:bg-green-900" style={{backgroundImage:`url(/src/img/geral/background_palmtrees.jpg)`}}>
        <button className="h-auto w-auto mdl-color--light-blue-100" type="button" onClick={handleGoogleSignIn}>
          Entrar com Google
          <GoogleLogo size={32} />
          </button>
      </div>
    </header>
  );
}

export default Header;
