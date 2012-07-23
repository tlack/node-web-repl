var util = require('util');

exports.api = function(req, res) {
	// var eval = (1,eval);
	var code = req.body.method+' '+req.body.params.join(' ');
	var result = util.inspect(eval(code), true, 10);
	var out = {result:''+result, error:null, id:req.body.id};
	res.send(JSON.stringify(out));
};

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};
