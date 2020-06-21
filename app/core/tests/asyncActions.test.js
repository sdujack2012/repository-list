import * as apis from 'core/apis';
import { fetchRepositoriesAsync } from '../asyncActions';


jest.mock('core/apis');

describe('fetchRepositoriesAsync', () => {
  beforeEach(() => {
    apis.fetchRepositoriesApi.mockReset();
  });

  it('should resolve into values from api function and call dispatch', async () => {
    const fixture = {
      items: [{ test: 'test' }],
    };

    const dispatch = jest.fn();

    apis.fetchRepositoriesApi.mockResolvedValue(fixture);

    expect(await fetchRepositoriesAsync('test')(dispatch)).toEqual(fixture);
    expect(dispatch).toHaveBeenCalled();
  });

  it('should resolve into error and return the error if api function throws exception', async () => {
    const fixture = { error: 'cannot fetch repositories' };
    apis.fetchRepositoriesApi.mockImplementation(() => {
      throw new Error();
    });

    expect(await fetchRepositoriesAsync('test')()).toEqual(fixture);
  });
});
