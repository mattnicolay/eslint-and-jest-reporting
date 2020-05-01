import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import App from './App';
import Sample from '../Sample/Sample';

configure({ adapter: new Adapter() });

describe('App', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should display Test component', () => {
    expect(wrapper.find(Sample)).toHaveLength(1);
  });
});
