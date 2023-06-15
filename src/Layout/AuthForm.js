import { useState,useRef } from "react";

const AuthForm = ()=>{
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const[isLogin, setIsLogin]=useState(true);
    const switchAuthModeHandler = ()=>{
        setIsLogin((prevState)=>!prevState);
    };
    const submitHandler =(event)=>{
        event.preventDefault();
        const enteredEmail=emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        
        if(isLogin){

        }
        else{
            fetch(){
                method:'POST',
                body:JSON.stringify({
                    email:enteredEmail,
                    password: enteredPassword,returnsecureToken: true
                }),
                headers:{
                    'Content-Type':'application/JSON',
                },
            }
            .then((res)=>{
                if(res.ok){
                    //...
                }
                else{
                    return res.json().then((data)=>{
                        console.log(data);
                    });
                }
            });
        }
    };
    return(
        <section className={classes.auth}>
            <h1>{isLogin? 'Login': 'sign Up'}</h1>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="email">YourEmail</label>
                    <input type='email' id='email' required ref={emailInputRef}/>

                </div>
                <div className={classes.control}>
                    <label htmlFor="password">Your Password</label>
                    <input type='password' id='password' required ref={passwordInputRef}/>
                    
                </div>
                <div className={classes.actions}>
                    <button>{isLogin? 'Login':'create Account'}</button>
                </div>
                
            </form>
        </section>
    )
};
export default AuthForm;