/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Obiwan and
    Anakin.
*/ 

let obiwanAttack = 25;
let obiwanHealth = 100;
let obiwanDefence = 0;

let anakinAttack = 35;
let anakinHealth = 0;
let anakinDefence = 0;

if (obiwanAttack > anakinAttack) {
    console.log('Obiwan has a better attack!');
} else if (obiwanAttack < anakinAttack) {
    console.log('Anakin has a better attack!');
} else {
    console.log('Obiwan and Anakin have the same attack power!');
}

if (anakinAttack >= obiwanHealth){
    console.log('Obiwan was slain!');
} else {
    obiwanHealth -= anakinAttack;
    console.log(`Anakin attacked Obiwan. His health is now: ${obiwanHealth}.`);
}

obiwanDefence += 30;

console.log('R2D2 gives Obiwan some help!');
if ((obiwanHealth + 50) >= 100){
    obiwanHealth = 100;
} else{
    obiwanHealth += 50;
}
console.log(`Obiwan's health is now ${obiwanHealth}`);

for (let i = 0; i < 5 ; i++){
    obiwanHealth -= (anakinAttack - obiwanDefence);
    console.log(`Obiwan's health is now ${obiwanHealth}`)
}

while (obiwanHealth > 0){
    console.log(`Anakin attacks, Obiwan's health is now ${obiwanHealth -= (anakinAttack - obiwanDefence)}`)
    if (obiwanHealth <= 0){
        console.log('Obiwan has been slain!')
    }
}