import React, { useState } from "react";
import '/workspaces/juan-salazar-TrafficLight-react-hello/src/styles/index.css';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const[rojo,setRojo]=useState("secondary")
	const[amarillo,setAmarillo]=useState("secondary")
	const[verde,setVerde]=useState("secondary")

	const [brilloRojo, setBrilloRojo] = useState(false);
  const [brilloAmarillo, setBrilloAmarillo] = useState(false);
  const [brilloVerde, setBrilloVerde] = useState(false);

  const prenderRojo=()=>{
		setRojo("danger")
		setAmarillo("secondary")
		setVerde("secondary")
		setBrilloRojo(true);
        setBrilloAmarillo(false);
        setBrilloVerde(false);

		
	}
	const prenderAmarillo=()=>{
		  setAmarillo("warning")
		  setRojo("secondary")
		  setVerde("secondary")
		  setBrilloRojo(false);
		  setBrilloAmarillo(true);
		  setBrilloVerde(false);
	}
	const prenderVerde=()=>{
		  setAmarillo("secondary")
		  setRojo("secondary")
		  setVerde("success")
		  setBrilloRojo(false);
          setBrilloAmarillo(false);
          setBrilloVerde(true);
	}
	return (
		
		 <div className="text-center container " style={{ backgroundColor: "black" ,width:"10%",borderRadius: "10px" }}>
           <div className={`bg-${rojo} rounded-circle mt-1 ${brilloRojo ? 'bright' : ''} `} style={{width:"100px",height:"100px"}} onClick={prenderRojo}>
			</div> 
			<div className={`bg-${amarillo} rounded-circle mt-1${brilloAmarillo ? 'bright' : ''}`} style={{width:"100px",height:"100px"}} onClick={prenderAmarillo}>
			</div>
			<div className={`bg-${verde} rounded-circle mt-1 ${brilloVerde ? 'bright' : ''}`} style={{width:"100px",height:"100px"}} onClick={prenderVerde}>
			</div>
		</div>
	);
};

export default Home;
