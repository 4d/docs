---
id: php-set-option
title: PHP SET OPTION
slug: /commands/php-set-option
displayed_sidebar: docs
---

<!--REF #_command_.PHP SET OPTION.Syntax-->**PHP SET OPTION** ( *option* ; *value* {; *} )<!-- END REF-->
<!--REF #_command_.PHP SET OPTION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| option | Integer | &#8594;  | Option to be set |
| value | Boolean | &#8594;  | New value of option |
| * | Operator | &#8594;  | If passed: modification only applied to next call |

<!-- END REF-->

:::info Compatibility

**PHP is deprecated in 4D**. It is now recommended to use the [`4D.SystemWorker class`](../API/SystemWorkerClass.md).

:::

#### Description 

<!--REF #_command_.PHP SET OPTION.Summary-->The **PHP SET OPTION** command is used to set specific options before calling the [PHP Execute](php-execute.md) command.<!-- END REF--> The scope of this command is the current process. 

Pass a constant from the "*PHP*" theme in the *option* parameter to designate the option to be modified and pass the new value for the option in the *value* parameter. 

| Constant       | Type    | Value | Comment                                                                                                                                                                                                                                                                                                                   |
| -------------- | ------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PHP raw result | Integer | 2     | Definition of processing mode for HTTP headers returned by PHP in the execution result when this result is of the Text type (when the result is of the BLOB type, headers are always kept).<br/>**Possible value(s)**: Boolean. False (default value = remove HTTP headers from result. True = keep HTTP headers. |

By default, **PHP SET OPTION** sets the option for all subsequent calls to [PHP Execute](php-execute.md) of the process. If you want to set it for the next call only, pass the star (*\**) parameter.

#### See also 

[PHP Execute](php-execute.md)  
[PHP GET OPTION](php-get-option.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1059 |
| Thread safe | &cross; |


