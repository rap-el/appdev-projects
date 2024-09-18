import PropTypes from 'prop-types';

export default function Body(props) {
    return (
        <div className="person">
            <img 
                src={props.imageUrl} 
                alt={`${props.name}'s picture`} 
                className="person-picture"
            />
            <p><strong>{props.name}</strong></p>
            <p><strong>{props.content}</strong></p>
            
        </div>
    );
}

Body.defaultProps = {
    name: "Guest",
    content: "Guest",
    imageUrl: "https://placeholder.pics/svg/150x150", 
};

Body.propTypes = {
    name: PropTypes.string,
    content: PropTypes.string,
    imageUrl: PropTypes.string, 
};