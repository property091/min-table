groups = document.getElementById('groups');
periods = document.getElementById('periods')


for (var i = 0; i < 18; i++) {
    groups.innerHTML += "<div class='block2' id='" + i + "group'>" + (i + 1) + "</div>"
        
}

for (var i = 0; i < 9; i++) {
    if (i == 7) {
        periods.innerHTML += "<div class='block2' id='" + i + "period'>" + "L" + "</div>"
      
    }
    else if (i == 8) {
        periods.innerHTML += "<div class='block2' id='" + i + "period'>" + "D" + "</div>"
        
    }
    else {
        periods.innerHTML += "<div class='block2' id='" + i + "period'>" + (i + 1) + "</div>"
      
    }
      
}

document.getElementById('7period').style.marginLeft = '170px'
document.getElementById('8period').style.marginLeft = '170px'
document.getElementById('7period').style.marginTop = '80px'

for (var i = 58; i <= 71; i++) {
    document.getElementById(`${i}s`).style.backgroundColor = "orchid" 
}

for (var i = 89; i <= 102; i++) {
    document.getElementById(`${i}s`).style.backgroundColor = "purple" 
}

document.getElementById('2').style.backgroundColor = "darkred" 
document.getElementById('10').style.backgroundColor = "darkred" 
document.getElementById('18').style.backgroundColor = "darkred" 
document.getElementById('36').style.backgroundColor = "darkred" 
document.getElementById('54').style.backgroundColor = "darkred" 
document.getElementById('73').style.backgroundColor = "darkred" 

document.getElementById('0').style.backgroundColor = "lightgreen" 
document.getElementById('5').style.backgroundColor = "lightgreen" 
document.getElementById('6').style.backgroundColor = "lightgreen" 
document.getElementById('7').style.backgroundColor = "lightgreen" 
document.getElementById('14').style.backgroundColor = "lightgreen" 
document.getElementById('15').style.backgroundColor = "lightgreen" 
document.getElementById('33').style.backgroundColor = "lightgreen" 

document.getElementById('1').style.backgroundColor = "lightblue" 
document.getElementById('9').style.backgroundColor = "lightblue" 
document.getElementById('17').style.backgroundColor = "lightblue" 
document.getElementById('35').style.backgroundColor = "lightblue" 
document.getElementById('53').style.backgroundColor = "lightblue" 
document.getElementById('72').style.backgroundColor = "lightblue" 
document.getElementById('91').style.backgroundColor = "lightblue" 


document.getElementById('3').style.backgroundColor = "tan" 
document.getElementById('11').style.backgroundColor = "tan" 
document.getElementById('19').style.backgroundColor = "tan" 
document.getElementById('37').style.backgroundColor = "tan" 
document.getElementById('55').style.backgroundColor = "tan" 
document.getElementById('74').style.backgroundColor = "tan" 

document.getElementById('8').style.backgroundColor = "wheat" 
document.getElementById('16').style.backgroundColor = "wheat" 
document.getElementById('34').style.backgroundColor = "wheat" 
document.getElementById('52').style.backgroundColor = "wheat" 
document.getElementById('71').style.backgroundColor = "wheat" 
document.getElementById('90').style.backgroundColor = "wheat" 

document.getElementById('4').style.backgroundColor = "darkolivegreen" 
document.getElementById('13').style.backgroundColor = "darkolivegreen" 
document.getElementById('31').style.backgroundColor = "darkolivegreen" 
document.getElementById('32').style.backgroundColor = "darkolivegreen" 
document.getElementById('50').style.backgroundColor = "darkolivegreen" 
document.getElementById('51').style.backgroundColor = "darkolivegreen" 
document.getElementById('70').style.backgroundColor = "darkolivegreen" 


document.getElementById('12').style.backgroundColor = "darkgray" 
document.getElementById('30').style.backgroundColor = "darkgray" 

document.getElementById('48').style.backgroundColor = "darkgray" 
document.getElementById('49').style.backgroundColor = "darkgray" 

document.getElementById('67').style.backgroundColor = "darkgray" 
document.getElementById('68').style.backgroundColor = "darkgray" 
document.getElementById('69').style.backgroundColor = "darkgray" 

document.getElementById('85').style.backgroundColor = "darkgray" 
document.getElementById('86').style.backgroundColor = "darkgray" 
document.getElementById('87').style.backgroundColor = "darkgray" 
document.getElementById('88').style.backgroundColor = "darkgray" 

document.getElementById('56').style.backgroundColor = "orchid" 
document.getElementById('75').style.backgroundColor = "purple" 

