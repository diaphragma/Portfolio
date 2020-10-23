<?php
$recaptcha = $_POST['g-recaptcha-response'];
if(!empty($recaptcha)) {
    $recaptcha = $_REQUEST['g-recaptcha-response'];
    $secret = '6LeSKtkZAAAAAB1tWqKam6I8jFYcVGyXCqnlCyXt';
    $url = "https://www.google.com/recaptcha/api/siteverify?secret=".$secret ."&response=".$recaptcha."&remoteip=".$_SERVER['REMOTE_ADDR'];
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_TIMEOUT, 10);
    curl_setopt($curl, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 6.1; rv:8.0) Gecko/20100101 Firefox/8.0");
    $curlData = curl_exec($curl);
    curl_close($curl); 
    $curlData = json_decode($curlData, true);
    if($curlData['success']) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $tel = $_POST ['tel'];
        $comment = $_POST['comment'];
        $name = htmlspecialchars($name);
        $email = htmlspecialchars($email);
        $comment = htmlspecialchars($comment);
        $name = urldecode($name);
        $email = urldecode($email);
        $comment = urldecode($comment);
        $name = trim($name);
        $email = trim($email);
        $comment  = trim($comment);
        if (mail("nkt.mkrnk.23@gmail.com", "Заявка с diaphragma", "Зовут:".$name.".\nE-mail: ".$email."\nТелефон:" .$tel. "\nДетали: ".$comment ,"From: camera@diaphragma.photos \r\n")){  
        echo "Сообщение успешно отправлено<br>"; 
        echo "<a href='https://diaphragma.photos'>Назад на сайт</a>";
        } else { 
        echo "При отправке сообщения возникли ошибки<br>";
        echo "<a href='https://diaphragma.photos'>Назад на сайт</a>";
        }
    } else {
        echo "Подтвердите, что вы не робот и попробуйте еще раз<br>";
        echo "<a href='https://diaphragma.photos'>Назад на сайт</a>";;
    }
}
else {
    echo "Поставьте галочку в поле 'Я не робот' для отправки сообщения<br>";
    echo "<a href='https://diaphragma.photos'>Назад на сайт</a>";
}
?>