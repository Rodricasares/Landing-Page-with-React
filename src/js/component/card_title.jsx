import React from "react";
import imagen from "../../img/image.jpg";
import PropTypes from "prop-types";

const Card = (props) => {
	return (
		<div
			className="card shadow-lg p-3 mb-5 bg-body rounded"
			style={{ width: "17rem" }}>
			<img src={imagen} className="card-img-top" alt={imagen}></img>
			<div className="card-body mb-2 text-dark">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href="#" className={`btn btn-${props.buttonStyle}`}>
					{props.button}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	button: PropTypes.string,
	buttonStyle: PropTypes.string,
};

export default Card;
