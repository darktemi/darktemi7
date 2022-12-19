"use strict"
let today = new Date();
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜
let now = `${year}${month}${date}`;

// 서울
(function weather_se() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET",
    "http://localhost:3000/proxy2?base_date=" + now +
    "&nx=" + 60 + "&ny=" + 127, false);
  xhr.send();
  const arr = JSON.parse(xhr.responseText);
  console.log(arr);
  let gmsky = arr.response.body.items.item[18].category;
  let gmskyvalue = arr.response.body.items.item[18].fcstValue;
  let gmpty = arr.response.body.items.item[6].fcstValue;
  let t1h = arr.response.body.items.item[24].category;
  let t1hvalue = arr.response.body.items.item[24].fcstValue;
  let rehvalue = arr.response.body.items.item[30].fcstValue;

  document.getElementById('setm').innerHTML = `${t1hvalue}℃`;
  document.getElementById('sereh').innerHTML = `${rehvalue}%`;

  if (gmpty == 0) {
    if (gmskyvalue == 1) {
      seim.setAttribute('class', 'sun');
    } else if (gmskyvalue == 3) {
      seim.setAttribute('class', 'cloud');
    } else {
      seim.setAttribute('class', 'blur');
    }
  } else if (gmpty == 1 || gmpty == 2 || gmpty == 5 || gmpty == 6) {
    seim.setAttribute('class', 'rain');
  } else {
    seim.setAttribute('class', 'snow');
  }
}());

// 인천
(function weather_incheon() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET",
    "http://localhost:3000/proxy2?base_date=" + now +
    "&nx=" + 55 + "&ny=" + 124, false);
  xhr.send();
  const arr = JSON.parse(xhr.responseText);
  console.log(arr);
  let gmsky = arr.response.body.items.item[18].category;
  let gmskyvalue = arr.response.body.items.item[18].fcstValue;
  let gmpty = arr.response.body.items.item[6].fcstValue;
  let t1h = arr.response.body.items.item[24].category;
  let t1hvalue = arr.response.body.items.item[24].fcstValue;
  let rehvalue = arr.response.body.items.item[30].fcstValue;

  document.getElementById('incheontm').innerHTML = `${t1hvalue}℃`;
  document.getElementById('incheonreh').innerHTML = `${rehvalue}%`;

  if (gmpty == 0) {
    if (gmskyvalue == 1) {
      incheonim.setAttribute('class', 'sun');
    } else if (gmskyvalue == 3) {
      incheonim.setAttribute('class', 'cloud');
    } else {
      incheonim.setAttribute('class', 'blur');
    }
  } else if (gmpty == 1 || gmpty == 2 || gmpty == 5 || gmpty == 6) {
    incheonim.setAttribute('class', 'rain');
  } else {
    incheonim.setAttribute('class', 'snow');
  }
}());

// 춘천
(function weather_chuncheon() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET",
    "http://localhost:3000/proxy2?base_date=" + now +
    "&nx=" + 73 + "&ny=" + 134, false);
  xhr.send();
  const arr = JSON.parse(xhr.responseText);
  console.log(arr);
  let chuncheonsky = arr.response.body.items.item[18].category;
  let chuncheonskyvalue = arr.response.body.items.item[18].fcstValue;
  let chuncheonpty = arr.response.body.items.item[6].fcstValue;
  let t1h = arr.response.body.items.item[24].category;
  let t1hvalue = arr.response.body.items.item[24].fcstValue;
  let rehvalue = arr.response.body.items.item[30].fcstValue;

  document.getElementById('chuncheontm').innerHTML = `${t1hvalue}℃`;
  document.getElementById('chuncheonreh').innerHTML = `${rehvalue}%`;

  if (chuncheonpty == 0) {
    if (chuncheonskyvalue == 1) {
      chuncheonim.setAttribute('class', 'sun');
    } else if (chuncheonskyvalue == 3) {
      chuncheonim.setAttribute('class', 'cloud');
    } else {
      chuncheonim.setAttribute('class', 'blur');
    }
  } else if (gmpty == 1 || gmpty == 2 || gmpty == 5 || gmpty == 6) {
    chuncheonim.setAttribute('class', 'rain');
  } else {
    chuncheonim.setAttribute('class', 'snow');
  }
}());

// 대전
(function weather_daejeon() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET",
    "http://localhost:3000/proxy2?base_date=" + now +
    "&nx=" + 67 + "&ny=" + 100, false);
  xhr.send();
  const arr = JSON.parse(xhr.responseText);
  console.log(arr);
  let daejeonsky = arr.response.body.items.item[18].category;
  let daejeonskyvalue = arr.response.body.items.item[18].fcstValue;
  let daejeonpty = arr.response.body.items.item[6].fcstValue;
  let t1h = arr.response.body.items.item[24].category;
  let t1hvalue = arr.response.body.items.item[24].fcstValue;
  let rehvalue = arr.response.body.items.item[30].fcstValue;

  document.getElementById('daejeontm').innerHTML = `${t1hvalue}℃`;
  document.getElementById('daejeonreh').innerHTML = `${rehvalue}%`;

  if (daejeonpty == 0) {
    if (daejeonskyvalue == 1) {
      daejeonim.setAttribute('class', 'sun');
    } else if (daejeonskyvalue == 3) {
      daejeonim.setAttribute('class', 'cloud');
    } else {
      daejeonim.setAttribute('class', 'blur');
    }
  } else if (gmpty == 1 || gmpty == 2 || gmpty == 5 || gmpty == 6) {
    daejeonim.setAttribute('class', 'rain');
  } else {
    daejeonim.setAttribute('class', 'snow');
  }
}());

// 대구
(function weather_daegu() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET",
    "http://localhost:3000/proxy2?base_date=" + now +
    "&nx=" + 89 + "&ny=" + 90, false);
  xhr.send();
  const arr = JSON.parse(xhr.responseText);
  console.log(arr);
  let daegusky = arr.response.body.items.item[18].category;
  let daeguskyvalue = arr.response.body.items.item[18].fcstValue;
  let daegupty = arr.response.body.items.item[6].fcstValue;
  let t1h = arr.response.body.items.item[24].category;
  let t1hvalue = arr.response.body.items.item[24].fcstValue;
  let rehvalue = arr.response.body.items.item[30].fcstValue;

  document.getElementById('daegutm').innerHTML = `${t1hvalue}℃`;
  document.getElementById('daegureh').innerHTML = `${rehvalue}%`;

  if (daegupty == 0) {
    if (daeguskyvalue == 1) {
      daeguim.setAttribute('class', 'sun');
    } else if (daeguskyvalue == 3) {
      daeguim.setAttribute('class', 'cloud');
    } else {
      daeguim.setAttribute('class', 'blur');
    }
  } else if (gmpty == 1 || gmpty == 2 || gmpty == 5 || gmpty == 6) {
    daeguim.setAttribute('class', 'rain');
  } else {
    daeguim.setAttribute('class', 'snow');
  }
}());

// 부산
(function weather_busan() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET",
    "http://localhost:3000/proxy2?base_date=" + now +
    "&nx=" + 98 + "&ny=" + 76, false);
  xhr.send();
  const arr = JSON.parse(xhr.responseText);
  console.log(arr);
  let busansky = arr.response.body.items.item[18].category;
  let busanskyvalue = arr.response.body.items.item[18].fcstValue;
  let busanpty = arr.response.body.items.item[6].fcstValue;
  let t1h = arr.response.body.items.item[24].category;
  let t1hvalue = arr.response.body.items.item[24].fcstValue;
  let rehvalue = arr.response.body.items.item[30].fcstValue;

  document.getElementById('busantm').innerHTML = `${t1hvalue}℃`;
  document.getElementById('busanreh').innerHTML = `${rehvalue}%`;


  if (busanpty == 0) {
    if (busanskyvalue == 1) {
      busanim.setAttribute('class', 'sun');
    } else if (busanskyvalue == 3) {
      busanim.setAttribute('class', 'cloud');
    } else {
      busanim.setAttribute('class', 'blur');
    }
  } else if (gmpty == 1 || gmpty == 2 || gmpty == 5 || gmpty == 6) {
    busanim.setAttribute('class', 'rain');
  } else {
    busanim.setAttribute('class', 'snow');
  }
}());

// 광주
(function weather_gwangju() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET",
    "http://localhost:3000/proxy2?base_date=" + now +
    "&nx=" + 68 + "&ny=" + 76, false);
  xhr.send();
  const arr = JSON.parse(xhr.responseText);
  console.log(arr);
  let gwangjusky = arr.response.body.items.item[18].category;
  let gwangjuskyvalue = arr.response.body.items.item[18].fcstValue;
  let gwangjupty = arr.response.body.items.item[6].fcstValue;
  let t1h = arr.response.body.items.item[24].category;
  let t1hvalue = arr.response.body.items.item[24].fcstValue;
  let rehvalue = arr.response.body.items.item[30].fcstValue;

  document.getElementById('gwangjutm').innerHTML = `${t1hvalue}℃`;
  document.getElementById('gwangjureh').innerHTML = `${rehvalue}%`;

  if (gwangjupty == 0) {
    if (gwangjuskyvalue == 1) {
      gwangjuim.setAttribute('class', 'sun');
    } else if (gwangjuskyvalue == 3) {
      gwangjuim.setAttribute('class', 'cloud');
    } else {
      gwangjuim.setAttribute('class', 'blur');
    }
  } else if (gmpty == 1 || gmpty == 2 || gmpty == 5 || gmpty == 6) {
    gwangjuim.setAttribute('class', 'rain');
  } else {
    gwangjuim.setAttribute('class', 'snow');
  }
}());