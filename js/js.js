var d1 = 1;
var d2 = 2;
t1 = 550;
t2 = 10;
var s = t1+t2;

function tang1(obj){
		d1 += 1;
		if(d1==1){t1 = 550;}
		if(d1>1){t1 = (d1-1)*550+550;}
		s = t1+t2;
		document.getElementById('input').value = d1; 
		document.getElementsByClassName('total1')[0].innerHTML = '$ ' + t1;
		document.getElementById('subtotal').innerHTML = '$ ' + s;
		document.getElementById('alltotal').innerHTML = '$ ' + s;
}

function giam1(obj){
		d1 -= 1;
		if(d1<1){d1 = 0;t1 = 0;}
		if(d2>=1){t1 = d1*550};
		s = t1+t2;
		document.getElementById('input').value = d1; 
		document.getElementsByClassName('total1')[0].innerHTML = '$ ' + t1;
		document.getElementById('subtotal').innerHTML = '$ ' + s;
		document.getElementById('alltotal').innerHTML = '$ ' + s;
}

function tang2(obj){
		d2 += 1;
		if(d2>2){t2 = (d2-2)*5+10;}
		if(d2==1 || d2==2){t2 = d2*5;}
		s = t1+t2;
		document.getElementById('input_').value = d2; 
		document.getElementsByClassName('total2')[0].innerHTML = '$ ' + t2;
		document.getElementById('subtotal').innerHTML = '$ ' + s;
		document.getElementById('alltotal').innerHTML = '$ ' + s;
}

function giam2(obj){
		d2 -= 1;
		if(d2<1){d2 = 0;t2 = 0;}
		if(d2>=1){t2 = d2*5;}
		s = t1+t2;
		document.getElementById('input_').value = d2; 
		document.getElementsByClassName('total2')[0].innerHTML = '$ ' + t2;
		document.getElementById('subtotal').innerHTML = '$ ' +  s;
		document.getElementById('alltotal').innerHTML = '$ ' + s;
}

function hide_(obj){
	if(obj.name == 'img1'){
		document.getElementsByClassName('product1')[0].style.display = 'none';
	}
	if(obj.name == 'img2'){
		document.getElementsByClassName('product2')[0].style.display = 'none';
	}
}