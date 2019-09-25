import cheese from './cheese.js'; //it's "./" beacause I'm already in components
import utilities from '../helpers/utilities.js';


const createFinalOrder = (items) => {
    let domString2 = '';
    for(let i= 0; i < items.length; i++) {
        domString2 += `<h2>${items[i].name}</h2>`;
    }
    utilities.printToDom('final-order', domString2);
};

const createOrderEvent = () => {
    const selectedCheeses = cheese.getSelectedCheeses(); //this will return an array of the cheeses I've selected
    //const selectedMeats = meat.getSelectedMeats(); (this will be for the homework)
    createFinalOrder(selectedCheeses);
        console.log('you clicked a button',selectedCheeses);
}

const printOrderButton = () => {
    const domString = '<button id="order-button" class="btn btn-secondary">Make Pizza</button>'
    utilities.printToDom('final-order', domString);
    document.getElementById('order-button').addEventListener('click', createOrderEvent)
};

export default { printOrderButton };