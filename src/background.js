var requestFilter = {
	urls: ["*://*/owa/*"]
};

chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {
	var headers = details.requestHeaders;
	for(var i = 0, l = headers.length; i < l; ++i) {
		if( headers[i].name == 'User-Agent' ) {
			break;
		}
	}
	if(i < headers.length) {
		headers[i].value = "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2049.0 Safari/537.36";
	}
	return {requestHeaders: headers};
}, requestFilter, ['requestHeaders','blocking']);
