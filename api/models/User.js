/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	fname:{
        type:"string",
        required:true,
        minLength: 2
      },      
      lname:{
        type:"string",
        required:"true"
      }
  }
};

