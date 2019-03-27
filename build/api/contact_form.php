<?php 

    $postData = json_decode(file_get_contents('php://input'), true);

    require_once('../api/config/email_config.php');

    $output = [
        'success' => false
    ];

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require '../../vendor/phpmailer/phpmailer/src/Exception.php';
    require '../../vendor/phpmailer/phpmailer/src/PHPMailer.php';
    require '../../vendor/phpmailer/phpmailer/src/SMTP.php';

    $mail = new PHPMailer(true);  
    $first_name = $postData['firstName'];
    $last_name = $postData['lastName'];
    $phone = $postData['phone'];
    $email = $postData['email'];
    $message = $postData['message'];

    try {

        $mail->SMTPDebug = 3;                                 
        $mail->isSMTP();                               
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;                              
        $mail->Username = EMAIL_USER;                
        $mail->Password = EMAIL_PASSWORD;     
        $mail->SMTPSecure = 'tls';                
        $mail->Port = 587;
        
        $options = [
            'ssl' => [
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            ]
        ];

        $mail->smtpConnect($options);

        $mail->setFrom('cthanwebdeveloper@gmail.com');
        $mail->addAddress('krispthan@gmail.com');              
        $mail->addReplyTo($email);

        $mail->isHTML(true);                              
        $mail->Subject = 'Message from '.$postData['data'];
        $mail->Body    =" From: {$SERVER['REMOTE_ADDR']}
                        First Name: {$first_name}<br>
                        Last Name: {$last_nam}<br>
                        Phone: {$phone}<br>
                        Email: {$email}<br>
                        Message: {$message}<br>
                        ";
        $mail->AltBody = htmlentities($message);

        $mail->send();

        $output['message'] = 'Email sent successfully';
        $output['success'] = true;

        print(json_encode($output));

    } catch (Exception $e) {
        $output['error'] = 'Error sending email';

        print(json_encode($output));
    }

?>