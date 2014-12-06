/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: function (req, res) {
    res.view('sampleForm', {
        title: "Employee"
    });
  },
  hi: function (req, res) {
  	var params = req.params.all(); 
  	User.create({
	  fname: params.fname,
	  lname: params.lname
	}).exec(
	function(err, user) {
		// console.log(err);
		// console.log(user);
		if(err)
		res.json({'status':"fail"});
		else
		res.json({'status':"success"});
	});
	
	// console.log(params.fname);
	// console.log();
	// res.json({'data':req.params.all()});
	// res.view(req.param.all());
  },
  getData: function (req,res) {
  	User.find().exec(function(err, data) {
        if (err) res.json({'status':"fail"});
        res.json(data);  
    });
  }
};

