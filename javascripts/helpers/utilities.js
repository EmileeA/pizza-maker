const printToDom = (divId, toPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = toPrint;
  };
  
  export default { printToDom };

  //utilities is printToDom then Cheese component is going to use the printToDom to print 'cheese' to the dom. Then main.js will call
  // the cheese component. 