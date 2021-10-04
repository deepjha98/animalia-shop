import React, { useState } from "react";
//////////////////////////////////////////////
import FormInput from "components/form-input/form-input";
import CustomButton from "components/custom-button/custom-button";
import { auth, createUserProfileDocument } from "utils/firebase";

const SignUp = () => {
  // STATES FOR FORMS
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  //   setFormData((formData.displayName = "Deepak"));

  const handleSubmit = async (event) => {
    const { displayName, email, password, confirmPassword } = formData;
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setFormData({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(formData[name], value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} className="sign-up-form">
        {/* FOR NAME FIELD */}
        <FormInput
          type="text"
          name="displayName"
          value={formData.displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        ></FormInput>
        {/* FOR EMAIL FIELD */}
        <FormInput
          type="email"
          name="email"
          value={formData.email}
          handleChange={handleChange}
          label={"Email"}
          required
        ></FormInput>
        {/* FOR FIRST PASSWORD FIELD */}
        <FormInput
          type="password"
          name="password"
          value={formData.password}
          handleChange={handleChange}
          label={"Password"}
          required
        ></FormInput>
        {/* FOR SECONF+D PASSWORD FIELD */}
        <FormInput
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          handleChange={handleChange}
          label={"Confirm Password"}
          required
        ></FormInput>
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};
//////////////////////////////////////////////
export default SignUp;
