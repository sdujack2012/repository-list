import React, { useCallback } from 'react';
import classNames from 'classnames';
import { FixedSizeList as List } from 'react-window';

export const RepositoryListComponent = props => {
  const { className, repositories } = props;

  const Row = useCallback(({ index, style  }) => (
    <div class="row" style={style} key={repositories[index].id}>
      <div class="col">{repositories[index].id}</div>
      <div class="col">{repositories[index].name}</div>
      <div class="col">{repositories[index].watchers_count}</div>
    </div>
  ), [repositories]);


  return <div className={classNames(className, 'rokt-repository-list')}>
    <div class="row">
      <div class="col">Id</div>
      <div class="col">Name</div>
      <div class="col">Watcher Counts</div>
    </div>
    <List
    height={300}
    itemCount={repositories.length}
    itemSize={24}
    
    >
      {Row}
    </List>
  </div>


}
