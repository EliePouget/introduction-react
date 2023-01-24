import PropTypes from "prop-types";
import Card from "./Card.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function FoldableCard({title, opened, children, ...props}){
    let className = 'foldable'
    let titleIcon = (
        <>
            {title}
            <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
        </>
    );
    if (opened){
        className = 'shown';
        titleIcon = (
            <>
                {title}
                <FontAwesomeIcon icon="fa-solid fa-circle-minus" />
            </>
        );}
    return (<Card title={titleIcon} className={className}>{opened && children}</Card>);
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
