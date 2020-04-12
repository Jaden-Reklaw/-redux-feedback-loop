const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//Adds to the RESTFUL API to /input once user inputs data then press = on index.html
router.post('/',(request,response) => {
	console.log('Recieve survey on server', request.body);
    let data = request.body;
    console.log(data);
    
    //SQL parameter to fill in the values - $1, $2, etc...
    let sqlText = `INSERT INTO feedback (feeling, feel_comment, understanding, understand_comment, support, support_comment, thank_comment, proud_comment, last_comment)
                     VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9);`;

    pool.query(sqlText, [data.feel.level, data.feel.summary,
                         data.understand.level, data.understand.summary,
                         data.support.level, data.support.summary,
                         data.comment.thank_summary, data.comment.proud_summary, 
                         data.comment.last_summary])
    .then((result) => {
        response.sendStatus(201);
    }).catch((error) => {
        console.log('Error', error);
        response.sendStatus(500);
    });
});

module.exports = router;