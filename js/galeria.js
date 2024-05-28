    var zdjecia = ["../zdjecia/wlosy1.jpg","../zdjecia/wlosy2.jpg","../zdjecia/wlosy3.jpg","../zdjecia/wlosy4.jpg","../zdjecia/wlosy5.jpg"];
    var obecny_index_zdjec = 0;
    var nr_zdjecia = document.querySelector('.dogalerii img');
    function galeria_zdjec(index) {
    nr_zdjecia.src = zdjecia[index];
    }

    function poprzedni() {
    obecny_index_zdjec = (obecny_index_zdjec === 0) ? zdjecia.length - 1 : obecny_index_zdjec - 1;
    galeria_zdjec(obecny_index_zdjec);
    }

    function nastepny() {
    obecny_index_zdjec = (obecny_index_zdjec === zdjecia.length - 1) ? 0 : obecny_index_zdjec + 1;
    galeria_zdjec(obecny_index_zdjec);
    }

    function pierwszy() {
    obecny_index_zdjec = 0;
    galeria_zdjec(obecny_index_zdjec);
    }

    function ostatni() {
    obecny_index_zdjec = zdjecia.length - 1;
    galeria_zdjec(obecny_index_zdjec);
    }  

    galeria_zdjec(obecny_index_zdjec);