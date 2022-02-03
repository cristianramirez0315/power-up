import 'bulma/css/bulma.min.css';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <div classname= "hero-body">
      <div classname= "container">
      <div class="columns is-centered">
      <div class="column is-5-tablet is-4-desktop is-3-widescreen">

      <p class="title is-1 has-text-centered">Log In</p>
          <form action="" class="box" onSubmit={handleFormSubmit}>
          <label for="" class="label">Email</label>
            <input
              className="input"
              placeholder="Your email"
              name="email"
              type="email"
              id="email"
              value={formState.email}
              onChange={handleChange}
            />
            <label for="" class="label">Password</label>
            <input
              className="input"
              placeholder="******"
              name="password"
              type="password"
              id="password"
              value={formState.password}
              onChange={handleChange}
            />
            <button class="button is-link is-outlined" type="submit">
              Submit
            </button>
          </form>

          {error && <div>Login failed</div>}
          
          
          
          </div>
          </div>
          </div>
      </div>
);
};

export default Login;
