import React from "react";

//include images into your bundle
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card_title.jsx";
import Title from "./titles.jsx";
//create your first component
const Home = () => {
	return (
		<div className="container my-5">
			<Navbar title="React and bootstrap" />
			<div className="container-xxl py-5 ">
				<Jumbotron />
			</div>
			<div className="row d-flex text-center py-5">
				<Title text="Testing: Props of React " />
			</div>
			<div className="container-sm">
				<div className="row align-items-center">
					<div className="col">
						{" "}
						<Card
							title="Frist Card"
							description="Hola estoy probando el text de la primera card. Esto es una prueba,Esto es una prueba,Esto es una prueba,Esto es una prueba."
							buttonStyle="danger"
							button="Leer más"
						/>
					</div>
					<div className="col">
						<Card
							title="Second Card"
							description="Hola estoy probando el text de la segunda card. Esto es una prueba,Esto es una prueba,Esto es una prueba,Esto es una prueba."
							buttonStyle="info"
							button="Leer más"
						/>
					</div>
					<div className="col">
						<Card
							title="Third Card"
							description="Hola estoy probando el text de la tercera card. Esto es una prueba,Esto es una prueba,Esto es una prueba,Esto es una prueba."
							buttonStyle="secondary"
							button="Leer más"
						/>
					</div>
					<div className="col">
						<Card
							title="Fourth Card"
							description="Hola estoy probando el text de la cuarta card. Esto es una prueba,Esto es una prueba,Esto es una prueba,Esto es una prueba."
							buttonStyle="warning"
							button="Leer más"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
