//cubical shape//

const button = document.getElementById('button');

button.addEventListener('click', function() {
const length = document.getElementById('length').value;
const width = document.getElementById('width').value;
const height = document.getElementById('height').value;
const weightOutput = document.getElementById("weightOutput");
const numPcs = document.getElementById('numPcs').value;
//calculation
let cuboidVolume = length*width*height;
let cuboidVolumeInMM = cuboidVolume/1000000000;
let cuboidWeight = 7850*cuboidVolumeInMM*numPcs;
cuboidWeight = parseFloat(cuboidWeight.toFixed(3));



weightOutput.innerHTML = cuboidWeight + " Kg";
navigator.clipboard.writeText(cuboidWeight);

})

//cylindrical shape //
const cyButton = document.getElementById("cyButton");

cyButton.addEventListener('click', function() {
    const dia = document.getElementById('dia').value;
    const cyHeight = document.getElementById('cyHeight').value;
    const cyWeightOutput = document.getElementById("cyWeightOutput");
    const cyNumPcs = document.getElementById("cyNumPcs").value;

    //calculation
    
   let radius = 0.5*dia;
    let radiusSquare = radius**2;
    let radiusSquareInMM = radiusSquare/1000000;
    let cyHeightInMM = cyHeight/1000;

    let cyWeight = 3.14*radiusSquareInMM*cyHeightInMM*7850*cyNumPcs;

    cyWeight = parseFloat(cyWeight.toFixed(3));

    cyWeightOutput.innerHTML = cyWeight + " Kg";

    navigator.clipboard.writeText(cyWeight);

})