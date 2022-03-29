
import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/GamesHistoric.css';

const GamesHistoric = () => {

    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/games")
        .then(res => res.json())
        .then(data => {setRecords(data.msg); console.log(data.msg)})
    }, []);
    return(
        <div>
            <div className ="header">
                <img src="https://www.talentacompany.com/wp-content/uploads/2022/03/talenta-share.jpg" alt="talenta logo" width="150px" height="120px"/>
            </div>
                <NavLink to='/triqui'>
                    <button className = "Btn2">Juego</button>
                </NavLink>
            <div className='container'>
                <div className='subcontainer_1'>
                    <h1 className ="title">Puntuación</h1>
                </div>
                <div className='subcontainer_2'>
                    <table className="table">
                        <tr>
                            <th>Ganador</th>
                            <th>Perdedor</th>
                            <th>Fecha del juego</th>
                        </tr>
                    {records.map(h => {
                        return(
                            <tr>
                                <td key={h.id}>{h.winner}</td>
                                <td key={h.id}>{h.loser}</td>
                                <td key={h.id}>{h.date}</td>
                            </tr>
                        )
                    })}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default GamesHistoric;