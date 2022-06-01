import React, { useState } from "react";
import "./Contact.css";

const FORM_ENDPOINT = "";

const Contact = () => {
  const [submited, setSubmited] = useState(false);

  const submitHandler = () => {
      setSubmited(true)
  };

  if (submited) {
      return <>
      <div className='submited'>
      <h4 >Thanks for Reaching Out!</h4>
      <p>Someone will soon contatc with you! </p>
      </div>
      </>
  }

  return (
    <div className="contact">
      <form
        onSubmit={submitHandler}
        action={FORM_ENDPOINT}
        method="POST"
        target="_blank"
      >
        <div>
          <label>Name</label>
          <input />
        </div>
        <div>
          <label>Email</label>
          <input />
        </div>
        <div>
          <label>Message</label>
          <textarea />
        </div>
        <div className="div-button">
          <button>Contact Us</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
