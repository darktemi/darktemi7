var puzzle = document.getElementById('puzzle');

// solve 함수 호출
solve();

// 퍼즐 셀 클릭 이벤트
puzzle.addEventListener('click', function(e){
		// 슬라이딩 애니메이션 사용
		puzzle.className = 'animate';
		shiftCell(e.target);
	}
);

// scramble에서 클릭 이벤트 발생 시 scramble함수 실행
document.getElementById('scramble').addEventListener('click', scramble);

// 해결된 퍼즐을 만듭니다.
function solve(){
	
	puzzle.innerHTML = '';
	
	var n = 1;
	for(var i = 0; i <= 3; i++){
		for(var j = 0; j <= 3; j++){
			var cell = document.createElement('span');
			cell.id = 'cell-'+i+'-'+j;
			cell.style.left = (j*80+1*j+1)+'px';
			cell.style.top = (i*80+1*i+1)+'px';
			
			if(n <= 15){
				cell.classList.add('number');
				cell.classList.add((i%2==0 && j%2>0 || i%2>0 && j%2==0) ? 'dark' : 'light');
				cell.innerHTML = (n++).toString();
			} else {
				cell.className = 'empty';
			}
			puzzle.appendChild(cell);
		}
	}
}

// 숫자 셀을 빈 셀로 이동
function shiftCell(cell){
	// 선택한 셀에 번호가 있는지 확인
	if(cell.clasName != 'empty'){
		// 빈 인접 셀을 비우려고 함
		var emptyCell = getEmptyAdjacentCell(cell);
		if(emptyCell){
			// 임시 데이터
			var tmp = {style: cell.style.cssText, id: cell.id};
			// ID 및 스타일 값 교환
			cell.style.cssText = emptyCell.style.cssText;
			cell.id = emptyCell.id;
			emptyCell.style.cssText = tmp.style;
			emptyCell.id = tmp.id;
			// 번호 순서를 확인
			setTimeout(checkOrder, 150);
		}
	}
}
	

// 행 및 열별로 특정 셀을 가져옴

function getCell(row, col) {
	return document.getElementById('cell-'+row+'-'+col);
}

// 빈 셀을 가져옴

function getEmptyCell() {
	return puzzle.querySelector('.empty');
}

// 인접 셀이 있는 경우 빈 셀을 가져옴
function getEmptyAdjacentCell(cell){
	// 모든 인접 셀을 가져옴
	var adjacent = getAdjacentCells(cell);
	// 빈 셀을 검색
	for(var i = 0; i < adjacent.length; i++){
		if(adjacent[i].className == 'empty'){
			return adjacent[i];
		}
	}
	// 빈 인접 셀을 찾을 수 없음
	return false;
}

// 모든 인접 셀을 가져옴

function getAdjacentCells(cell){
	var id = cell.id.split('-');
	// 셀 위치 인덱스를 가져옴
	var row = parseInt(id[1]);
	var col = parseInt(id[2]);
	var adjacent = [];
	// 가능한 모든 인접 셀을 가져옴
	if(row < 3){adjacent.push(getCell(row+1, col));}			
	if(row > 0){adjacent.push(getCell(row-1, col));}
	if(col < 3){adjacent.push(getCell(row, col+1));}
	if(col > 0){adjacent.push(getCell(row, col-1));}
	return adjacent;
}

// 숫자 순서가 올바른지 확인
function checkOrder(){
	// 빈 셀이 올바른 위치에 있는지 확인
	if(getCell(3, 3).className != 'empty'){
		return;
	}

	var n = 1;
	// 모든 셀의 번호를 확인
	for(var i = 0; i <= 3; i++){
		for(var j = 0; j <= 3; j++){
			if(n <= 15 && getCell(i, j).innerHTML != n.toString()){
				// Order가 올바르지 않음
				return;
			}
			n++;
		}
	}
	// 퍼즐 해결! 섞을지 알림창
	if(confirm('Congrats, You did it! \nScramble the puzzle?')){
		scramble();
	}
}

// 퍼즐 섞기
function scramble(){
	puzzle.removeAttribute('class');
	var previousCell;
	var i = 1;
	var interval = setInterval(function(){
		if(i <= 100){
			var adjacent = getAdjacentCells(getEmptyCell());
			if(previousCell){
				for(var j = adjacent.length-1; j >= 0; j--){
					if(adjacent[j].innerHTML == previousCell.innerHTML){
						adjacent.splice(j, 1);
					}
				}
			}
			// 임의의 인접 셀을 가져와 다음 반복을 위해 기억함
			previousCell = adjacent[rand(0, adjacent.length-1)];
			shiftCell(previousCell);
			i++;
		} else {
			clearInterval(interval);
		}
	}, 5);
}

// 난수 생성
function rand(from, to){
	return Math.floor(Math.random() * (to - from + 1)) + from;
}
