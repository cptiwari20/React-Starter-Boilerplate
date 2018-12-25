import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRoutes from './router/AppRoutes';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import { firebase } from './firebase/firebase';
import { history } from './router/AppRoutes';
import LoadingPage from './components/LoadingPage';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
const JSX =
  <Provider store={store}>
    <AppRoutes />
  </Provider>
 
let hasRendered = false;
const renderApp = () => {
  if(!hasRendered){
    ReactDOM.render(JSX, document.querySelector('#app'));
    hasRendered = true;
  }
}
ReactDOM.render(<LoadingPage />, document.querySelector('#app'));

firebase.auth().onAuthStateChanged(user => {
  if(user){
    store.dispatch(login(user.uid));
    renderApp();
      if(history.location.pathname === '/'){
        history.push('/dashboard');
      }
  }else{
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
 })


