
const express = require('express');
const router = express.Router();
const {getGame, postGame} = require('../controllers/triqui.controller');

router.get('/', async(req,res) => {
    try {
        let result = await getGame();
        res.status(201).json({msg: result});
    } catch (error) {

        console.error(err.message);
		res.status(500).json({
			msg: 'There was an error...',
			error: err.message
		});
    }
});

router.post('/', async(req,res) => {
    try {
        const {winner, loser, date} = req.body;
        let result = await postGame(winner, loser, date);
        res.status(201).json({msg: result});
    } catch (error) {

        console.error(err.stack);
		res.status(500).json({
			msg: 'There was an error...',
			error: err.message
		});
    }
});

module.exports = router;