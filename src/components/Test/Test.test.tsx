import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Test from './Test';
import NameType from '../../NameType';

configure({ adapter: new Adapter() });

describe('Test component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Test nameType={NameType.FIRST} name="George" />);
  });

  it('should display div', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });
});
