const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();


//database




app.use(cors());
app.use(bodyparser.json());

app.listen(3000,()=>(
	console.log('server running poggers')
));