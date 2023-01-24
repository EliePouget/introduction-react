import React from "react";
import PropTypes from "prop-types";

function Card({ title, children, ...props }) {
  return (
    <article className="card">
      <header className="card__header header__title">{title}</header>
      <section className="card__main">{children}</section>
    </article>    
  );
}
Card.defaultProps = {
    title: 'Title',
    children: 'Content'
};
Card.propTypes = {
    children: PropTypes.node,
    title: PropTypes.node
};

export default Card;
