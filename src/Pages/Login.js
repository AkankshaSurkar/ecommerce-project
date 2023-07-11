import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./Login.module.css";

const AuthForm = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  let email=localStorage.getItem("email");


  useEffect(() => {

    fetch(
      `https://crudcrud.com/api/acd72c3f9e7b4cd0b13ba87760964c5e/cart${email}`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log("jsonn", json);
        setData(json);
      })
      .catch((e) => {
        console.log("e", e);
      });
  }, [email]);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

console.log(enteredEmail.replace("@", "").replace(".", ""));

    setIsLoading(true);
    fetch(
      `https://crudcrud.com/api/acd72c3f9e7b4cd0b13ba87760964c5e/cart${email}`,
      {

        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnsecureToken: true,
        }),
        headers: {
          "Content-Type": "application/JSON",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed";
            alert(errorMessage);
            throw new Error(errorMessage);
            // console.log(data);
          });
        }
      })
      .then((data) => {
        navigate("/");
      })

      .catch((err) => {
        alert(err.message);
      });
  };

  

  return (
    
    <section className={classes.auth}>


      <h1>{"Login"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            required
            ref={emailInputRef}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            autoComplete="username"
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{"Login"}</button>}
          {isLoading && <p>Sending request.....</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          ></button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
