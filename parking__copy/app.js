const express = require('express');
const request = require('request');
const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/proxy2', (req, res) => {

  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json; charset=UTF-8');

  let openApiUrl = "http://openapi.seoul.go.kr:8088/4e4a5361776f626835356947637144/json/GetParkInfo/1/1000/%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%82%BC%EC%84%B1%EB%8F%99"

  request.get({
    uri: openApiUrl
  }, (error, response, body) => {
    res.send(body);
  });
});


app.listen(
  3000,
  () => {
    console.log(`${port}번 포트에서 서버 시작했슴!`);
  }
);
