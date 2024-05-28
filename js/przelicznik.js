function obliczIloscFarby() {
    var dlugosc = parseFloat(document.getElementById('dlugosc').value);
    var gestosc = parseFloat(document.getElementById('gestosc').value);
    var odcien = document.getElementById('odcien').value;
    var rodzaj = document.getElementById('rodzaj').value;

    var iloscFarby = dlugosc * gestosc;
    if (odcien === 'jasny') {
        iloscFarby *= 1.1;
    } else if (odcien === 'ciemny') {
        iloscFarby *= 1.2;
    }

    if (rodzaj === 'trwala') {
        iloscFarby *= 1.3;
    } else if (rodzaj === 'semi') {
        iloscFarby *= 1.15;
    }

    document.getElementById('wynik').innerText = "Potrzebujesz " + iloscFarby.toFixed(2) + " ml farby.";

    rysujWykres(dlugosc, iloscFarby);
}

function rysujWykres(dlugosc, iloscFarby) {
    var canvas = document.getElementById('wykres');
    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var szerokoscBara = 50;
    var x = (canvas.width / 2) - (szerokoscBara / 2);
    var y = canvas.height - iloscFarby;

    ctx.fillStyle = '#00a';
    ctx.fillRect(x, y, szerokoscBara, iloscFarby);

    ctx.fillStyle = '#000';
    ctx.fillText("Długość: " + dlugosc + " cm", 10, 20);
    ctx.fillText("Ilość farby: " + iloscFarby.toFixed(2) + " ml", 10, 40);
}