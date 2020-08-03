import Axios from "axios"

export function addToSendfox(email, list, name, lastname) {

  const encodedUrl = `https://api.sendfox.com/contacts?email=${email}&lists[]=${list.list}`;

  const headers = {
    'Authorization': `Bearer ${process.env.GATSBY_SENDFOX_API_TOKEN}`
  };
  console.log('url', encodedUrl);

  return Axios.post(encodedUrl, null, {headers})
    .then(result => {
      console.log('resultado', result)
      return result;
    })
    .catch(err => {
      console.log("====================================")
      console.log(`Something bad happened while fetching the data\n${err}`)
      console.log("====================================")
    })
}

