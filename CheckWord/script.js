'use strict'


function check(){
    let find = document.getElementById('find').value;
    let count = 0;
    for(let i=0; i<find.length; i++){
        if (find[i] === " " && find[i + 1] !== " "){
            count++;
        }else if (find[i] === "." && find[i + 1] !== "."){
            count++;
        }else if (find[i] === "?" && find[i + 1] !== "?"){
            count++;
        }else if (find[i] === "!" && find[i + 1] !== "!"){
            count++;
        }else{
            continue;
        }
    }
    document.getElementById("c1").innerText = count;
}




//bezi sehvler var uzerinde calisdim
//en duzgun calisan variant yaza bildiyim bu oldu :)