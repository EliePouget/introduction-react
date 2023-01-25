import PropTypes from "prop-types";
import Card from "./Card.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function FoldableCard({title, opened, children, ...props}){


    let titleIcon = (
      <>
          {title}
          {opened ? <FontAwesomeIcon icon="fa-solid fa-circle-minus" />
            : <FontAwesomeIcon icon="fa-solid fa-circle-plus" />}
      </>
    );
    return (<Card title={titleIcon} className={opened ? 'foldable shown' : 'foldable'}>{opened && children}</Card>);
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
