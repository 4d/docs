---
id: web-send-raw-data
title: WEB SEND RAW DATA
slug: /commands/web-send-raw-data
displayed_sidebar: docs
---

<!--REF #_command_.WEB SEND RAW DATA.Syntax-->**WEB SEND RAW DATA** ( *data* {; *} )<!-- END REF-->
<!--REF #_command_.WEB SEND RAW DATA.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| data | Blob | &#8594;  | HTTP data to send |
| * | Operator | &#8594;  | Send chunked |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB SEND RAW DATA.Summary-->The **WEB SEND RAW DATA** command lets the 4D Web server send “raw” HTTP data, which can be chunked.<!-- END REF--> . 

The *data* parameter contains the two standard parts of an HTTP response, i.e. Header and Body. The data are sent without prior formatting by the server. However, 4D carries out a basic check of the response header and body in order to make sure that they are valid: 

* If the header is incomplete or does not comply with the HTTP protocol specifications, 4D will change it accordingly.
* If the HTTP request is incomplete, 4D adds the missing information. If, for instance, you want to redirect the request, you must write:

```HTML
   HTTP/1.1 302
   Location: http://...
```

If you only pass:

```HTML
   Location: http://...
```

4D will complete the request by adding HTTP/1.1 302. 

The optional *\** parameter lets you specify that the response will be sent “chunked”. The cutting up of responses into chunks can be useful when the server sends a response without knowing its total length (if, for instance, the response has not yet been generated). All HTTP/1.1-compatible browsers accept chunked responses.

If you pass the *\** parameter, the Web server will automatically include the *transfer-encoding: chunked* field in the header of the response, if necessary (you can handle the response header manually if you so desire). 

The remainder of the response will also be formatted in order to respect the syntax of the chunked option. Chunked responses contain a single header and an undefined number of body “chunks”. 

All the **WEB SEND RAW DATA** statements that follow the execution of **WEB SEND RAW DATA**(data;\*) within the same method will be considered as part of the response (regardless of whether they contain the *\** parameter). The server puts an end to the chunked send when the method execution is terminated.

**Note:** If the Web client does not support HTTP/1.1, 4D will automatically convert the response into an HTTP/1.0-compatible format (the data sent will not be chunked). However, in this case, the result may not correspond to your wishes. It is therefore recommended to check whether the Web browser supports HTTP/1.1 and to send an appropriate response. To do so, you can use a method such as: 

```4d
 var $0 : Boolean
 ARRAY TEXT(arFields;0)
 ARRAY TEXT(arValues;0)
 WEB GET HTTP HEADER(arFields;arValues)
 $0:=False
 If(Size of array(arValues)>=3)
    If(Position("HTTP/1.1";arValues{3})>0)
       $0:=True //The browser supports HTTP/1.1; $0 returns True
    End if
 End if
```

Combined with the [WEB GET HTTP BODY](web-get-http-body.md) command and other commands of the “Web Server” theme, this command completes the range of tools available to 4D developers in order to entirely customize the processing of incoming and outgoing HTTP connections. These different tools are shown in the following diagram: 

![](../assets/en/commands/pict856016.en.png)

#### Example 

This example illustrates the use of the chunked option with the **WEB SEND RAW DATA** command. The data (a sequence of numbers) are sent in 100 chunks generated on the fly in a loop. Keep in mind that the header of the response is not explicitly set: the command will send it automatically and insert the *transfer-encoding: chunked* field into it since the *\** parameter is used.

```4d
 var $cpt : Integer
 var $my_blob : Blob
 var $output : Text
 
 For($cpt;1;100)
    $output:="["+String($cpt)+"]"
    TEXT TO BLOB($output;$my_blob;UTF8 text without length)
    WEB SEND RAW DATA($my_blob;*)
 End for
```

#### See also 

[WEB GET HTTP BODY](web-get-http-body.md)  
[WEB GET HTTP HEADER](web-get-http-header.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 815 |
| Thread safe | &check; |
| Forbidden on the server ||


