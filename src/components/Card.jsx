import React from "react";

function Card(props) {

  return (
    <article className="card">
      <header className="card__header header__title">{props.value}</header>
      <section className="card__main">Content</section>
    </article>    
  );
}

export default Card;
