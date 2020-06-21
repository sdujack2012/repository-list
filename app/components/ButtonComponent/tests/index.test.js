import React from 'react';
import { mount } from 'enzyme';
import { ButtonComponent } from '..';

const mountButtonComponent = (props = {}) => {
  const wrapper = mount(<ButtonComponent {...props} />);

  return { wrapper };
};

describe('ButtonComponent', () => {
  let wrapper;
  beforeEach(() => {
    ({ wrapper } = mountButtonComponent());
  });

  it('should render button with class name', () => {
    expect(wrapper.find('button.rokt-button').exists()).toBeTruthy();
  });
});
