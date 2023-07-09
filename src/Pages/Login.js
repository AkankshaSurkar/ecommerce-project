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

  useEffect(() => {
    fetch("https://crudcrud.com/api/a1553b2e2a3e4da0b82d775cb729024b/welcome")
      .then((res) => res.json())
      .then((json) => {
        console.log("jsonn", json);
        setData(json);
      })
      .catch((e) => {
        console.log("e", e);
      });
  }, []);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    fetch("https://crudcrud.com/api/a1553b2e2a3e4da0b82d775cb729024b/welcome", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnsecureToken: true,
      }),
      headers: {
        "Content-Type": "application/JSON",
      },
    })
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
      {/* {data.map((item) => {
        return <div>{item.email}</div>;
      })} */}
      <h1>{"Login"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
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
