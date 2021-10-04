import React from "react";

/////////////////////////////////////////////
import SignIn from "components/auth-component/sign-in/sign-in";
import SignUp from "components/auth-component/sign-up/sign-up";

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};
/////////////////////////////////////////////
export default SignInAndSignUp;
