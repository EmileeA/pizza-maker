import utilities from '../helpers/utilities.js';

//5- made an arrary for my for loop
const cheeses = [
    {id:"cheese1", name: "swiss", price: 50 },
    {id:"cheese2", name: "yellow", price: 90 },
    {id:"cheese3", name: "white", price: 500 },
    {id:"cheese4", name: "green", price: 0 },
];

const getSelectedCheeses = () => {
//get all cheese checkboxes (give domstring a class of cheese)
const cheeseCheckboxes = document.getElementsByClassName('cheese');
const selectedCheeses = [];
console.log(cheeseCheckboxes);
//keep the checked ones in a new array (we are using "j" because we have another for loop using "i")
for(let j = 0; j < cheeseCheckboxes.length; j++) {
    console.log(cheeseCheckboxes[j].checked);
    for(let k = 0; k < cheeses.length; k++) {
        if(cheeseCheckboxes[j].checked && cheeseCheckboxes[j].id === cheeses [k].id){
            selectedCheeses.push(cheeses[k]);
        }
    }
}

//return the new array
return selectedCheeses;
};

//4ht: import utilities, make function, and export the function name
const printCheeseOptions = () => {
    let domString = '';
    for(let i =0; i < cheeses.length; i++)
    {domString +=  `<div class="form-group form-check">
    <input type="checkbox" class="form-check-input cheese" id=${cheeses[i].id}>
    <label class="form-check-label" for=${cheeses[i].id}>${cheeses[i].name}</label>
  </div>`;
}
//6- made for loop here. added name.
//7- put cheese id and for because that's how screen readers releate?
    utilities.printToDom('cheese-counter', domString)
};

export default { printCheeseOptions, getSelectedCheeses };