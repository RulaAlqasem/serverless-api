const peopleSchema = require('./people.schema');
exports.handler = async (event) => {
  try {
    const id = event?.pathParameters?.id;
    let data;
    if (id) {
      await peopleSchema.delete({ id });
    }
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      status: 500,
      message: e.message,
    };
  }
}