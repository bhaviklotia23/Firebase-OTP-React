import React, { useState } from 'react';
import firebase from './firebase';

const PhoneAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOTP] = useState('');
  const [verificationId, setVerificationId] = useState('');

  const handleSendOTP = () => {
    const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',
    });

    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, recaptchaVerifier)
      .then((confirmationResult) => {
        setVerificationId(confirmationResult.verificationId);
      })
      .catch((error) => {
        console.log('Error sending OTP:', error);
      });
  };

  const handleVerifyOTP = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, otp);

    firebase
      .auth()
      .signInWithCredential(credential)
      .then((result) => {
        console.log('Successfully verified OTP');
        // Do something with the authenticated user
      })
      .catch((error) => {
        console.log('Error verifying OTP:', error);
      });
  };

  return (
    <div>
      <div id="recaptcha-container"></div>
      <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <button onClick={handleSendOTP}>Send OTP</button>
      <input type="text" value={otp} onChange={(e) => setOTP(e.target.value)} />
      <button onClick={handleVerifyOTP}>Verify OTP</button>
    </div>
  );
};

export default PhoneAuth;
