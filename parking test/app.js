const express = require('express');
const request = require('request');
const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/data1', (req, res) => {

  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json; charset=UTF-8');

  let arr = "http://openapi.seoul.go.kr:8088/5576734d7964617235335241727462/json/GetParkInfo/1/1000/%EA%B0%95%EB%82%A8"

  request.get({
    uri: arr
  }, (error, response, body) => {
    res.send(body)
  });
});

app.get('/data2', (req, res) => {

  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json; charset=UTF-8');

  let arr2 = "http://openapi.seoul.go.kr:8088/5576734d7964617235335241727462/json/GetParkInfo/1001/2000/%EA%B0%95%EB%82%A8"

  request.get({
    uri: arr2
  }, (error, response, body) => {
    res.send(body)
  });
});


app.listen(
  3000,
  () => {
    console.log(`${port}번 포트에서 서버 시작했슴!`);
  }
);
