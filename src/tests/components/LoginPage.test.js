import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

let wrapper, startSignIn;
beforeEach(() => {
  startSignIn = jest.fn()
  wrapper = shallow(<LoginPage startSignIn={startSignIn}/>)
})
describe('Login Page', () => {
  it('should render a loginPage Component', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should call signIn action on button click', () => {
    wrapper.find('button').simulate('click');

    expect(startSignIn).toBeCalled();
  })
});