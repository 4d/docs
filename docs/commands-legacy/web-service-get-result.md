---
id: web-service-get-result
title: WEB SERVICE GET RESULT
slug: /commands/web-service-get-result
displayed_sidebar: docs
---

<!--REF #_command_.WEB SERVICE GET RESULT.Syntax-->**WEB SERVICE GET RESULT** ( *returnValue* {; *returnName* {; *}} )<!-- END REF-->
<!--REF #_command_.WEB SERVICE GET RESULT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| returnValue | Variable | &#8592; | Value returned by the Web Service |
| returnName | Text | &#8594;  | Name of the parameter to be retrieved |
| * | Operator |  &#8594;  | Free up memory |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB SERVICE GET RESULT.Summary-->The **WEB SERVICE GET RESULT** command retrieves a value sent back by the Web Service as a result of the processing performed.<!-- END REF-->This command must be used only after the [WEB SERVICE CALL](web-service-call.md) command. 

The *returnValue* parameter receives the value sent back by the Web Service. Pass a 4D variable in this parameter. This variable is generally $0, corresponding to the value returned by the proxy method. It is, however, possible to use intermediary variables (you must use process variables only). 

**Note:** Each 4D variable or array used must be previously declared using the commands of the “*Compiler* and *Arrays*” themes.

The optional *returnName* parameter specifies the name of the parameter to be retrieved. However, since most Web Services only return a single value, this parameter is generally not necessary. 

The optional *\** parameter signals the program to free up the memory devoted to the processing of the request. You must pass this parameter after retrieving the last value sent by the Web Service.

#### Example 

Imagine that a Web Service returns the current time in any city in the world. The parameters received by the Web Service are the name of the city and the country code. In return, the Web Service sends the corresponding time. The proxy calling method could be in the following form:

```4d
 var $1 : Text
 var $2 : Text
 var $0 : Time
 
 WEB SERVICE SET PARAMETER("city";$1)
 WEB SERVICE SET PARAMETER("country_code";$2)
 
 WEB SERVICE CALL("http://www.citiesoftheworld.com/WS";"WSTime#City_time";"City_time";\
 "http://www.citiesoftheworld.com/namespace/default")
 
 If(OK=1)
    WEB SERVICE GET RESULT($0;"return";*)
 End if
```

#### See also 

[WEB SERVICE CALL](web-service-call.md)  
[WEB SERVICE SET PARAMETER](web-service-set-parameter.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 779 |
| Thread safe | &check; |


