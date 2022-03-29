
const {Game} = require('../models');

const getGame = async() => {

    let games = await Game.findAll({
        atributes: ['winner', 'loser', 'date']
    });

    if(games.length>0){
        return games.map(g => {
            return {
                winner: g.winner,
                loser: g.loser,
                date: g.date,
            }
        });
    }
    return [{
        winner: "-",
        loser: "-",
        date: "-",
    }];
}

const postGame = async(winner, loser, date) => {
    if(winner && loser && date){
        await Game.create({
            winner: winner,
            loser: loser,
            date: date,
        });
    
        return "Game saved";
    }
    else return "Error saving the game";
}

module.exports = {
    getGame,
    postGame
}