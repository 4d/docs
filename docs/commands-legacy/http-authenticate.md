---
id: http-authenticate
title: HTTP AUTHENTICATE
slug: /commands/http-authenticate
displayed_sidebar: docs
---

<!--REF #_command_.HTTP AUTHENTICATE.Syntax-->**HTTP AUTHENTICATE** ( *name* ; *password* {; *authMethod*} {; *} )<!-- END REF-->
<!--REF #_command_.HTTP AUTHENTICATE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| name | Text | &#8594;  | User name |
| password | Text | &#8594;  | User password |
| authMethod | Integer | &#8594;  | Authentication method: 0 or omitted=not specified, 1=BASIC, 2=DIGEST |
| * | Operator | &#8594;  | If passed: authentication by proxy |

<!-- END REF-->


:::info Compatibility

This command is maintained for compatibility reasons only. It is now recommended to use the [`4D.HTTPRequest class`](../API/HTTPRequestClass.md).

:::

#### Description 

<!--REF #_command_.HTTP AUTHENTICATE.Summary-->The **HTTP AUTHENTICATE** command enables HTTP requests to servers requiring authentication of the client application.<!-- END REF--> The BASIC and DIGEST methods are supported, as well as the presence of a proxy.

In the *name* and *password* parameters, you pass the id information required (user name and password). This information is encoded and added to the next HTTP request sent using the [HTTP Request](http-request.md) or [HTTP Get](http-get.md) command, so you need to call the **HTTP AUTHENTICATE** command before each HTTP request.

The optional *authMethod* parameter indicates the authentication method to use. You pass one of the following constants, found in the *HTTP Client* theme:

| Constant    | Type    | Value | Comment                          |
| ----------- | ------- | ----- | -------------------------------- |
| HTTP basic  | Integer | 1     | Use BASIC authentication method  |
| HTTP digest | Integer | 2     | Use DIGEST authentication method |

If you omit the *authMethod* parameter (or pass 0), you let the program choose the appropriate method to use. In this case, 4D sends an additional request in order to negotiate the authentication method.

If you pass the *\** parameter, this indicates that the authentication information is intended for an HTTP proxy. This setting must be implemented when there is a proxy requiring authentication between the client and the HTTP server. If the server itself is authenticated, a double authentication is necessary.

By default, authentication information is stored temporarily and reused for each request in the current process. However, it is possible to reset this information after each request using an option set by the [HTTP SET OPTION](http-set-option.md) command. In this case, you will have to execute the **HTTP AUTHENTICATE** command before each call to [HTTP Request](http-request.md) or [HTTP Get](http-get.md).

#### Example 

Examples of requests with authentication:

```4d
  // Authentication on HTTP server in DIGEST mode
 HTTP AUTHENTICATE("httpUser";"123";2)
  // Authentication on proxy in default mode
 HTTP AUTHENTICATE("ProxyUser";"456";*)
 $httpStatus:=HTTP Get(...)
```

#### See also 

[HTTP SET OPTION](http-set-option.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1161 |
| Thread safe | &check; |
| Forbidden on the server ||


