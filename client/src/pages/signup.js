import 'bulma/css/bulma.min.css';

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleInputChange = (event) => {
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
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      username: '',
      email: '',
      password: '',
    });
  };
  
  return (
    <div classname= "hero-body">
    <div classname= "container">
    <div class="columns is-centered">
    <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <p class="title is-1 has-text-centered">Sign Up</p>
            <form class="box" onSubmit={handleFormSubmit} >
              <label htmlFor='username' className="label">Username</label>
                <input
                  className="input"
                  placeholder="Your username" 
                  name="username"
                  type="username"
                  id="username"
                  value={formState.username}
                  onChange={handleInputChange}
                />

                <label htmlFor='email' className="label">Email</label>
                <input
                  className="input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleInputChange}
                />
                <label htmlFor='password' className="label">Password</label>
                <input
                  className="input"
                  placeholder="******"
                  name="password"
                  type="password"
                  id="password"
                  value={formState.password}
                  onChange={handleInputChange}
                />
                <button className="button is-link is-outlined" 
                disabled={!(formState.username && formState.email && formState.password)}
                type='submit'
                variant='success'
                >
                  Submit
              </button>
              {error && <div>Signup failed</div>}
            </form>

            

            </div>  
            </div>
            </div>  
        </div>
  );
};

export default Signup;