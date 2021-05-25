let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
		let des = data[i]["gsx$designation"]["$t"];
      let name = data[i]["gsx$nameofdoctor"]["$t"];
	  let mob = data[i]["gsx$mobilenumber"]["$t"];
    	  
	  
						
      
	  document.getElementById("phc").innerHTML +=
        "<tr>" +        
        "<td>" +
      des +
        "</td>" +
        "<td>" +
		name +
        "</td>" +
        "<td>" +
      mob+
        "</td>" +
		
        "</tr>";
    }
  }
};

xmlhttp.open(
  "GET",
  "https://spreadsheets.google.com/feeds/list/1doxzIk87x4VtNciDqU9ylW8PwfDVZNywaTIGskHfaq8/12/public/values?alt=json",
  true
);
xmlhttp.send();