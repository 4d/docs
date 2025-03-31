---
id: current-client-authentication
title: Current client authentication
slug: /commands/current-client-authentication
displayed_sidebar: docs
---

<!--REF #_command_.Current client authentication.Syntax-->**Current client authentication** {( *domain* ; *protocol* )} : Text<!-- END REF-->
<!--REF #_command_.Current client authentication.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| domain | Text | &#8592; | Domain name |
| protocol | Text | &#8592; | "Kerberos", "NTLM", or empty string |
| Function result | Text | &#8592; | Session user login returned by Windows |

<!-- END REF-->

#### Description 

<!--REF #_command_.Current client authentication.Summary-->The **Current client authentication** command asks the Windows Active Directory server to authenticate the current client and, if successful, returns the Windows login name for this client (session identifier).<!-- END REF--> If the authentication failed, an empty string is returned. 

This command can only be used in the context of an SSO implementation on Windows with 4D Server. For more information, please refer to the *Single Sign On (SSO) on Windows* section.

Usually, both the client and the server must be managed by the same Active Directory. However, different configurations can be supported, as described in the *Requirements for SSO* section. 

The returned login string must be passed to your 4D identification module to grant access rights to the client based upon the Windows session login; if you managed to remove the 4D Server login dialog by setting a "Default user", you can implement an interface where the user does not need to reenter any IDs (see example). 

Optionally, the command can return two text parameters:

* *domain*: name of domain to which the client belongs.
* *protocol*: name of protocol used by Windows to authenticate the user. It can be "Kerberos" or "NTLM", depending on available resources. If the authentication failed, an empty string ("") is returned.

 These parameters can be used to accept or reject connections if you want to filter access with regard to the domain or protocol. 

##### Authentication security level 

The security level of the authentication (i.e., how much you can trust the user login) depends on how the user has actually been identified. The value(s) returned in the **Current client authentication** command parameters will allow you to find out what the login (if any) is based on, and thus the security level: 

| **Login** | **Domain** | **Protocol** | **Comments**                                                                                                                                                                                                                                                                                                                     |
| --------- | ---------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Empty     | Empty      | Empty        | Command was unable to get authentication information about the logged user                                                                                                                                                                                                                                                       |
| Filled    | Empty      | NTLM         | ID returned is the local one, which has been defined on the local computer                                                                                                                                                                                                                                                       |
| Filled    | Filled     | NTLM         | ID returned has been authenticated using the NTLM protocol in the Domain returned in the *domain* parameter. In this case, you must check the Domain to increase the security level. Since some architectures have a Domain forest, you need to make sure that the Domain where the user was authenticated was the expected one. |
| Filled    | Filled     | Kerberos     | ID returned has been authenticated with the Kerberos protocol in the expected Domain. This configuration provides the highest level of security.                                                                                                                                                                                 |

For more information on these requirements, please refer to the paragraph.

#### Example 

In your 4D Server database, you have designed an access control system based on 4D's users and groups feature. You want to configure your application so that 4D remote users on Windows connect directly to 4D Server (no password dialog box is displayed), but while being logged with their actual rights:

1. In the "Security" page of the Database Settings dialog box, designate a user as the "default user":  
![](../assets/en/commands/pict2909681.en.png)  
With this setting, no password dialog will be displayed for a remote 4D that connects to the server; all clients being logged as "Bob".
2. In the On Server Open Connection database method, add the following code to check user authentication from the Active Directory:

```4d
  //On Server Open Connection database method
 var $0;$1;$2;$3 : Integer
 $login:=Current client authentication($domain;$protocol)
 If($login #"") //a login was returned
  //call your custom authentication method
    $0:=CheckCredentials($login)
  //should return 0 in case of success or -1 for error
 Else
    $0:=-1 //reject the connection
 End if
```

**Note:** This example shows a basic scenario that must be adapted to your solutions. The 4D user custom authentication method (CheckCredentials in the above example) could be based on one of the following implementations:

* replicate the Active directory names in the 4D user and group names, for an automatic mapping,
* map returned information to a custom \[users\] table,
* use LDAP features to get user credentials.


#### Properties

|  |  |
| --- | --- |
| Command number | 1355 |
| Thread safe | &check; |


