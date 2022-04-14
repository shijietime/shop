function myFunction(){
	var x="",i;
	for (i=0;i<5;i++){
		x=x + "这个数字是" + i + "<br>";
	}
	document.getElementById("demo").innerHTML=x;
}