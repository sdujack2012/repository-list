import React from 'react';
import classNames from 'classnames';

export const TextInputComponent = props => {
  const { className, ...rest } = props;
  return <input className={classNames(className, 'rokt-text-input')} {...rest}  />;
}
