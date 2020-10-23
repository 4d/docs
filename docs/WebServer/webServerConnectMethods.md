---
id: webServerConnectMethods
title: Connection Methods
---

## On Web Connection

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



### Method Calls  

The `On Web Connection` database method can be used as the entry point for the 4D Web server, either using the special `4DCGI URL`, or using customized command URLs.

>**Warning**
Calling a 4D command that displays an interface element (`DIALOG`, `ALERT`, etc.) ends the method processing.

The `On Web Connection` database method is therefore called in the following cases:

*	When 4D receives the */4DCGI* URL. The database method is called with the */4DCGI/\<action>* URL in $1.

*	When a web page is called with a URL of type *\<path>/\<file>* is not found. The database method is called with the URL.

*	When a web page is called with a URL of type <file>/ and no home page has been defined by default. The database method is called with the URL.






## On Web Authentication 

The `On Web Authentication` database method is in charge of managing web server engine access. It is called by 4D or 4D Server when a web browser request requires the execution of a 4D method on the server (method called using a `4DACTION URL`, a `4DSCRIPT` tag, etc.).

### Parameters

This method receives six text parameters: $1, $2, $3, $4, $5, and $6, and returns one Boolean parameter, $0. The description of these parameters is as follows:

|Parameters|Type|Description|
|---|---|---|
|$1|Text|URL |
|$2|Text|HTTP headers + HTTP body (up to 32 kb limit) |
|$3|Text|IP address of the web client (browser) |
|$4|Text|IP address of the server |
|$5|Text|User name |
|$6|Text|Password |
|$0|Boolean|True = request accepted, False = request rejected|

You must declare these parameters as follows:

```code4d
//On Web Authentication database method
 
 C_TEXT($1;$2;$3;$4;$5;$6)
 C_BOOLEAN($0)
 
//Code for the method
```

>All the `On Web Authentication` database method’s parameters are not necessarily filled in. The information received by the database method depends on the options that you have previously selected in the Database Settings dialog box (please refer to the section [Connection Security](webServerConnect.md#connection-security)).


#### URL

The first parameter ($1) is the URL entered by the user in the location area of their web browser, from which the host address has been removed.

Let’s take the example of an Intranet connection. Suppose that the IP address of your 4D Web Server machine is 123.4.567.89. The following table shows the values of $1 depending on the URL entered in the Web browser:

|URL entered in web browser|Value of parameter $1|
|---|---|
|123.4.567.89|/ |
|http://<i></i>123.4.567.89|/ |
|123.4.567.89/Customers|/Customers |
|http://<i></i>123.4.567.89/Customers/Add|/Customers/Add |
|123.4.567.89/Do_This/If_OK/Do_That|/Do_This/If_OK/Do_That |

#### Header and Body of the HTTP request

The second parameter ($2) is the header and the body of the HTTP request sent by the web browser. Note that this information is passed to your `On Web Authentication` database method as it is. Its contents will vary depending on the nature of the web browser which is attempting the connection.

If your application deals with this information, it is up to you to parse the header and the body.

>For performance reasons, the size of data passing through the $2 parameter must not exceed 32 KB. Beyond this size, they are truncated by the 4D HTTP server.<p>
For more information about this parameter, please refer to the description of the [On Web Connection](#on-web-connection) database method.


#### Web client IP address

The $3 parameter receives the IP address of the browser’s machine. This information can allow you to distinguish between intranet and internet connections.

>4D returns IPv4 addresses in a hybrid IPv6/IPv4 format written with a 96-bit prefix, for example ::ffff:192.168.2.34 for the IPv4 address 192.168.2.34. For more information, refer to the [IPv6 Support](webServerConnect.md#ipv6-support) section.

#### Server IP address

The $4 parameter receives the IP address used to call the web server. 4D since version 6.5 allows for multi-homing, which allows you to exploit machines with more than one IP address. For more information, please refer to [Configuration Settings](webServerConfig.md#defining-the-ip-address-for-the-http-requests).


#### User Name and Password

The $5 and $6 parameters receive the user name and password entered by the user in the standard identification dialog box displayed by the browser. This dialog box appears for each connection, if a [password management](webServerConfig.md#passwords-area) option has been selected in the Database Settings dialog box (see [Server Security](webServerSecurity.md#password-management)).

>If the user name sent by the browser exists in 4D, the $6 parameter (the user’s password) is not returned for security reasons.

#### $0 parameter

The `On Web Authentication` database method returns a boolean in $0:

*	If $0 is True, the connection is accepted.

*	If $0 is False, the connection is refused.

The `On Web Connection` database method is only executed if the connection has been accepted by `On Web Authentication`.

>**WARNING**<br>If no value is set to $0 or if $0 is not defined in the `On Web Authentication` database method, the connection is considered as accepted and the `On Web Connection` database method is executed.

>*	Do not call any interface elements in the `On Web Authentication` database method (`ALERT`, `DIALOG`, etc.) because otherwise its execution will be interrupted and the connection refused. The same thing will happen if an error occurs during its processing.<p>
>*	It is possible to prevent execution by `4DACTION` or `4DSCRIPT` for each project method via the “Available through 4D HTML tags and URLs (`4DACTION`, etc.)” option in the Method properties dialog box. For more information about this point, please refer to the [Server Security](webServerSecurity.md#available-through-4d-tags-and-urls) section.

### Method calls  

The `On Web Authentication` database method is automatically called, regardless of the mode, when a request or processing requires the execution of a 4D method. It is also called when the web server receives an invalid static URL (for example, if the static page requested does not exist).

The `On Web Authentication` database method is therefore called in the following cases:

*	when 4D receives a URL beginning with *4DACTION/*

*	when 4D receives a URL beginning with *4DCGI/*

*	when 4D receives a URL beginning with *4DSYNC/*

*	when 4D receives a URL requesting a static page that does not exist

*	when 4D receives a root access URL and no home page has been set in the Database Settings or by means of the `WEB SET HOME PAGE` command

*	when 4D processes a `4DSCRIPT` tag in a semi-dynamic page

*	when 4D processes a `4DLOOP` tag based on a method in a semi-dynamic page.

>**Compatibility note**: The database method is also called when 4D receives a URL beginning with *4DMETHOD/*. This URL is obsolete and is only kept for compatibility's sake.

Note that the `On Web Authentication` database method is NOT called when the server receives a URL requesting a valid static page.

### Examples

#### Example 1

Example of the `On Web Authentication` database method in [BASIC mode](webServerSecurity.md#basic-mode):

```code4d
//On Web Authentication database method
 C_TEXT($5;$6;$3;$4)
 C_TEXT($user;$password;$BrowserIP;$ServerIP)
 C_BOOLEAN($4Duser)
 ARRAY TEXT($users;0)
 ARRAY LONGINT($nums;0)
 C_LONGINT($upos)
 C_BOOLEAN($0)
 
 $0:=False
 
 $user:=$5
 $password:=$6
 $BrowserIP:=$3
 $ServerIP:=$4
 
//For security reasons, refuse names that contain @
 If(WithWildcard($user)|WithWildcard($password))
    $0:=False
  //The WithWildcard method is described below
 Else
 //Check to see if it’s a 4D user
    GET USER LIST($users;$nums)
    $upos:=Find in array($users;$user)
    If($upos >0)
       $4Duser:=Not(Is user deleted($nums{$upos}))
    Else
       $4Duser:=False
    End if
 
    If(Not($4Duser))
  //It is not a user defined 4D, look in the table of Web users
       QUERY([WebUsers];[WebUsers]User=$user;*)
       QUERY([WebUsers]; & [WebUsers]Password=$password)
       $0:=(Records in selection([WebUsers])=1)
    Else
       $0:=True
    End if
 End if
  `Is this an intranet connection?
 If(Substring($BrowserIP;1;7)#"192.100.")
    $0:=False
 End if
```

#### Example 2

Example of the `On Web Authentication` database method in [DIGEST mode](webServerSecurity.md#digest-mode):

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




## On Web Close Process 

The `On Web Close Process` database method is called by the 4D Web Server each time a web session is about to be closed. A session can be closed in the following cases:

*	when the maximum number of simultaneous sessions is reached (100 by default, modifiable using the `WEB SET OPTION` command), and 4D needs to create new ones (4D automatically kills the process of the oldest inactive session),

*	when the maximum period of inactivity for the session process is reached (480 minutes by default, modifiable using the `WEB SET OPTION` command),

*	when the `WEB CLOSE SESSION` command is called.

When this database method is called, the context of the session (variables and selections generated by the user) is still valid. This means that you can save data related to the session in order to be able to use them again subsequently, more specifically using the `On Web Connection` database method.

>In the context of a 4D Mobile session (which can generate several processes), the `On Web Close Process` database method is called for each web process that is closed, allowing you to save all types of data (variables, selection, etc.) generated by the 4D Mobile session process.

An example of the `On Web Close Process` database method is provided in the [Session Management](webServerSessions.md#database-method-example) section.