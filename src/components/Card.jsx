import React from 'react';
import PropTypes from 'prop-types';

function Card({
  title, className, children, ...props }) {
  return (
    <article className={`card ${className}`}>
      <header className="card__header header__title">{title}</header>
      <section className="card__main">{children}</section>
    </article>
  );
}
Card.defaultProps = {
  title: 'Title',
  children: 'Content',
  className: 'shown',
};
Card.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
  className: PropTypes.node,
};

export default Card;
