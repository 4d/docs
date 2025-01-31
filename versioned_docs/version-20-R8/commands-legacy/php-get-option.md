---
id: php-get-option
title: PHP GET OPTION
slug: /commands/php-get-option
displayed_sidebar: docs
---

<!--REF #_command_.PHP GET OPTION.Syntax-->**PHP GET OPTION** ( *option* ; *value* )<!-- END REF-->
<!--REF #_command_.PHP GET OPTION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| option | Integer | &#8594;  | Option to get |
| value | Boolean | &#8592; | Current value of option |

<!-- END REF-->

:::info Compatibility

**PHP is deprecated in 4D**. It is now recommended to use the [`4D.SystemWorker class`](../API/SystemWorkerClass.md).

:::


#### Description 

<!--REF #_command_.PHP GET OPTION.Summary-->The PHP GET OPTION command can be used to find out the current value of an option relating to the execution of PHP scripts.<!-- END REF--> 

Pass a constant from the "*PHP*" theme in the *option* parameter to designate the option to be read. The command returns the current value of the option in the *value* parameter. 

| Constant       | Type    | Value | Comment                                                                                                                                                                                                                                                                                                                   |
| -------------- | ------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PHP raw result | Integer | 2     | Definition of processing mode for HTTP headers returned by PHP in the execution result when this result is of the Text type (when the result is of the BLOB type, headers are always kept).<br/>**Possible value(s)**: Boolean. False (default value = remove HTTP headers from result. True = keep HTTP headers. |

#### See also 

[PHP GET FULL RESPONSE](php-get-full-response.md)  
[PHP SET OPTION](php-set-option.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1060 |
| Thread safe | &cross; |


