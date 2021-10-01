import React from "react";
/////////////////////////////////////////////////////////////
const FormInput = ({ handleChange, label, ...props }) => {
  return (
    <div className="group">
      <input {...props} onChange={handleChange} className="form-input" />
      {label ? (
        <label
          className={`${props.value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
/////////////////////////////////////////////////////////////
export default FormInput;
