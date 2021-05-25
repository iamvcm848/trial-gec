let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let name = data[i]["gsx$carecenternamefullnameofthecenter"]["$t"];
	  let type = data[i]["gsx$centertypegovernmenthospitalprivatehospitalhotelphcuhcetc.etc."]["$t"];
    	  let bedtype = data[i]["gsx$facilitytypeventilatorsicuoxygenisolationbedsetc.etc."]["$t"];
	   let contact = data[i]["gsx$numberallpossiblecontactnumbers"]["$t"];
	   		 let are = data[i]["gsx$locationexactlocation"]["$t"];
			  let add = data[i]["gsx$addresscompleteaddress"]["$t"];
			   let nof = data[i]["gsx$nameofthenodalofficer"]["$t"];
			    let cno = data[i]["gsx$contactno"]["$t"];
	  
						
      
	  document.getElementById("cac").innerHTML +=
        "<tr>" +        
        "<td>" +
        name +
        "</td>" +
        "<td>" +
		type +
        "</td>" +
        "<td>" +
       bedtype+
        "</td>" +
		"<td>" +
       contact +
        "</td>" +
        "<td>" +
        are +
        "</td>" +
		 "<td>" +
        add +
        "</td>"+
		"<td>" +
        nof +
        "</td>"+
		"<td>" +
        cno +
        "</td>"+
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
