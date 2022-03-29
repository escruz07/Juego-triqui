export const postGameValidator = (player='empate') => {
    if(player === 'X'){
            fetch("http://localhost:3001/games",{
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                date: new Date().toLocaleString('es-CO'),
                winner: 'Jugador 1',
                loser: 'Jugador 2',
            }),
            }).then(res => res.json())
            .then(res => console.log("request:",res));
    }
    else if(player === 'O'){
        fetch("http://localhost:3001/games",{
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                date: new Date().toLocaleString('es-CO'),
                winner: 'Jugador 2',
                loser: 'Jugador 1',
            }),
            }).then(res => res.json())
            .then(res => console.log("request:",res));
    }
    else {
        fetch("http://localhost:3001/games",{
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                date: new Date().toLocaleString('es-CO'),
                winner: 'Empate',
                loser: 'Empate',
            }),
            }).then(res => res.json())
            .then(res => console.log("request:",res));
    }
}