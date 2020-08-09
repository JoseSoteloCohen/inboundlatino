const fetch = require('node-fetch');
const { GATSBY_SENDFOX_API_TOKEN } = process.env;


const API_ENDPOINT = "https://api.sendfox.com/contacts";

exports.handler = async (event, context) => {

  const parsedBody = JSON.parse(event.body);
  const name = parsedBody.name;
  const last = parsedBody.last;
  const email = parsedBody.email;
  const list = parsedBody.lists;

  const body = {
    email: email,
    lists: list,
    first_name: name ? name : null,
    last_name: last ? last : null
  }
  return fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${GATSBY_SENDFOX_API_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: JSON.stringify(data)
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
