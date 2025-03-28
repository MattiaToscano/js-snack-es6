//Esercizio 1

//Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

const bici = [
    {
        nome: "Bugatti",
        peso: 10
    },
    {
        nome: "Ferrari",
        peso: 12
    },
    {
        nome: "Lamborghini",
        peso: 8
    }
];

//Stampare in console la bici con il peso minore.

for (let i = 0; i < bici.length; i++) {
    if (bici[i].peso < bici[0].peso) {
        bici[0] = bici[i];
    }
}
console.log(bici[0]);

//Esercizio 2
console.log("Esercizio 2");

//Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
const squadre = [   
    {
        nome: "Milan",
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: "Inter",
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: "Juventus",
        punti: 0,
        falliSubiti: 0
    }
];

const generateRandomNumber = () => Math.floor(Math.random() * 100);

//Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
for (let i = 0; i < squadre.length; i++) {
    squadre[i].punti = generateRandomNumber();
    squadre[i].falliSubiti = generateRandomNumber();
}
console.log(squadre);

//Stampare in console i nomi delle squadre e i falli subiti creando un nuovo array
const squadreFalli = [];
for (let i = 0; i < squadre.length; i++) {
    const { nome, falliSubiti } = squadre[i];
    squadreFalli.push (`${nome} ha subito ${falliSubiti} falli`);
}
console.log(squadreFalli);