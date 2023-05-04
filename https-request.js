const https = require('https');
const config = {
  host: 'google.com',
  method: 'GET',
  path: '/',
  port: 8080
};

const request = https.request(config, (response)=>{
  response.on('data', (data)=>{
    console.log(String(data));
  });
});

request.on('error', (err)=>{
  console.log(err);
});

request.end();
