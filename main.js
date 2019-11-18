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
// console.log(FamilyNames);
var surname = ""; // cognome che inserisce l'utente
var surnameMaxLen = 20; // massima lunghezza ammessa per il cognome introdotto dall'utente
var surnameValid = false; // validità della stringa cognome introdotta dall'utente
var index = 0; //indice per scansire l'array

//recupero l'input dall'utente, mi attendo una stringa alfabetica (cognome)
do {
    surname = prompt("Inserisci il tuo Cognome (max 20 caratteri alfabetici)");
    //controlli minimi su correttezza input
    // non deve essere un numero e deve essere massimo surnameMaxLen caratteri
    // con questo controllo, stringhe alfanumeriche (tipo "aa33" o "45ggg" vengo accettate)
    if ((isNaN(surname)) && (surname.length <= surnameMaxLen)) {
        surnameValid = true;
    } else {
        alert("ATTENZIONE: input non valido. \nInserisci una stringa alfabetica di max 20 caratteri. \nGrazie.")
    }
    console.log("surnameValid: ", surnameValid);

} while (!surnameValid);
console.log("surname: ", surname);

// -- UPPERCASE lowercase --
// trasformo la stringa di input nel formato UPPERCASE (nel caso non lo fosse),
// poiche' il mio array FamilyNames contiene elementi in questo formato,
// l'ordinamento per essere sensato devo farlo su stringhe dello stesso formato
// (ad esempio: 'B' > 'a')
surname = surname.toUpperCase();
console.log(surname);

//inserisco il cognome recuperato, in fondo all'array
FamilyNames.push(surname);
console.log("array aggiornato:", FamilyNames);
//gestire cognome gia' presente...


//ordino l'array cognomi
FamilyNames = FamilyNames.sort();
console.log("array ordinato:", FamilyNames);

// visualizzo array ordinato
console.log(FamilyNames);

// stampo la posizione (index) del cognome inserito dall'utente
console.log("array length: ", FamilyNames.length);
console.log("index; ", index);
console.log("surname:", surname);
console.log("FamilyNames[", index, "]: ", FamilyNames[index]);
while ((FamilyNames[index] != surname)) {
    console.log("dentro al while");
    console.log("index: ", index);
    console.log("FamilyNames[", index, "]: ", FamilyNames[index]);
    index++;
    // scorro l'array finchè non trovo l'elemento
    // la prima condizione sarebbe inutile, poichè l'elemento e' sicuramente,
    // presente nell'array perchè ce l'ho inserito io, ma non si sa mai...
}
console.log("posizione cognome: ", index + 1);