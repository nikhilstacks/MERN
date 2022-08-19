import React, { useState } from "react";

const Contact = () => {
  const [messages, setMessage] = useState({
    message: "",
  });

  let name, value;
  const messageValue = (e) => {
    name = e.target.name;
    value = e.target.value;

    setMessage({ ...messages, [name]: value });
  };

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
      console.log(data);
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
          placeholder="Enter your message here"
          name="message"
          value={messages.message}
          onChange={messageValue}
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
