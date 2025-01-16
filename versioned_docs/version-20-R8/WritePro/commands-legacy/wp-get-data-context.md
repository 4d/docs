---
id: wp-get-data-context
title: WP Get data context
slug: /WritePro/commands/wp-get-data-context
displayed_sidebar: docs
---

<!--REF #_command_.WP Get data context.Syntax-->**WP Get data context** ( *wpDoc* ) : Object<!-- END REF-->
<!--REF #_command_.WP Get data context.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Pro document |
| Function result | Object | &#8592; | Data context object |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.WP Get data context.Summary-->The **WP Get data context** command returns the data context of the wpDoc document.<!-- END REF--> Data contexts are defined using the [WP SET DATA CONTEXT](wp-set-data-context.md) command.

In *wpDoc*, pass the 4D Write Pro document whose data context you want to get.

#### Example 

You can get a data context from a document and reuse it in another method within the same process.

The following method sets a data context: 

```4d
  // method1
 var $person: Object
 var $wpArea : Object
 
 $wpArea:=WP New()
 
  // Create person object
 $person:=New object()
 $person.firstName:="John"
 $person.lastName:="Doe"
 
  // Set context using the person object
 WP SET DATA CONTEXT($wpArea;$person)
 
 method2($wpArea) //call the other method
```

method2 might look something like:

```4d
  //method2
 #DECLARE($document Object)
 var $context : Object
 
 $context:=WP Get data context($document)
 ALERT(JSON Stringify($context)) // Displays {"firstName":"John","lastName":"Doe"}
```

#### See also 

[Blog post - ORDA and 4D Write Pro : The power couple!](https://blog.4d.com/orda-and-4d-write-pro-the-power-couple/)  
[WP SET DATA CONTEXT](wp-set-data-context.md)  