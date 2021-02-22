const StartDate = new Date();
StartDate.toDateString('pt-BR'); //tem que mudar
dia = (StartDate.getUTCDate());
mes = (StartDate.getUTCMonth() + 1);
ano = StartDate.getUTCFullYear();
let starthours = new Date().toLocaleTimeString('pt-BR');
if (starthours.length === '1') {
    let hoursInitial = JSON.parse(starthours[0].concat(starthours[1]));
} else {
    hoursInitial = JSON.parse(starthours[0])
}

console.log(`"Dia": ${dia}/${mes}/${ano}, "horario de entrada": ${starthours}`);

const FinishedDate = new Date();
FinishedDate.toDateString('pt-BR'); //tem que mudar
dia = FinishedDate.getUTCDate();
mes = (FinishedDate.getUTCMonth() + 1);
ano = FinishedDate.getUTCFullYear();
let FinishedHours = new Date().toLocaleTimeString('pt-BR')
if (starthours.length === '1') {
    let hoursFinal = JSON.parse(FinishedHours[0].concat(FinishedHours[1]));
} else {
    hoursFinal = JSON.parse(FinishedHours[0])
}
console.log(`"Dia": ${dia}/${mes}/${ano}, "horario de Saida": ${FinishedHours}`);

//let horacomeco = new Date(2021, 2, 22, 08, 11, 00).toLocaleTimeString('pt-BR');




//let horaC = JSON.parse(horacomeco[0].concat(horacomeco[1]))
//console.log(horaC)
//let horafinal = new Date().toLocaleTimeString('pt-BR') //eleta obrigando a data
//console.log(horacomeco, horafinal)
/*
let horaF = JSON.parse(horafinal[0].concat(horafinal[1]))
let h = (horaF - horaC)
let minutosfinal = JSON.parse(horafinal[3].concat(horafinal[4]))
let minutosinicial = JSON.parse(horacomeco[3].concat(horacomeco[4]))
console.log(minutosfinal)
console.log(minutosinicial)
let min = minutosfinal - minutosinicial*/

//console.log(`Entrada: ${horaC}: ${minutosinicial} horas, \nSaida:  ${horaF}: ${minutosfinal} horas`)
//console.log(`Banco de Horas: ${h}:${min} horas`)

function Relogio() {
    let timeStart = new Date(2021, 2, 22, 5, 11, 00);
    let timeFinish = new Date(2021, 2, 22, 10, 11, 00);
    let hour = timeStart.getHours();
    let minute = timeStart.getMinutes();
    let second = timeStart.getSeconds();
    let temp = '' + ((hour > 12) ? hour - 12 : hour);
    if (hour == 0)
        temp = '24';
    temp += ((hour < 10) ? '0' : ':');
    temp += ((minute < 10) ? ':0' : ':') + minute;
    temp += ((second < 10) ? ':0' : ':') + second;

    return temp;
}
const hteste = JSON.parse(JSON.stringify(Relogio()));


const horaInversa = (hteste[1].concat(hteste[0]))
let minutos = JSON.parse(hteste[3].concat(hteste[4]))
console.log(`${horaInversa}:${minutos}`)


//console.log(`Horas: ${horaInversa}:${minutos}`)
/*
console.log(escape("ç"));
const teste = 'Março';
const split = teste.split()
console.log(split);
console.log("u00e7");
const texto = teste.replace('ç', '\u00e7').split()
console.log(texto)*/
/*
let family = {};

family.mother = new Person("Jane", "Smith");
family.father = new Person("John", "Smith");
family.daughter = new Person("Emily", "Smith");

console.table(family);*/