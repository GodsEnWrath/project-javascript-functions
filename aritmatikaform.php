<DOCTYPE html>
<html>
<head>
<title>AA</title>
</head>
<body>
<form action="" method="post">
<p>
<input type="number" name="bill1" placeholder="Bilangan 1">
</p>
<p>
<input type="number" name="bill2" placeholder="Bilangan 2">
<p>
<p>
<input type="submit" name="btnsubmit" value="submit">
</p>
</form>
<?php

if(isset($_POST["btnsubmit"]))
{
	$bill1 = $_POST['bill1'];
	$bill2 = $_POST['bill2'];
	function tambah($bill1,$bill2)
	{
		$j=$bill1 + $bill2;
		echo "$bill1 + $bill2 = $j";
	}
	tambah($bill1,$bill2);
}
?>
</body>
</html>