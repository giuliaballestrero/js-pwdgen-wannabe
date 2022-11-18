/*prova------------------------
let mioSaluto = 'ciao';
console.log (mioSaluto);
-----------------------------*/

/*consegna:
Descrizione:
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito22
*/

const userName = prompt ('Inserisci il tuo Nome');

const userSurname = prompt ('Inserisci il tuo Cognome');

const userFavColor = prompt ('Inserisci il tuo colore preferito');

let password = `${userName + userSurname + userFavColor}22`

console.log (password)