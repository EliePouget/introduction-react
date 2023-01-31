import React, { useState } from "react";
import PropTypes, { node } from "prop-types";
import FoldableCard from "./FoldableCard.jsx";
import useShowable from "../hooks/useShowable.jsx";

function Cards({ openedIndex, className, cardsData, ...props }) {
  const [isOpenedIndex, setOpenedIndex] = useState(openedIndex)
  return (
    <div className={className}>
      {cardsData.map(obj =>
        <FoldableCard
          title={obj.title}
          opened={obj.id === isOpenedIndex}
          onToggleOpened={(useShowable(obj.id === isOpenedIndex).toggleShown)}>{obj.content}</FoldableCard>
      )}
    </div>
  );
}
Cards.defaultProps = {
  className : '',
  cardsData : [],
  openedIndex : null,
};
Cards.propTypes = {
  className : PropTypes.node,
  cardsData: PropTypes.arrayOf + PropTypes.shape,
  openedIndex : PropTypes.number,
};

export default Cards;
