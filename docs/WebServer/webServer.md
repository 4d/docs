---
id: webServer
title: Overview
---

4D in local mode, 4D in remote mode and 4D Server include a web server engine that enables you to design and publish powerful web applications that can make the most of your 4D databases. 

## Easy Monitoring

You can start or stop publication of the web application at any time. To do so, you just need to select a menu command or execute a single line of code.

Monitoring the 4D web server is easy and can be done using the 4D Server administration window or through [special URLs](webServerMgmt.md#website-management-urls). 

## Ready-to-use

The 4D web server automatically creates a default root folder and a default home page for an instantaneous availability.

## Security

Several automatic configuration options allow you to grant specific access authorizations to web browsers or to use the password system integrated into 4D. You can define a "[Generic Web User](webServerSecurity.md#generic-web-user)" to simplify access management within the database.

The `On Web Authentication` database method allows you to evaluate any request before it is processed by the web server. Moreover, the ability to define a [default HTML root](webServerSecurity.html#default-html-root) folder allows you to restrict access to files on disk.

You have to designate individually each project method and each ORDA class function (REST) that can be executed via the web.

TLS protocol are enabled by default for HTTPS connections. 

## Dedicated Database Methods

`On Web Authentication`, `On Web Connection`, as well as `On REST Authentication` database methods are the entry points of requests in the web server; they can be used to evaluate and route any type of request.


## User Sessions

The 4D web server includes complete automatic features for easily managing [web sessions](webServerSessions.md) (user sessions) based on cookies.


## Gateway to REST Requests

The 4D web server allows accessing data stored in your 4D applications through REST requests. REST requests provide direct access to any database operation such as adding, reading, editing, ordering, or searching data. 

REST requests are detailed in the [REST server](REST/gettingStarted.md) section. 

## Extended settings

The 4D web server configuration is defined through a comprehensive set of application-level settings that can also be customized for the session using the `WEB SET OPTION` command or the `webServer` object properties. 

## Templates and URLs

The 4D web server supports access to data stored in your 4D applications through template pages and specific URLs. 

- Template pages contain [special tags] that initiate web server processing at the time when they are sent to browsers.

- [specific URLs] enable 4D to be called in order to execute any action; these URLs can also be used as form actions to trigger processing when the user posts HTML forms.



## Custom HTTP Error Pages  

The 4D Web Server allows you to customize HTTP error pages sent to clients, based on the status code of the server response. Error pages refer to:

*	status codes starting with 4 (client errors), for example 404

*	status codes starting with 5 (server errors), for example 501. 

For a full description of HTTP error status codes, you can refer to the [List of HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) (Wikipedia).

#### How does it work?  

To replace default 4D Web Server error pages with your own pages you just need to:

*	put custom HTML pages at the first level of the application's web folder,

*	name the custom pages "{statusCode}.html" (for example, "404.html"). 

You can define one error page per status code and/or a generic error page for a range of errors, named "{number}xx.html". For example, you can create "4xx.html" for generic client errors. The 4D Web Server will first look for a {statusCode}.html page then, if it does not exist, a generic page.

For example, when an HTTP response returns a status code 404:

1.	4D Web Server tries to send a "404.html" page located in the application's web folder.

2.	If it is not found, 4D Web Server tries to send a "4xx.html" page located in the application's web folder.

3.	If not found, 4D Web Server then uses its default error page.

#### Example  

If you define the following custom pages in your web folder:

![](assets/en/WebServer/errorPage.png)

*	the "403.html" or "404.html" pages will be served when 403 or 404 HTTP responses are returned respectively,

*	the "4xx.html" page will be served for any other 4xx error status (400, 401, etc.),

*	the "5xx.html" page will be served for any 5xx error status.



