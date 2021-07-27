const peopleSchema = require('./people.schema');
exports.handler = async (event) => {
  try {
    const id = event?.pathParameters?.id;
    const { name, age } = JSON.parse(event.body);
    const data = await peopleSchema.update({ id }, { name, age });
    return {
      statusCode: 201,
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      status: 500,
      message: e.message,
    };
  }
};