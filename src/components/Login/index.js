import React from 'react';

function Login() {
  return (
    <div className='container-sm mt-5 p-5'>
      <h2 className='text-center'>Login</h2>
      <div className='mb-3'>
        <label for='exampleFormControlInput1' className='form-label'>
          Email address
        </label>
        <input
          type='email'
          className='form-control'
          id='exampleFormControlInput1'
          placeholder='name@example.com'
        />
      </div>
    </div>
  );
}

export default Login;
