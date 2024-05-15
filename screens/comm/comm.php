<?php
$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$age = $_POST['age'];
$gender = $_POST['gender'];
$message = $_POST['message'];
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Onaylandı</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
  <div class="container mt-5">
    <h1>Form Gönderildi</h1>
    <div class="alert alert-success">
      <p>Evet, formunuz başarıyla gönderildi!</p>
      <p>Formdaki bilgileriniz:</p>
      <ul>
        <li><strong>İsim:</strong> <?php echo $name; ?></li>
        <li><strong>Soyadı:</strong> <?php echo $surname; ?></li>
        <li><strong>E-posta:</strong> <?php echo $email; ?></li>
        <li><strong>Yaş:</strong> <?php echo $age; ?></li>
        <li><strong>Cinsiyet:</strong> <?php echo $gender; ?></li>
        <li><strong>Mesaj:</strong> <?php echo $message; ?></li>
      </ul>
    </div>
  </div>
</body>

</html>
