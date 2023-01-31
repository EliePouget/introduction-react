import PropTypes from "prop-types";
import Card from "/src/components/Card.jsx";
import useShowable from "../hooks/useShowable.jsx";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function FoldableCard({title, opened, onToggleOpened, children, ...props}){
    const showable = useShowable(opened)
    let titleIcon = (
      <>
          {title}
          {showable.isShown ? <FontAwesomeIcon className={'foldable-icon'} icon="fa-solid fa-circle-minus" />
            : <FontAwesomeIcon className={'foldable-icon'} icon="fa-solid fa-circle-plus" />}
      </>
    );
    return (<Card onClick={showable.toggleShown} title={titleIcon} className={showable.className}>{showable.isShown && children}</Card>);
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