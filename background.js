chrome.browserAction.onClicked.addListener(function() {
	
	chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {
	     activeTabUrl = arrayOfTabs[0].url; // gets the URL
	     //alert(activeTabUrl);
  	});
  	//alert(activeTabUrl);
    var href = "https://www.google.com/calendar/render?" + "action=TEMPLATE&text=Reminder&details="+ activeTabUrl+"&trp%3B=true&gsessionid=OK&output=xml";
    //sample google cal url
 	//https://www.google.com/calendar/render?action=TEMPLATE&text=ajsdasjhd&details=asd&trp%3B=true&gsessionid=OK&output=xml
  	window.open(href, 'Reminder', 'width=700,height=700');
});

// Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(function(tab) {
//   // No tabs or host permissions needed!
//   console.log('Turning  red!');
//   chrome.tabs.executeScript({
//     code: 'window.location.href = "http://www.google.com"'
//   }); 
// });




