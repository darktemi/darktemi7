var puz = [["image/00.jpg","image/01.jpg","image/02.jpg","image/03.jpg"],
["image/10.jpg","image/11.jpg","image/12.jpg","image/13.jpg"],
["image/20.jpg","image/21.jpg","image/22.jpg","image/23.jpg"],
["image/30.jpg","image/31.jpg","image/32.jpg","image/33.jpg"]];

var x, y, i, j, s1, s2, s3, s4, c1, c2, c3, c4, temp;

function in_puzzle() {
			document.getElementById('p00').src = puz[0][0];
			document.getElementById('p01').src = puz[0][1];
			document.getElementById('p02').src = puz[0][2];
			document.getElementById('p03').src = puz[0][3];
			document.getElementById('p10').src = puz[1][0];
			document.getElementById('p11').src = puz[1][1];
			document.getElementById('p12').src = puz[1][2];
			document.getElementById('p13').src = puz[1][3];
			document.getElementById('p20').src = puz[2][0];
			document.getElementById('p21').src = puz[2][1];
			document.getElementById('p22').src = puz[2][2];
			document.getElementById('p23').src = puz[2][3];
			document.getElementById('p30').src = puz[3][0];
			document.getElementById('p31').src = puz[3][1];
			document.getElementById('p32').src = puz[3][2];
			document.getElementById('p33').src = puz[3][3];
};

function puzzle(x, y) {
	if(x>0 && puz[x-1][y] == 'image/33.jpg') {change(x,y,x-1,y);}
	if(x<4 && pux[x+1][y] == 'image/33.jpg') {change(x,y,x+1,y);}
	if(y>0 && puz[x][y-1] == 'image/33.jpg') {change(x,y,x,y-1);}
	if(y<4 && puz[x][y+1] == 'image/33.jpg') {change(x,y,x,y+1);}
};

function change(c1, c2, c3, c4) {
	temp = puz[c1][c2];
	puz[c1][c2] = puz[c3][c4];
	puz[c3][c4] = temp;

	in_puzzle();
}

function sort() {
	for(i=0; i<20; i++) {
		s1 = Mate.floor(Math.random()*4);
		s2 = Mate.floor(Math.random()*4);
		s3 = Mate.floor(Math.random()*4);
		s4 = Mate.floor(Math.random()*4);
		temp = puz[s1][s2];
		puz[s1][s2] = puz[s3][s4];
		puz[s3][s4] = temp;
	}
	in_puzzle();
}

function solve() {
	puz = [["image/00.jpg","image/01.jpg","image/02.jpg","image/03.jpg",],
	["image/10.jpg","image/11.jpg","image/12.jpg","image/13.jpg"],
	["image/20.jpg","image/21.jpg","image/22.jpg","image/23.jpg"],
	["image/30.jpg","image/31.jpg","image/32.jpg","image/33.jpg"]];

	in_puzzle();
}

