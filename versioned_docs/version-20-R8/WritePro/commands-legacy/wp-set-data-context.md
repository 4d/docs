---
id: wp-set-data-context
title: WP SET DATA CONTEXT
slug: /WritePro/commands/wp-set-data-context
displayed_sidebar: docs
---

<!--REF #_command_.WP SET DATA CONTEXT.Syntax-->**WP SET DATA CONTEXT** ( *wpDoc* ; *contextData* )<!-- END REF-->
<!--REF #_command_.WP SET DATA CONTEXT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Pro document |
| contextData | Object | &#8594;  | Data to put in the context |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.WP SET DATA CONTEXT.Summary-->The **WP SET DATA CONTEXT** command sets the *contextData* object as data context of the *wpDoc* 4D Write Pro document.<!-- END REF--> Setting a new context for a document replaces any existing context for that document. 

In *wpDoc*, pass the 4D Write Pro document that will receive the data context. 

In *contextData*, pass an object that determines the contents of the data context. You can pass any type of 4D object, including objects belonging to ORDA classes, such as 4D.Entity. To reset a context, pass a *null* object.

A 4D Write Pro data context is volatile: 

* It can be accessed within a 4D Write Pro document at runtime.
* It is not saved in the 4D Write Pro document, unlike other 4D Write Pro properties.

Once a data context is set, its data is available in the 4D Write Pro area within the current process through the **This.data** formula.

**Note:** Additional formulas are available through **This** when working with table datasources, see *Expressions with This*.

A data context can only be used in the process where it has been defined:

* When you use the data context in computed formulas from a different process, it is *null* and **This.data** is undefined
* If you set a data context that has already been defined for the same document in another process, an error is thrown

In order to compute formulas with different data contexts in different processes (i.e generate different invoices from the same template document), it's recommended to duplicate the document using [WP New](wp-new.md) in each of those processes to avoid any errors. Note that the data context is not copied when you duplicate a document.

#### Example 1 

Insert an object in the 4D Write Pro document's context and display its information on the page: 

```4d
 var $person;$info: Object
 
  // Create person object
 $person:=New object()
 $person.firstName:="John"
 $person.lastName:="Doe"
 
  // Set context using the person object
 WP SET DATA CONTEXT(WParea;$person)
 
  // Access context data with the "This" keyword
 $info:=Formula(This.data.firstName+" "+This.data.lastName)
 
  // Display context data on the page
 WP INSERT FORMULA(WParea;$info;wk replace) // displays "John Doe" on the page.
```

Here's the result:

![](../../assets/en/WritePro/commands/pict5867255.en.png)

#### Example 2 

When working with a template document, you can associate a context with it to fill the page with data. This is useful for mailing campaigns for example. 

Once a template is loaded and the data context is set, a letter template might look like this:

![](../../assets/en/WritePro/commands/pict5867835.en.png)

The following example loops through an entity selection and creates a print preview for each entity:

```4d
 var $person: 4D.Entity
 var $people: 4D.EntitySelection
 
 SET PRINT PREVIEW(True)
 $people:=ds.People.all()
 For each($person;$people)
    WP SET DATA CONTEXT(WParea;$person)
    WP PRINT(WParea)
 End for each
```

#### See also 

[Blog post - ORDA and 4D Write Pro : The power couple!](https://blog.4d.com/orda-and-4d-write-pro-the-power-couple/)  
[WP COMPUTE FORMULAS](wp-compute-formulas.md)  
[WP Get data context](wp-get-data-context.md)  