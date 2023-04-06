area = document.getElementById('area');


for (var i = 0; i <= 91; i++) {

    if ((i == 57) || (i == 89)) {
        n = 0;
    }
    else {
        
        area.innerHTML += "<div class='block' id='" + i + "'></div>"
        
    }
    

    if (i == 0){
        area.innerHTML += "<div class='emptyOne'></div>"
    }

    if ((i == 3) || (i == 11)){
        area.innerHTML += "<div class='emptyTwo'></div>"
    }
    
    
}

value = 1
block = document.getElementsByClassName('block')
for (var i = 0; i < 90; i++) {

    if (i == 56){
        value += 14;
        block[i].innerHTML = "*";
    }
    else if(i == 74) {
        value += 14
        
        block[i].innerHTML = "**";
    }
    else {
        block[i].innerHTML = value;
    }

    

    value++;
}

document.body.innerHTML += "<div id='area2' class='area2'></div>"
document.body.innerHTML += "<div id='area3' class='area3'></div>"


area2 = document.getElementById('area2');
for (var i = 57; i < 72; i++) {
    area2.innerHTML += "<div class='block' id='" + i + "s'>" + i + "</div>"
}

area3 = document.getElementById('area3');
for (var i = 88; i < 103; i++) {
    area3.innerHTML += "<div class='block' id='" + i + "s'>" + i + "</div>"
}
