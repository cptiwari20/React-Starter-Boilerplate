import React from 'react';
import { connect } from 'react-redux';
import { startSignIn } from '../actions/auth';

export const LoginPage = (props) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">MyReactApp</h1>
      <p>Write app subtitle here.</p>
      <button 
        className='button'
        onClick={props.startSignIn}> 
        Login With Google 
      </button>
    </div>
  </div>
);

export default connect(null, { startSignIn })(LoginPage);