const form = document.getElementById("form")

form.addEventListener('submit', e=>{
    e.preventDefault();
    const firstname = form['firstname'].value;
    const lastname = form['lastname'].value;
    const email = form['email'].value;
    const password = form['password'].value;
    
    if(firstname === ''){
        displayError('firstname-error');  
    }
    if(lastname === ''){
        displayError('lastname-error');
    }
    if(email === ''){
        displayError('email-error');
    }
    if(password === ''){
        displayError('password-error')
    }
    if(email !== ''){
        if (!validateEmail(email)){
            const item = document.getElementsByClassName('email-error');
            item[0].innerHTML = 'Looks like this is not an email';
            item[0].classList.add('display-error');
        }
         else{
        document.body.innerHTML = `<div style="display:flex; align-items: center; justify-content: center;"><h1>Thank You, You will recieve a link to activate the free trail.</h1></div>`;
    }
    }
   
});


function displayError(field){
   const item = document.getElementsByClassName(field);
   item[0].classList.add('display-error');
}

function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}