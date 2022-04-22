const axios = require("axios");
require("dotenv").config();
const { CREATE_LINKS } = require("./utils/linkQuries");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");
exports.handler = async function (event, context, cb) {
  const { name, url, description } = JSON.parse(event.body);
  const variables = { name, url, description, archived: false };
  try {
    const { createLink: createdLink } = await sendQuery(
      CREATE_LINKS,
      variables
    );
    return formattedResponse(200, createdLink);
  } catch (error) {
    console.log(error);
    return formattedResponse(500, error);
  }
};
