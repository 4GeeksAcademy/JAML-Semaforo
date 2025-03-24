import React, { useState } from "react";
import "./Semaforo.css";

//create your first component
const Semaforo = () => {

	const lightOn = 'lightOn';
	const [redLight, setRed] = useState(''); 
	const [yellowLight, setYellow] = useState('');
	const [greenLight, setGreen] = useState('');
	const [purpleLight, setPurple] = useState('');
	const [newLight, setActive] = useState(false)

	function activeRed(){
		setRed(lightOn)
		setYellow("")
		setGreen("")
		setPurple("")
	};

	function activeYellow(){
		setYellow(lightOn)
		setRed("")
		setGreen("")
		setPurple("")
	};

	function activeGreen(){
		setGreen(lightOn)
		setRed("")
		setYellow("")
		setPurple("")
	};

	function activePurple(){
		setPurple(lightOn)
		setRed("")
		setYellow("")
		setGreen("")
	};

	function cambio() {
			if(newLight) {
				if(redLight === lightOn) {activeYellow()}
				else if(yellowLight === lightOn) {activeGreen()}
				else if(greenLight === lightOn) {activePurple()}
				else {activeRed()}
			} else {
				if(redLight === lightOn) {activeYellow()}
				else if(yellowLight === lightOn) {activeGreen()}
				else {activeRed()}
			}
			
		
	}

	function createLight() {
		setActive(!newLight)
	}

    return (
        <>
            <div className="trafficLight"></div>
                <div className="container">
                    <div onClick={activeRed} className={`redLight ${activeRed ? redLight : ""} `}></div>
                    <div onClick={activeYellow} className={`yellowLight ${activeYellow ? yellowLight : ""} `}></div>
                    <div onClick={activeGreen} className={`greenLight ${activeGreen ? greenLight : ""} `}></div>
					{newLight ? <div  onClick={activePurple} className={`purpleLight ${activePurple ? purpleLight : ""}` }></div>  : <div>  </div>}
                </div>
				<div className="boton">
					<button type="button" onClick={cambio} className="btn-secondary">Cambio</button>
				</div>
				<div className="boton Render">
					<button type="button" onClick={createLight} className="btn-secondary">Mistery Light</button>
				</div>
        </>
    );
};

export default Semaforo;