//Blok-Web
    //Klas: 210
    //Student naam: Rania EL Mounhime
    //Studenten nummer: 500806815
    //Docent: MW. L. BENVENUTI (Laura)
    //Website: Lowlands
    //Bron (ter inspiratie): https://www.sitepoint.com/building-a-filtering-component-with-css-animations-jquery/
	

filterSelection("Alles") //Functie wordt uigevoerd, alle kolommen worden getoont 
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("categorie");
    if (c == "Alles") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
}

// Toon gefilterde elementen
function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Elementen verbergen die niet zijn geselecteerd
function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Voeg actieve klasse toe aan de huidige knop (highlight it)
var btnContainer = document.getElementById("ButtonContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
