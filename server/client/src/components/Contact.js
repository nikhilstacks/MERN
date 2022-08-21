import React, { useState } from "react";

const Contact = () => {
  const [messages, setMessage] = useState({
    message: "",
  });

  // setting state of message every time user pressess a key----------------------------------------
  let name, value;
  const messageValue = (e) => {
    name = e.target.name;
    value = e.target.value;

    setMessage({ ...messages, [name]: value });
  };

  // sending post request to the backend--------------------------------------------------------------
  const sendMessage = async (e) => {
    e.preventDefault();
    const { message } = messages;

    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: message,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || res.status === 401 || !data) {
      console.log("enter something to send/ or not authorized");
    } else {
      console.log("message send successfully");
      window.alert("your message has been send successfully");
    }
  };

  return (
    <div className="pt-5">
      <p>Welcome</p>
      <h1>This is my contact page..</h1>
      <form method="POST">
        <label>Message</label>
        <br></br>
        <textarea
          cols="70"
          rows="10"
          placeholder="Enter your message here"
          name="message"
          value={messages.message}
          onChange={messageValue}
          style={{ resize: "none" }}
        ></textarea>
        <br></br>
        <button type="submit" onClick={sendMessage}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
