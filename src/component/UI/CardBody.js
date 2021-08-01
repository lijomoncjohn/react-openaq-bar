import React from 'react';
import PropTypes from 'prop-types';

const CardBody = (props) => {
	return <div className={`${props.className} card-body`}>{props.children}</div>;
};

CardBody.propTypes = {};

export default CardBody;
