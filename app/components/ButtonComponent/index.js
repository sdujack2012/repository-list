import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';

export const ButtonComponent = props => {
  const { className, ...rest } = props;
  return <button className={classNames(className, 'rokt-button')} {...rest} />;
};

ButtonComponent.prototype = {
  className: propTypes.string,
};
