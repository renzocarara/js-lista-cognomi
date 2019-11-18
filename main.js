// CONSEGNA:
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
]; // array di stringhe alfabetiche non ordinate
var surname = ""; // cognome che inserisce l'utente
var surnameMinLen = 1; // minima lunghezza ammessa per il cognome introdotto dall'utente
var surnameMaxLen = 20; // massima lunghezza ammessa per il cognome introdotto dall'utente
var surnameValid; // validità della stringa cognome introdotta dall'utente
var posizione = 0; // posizione dell'elemento inserito nell'array



//recupero l'input dall'utente, mi attendo una stringa alfabetica (cognome)
do {
    surnameValid = true; // all'inizio assumo che la stringa di input sia valida
    surname = prompt("Inserisci il tuo Cognome (min 1 - max 20 caratteri alfabetici)");
    // controlli minimi su correttezza input
    // la stringa non deve essere nulla, non devono esserci numeri nella stringa,
    // deve essere massimo surnameMaxLen caratteri e minimo surnameMinLen caratteri
    // rimane da valutare:
    // - inserimento di caratteri speciali...($,&,-,etc.)
    // - inserimento 1 o più spazi iniziali
    // - stringa tipo: "xx    xxxx", cioè con più spazi tra 2 stringhe di caratteri

    // controllo se l'input è nullo o maggiore di surnameMaxLen o  minore di surnameMinLen caratteri
    if ((surname == null) || (surname.length > surnameMaxLen) || (surname.length < surnameMinLen)) {
        surnameValid = false;
    } else { // lunghezza OK, ora verifico se ci sono dei numeri mischiati ai caratteri
        for (var i = 0;
            (i < surname.length); i++) {
            // console.log("surname[", i, "]: ", surname[i]);
            // la 1a condizione verifica se ci sono dei numeri, la 2a condizione è inserita perchè
            // isNan di " " ritorna false
            if (!isNaN(surname[i]) && (surname[i] != " ")) {
                surnameValid = false;
                // console.log("trovato numero");
                // console.log("surnameValid: ", surnameValid);
            }
        }
    }

    if (!surnameValid) {
        alert("ATTENZIONE: input non valido. \nInserisci una stringa alfabetica da 1 a max 20 caratteri. \nGrazie.");
    }
}
while (!surnameValid); // finchè l'input non è valido continuo a ciclare e richiedere un input valido

// -- UPPERCASE lowercase --
// trasformo la stringa di input nel formato UPPERCASE (nel caso non lo fosse),
// poiche' il mio array FamilyNames contiene elementi in questo formato,
// l'ordinamento per essere sensato devo farlo su stringhe dello stesso formato
// (ad esempio: 'B' > 'a')
surname = surname.toUpperCase();

//inserisco il cognome recuperato, in fondo all'array
FamilyNames.push(surname);

//ordino l'array FamilyNames
FamilyNames = FamilyNames.sort();

// ricavo la posizione del cognome inserito dall'utente
for (var i = 0; i < FamilyNames.length; i++) {
    if (FamilyNames[i] == surname) {
        posizione = i + 1;
    }
}

// visualizzo array ordinato
// SOLUZIONE 1
// for (var i = 0; i < FamilyNames.length; i++) {
//     document.getElementById("cognomi").innerHTML += FamilyNames[i] + "<br>";
// }

// SOLUZIONE 2
// document.getElementById("cognomi").innerHTML = FamilyNames;

// SOLUZIONE 3
for (var i = 0; i < FamilyNames.length; i++) {
    node = document.createElement("p"); // creo un nuovo tag <p> per ogni elemento da visualizzare
    node.innerHTML = FamilyNames[i]; // valorizzo il nuovo elemento
    document.getElementById("cognomi").appendChild(node); // lo inserisco nella giusta posizione sulla pagina
    if (i == posizione - 1) {
        // coloro il nuovo cognome inserito nella lista
        node.setAttribute("class", "cyano");
    }
}

// visualizzo il numerino che indica la posizione del cognome appena inserito
document.getElementById("posizione").innerHTML = posizione;