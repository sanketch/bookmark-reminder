chrome.runtime.onMessage.addListener(function(request, sender) {
		console.log("ok1");
        chrome.tabs.update(sender.tab.id, {url: request.redirect});
    });