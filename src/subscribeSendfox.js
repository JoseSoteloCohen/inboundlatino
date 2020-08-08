export function addToSendfox(email, list, name, lastname) {

  const encodedUrl = `/sendfox/contacts?email=${email}&lists[]=${list.list}`;

  const headers = new Headers();
  headers.append('Authorization', `Bearer ${process.env.GATSBY_SENDFOX_API_TOKEN}`);

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

