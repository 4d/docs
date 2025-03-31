---
id: on-sql-authentication-database-method
title: On SQL Authentication database method
slug: /commands/on-sql-authentication-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On SQL Authentication database method.Syntax-->$1, $2, $3 -> On SQL Authentication database method -> $0<!-- END REF-->
<!--REF #_command_.On SQL Authentication database method.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| $1 | Text | &#8592; | User name |
| $2 | Text | &#8592; | Password |
| $3 | Text | &#8592; | (Optional) IP address of client at origin of the request |
| $0 | Boolean | &#8592; | True = request accepted, False = request refused |

<!-- END REF-->

#### 

<!--REF #_command_.On SQL Authentication database method.Summary-->The **On SQL Authentication database method** can be used to filter requests sent to the integrated SQL server of 4D.<!-- END REF--> This filtering can be based on the name and password as well as the (optional) IP address of the user. The developer can use their own table of users or that of the 4D users to evaluate the connection identifiers. Once the connection is authenticated, the [CHANGE CURRENT USER](change-current-user.md) command must be called in order to control access of requests within the 4D database. 

When it exists, the **On SQL Authentication database method** is called automatically by 4D or 4D Server on each external connection to the SQL server. The internal system for managing 4D users is therefore not activated. The connection is only accepted if the database method returns **True** in $0 and if the [CHANGE CURRENT USER](change-current-user.md) command has been executed successfully. If one of these conditions is not met, the request is refused.

**Note**: The statement **SQL LOGIN**(**SQL\_INTERNAL**;$user;$password) does not call the **On SQL Authentication database method** since it is an internal connection in this case. 

The database method receives up to three parameters of the Text type, passed by 4D ($1, $2 and $3), and returns a Boolean, $0\. Here is a description of these parameters:

| **Parameters** | **Type** | **Description**                                              |
| -------------- | -------- | ------------------------------------------------------------ |
| $1             | Text     | User name                                                    |
| $2             | Text     | Password                                                     |
| $3             | Text     | (optional) IP address of client at origin of the request(\*) |
| $0             | Boolean  | True = request accepted, False = request refused             |

(\*) 4D returns IPv4 addresses in a hybrid IPv6/IPv4 format written with a 96-bit prefix, for example ::ffff:192.168.2.34 for the IPv4 address 192.168.2.34\. For more information, refer to the *Support of IPv6* section. 

You must declare these parameters as follows:

```4d
  //On SQL Authentication database method
 
 var $1;$2;$3 : Text
 var $0 : Boolean
  //Code for method
```

The password ($2) is received as standard text. 

You must check the identifiers of the SQL connection in the **On SQL Authentication database method**. For example, you can check the name and password using a custom table of users. If the identifiers are valid, pass **True** in $0 to accept the connection. Otherwise, pass **False** in $0; in this case, the connection is refused.

**Note:** If the **On SQL Authentication database method** does not exist, the connection is evaluated using the integrated user management system of 4D (if it is activated, in other words, if a password has been assigned to the Designer). If this system is not activated, users are connected with Designer access rights (free access). 

If you have passed **True** in $0, you must then successfully call the [CHANGE CURRENT USER](change-current-user.md) command in the **On SQL Authentication database method** in order for the request to be accepted and for 4D to open an SQL session for the user*.* 

The use of the [CHANGE CURRENT USER](change-current-user.md) command can be used to implement a virtual authentication system which has the double advantage of allowing the control of connection actions and of hiding the connection identifiers from the outside in the 4D SQL session.

This example of the **On SQL Authentication database method** checks whether the connection request comes from the internal network, validates the identifiers and then assigns access rights to the "sql\_user" user for the SQL session.

```4d
 var $1;$2;$3 : Text
 var $0 : Boolean
  //$1: user
  //$2: password
  //{$3: IP address of client}
 ON ERR CALL("SQL_error")
 If(checkInternalIP($3))
  //The checkInternalIP method checks whether the IP address is internal
    If($1="victor") & ($2="hugo")
       CHANGE CURRENT USER("sql_user";"")
       If(OK=1)
          $0:=True
       Else
          $0:=False
       End if
    Else
       $0:=False
    End if
 Else
    $0:=False
 End if
```
