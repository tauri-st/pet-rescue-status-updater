const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
    const pet {
        name: name,
        species: species,
        isTired: 5,
        sleep: function () {
            console.log(`${this.name} needs a nap. Zzz...`)
            this.isTired = 1;
        }
    };
    return pet;
};