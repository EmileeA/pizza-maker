import cheese from './cheese.js'; //it's "./" beacause I'm already in components
import utilities from '../helpers/utilities.js';


const createFinalOrder = (items) => {
    let domString2 = '';
    for(let i= 0; i < items.length; i++) {
        domString2 += `<h2>${items[i].name}</h2>`;
    }
    utilities.printToDom('final-order', domString2);
    //this will overwrite the button but we could make another div
};

const createOrderEvent = () => {
    const selectedCheeses = cheese.getSelectedCheeses(); //this will return an array of the cheeses I've selected
    //const selectedMeats = meat.getSelectedMeats(); (this will be for the homework)
    createFinalOrder(selectedCheeses);
        console.log('you clicked a button',selectedCheeses);
        //12- created a final function
};
//10 selected cheeses will be in cheese.js

const printOrderButton = () => {
    const domString = '<button id="order-button" class="btn btn-secondary">Make Pizza</button>'
    utilities.printToDom('final-order', domString);
    document.getElementById('order-button').addEventListener('click', createOrderEvent)
//9-added event, put an id on the button, created a function
};

//8- made function and added import
export default { printOrderButton };