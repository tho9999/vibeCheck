'use client';
import { useSearchParams } from "next/navigation"
import axios from 'axios'

let client_id = 'd281a48fc615470bae01e8658c953561'
let client_secret = 'f885485f72094ea9a79b6c223d1cfb70'
let redirect_uri = 'http://localhost:3000/callback'



export default function Home() {
  // retrieves auth code from page.js
  const searchParams = useSearchParams();
  const code = searchParams.get('code')

  // we have to query string the data to send the request
  var querystring = require('querystring');

  // url to send the request to  
  const url = 'https://accounts.spotify.com/api/token';

  // body of the request
  const body = {
    grant_type: 'client_credentials',
    code: code,
    redirect_uri: redirect_uri,
    client_id: client_id,
    client_secret: client_secret,
  }

  // headers of the request for authorization
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded', 
    'Authorization' : 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
  }

  // send the request
  axios
  .post(
    "https://accounts.spotify.com/api/token",
    querystring.stringify(body),
    headers
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });


  return (
    <div>
      <h1>{code}</h1>
      <h1 className="text-lg text-red-500"> test </h1>
    </div>
  )
}
