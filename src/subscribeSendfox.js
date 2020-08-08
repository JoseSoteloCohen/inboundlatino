export function addToSendfox(email, list, name, lastname) {

  const encodedUrl = 'https://api.sendfox.com/contacts';
  //const encodedUrl = '/sendfox-contact/';

  const headers = new Headers();
  headers.append('Authorization', `Bearer ${process.env.GATSBY_SENDFOX_API_TOKEN}`);

  const data = {
    email: email,
    'list': list.list
  }
  const config = {
    method: 'POST',
    headers: headers,
    mode: 'cors',
    cache: 'default',
    redirect:'error',
    body: JSON.stringify(data)
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

