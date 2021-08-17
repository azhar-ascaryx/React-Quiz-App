import React from "react";
import firebase from "../firebase";
import { useState } from "react";


const Signin = (props) => {

  const [phone, setphone] = useState("");
  const [otp, setotp] = useState("");


  const verifyOtp = (e) => {
    e.preventDefault();

    const code = otp;
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(user, "qqqqqqqq");
        window.location.replace("/home")

        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        console.log(error);
      });
  };

  const onChangePhone = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    setphone(e.target.value);
  };

  console.log(phone);
  const onChangeOtp = (e) => {
    e.preventDefault();

    setotp(e.target.value);
  };

  const configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log(response);
          onSignInSubmit();
        },
        defaultCountry: "IN",
      }
    );
  };
  const onSignInSubmit = (e) => {
    const phoneNumber = "+91" + phone;
    console.log(phoneNumber);
    e.preventDefault();
    configureCaptcha();

    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("azhar");
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log(error)
      });
  };
  return (
    <div>
       <form onSubmit={(e) => onSignInSubmit(e)}>
     <div id="sign-in-button"></div>
          <label>Phone Number: </label>
          <input value={ phone} onChange={(e) =>  onChangePhone(e)} type="text" className="number_input" placeholder="Enter your Mobile number"/>
    <button type={"submit"}>Generate OTP</button>
     </form>

     <form onSubmit={(e) =>  verifyOtp(e)}>
     <div id="sign-in-button"></div>
     <label>OTP</label>
          <input
          value={ otp} onChange={(e) =>  onChangeOtp(e)}
            type="number"
            placeholder="Enter the OTP"
            className="email_input"
          />
    <button type={"submit"}>Submit</button>
     </form>
        
    </div>
  );
};

export default Signin;
