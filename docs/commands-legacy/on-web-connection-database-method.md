---
id: on-web-connection-database-method
title: On Web Connection database method
slug: /commands/on-web-connection-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Web Connection database method.Syntax-->$1, $2, $3, $4, $5, $6 -> On Web Connection database method<!-- END REF-->
<!--REF #_command_.On Web Connection database method.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| $1 | Text | &#8592; | URL |
| $2 | Text | &#8592; | HTTP header + HTTP body |
| $3 | Text | &#8592; | IP address of browser |
| $4 | Text | &#8592; | IP address of the server |
| $5 | Text | &#8592; | User name |
| $6 | Text | &#8592; | Password |

<!-- END REF-->

#### 

<!--REF #_command_.On Web Connection database method.Summary-->The **On Web Connection database method** can be called in the following cases:

* the web server receives a request beginning with the *4DCGI* URL.<!-- END REF-->
* the web server receives an invalid request.

For more information, refer to the paragraph “” below.

 The request should have previously been accepted by the [On Web Authentication database method](on-web-authentication-database-method.md) (if it exists) and the web server must be launched.

The **On Web Connection database method** receives six text parameters passed by 4D ($1, $2, $3, $4, $5, and $6). These parameters are described in the following table:   

| **Parameters** | **Type** | **Description**                             |
| -------------- | -------- | ------------------------------------------- |
| $1             | Text     | URL                                         |
| $2             | Text     | HTTP header + HTTP body (up to 32 kb limit) |
| $3             | Text     | IP address of the Web client (browser)      |
| $4             | Text     | IP address of the server                    |
| $5             | Text     | User name                                   |
| $6             | Text     | Password                                    |

You must declare these parameters as shown below:

```4d
  // On Web Connection Database Method
 
 var $1;$2;$3;$4;$5;$6 : Text
 
  // Code for the method
```

* **URL extra data**  
The first parameter (*$1*) is the URL entered by users in the address area of their web browser, without the host address.  
Let’s use an intranet connection as an example. Suppose that the IP address of your 4D Web Server machine is *123.45.67.89*. The following table shows the values of *$1* depending on the URL entered in the web browser:  
    
| **URL entered in Web browser Location area** | **Value of parameter $1** |  
| -------------------------------------------- | ------------------------- |  
| 123.45.67.89                                 | /                         |  
| http://123.45.67.89                          | /                         |  
| 123.45.67.89/Customers                       | /Customers                |  
| http://123.45.67.89/Customers                | /Customers                |  
| http://123.45.67.89/Customers/Add            | /Customers/Add            |  
| 123.45.67.89/Do\_This/If\_OK/Do\_That        | /Do\_This/If\_OK/Do\_That |  
    
    
Note that you are free to use this parameter at your convenience. 4D simply ignores the value passed beyond the host part of the URL. For example, you can establish a convention where the value *"/Customers/Add"* means “go directly to add a new record in the *\[Customers\]* table.” By supplying the web users of your database with a list of possible values and/or default bookmarks, you can provide shortcuts to different parts of your application. This way, web users can quickly access resources of your website without going through the entire navigation path each time they make a new connection to your database.  
    
**ATTENTION:** In order to prevent a user from directly accessing a database with a bookmark created during a previous session, 4D intercepts any URL that corresponds to one of the standard 4D URLs.
* **Header and body of the HTTP request**  
The second parameter (*$2*) is the header and the body of the HTTP request sent by the web browser. Note that this information is passed to your On Web Connection database method "as is". Its contents will vary depending on the nature of the web browser attempting the connection.  
    
With Safari running on Mac OS, you may receive a header similar to this:  
    
```RAW  
GET /favicon.ico HTTP/1.1Referer: http://123.45.67.89/4dcgi/testUser-Agent:  Mozilla/5.0 (Macintosh; U; Intel Mac OS X; fr-fr) AppleWebKit/523.10.3  (KHTML, like Gecko) Version/3.0.4 Safari/523.10Cache-Control: max-age=0Accept: */*Accept-Language: fr-frAccept-Encoding: gzip, deflateConnection: keep-aliveHost: 123.45.67.89  
```  
    
With Microsoft Internet Explorer 8 running on Windows, you may receive a header similar to this:  
```RAW  
GET / HTTP/1.1Accept: image/jpeg, application/x-ms-application,  image/gif, application/xaml+xml, image/pjpeg, application/x-ms-xbap,  application/vnd.ms-powerpoint, application/vnd.ms-excel,  application/msword, */*Accept-Language: fr-FRUser-Agent:  Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; SLCC2;  .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center  PC 6.0; .NET4.0C)Accept-Encoding: gzip, deflateHost: 123.45.67.89Connection: Keep-Alive  
```  
    
 If your application uses this information, it is up to you to parse the header and the body.  
    
**Note:** For performance reasons, the size of this data cannot be more than 32 KB. Beyond this, they are truncated by the 4D HTTP server.
* **IP address of the web client**  
The *$3* parameter receives the IP address of the browser’s machine. This information can allow you to distinguish between intranet and internet connections.  
    
**Note:** 4D returns IPv4 addresses in a hybrid IPv6/IPv4 format written with a 96-bit prefix, for example ::ffff:192.168.2.34 for the IPv4 address 192.168.2.34\. For more information, refer to the *Support of IPv6* section.
* **IP address of the server**  
The *$4* parameter receives the IP address requested by the 4D Web Server. 4D allows for multi-homing, which allows you to use machines with more than one IP address. For more information, please refer to the section *Web Server Settings*.
* **User Name and Password**  
The *$5* and *$6* parameters receive the user name and password entered by the user in the standard identification dialog box displayed by the browser, if applicable. This dialog box appears for each connection, if the **Use Passwords** option has been selected in the Database Settings dialog box (see section *Connection Security*).  
    
**Note:** If the user name sent by the browser exists in 4D, the *$6* parameter (the user’s password) is not returned for security reasons.

#### On Web Connection Database Method Calls 

The **On Web Connection database method** can be used as the entry point for the 4D Web server, either using the special *4DCGI* URL, or using customized command URLs.

**Warning:** Calling a 4D command that displays an interface element ([DIALOG](dialog.md), [ALERT](alert.md), etc.) ends the method processing.

The **On Web Connection database method** is therefore called in the following cases:

* When 4D receives the */4DCGI* URL. The database method is called with the */4DCGI/<action>* URL in *$1*.
* When a Web page is called with a URL of type *<path>/<file>* is not found. The database method is called with the URL.
* When a Web page is called with a URL of type *<file>/* and no home page has been defined by default. The database method is called with the URL.
