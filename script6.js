let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let name = data[i]["gsx$carecenternamefullnameofthecenter"]["$t"];
	 
    	  let pettype = data[i]["gsx$facilitytypeventilatorsicuoxygenisolationbedsetc.etc."]["$t"];
	   let number = data[i]["gsx$numberallpossiblecontactnumbers"]["$t"];
	   		 let are = data[i]["gsx$locationexactlocation"]["$t"];
			 
			 
	  
						
      
	  document.getElementById("vet").innerHTML +=
        "<tr>" +        
        "<td>" +
       name +
        "</td>" +
        "<td>" +
      pettype+
        "</td>" +
		"<td>" +
       number +
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
  "https://spreadsheets.google.com/feeds/list/1doxzIk87x4VtNciDqU9ylW8PwfDVZNywaTIGskHfaq8/3/public/values?alt=json",
  true
);
xmlhttp.send();