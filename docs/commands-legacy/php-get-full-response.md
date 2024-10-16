---
id: php-get-full-response
title: PHP GET FULL RESPONSE
slug: /commands/php-get-full-response
displayed_sidebar: docs
---

<!--REF #_command_.PHP GET FULL RESPONSE.Syntax-->**PHP GET FULL RESPONSE** ( *stdOut* {; *errLabels* ; *errValues*} {; *httpHeaderFields* {; *httpHeaderValues*}} )<!-- END REF-->
<!--REF #_command_.PHP GET FULL RESPONSE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| stdOut | Text, Blob | &larr; | Contents of stdOut buffer |
| errLabels | Text array | &larr; | Labels of errors |
| errValues | Text array | &larr; | Values of errors |
| httpHeaderFields | Text array | &larr; | Names of HTTP headers |
| httpHeaderValues | Text array | &larr; | Values of HTTP headers |

<!-- END REF-->

#### Description 

<!--REF #_command_.PHP GET FULL RESPONSE.Summary-->The PHP GET FULL RESPONSE command lets you obtain additional information about the response returned by the PHP interpreter.<!-- END REF--> This command is particularly useful in the case of an error occurring during execution of the script. 

The PHP script can write data in the stdOut buffer (echo, print, etc.). The command returns the data directly in the *stdOut* variable and applies the same conversion principles as described in the [PHP Execute](php-execute.md) command.

The synchronized *errLabels* and *errValues* text arrays are filled when the execution of the PHP scripts causes errors. These arrays provide information in particular on the error origin, script and line. These two arrays are inseparable: if *errLabels* is passed, *errValues* must be passed as well. 

Since exchanges between 4D and the PHP interpreter are carried out via FastCGI, the PHP interpreter functions as if it were called by an HTTP server and therefore sends HTTP headers. You can recover these headers and their values in the *httpHeaderFields* and *httpHeaderValues* arrays.

#### See also 

[PHP Execute](php-execute.md)  
[PHP GET OPTION](php-get-option.md)  