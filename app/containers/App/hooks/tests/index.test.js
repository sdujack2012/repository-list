import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import * as apis from 'core/apis';

import { useFetchRepositories } from '../useFetchRepositories';
import configureStore from '../../../../configureStore';

jest.mock('core/apis');

describe('useFetchRepositories', () => {
  beforeEach(() => {
    apis.fetchRepositoriesApi.mockReset();
  });

  it('should fetch repositories using api function', () => {
    const store = configureStore();
    const wrapper = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );
    const fixture = {
      items: [{ test: 'test' }],
    };
    apis.fetchRepositoriesApi.mockResolvedValue(fixture);
    const { result } = renderHook(() => useFetchRepositories(), { wrapper });

    act(async () => {
      await result.current.fetchRepositoriesAsync();
      expect(result.current.fetchedRepositories).toEqual(fixture.items);
    });
  });
});
