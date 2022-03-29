
import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import Swal from "sweetalert2";
import '../styles/Home.css';
import {
  validateColumnWinner,
  validateRowWinner,
  validateDiagonal,
  validateIdentical
} from "../controllers/home";
import { postGameValidator } from '../controllers/gamesHistoric';

const Home = () => {
  
  const [state, setState] = useState({
    player: "X",
    counter: 0,
  });
  const [grid, setGrid] = useState([Array(3).fill(""), Array(3).fill(""), Array(3).fill("")]);
  // const [score, setScore] = useState({
  //   X: 0,
  //   O: 0,
  // });
  
  const HandlePlayerChange1 = (e) => {
    e.preventDefault();
    let position = e.target.id.split("-")
    grid[position[0]][position[1]] = state.player;
    triquiLogic(e, position[0], position[1], grid, state.player, "O")
  }

  const HandlePlayerChange2 = (e) => {
    e.preventDefault();
    let position = e.target.id.split("-")
    grid[position[0]][position[1]] = state.player;
    triquiLogic(e, position[0], position[1], grid, state.player, "X")
  }

  const triquiLogic = (e, row, col, grid, player, mark) => {
    if (isWinner(row, col, grid, player)) {
      HandleReset(e);
    } else if (state.counter === 9) {
      message();
      postGameValidator();
      HandleReset(e);
    } else {
      setState({
        ...state,
        player: mark,
      });
    }
  }

  const HandleReset = (e) => {
    e.preventDefault();
    setGrid([Array(3).fill(""), Array(3).fill(""), Array(3).fill("")]);
    setState({
      ...state,
      player: "X",
      counter: 0,
    });
  }
  
  const isWinner = (row, col, grid, turn) => {
    setState({
      ...state,
      counter: state.counter++,
    })
    if (validateRowWinner(row, grid, turn) || validateColumnWinner(col, grid, turn) || validateIdentical(grid, turn) || validateDiagonal(grid, turn)) {
      message(turn);
      postGameValidator(turn);
      return true
    }
    //     if(result !== null) {
//       setScore({
//         ...score,
//         [result]: score[result] + 1,
//       })
    return false
  }

  const message = (turn = "") => {
    if (turn === "X"){
      Swal.fire({
        title: 'Felicidades JUGADOR 1 Ganaste!',
        width: 600,
        padding: '3em',
        color: '#002538',
        background: '#fff'
      });
    } else if (turn === "O"){
      Swal.fire({
        title: 'Felicidades JUGADOR 2 Ganaste!',
        width: 600,
        padding: '3em',
        color: '#002538',
        background: '#fff'
      })
    } else {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Empate",
        text: "Has Empatado!",
      });
    }
  }

  return (
    <div>
      <div className ="header">
        <img src="https://www.talentacompany.com/wp-content/uploads/2022/03/talenta-share.jpg" alt="talenta logo" width="150px" height="120px"/>
      </div>
        <NavLink to = '/'>
          <button type="button" className = "Btn2">Home Page</button>
        </NavLink>
      <div className="App">
        <h1 className ="title1">Triqui Game</h1>
        {state.player==="X"?
        <h2 className ="title2">Turno de Jugador 1 - "X"</h2>:
        <h2 className ="title2">Turno de Jugador 2 - "O"</h2>}
        {grid.map((row, rowId) => {
          return(
            <div className='row' >
              {row.map((cell, columnId) => {
            
                return(
                  cell!==""?
                  <button id={`${rowId}-${columnId}`} className={cell}>{cell}</button> 
                  :state.player==="X" ? 
                  <button id={`${rowId}-${columnId}`}  onClick={HandlePlayerChange1}>{cell}</button> : 
                  <button id={`${rowId}-${columnId}`}  onClick={HandlePlayerChange2}>{cell}</button>) 
              })}
            </div>
          )
        })}
        <div className='menu'>
          <button  onClick={HandleReset}>New game!</button>
          <NavLink to='/games'><button>Puntuación</button></NavLink>
          {/* <ScoreTable scoreO={state.O} scoreX={state.X}/> */}
        </div>
      </div>
    </div>
  );
}

export default Home;

