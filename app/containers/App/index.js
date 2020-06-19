/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect, useState } from 'react';
import { useFetchRepositories } from './hooks/useFetchRepositories';

import { ButtonComponent } from 'components/ButtonComponent';
import { TextInputComponent } from 'components/TextInputComponent';
import { RepositoryListComponent } from 'components/RepositoryListComponent';

export const App = () => {
  const [keyword, updateKeyword] = useState('');
  const { fetchedRepositories, fetchRepositoriesAsync } = useFetchRepositories();
  console.log(fetchedRepositories);

  return (
    <form>
      <TextInputComponent value={keyword} onChange={({ target: { value } }) => updateKeyword(value)} />
      <ButtonComponent type="button" onClick={() => fetchRepositoriesAsync(keyword)}>Fetch</ButtonComponent>
      <br />
      <br />
      <RepositoryListComponent repositories={fetchedRepositories} />
    </form>
  );
}
