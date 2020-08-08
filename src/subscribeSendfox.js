export function addToSendfox(email, list, name, lastname) {

  const headers = new Headers();
  headers.append('Authorization', `Bearer ${process.env.GATSBY_SENDFOX_API_TOKEN}`);
  headers.append('Content-Type', 'application/json');
  headers.append('accept', 'application/json');
  headers.append('method', 'POST');
  headers.append('data_format', 'body');

  const data = {
    email: email,
    lists: list.list
  }
  const config = {
    headers: headers,
    body: JSON.stringify(data)
  }


  return fetch('/sendfox-contact/', config)
    .then(r => {
      console.log(r)
      return r;
    })
    .catch(err => {
      console.log("====================================")
      console.log(err)
      console.log("====================================")
    })
}

