import React, { useState } from "react";
import "./Contact.css";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/6d1bdc20-e231-11ec-826d-57a28a4a2cb5";

const Contact = () => {
  const [submited, setSubmited] = useState(false);

  const submitHandler = () => {
      setSubmited(true)
  };



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
          <input name="Name" id="name" type="text" required />
        </div>
        <div>
          <label>Email</label>
          <input name="Email" id="email" type="email" required  />
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
