let inputNumber = document.querySelector('.card-number-input')
let inputName = document.querySelector('.card-holder-input')
let inputMonth = document.querySelector('.month-input')
let inputYear = document.querySelector('.year-input')
let inputCvv = document.querySelector('.cvv-input')
let submit = document.querySelector('.submit-btn')
let cardNumber = document.querySelector('.numerocard');
const ONLY_NUMBERS = new RegExp("^[0-9\\s]+$");
const ONLY_WORDS = new RegExp("^[a-zA-Z\\s]+$");
let form = document.querySelector('.form')
let thankYou = document.querySelector('.none');


// -----------------------------------------------


inputNumber.oninput = () =>{
    document.querySelector('.numeroCard').innerText = document.querySelector('.card-number-input').value;
}

inputName.oninput = () =>{
    document.querySelector('.nameCard').innerText = document.querySelector('.card-holder-input').value;
}

inputMonth.oninput = () =>{
    document.querySelector('.month').innerText = document.querySelector('.month-input').value;
}

inputYear.oninput = () =>{
    document.querySelector('.year').innerText = document.querySelector('.year-input').value;
}

inputCvv.oninput = () =>{
    document.querySelector('.cvc').innerText = document.querySelector('.cvv-input').value;
}

// -------------------------------------------------


submit.addEventListener('click', (e) =>{
    e.preventDefault();
    if (inputNumber.value == "" || !ONLY_NUMBERS.test(inputNumber.value) || inputNumber.value.length < 16)                                  
{ 
    document.getElementById('errornumber').innerHTML="Wrong format, number's only";  
    inputNumber.focus(); 
    return false; 
}else if(document.getElementById('errornumber').innerHTML=""){
    return true;   
}    
    if (inputName.value == "" || !ONLY_WORDS.test(inputName.value) || inputName.value.length <= 2)                                  
{ 
    document.getElementById('errorname').innerHTML="Veuillez entrez un nom valide";  
    inputName.focus(); 
    return false; 
}else if(document.getElementById('errorname').innerHTML="") {
    return true;   
} 
if (inputMonth.value == "month")                                  
{ 
    document.getElementById('errormonth').innerHTML="Can't be blank";  
    inputMonth.focus(); 
    return false; 
}else if( document.getElementById('errormonth').innerHTML=""){
    return true;  
}
if (inputYear.value == "year")                                  
{ 
    document.getElementById('erroryear').innerHTML="Can't be blank";  
    inputYear.focus(); 
    return false; 
}else if(document.getElementById('erroryear').innerHTML=""){
    return true;
}        
if (inputCvv.value == "" || inputCvv.value.length < 3)                                  
{ 
    document.getElementById('errorcvc').innerHTML="Can't be blank";  
    inputCvv.focus(); 
    return false; 
}else if( document.getElementById('errorcvc').innerHTML=""){
    return true; 

} else{
    form.style.display = 'none';
    thankYou.style.display = 'initial'  
}
})

