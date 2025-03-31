---
id: web-service-get-info
title: WEB SERVICE Get info
slug: /commands/web-service-get-info
displayed_sidebar: docs
---

<!--REF #_command_.WEB SERVICE Get info.Syntax-->**WEB SERVICE Get info** ( *infoType* ) : Text<!-- END REF-->
<!--REF #_command_.WEB SERVICE Get info.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| infoType | Integer | &#8594;  | Information to be retrieved |
| Function result | Text | &#8592; | Information about the last SOAP error |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB SERVICE Get info.Summary-->The **WEB SERVICE Get info** command returns information about any error generated during the execution of the last SOAP request sent to a remote Web Service.<!-- END REF--> This command should generally be called within an error-handling method installed by the [ON ERR CALL](on-err-call.md) command.

The *infoType* parameter allows you to indicate the type of information that you want to obtain. You must pass one of the constants listed below, located in the *Web Services (Client)* theme:

| Constant                     | Type    | Value | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------- | ------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Web Service detailed message | Integer | 1     | Detailed message describing the error. The type of message differs according to the main error type. <br/>- If the main error = 9910 (Soap fault): the cause of the SOAP fault is returned (e.g.: “the remote method does not exist”).<br/>- If the main error = 9911 (Parser fault): the location of the error in the XML document is returned.<br/>- If the main error = 9912 (HTTP fault):<br/>- if the HTTP error is located in the interval \[300-400\] (problems linked to the location of the requested document), the new location of the requested URL is returned. <br/>- for any other HTTP error code, the <body> is returned. <br/>- If the main error = 9913 (Network fault): the cause of the network fault is returned (e.g.: “ServerAddress: DNS lookup failure”)<br/>- If the main error = 9914 (Internal fault): the cause of the internal fault is returned |
| Web Service error code       | Integer | 0     | Main error code (defined by 4D). This code is also returned in the Error system variable.<br/>List of codes that may be returned:<br/>9910: Soap fault (see also Web Service Fault Actor)<br/>9911: Parser fault<br/>9912: HTTP fault (see also Web Service HTTP Error code)<br/>9913: Network fault<br/>9914: Internal fault.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Web Service fault actor      | Integer | 3     | Cause of the error (returned by the SOAP protocol — to be used in the case of main error 9910).<br/>- Version Mismatch<br/>- Must Understand (the server was unable to interpret a parameter defined as mandatory)<br/>- Sender Fault<br/>- Receiver Fault<br/>- Encoding Unknown                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Web Service HTTP status code | Integer | 2     | HTTP error code (to be used in case of main error 9912).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

An empty string is returned when no information is available, more particularly when the last SOAP request did not generate any errors.


#### Properties

|  |  |
| --- | --- |
| Command number | 780 |
| Thread safe | &check; |


