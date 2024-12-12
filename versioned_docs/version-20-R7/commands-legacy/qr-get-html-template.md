---
id: qr-get-html-template
title: QR Get HTML template
slug: /commands/qr-get-html-template
displayed_sidebar: docs
---

<!--REF #_command_.QR Get HTML template.Syntax-->**QR Get HTML template** ( *area* ) : Text<!-- END REF-->
<!--REF #_command_.QR Get HTML template.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| Function result | Text | &#8592; | HTML code used as template |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.QR Get HTML template.Summary-->The QR Get HTML template command returns the HTML template currently used for the Quick Report *area*.<!-- END REF--> The returned value is a text value and includes all the contents of the HTML template.

If no specific template was defined, the template that is returned is the default template. Please note that no template will be returned if the output was not set to HTML file, either manually or programmatically.

If you pass an invalid area number, the error -9850 will be generated.

#### See also 

[QR SET HTML TEMPLATE](qr-set-html-template.md)  