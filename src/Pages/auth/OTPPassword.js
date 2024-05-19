import React from "react";

function OTPPassword() {
  return (
    <>
      <div className="main-title-section">
        <h2>Password Reset</h2>
      </div>
      <form className="form-container verification-code">
        <h2>We Have Sent You An One Time Password On E-mail Address </h2>
        <p>
          NarayanMurthy@gmail.com, <a>Change E-mail address</a>
        </p>
        <div className="otp-code">
          <input type="text" maxLength="1" required />
          <input type="text" maxLength="1" required />
          <input type="text" maxLength="1" required />
          <input type="text" maxLength="1" required />
        </div>
        <div className="check-btn">
          <div>
            <label>
              Don’t Receive the OTP ? <a>Resend OTP</a>
            </label>
          </div>
        </div>
        <button>Verify and Proceed</button>
      </form>
    </>
  );
}

export default OTPPassword;
