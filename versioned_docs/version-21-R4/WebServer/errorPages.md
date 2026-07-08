---
id: errorPages
title: Custom HTTP Error Pages
---

The 4D Web Server allows you to customize HTTP error pages sent to clients, based on the status code of the server response. Error pages refer to:

*	status codes starting with 4 (client errors), for example 404

*	status codes starting with 5 (server errors), for example 501. 

For a full description of HTTP error status codes, you can refer to the [List of HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) (Wikipedia).


## Replacing default pages  

To replace default 4D Web Server error pages with your own pages you just need to:

*	put custom HTML pages at the first level of the application's web folder,

*	name the custom pages "\{statusCode\}.html" (for example, "404.html"). 

You can define one error page per status code and/or a generic error page for a range of errors, named "{number}xx.html". For example, you can create "4xx.html" for generic client errors. The 4D Web Server will first look for a \{statusCode\}.html page then, if it does not exist, a generic page.

For example, when an HTTP response returns a status code 404:

1.	4D Web Server tries to send a "404.html" page located in the application's web folder.

2.	If it is not found, 4D Web Server tries to send a "4xx.html" page located in the application's web folder.

3.	If not found, 4D Web Server then uses its default error page.

## Example  

If you define the following custom pages in your web folder:

![](../assets/en/WebServer/errorPage.png)

*	the "403.html" or "404.html" pages will be served when 403 or 404 HTTP responses are returned respectively,

*	the "4xx.html" page will be served for any other 4xx error status (400, 401, etc.),

*	the "5xx.html" page will be served for any 5xx error status.

