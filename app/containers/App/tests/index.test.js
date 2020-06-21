import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import * as apis from 'core/apis';
import { fetchRepositoriesAsync } from 'core/asyncActions';
import { selectRepositories } from 'core/selectors';

import configureStore from '../../../configureStore';
import { App } from '..';

jest.mock('core/apis');

const mountAppWithStore = () => {
  const store = configureStore();
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  return { store, wrapper };
};

describe('App', () => {
  let store, wrapper;
  beforeEach(() => {
    ({ store, wrapper } = mountAppWithStore());
    apis.fetchRepositoriesApi.mockReset();
  });

  it('should render components', () => {
    expect(wrapper.find('TextInputComponent').exists()).toBeTruthy();
    expect(wrapper.find('ButtonComponent').exists()).toBeTruthy();
    expect(wrapper.find('ButtonComponent').exists()).toBeTruthy();
  });

  it('should change state when fetchRepositoriesAsync is dispached', async () => {
    const fixture = [{ test: 'test' }];
    apis.fetchRepositoriesApi.mockResolvedValue({
      items: [{ test: 'test' }],
    });

    wrapper
      .find('TextInputComponent')
      .props()
      .onChange({ target: { value: 'test' } });
    await wrapper
      .find('ButtonComponent')
      .props()
      .onClick();

    await store.dispatch(fetchRepositoriesAsync('test'));
    expect(selectRepositories(store.getState())).toEqual(fixture);
  });

  it('should show error when api throws exception', async () => {
    const fixture = [{ test: 'test' }];
    apis.fetchRepositoriesApi.mockImplementation(() => {
      throw new Error();
    });

    await wrapper
      .find('ButtonComponent')
      .props()
      .onClick();
    await store.dispatch(fetchRepositoriesAsync('test'));
    wrapper.update();

    expect(wrapper.text()).toContain('Error fetching Repositories');
  });
});
