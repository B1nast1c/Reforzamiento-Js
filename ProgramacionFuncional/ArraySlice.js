//Retorno de una parte del array, ayuda a partirlo

function sliceArray(anim, beginSlice, endSlice) {
  return anim.slice(beginSlice, endSlice); //Desde Hasta
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];

sliceArray(inputAnim, 1, 3);
