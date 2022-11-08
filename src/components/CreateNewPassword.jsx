import React from 'react';
import '../styles/CreateNewPasssword.scss';

const CreateNewPassword = () => {
    return (
      <div className="CreateNewPassword">
        <div className="login">
          <div className="form-container">
            <img
              src="./logos/logo_yard_sale.svg"
              alt="logo"
              className="logo"
            ></img>
            <h1 className="title">Create a new password</h1>
            <p className="subtitle">Enter a new password for your account</p>
            <form action="/" className="form">
              <label for="password" className="label">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="*********"
                className="input input-password"
              ></input>
              <label for="new-password" className="label">
                Password
              </label>
              <input
                type="password"
                id="new-password"
                placeholder="*********"
                className="input input-password"
              ></input>
              <input
                type="submit"
                value="Confirm"
                className="primary-button login-button"
              />
            </form>
          </div>
        </div>
      </div>
    );
}

export default CreateNewPassword;