import React, { useState } from "react";
import style from "./Contador.module.css";

const Contador = ({ numClics }) => {
	return <div className={style.contador}>{numClics}</div>;
};

export default Contador;
