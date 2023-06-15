import React, { useState } from "react";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const data = { name, email, mobile };

  async function saveUser() {
    console.log({ name, email, mobile });

    try {
      const response = await fetch(
        "https://ecommerce-app-798a7-default-rtdb.firebaseio.com/movie.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      console.log("response", response);
    } catch (e) {
      console.log("e", e);
    }
  }


  return (
    <>
      <h1>Contact US</h1>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        name="name"
      />
      <br />
      <br />
      <label htmlFor="emailId">EmailId:</label>
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        name="email"
      />
      <br />
      <br />
      <label htmlFor="mobile">Phone No:</label>
      <input
        type="text"
        value={mobile}
        onChange={(e) => {
          setMobile(e.target.value);
        }}
        name="mobile"
      />
      <br />
      <br />
      <button type="button" onClick={saveUser}> Submit</button>
    </>
  );
}
export default Contact;
