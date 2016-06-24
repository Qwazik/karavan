<?php
$to = "qwazik21@gmail.com";
$sitename = "Новое письмо";

$name = trim($_POST["username"]);
$phone = trim($_POST["userphone"]);

$message = '
			<html>
			<head>
				<title>$pagetittle</title>
			</head>
				<body>
					<table border="1" style=\'font-size: 16px; border-collapse: collapse;\'>
						<tr>
							<td style=\'font-weight: bold; padding: 5px;\'>Имя:</td>
							<td style=\'padding: 5px\'>'.$name.'</td>
						</tr>
						<tr>
							<td style=\'font-weight: bold; padding: 5px;\'>Телефон:</td>
							<td style=\'padding: 5px\'>'.$phone.'</td>
						</tr>
					</table>
				</body>
			</html>
			';


$pagetittle = "Заявка на обратный звонок с \"$sitename\"";

mail($to,$pagetittle,$message, "Content-type: text/html; charset=\"utf-8\"\n From: $sitename");
?>
