---
id: soap-send-fault
title: SOAP SEND FAULT
slug: /commands/soap-send-fault
displayed_sidebar: docs
---

<!--REF #_command_.SOAP SEND FAULT.Syntax-->**SOAP SEND FAULT** ( *faultType* ; *description* )<!-- END REF-->
<!--REF #_command_.SOAP SEND FAULT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| faultType | Integer | &#8594;  | 1 = Client fault, 2 = Server fault |
| description | Text | &#8594;  | Description of error to be sent to SOAP client |

<!-- END REF-->

#### Description 

<!--REF #_command_.SOAP SEND FAULT.Summary-->The **SOAP SEND FAULT** command returns an error to a SOAP client indicating the origin of the fault: client or server.<!-- END REF--> Using this command lets you indicate an error to a client without having to return a result. 

For instance, a fault on the client side may be detected when you publish a “Square\_root” Web Service and a client sends a request with a negative number; you can use this command to indicate to the client that a positive value is required. 

A possible fault on the server side may be, for instance, a lack of memory occurring during method execution. 

Pass the origin of the error in *faultType*. You can use the following predefined constants, located in the *Web Services (Server)* theme:

| Constant          | Type    | Value |
| ----------------- | ------- | ----- |
| SOAP client fault | Integer | 1     |
| SOAP server fault | Integer | 2     |

Pass a description of the error in *description*. If the client implementation is in conformity, the error can be processed. 

#### Example 

To go back to the example of the “Square\_root” Web Service provided in the command description, the following command can be used to process requests with negative numbers:

```4d
 SEND SOAP FAULT(SOAP client fault;"Positive values required")
```

#### See also 

[SOAP DECLARATION](soap-declaration.md)  
[SOAP Get info](soap-get-info.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 781 |
| Thread safe | &check; |


