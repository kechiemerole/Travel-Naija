
<?php 
 use PHPMailer\PHPMailer\PHPMailer;
 require_once 'PHPMailer/src/ExpeException.php';
 require_once 'PHPMailer/src/PHPMailer.php';
 require_once 'PHPMailer/src/SMTP.php';



 $mail = new PHPMailer(true);
 $alert = '';
 if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    try{
        $mail -> isSMTP();
        $mail -> Host = 'smtp.gmail.com';
        $mail -> SMTPAuth = true;
        $mail -> Username = 'kechiemerolee@gmail.com';
        $mail -> Password = '';
        $mail -> SMTPSecure = "tls";
        $mail -> Port = '587';
        $mail -> sentFrom = ('kechiemerole@gmail.com');
        $mail -> addAddress = ('kechiemerole@gmail.com');

        $mail -> isHTML(true);
        $mail -> Subject = "You have received an email from" .$name.".\n\n".$message;
        $mail -> Body = "Name: $name <br> Email: $email <br> Subject: $subject <br> Message: $message";

        $mail -> send();
        $alert= "<div class='alert-success'><span> Message Sent! Thank you for contacting Travel naija!</span></div>";





    } catch (Exception $e){
        $alert= "<div class='alert-error'><span> '.$e-> getMessage ().'</span></div>";

    }
 }

?>
