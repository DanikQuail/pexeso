pexesoKarty = ['😂', '🥰', '🤔', '🙂', '😍', '😎', '🤩', '😃'];
pexesoKarty2 = pexesoKarty.concat(pexesoKarty);
let boardPexeso;
let pocet = 0;
let prvniDil;
let druhejDil;
let pouzeDvakrat;
let pocetZbyvajicich;

let nactise = function () {
    boardPexeso = document.getElementById('boardPexeso');
    pocetZbyvajicich = pexesoKarty.length;
    pole_nahodneRozhazeni();
    karticky();
}

let vyhralSi = function () {
    alert("Vyhrál si, šikulka, klikni na restart a hraj znovu !");
}

let pole_nahodneRozhazeni = function () {
    for (let i = 0; i < pexesoKarty2.length; i++) {
        let shuffle = Math.floor(Math.random() * i);
        let j = pexesoKarty2[i];
        pexesoKarty2[i] = pexesoKarty2[shuffle];
        pexesoKarty2[shuffle] = j;
    }
}

let karticky = function () {
    for (let i = 0; i < pexesoKarty2.length; i++) {
        let div = document.createElement('div');
        div.innerText = pexesoKarty2[i].substring(0, 2);
        div.id = `id${i+1}`;
        div.className = 'nevidim';
        div.addEventListener('click', otoceniKaret);

        boardPexeso.appendChild(div);
    }
}

let otoceniKaret = function (e) {
    if (pouzeDvakrat === true) return;
    let target = e.target;

    if (pocet < 1) {
        pouzeDvakrat = true;

        target.className = 'vidim';
        prvniDil = target;

        pocet++;
        pouzeDvakrat = false;
    } else {
        pouzeDvakrat = true;

        target.className = 'vidim';
        druhejDil = target;
        pocet--;

        pouzeDvakrat = false;
    }

    if (pocet < 1 && prvniDil.id === druhejDil.id) {
        pouzeDvakrat = true;

        prvniDil.className = 'nevidim'
        pocet = 0;

        pouzeDvakrat = false;
        return;
    }

    if (pocet < 1) {
        if (prvniDil.innerText === (druhejDil.innerText)) {
            pouzeDvakrat = true;
            pouzeDvakrat = false;
            pocetZbyvajicich--;
        } else {
            pouzeDvakrat = true;
            setTimeout(function () {
                prvniDil.className = 'nevidim';

                druhejDil.className = 'nevidim';

                pocet = 0;
                pouzeDvakrat = false;
            }, 1500)
        }
    }
    
    if (pocetZbyvajicich === 0) {
        vyhralSi();
    }
}


window.onload = nactise;