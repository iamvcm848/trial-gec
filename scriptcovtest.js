let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let cname = data[i]["gsx$fullnameoftestingcenter"]["$t"];
	 
    	  let la = data[i]["gsx$locationarea"]["$t"];
	   let number = data[i]["gsx$allpossiblecontactnumbers"]["$t"];
	   		 let rep = data[i]["gsx$reporttype"]["$t"];
			 
			 	   		 let tim = data[i]["gsx$timing"]["$t"];
	  	   		 let are = data[i]["gsx$homesamplecollectionareasservedno"]["$t"];
				   		 let wkd = data[i]["gsx$workingdays"]["$t"];			
      
	  document.getElementById("covt").innerHTML +=
        "<tr>" +        
        "<td>" +
       cname +
        "</td>" +
        "<td>" +
      la+
        "</td>" +
		"<td>" +
       number +
        "</td>" +
		"<td>" +
       rep +
        "</td>" +"<td>" +
       tim +
        "</td>" +
		"<td>" +
       are +
        "</td>" +
		"<td>" +
       wkd +
        "</td>" +
		"</tr>";
    }
  }
};

xmlhttp.open(
  "GET",
  "https://spreadsheets.google.com/feeds/list/1doxzIk87x4VtNciDqU9ylW8PwfDVZNywaTIGskHfaq8/4/public/values?alt=json",
  true
);
xmlhttp.send();