const hobbies = require ('./hobbies.js');
const names = require ('./names.js');

const persona = ()=>{
    const oggetto = {
        ...names.fullName ('Andrea', 'Ragazzoli'),
        ...hobbies.creaHobby('Cinema','Musica','Letteratura')        
    }
    return oggetto;
};

console.log(persona());

