import React, { useRef } from "react";
import "./SignUpScreen.css";
import { auth } from "../firebase";


const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
  //   createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
  //     .then((user) => {
  //       console.log(user);
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //     });
  // };

      auth.createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      ).then((authUser)=>{
          console.log(authUser)
      }).catch(error => {
          alert(error.message);

      });
    };

  const signIn = (e) => {
    e.preventDefault();
     auth.signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      ).then((authUser)=>{
          console.log(authUser)
      }).catch(error => {
          alert(error.message);

      });

    // signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
    //   .then((userCredential) => {
    //     // Signed in
    //     console.log(userCredential);
    //     // const user = userCredential.user;
    //     // ...
    //   })
    //   .catch((error) => {
    //     // const errorCode = error.code;
    //     // const errorMessage = error.message;
    //     alert(error.message);
    //     // ..
    //   });
  };

  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signUpScreen_gray">New to Netflix? </span>
          <span className="signUpScreen_link" onClick={register}>
            Sign Up Now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
