import React, { useRef, useState } from 'react';
import { users } from './../../users.js';

const Login = ({ user, handler }) => {
  const userEmailRef = useRef();
  const userPassRef = useRef();

  console.log(user);

  const validateLogin = (e) => {
    e.preventDefault();
    console.log('Will Not Validate...');
    const userEmail = userEmailRef.current.value;
    const userPass = userPassRef.current.value;

    if (userEmail == '' || userPass == '') return;
    console.log('Now Validating...');

    const validatedUser = users.find((user) => {
      return user.email === userEmail && user.pass === userPass;
    });

    if (validatedUser) {
      console.log(validatedUser);
      handler(validatedUser);
    } else {
      alert(`Invalid User`);
    }
    userEmailRef.current.value = '';
    userPassRef.current.value = '';
  };
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
            ref={userEmailRef}
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
            ref={userPassRef}
            placeholder="name@example.com"
          />
        </div>
        <button
          className="btn btn-primary d-block mx-auto"
          onClick={(e) => validateLogin(e)}
        >
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
