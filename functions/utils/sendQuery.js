const axios = require("axios");
require("dotenv").config();

module.exports = async (query, variables) => {
  const {
    data: { data, errors },
  } = await axios({
    url: "https://graphql.fauna.com/graphql",
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_DB_KEY}`,
    },
    data: {
      query,
      variables,
    },
  });

  if (errors) {
    console.log(errors);
    throw new Error(JSON.stringify(errors));
  }
  return data;
};
