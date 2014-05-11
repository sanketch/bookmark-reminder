chrome.browserAction.onClicked.addListener(function() {

	// var activeTabUrl;
	// var activeTabTitle;

	//check if preference is defined through options
	if(localStorage.preference == undefined){
		localStorage.preference = "gCal";
	}

	console.log(localStorage.preference);
	chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {
		    var activeTabUrl = arrayOfTabs[0].url; // gets the URL
		    var activeTabTitle = arrayOfTabs[0].title;
		    //alert(activeTabUrl);
			if(localStorage.preference == "gCal"){
			    var href = "https://www.google.com/calendar/render?" + "action=TEMPLATE&text=Reminder "+ activeTabTitle + "&location=" + activeTabUrl + "&details="+ activeTabUrl+"&trp%3B=true&gsessionid=OK&output=xml";
				window.open(href, 'Reminder', 'width=700,height=700');
				//alert("gcal");
			}
			else{
				var cur = new Date();
				var curMonth = cur.getUTCMonth()+1;
				var startTime = cur.getUTCFullYear()+""+(curMonth<10?"0":"")+curMonth+""+(cur.getUTCDate()+1)+"T"+cur.getUTCHours()+""+cur.getUTCMinutes()+"00Z";
				var endTime = cur.getUTCFullYear()+""+(curMonth<10?"0":"")+curMonth+""+(cur.getUTCDate()+1)+"T"+(cur.getUTCHours()+1)+""+cur.getUTCMinutes()+"00Z";
				var eventFileStart = "BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\n";
				var eventFileCustom = "SUMMARY:Reminder for "+activeTabTitle+"\nDESCRIPTION:Visit "+activeTabUrl+ "\nLOCATION:"+activeTabUrl+"\nDTSTART:"+startTime+"\nDTEND:"+endTime+"\n";
				var eventFileEnd = "END:VEVENT\nEND:VCALENDAR"
				var eventReminder = eventFileStart + eventFileCustom + eventFileEnd;
				var blob = new Blob([eventReminder], {type: "text/plain;charset=utf-8"});
				saveAs(blob, "reminder.ics");
				//alert("ical");
			}
	});
});


