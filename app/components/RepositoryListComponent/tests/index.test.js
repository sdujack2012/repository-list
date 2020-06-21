import React from 'react';
import { mount } from 'enzyme';
import { RepositoryListComponent } from '..';

const mountRepositoryListComponent = (props = {}) => {
  const wrapper = mount(<RepositoryListComponent {...props} />);

  return { wrapper };
};

describe('RepositoryListComponent', () => {
  let wrapper;

  it('should a div with class name', () => {
    ({ wrapper } = mountRepositoryListComponent());
    expect(wrapper.find('div.rokt-repository-list').exists()).toBeTruthy();
  });

  it('should render list of items equal to the data size', () => {
    const repositories = [{ id: 1 }, { id: 2 }, { id: 3 }];
    ({ wrapper } = mountRepositoryListComponent({ repositories }));
    expect(wrapper.find('div.row')).toHaveLength(repositories.length);
  });
});
