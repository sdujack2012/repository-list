import { actions } from './actionsAndReducers';
import { fetchRepositoriesApi } from './apis';

export const fetchRepositoriesAsync = (keyword) => {
  return async (dispatch) => {
    try {
      const fetchedRepositories = await fetchRepositoriesApi(keyword);
      dispatch(actions.updateRepositories(fetchedRepositories.items));
      return fetchedRepositories;
    } catch (ex) {
      return { error: 'cannot fetch repositories' };
    }
  };
};
