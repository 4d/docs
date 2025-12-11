---
id: web-send-http-redirect
title: WEB SEND HTTP REDIRECT
slug: /commands/web-send-http-redirect
displayed_sidebar: docs
---

<!--REF #_command_.WEB SEND HTTP REDIRECT.Syntax-->**WEB SEND HTTP REDIRECT** ( *url* {; *} )<!-- END REF-->
<!--REF #_command_.WEB SEND HTTP REDIRECT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| url | Text | &#8594;  | New URL |
| * | Operator | &#8594;  | If specified = URL is not translated, If omitted = URL is translated |

<!-- END REF-->

## Description 

<!--REF #_command_.WEB SEND HTTP REDIRECT.Summary-->The **WEB SEND HTTP REDIRECT** command allows you to transform a URL into another one.<!-- END REF--> 

The *url* parameter contains the new URL that allows you to redirect the request. If this parameter is a url to a file, it must contain the reference to this file, for example: **WEB SEND HTTP REDIRECT** ("/MyPage.HTM"). 

This command prevails over commands that send data ([WEB SEND FILE](web-send-file.md), [WEB SEND BLOB](web-send-blob.md), etc.) that may be in the same method. 

This command also allows you to redirect a request to another Web server. 

4D automatically encodes the URL’s special characters. If you pass the *\** character, 4D will not translate them.

Note that the status of the request sent by this command is **302: Moved Temporarily**. If you need a "moved permanently" status (status 301), you can set a HTTP *X-STATUS: 301* field in the header of the reply. 

## Example 


```4d
 
var $targetURL : Text
$targetURL := "https://www.example.com"

WEB SEND HTTP REDIRECT($targetURL)

```


## Properties

|  |  |
| --- | --- |
| Command number | 659 |
| Thread safe | yes |


