let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let org = data[i]["gsx$qualitycleaningservices"]["$t"];
	 
	  
						
      
	  document.getElementById("san").innerHTML +=
        "<tr>" +        
        "<td>" +
       org +
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