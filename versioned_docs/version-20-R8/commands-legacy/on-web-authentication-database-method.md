---
id: on-web-authentication-database-method
title: On Web Authentication database method
slug: /commands/on-web-authentication-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Web Authentication database method.Syntax-->$1, $2, $3, $4, $5, $6 -> On Web Authentication database method -> $0<!-- END REF-->
<!--REF #_command_.On Web Authentication database method.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| $1 | Text | &#8592; | URL |
| $2 | Text | &#8592; | HTTP header + HTTP body |
| $3 | Text | &#8592; | IP address of browser |
| $4 | Text | &#8592; | IP address of the server |
| $5 | Text | &#8592; | User name |
| $6 | Text | &#8592; | Password |
| $0 | Boolean | &#8592; | True = request accepted, False = request refused |

<!-- END REF-->

#### Description 

<!--REF #_command_.On Web Authentication database method.Summary-->The **On Web Authentication database method** is in charge of managing Web server engine access.<!-- END REF--> It is called by 4D or 4D Server when a Web browser request requires the execution of a 4D method on the server (method called using a *4DACTION* URL, a *4DSCRIPT* tag, etc.). 

This method receives six Text parameters: $1, $2, $3, $4, $5, and $6, and returns one Boolean parameter, $0\. The description of these parameters is as follows:

| **Parameters** | **Type** | **Description**                                   |
| -------------- | -------- | ------------------------------------------------- |
| $1             | Text     | URL                                               |
| $2             | Text     | HTTP header + HTTP body (32 KB maximum)           |
| $3             | Text     | IP address of the Web client (browser)            |
| $4             | Text     | IP address of the server                          |
| $5             | Text     | User name                                         |
| $6             | Text     | Password                                          |
| $0             | Boolean  | True = request accepted, False = request rejected |

You must declare these parameters as follows:

```4d
  // On Web Authentication Database Method
 
 var $1;$2;$3;$4;$5;$6 : Text
 var $0 : Boolean
 
  // Code for the method
```

**Note:** All the On Web Authentication database method’s parameters are not necessarily filled in. The information received by the database method depends on the options that you have previously selected in the Database Settings dialog box (please refer to the section *Connection Security*).

* **URL**  
The first parameter (*$1*) is the URL entered by the user in the location area of his or her Web browser, from which the host address has been removed.  
Let’s take the example of an Intranet connection. Suppose that the IP address of your 4D Web Server machine is *123.45.67.89*. The following table shows the values of *$1* depending on the URL entered in the Web browser:
  
| **URL entered in Web browser Location area** | **Value of parameter $1** |  
| -------------------------------------------- | ------------------------- |  
| 123.45.67.89                                 | /                         |  
| http://123.45.67.89                          | /                         |  
| 123.45.67.89/Customers                       | /Customers                |  
| http://123.45.67.89/Customers                | /Customers                |  
| http://123.45.67.89/Customers/Add            | /Customers/Add            |  
| 123.45.67.89/Do\_This/If\_OK/Do\_That        | /Do\_This/If\_OK/Do\_That |
* **Header and Body of the HTTP request**  
The second parameter (*$2*) is the header and the body of the HTTP request sent by the Web browser. Note that this information is passed to your **On Web Authentication database method** as it is. Its contents will vary depending on the nature of the Web browser which is attempting the connection.  
If your application deals with this information, it is up to you to parse the header and the body.

**Notes:** 

* For performance reasons, the size of data passing through the $2 parameter must not exceed 32 KB. Beyond this size, they are truncated by the 4D HTTP server.
* For more information about this parameter, please refer to the description of the [On Web Connection database method](on-web-connection-database-method.md).
* **Web client IP address**  
The $3 parameter receives the IP address of the browser’s machine. This information can allow you to distinguish between Intranet and Internet connections.  
**Note:** 4D returns IPv4 addresses in a hybrid IPv6/IPv4 format written with a 96-bit prefix, for example ::ffff:192.168.2.34 for the IPv4 address 192.168.2.34\. For more information, refer to the *Support of IPv6* section.
* **Server IP address**  
The $4 parameter receives the IP address used to call the Web server. 4D since version 6.5 allows for multi-homing, which allows you to exploit machines with more than one IP address. For more information, please refer to the section *Web Server Settings*
* **User Name and Password**  
The $5 and $6 parameters receive the user name and password entered by the user in the standard identification dialog box displayed by the browser. This dialog box appears for each connection, if a password management option has been selected in the Database Settings dialog box (see section *Connection Security*).

**Note:** If the user name sent by the browser exists in 4D, the $6 parameter (the user’s password) is not returned for security reasons.

* **$0 parameter**  
    
The **On Web Authentication database method** returns a boolean in $0:  
   * If $0 is **True**, the connection is accepted.  
   * If $0 is **False**, the connection is refused.

The [On Web Connection database method](on-web-connection-database-method.md) is only executed if the connection has been accepted by **On Web Authentication**.

**WARNING:** If no value is set to *$0* or if *$0* is not defined in the On Web Authentication database method, the connection is considered as accepted and the [On Web Connection database method](on-web-connection-database-method.md) is executed.

**Notes :**

* Do not call any interface elements in the **On Web Authentication database method** ([ALERT](alert.md), [DIALOG](../commands/dialog.md), etc.) because otherwise its execution will be interrupted and the connection refused. The same thing will happen if an error occurs during its processing.
* It is possible to prevent execution by *4DACTION* or *4DSCRIPT* for each project method via the “Available through 4D HTML tags and URLs (4DACTION...)” option in the Method properties dialog box. For more information about this point, please refer to the *Connection Security* section.

#### On Web Authentication Database Method calls 

The On Web Authentication database method is automatically called, regardless of the mode, when a request or processing requires the execution of a 4D method. It is also called when the Web server receives an invalid static URL (for example, if the static page requested does not exist). 

The On Web Authentication database method is therefore called in the following cases:

* when 4D receives a URL beginning with *4DACTION/*
* when 4D receives a URL beginning with *4DCGI/*
* when 4D receives a URL beginning with *4DSYNC/*
* when 4D receives a URL requesting a static page that does not exist
* when 4D receives a root access URL and no home page has been set in the Database Settings or by means of the [WEB SET HOME PAGE](web-set-home-page.md) command
* when 4D processes a *4DSCRIPT* tag in a semi-dynamic page
* when 4D processes a *4DLOOP* tag based on a method in a semi-dynamic page.

**Compatibility note:** The database method is also called when 4D receives a URL beginning with *4DMETHOD/*. This URL is obsolete and is only kept for compatibility's sake.

Note that the On Web Authentication database method is NOT called when the server receives a URL requesting a valid static page. 

#### Example 1 

Example of the On Web Authentication database method in BASIC mode:

```4d
  //On Web Authentication Database Method
 var $5;$6;$3;$4 : Text
 var $user;$password;$BrowserIP;$ServerIP : Text
 var $4Duser : Boolean
 ARRAY TEXT($users;0)
 ARRAY LONGINT($nums;0)
 var $upos : Integer
 var $0 : Boolean
 
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
       QUERY([WebUsers]; & [WebUsers]Password=$password)
       $0:=(Records in selection([WebUsers])=1)
    Else
       $0:=True
    End if
 End if
  //Is this an intranet connection?
 If(Substring($BrowserIP;1;7)#"192.100.")
    $0:=False
 End if
```

#### Example 2 

Example of the On Web Authentication database method in DIGEST mode:

```4d
  //On Web Authentication Database Method
 var $1;$2;$5;$6;$3;$4 : Text
 var $user : Text
 var $0 : Boolean
 $0:=False
 $user:=$5
  //For security reasons, refuse names that contain @
 If(WithWildcard($user))
    $0:=False
  //The WithWildcard method is described below
 Else
    QUERY([WebUsers];[WebUsers]User=$user)
    If(OK=1)
       $0:=WEB Validate digest($user;[WebUsers]password)
    Else
       $0:=False //User does not exist
    End if
 End if
```

The WithWildcard method is as follows:

```4d
  //WithWildcard Method
  //WithWildcard ( String ) -> Boolean
  //WithWildcard ( Name ) -> Contains a Wilcard character
 
 C_INTEGER($i)
 var $0 : Boolean
 var $1 : Text
 
 $0:=False
 For($i;1;Length($1))
    If(Character code(Substring($1;$i;1))=Character code("@"))
       $0:=True
    End if
 End for
```
