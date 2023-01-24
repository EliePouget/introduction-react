import React from "react";

function Card({ title='Title', ...props }) {
    const { value, onChange } = props;
  return (
    <article className="card">
      <header className="card__header header__title">{title}</header>
      <section className="card__main">Content</section>
    </article>    
  );
}

export default Card;
