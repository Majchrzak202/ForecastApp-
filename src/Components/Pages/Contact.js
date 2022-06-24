import React, { useState } from "react";
import "./Contact.css";
import { useNavigate } from "react-router-dom";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/6d1bdc20-e231-11ec-826d-57a28a4a2cb5";

const Contact = () => {
  const [submited, setSubmited] = useState(false);

  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  const enteredEmailIsValid = enteredEmail.includes("@");
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailIsTouched;

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
  const navigate = useNavigate()

  const nameChangeHandler = (e) => {
    e.preventDefault();
    setEnteredName(e.target.value);
  };

  const nameBlurHandler = () => {
    setEnteredNameIsTouched(true);
  };

  const emailChangeHandler = (e) => {
    e.preventDefault();
    setEnteredEmail(e.target.value);
  };

  const emailBlurHandler = () => {
    setEnteredEmailIsTouched(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("WORKING");

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    setSubmited(true);

    setEnteredName("");
    setEnteredEmail("");
    setEnteredNameIsTouched(false);
    setEnteredEmailIsTouched(false)
    navigate('/thank')
  };

  const nameInputFormControl = nameInputIsInvalid
    ? "inputControlInvalid"
    : "inputControl";

  const emailInputFormControl = emailInputIsInvalid
    ? "inputControlInvalid"
    : "inputControl";

  return (
    <div className="contact">
      <form
        onSubmit={submitHandler}
        action={FORM_ENDPOINT}
        method="post"
        value="Download CTA"
      >
        <div>
          <label>Name</label>

          <input
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            className={nameInputFormControl}
            name="Name"
            id="name"
            type="text"
            value={enteredName}
          />
          {nameInputIsInvalid && <p>Please provide name!</p>}
        </div>
        <div>
          <label>Email</label>
          <input
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            name="Email"
            id="email"
            type="email"
            value={enteredEmail}
            className={emailInputFormControl}
          />
          {emailInputIsInvalid && <p>Please provide email with @!</p>}
        </div>
        <div>
          <label>Message</label>
          <textarea />
        </div>
        <div className="div-button">
          <button disabled={!formIsValid}>Contact Us</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
