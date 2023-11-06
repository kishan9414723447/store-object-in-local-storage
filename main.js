var submit = document.getElementById('submit');



submit.addEventListener('click', (e) => {
    e.preventDefault();
    var userName = document.getElementById('name').value;
    var userPassword = document.getElementById('password').value;
    var myObj={
        Name:userName,
        Password : userPassword
    };
    var myObj_searlized=JSON.stringify(myObj);
    localStorage.setItem('user detail object',myObj_searlized);

})
