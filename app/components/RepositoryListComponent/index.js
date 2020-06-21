import React, { useMemo } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import { FixedSizeList as List } from 'react-window';

const Row = ({ style, data, index }) => (
  <div className="row" style={style} key={data.repositories[index].id}>
    <div className="col">{data.repositories[index].id}</div>
    <div className="col">{data.repositories[index].name}</div>
    <div className="col">{data.repositories[index].watchers_count}</div>
  </div>
);

export const RepositoryListComponent = props => {
  const { className, repositories } = props;

  const sortedRepositoriesWithHeader = useMemo(() => {
    const sortedRepositories = repositories
      .slice(0)
      .sort((a, b) => (a.stargazers_count > b.stargazers_count ? -1 : 1));
    return [
      {
        id: 'Id',
        name: 'Name',
        watchers_count: 'Watcher Counts',
      },
      ...sortedRepositories,
    ];
  }, [repositories]);

  return (
    <div className={classNames(className, 'rokt-repository-list')}>
      <List
        height={300}
        itemCount={repositories.length}
        itemSize={24}
        itemData={{ repositories: sortedRepositoriesWithHeader }}
      >
        {Row}
      </List>
    </div>
  );
};

RepositoryListComponent.prototype = {
  className: propTypes.string,
  repositories: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      watchers_count: propTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

RepositoryListComponent.defaultProps = {
  repositories: [],
};
