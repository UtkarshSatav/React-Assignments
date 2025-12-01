import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({ name, age }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
            <h2>User Card</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Age:</strong> {age}</p>
        </div>
    );
};

UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
};

UserCard.defaultProps = {
    name: 'Unknown User',
    age: 0,
};

export default UserCard;
