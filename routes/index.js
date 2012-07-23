
exports.api = function(req, res) {
	// var eval = (1,eval);
	var code = req.body.method+' '+req.body.params.join(' ');
	var result = eval(code);
	var out = {result:''+result, error:null, id:req.body.id};
	res.send(JSON.stringify(out));
};

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};
