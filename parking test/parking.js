const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function d1() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET",
    "http://localhost:3000/data1?=", false);
  xhr.send();
  var arr = JSON.parse(xhr.responseText);

  let xhr2 = new XMLHttpRequest();
  xhr2.open("GET",
    "http://localhost:3000/data2?=", false);
  xhr2.send();
  var arr2 = JSON.parse(xhr2.responseText);

var array = arr.GetParkInfo.row.concat(arr2.GetParkInfo.row);

console.log(array);

var parname = []
var info = []

for (var i = 0; i < 7; i++) {

  parname[i] = document.getElementById(`title${i}`);
  info[i] = document.getElementById(`text${i}`);

  parname[i].innerHTML = array[i].PARKING_NAME
  info[i].innerHTML =`주소 : ${array[i].ADDR}<br>전화번호 : ${array[i].TEL}<br>기본 요금 : ${array[i].RATES}<br>기본 주차 시간(분) : ${array[i].TIME_RATE}<br>추가 단위 요금(원) : ${array[i].ADD_RATES}<br>추가 단위 시간(분) : ${array[i].ADD_TIME_RATE}<br>일 최대 요금 : ${array[i].DAY_MAXIMUM}<br>평일 OPEN : ${array[i].WEEKDAY_BEGIN_TIME}<br>평일 CLOSE : ${array[i].WEEKDAY_END_TIME}<br>주말 OPEN : ${array[i].WEEKEND_BEGIN_TIME}<br>주말 CLOSE : ${array[i].WEEKEND_END_TIME}<br>종류 : ${array[i].PARKING_TYPE_NM}<br>운영구분 : ${array[i].OPERATION_RULE_NM}<br>야간 개방 : ${array[i].NIGHT_FREE_OPEN_NM}<br>`
}
console.log(parname)
}

d1()