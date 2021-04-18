let pexesoKarty = ["😂", "🥰", "🤔", "🙂", "😍", "😎", "🤩", "😃"]
let pexesoKarty2 = pexesoKarty.length

let nactise = function () {
    pexeso_deska = document.getElementById("boardPexeso")
    pole_zdvojnasobeni();
    pole_nahodneRozhazeni();
    karticky();
}

let pole_zdvojnasobeni = function () {
    for (let i = 0; i < pexesoKarty2; i++) {
        pexesoKarty.push(pexesoKarty[i])
    }
}

let pole_nahodneRozhazeni = function () {
    for (let i = 0; i < pexesoKarty.length; i++) {
        let nahodnyShuffle = Math.floor(Math.random() * i);

        let prohazenyKarty = pexesoKarty[i];

        pexesoKarty[i] = pexesoKarty[nahodnyShuffle];

        pexesoKarty[nahodnyShuffle] = prohazenyKarty;
    }
}

let karticky = function () {
    for (let i = 0; i < pexesoKarty.length; i++) {
        let vyzobrazeniKarty = document.createElement('div')
        vyzobrazeniKarty.innerText = pexesoKarty[i]

        pexeso_deska.appendChild(vyzobrazeniKarty)
    }
}


window.onload = nactise;