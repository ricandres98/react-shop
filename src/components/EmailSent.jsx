import React from 'react';
import '../styles/EmailSent.scss'

const EmailSent = () => {
    return (
      <div className="EmailSent">
        <div className="login">
          <div className="form-container">
            <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
            <h1 className="title">Email has been sent!</h1>
            <p className="subtitle">
              Please check your inbox for instructions on how to reset the
              password
            </p>
            <div className="email-image">
              <img src="./icons/email.svg" alt="email" />
            </div>
            <button className="primary-button login-button">Login</button>
            <p className="resend">
              <span>Didn't receive the email?</span>
              <a href="/">Resend</a>
              <a href="/recovery/create-password">Create new password</a>
            </p>
          </div>
        </div>
      </div>
    );
}

export default EmailSent;