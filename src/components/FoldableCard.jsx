import PropTypes from "prop-types";
import Card from "./Card.jsx";

function FoldableCard({title, opened, children, ...props}){
    let className = 'foldable'
    if (opened) className = 'shown'
    return (<Card title={title} className={className}>{opened && children}</Card>);
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
