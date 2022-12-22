function parking_info(a) { 
  var xhr = new XMLHttpRequest();
  xhr.open("GET",
      "http://localhost:3000/proxy2?=", false);
  xhr.send();
  var obj = JSON.parse(xhr.responseText);
  console.log(obj);

$("div > h3").html(obj.GetParkInfo.row[a].PARKING_NAME);
$("#text1").html(
  `주소 : ${obj.GetParkInfo.row[a].ADDR}<br>
  전화번호 : ${obj.GetParkInfo.row[a].TEL}<br>
  주차장 종류 : ${obj.GetParkInfo.row[a].PARKING_TYPE_NM}<br>
  유/무료 : ${obj.GetParkInfo.row[a].PAY_NY}<br>
  기본 주차 요금 : ${obj.GetParkInfo.row[a].RATES}<br>
  기본 주차 시간 : ${obj.GetParkInfo.row[a].TIME_RATE}<br>
  추가 단위 요금 : ${obj.GetParkInfo.row[a].ADD_RATES}<br>
  추가 단위 시간 : ${obj.GetParkInfo.row[a].ADD_TIME_RATE}<br>
  일 최대 요금 : ${obj.GetParkInfo.row[a].DAY_MAXIMUM}<br>
  평일 OPEN : ${obj.GetParkInfo.row[a].WEEKDAY_BEGIN_TIME}<br>
  평일 CLOSE : ${obj.GetParkInfo.row[a].WEEKDAY_END_TIME}<br>
  평일 OPEN : ${obj.GetParkInfo.row[a].WEEKEND_BEGIN_TIME}<br>
  평일 CLOSE : ${obj.GetParkInfo.row[a].WEEKEND_END_TIME}<br>
  야간 무료개방 : ${obj.GetParkInfo.row[a].NIGHT_FREE_OPEN_NM}<br>
  `);
};


parking_info(1);