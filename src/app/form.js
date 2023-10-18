import React from "react";

const NetlifyForm = () => {
  return (
    <div>
      <h1>Netlify Form Testing</h1>
      <form
        method="POST"
        name="contact"
        // data-netlify="true"
        // action="/success"
      >
        <input type="hidden" name="form-name" value="contact" />

        <p>
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" id="name" name="name" required />
        </p>

        <p>
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" id="email" name="email" required />
        </p>

        <p>
          <label htmlFor="message">Message</label>
          <br />
          <textarea id="message" name="message" required />
        </p>

        <p>
          <input type="submit" value="Submit message" />
        </p>
      </form>
    </div>
  );
};

export default NetlifyForm;
