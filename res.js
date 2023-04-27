// reservation


function validateForm() {
    const checkinDateInput = document.getElementById('checkin-date');
    const checkinDate = new Date(checkinDateInput.value);
    const today = new Date();
  
    if (checkinDate < today) {
      alert("Date d'arrivée invalide");
      checkinDateInput.classList.add('error')
      return false;
    }
  
    return true;
  }

const checkinDateInput = document.getElementById('checkin-date');
const checkoutDateInput = document.getElementById('checkout-date');

checkinDateInput.addEventListener('change', function() {
const checkinDate = new Date(checkinDateInput.value);
const checkoutDate = new Date(checkoutDateInput.value);

if (checkoutDate < checkinDate) {
      checkoutDateInput.value = checkinDateInput.value;
    }
});

checkoutDateInput.addEventListener('change', function() {
const checkinDate = new Date(checkinDateInput.value);
const checkoutDate = new Date(checkoutDateInput.value);

if (checkoutDate < checkinDate) {
      checkoutDateInput.value = checkinDateInput.value;
    }
});


let prenom = document.querySelector('#prenom');
let checkprenom = document.querySelector('#checkprenom');
let prenomOk = false;

prenom.addEventListener('input',function(){
    if(prenom.value.length <= 1){
        prenomOk = false;
    }
    else{
        prenomOk = true;
    }
    validControl();
});



let nom = document.querySelector('#nom');
let checknom = document.querySelector('#checknom');
let nomOk = false;

nom.addEventListener('input',function(){
    if(nom.value.length <=1){
        nomOk = false;
    }
    else{
        nomOk = true;
    }
    validControl();
});



let email = document.getElementById("email");
let checkemail = document.getElementById("checkemail");
let emailregex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[\w]{2,}$/;
let emailOk = false;

email.addEventListener('input',function(){
    let emailInput = email.value;
    if (emailregex.test(emailInput)) {
        checkemail.innerHTML='';
        checkemail.classList.remove('error');
        emailOk = true;
      } else {
        checkemail.innerHTML='Invalid email';
        checkemail.classList.add('error');
        emailOk = false;
      }
});


let tel = document.getElementById("tel");
let checktel = document.getElementById("checktel");
let telregex = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;
let telOk = false;

tel.addEventListener('input',function(){
    let telInput = tel.value;
    if (telregex.test(telInput)) {
        checktel.innerHTML='';
        checktel.classList.remove('error');
        telOk = true;
      } else {
        checktel.innerHTML='Invalid number';
        checktel.classList.add('error');
        telOk = false;
      }
});

let rgpd = document.querySelector('#rgpd');
let checkrgpd = document.querySelector('#checkrgpd');
let rgpdLabel = document.querySelector('label[for="rgpd"]');

function validControl(){
    if(rgpd.checked==false){
        rgpdLabel.classList.add('error');
    }
    else{
        rgpdLabel.classList.remove('error');
    }
    if( prenomOk && nomOk && emailOk && telOk && rgpd.checked){
        document.querySelector('button[type=submit]').disabled = false;
    }
    else{
        document.querySelector('button[type=submit]').disabled = true;
    }
}

rgpd.addEventListener('change',validControl);