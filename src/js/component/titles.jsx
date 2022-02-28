import React from "react";
import PropTypes from "prop-types";

const Title = (props) => {
	return <h3>{props.text}</h3>;
};

Title.propTypes = {
	text: PropTypes.string,
};

export default Title;
