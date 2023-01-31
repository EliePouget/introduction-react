import PropTypes from "prop-types";
import Card from "./Card.jsx";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react";

function FoldableCard({title, opened, children, ...props}){
    const [isShown, setIsShown] = useState(opened);

    let titleIcon = (
      <>
          {title}
          {opened ? <FontAwesomeIcon className={'foldable-icon'} icon="fa-solid fa-circle-minus" />
            : <FontAwesomeIcon className={'foldable-icon'} icon="fa-solid fa-circle-plus" />}
      </>
    );
    return (<Card onClick={() => setIsShown(!isShown)} title={titleIcon} className={isShown ? 'foldable shown' : 'foldable'}>{isShown && children}</Card>);
}
FoldableCard.defaultProps = {
    title: 'Title',
    children: 'Content',
    opened: false
};
FoldableCard.propTypes = {
    children: PropTypes.node,
    title: PropTypes.node,
    opened: PropTypes.bool
};

export default FoldableCard;
