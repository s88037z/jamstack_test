const axios = require("axios");
require("dotenv").config();
const { UPDATE_LINK } = require("./utils/linkQuries");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");
exports.handler = async function (event, context, cb) {
  const { name, url, description, _id, archived } = JSON.parse(event.body);
  const variables = { name, url, description, archived, id: _id };
  try {
    const { updateLink: updatedLink } = await sendQuery(UPDATE_LINK, variables);
    return formattedResponse(200, updatedLink);
  } catch (error) {
    console.log(error);
    return formattedResponse(500, error);
  }
};
