import PropTypes from 'prop-types';

export default function Body(props) {
    return (
        <div className="person">
            <img 
                src={props.imageUrl} 
                alt={`${props.name}'s picture`} 
                className="person-picture"
            />
            <p>      This is <strong>{props.name}'s</strong> <strong>{props.state}</strong> <strong>{props.thing}</strong>: <strong>{props.content}</strong></p>
        </div>
    );
}

Body.defaultProps = {
    name: "Guest",
    state: "Unknown",
    thing: "Unknown",
    content: "Unknown",
    imageUrl: "https://placeholder.pics/svg/150x150", 
};

Body.propTypes = {
    name: PropTypes.string,
    state: PropTypes.string,
    thing: PropTypes.string,
    content: PropTypes.string,
    imageUrl: PropTypes.string, 
};
