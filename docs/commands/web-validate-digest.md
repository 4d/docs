---
id: web-validate-digest
title: WEB Validate digest
displayed_sidebar: docs
---

<!--REF #_command_.WEB Validate digest.Syntax-->**WEB Validate digest** ( *userName* ; *password* ) -> Function result<!-- END REF-->
<!--REF #_command_.WEB Validate digest.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| userName | Text | -> | User name |
| password | Text | -> | User password |
| Function result | Boolean | <- | True=Authentication OK, False=Authentication failed |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB Validate digest.Summary-->The **WEB Validate digest** command checks the validity of the identifying information (name and password) provided by a user connecting to the Web server.<!-- END REF--> This command must be used in the [On Web Authentication Database Method](/4Dv20R6/4D/14-R2/On-Web-Authentication-Database-Method.300-1342178.en.html) in the context of Web authentication in Digest mode (see the [Connection Security](/4Dv20R6/4D/14-R2/Connection-Security.300-1342179.en.html) section). 

In the *userName* and *password* parameters, pass the identifying information of the user stored locally. The command uses this information to generate a value that it compares with the information sent by the Web browser.

If the values are the same, the command returns True. Otherwise, it returns False.

You can use this mechanism to manage and maintain your own secure access system to the Web server by programming. Note that Digest validation cannot be used jointly with 4D passwords.

**Note:** If the browser does not support Digest authentication, an error is returned (authentication error).

#### Example 

Example using [On Web Authentication Database Method](/4Dv20R6/4D/14-R2/On-Web-Authentication-Database-Method.300-1342178.en.html) in Digest mode:

```4d
  ` On Web Authentication Database Method

 C_TEXT($1;$2;$5;$6;$3;$4)

 C_TEXT($user)

 C_BOOLEAN($0)

 $0:=False

 $user:=$5

  `For security reasons, refuse names containing @

 If(WithWildcard($user))

    $0:=False

  `The WithWildcard method is described in the "On Web Authentication Database Method" section

 Else

    QUERY([WebUsers];[WebUsers]User=$user)

    If(OK=1)

       $0:=WEB Validate digest($user;[WebUsers]password)

    Else

       $0:=False `User does not exist

    End if

 End if
```

#### See also 
[Generate digest](generate-digest.md)  
[Validate password](validate-password.md)  