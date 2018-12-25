import React from 'react';
import { shallow } from 'enzyme';
import ErrorPage from '../../components/ErrorPage';

it('should correctly render Error Page', () => {
  const wrapper = shallow(<ErrorPage />)
  expect(wrapper).toMatchSnapshot();
})
