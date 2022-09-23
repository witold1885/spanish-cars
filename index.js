const express = require('express');
const app = express();
const fs = require('fs');
const axios = require('axios');
 
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello server is running')
    .end();
});

const token = "ROwNceprOpAINgRa"
 
app.get('/webhooks',  (req, res) => {
    // console.log(req);
    if (
        req.query['hub.mode'] == 'subscribe' &&
        req.query['hub.verify_token'] == token
    ) {
        res.send(req.query['hub.challenge']);
    } else {
        res.sendStatus(400);
    }
});

app.post('/webhooks', async (req, res) => {
  let body = req.body;
  console.log(body);
  // await fs.promises.writeFile(__dirname + '/test.json', JSON.stringify(body));
  axios.post('http://62.171.187.100/api/receive-message', body).then((response) => {
    console.log(response)
    res.status(200).send(body).end();
  }).catch((error) => {
    console.log('Error:')
    console.log(error)
    res.status(400).send(error).end();
  }) 
  
});

app.get('/login', async (req, res) => {
  let body = req.body;
  console.log(body);
  // await fs.promises.writeFile(__dirname + '/test.json', JSON.stringify(body));
  axios.post('http://62.171.187.100/api/receive-message', body).then((response) => {
    console.log(response)
    res.status(200).send(body).end();
  }).catch((error) => {
    console.log('Error:')
    console.log(error)
    res.status(400).send(error).end();
  }) 
})

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});