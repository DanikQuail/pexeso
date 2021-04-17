let pexesoKarty = ["😂", "🥰", "🤔", "🙂", "😍", "😎", "🤩", "😃"]
let pexesoKarty2 = pexesoKarty.length

let nactise = function () {
    pexeso_deska = document.getElementById("boardPexeso")
    pole_zdvojnasobeni(pexesoKarty);
    pole_nahodneRozhazeni(pexesoKarty);
    karticky();
}

let pole_zdvojnasobeni = function (pexesoKarty) {
    for (let i = 0; i < pexesoKarty2; i++) {
        pexesoKarty.push(pexesoKarty[i])
    }
    return pexesoKarty;
}

let pole_nahodneRozhazeni = function (pexesoKarty2) {
    for (let i = 0; i < pexesoKarty.length; i++) {
        let nahodnyShuffle = Math.floor(Math.random() * i);

        let prohazenyKarty = pexesoKarty[i];

        pexesoKarty[i] = pexesoKarty[nahodnyShuffle];

        pexesoKarty[nahodnyShuffle] = prohazenyKarty;
    }
    return pexesoKarty2;
}

let karticky = function () {
    for (let i = 0; i < pexesoKarty.length; i++) {
        let vyzobrazeniKarty = document.createElement('div')
        vyzobrazeniKarty.innerText = pexesoKarty[i]

        pexeso_deska.appendChild(vyzobrazeniKarty)
    }
}


window.onload = nactise;