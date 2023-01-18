import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import React from "react";

const signincomponent = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    // console.log(user);
  };

  return (
    <div>
      <h1>This is Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google PopUp</button>
    </div>
  );
};

export default signincomponent;
