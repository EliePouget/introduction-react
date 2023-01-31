import React from 'react';
import PropTypes, { node } from "prop-types";
import FoldableCard from "./FoldableCard.jsx";
import foldableCard from "./FoldableCard.jsx";

function Cards({ className, cardsData, ...props }) {
  return (
    <div className={className}>
      {cardsData.map(obj =>
        <FoldableCard title={obj.title} opened={true}>{obj.content}</FoldableCard>
      )}
    </div>
  );
}
Cards.defaultProps = {
  className : '',
  cardsData : []
};
Cards.propTypes = {
  className : PropTypes.node,
  cardsData: PropTypes.arrayOf + PropTypes.shape,
};

export default Cards;
