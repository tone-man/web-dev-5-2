// List the button text content in the console
let pushMe = document.forms[0].innerText;
console.log("The contents of pushMe is: " + pushMe);

//List the butten text content by id
//This only works if everything is named
pushMe = document.myForm.pushMe.innerText
console.log("The contents of pushMe is: " + pushMe);

//function that updates numclicked when clicked
function onClick() {
    let numChecked = 0;
    let topGroup = document.topGroup;
    let output = document.getElementById("numChecked");

    for (let i = 0; i < topGroup.toppings.length; i++)
        if (topGroup.toppings[i].checked)
            numChecked++;
    
    output.innerText = numChecked;
}