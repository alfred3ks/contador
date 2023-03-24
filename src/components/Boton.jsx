import style from "./Boton.module.css";

const Boton = ({ texto, esBotonDeClic, manejarClic }) => {
	return (
		<button
			className={esBotonDeClic ? style.botonClic : style.botonReiniciar}
			onClick={manejarClic}
		>
			{texto}
		</button>
	);
};

export default Boton;
