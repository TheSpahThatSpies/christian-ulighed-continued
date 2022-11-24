const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();


//database setup
const db = mysql.createConnection({
	host:'localhost',
	user:'root',
	password: '',
	database: 'inequalitydb',
	port: 3306
});

//database connection check
db.connect(err=>{
	if (err) {console.log(err, 'dberr');}
	console.log('database connected...');
})



app.use(cors());
app.use(bodyparser.json());

app.listen(3000,()=>(
	console.log('server running poggers')
));