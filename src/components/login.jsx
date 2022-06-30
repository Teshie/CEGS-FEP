import React from "react";
export const login = () => {
  return (
    <div>
      <div id="login-form-wrap">
        <h2>Login</h2>
        <form id="login-form">
          <p>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Password"
              required
            />
            <i class="validation">
              <span></span>
              <span></span>
            </i>
          </p>
          <p>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
            <i class="validation">
              <span></span>
              <span></span>
            </i>
          </p>
          <p>
            <input type="submit" id="login" value="Login" />
          </p>
        </form>
        <div id="create-account-wrap">
          <p>
            Not a member? <a href="#">Create Account</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default login;
