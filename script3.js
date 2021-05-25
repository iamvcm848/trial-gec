let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let name = data[i]["gsx$namefullnameofthepharmacy"]["$t"];
	  let contact = data[i]["gsx$contact"]["$t"];
    	  let loc = data[i]["gsx$locationarea"]["$t"];
	   let del = data[i]["gsx$deliverytoareaswheretheycandeliver"]["$t"];
	   		 let avl = data[i]["gsx$medicinesavailabilitychecktheavailabilityofimportantcovidmedicines"]["$t"];
	  
						
      
	  document.getElementById("med").innerHTML +=
        "<tr>" +
        
        "<td>" +
        name +
        "</td>" +
        "<td>" +
      contact +
        "</td>" +
        "<td>" +
       loc +
        "</td>" +
		"<td>" +
       del +
        "</td>" +
        "<td>" +
        avl +
        "</td>" +
		 
        "</tr>";
    }
  }
};

xmlhttp.open(
  "GET",
  "https://spreadsheets.google.com/feeds/list/1doxzIk87x4VtNciDqU9ylW8PwfDVZNywaTIGskHfaq8/7/public/values?alt=json",
  true
);
xmlhttp.send();
