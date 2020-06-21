import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';

export const TextInputComponent = props => {
  const { className, ...rest } = props;
  return (
    <input className={classNames(className, 'rokt-text-input')} {...rest} />
  );
};

TextInputComponent.prototype = {
  className: propTypes.string,
};
