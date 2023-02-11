const prepareTea = () => "greenTea";

const getTea = numOfCups => {
  const teaCups = [];
  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  
  return teaCups;
};

const tea4TeamFCC = getTea(40); //Llamado de funciones y asignación del retorno a una variable

console.log(tea4TeamFCC);