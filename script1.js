let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let name = data[i]["gsx$name"]["$t"];
	  let consultation = data[i]["gsx$consultationtypegynacgeneralhomeopathypediatricianetc."]["$t"];
    let availability = data[i]["gsx$availabilitytimewhentheyareavailabletoteleconsult"]["$t"];
	  let contact = data[i]["gsx$numberallpossiblecontactnumbers"]["$t"];
	 
						
      
	  document.getElementById("doc").innerHTML +=
        "<tr>" +
        
        "<td>" +
        name +
        "</td>" +
        "<td>" +
       consultation +
        "</td>" +
        "<td>" +
       availability +
        "</td>" +
		"<td>" +
        contact +
        "</td>" +
        "</tr>";
    }
  }
};

xmlhttp.open(
  "GET",
  "https://spreadsheets.google.com/feeds/list/1doxzIk87x4VtNciDqU9ylW8PwfDVZNywaTIGskHfaq8/5/public/values?alt=json",
  true
);
xmlhttp.send();
