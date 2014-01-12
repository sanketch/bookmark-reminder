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


        
                       
                        
                        var gCalParams = $.param({
                                "action" : 'TEMPLATE',
                                "text" : "Reminder",
                                "details" : activeTabUrl,
                                "trp;" : true,
                                'gsessionid' : 'OK',
                                'output' : 'xml'
                        });

                        var href = "https://www.google.com/calendar/render?" + gCalParams;
                        $("body").append($("<div>").text("Trying to load google calendar url now"));
                        //setTimeout(function() {
                              //  window.open(href, "_self");
                        //	}, 700); 
console.log("hi");
var newurl=href

// var viewtext_base_url = "http://google.com";
// var newurl;

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {redirect: newurl}, function(response) {
    console.log("ok");
  });
});




// Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(function(tab) {
//   // No tabs or host permissions needed!
//   console.log('Turning  red!');
//   chrome.tabs.executeScript({
//     code: 'window.location.href = "http://www.google.com"'
//   }); 
// });


//   newurl = viewtext_base_url;
  //chrome.tabs.sendMessage({redirect: newurl}); // send message to redirect


  //chrome.extension.sendRequest({redirect: newurl}); // send message to redirect


//chrome.tabs.update(arrayOfTabs[0].id, {url: href});
// chrome.browserAction.onClicked.addListener(function(tab) {
//     chrome.tabs.update(tab.id, {
//         url: "http://www.google.com"
//     });
// });
console.log("hi4");
//window.location.replace(href);
//window.location.href="http://google.com";

                
        	

     //  // Enter a client ID for a web application from the Google Developer Console.
     //  // The provided clientId will only work if the sample is run directly from
     //  // https://google-api-javascript-client.googlecode.com/hg/samples/authSample.html
     //  // In your Developer Console project, add a JavaScript origin that corresponds to the domain
     //  // where you will be running the script.
     //  var clientId = '169917661482-bb5cdcldc6pakhj73ponu1med1amc3m5.apps.googleusercontent.com';

     //  // Enter the API key from the Google Developer Console - to handle any unauthenticated
     //  // requests in the code.
     //  // The provided key works for this sample only when run from
     //  // https://google-api-javascript-client.googlecode.com/hg/samples/authSample.html
     //  // To use in your own application, replace this API key with your own.
     //  var apiKey = 'fdoDyrAKpWC1tL7fvNoTRrd0';

     //  // To enter one or more authentication scopes, refer to the documentation for the API.
     //  var scopes = 'https://www.googleapis.com/auth/calendar';
    
     //  // Use a button to handle authentication the first time.
     //  function handleClientLoad() {
     //    gapi.client.setApiKey(apiKey);
     //    window.setTimeout(checkAuth,1);
     //  }

     //  function checkAuth() {
     //    gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
     //  }


     //  function handleAuthResult(authResult) {
     //    var authorizeButton = document.getElementById('authorize-button');
     //    var insertButton = document.getElementById('insert-button');
     //    if (authResult && !authResult.error) {
     //      authorizeButton.style.visibility = 'hidden';
     //      makeApiCall();
     //      insertButton.style.visibility = '';
     //      insertButton.onclick = handleInsertClick;
     //    } else {
     //      authorizeButton.style.visibility = '';
        
     //      insertButton.style.visibility = 'hidden';
        
     //      authorizeButton.onclick = handleAuthClick;
     //    }
     //  }

     //  function handleAuthClick(event) {
     //    gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
     //    return false;
     //  }
    
     //  function handleInsertClick(event) {
     //   makeInsertApiCall();
     //  }

     //  function makeApiCall() {
     //   gapi.client.load('calendar', 'v3', function() {
     //     var request = gapi.client.calendar.events.list({
     //       'calendarId': 'primary'
     //     });
              
     //     request.execute(function(resp) {
     //       for (var i = 0; i < resp.items.length; i++) {
     //         var li = document.createElement('li');
     //         li.appendChild(document.createTextNode(resp.items[i].summary));
     //         document.getElementById('events').appendChild(li);
     //       }
     //     });
     //   });
     // }

     //  function makeInsertApiCall() {
     //   gapi.client.load('calendar', 'v3', function() {
     //     var request = gapi.client.calendar.events.insert({
     //       "calendarId": "primary",
     //       resource:{
     //           "summary": "Appointment",
     //           "location": "Somewhere",
     //           "start": {
     //             "dateTime": "2014-12-16T10:00:00.000-07:00"
     //           },
     //           "end": {
     //             "dateTime": "2014-12-16T10:25:00.000-07:00"
     //           }
     //         }
     //     });
              
     //     request.execute(function(resp) {
     //       for (var i = 0; i < resp.items.length; i++) {
     //         console.dir(resp);
     //       }
     //     });
     //   });
     // }
    


});