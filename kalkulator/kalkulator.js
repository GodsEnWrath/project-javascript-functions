function kalkulator()
{
//variable angka satu
var angkaSatu = parseInt(document.getElementById(“angkaSatu”).value);
//variable angka dua
var angkaDua = parseInt(document.getElementById(“angkaDua”).value);
//variable operasi aritmatik
var op = document.getElementById(“op”).value;
//variable angka hasil
var hasil = document.getElementById(“hasil”);
//variable untuk total angka satu dan angka dua
var total;

if(isNaN(angkaSatu) || isNaN(angkaDua)){

alert(‘isi form dengan angka!’)

}else{

if(op==”+”)
{
total = angkaSatu+angkaDua;
}
else if(op==”-”)
{
total = angkaSatu-angkaDua;
}
else if(op==”x”)
{
total = angkaSatu*angkaDua;
}
else
{
total = angkaSatu/angkaDua;
}

}

hasil.value = total;

}