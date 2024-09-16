---
id: soap-request
title: SOAP Request
displayed_sidebar: docs
---

<!--REF #_command_.SOAP Request.Syntax-->**SOAP Request**  -> Function result<!-- END REF-->
<!--REF #_command_.SOAP Request.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | <- | True if the request is SOAP; otherwise, False |

<!-- END REF-->

#### Description 

<!--REF #_command_.SOAP Request.Summary-->The **SOAP Request** command returns **[True](true.md "True")** if the code being executed is part of a SOAP request.<!-- END REF--> 

This command can be used for security reasons in the [On Web Authentication Database Method](/4Dv20R6/4D/14-R2/On-Web-Authentication-Database-Method.300-1342178.en.html) in order to determine the nature of the received requests.

#### See also 
[SOAP DECLARATION](soap-declaration.md)  