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

//hent data
app.get('/user',(req,res)=>{
	let qr = `select * from user`;

	db.query(qr,(err,result)=>{
		if(err)
		{
			console.log(err, 'errs');
		}
		
		if(result.length>0)
		{
			res.send({
				message:'all user data',
				data:result
			});
		}
	});
});

app.use(cors());
app.use(bodyparser.json());

app.listen(3000,()=>(
	console.log('server running poggers')
));