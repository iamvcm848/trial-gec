let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let name = data[i]["gsx$nameofcontactperson"]["$t"];
	 let contact = data[i]["gsx$contactnumber"]["$t"];
     let loc = data[i]["gsx$locationarea"]["$t"];
	  let add = data[i]["gsx$address"]["$t"];
	  let deli = data[i]["gsx$delivery"]["$t"];
	  		 let los = data[i]["gsx$listofitemsservicesprovided"]["$t"];
	  
						
      
	  document.getElementById("demo").innerHTML +=
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
        add +
        "</td>" +
        "<td>" +
        deli +
        "</td>" +
        "<td>" +
     los +
        "</td>" +
		"</tr>";
    }
  }
};

xmlhttp.open(
  "GET",
  "https://spreadsheets.google.com/feeds/list/1doxzIk87x4VtNciDqU9ylW8PwfDVZNywaTIGskHfaq8/1/public/values?alt=json",
  true
);
xmlhttp.send();

