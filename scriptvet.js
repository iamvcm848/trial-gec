let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let name = data[i]["gsx$namefullnameofthecenterperson"]["$t"];
	 let pettype = data[i]["gsx$pettypeswhatkindofpetsdotheyacceptdogscatsrabbitsetc."]["$t"];
    let num = data[i]["gsx$numberallpossiblecontactnumbers"]["$t"];
	  let are = data[i]["gsx$locationarea"]["$t"];
	  
						
      
	  document.getElementById("vet").innerHTML +=
        "<tr>" +
          "<td>" +
        name +
        "</td>" +
        "<td>" +
      pettype +
        "</td>" +
        "<td>" +
       num +
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
  "https://spreadsheets.google.com/feeds/list/1doxzIk87x4VtNciDqU9ylW8PwfDVZNywaTIGskHfaq8/10/public/values?alt=json",
  true
);
xmlhttp.send();

