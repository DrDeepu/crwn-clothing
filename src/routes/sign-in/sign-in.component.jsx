import { useEffect } from "react";
import { getRedirectResult } from "@firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import React from "react";

import SignUp from "../../components/sign-up-form/sign-up-form.components";

const Signincomponent = () => {
  async function yo() {
    const response = await getRedirectResult(auth);
    if (response) {
      const userDocRef = await createUserDocumentFromAuth(response.user);
    }
  }
  useEffect(() => {
    yo();
  }, []);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>This is Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google PopUp</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button> */}
      <SignUp />
    </div>
  );
};

export default Signincomponent;
