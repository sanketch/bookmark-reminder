chrome.browserAction.onClicked.addListener(function() {
	
	//check if preference is defined through options
	if(localStorage.preference == undefined){
		localStorage.preference = "gCal";
	}

	console.log(localStorage.preference);
	chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {
		    activeTabUrl = arrayOfTabs[0].url; // gets the URL
		    activeTabTitle = arrayOfTabs[0].title;
		     //alert(activeTabUrl);
	  	});

	if(localStorage.preference == "gCal"){
	  	//alert(activeTabUrl);
	    var href = "https://www.google.com/calendar/render?" + "action=TEMPLATE&text=Reminder "+ activeTabTitle + "&location=" + activeTabUrl + "&details="+ activeTabUrl+"&trp%3B=true&gsessionid=OK&output=xml";
		window.open(href, 'Reminder', 'width=700,height=700');
	}
	else{
		var eventFileStart = "BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\n";
		var eventFileCustom = "SUMMARY:Reminder for"+activeTabTitle+"\nDESCRIPTION:Visit "+activeTabUrl+ "\nLOCATION:"+activeTabUrl+"\n";
		var eventFileEnd = "END:VEVENT\nEND:VCALENDAR"
		var eventReminder = eventFileStart + eventFileCustom + eventFileEnd;
		var blob = new Blob([eventReminder], {type: "text/plain;charset=utf-8"});
		saveAs(blob, "reminder.ics");
	}
});




