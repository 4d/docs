---
id: wa-get-last-url-error
title: WA GET LAST URL ERROR
slug: /commands/wa-get-last-url-error
displayed_sidebar: docs
---

<!--REF #_command_.WA GET LAST URL ERROR.Syntax-->**WA GET LAST URL ERROR** ( {* ;} *object* ; *url* ; *description* ; *errorCode* )<!-- END REF-->
<!--REF #_command_.WA GET LAST URL ERROR.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| url | Text | &#8592; | URL at origin of error |
| description | Text | &#8592; | Description of error (Mac OS) |
| errorCode | Integer | &#8592; | Error code |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.WA GET LAST URL ERROR.Summary-->The WA GET LAST URL ERROR command recovers several items of information about the last error that occurred in the Web area designated by the *\** and *object* parameters.<!-- END REF--> 

This information is returned in three variables:

* *url*: URL causing error.
* *description* (Mac OS only): A text describing the error (if available). If it is not possible to associate a text with the error, an empty string is returned. Under Windows, this parameter is always returned empty.
* *errorCode*: The error code.  
   * If the code is >=400, it is an error related to the HTTP protocol. For more information about this type of error, refer to the following address:  
   *http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html*  
   * Otherwise, it is an error returned by the WebKit (Mac OS) or ActiveX (Windows).

It is recommended to call this command within the framework of the On URL Loading Error form event to find out the cause of the error that just occurred. 

#### See also 

[Form event code](../commands/form-event-code.md)  