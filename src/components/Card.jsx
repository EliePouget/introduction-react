import React from "react";

function Card(props) {

  return (
    <article className="card">
      <header className="card__header header__title">{props.title}</header>
      <section className="card__main">Content</section>
    </article>    
  );
}
Card.defaultProps = {
    title: 'Title'
};

export default Card;
