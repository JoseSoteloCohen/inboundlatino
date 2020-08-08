export function addToSendfox(email, list, name, lastname) {

  const encodedUrl = `https://api.sendfox.com/contacts?email=${email}&lists[]=${list.list}`;

  const headers = new Headers();
  headers.append('Authorization', `Bearer ${process.env.GATSBY_SENDFOX_API_TOKEN}`);
  headers.append('Access-Control-Allow-Methods', 'POST');
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  headers.append('Access-Control-Allow-Headers', 'authorization');

  const config = {
    method: 'POST',
    headers: headers,
    mode: 'cors',
    cache: 'default',
    redirect:'error'
  }

  return fetch(encodedUrl, config)
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

