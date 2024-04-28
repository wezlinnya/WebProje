const auth = {
    username: 'g231210040',
    password: '12345',
}
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', submit);


function submit(event) {
    event.preventDefault();
    if (usernameInput.value === auth.username && passwordInput.value === auth.password)
        redirect();
    else
        alert("Kullanıcı adı ya da şifreniz hatalı, tekrar deneyiniz.");
}

function redirect() {
    alert("Giriş Başarılı.");
    window.location.href = "../about/about.html";
}