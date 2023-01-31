import React from 'react';
import PropTypes, { node } from "prop-types";

function Cards({ className, children, ...props }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
Cards.defaultProps = {
  className : ''
};
Cards.propTypes = {
  className : PropTypes.node
};

export default Cards;
