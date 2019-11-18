// CONDEGNA:
// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi e
// stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui  il nuovo utente si trova.
// Nome repo: js-lista-cognomi
// ------------------------------------------------------------------------------

var FamilyNames = ["ROCKERDUCK",
    "DE PAPERONI",
    "GAMBADILEGNO",
    "CAVEZZA",
    "BASETTONI",
    "MANETTA",
    "MOUSE"
] // array di stringhe alfabetiche non ordinate
var surname = ""; // cognome che inserisce l'utente
var surnameMaxLen = 20; // massima lunghezza ammessa per il cognome introdotto dall'utente
var surnameValid = false; // validità della stringa cognome introdotta dall'utente
var posizione = 0; // posizione dell'elemento inserito nell'array

//recupero l'input dall'utente, mi attendo una stringa alfabetica (cognome)
do {
    surname = prompt("Inserisci il tuo Cognome (max 20 caratteri alfabetici)");
    //controlli minimi su correttezza input
    // non deve essere un numero e deve essere massimo surnameMaxLen caratteri
    // todo: con questo controllo, stringhe alfanumeriche (tipo "aa33" o "45ggg" vengono accettate)
    if ((isNaN(surname)) && (surname.length <= surnameMaxLen)) {
        surnameValid = true;
    } else {
        alert("ATTENZIONE: input non valido. \nInserisci una stringa alfabetica di max 20 caratteri. \nGrazie.")
    }

} while (!surnameValid);

// -- UPPERCASE lowercase --
// trasformo la stringa di input nel formato UPPERCASE (nel caso non lo fosse),
// poiche' il mio array FamilyNames contiene elementi in questo formato,
// l'ordinamento per essere sensato devo farlo su stringhe dello stesso formato
// (ad esempio: 'B' > 'a')
surname = surname.toUpperCase();

//inserisco il cognome recuperato, in fondo all'array
FamilyNames.push(surname);
//todo : gestire cognome gia' presente...

//ordino l'array cognomi
FamilyNames = FamilyNames.sort();

// ricavo la posizione del cognome inserito dall'utente
for (var i = 0; i < FamilyNames.length; i++) {
    if (FamilyNames[i] == surname) {
        posizione = i + 1;
    }
}

// visualizzo array ordinato
// METODO 1
// for (var i = 0; i < FamilyNames.length; i++) {
//     document.getElementById("cognomi").innerHTML += FamilyNames[i] + "<br>";
// }

// METODO 2
// document.getElementById("cognomi").innerHTML = FamilyNames;

// METODO 3
for (var i = 0; i < FamilyNames.length; i++) {
    node = document.createElement("p"); // creo un nuovo <p>
    node.innerHTML = FamilyNames[i]; // valorizzo iL nuovo elemento
    document.getElementById("cognomi").appendChild(node); // lo inserisco nella giusta posizione sulla pagina
}

// visualizzo la posizione del cognome appena inserito
console.log("posizione cognome: ", posizione);
document.getElementById("posizione").innerHTML = posizione;