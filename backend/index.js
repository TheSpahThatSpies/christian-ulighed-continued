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

//hent alle data
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

//hent enkelte data
app.get('/user/:id',(req,res)=>{
	let getID = req.params.id;
	let qr = `select * from user where userid = ${getID}`;

	db.query(qr,(err,result)=>{
		if(err) {console.log(err);}
		
		if(result.length>0)
		{
			res.send({
				message: 'get single data',
				data:result
			});
		}
		else
		{
			res.send({
				message: 'data not found',
			});
		}

	});
});




app.use(cors());
app.use(bodyparser.json());

app.listen(3000,()=>(
	console.log('server running poggers')
));