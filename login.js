


// login
const email = document.getElementById('email') ;
const password = document.getElementById('password') ;


const loginBtn = document.getElementById('loginBtn').addEventListener('click',() => {
    if(email.value === 'cpi60@gmail.com'){
        if(password.value == 'cpi60'){
            alert('Login successfully');
            email.value = '';
            password.value = '';
            window.open('home.html', '_blank');
        } else{
        alert('Incorrect password');
    }
    } else{
        alert('Please type a valid email address');
    }
    
})
