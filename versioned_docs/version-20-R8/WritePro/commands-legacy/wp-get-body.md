---
id: wp-get-body
title: WP Get body
slug: /WritePro/commands/wp-get-body
displayed_sidebar: docs
---

<!--REF #_command_.WP Get body.Syntax-->**WP Get body** ( *wpDoc* ) : Object<!-- END REF-->
<!--REF #_command_.WP Get body.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Pro document |
| Function result | Object | &#8592; | 4D Write Pro body |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Get body.Summary-->The **WP Get body** command returns the body element of the *wpDoc* 4D Write Pro document.<!-- END REF-->

This element can be passed to the:

* [WP SELECT](wp-select.md) command to select the body of the document.
* [WP Text range](wp-text-range.md) command to define the body as a range.
* [WP SET ATTRIBUTES](../commands/wp-set-attributes.md) and [WP GET ATTRIBUTES](../commands/wp-get-attributes.md) commands to handle the body's attributes.

#### Example 

You want to copy the body of a 4D Write Pro document to another 4D Write Pro document:

```4d
 var $bodySource;$rangeSource;$tempoc;$bodyTarget;$rangeTarget : Object
 
 $bodySource:=WP Get body([TEMPLATES]WPtemplate)
 $rangeSource:=WP Text range($bodySource;wk start text;wk end text)
 $tempoc:=WP New($rangeSource)
 
 $bodyTarget:=WP Get body([Docs]MyWPDoc)
 $rangeTarget:=WP Text range($bodyTarget;wk start text;wk end text)
 
 WP INSERT DOCUMENT($rangeTarget;$tempoc;wk replace)
```

#### See also 

[WP Text range](wp-text-range.md)  