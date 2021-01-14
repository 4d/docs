---
id: httpRequests
title: URLs for code execution
---

The 4D Web Server offers special HTTP requests that allow you to implement various actions in your database. Such HTTP requests can be used as URLs or HTML form actions. 

These requests are:

- `/4DACTION`, to call an project method of your database,
- `/4DCGI`, to call the `On Web Connection` database method from any HTML object.

> In addition, the 4D Web Server accepts `4DSTATS`, `/4DHTMLSTATS`, `/4DCACHECLEAR` and `/4DWEBTEST` [administration URLs](webServerAdmin.md#administration-urls).



##/4DACTION

**/4DACTION/***MethodName*<br>
**/4DACTION/***MethodName/Param*

|Parameters|Type||Description|
|---|---|:---:|---|
|MethodName|Text|->|Name of the 4D project method to be executed |
|Param|Text|->|Text parameter to pass to the project method|

**Usage:** URL or Form action.

This URL allows you to call the *MethodName* 4D project method with an optional *Param* text parameter. The method will receive this parameter in *$1* .

- The 4D project method must have been allowed for web requests: the “Available through 4D tags and URLs (4DACTION...)” attribute value must have been checked in the properties of the method. If the attribute is not checked, the web request is rejected.
- When 4D receives a `/4DACTION/MethodName/Param` request, the `On Web Authentication` database method (if it exists) is called. 

`4DACTION/` can be associated with a URL in a static Web page:

```html
<A HREF="/4DACTION/MyMethod/hello">Do Something</A>
```

The `MyMethod` project method should generally return a "reply" (sending of an HTML page using `WEB SEND FILE` or `WEB SEND TEXT`, etc.). Be sure to make the processing as short as possible in order not to block the browser.

> A method called by `/4DACTION` must not call interface elements (`DIALOG`, `ALERT`, etc.).

#### Example

This example describes the association of the `/4DACTION` URL with an HTML picture object in order to dynamically display a picture in the page. You insert the following instructions in a static HTML page:

```html
<IMG SRC="/4DACTION/getPhoto/smith">
```

The `getPhoto` method is as follows:

```4d
C_TEXT($1) // This parameter must always be declared
var $path : Text
var $PictVar : Picture
var $BlobVar : Blob

 //find the picture in the Images folder within the Resources folder 
$path:=Get 4D folder(Current resources folder)+"Images"+Folder separator+$1+".psd"

READ PICTURE FILE($path;$PictVar) //put the picture in the picture variable
PICTURE TO BLOB($PictVar;$BLOB;".png") //convert the picture to ".png" format
WEB SEND BLOB($BLOB;"image/png")
```

### 4DACTION to post forms 

The 4D Web server also allows you to use “posted” forms, which are static HTML pages that send data to the Web server, and to easily retrieve all the values. The POST type must be associated to them and the form’s action must imperatively start with /4DACTION/MethodName.

A form can be submitted through two methods (both can be used with 4D):
- POST, usually used to send data to the Web server,
- GET, usually used to request data from the Web server.

> When the Web server receives a posted form, it calls the `On Web Authentication` database method (if it exists). 

In the called method, you must call the `WEB GET VARIABLES` command in order to retrieve the names and values of all the fields included in an HTML page submitted to the server (see XXX).

Example to define the action of a form:

```html
<FORM ACTION="/4DACTION/MethodName" METHOD=POST>
```

#### Example

In a Web application, we would like for the browsers to be able to search among the records by using a static HTML page. This page is called “search.htm”. The application contains other static pages that allow you to, for example, display the search result (“results.htm”). The POST type has been associated to the page, as well as the ``/4DACTION/SEARCH` action.

Here is the HTML code that corresponds to this page:

```html
<form action="/4daction/processForm" method=POST>
<input type=text name=vName value=""><BR>
<input type=checkbox name=vExact value="Word">Whole word<BR>
<input type=submit name=OK value="Search">
</FORM>
```

During data entry, type “ABCD” in the data entry area, check the "Whole word" option and validate it by clicking the **Search** button. In the request sent to the Web server:

```
vName="ABCD"
vExact="Word"
OK="Search"
```

4D calls the `On Web Authentication` database method (if it exists), then the `processForm` project method is called, which is as follows:

```4d
 C_TEXT($1) //mandatory for compiled mode
 C_LONGINT($vName)
 C_TEXT(vName;vLIST)
 ARRAY TEXT($arrNames;0)
 ARRAY TEXT($arrVals;0)
 WEB GET VARIABLES($arrNames;$arrVals) //we retrieve all the variables of the form
 $vName:=Find in array($arrNames;"vName")
 vName:=$arrVals{$vName}
 If(Find in array($arrNames;"vExact")=-1) //If the option has not been checked
    vName:=vName+"@"
 End if
 QUERY([Jockeys];[Jockeys]Name=vName)
 FIRST RECORD([Jockeys])
 While(Not(End selection([Jockeys])))
    vLIST:=vLIST+[Jockeys]Name+" "+[Jockeys]Tel+"<BR>"
    NEXT RECORD([Jockeys])
 End while
 WEB SEND FILE("results.htm") //Send the list to the results.htm form
  //which contains a reference to the variable vLIST,
  //for example <!--4DHTML vLIST-->
  //...
End if
```


##/4DCGI

**/4DCGI/***action*

|Parameters|Type||Description|
|---|---|:---:|---|
|action|Text|->|Any custom string to be received in the $1 parameter of `On Web Connection`|

This URL allows you to call the `On Web Connection` database method with the action parameter. The complete URL, including the *action* string, is passed to the *$1* parameter of the database method.

When the 4D Web server receives the `/4DCGI` URL, the `On Web Authentication` database method (if it exists) is called first.
 
The `/4DCGI` URL does not correspond to any file. Its role is only to call 4D using the `On Web Connection` database method. The *action* parameter can contain any type of information. This URL allows you to perform any type of action. You just need to test the value of *$1* in the `On Web Connection` database method or in one of its submethods and have 4D perform the appropriate action. For example, you can build completely custom static HTML pages to add, search, or sort records or to generate images on-the-fly. 

When issuing an action, a “response” must be returned, by using commands that send data (WEB SEND FILE, WEB SEND BLOB, etc.).

**Warning:** Please be sure to execute the shortest possible actions so as not to hold up the browser.

#### Example

You can use this command to execute custom requests in 4D by using static pages. Imagine that you have a text input and a **OK** button in a static HTML page. The POST action "/4dcgi/rech" has been associated to the text area and to the **OK** button.

In the `On Web Connection` database method, you insert the following code:

```4d
 Case of
    :($1="/4dcgi/rech") //When 4D receives this URL
  //If the OK button has been used and the ‘name’ field contains a Value
       If((bOK="OK") & (name#""))
  //Change the URL to execute the request code,
  //placed farther down in the same method
          WEB SEND HTTP REDIRECT("/4dcgi/rech?"+name)
       Else
  //Else return to the beginning page
          WEB SEND HTTP REDIRECT("/page1.htm")
       End if
       ...
    :($1="/4dcgi/rech?@") //If the URL has been redirected
       ... //Put the request code here
 End case
```


## On Web Connection Database Method

The `On Web Connection` database method can be used as the entry point for the 4D Web server, either using the special `4DCGI URL`, or using customized command URLs.


### Database method calls  


>**Warning**
Calling a 4D command that displays an interface element (`DIALOG`, `ALERT`, etc.) ends the method processing.

The `On Web Connection` database method is therefore called in the following cases:

*	When 4D receives the */4DCGI* URL. The database method is called with the */4DCGI/\<action>* URL in $1.

*	When a web page is called with a URL of type *\<path>/\<file>* is not found. The database method is called with the URL.

*	When a web page is called with a URL of type <file>/ and no home page has been defined by default. The database method is called with the URL.




The `On Web Connection` database method can be called in the following cases:

*	the web server receives a request beginning with the `4DCGI` URL.

*	the web server receives an invalid request.

For more information, refer to the [Method Calls](#method-calls) paragraph.

The request should have previously been accepted by the `On Web Authentication` database method (if it exists) and the web server must be launched.

### Parameters

The `On Web Connection` database method receives six text parameters passed by 4D ($1, $2, $3, $4, $5, and $6). These parameters are:

|Parameters|Type|Description|
|---|---|---|
|$1|Text|URL |
|$2|Text|HTTP headers + HTTP body (up to 32 kb limit) |
|$3|Text|IP address of the web client (browser) |
|$4|Text|IP address of the server |
|$5|Text|User name |
|$6|Text|Password |


You must declare these parameters as shown below:

```code4d
//On Web Connection database method
 
 C_TEXT($1;$2;$3;$4;$5;$6)
 
//Code for the method
```

#### URL extra data

The first parameter ($1) is the URL entered by users in the address area of their web browser, without the host address.

Let’s use an intranet connection as an example. Suppose that the IP address of your 4D Web Server machine is 123.4.567.89. The following table shows the values of $1 depending on the URL entered in the web browser:

|URL entered in web browser|Value of parameter $1|
|---|---|
|123.4.567.89|/ |
|http://<i></i>123.4.567.89|/ |
|123.4.567.89/Customers|/Customers |
|http://<i></i>123.4.567.89/Customers/Add|/Customers/Add |
|123.4.567.89/Do_This/If_OK/Do_That|/Do_This/If_OK/Do_That |
	
Note that you are free to use this parameter at your convenience. 4D simply ignores the value passed beyond the host part of the URL.  For example, you can establish a convention where the value "*/Customers/Add*" means “go directly to add a new record in the `[Customers]` table.” By supplying the web users of your database with a list of possible values and/or default bookmarks, you can provide shortcuts to different parts of your application. This way, web users can quickly access resources of your website without going through the entire navigation path each time they make a new connection to your database.

>In order to prevent a user from directly accessing a database with a bookmark created during a previous session, 4D intercepts any URL that corresponds to one of the standard 4D URLs.

#### Header and body of the HTTP request

The second parameter ($2) is the header and the body of the HTTP request sent by the web browser. Note that this information is passed to your `On Web Connection` database method "as is". Its contents will vary depending on the nature of the web browser attempting the connection.
 
With Safari running on macOS, you may receive a header similar to this:

```code4d
GET /favicon.ico HTTP/1.1
Referer: http://123.45.67.89/4dcgi/test
User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X; fr-fr) AppleWebKit/523.10.3 (KHTML, like Gecko) Version/3.0.4 Safari/523.10
Cache-Control: max-age=0
Accept: */*
Accept-Language: fr-fr
Accept-Encoding: gzip, deflate
Connection: keep-alive
Host: 123.45.67.89
```

With Microsoft Internet Explorer 8 running on Windows, you may receive a header similar to this:

```code4d
GET / HTTP/1.1
Accept: image/jpeg, application/x-ms-application, image/gif, application/xaml+xml, image/pjpeg, application/x-ms-xbap, application/vnd.ms-powerpoint, application/vnd.ms-excel, application/msword, */*
Accept-Language: fr-FR
User-Agent: Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C)
Accept-Encoding: gzip, deflate
Host: 123.45.67.89
Connection: Keep-Alive
```

If your application uses this information, it is up to you to parse the header and the body.
 
>For performance reasons, the size of this data cannot be more than 32 KB. Beyond this, they are truncated by the 4D HTTP server.

#### IP address of the web client

The $3 parameter receives the IP address of the browser’s machine. This information can allow you to distinguish between intranet and internet connections.
 
>4D returns IPv4 addresses in a hybrid IPv6/IPv4 format written with a 96-bit prefix, for example ::ffff:192.168.2.34 for the IPv4 address 192.168.2.34. For more information, refer to the [IPv6 Support](webServerConnect.md#ipv6-support) section.

#### IP address of the server

The $4 parameter receives the IP address requested by the 4D Web Server. 4D allows for multi-homing, which allows you to use machines with more than one IP address. For more information, please refer to  [Configuration Settings](webServerConfig.md#defining-the-ip-address-for-the-http-requests).

#### User Name and Password

The $5 and $6 parameters receive the user name and password entered by the user in the standard identification dialog box displayed by the browser, if applicable. This dialog box appears for each connection, if the [Use Passwords](webServerConfig.md#passwords-area) option has been selected in the Database Settings dialog box (see [Server Security](webServerSecurity.md#password-management)).
 
>If the user name sent by the browser exists in 4D, the $6 parameter (the user’s password) is not returned for security reasons.












The `On Web Authentication` database method is in charge of managing web server engine access. It is called by 4D or 4D Server when a dynamic HTTP request is received.

### Database method calls 

The `On Web Authentication` database method is automatically called when a request or processing requires the execution of some 4D code (except for REST calls). It is also called when the web server receives an invalid static URL (for example, if the static page requested does not exist).

The `On Web Authentication` database method is therefore called:

- when the web server receives a URL requesting a resource that does not exist
- when the web server receives a URL beginning with `4DACTION/`, `4DCGI/`...
- when the web server receives a root access URL and no home page has been set in the Settings or by means of the `WEB SET HOME PAGE` command
- when the web server processes a tag executing code (e.g `4DSCRIPT`) in a semi-dynamic page.

The `On Web Authentication` database method is NOT called:

- when the web server receives a URL requesting a valid static page.
- when the web server reveives a URL beginning with `rest/` and the REST server is launched (in this case, the authentication is handled through the [`On REST Authentication` database method](REST/configuration.md#using-the-on-rest-authentication-database-method) or [Structure settings](REST/configuration.md#using-the-structure-settings)).


### Syntax

**On Web Authentication**( *$1* : Text ; *$2* : Text ; *$3* : Text ; *$4* : Text ; *$5* : Text ; *$6* : Text ; ) -> $0 : Boolean

|Parameters|Type||Description|
|---|---|:---:|---|
|$1|Text|<-|URL |
|$2|Text|<-|HTTP headers + HTTP body (up to 32 kb limit) |
|$3|Text|<-|IP address of the web client (browser) |
|$4|Text|<-|IP address of the server |
|$5|Text|<-|User name |
|$6|Text|<-|Password |
|$0|Boolean|->|True = request accepted, False = request rejected|

You must declare these parameters as follows:

```code4d
//On Web Authentication database method
 
 C_TEXT($1;$2;$3;$4;$5;$6)
 C_BOOLEAN($0)
 
//Code for the method
```

Alternatively, you can use the [named parameters](Concepts/parameters.md#named-parameters) syntax:

```code4d
// On Web Authentication database method
#DECLARE ($url : Text; $header : Text; \
  $BrowserIP : Text; $ServerIP : Text; \
  $user : Text; $password : Text) \
  -> $RequestAccepted : Boolean

```

>All the `On Web Authentication` database method's parameters are not necessarily filled in. The information received by the database method depends on the selected [authentication mode](#authentication-mode)).


#### $1 - URL

The first parameter (`$1`) is the URL entered by the user in the location area of their web browser, from which the host address has been removed.

Let’s take the example of an Intranet connection. Suppose that the IP address of your 4D Web Server machine is 123.45.67.89. The following table shows the values of $1 depending on the URL entered in the Web browser:

|URL entered in web browser|Value of parameter $1|
|---|---|
|123.45.67.89|/ |
|http://<i></i>123.45.67.89|/ |
|123.45.67.89/Customers|/Customers |
|http://<i></i>123.45.67.89/Customers/Add|/Customers/Add |
|123.45.67.89/Do_This/If_OK/Do_That|/Do_This/If_OK/Do_That |

#### $2 - Header and Body of the HTTP request

The second parameter (`$2`) is the header and the body of the HTTP request sent by the web browser. Note that this information is passed to your `On Web Authentication` database method as it is. Its contents will vary depending on the nature of the web browser which is attempting the connection.

If your application deals with this information, it is up to you to parse the header and the body.

>For performance reasons, the size of data passing through the $2 parameter must not exceed 32 KB. Beyond this size, they are truncated by the 4D HTTP server.

#### $3 - Web client IP address

The `$3` parameter receives the IP address of the browser’s machine. This information can allow you to distinguish between intranet and internet connections.

>4D returns IPv4 addresses in a hybrid IPv6/IPv4 format written with a 96-bit prefix, for example ::ffff:192.168.2.34 for the IPv4 address 192.168.2.34.

#### $4 - Server IP address

The `$4` parameter receives the IP address used to call the web server. 4D allows for multi-homing, which allows you to exploit machines with more than one IP address. 


#### $5 and $6 - User Name and Password

The `$5` and `$6` parameters receive the user name and password entered by the user in the standard identification dialog box displayed by the browser. This dialog box appears for each connection, if [basic](#basic-protocol) or [digest](#digest-protocol) authentication is selected.

>If the user name sent by the browser exists in 4D, the $6 parameter (the user’s password) is not returned for security reasons.

#### $0 parameter

The `On Web Authentication` database method returns a boolean in $0:

*	If $0 is True, the connection is accepted.

*	If $0 is False, the connection is refused.

The `On Web Connection` database method is only executed if the connection has been accepted by `On Web Authentication`.

>**WARNING**<br>If no value is set to $0 or if $0 is not defined in the `On Web Authentication` database method, the connection is considered as accepted and the `On Web Connection` database method is executed.

>*	Do not call any interface elements in the `On Web Authentication` database method (`ALERT`, `DIALOG`, etc.) because otherwise its execution will be interrupted and the connection refused. The same thing will happen if an error occurs during its processing.


### Example

Example of the `On Web Authentication` database method in [DIGEST mode](#digest-protocol):

```code4d
 // On Web Authentication Database Method
 C_TEXT($1;$2;$5;$6;$3;$4)
 C_TEXT($user)
 C_BOOLEAN($0)
 $0:=False
 $user:=$5
  // For security reasons, refuse names that contain @
 If(WithWildcard($user))
    $0:=False
  // The <span class="rte4d_met">WithWildcard</span> method is described below
 Else
    QUERY([WebUsers];[WebUsers]User=$user)
    If(OK=1)
       $0:=WEB Validate digest($user;[WebUsers]password)
    Else
       $0:=False // User does not exist
    End if
 End if
```

The *WithWildcard* method is as follows:

```code4d
// WithWildcard Method
  // WithWildcard ( String ) -> Boolean
  // WithWildcard ( Name ) -> Contains a Wilcard character
 
 C_LONGINT($i)
 C_BOOLEAN($0)
 C_TEXT($1)
 
 $0:=False
 For($i;1;Length($1))
    If(Character code(Substring($1;$i;1))=Character code("@"))
       $0:=True
    End if
 End for
```

