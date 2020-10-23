---
id: webServerSecurity
title: Server Security
---

## Overview
 
The security of your 4D Web Server is based on the following elements:

*	The combination of the web password management system (BASIC mode or DIGEST mode) and the [`On Web Authentication`](webServerConnectMethods.md#on-web-authentication) database method,

*	The definition of a [Generic Web User](#generic-web-user),

*	The definition of a [HTML Root](#default-html-root) folder by default,

*	The definition of the “[Available through 4D tags and URLs](#available-through-4d-tags-and-urls) (4DACTION…)” property for each project method of the database.

*	The option for the specific support of [synchronization](#allow-database-access-through-4dsync-urls) requests through HTTP.

>
>The security of the connection itself is managed through the [TLS Protocol (HTTPS)](webServerConnectSecurity.md#tls-protocol-https).

>For a general overview of 4D's security features, see the [4D Security guide](https://blog.4d.com/4d-security-guide/).


## Password Management   

### BASIC Mode and DIGEST Mode  

In the Database Settings, you can set the access control system that you want to apply to your Web server. Two authentication modes are provided: BASIC mode and DIGEST mode. The authentication mode concerns the way the information concerning the user name and password are collected and processed.

*	In BASIC mode, the name and password entered by the user are sent unencrypted in the HTTP requests. This does not ensure total system security since this information could be intercepted and used by a third party.

*	The DIGEST mode provides a greater level of security since the authentication information is processed by a one-way process called hashing which makes their contents impossible to decipher.

For the user, the use of either authentication mode is transparent.

>For compatibility reasons, the BASIC authentication mode is used by default in 4D databases that are converted to version 11 (if the “Use Passwords” option was checked in the previous version). You must explicitly activate the Digest mode.

>Digest authentication is an HTTP1.1 function and is not supported by all browsers. For example, only versions 5.0 and later of Microsoft Internet Explorer accept this mode. If a browser that does not support this functionality sends a request to a web server when Digest authentication is activated, the server will reject the request and return an error message to the browser.

You can now define, in the Database Settings dialog box, the access control system you want to apply to your 4D Web server. To do this, choose the Options (I) page of the **Web** theme:

In the "Passwords" area, three options are available to you:

*	**No passwords**: No authentication is carried out for connections to the web server. In this case:

	*	If the `On Web Authentication Database Method` exists, it is executed and, in addition to $1 and $2, only the IP addresses of the browser and the server ($3 and $4) are provided, the user name and password ($5 and $6) are empty. In this case, you can filter connections according to the IP address of the browser and/or the requested IP address of the server.

	*	If the `On Web Authentication Database Method` does not exist, connections are automatically accepted.
Passwords with BASIC protocol: Standard authentication in BASIC mode. When a user connects to the server, a dialog box appears on their browser in order for them to enter their user name and password. These two values are then sent to the `On Web Authentication Database Method` along with the other connection parameters (IP address and port, URL...) so that you can process them.
This mode provides access to the Include 4D passwords option that allows you to use, instead of or in addition to your own password system, 4D’s database password system (as defined in 4D).

*	**Passwords with DIGEST protocol**: Authentication in DIGEST mode. As in BASIC mode, users must enter their name and password when they connect. These two values are then sent encrypted to the `On Web Authentication Database Method` with the other connection parameters. You must authenticate a user using the `WEB Validate digest` command.

>You must restart the web server in order for the changes made to these parameters to be taken into account

>With the 4D Client web server, keep in mind that all the sites published by the 4D Client machines will share the same table of users. Validation of users/passwords is carried out by the 4D Server application.

### BASIC Mode   

If you use the BASIC mode, the system that filters connections to the 4D Web server depends on the combination of two parameters:

*	The web password options in the Database Settings dialog box,

*	The existence of the `On Web Authentication Database Method`.

Here are the different resulting systems:

The “Passwords with BASIC protocol” option is selected and the “Include 4D Passwords” option is not selected.

*	If the `On Web Authentication Database Method` exists, it is executed and all its parameters are given. You can therefore filter more precisely the connections according to the user name, password, and/or the browser’s or web server’s IP address.

*	If the `On Web Authentication Database Method` doesn’t exist, the connection is automatically refused and a message indicating that the Authentication method doesn’t exist is sent to the browser.

>If the user name sent by the browser is an empty string and if the On Web Authentication Database Method doesn’t exist, a password dialog box is sent to the browser.

The “Passwords with BASIC protocol” and “Include 4D Passwords” options are selected.

*	If the user name sent by the browser exists in the table of 4D users and the password is correct, the connection is accepted. If the password is incorrect, the connection is refused.

*	If the user name sent by the browser doesn’t exist in 4D, two results are then possible:
*	If the `On Web Authentication Database Method` exists, the parameters $1, $2, $3, $4, $5, and $6 are returned. You can therefore filter the connections according to the user name, password, and/or the browser’s or web server’s IP address.
*	If the `On Web Authentication Database Method` doesn’t exist, the connection is refused.

### DIGEST Mode  

Unlike BASIC mode, the DIGEST mode is not compatible with standard 4D passwords: it is not possible to use 4D passwords as web IDs. The “Include 4D passwords” option is dimmed when this mode is selected. The IDs for web users must be managed in a customized manner (for example, via a table).

When the DIGEST mode is activated, the $6 parameter (password) is always returned empty in the `On Web Authentication Database Method`. In fact, when using this mode, this information does not pass by the network as clear text (unencrypted). It is therefore imperative in this case to evaluate connection requests using the `WEB Validate digest` command.

The operation of the 4D Web Server's access system is summarized in the following diagram:

![](assets/en/WebServer/serverAccess.png)








## About robots (security note)  

Certain robots (query engines, spiders...) scroll through web servers and static pages. If you want robots to be able to access your entire site, you can define which URLs they are not allowed to access.

To do so, put the ROBOTS.TXT file at the server’s root. This file must be structured in the following manner:

   ```code4d
   User-Agent: <name>
   Disallow: <URL> or <beginning of the URL>
   ```
   
For example:

   ```code4d
   User-Agent: *
   Disallow: /4D
   Disallow: /%23%23
   Disallow: /GIFS/
   ```
   
*	“User-Agent: *” - all robots are affected.

*	“Disallow: /4D” - robots are not allowed to access URLs beginning with /4D.

*	“Disallow: /%23%23” - robots are not allowed to access URLs beginning with /%23%23.

*	“Disallow: /GIFS/’ - robots are not allowed to access the /GIFS/ folder or its subfolders.

Another example:

   ```code4d
   User-Agent: *
   Disallow: /
   ```

In this case, robots are not allowed to access the entire site.

## Generic Web User  

You can designate a user, previously defined in the 4D password table, as a “Generic Web User.” In this case, each browser that connects to the database can use the access authorizations and restrictions associated with this generic user. You can therefore easily control the browser’s access to the different parts of the database.

>Do not confuse this option, which allows you to restrict the browser’s access to different parts of the application (methods, forms, etc.), with the web server’s connection control system, managed by the password system and the `On Web Authentication Database Method`.

To define a Generic Web User:

1.	In Design mode, create at least one user with the Users editor of the Tool Box. You can associate a password with the user if you wish.

2.	In the different 4D editors, authorize or restrict access to this user.

3.	In the Database Settings dialog, choose the **Options (I)** page of the **Web** theme.<p>
The “Web Passwords” area contains the **Generic Web User** drop-down list. By default, the Generic Web User is the Designer and the browsers have full access to the entire database.

4.	Choose a user in the drop-down list and validate the dialog box:




All of the web browsers that are authorized to connect to the database will benefit from the access authorizations and restrictions associated with this Generic Web User (except when the BASIC mode and the “Include 4D Passwords” option are checked and the user that connects does not exist in the 4D password table, see below).

### Interaction with the BASIC protocol  

The "Passwords with BASIC protocol" option does not influence how the Generic Web User operates. Whatever the state of this option, the access authorizations and restrictions associated with the “Generic Web User” will be applied to all the web browsers that are authorized to connect to the database.

However, when the "Include 4D passwords" option is selected, two possible results can occur:

*	The user’s name and password don’t exist in 4D’s password table. In this case, if the connection has been accepted by the `On Web Authentication Database Method`, the Generic Web User’s access rights will be applied to the browser.

*	If the user’s name and password exist in 4D’s password table, the “Generic Web User” parameter is ignored. The user connects with his own access rights.

## Default HTML Root 
 
This option in the Database Settings allows you to define the folder in which 4D will search for the static and semi-dynamic HTML pages, pictures, etc., to send to the browsers.

Moreover, the HTML root folder defines, on the web server hard drive, the hierarchical level above which the files will not be accessible. This access restriction applies to URLs sent to Web browsers as well as to 4D’s Web Server commands, such as `WEB SEND FILE`. If a URL is sent to the database by a browser or if a 4D command tries to access a file located above the HTML root folder, an error is returned indicating that the file has not been found.

By default, 4D defines a HTML Root folder named **WebFolder**. If it does not already exist, the HTML root folder is physically created on disk at the moment the Web server is launched for the first time.

If you keep the default location, the root folder is created:

*	with 4D in local mode and 4D Server:
	*	in binary databases, at the same level as that of the database structure file. **Note**: As part of a compiled and merged application, the structure file is placed in the Database subfolder. 
	*	in project databases, at the same level as the Project folder.

*	with 4D in remote mode, in the local folder of the 4D database (see the Get 4D folder command).

You can modify the default HTML root folder name and location in the Database Settings dialog box (Web theme, Configuration page):



In the “Default HTML Root” entry area, enter the new access path of the folder that you wish to define.

The access path entered in this dialog box is relative: it is established from the folder containing the structure of the database (4D in local mode or 4D Server) or the folder containing the 4D application or software package (4D in remote mode).

For multi-platform compatibility of your databases, the 4D Web Server uses particular writing conventions to describe access paths. The syntax rules are as follows:

*	Folders are separated by a slash (“/”)

*	The access path must not end with a slash (“/”)

*	To “go up” one level in the folder hierarchy, enter “..” (two periods) before the folder name

*	The access path must not start with a slash (“/”) (except if you want the HTML root folder to be the database or 4D remote folder, see below).

For example, if you want the HTML root folder to be the “Web” subfolder in the “4DDatabase” folder, enter **4DDatabase/Web**.

If you want the HTML root folder to be the database or 4D remote folder, but for access to the folders above to be forbidden, enter “/” in the area. For a completely free access to the volumes, leave the “Default HTML Root” area empty.

>**WARNING** <br>If you do not define a default HTML Root folder in the Preferences dialog box, the folder that contains the structure file of the database or the 4D application will be used. **Be careful because in this case there are no access restrictions** (users can access all volumes).

**Notes**

*	When the HTML root folder is modified in the Database Settings dialog box, the cache is cleared so as to not store files whose access is restricted.

*	You can also dynamically define the HTML root folder by using the `WEB SET ROOT FOLDER` command. In this case, the modification applies to all the current web process for the worksession. The cache of the HTML pages is therefore cleared.

## Available through 4D tags and URLs
  
The special `4DACTION URL` and the `4DSCRIPT`, `4DEVAL`, `4DTEXT`, `4DHTML` (as well as the former `4DVAR` and `4DHTMLVAR`) tags, allow you to trigger the execution of any project method of a 4D database published on the Web. For example, the request *http://www.server.com/4DACTION/Erase_All* causes the execution of the ***Erase_All*** project method, if it exists.

This mechanism therefore presents a security risk for the database, in particular if an Internet user intentionally (or unintentionally) triggers a method not intended for execution via the web. You can avoid this risk in three ways:

*	Restrict access to project methods using the 4D password system. Drawbacks: This system requires the use of 4D passwords and forbids any type of method execution (including using HTML tags).

*	Filter the methods called via the URLS using the `On Web Authentication Database Method`. Drawbacks: If the database includes a great number of methods, this system may be difficult to manage.

*	Use the **Available through 4D tags and URLs (4DACTION...)** option found in the Method properties dialog box:

![](assets/en/WebServer/methodProperties.png)


This option is used to individually designate each project method that can be called using the special `URL`, `4DACTIONL` or the `4DSCRIPT`, `4DEVAL`, `4DTEXT`, `4DHTML` (as well as the former `4DVAR` and `4DHTMLVAR`) tags. When it is not checked, the project method concerned cannot be executed using an HTTP request containing a special URL or tag. Conversely, it can be executed using other types of calls (formulas, other methods, etc.).

This option is unchecked by default for databases created. Methods that can be executed using the `4DACTION Web URL` or the tags must be specifically indicated.

In the Explorer, Project methods with this property are given a specific icon:

 ![](assets/en/WebServer/methodIcon.png)

## Allow database access through 4DSYNC URLs 
 
This option on the "Web/Configuration" page of the Database Settings lets you control support of requests containing */4DSYNC URLs*. 

This option enables or disables specific processing of requests containing */4DSYNC*:

*	When it is not checked, */4DSYNC* requests are considered as standard requests and do not allow specific processing (using a synchronization request causes a "404 - resource unavailable" type response to be sent).

*	When it is checked, the synchronization mechanism is enabled; */4DSYNC* requests are considered as special requests and are parsed by the 4D HTTP server.

By default:

*	this option is **not checked** in databases created with 4D v13 and newer.

*	this option is **checked** in databases converted from a previous version of 4D, for compatibility reasons. We recommend that you deselect it if your application does not use the HTTP replication function. 

The scope of this option is local to the application and the web server must be restarted to take it into account.

