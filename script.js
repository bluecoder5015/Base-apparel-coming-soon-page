const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', e=>{
    e.preventDefault();
    const emailVal = email.value;

    //check if it is valid email
    if(!validateEmail(emailVal)){
        form.classList.add('error');
        form.classList.remove('sucess');
    }else{
        form.classList.remove('error');
        form.classList.add('sucess');
    }


})

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };