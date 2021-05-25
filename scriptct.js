let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let name = data[i]["gsx$namefullnameoftheperson"]["$t"];
	  let con = data[i]["gsx$numberallpossiblecontactnumbers"]["$t"];
    	  let gen = data[i]["gsx$gender"]["$t"];
	   let are = data[i]["gsx$locationarea"]["$t"];
	   		
						
      
	  document.getElementById("ct").innerHTML +=
        "<tr>" +        
        "<td>" +
       name +
        "</td>" +
		 "<td>" +
        con +
        "</td>" +
        "<td>" +
       gen +
        "</td>" +
		"<td>" +
       are +
         "</td>" +
        "</tr>";
    }
  }
};

xmlhttp.open(
  "GET",
  "https://spreadsheets.google.com/feeds/list/1doxzIk87x4VtNciDqU9ylW8PwfDVZNywaTIGskHfaq8/13/public/values?alt=json",
  true
);
xmlhttp.send();