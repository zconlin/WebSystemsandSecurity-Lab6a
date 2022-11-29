/*

This file is for creating a Mongoose Model/Schema

*/
// how to make sure its looking in the right collection
var mongoose = require('mongoose');
const { Schema } = mongoose;

const tasksSchema = new Schema({
  UserId: String, 
  Text: String,
  Done: Boolean,
  Date: String,
}, {collection:'Tasks'});

const Task = mongoose.model('Task', tasksSchema);

module.exports = Task