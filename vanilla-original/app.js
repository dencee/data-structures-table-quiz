const dataStructures = ['array', 'list', 'stack', 'queue', 'set', 'map'];
const operation = ['declare', 'initialize', 'get', 'set', 'iterate', 'add', 'remove', 'insert'];
const regexExpressions = [
  [/\bint\s*\[\s*\] \D+;/, ],
  [/\bint\s*\[\s*\] \D+\s*=\s*new int\[\d+\];/, ],
  [/\bint\s\D+\s*=\D+\[\d+\];/, ],
  [],
  [],
  [],
  [],
  []
];

document.addEventListener('DOMContentLoaded', () => {
  const checkButtonEls = document.querySelectorAll('.btn-check');
  checkButtonEls.forEach(eachCheckButton => {
    eachCheckButton.addEventListener('click', () => checkCells());
  });

  const resetButtonEls = document.querySelectorAll('.btn-reset');
  resetButtonEls.forEach((eachResetButton) => {
    eachResetButton.addEventListener('click', () => resetCells());
  });

});

function checkCells(){

  for(let op = 0; op < operation.length; op++){
    for(let ds = 0; ds < dataStructures.length; ds++){

      const eachCell = document.getElementById(`java${op}${ds}`);
      const isValid = checkCell(eachCell, op, ds);

      if(isValid){
        eachCell.style.backgroundColor = 'aqua';
      } else {
        console.log(eachCell, ds, op)
        eachCell.style.backgroundColor = 'red';
      }
    }
  }
}

function checkCell(cellEl, operationIndex, dataStructureIndex){

  const expression = regexExpressions[operationIndex][dataStructureIndex];

  if(expression && cellEl.value){
    return expression.test(cellEl.value);
  }
  return false;
}

function resetCells(){

  for(let op = 0; op < operation.length; op++){
    for(let ds = 0; ds < dataStructures.length; ds++){

      const eachCell = document.getElementById(`java${op}${ds}`);
      eachCell.style.backgroundColor = 'white';
      //eachCell.value = '';
    }
  }
}