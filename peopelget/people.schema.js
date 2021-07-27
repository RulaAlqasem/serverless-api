const dynamoose = require('dynamoose');

const peopelSchema = new dynamoose.Schema({
  id: String,
  name: String,
  age: String,
});

module.exports = dynamoose.model('peopel', peopelSchema);