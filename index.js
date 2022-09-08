const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello server is running')
    .end();
});
 
app.get('/webhook', (req, res) => {
  /*if ($_GET['hub_mode'] == 'subscribe' && $_GET['hub_verify_token'] == 'ROwNceprOpAINgRa') {
            return $_GET['hub_challenge'];
        }*/
  console.log(req.query)
  res
    .status(200)
    .send('ROwNceprOpAINgRa')
    .end();
});
  /*form_data = request.query_params
    mode = form_data.get('hub.mode')
    token = form_data.get('hub.verify_token')
    challenge = form_data.get('hub.challenge')
    if mode and token:
        if mode == 'subscribe' and token == "mytestingtoken":
            print("WEBHOOK_VERIFIED")
            return JsonResponse({"code":200,'message':challenge})
        else:
            return JsonResponse({"code":403})
    return JsonResponse({"code":200,'message':'test'})*/
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});