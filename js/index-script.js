// input field function
function inputValueById(id){
    const inputField = document.getElementById(id);
    const inputString = inputField.value;
    const value = parseFloat(inputString);
    inputField.value = '';

    if(value <= 0 || isNaN(value)){
        inputField.value = '';
        return alert('Give me correct value');
    }
    else{
        return value;
    }
}
// title function
function cartTitle(id){
    const title = document.getElementById(id).innerText;
    return title;
}
//area calculation function
function areaThreeCalculation(firstValue, secondValue){
    const area = parseFloat((0.5 * firstValue * secondValue).toFixed(2));
    return area;
}

// calculation function
function araeTwoCalculation(firstValue, secondValue){
    const area = parseFloat((firstValue * secondValue).toFixed(2));
    return area;
}

let serial = 0;

// Triangle evelnt-listener
document.getElementById('triangle-btn').addEventListener('click', function(){
    const firstField  = inputValueById('triangle-first-field');
    const secondField = inputValueById('triangle-second-field');


   if(firstField && secondField){
    serial += 1;
    const title = cartTitle('triangle-title');
    const area = areaThreeCalculation(firstField , secondField)
    displayData(title, area);
   }
    
});

// Rectangle evelnt-listener
document.getElementById('rectangle-btn').addEventListener('click', function(){
    const firstField = inputValueById('rectangle-first-field');
    const secondField = inputValueById('rectangle-second-field');

    if(firstField && secondField){
        serial += 1
        const title = cartTitle('rectangle-title');
        const area = araeTwoCalculation(firstField, secondField);
        displayData(title , area);
    }
    
});

//text value function
function textValueById(id){
    const textValue = document.getElementById(id);
    const textValueStr = textValue.innerText;
    const value = parseFloat(textValueStr);
    return value;
}


//Parallelogram evelnt-listener
document.getElementById('parallelogram-btn').addEventListener('click', function(){
    serial += 1
    const firstValue = textValueById('parallelogram-first-value');
    const secondValue = textValueById('parallelogram-second-value');

    const title = cartTitle('parallelogram-title')
    const area = araeTwoCalculation(firstValue, secondValue);
    displayData(title, area);

    
});

//Rhombus evelnt-listener
document.getElementById('rhombus-btn').addEventListener('click', function(){
    serial += 1
    const firstValue = textValueById('rhombus-first-value');
    const secondValue = textValueById('rhombus-second-value')

    const title = cartTitle('rhombus-title');
    const area = areaThreeCalculation(firstValue, secondValue);
    displayData(title, area);
});

//Pentagon evelnt-listener
document.getElementById('pentagon-btn').addEventListener('click', function(){
    serial += 1
    const firstValue = textValueById('pentagon-first-value');
    const secondValue = textValueById('pentagon-second-value');

    const title = cartTitle('pentagon-title');
    const area = areaThreeCalculation(firstValue, secondValue);
    displayData(title, area);
});

//Ellipse evelnt-listener
document.getElementById('ellipse-btn').addEventListener('click', function(){
    serial += 1
    const ellipseFirstValue = textValueById('ellipse-first-value');
    const ellipseSecondValue = textValueById('ellipse-second-value');

    const title = cartTitle('ellipse-title');
    const ellipseAreaStr = (3.1416 * ellipseFirstValue * ellipseSecondValue).toFixed(2);
    const ellipseArea = parseFloat(ellipseAreaStr);
    displayData(title, ellipseArea);
});



// display show the data function
function displayData(title, area){
    const areaContainer = document.getElementById('area-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${serial} .</td>
        <td>${title}</td>
        <td>${area}cm<sup>2</sup></td>
        <button class="btn btn-sm mt-3">Covert to m</button>
    `
    areaContainer.appendChild(tr);
}



// backgroun color random 
function bgColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}
  
const bgColors = document.getElementsByClassName('random-bg-color');
for (const bg of bgColors) {
    // console.log(bg);
    bg.addEventListener('mouseenter', function(e){
        bg.style.backgroundColor = "#" + bgColor();
        
    });
}









































