const auth = {
    username: 'ad',
    password: '1',
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
    alert("Giriş Başarılı. Hoşgeldiniz " + usernameInput.value);
    window.location.href = "../about/about.html";
}