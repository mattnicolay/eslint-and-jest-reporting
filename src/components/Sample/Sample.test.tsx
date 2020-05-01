import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Sample from './Sample';
import NameType from '../../NameType';

configure({ adapter: new Adapter() });

describe('Sample component', () => {
  let wrapper: ShallowWrapper;

  const mockCallback: Function = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Sample nameType={NameType.FIRST} name="George" callback={mockCallback} />
    );
  });

  it('should display div', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should return ok from tested button', () => {
    expect(wrapper.find('.tested').simulate('click'));
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
