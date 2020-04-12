const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//Adds to the RESTFUL API to /input once user inputs data then press = on index.html
router.post('/',(request,response) => {
	console.log('Recieve survey on server', request.body);
	response.json({
		status: 'success',
	});
});

module.exports = router;