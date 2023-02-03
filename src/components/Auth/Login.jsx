import React from 'react';

const Login = () => {
  return (
    <div class="p-4 w-75 mx-auto">
      <form action="">
        <div class="mb-3">
          <label for="user-email" class="form-label">
            Enter Email
          </label>
          <input
            type="email"
            class="form-control"
            id="user-email"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="user-pass" class="form-label">
            Enter Paswword
          </label>
          <input
            type="password"
            class="form-control"
            id="user-pass"
            placeholder="name@example.com"
          />
        </div>
        <button className="btn btn-primary d-block mx-auto">Login</button>
      </form>
    </div>
  );
};
export default Login;
