function chaXun(){
	var month = Number(document.getElementById("month").value);
	var day = Number(document.getElementById("day").value);
        var result = Number(document.getElementById("result").value)
	
	if(((month == "3") && (day>=21))||((month == "4") && (day<=19))){
		document.getElementById("result").innerHTML ="你的星座是：白羊座";
	}else if(((month == "4") && (day>=20))||((month == "5") && (day<=20))){
		document.getElementById("result").innerHTML ="你的星座是：金牛座";
	}else if(((month == "5") && (day>=21))||((month == "6") && (day<=21))){
		document.getElementById("result").innerHTML ="你的星座是：双子座";
	}else if(((month == "6") && (day>=22))||((month == "7") && (day<=22))){
		document.getElementById("result").innerHTML ="你的星座是：巨蟹座";
	}else if(((month == "7") && (day>=23))||((month == "8") && (day<=22))){
		document.getElementById("result").innerHTML ="你的星座是：狮子座";
	}else if(((month == "8") && (day>=23))||((month == "9") && (day<=22))){
		document.getElementById("result").innerHTML ="你的星座是：处女座";
	}else if(((month == "9") && (day>=23))||((month == "10") && (day<=23))){
		document.getElementById("result").innerHTML ="你的星座是：天秤座";
	}else if(((month == "10") && (day>=24))||((month == "11") && (day<=22))){
		document.getElementById("result").innerHTML ="你的星座是：天蝎座";
	}else if(((month == "11") && (day>=23))||((month == "12") && (day<=21))){
		document.getElementById("result").innerHTML ="你的星座是：射手座";
	}else if(((month == "12") && (day>=22))||((month == "1") && (day<=19))){
		document.getElementById("result").innerHTML ="你的星座是：摩羯座";
	}else if(((month == "1") && (day>=20))||((month == "2") && (day<=18))){
		document.getElementById("result").innerHTML ="你的星座是：水瓶座";
	}else if(((month == "2") && (day>=19))||((month == "3") && (day<=20))){
		document.getElementById("result").innerHTML ="你的星座是：双鱼座";
	}
}