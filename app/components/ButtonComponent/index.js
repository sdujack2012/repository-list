import React from 'react';
import classNames from 'classnames';

export const ButtonComponent = props => {
  const { className, ...rest } = props;
  return <button className={classNames(className, 'rokt-button')} {...rest} />;
}
