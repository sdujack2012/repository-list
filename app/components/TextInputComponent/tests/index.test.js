import React from 'react';
import { mount } from 'enzyme';
import { TextInputComponent } from '..';

const mountTextInputComponent = (props = {}) => {
  const wrapper = mount(<TextInputComponent {...props} />);

  return { wrapper };
};

describe('TextInputComponent', () => {
  let wrapper;
  beforeEach(() => {
    ({ wrapper } = mountTextInputComponent());
  });

  it('should render input with class name', () => {
    expect(wrapper.find('input.rokt-text-input').exists()).toBeTruthy();
  });
});
