import React, { useState } from "react";
import FormInput from "components/form-input/form-input";
import CustomButton from "components/custom-button/custom-button";

// Firebase functions import for authentication
import { auth, signInWithGoogle } from "utils/firebase";
//////////////////////////////////////////////
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // FORM SUBMIT HANDLE
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }
    setEmail("");
    setPassword("");
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    name === "email" ? setEmail(value) : setPassword(value);
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          type="email"
          name="email"
          value={email}
          required
          label="email"
        />

        <FormInput
          handleChange={handleChange}
          type="password"
          name="password"
          value={password}
          required
          label="password"
        />
        <div className="display-flex ">
          <CustomButton type="submit" value="Submit">
            Sign in
          </CustomButton>
          <CustomButton
            type="button"
            isGoogleSignIn={true}
            onClick={signInWithGoogle}
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
//////////////////////////////////////////////
export default SignIn;
