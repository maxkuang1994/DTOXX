var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');


var userSchema = mongoose.Schema({
	"name" : { type: String },
  "ig_id" : { type: String},
	"ig_access_token" : { type: String },
});



var userSchema2 = mongoose.Schema({
	//"id": { type: id },
	"message" : { type: String },
    "image" : { type: String },
});

//var Cat = mongoose.model('Cat', { name: String });

exports.User = mongoose.model('User', userSchema);
exports.FBChallenges = mongoose.model('FBChallenges', userSchema2);


