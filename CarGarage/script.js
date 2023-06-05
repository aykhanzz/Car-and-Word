'use strict'


let bmw = {
    model: 'M4',
    year: '2010',
    color: 'Yellow',
    speed: '280'
}


let audi = {
    model: 'Q5',
    year: '2021',
    color: 'White',
    speed: '260'
}


let kia = {
    model: 'Sonata',
    year: '2013',
    color: 'Gray',
    speed: '240'
}


let vaz = {
    model: '07',
    year: '2010',
    color: 'Black',
    speed: '220'
}


let opel = {
    model: 'astra',
    year: '2005',
    color: 'Green',
    speed: '240'
}




function info() {
    let mycar = document.getElementById('Info');
    mycar.innerHTML =
    `Model: ${this.model} 
    <br>
    Year: ${this.year} 
    <br>
    Color: ${this.color}
    <br>
    Speed: ${this.speed}`
}




function find() {
    let select = document.getElementById('select');
    let selectCar = select.value;
    if (selectCar === "Bmw") {
        info.call(bmw);
    }
    else if (selectCar === "Audi") {
        info.call(audi);
    }
    else if (selectCar === "Kia") {
        info.call(kia);
    }
    else if (selectCar === "Vaz") {
        info.call(vaz);
    }else if (selectCar === "Opel") {
        info.call(opel);
    }

}