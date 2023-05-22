<?php
	// In een realistisch scenario zouden deze productgegevens natuurlijk uit een database komen.
	// Op het moment hebben we dat echter nog niet gehad, dus tref je de gegevens 'hard coded' aan.

	require_once 'php/functions.php';
	
	$game = getInfo();
	list($name, $description, $genre, $price, $release) = $game;
 ?>
<!DOCTYPE html>
<html>
	<head>
		<title>Mass Effect Andromeda</title>
		<style>
			*{
				margin: 0;
				font-family: Helvetica, Arial, sans-serif;
			}
			body{
				background-image: url('http://cdn.wccftech.com/wp-content/uploads/2016/09/Mass-Effect-Andromeda.jpg');
				background-repeat: no-repeat;
			}
			#container{
				width: 840px;
				height: 600px;
				background-color: rgba(201, 207, 209, 0.5);
				margin: 0 auto;
				padding: 20px 60px;
			}
			table, td, th{
				border: 1px solid black;
				border-collapse: collapse;
			}
			table{
				width: 400px;
				margin: 20px auto;
			}
			th{
				height: 50px;
				font-size: 18px;
				color: white;
			}
			table tr td:first-of-type{
				width: 110px;
				font-weight: bold;
			}
		</style>
	</head>
	<body>
		<div id="container">
			<table>
				<tr>
					<th colspan="2"><?= $name ?></th>
				</tr>
				<tr>
					<td>Omschrijving:</td>
					<td><?= $description ?></td>
				</tr>
				<tr>
					<td>Genre:</td>
					<td><?= $genre ?></td>
				</tr>
				<tr>
					<td>Prijs:</td>
					<td>&euro; <?= str_replace('.',',',$price) ?></td>
				</tr>
				<tr>
					<td>Verwacht:</td>
					<td><?= $release ?></td>
				</tr>
			</table>
		</div>
	</body>
</html>