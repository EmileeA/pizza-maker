const printToDom = (divId, toPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = toPrint;
  };
  
  //first thing
  export default { printToDom };

  //second thing: is to export this to let other files know about it. utilities is printToDom then Cheese component is going to use the printToDom to print 'cheese' to the dom. Then main.js will call
  // the cheese component. 