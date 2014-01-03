$(function(){
	//repeats what we typed
	var activeTabUrl
	chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {

     var activeTab = arrayOfTabs[0];
     activeTabUrl = arrayOfTabs[0].url; // gets the URL
     //alert(activeTabUrl);
  });
   // $("#content").text($("#name").val());
	$("#name").keyup(function(){
		$("#content").text($("#name").val());
	});


});