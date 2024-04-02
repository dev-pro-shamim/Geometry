
// **
//Objective : get base, height of a tringle.calculate the area by using the provided formula. and then displau the area.
//step 1 : get bas value of the tringle
//step 2 : added an id in the base input field
//step 3 : use GetElementById to access the input field
// step 4: get value from the input field 
//convert the value to a number . use parseFloat


//**

function calculateTringleArea(){
    const tringlebaseInput = document.getElementById('triangle-base');
    const tringlebase = tringlebaseInput.value;
    const base = parseFloat(tringlebase);
    console.log( base);


 

    //get traingle Height Value
    const tringleHeightInput = document.getElementById('triangle-height');
    const tringleHeight = tringleHeightInput.value;
    const height = parseFloat(tringleHeight);
    console.log(height);

    //calculate area 
    const area = 0.5* base * height;
    console.log( 'Tringle area is ' ,area);
   

 
    //display tringle area
    const tringleAreaSpan = document.getElementById('tringle-area');
    tringleAreaSpan.innerText = area;

}
