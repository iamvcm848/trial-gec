let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let org = data[i]["gsx$nameoftheorganisationindividual"]["$t"];
	 let cn = data[i]["gsx$contactnumber"]["$t"];
	  let lc = data[i]["gsx$location"]["$t"];
	    let sa = data[i]["gsx$serviceareas"]["$t"];
		  let rel = data[i]["gsx$religions"]["$t"];
		  	  let add = data[i]["gsx$address"]["$t"];
						
						
      
	  document.getElementById("cre").innerHTML +=
        "<tr>" +        
        "<td>" +
       org +
        "</td>" +
        "<td>" +
      cn +
        "</td>" +
		 "<td>" +
       lc +
        "</td>" +
		 "<td>" +
       sa +
        "</td>" + "<td>" +
       rel +
        "</td>" + "<td>" +
       add +
        "</td>" +
        "</tr>";
    }
  }
};

xmlhttp.open(
  "GET",
  "https://spreadsheets.google.com/feeds/list/1doxzIk87x4VtNciDqU9ylW8PwfDVZNywaTIGskHfaq8/11/public/values?alt=json",
  true
);
xmlhttp.send();