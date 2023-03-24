import { useState } from "react";
import "./App.css";
import Contador from "./components/Contador";
import Boton from "./components/Boton";

const App = () => {
	const [numClics, setNumClics] = useState(0);

	const manejarClic = () => {
		setNumClics(numClics + 1);
	};

	const resetContador = () => {
		setNumClics(0);
	};

	return (
		<div className='App'>
			<div className='logo-contenedor'>
				<h1>Contador</h1>
			</div>
			<div className='contenedor-principal'>
				<Contador numClics={numClics} />
				<Boton
					texto={"Clic"}
					esBotonDeClic={true}
					manejarClic={manejarClic}
				/>
				<Boton
					texto={"Reiniciar"}
					esBotonDeClic={false}
					manejarClic={resetContador}
				/>
			</div>
		</div>
	);
};

export default App;
