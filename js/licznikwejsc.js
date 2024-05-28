function Aktualizuj_licznik_wizyt() {

    var Licznik_wizyt = sessionStorage.getItem('licznik_wizyt');

    if (!Licznik_wizyt) {
      Licznik_wizyt = 0;
    }

    Licznik_wizyt++;

    sessionStorage.setItem('licznik_wizyt', Licznik_wizyt);
    document.getElementById('licznik_wizyt').textContent = Licznik_wizyt;

}