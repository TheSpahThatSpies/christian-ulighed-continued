const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyparser.json());

//database setup
const db = mysql.createConnection({
	host:'localhost',
	user:'root',
	password: 'root',
	database: 'inequalitydb',
	port: 3306
});

//database connection check
db.connect(err=>{
	if (err) {console.log(err, 'dberr');}
	console.log('database connected...');
})

//----------------------USER----------------------
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

//opret data
app.post('/user',(req,res)=>{
	console.log(req.body,'createdata');

	let userName = req.body.name;
	let eMail = req.body.email;
	let mb = req.body.mobile;

	let qr = `insert into user(name,email,mobile)
			  values('${userName}','${eMail}','${mb}')`;
			  console.log(qr,'qr')
			  db.query(qr,(err,result)=>{
				  
				  if(err){console.log(err);}
				  console.log(result,'result')
				  res.send({
					  message:'data inserted',
				  });
			  });
	});

	//opdater enkel data
	app.put('/user/:id',(req,res)=>{
		console.log(req.body,'updatedata');

		let getID = req.params.id;
		let userName = req.body.name;
		let eMail = req.body.email;
		let mb = req.body.mobile;

		let qr = `update user set name = '${userName}', email = '${eMail}', mobile = '${mb}'
		where userid = '${getID}'`;

		db.query(qr,(err,result)=>{
			if(err) {console.log(err);}
			
			res.send({
				message:'data updated'
			});
		});
	});

	//slet enkel data
	app.delete('/user/:id', (req,res)=>{

		let getID = req.params.id;

		let qr = `delete from user where userid = '${getID}' `;
		db.query(qr,(err,result)=>{
			if(err) {console.log(err);}

			res.send(
				{
					message:'data deleted'
				}
			)
		});
	});

//----------------------FACT----------------------
//hent alle data
app.get('/fact',(req,res)=>{
	let qr = `select * from fact`;

	db.query(qr,(err,result)=>{
		if(err)
		{
			console.log(err, 'errs');
		}
		
		if(result.length>0)
		{
			res.send({
				message:'all fact data',
				data:result
			});
		}
	});
});

//hent enkelte data
app.get('/fact/:id',(req,res)=>{
	let getID = req.params.id;
	let qr = `select * from fact where factid = ${getID}`;

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

//opret data
app.post('/fact',(req,res)=>{
	console.log(req.body,'createdata');

	let factInfo = req.body.factText;

	let qr = `insert into fact(factText)
			  values('${factInfo}')`;
			  console.log(qr,'qr')
			  db.query(qr,(err,result)=>{
				  
				  if(err){console.log(err);}
				  console.log(result,'result')
				  res.send({
					  message:'data inserted',
				  });
			  });
	});

	//opdater enkel data
	app.put('/fact/:id',(req,res)=>{
		console.log(req.body,'updatedata');

		let getID = req.params.id;
		let factInfo = req.body.factText;

		let qr = `update fact set factText = '${factInfo}'
		where factid = '${getID}'`;

		db.query(qr,(err,result)=>{
			if(err) {console.log(err);}
			
			res.send({
				message:'data updated'
			});
		});
	});

	//slet enkel data
	app.delete('/fact/:id', (req,res)=>{

		let getID = req.params.id;

		let qr = `delete from fact where factid = '${getID}' `;
		db.query(qr,(err,result)=>{
			if(err) {console.log(err);}

			res.send(
				{
					message:'data deleted'
				}
			)
		});
	});


app.use(cors());
app.use(bodyparser.json());

app.listen(3000,()=>(
	console.log('server running poggers')
));