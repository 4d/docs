---
id: copy-parameters
title: Copy parameters
slug: /commands/copy-parameters
displayed_sidebar: docs
---

<!--REF #_command_.Copy parameters.Syntax-->**Copy parameters** {( *startFrom* )} : Collection<!-- END REF-->
<!--REF #_command_.Copy parameters.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| startFrom | Integer | &#8594;  | Starting index (included) |
| Function result | Collection | &#8592; | New collection containing parameters actually passed |

<!-- END REF-->

#### Description 

<!--REF #_command_.Copy parameters.Summary-->The Copy parameters command returns a new collection containing all parameters actually passed to a method or a function.<!-- END REF--> This command is useful when you need to forward a various number of parameters from a method or function to another method or function. 

In the *startFrom* optional parameter, you can pass the index of the parameter from which to start collecting parameters to forward. The *startFrom* parameter itself is included. 

When called inside a formula, **Copy parameters** returns the parameters passed explicitely using *apply()* or *call()* (and not those passed to the parent method or function). 

**Copy parameters** returns an empty collection if:

* it is not called in a method or function that has been called by another method or function,
* no parameter was passed to the parent method or function.

#### Example 1 

Calling a different function depending on the first parameter and passing other parameters to this function:

```4d
 Function selectTask($task Text)
 Case of
    :($task="Task1")
       This.task1(Copy parameters(2))
    :($task="Task2")
       This.task2(Copy parameters(2))
 End case
```

Or, calling another function on another object with **apply()** and pass the parameters:

```4d
 Function doSomething($param Text;$extraParameters Variant)
 This.delegate.doSomething.apply(This.delegate;Copy parameters)
```

#### Example 2 

Since the command returns a collection, it can be used with **.join()** to build for example a html list:

```4d
  // Class
 
 Function list($typeText)->Text
  //type of list is "u" or "o"
 var $value : Collection
 $value:=Copy parameters(2)
 $html:="<"+$type+"l>
* "  
 $html+=$value.join("
* ")  
 $html+="
"
 return$html
 
  // Method
 
 $htmlList:=$c.list("u";"Alpha";"Bravo";"Charlie")
  // $htmlList = 
* Alpha
* Bravo
* Charlie

```

#### See also 

[Count parameters](count-parameters.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1790 |
| Thread safe | &check; |


