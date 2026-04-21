---
id: qr-get-html-template
title: QR Get HTML template
slug: /commands/qr-get-html-template
displayed_sidebar: docs
---

<!--REF #_command_.QR Get HTML template.Syntax-->**QR Get HTML template** ( *area* : Integer ) : Text<!-- END REF-->
<!--REF #_command_.QR Get HTML template.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| Function result | Text | &#8592; | HTML code used as template |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|2003|Created|

</details>
</div>

## Description 

<!--REF #_command_.QR Get HTML template.Summary-->The QR Get HTML template command returns the HTML template currently used for the Quick Report *area*.<!-- END REF--> The returned value is a text value and includes all the contents of the HTML template.

If no specific template was defined, the template that is returned is the default template. Please note that no template will be returned if the output was not set to HTML file, either manually or programmatically.

If you pass an invalid area number, the error -9850 will be generated.

## See also 

[QR SET HTML TEMPLATE](../commands/qr-set-html-template)  

## Properties

|  |  |
| --- | --- |
| Command number | 751 |
| Thread safe | no |
| Modifies variables | error |


