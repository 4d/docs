---
id: validate-password
title: Validate password
slug: /commands/validate-password
displayed_sidebar: docs
---

<!--REF #_command_.Validate password.Syntax-->**Validate password** ( *userID* ; *password* {; *digest*} ) : Boolean<!-- END REF-->
<!--REF #_command_.Validate password.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| userID | Integer, Text | &#8594;  | Unique user ID or User name |
| password | Text | &#8594;  | Unencrypted password |
| digest | Boolean | &#8594;  | Digest password = True, <br/>Plain-text password (default) = False |
| Function result | Boolean | &#8592; | True = valid password False = invalid password |

<!-- END REF-->

#### Description 

<!--REF #_command_.Validate password.Summary-->Validate password returns True if the string passed in *password* is the password for the user account whose ID number or name is passed in *userID*.<!-- END REF-->

The optional *digest* parameter indicates whether the *password* parameter contains a plain-text password or a hashed password (digest mode):

* When you pass **True**, this indicates that *password* contains a hashed password (digest mode),
* When you pass **False** or omit this parameter, this indicates that *password* contains a plain-text password.

This parameter is particularly helpful when using authentication database methods, in particular the [On REST Authentication database method](on-rest-authentication-database-method.md). 

The command execution is now delayed to prevent flooding (brute force attack), in other words, attempts of multiple user name/password combinations. As a result, after the 4th call to this command, it is run only after a period of 10 seconds. This delay is throughout the entire work station. 

#### Example 1 

This example checks whether the password of the user “Hardy” is “Laurel”:

```4d
 GET USER LIST(atUserName;alUserID)
 $vlElem:=Find in array(atUserName;"Hardy")
 If($vlElem>0)
    If(Validate password(alUserID{$vlElem};"Laurel"))
       ALERT("Yep!")
    Else
       ALERT("Too bad!")
    End if
 Else
    ALERT("Unknown user name")
 End if
```

#### Example 2 

In the [On REST Authentication database method](on-rest-authentication-database-method.md), you want to test a connection request (using the 4D users of the database). You can just write:

```4d
 $0:=Validate password($1;$2;$3)
```

#### See also 

[GET USER PROPERTIES](get-user-properties.md)  
[Set user properties](set-user-properties.md)  
[WEB Validate digest](web-validate-digest.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 638 |
| Thread safe | &check; |
| Forbidden on the server ||


