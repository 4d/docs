---
id: php-get-option
title: PHP GET OPTION
displayed_sidebar: docs
---

<!--REF #_command_.PHP GET OPTION.Syntax-->**PHP GET OPTION** ( *option* ; *value* )<!-- END REF-->
<!--REF #_command_.PHP GET OPTION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| option | Longint | -> | Option to get |
| value | Boolean | <-> | Current value of option |

<!-- END REF-->

#### Description 

<!--REF #_command_.PHP GET OPTION.Summary-->The PHP GET OPTION command can be used to find out the current value of an option relating to the execution of PHP scripts.<!-- END REF--> 

Pass a constant from the "[PHP](/4Dv20R6/4D/20-R6/PHP.302-6958466.en.html)" theme in the *option* parameter to designate the option to be read. The command returns the current value of the option in the *value* parameter. 

| Constant       | Type    | Value | Comment                                                                                                                                                                                                                                                                                                                   |
| -------------- | ------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PHP raw result | Longint | 2     | Definition of processing mode for HTTP headers returned by PHP in the execution result when this result is of the Text type (when the result is of the BLOB type, headers are always kept).<br/>**Possible value(s)**: Boolean. False (default value = remove HTTP headers from result. True = keep HTTP headers. |

#### See also 
[PHP GET FULL RESPONSE](php-get-full-response.md)  
[PHP SET OPTION](php-set-option.md)  