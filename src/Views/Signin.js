import React from "react";
import firebase from "../firebase";
import { useState } from "react";
import "../Assets/Css/App.css";

const Signin = (props) => {
  const [phone, setphone] = useState("");
  const [otp, setotp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const verifyOtp = (e) => {
    e.preventDefault();

    const code = otp;
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(user);
        window.location.replace("/home");

        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        alert(error.message);
      });
  };

  const onChangePhone = (e) => {
    e.preventDefault();

    setphone(e.target.value);
  };

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
          onSignInSubmit();
        },
        defaultCountry: "IN",
      }
    );
  };
  const onSignInSubmit = (e) => {
    const phoneNumber = "+91" + phone;
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
        setOtpSent(true);
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        alert(error.message);
      });
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {!otpSent ? (
        <form
          className="form-align"
          style={{ paddingBottom: "25px" }}
          onSubmit={(e) => onSignInSubmit(e)}
        >
          <div id="sign-in-button"></div>
          <label>Phone Number: </label>
          <input
            value={phone}
            onChange={(e) => onChangePhone(e)}
            type="text"
            className="number_input"
            placeholder="Enter your Mobile number"
          />
          <div className="buttons">
            <button
              type={"submit"}
              style={{
                backgroundColor: "#fff",
                color: "#000",
                padding: "10px",
                marginTop: 10,
              }}
            >
              Generate OTP
            </button>
          </div>
        </form>
      ) : (
        <form className="form-align" onSubmit={(e) => verifyOtp(e)}>
          <div id="sign-in-button"></div>
          <label>OTP</label>
          <input
            value={otp}
            onChange={(e) => onChangeOtp(e)}
            type="number"
            placeholder="Enter the OTP"
            className="email_input"
          />
          <div className="buttons">
            <button
              type={"submit"}
              style={{
                backgroundColor: "#fff",
                color: "#000",
                padding: "10px",
                marginTop: 10,
              }}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Signin;
