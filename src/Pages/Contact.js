import React, { useState } from "react";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  
  async function saveUser(movie) {
    console.log({name, email, mobile});
      const response = await fetch(
        "https://mean-app-67743-default-rtdb.firebaseio.com/movies.json",
        {
          method: "POST",
          body: JSON.stringify(movie),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
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
