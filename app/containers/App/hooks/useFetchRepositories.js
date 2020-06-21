import { useDispatch, useSelector } from 'react-redux';

import { selectRepositories } from 'core/selectors';
import { fetchRepositoriesAsync } from 'core/asyncActions';

//using custom hook we can put read/write logic together
export const useFetchRepositories = () => {
  const fetchedRepositories = useSelector(selectRepositories);
  const dispatch = useDispatch();

  return {
    fetchedRepositories,
    fetchRepositoriesAsync: keyword =>
      dispatch(fetchRepositoriesAsync(keyword)),
  };
};
