var godziny = [
    { dzien: "Poniedziałek", godzina1: "8:00-9:00", godzina2:"9:00-10:00" , godzina3:"10:00-11:00" , godzina4:"11:00-12:00",  godzina5:"12:00-13:00" , godzina6:"13:00-14:00", godzina7:"14:00-15:00", godzina8:"15:00-16:00", dostep: "Franek Dolot"},
    { dzien: "Wtorek", godzina1:"8:00-9:00", godzina2:"9:00-10:00" , godzina3:"10:00-11:00" , godzina4:"11:00-12:00",  godzina5:"12:00-13:00" , godzina6:"13:00-14:00", godzina7:"14:00-15:00", godzina8:"15:00-16:00", dostep: "Marta Nowak"},
    { dzien: "Środa", godzina1:"8:00-9:00", godzina2:"9:00-10:00" , godzina3:"10:00-11:00" , godzina4:"11:00-12:00",  godzina5:"12:00-13:00" , godzina6:"13:00-14:00", godzina7:"14:00-15:00", godzina8:"15:00-16:00", dostep: "Marta Nowak"},
    { dzien: "Czwartek", godzina1:"8:00-9:00", godzina2:"9:00-10:00" , godzina3:"10:00-11:00" , godzina4:"11:00-12:00",  godzina5:"12:00-13:00" , godzina6:"13:00-14:00", godzina7:"14:00-15:00", godzina8:"15:00-16:00", dostep: "Zygmunt Pocieszny"},
    { dzien: "Piątek", godzina1:"8:00-9:00", godzina2:"9:00-10:00" , godzina3:"10:00-11:00" , godzina4:"11:00-12:00",  godzina5:"12:00-13:00" , godzina6:"13:00-14:00", godzina7:"14:00-15:00", godzina8:"15:00-16:00", dostep: "Franek Dolot"},
    { dzien: "Sobota", godzina1:"8:00-9:00", godzina2:"9:00-10:00" , godzina3:"10:00-11:00" , godzina4:"11:00-12:00",  godzina5:"12:00-13:00" , godzina6:"13:00-14:00", godzina7:"14:00-15:00", godzina8:"15:00-16:00", dostep: "Zygmunt Pocieszny"}
];

function generategodzinyTable(godziny) {
    var table = document.createElement("table");
    
    var headerRow = table.insertRow();
    var headers = ["Dzień tygodnia", "Godzina", "Pracownik"];

    for (var i = 0; i < headers.length; i++) {

        var headerCell = document.createElement("th");
        headerCell.textContent = headers[i];

        if (i === 0) {
            headerCell.colSpan = 1;
        }
      headerRow.appendChild(headerCell);

      if(i===1){
          headerCell.colSpan = 15;
      }
      headerRow.appendChild(headerCell);

      if (i === 2) {
          headerCell.colSpan = 1;
      }
      headerRow.appendChild(headerCell);

    }

    for (var j = 0; j < godziny.length; j++) {
        var godzina = godziny[j];
        var dataRow = table.insertRow();
        var keys = Object.keys(godzina);
        
        for (var k = 0; k < keys.length; k++) {
            var dataCell = dataRow.insertCell();
            var rowspan = 1;
            var colspan = 1;
            
            if (keys[k] === "dzien") {
                rowspan = 1;
                colspan = 1;
            } else if (keys[k] === "godzina1") {
                rowspan = 1;
                colspan = 8;
            } else if (keys[k] === "dostep") {
                rowspan = 1;
                colspan = 1;
            }
            
            dataCell.textContent = godzina[keys[k]];
            dataCell.rowSpan = rowspan;
            dataCell.colSpan = colspan;
        }
    }
    
    var tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = "";
    tableContainer.appendChild(table);
}

generategodzinyTable(godziny);