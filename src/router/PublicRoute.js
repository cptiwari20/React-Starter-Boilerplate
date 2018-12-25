import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const  PublicRoute = ({ isAuth, component:Component, ...rest }) => {
  return(
    <Route {...rest} component={(props) => {
       return isAuth ? (
           <Redirect to="/dashboard" />
           ) : (
             <Component {...props}/>
        );
    }} />
  )
}

function mapStateToProps({ auth }){
  return { isAuth: !!auth.uid }
}

export default connect(mapStateToProps)(PublicRoute)