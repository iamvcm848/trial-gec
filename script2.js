let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let name = data[i]["gsx$drivername"]["$t"];
	  let ambtype = data[i]["gsx$ambulancetyperegularicuoxygenetc."]["$t"];
     let num = data[i]["gsx$numberallpossiblecontactnumbers"]["$t"];
	  let loc = data[i]["gsx$location"]["$t"];
	   let aos = data[i]["gsx$serviceareasareaswheretheycanprovideservices"]["$t"];
	   		 let add = data[i]["gsx$addresscompleteaddress"]["$t"];
	  
						
      
	  document.getElementById("amb").innerHTML +=
        "<tr>" +
        
        "<td>" +
        name +
        "</td>" +
        "<td>" +
       ambtype +
        "</td>" +
        "<td>" +
       num +
        "</td>" +
		"<td>" +
       loc +
        "</td>" +
        "<td>" +
        aos +
        "</td>" +
		 "<td>" +
        add +
        "</td>" +
        "</tr>";
    }
  }
};

xmlhttp.open(
  "GET",
  "https://spreadsheets.google.com/feeds/list/1doxzIk87x4VtNciDqU9ylW8PwfDVZNywaTIGskHfaq8/6/public/values?alt=json",
  true
);
xmlhttp.send();

