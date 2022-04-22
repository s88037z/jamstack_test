const axios = require("axios");
require("dotenv").config();
const { GET_LINKS } = require("./utils/linkQuries");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");
exports.handler = async function (event, context, cb) {
  try {
    const res = await sendQuery(GET_LINKS);
    const data = res.allLinks.data;
    return formattedResponse(200, data);
  } catch (error) {
    console.log(error);
    return formattedResponse(500, error);
  }
};
