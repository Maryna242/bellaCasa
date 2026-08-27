<?php
 
// Токен
    const TOKEN = '6659606247:AAFBCNDr-azeA77gj4bFGhhIoDAzkrGtsbY';

    // ID чата
    const CHATID = '-930274697';
    
    // Массив допустимых значений типа файла.
    $types = array('image/gif', 'image/png', 'image/jpeg', 'application/pdf');
    
    // Максимальный размер файла в килобайтах
    // 1048576; // 1 МБ
    $size = 1073741824; // 1 ГБ
    function processPhoneNumber($phoneNumber)
    {
        // Удаляем все символы, кроме цифр
        $phoneNumber = preg_replace('/[^0-9]/', '', $phoneNumber);

        // Если номер телефона начинается с +38, заменяем его на +380
        if (strpos($phoneNumber, '+38') === 0) {
            $phoneNumber = '+380' . substr($phoneNumber, 3);
        }

        // Если номер телефона не начинается с "+", добавляем его
        if (strpos($phoneNumber, '+') !== 0) {
            $phoneNumber = '+' . $phoneNumber;
        }

        // Возвращаем обработанный номер телефона
        return $phoneNumber;
    }

 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
    $fileSendStatus = '';
    $textSendStatus = '';
    $msgs = [];
   
    // Проверяем не пусты ли поля с именем и телефоном
    // if (!empty($_POST['name']) && !empty($_POST['phone'])) {
        
        // Если не пустые, то валидируем эти поля и сохраняем и добавляем в тело сообщения. Минимально для теста так:
        $txt = "Заявка с сайта" . "\n";
        
        if (isset($_POST['name']) && !empty($_POST['name'])) {
            $txt .= "Имя отправителя: " . strip_tags(trim($_POST['name'])) . "\n";
        }
        
        // Номер телефона
        // if (isset($_POST['phone']) && !empty($_POST['phone'])) {
        //     $txt .= "Телефон: " . strip_tags(trim($_POST['phone'])) . "\n";
        // }
        if (isset($_POST['phone']) && !empty($_POST['phone'])) {
            $phone = processPhoneNumber($_POST['phone']);
            $txt .= "Телефон link: " . '<a href="' . $phone . '">' . $phone . '</a>' . "\n";
        }

        if (isset($_POST['city']) && !empty($_POST['city'])) {
            $txt .= "Город: " . strip_tags(trim($_POST['city'])) . "\n";
        }

        if (isset($_POST['email']) && !empty($_POST['email'])) {
            $txt .= "Email: " . '<a href="mailto:' . trim($_POST['email']) . '">' . trim($_POST['email']) . '</a>' . "\n";
        }
        if (isset($_POST['message']) && !empty($_POST['message'])) {
            $txt .= "Сообщение: " . strip_tags(trim($_POST['message'])) . "\n";
        }

        // Отправляем через curl (а не file_get_contents), т.к. на части хостингов
        // fopen-обёртки для https отключены (allow_url_fopen) или недоступны сертификаты.
        $textCurl = curl_init();
        curl_setopt($textCurl, CURLOPT_URL, 'https://api.telegram.org/bot' . TOKEN . '/sendMessage');
        curl_setopt($textCurl, CURLOPT_POST, true);
        curl_setopt($textCurl, CURLOPT_POSTFIELDS, [
            'chat_id' => CHATID,
            'parse_mode' => 'html',
            'text' => $txt,
        ]);
        curl_setopt($textCurl, CURLOPT_RETURNTRANSFER, true);
        $textSendStatus = curl_exec($textCurl);
        $textCurlError = curl_error($textCurl);

        if ( isset(json_decode($textSendStatus)->{'ok'}) && json_decode($textSendStatus)->{'ok'} ) {
            if (!empty($_FILES['files']['tmp_name'])) {
            
                $urlFile =  "https://api.telegram.org/bot" . TOKEN . "/sendMediaGroup";
                
                // Путь загрузки файлов
                $path = $_SERVER['DOCUMENT_ROOT'] . '/telegramform/tmp/';
                
                // Загрузка файла и вывод сообщения
                $mediaData = [];
                $postContent = [
                    'chat_id' => CHATID,
                ];
            
                for ($ct = 0; $ct < count($_FILES['files']['tmp_name']); $ct++) {
                    if ($_FILES['files']['name'][$ct] && @copy($_FILES['files']['tmp_name'][$ct], $path . $_FILES['files']['name'][$ct])) {
                    if ($_FILES['files']['size'][$ct] < $size && in_array($_FILES['files']['type'][$ct], $types)) {
                        $filePath = $path . $_FILES['files']['name'][$ct];
                        $postContent[$_FILES['files']['name'][$ct]] = new CURLFile(realpath($filePath));
                        $mediaData[] = ['type' => 'document', 'media' => 'attach://'. $_FILES['files']['name'][$ct]];
                    }
                    }
                }
            
                $postContent['media'] = json_encode($mediaData);
            
                $curl = curl_init();
                curl_setopt($curl, CURLOPT_HTTPHEADER, ["Content-Type:multipart/form-data"]);
                curl_setopt($curl, CURLOPT_URL, $urlFile);
                curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
                curl_setopt($curl, CURLOPT_POSTFIELDS, $postContent);
                $fileSendStatus = curl_exec($curl);
                $files = glob($path.'*');
                foreach($files as $file){
                    if(is_file($file))
                    unlink($file);
                }
            }
            http_response_code(200);
            echo json_encode(['success' => true]);
        } else {
            $log = date('Y-m-d H:i:s') . ' неудалось отправить форму: ';
            $log .= ' curl_error=' . $textCurlError . ' response=' . $textSendStatus . ' ';
            file_put_contents(__DIR__ . '/log.txt', $log . $txt . PHP_EOL, FILE_APPEND);

            http_response_code(502);
            echo json_encode(['success' => false, 'error' => 'telegram_send_failed']);
        }
    // } else {
    //     echo 0;
    // }
} else {
  header("Location: /");
}
