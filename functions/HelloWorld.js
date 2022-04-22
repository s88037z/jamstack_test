exports.handler = async function (event, context, cb) {
  return {
    statusCode: 200,
    body: JSON.stringify({ msg: "Hello World" }),
  };
};
