---
id: ldap-login
title: LDAP LOGIN
slug: /commands/ldap-login
displayed_sidebar: docs
---

<!--REF #_command_.LDAP LOGIN.Syntax-->**LDAP LOGIN** ( *url* ; *login* ; *password* {; *digest*} )<!-- END REF-->
<!--REF #_command_.LDAP LOGIN.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| url | Text | &#8594;  | URL of LDAP server to connect to |
| login | Text | &#8594;  | Login entry |
| password | Text | &#8594;  | Password of login entry |
| digest | Integer | &#8594;  | 0 = send password in digest MD5 (default), 1 = send password without encryption |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.LDAP LOGIN.Summary-->The **LDAP LOGIN** command opens a read-only connection to the LDAP server specified in the *url* parameter with the *login* and *password* identifiers provided.<!-- END REF--> If accepted by the server, this connection will be used for any LDAP searches executed subsequently in the current process until the [LDAP LOGOUT](ldap-logout.md) command is executed (or until the process is closed). 

In *url*, pass the full URL of the LDAP server you want to connect to, including the scheme and port (389 by default). This parameter should be compliant with [rfc2255](https://www.ietf.org/rfc/rfc2255.txt).   
You can open secure connections over TLS by using a *url* that starts with "ldaps" and uses a specific port number (for example "ldaps://svr.ldap.acme.com:1389"). The LDAP server must have an SSL Certificate (at least for Microsoft Active Directory). Using a TLS connection is highly recommended when the password is sent in plain text (see below).

**Note:** If you pass an empty string in the *url* parameter, the command will try to connect to the default LDAP server available on the domain; (this feature is intended for testing purposes only, for performance reasons it should not be used in production). 

In *login*, pass the user account on the LDAP server, and in *password*, pass the user password. By default, the *login* can be one of the following login strings, depending on the LDAP Server configuration:

* a Distinguished Name (DN), for example "CN=John Smith,OU=users,DC=example,DC=com"
* the user name (CN), for example "CN=John Smith"
* an e-mail address, for example "johnsmith@4d.fr"
* an SAM-Account-Name, for example "jsmith".

Note that accepted values for the *login* are related to the password transmission mode as defined by the *digest* parameter. For example, in a default MS Active Directory configuration:

* When the transmission mode is LDAP password MD5, the only accepted value for a login is the SAM-Account-Name.
* When the transmission mode is LDAP password plain text (clear text), the *login* parameter can be either DN, CN or an e-mail address. An SAM-Account-Name is also accepted but only when preceded by the domain name (for example, "dc-acme.com/jsmith").

The *digest* parameter allows you to modify the way the password is transmitted over the network. You can use one of the following constants, located in the "*LDAP*" theme:

| Constant                 | Type    | Value | Comment                                                       |
| ------------------------ | ------- | ----- | ------------------------------------------------------------- |
| LDAP password MD5        | Integer | 0     | (Default) Send password encrypted in MD5                      |
| LDAP password plain text | Integer | 1     | Send password with no encryption (TLS connection recommended) |

By default, the *password* is transmitted in digest MD5\. Pass LDAP password plain text if necessary, for example if you want to use different login type values with the LDAP server. In a production environment, it is recommended to use a TLS connection for the *url*. 

**Note:** Authentication with an empty password lets you enter the anonymous binding mode (if authorized by the LDAP server). However, in this mode, errors can be thrown if you try to perform any operation that is not allowed in this kind of bind.

If the login parameters are valid, a connection to the LDAP server is opened in the 4D process. You can then search and retrieve information using LDAP commands.

Do not forget to call the [LDAP LOGOUT](ldap-logout.md) command when the connection to the LDAP server is no longer necessary. 

#### Example 1 

You want to log in to an LDAP server and do a search:

```4d
 ARRAY TEXT($_tabAttributes;0)
 APPEND TO ARRAY($_tabAttributes;"cn")
 APPEND TO ARRAY($_tabAttributes;"phoneNumber")
 LDAP LOGIN("ldap://srv.dc.acme.com:389";"John Smith";"qrnSurBret2elburg")
 $vfound:=LDAP Search("OU=UO_Users,DC=ACME,DC=com";”cn=John Doe";LDAP all levels;$_tabAttributes)
 LDAP LOGOUT //do not forget to log out
```

#### Example 2 

This example tries to connect to an application:

```4d
 ON ERR CALL("ErrHdlr") //handle errors
 errOccurred:=False
 errMsg:=""
 If(ppBindMode=1) //if password mode is default
    LDAP LOGIN(vUrlLdap;vUserCN;vPwd;LDAP password MD5)
 Else
    LDAP LOGIN(vUrlLdap;vUserCN;vPwd;LDAP password plain text)
 End if
 
 Case of
    :(Not(errOccurred))
       ALERT(" You are now connected to your LDAP server.  ")
 
    :(errOccurred)
       ALERT("Error in your parameters")
 End case
 
 LDAP LOGOUT
 ON ERR CALL("")
```

#### See also 

*LDAP*  
[LDAP LOGOUT](ldap-logout.md)  