const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function d1(a, b, c, d, e, f, g) {
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

  if (a < 1000) {
    $("#title1").html(array[a].PARKING_NAME).css('display', 'block');
    $("#text1").html(`주소 : ${array[a].ADDR}<br>전화번호 : ${array[a].TEL}<br>기본 요금 : ${array[a].RATES}<br>기본 주차 시간(분) : ${array[a].TIME_RATE}<br>추가 단위 요금(원) : ${array[a].ADD_RATES}<br>추가 단위 시간(분) : ${array[a].ADD_TIME_RATE}<br>일 최대 요금 : ${array[a].DAY_MAXIMUM}<br>평일 OPEN : ${array[a].WEEKDAY_BEGIN_TIME}<br>평일 CLOSE : ${array[a].WEEKDAY_END_TIME}<br>주말 OPEN : ${array[a].WEEKEND_BEGIN_TIME}<br>주말 CLOSE : ${array[a].WEEKEND_END_TIME}<br>종류 : ${array[a].PARKING_TYPE_NM}<br>운영구분 : ${array[a].OPERATION_RULE_NM}<br>야간 개방 : ${array[a].NIGHT_FREE_OPEN_NM}<br>`);
    $("#title2").css('display', 'none');
    $("#title3").css('display', 'none');
    $("#title4").css('display', 'none');
    $("#title5").css('display', 'none');
    $("#title6").css('display', 'none');
    $("#title7").css('display', 'none');
  } else if (a > 1500){
    Swal.fire({
      icon: 'error',
      title: '주차장이 없습니다.',
      text: '',
      footer: ''
    })
  };

  if (b < 1000) {
    $("#title2").html(array[b].PARKING_NAME).css('display', 'block');
    $("#text2").html(`주소 : ${array[b].ADDR}<br>전화번호 : ${array[b].TEL}<br>기본 요금 : ${array[b].RATES}<br>기본 주차 시간(분) : ${array[b].TIME_RATE}<br>추가 단위 요금(원) : ${array[b].ADD_RATES}<br>추가 단위 시간(분) : ${array[b].ADD_TIME_RATE}<br>일 최대 요금 : ${array[b].DAY_MAXIMUM}<br>평일 OPEN : ${array[b].WEEKDAY_BEGIN_TIME}<br>평일 CLOSE : ${array[b].WEEKDAY_END_TIME}<br>주말 OPEN : ${array[b].WEEKEND_BEGIN_TIME}<br>주말 CLOSE : ${array[b].WEEKEND_END_TIME}<br>종류 : ${array[b].PARKING_TYPE_NM}<br>운영구분 : ${array[b].OPERATION_RULE_NM}<br>야간 개방 : ${array[b].NIGHT_FREE_OPEN_NM}<br>`);
  } else {
    $("#title3").css('display', 'none');
    $("#title4").css('display', 'none');
    $("#title5").css('display', 'none');
    $("#title6").css('display', 'none');
    $("#title7").css('display', 'none');
  };
  if (c < 1000) {
    $("#title3").html(array[c].PARKING_NAME).css('display', 'block');
    $("#text3").html(`주소 : ${array[c].ADDR}<br>전화번호 : ${array[c].TEL}<br>기본 요금 : ${array[c].RATES}<br>기본 주차 시간(분) : ${array[c].TIME_RATE}<br>추가 단위 요금(원) : ${array[c].ADD_RATES}<br>추가 단위 시간(분) : ${array[c].ADD_TIME_RATE}<br>일 최대 요금 : ${array[c].DAY_MAXIMUM}<br>평일 OPEN : ${array[c].WEEKDAY_BEGIN_TIME}<br>평일 CLOSE : ${array[c].WEEKDAY_END_TIME}<br>주말 OPEN : ${array[c].WEEKEND_BEGIN_TIME}<br>주말 CLOSE : ${array[c].WEEKEND_END_TIME}<br>종류 : ${array[c].PARKING_TYPE_NM}<br>운영구분 : ${array[c].OPERATION_RULE_NM}<br>야간 개방 : ${array[c].NIGHT_FREE_OPEN_NM}<br>`);
  }else {
    $("#title4").css('display', 'none');
    $("#title5").css('display', 'none');
    $("#title6").css('display', 'none');
    $("#title7").css('display', 'none');
  };
  if (d < 1000) {
    $("#title4").html(array[d].PARKING_NAME).css('display', 'block');
    $("#text4").html(`주소 : ${array[d].ADDR}<br>전화번호 : ${array[d].TEL}<br>기본 요금 : ${array[d].RATES}<br>기본 주차 시간(분) : ${array[d].TIME_RATE}<br>추가 단위 요금(원) : ${array[d].ADD_RATES}<br>추가 단위 시간(분) : ${array[d].ADD_TIME_RATE}<br>일 최대 요금 : ${array[d].DAY_MAXIMUM}<br>평일 OPEN : ${array[d].WEEKDAY_BEGIN_TIME}<br>평일 CLOSE : ${array[d].WEEKDAY_END_TIME}<br>주말 OPEN : ${array[d].WEEKEND_BEGIN_TIME}<br>주말 CLOSE : ${array[d].WEEKEND_END_TIME}<br>종류 : ${array[d].PARKING_TYPE_NM}<br>운영구분 : ${array[d].OPERATION_RULE_NM}<br>야간 개방 : ${array[d].NIGHT_FREE_OPEN_NM}<br>`);
  }else {
    $("#title5").css('display', 'none');
    $("#title6").css('display', 'none');
    $("#title7").css('display', 'none');
  };
  if (e < 1000) {
    $("#title5").html(array[e].PARKING_NAME).css('display', 'block');
    $("#text5").html(`주소 : ${array[e].ADDR}<br>전화번호 : ${array[e].TEL}<br>기본 요금 : ${array[e].RATES}<br>기본 주차 시간(분) : ${array[e].TIME_RATE}<br>추가 단위 요금(원) : ${array[e].ADD_RATES}<br>추가 단위 시간(분) : ${array[e].ADD_TIME_RATE}<br>일 최대 요금 : ${array[e].DAY_MAXIMUM}<br>평일 OPEN : ${array[e].WEEKDAY_BEGIN_TIME}<br>평일 CLOSE : ${array[e].WEEKDAY_END_TIME}<br>주말 OPEN : ${array[e].WEEKEND_BEGIN_TIME}<br>주말 CLOSE : ${array[e].WEEKEND_END_TIME}<br>종류 : ${array[e].PARKING_TYPE_NM}<br>운영구분 : ${array[e].OPERATION_RULE_NM}<br>야간 개방 : ${array[e].NIGHT_FREE_OPEN_NM}<br>`);
  }else {
    $("#title6").css('display', 'none');
    $("#title7").css('display', 'none');
  };
  if (f < 1000) {
    $("#title6").html(array[f].PARKING_NAME).css('display', 'block');
    $("#text6").html(`주소 : ${array[f].ADDR}<br>전화번호 : ${array[f].TEL}<br>기본 요금 : ${array[f].RATES}<br>기본 주차 시간(분) : ${array[f].TIME_RATE}<br>추가 단위 요금(원) : ${array[f].ADD_RATES}<br>추가 단위 시간(분) : ${array[f].ADD_TIME_RATE}<br>일 최대 요금 : ${array[f].DAY_MAXIMUM}<br>평일 OPEN : ${array[f].WEEKDAY_BEGIN_TIME}<br>평일 CLOSE : ${array[f].WEEKDAY_END_TIME}<br>주말 OPEN : ${array[f].WEEKEND_BEGIN_TIME}<br>주말 CLOSE : ${array[f].WEEKEND_END_TIME}<br>종류 : ${array[f].PARKING_TYPE_NM}<br>운영구분 : ${array[f].OPERATION_RULE_NM}<br>야간 개방 : ${array[f].NIGHT_FREE_OPEN_NM}<br>`);
  }else {
    $("#title7").css('display', 'none');
  };
  if (g < 1000) {
    $("#title7").html(array[g].PARKING_NAME).css('display', 'block');
    $("#text7").html(`주소 : ${array[g].ADDR}<br>전화번호 : ${array[g].TEL}<br>기본 요금 : ${array[g].RATES}<br>기본 주차 시간(분) : ${array[g].TIME_RATE}<br>추가 단위 요금(원) : ${array[g].ADD_RATES}<br>추가 단위 시간(분) : ${array[g].ADD_TIME_RATE}<br>일 최대 요금 : ${array[g].DAY_MAXIMUM}<br>평일 OPEN : ${array[g].WEEKDAY_BEGIN_TIME}<br>평일 CLOSE : ${array[g].WEEKDAY_END_TIME}<br>주말 OPEN : ${array[g].WEEKEND_BEGIN_TIME}<br>주말 CLOSE : ${array[g].WEEKEND_END_TIME}<br>종류 : ${array[g].PARKING_TYPE_NM}<br>운영구분 : ${array[g].OPERATION_RULE_NM}<br>야간 개방 : ${array[g].NIGHT_FREE_OPEN_NM}<br>`);
};
}

d1(0,1001,1001,1001,1001,1001,1001)