---
id: php-set-option
title: PHP SET OPTION
slug: /commands-legacy/php-set-option
displayed_sidebar: docs
---

<!--REF #_command_.PHP SET OPTION.Syntax-->**PHP SET OPTION** ( *option* ; *value* {; *} )<!-- END REF-->
<!--REF #_command_.PHP SET OPTION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| option | Longint | &#x1F852; | Option to be set |
| value | Boolean | &#x1F852; | New value of option |
| * | Operator | &#x1F852; | If passed: modification only applied to next call |

<!-- END REF-->

#### Description 

<!--REF #_command_.PHP SET OPTION.Summary-->The **PHP SET OPTION** command is used to set specific options before calling the [PHP Execute](php-execute.md) command.<!-- END REF--> The scope of this command is the current process. 

Pass a constant from the "*PHP*" theme in the *option* parameter to designate the option to be modified and pass the new value for the option in the *value* parameter. 

| Constant       | Type    | Value | Comment                                                                                                                                                                                                                                                                                                                   |
| -------------- | ------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PHP raw result | Longint | 2     | Definition of processing mode for HTTP headers returned by PHP in the execution result when this result is of the Text type (when the result is of the BLOB type, headers are always kept).<br/>**Possible value(s)**: Boolean. False (default value = remove HTTP headers from result. True = keep HTTP headers. |

By default, **PHP SET OPTION** sets the option for all subsequent calls to [PHP Execute](php-execute.md) of the process. If you want to set it for the next call only, pass the star (*\**) parameter.

#### See also 

[PHP Execute](php-execute.md)  
[PHP GET OPTION](php-get-option.md)  