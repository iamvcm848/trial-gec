let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let org = data[i]["gsx$organisation"]["$t"];
	  let serv = data[i]["gsx$services"]["$t"];
    	  let contact = data[i]["gsx$contact"]["$t"];
	   let locn = data[i]["gsx$deliveryareas"]["$t"];
	   		 let emal = data[i]["gsx$e-mail"]["$t"];
			 
	  
						
      
	  document.getElementById("san").innerHTML +=
        "<tr>" +        
        "<td>" +
       org +
        "</td>" +
        "<td>" +
		serv +
        "</td>" +
        "<td>" +
       contact+
        "</td>" +
		"<td>" +
       locn +
        "</td>" +
		"<td>" +
       emal +
        "</td>" +
        "</tr>";
    }
  }
};

xmlhttp.open(
  "GET",
  "https://spreadsheets.google.com/feeds/list/1doxzIk87x4VtNciDqU9ylW8PwfDVZNywaTIGskHfaq8/9/public/values?alt=json",
  true
);
xmlhttp.send();