let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let name = data[i]["gsx$namefullnameofthepersonrestaurant"]["$t"];
	  let vegnon = data[i]["gsx$diettypevegnon-vegvegandnonveg"]["$t"];
    	  let type = data[i]["gsx$foodtypehomecookedbakeryrestaurantetc.etc."]["$t"];
	   let number = data[i]["gsx$numberallpossiblecontactnumbers"]["$t"];
	   		 let are = data[i]["gsx$locationarea"]["$t"];
			  let del = data[i]["gsx$deliverytoareaswheretheycandeliver"]["$t"];
			 
	  
						
      
	  document.getElementById("foo").innerHTML +=
        "<tr>" +        
        "<td>" +
       name +
        "</td>" +
        "<td>" +
		vegnon +
        "</td>" +
        "<td>" +
      type+
        "</td>" +
		"<td>" +
       number +
        "</td>" +
		"<td>" +
       are +
        "</td>" +
		"<td>" +
       del +
        "</td>" +
        "</tr>";
    }
  }
};

xmlhttp.open(
  "GET",
  "https://spreadsheets.google.com/feeds/list/1doxzIk87x4VtNciDqU9ylW8PwfDVZNywaTIGskHfaq8/8/public/values?alt=json",
  true
);
xmlhttp.send();