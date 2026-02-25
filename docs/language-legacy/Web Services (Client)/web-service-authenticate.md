---
id: web-service-authenticate
title: WEB SERVICE AUTHENTICATE
slug: /commands/web-service-authenticate
displayed_sidebar: docs
---

<!--REF #_command_.WEB SERVICE AUTHENTICATE.Syntax-->**WEB SERVICE AUTHENTICATE** ( *name* : Text ; *password* : Text {; *authMethod* : Integer} {; *} )<!-- END REF-->
<!--REF #_command_.WEB SERVICE AUTHENTICATE.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| name | Text | &#8594;  | User name |
| password | Text | &#8594;  | User password |
| authMethod | Integer | &#8594;  | Authentication method 0 or omitted = not specified, 1 = BASIC, 2 = DIGEST |
| * | Operator | &#8594;  | If passed: authentication by proxy |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|13|Renamed|
|11 SQL Release 3|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.WEB SERVICE AUTHENTICATE.Summary-->The **WEB SERVICE AUTHENTICATE** command enables the use of Web Services requiring authentication of the client application (simple authentication).<!-- END REF--> The BASIC and DIGEST methods are supported, as well as the presence of a proxy.

**Note:** For more information about the BASIC and DIGEST authentication methods, refer to the *Connection Security* section. 

In the *name* and *password* parameters, pass the required identification information (user name and password). This information will be encoded and added to the HTTP request sent to the Web Service using the [WEB SERVICE CALL](../commands/web-service-call) command. It is thus necessary to call the **WEB SERVICE AUTHENTICATE** command before calling the [WEB SERVICE CALL](../commands/web-service-call) command.  

The optional *authMethod* parameter indicate the authentication method to be used for the next call to the [WEB SERVICE CALL](../commands/web-service-call) command. You can pass one of the following values:

* 2 = use the DIGEST authentication method
* 1 = use the BASIC authentication method
* 0 (or parameter omitted) = use the appropriate method. In this case, 4D sends an additional request in order to negotiate the authentication method.

If you pass the *\** parameter, you indicate that the authentication information is to be sent to an HTTP proxy. This configuration must be implemented when there is a proxy that requires authentication between the Web Service client and the Web Service itself. If the Web Service is itself authenticated, a double authentication is required (see the example). 

By default, the authentication information is reset to zero after each request. Therefore, you must use the **WEB SERVICE AUTHENTICATE** command before each [WEB SERVICE CALL](../commands/web-service-call) command. It is nevertheless possible to keep this information temporarily using an option of the [WEB SERVICE SET OPTION](../commands/web-service-set-option) command. In this case, it is not necessary to execute the **WEB SERVICE AUTHENTICATE** command before each [WEB SERVICE CALL](../commands/web-service-call) command.

If authentication fails, the SOAP server returns an error that you can identify using the [WEB SERVICE Get info](../commands/web-service-get-info) command.

## Example 

Authentication with a Web Service located behind a proxy:

```4d
  // Authentication to Web Service in DIGEST mode
 WEB SERVICE AUTHENTICATE("SoapUser";"123";2)
  // Authentication to proxy in default mode
 WEB SERVICE AUTHENTICATE("ProxyUser";"456";*)
 WEB SERVICE CALL(...)
```

## See also 

[WEB SERVICE CALL](../commands/web-service-call)  
[WEB SERVICE Get info](../commands/web-service-get-info)  

## Properties

|  |  |
| --- | --- |
| Command number | 786 |
| Thread safe | yes |


