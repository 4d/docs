---
id: soap-get-info
title: SOAP Get info
slug: /commands/soap-get-info
displayed_sidebar: docs
---

<!--REF #_command_.SOAP Get info.Syntax-->**SOAP Get info** ( *infoNum* ) : Text<!-- END REF-->
<!--REF #_command_.SOAP Get info.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| infoNum | Integer | &#8594;  | Number of type of SOAP info to get |
| Function result | Text | &#8592; | SOAP Information |

<!-- END REF-->

#### Description 

<!--REF #_command_.SOAP Get info.Summary-->The **SOAP Get info** command retrieves, in the form of a character string, the different types of information concerning a SOAP request.<!-- END REF--> 

When you process a SOAP request, it can be useful to obtain additional information — other than the RPC parameter values — about the request. For instance, for security reasons, you can use this command in the *On Web Authentication Database Method* to find out the name of the requested Web Service method. 

Pass the number of the type of SOAP information you want to get in the *infoNum* parameter. You can use the following predefined constants, located in the *Web Services (Server)* theme:

| Constant          | Type    | Value | Comment                                             |
| ----------------- | ------- | ----- | --------------------------------------------------- |
| SOAP method name  | Integer | 1     | Name of the Web Service method about to be executed |
| SOAP service name | Integer | 2     | Name of the Web Service to which the method belongs |

**Note:** Also for security reasons, it is possible to set the maximum size for Web Services requests sent to 4D. This configuration is carried out using the [SET DATABASE PARAMETER](set-database-parameter.md) command.

#### See also 

[SET DATABASE PARAMETER](set-database-parameter.md)  
[SOAP SEND FAULT](soap-send-fault.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 784 |
| Thread safe | &check; |
| Forbidden on the server ||


