app.post('/user',(req,res)=>{
	console.log(req.body,'createdata');

	let userName = req.body.name;
	let eMail = req.body.email;
	let mb = req.body.mobile;

	let qr = `insert into user(name,email,mobile)
			  values('$(userName)','$(eMail)','$(mb)')`;

	db.query(qr,(err,result)=>{
		if(err){console.log(err);}
		
		if(result.length>0)
		{
			res.send({
				message:'data inserted'
			});
		}else
		{
			res.send({
				message:'wrong...'
			});
		}
	});
});