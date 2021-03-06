const axios = require("axios");
require("dotenv").config();
const { DELETE_LINK } = require("./utils/linkQuries");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");
exports.handler = async function (event, context, cb) {
  const { id } = JSON.parse(event.body);
  const variables = { id };
  try {
    const { deleteLink: deletedLink } = await sendQuery(DELETE_LINK, variables);
    return formattedResponse(200, deletedLink);
  } catch (error) {
    console.log(error);
    return formattedResponse(500, error);
  }
};
