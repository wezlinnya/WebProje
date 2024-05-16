<?php
// Basit bir kullanıcı doğrulama için sabit kullanıcı adı ve şifre belirleyelim.
$correct_username = "admin";
$correct_password = "1234";

// Formdan gelen verileri alalım.
$username = $_POST['username'];
$password = $_POST['password'];

// Kullanıcı adı ve şifreyi kontrol edelim.
if ($username === $correct_username && $password === $correct_password) {
    // Doğruysa, kullanıcıyı geri yönlendir ve URL'de kullanıcı adını ilet.
    header("Location: index.html?welcome=" . urlencode($username));
    exit();
} else {
    // Yanlışsa, hata mesajı göster.
    echo "<script>alert('Yanlış kullanıcı adı veya şifre.'); window.location.href='index.html';</script>";
    exit();
}
?>