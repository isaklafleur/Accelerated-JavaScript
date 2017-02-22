// ======================
// AJAX / XMLHttpRequest
// ======================
/*
// GET DATA
var http = new XMLHttpRequest();
var url = 'http://jsonplaceholder.typicode.com/posts';
var method = 'GET';

http.open(method, url);
http.onreadystatechange = function() {
    if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
        console.log(JSON.parse(http.responseText)[0]);
    } else {
        console.log('Error!');
    }
};
http.send();
*/

// SEND DATA
var http = new XMLHttpRequest();
var url = 'http://jsonplaceholder.typicode.com/posts';
var method = 'POST';

var data = 'title=Post%20Title&body=Body';

http.open(method, url);
http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
http.onreadystatechange = function() {
    if (http.readyState === XMLHttpRequest.DONE && http.status === 201) {
        console.log(http.responseText);
    } else {
        console.log('Error!');
    }
};
http.send(data);