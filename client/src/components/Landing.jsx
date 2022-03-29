
import React from "react";
import {NavLink} from "react-router-dom";
import '../styles/Landing.css'

export default function Landing(){

    return(
        <div>
            <div className ="header">
                <img src="https://www.talentacompany.com/wp-content/uploads/2022/03/talenta-share.jpg" alt="talenta logo" width="150px" height="120px"/>
            </div>

            <h1 className ="title">Triqui Game</h1>
            <img className="img" src="https://media.istockphoto.com/vectors/tic-tac-toe-variations-on-chalkboard-vector-id494543321?k=20&m=494543321&s=612x612&w=0&h=wfy6Q5jZvULpvC1xi_eJCPRx_tsESU0ygZAdCeCwFiw=" alt="triqui" width="327px" height="250px"/>
            <NavLink to = '/triqui'>
                <button type="button" className = "Btn">Inicio</button>
            </NavLink>
        </div>   
    )
}