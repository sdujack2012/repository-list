/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useState } from 'react';
import { useFetchRepositories } from './hooks/useFetchRepositories';

import { ButtonComponent } from 'components/ButtonComponent';
import { TextInputComponent } from 'components/TextInputComponent';
import { RepositoryListComponent } from 'components/RepositoryListComponent';

export const App = () => {
  const [keyword, setKeyword] = useState('');
  const [hasError, setHasError] = useState(false);

  const {
    fetchedRepositories,
    fetchRepositoriesAsync,
  } = useFetchRepositories();

  return (
    <form>
      <TextInputComponent
        value={keyword}
        onChange={({ target: { value } }) => setKeyword(value)}
      />
      <ButtonComponent
        type="button"
        onClick={async () => {
          const fetchRepositoriesResult = await fetchRepositoriesAsync(keyword);
          if (fetchRepositoriesResult.error) {
            setHasError(true);
          }
        }}
      >
        Fetch
      </ButtonComponent>
      <br />
      <br />
      {hasError ? (
        'Error fetching Repositories'
      ) : (
        <RepositoryListComponent repositories={fetchedRepositories} />
      )}
    </form>
  );
};
