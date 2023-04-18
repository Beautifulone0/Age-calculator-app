// select the ouput element
 var outputYear = document.querySelector('.output-year');
 var outputMonth = document.querySelector('.output-month');
 var outputDay = document.querySelector('.output-day');
 var submit = document.querySelector('.submit-btn')

// select the input element
  let isValid = false;
  var inputYear = document.querySelector('#years');
  var inputMonth = document.querySelector('#months');
  var inputDay = document.querySelector('#days');

// select the error element
var errorDay = document.querySelector('#day-error');
var errorMonth = document.querySelector('#month-error');
var errorYear = document.querySelector('#year-error')

// add eventlistener
submit.addEventListener('click', calculate )
inputDay.addEventListener('input', function(e){
  if(+inputDay.value > 31) {
    errorDay.textContent='Must be a valid date';
    isValid = false;
    return;
  } else{
    isValid = true;
    errorDay.textContent = '';
  }

  if (+ inputDay.value === 0){
    isValid = false;
    errorDay.textContent= 'This field is required';
    isValid =false;
    return;
  } else {
    errorDay.textContent = '';
  }
});

inputMonth.addEventListener('input', function(e){
  if(+inputMonth.value > 12) {
    errorMonth.textContent='Must be a valid Month';
    isValid = false;
    return;
  } else{
    isValid = true;
    errorMonth.textContent = '';
  }

  if (+ inputMonth.value === 0){
    isValid = false;
    errorMonth.textContent= 'This field is required';
    isValid =false;
    return;
  } else {
    errorMonth.textContent = '';
  }
});

inputYear.addEventListener('input', function(e){
  if(+inputYear.value > 2023) {
    errorYear.textContent='Must be a valid year';
    isValid = false;
    return;
  } else{
    isValid = true;
    errorYear.textContent = '';
  }

  if (+ inputYear.value === 0){
    isValid = false;
    errorYear.textContent= 'This field is required';
    isValid =false;
    return;
  } else {
    errorYear.textContent = '';
  }
});

 function calculate () {
  if (isValid) {
     let birthDate = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
     console.log(birthDate);
     let birthDateObj = new Date(birthDate);
     let ageDiffMill = Date.now() - birthDateObj;
     let ageDate = new Date(ageDiffMill);
     let ageYears = ageDate.getUTCFullYear() - 1970; 
     let ageMonth = ageDate.getUTCMonth();
     let ageDay = ageDate.getUTCDay() - 1;
     //Displaying everything
     outputDay.textContent = ageDay;
     outputMonth.textContent = ageMonth;
     outputYear.textContent = ageYears;
  } else {
     alert ('error')
  }
  event.preventDefault()
 } 