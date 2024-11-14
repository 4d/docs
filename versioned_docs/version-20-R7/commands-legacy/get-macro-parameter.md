---
id: get-macro-parameter
title: GET MACRO PARAMETER
slug: /commands/get-macro-parameter
displayed_sidebar: docs
---

<!--REF #_command_.GET MACRO PARAMETER.Syntax-->**GET MACRO PARAMETER** ( *selector* ; *textParam* )<!-- END REF-->
<!--REF #_command_.GET MACRO PARAMETER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| selector | Integer | &#8594;  | Selection to use |
| textParam | Text | &#8592; | Returned text |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.GET MACRO PARAMETER.Summary-->The **GET MACRO PARAMETER** command returns, in the *paramText* parameter, all or part of the text of the method from which it was called.<!-- END REF-->

The *selector* parameter can be used to set the type of information to be returned. You can pass one of the following constants, added to the “*4D Environment*” theme:

| Constant                | Type    | Value |
| ----------------------- | ------- | ----- |
| Full method text        | Integer | 1     |
| Highlighted method text | Integer | 2     |

If you pass Full method text in *selector*, all of the text of the method will be returned in *paramText*. If you pass Highlighted method text in *selector*, only the text selected in the method will be returned in *paramText*.

#### Example 

Refer to the example of the [SET MACRO PARAMETER](set-macro-parameter.md) command.

#### See also 

[SET MACRO PARAMETER](set-macro-parameter.md)  