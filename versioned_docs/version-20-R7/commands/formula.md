---
id: formula
title: Formula
slug: /commands/formula
displayed_sidebar: docs
---

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17 R6|Renamed (New formula -> Formula)|
|17 R3|Added|

</details>

<!-- REF #_command_.Formula.Syntax -->**Formula** ( *formulaExp* : Expression ) : 4D.Function<!-- END REF -->


<!-- REF #_command_.Formula.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|formulaExp|Expression|&#8594; |Formula to be returned as object|
|Result|4D.Function|&#8592;|Native function encapsulating the formula|
<!-- END REF -->


#### Description

The `Formula` command <!-- REF #_command_.Formula.Summary -->creates a `4D Function` object based upon the *formulaExp* expression<!-- END REF -->. *formulaExp* can be as simple as a single value or complex, such as a project method with parameters.

Having a formula as an object allows it to be passed as a parameter (calculated attribute) to commands or methods or to be executed from various components without needing to declare them as "shared by components and host database". When called, the formula object is evaluated within the context of the database or component that created it.

The returned formula can be called with:

*	[`.call()`](#call) or [`.apply()`](#apply) methods, or
*	object notation syntax (see [formula object](#formula-object)).

```4d
 var $f : 4D.Function
 $f:=Formula(1+2)
 $o:=New object("myFormula";$f)

  //three different ways to call the formula
 $f.call($o) //returns 3
 $f.apply($o) //returns 3
 $o.myFormula() //returns 3
```

You can pass [parameters](#passing-parameters) to the `Formula`, as seen below in [example 4](#example-4).

You can specify the object on which the formula is executed, as seen in [example 5](#example-5). The properties of the object can then be accessed via the `This` command.

If *formulaExp* uses local variables, their values are copied and stored in the returned formula object when it is created. When executed, the formula uses these copied values rather than the current value of the local variables. Note that using arrays as local variables is not supported.

The object created by `Formula` can be saved, for example, in a database field or in a blob document.


#### Example 1

A simple formula:

```4d
 var $f : 4D.Function
 $f:=Formula(1+2)

 var $o : Object
 $o:=New object("f";$f)

 $result:=$o.f() // returns 3
```

#### Example 2

A formula using local variables:

```4d


 $value:=10
 $o:=New object("f";Formula($value))
 $value:=20

 $result:=$o.f() // returns 10
```


#### Example 3

A simple formula using parameters:

```4d
 $o:=New object("f";Formula($1+$2))
 $result:=$o.f(10;20) //returns 30
```


#### Example 4

A formula using a project method with parameters:

```4d
 $o:=New object("f";Formula(myMethod))
 $result:=$o.f("param1";"param2") // equivalent to $result:=myMethod("param1";"param2")
```


#### Example 5

Using `This`:

```4d
 $o:=New object("fullName";Formula(This.firstName+" "+This.lastName))
 $o.firstName:="John"
 $o.lastName:="Smith"
 $result:=$o.fullName() //returns "John Smith"
```

#### Example 6

Calling a formula using object notation:

```4d
 var $feta; $robot : Object
 var $calc : 4D.Function
 $robot:=New object("name";"Robot";"price";543;"quantity";2)
 $feta:=New object("name";"Feta";"price";12.5;"quantity";5)

 $calc:=Formula(This.total:=This.price*This.quantity)

  //sets the formula to object properties
 $feta.calc:=$calc
 $robot.calc:=$calc

  //call the formula
 $feta.calc() // $feta={name:Feta,price:12.5,quantity:5,total:62.5,calc:"[object Formula]"}
 $robot.calc() // $robot={name:Robot,price:543,quantity:2,total:1086,calc:"[object Formula]"}
```


#### See also 

[4D Blog - Formula: More power behind simplicity](https://blog.4d.com/new-formula-more-power-behind-simplicity/)  
[4D Blog - Formula: Think outside the box](https://blog.4d.com/new-formula-think-outside-the-box/)  
[4D Blog - Write your own methods for objects](https://blog.4d.com/write-your-own-methods-for-objects/)  
[Formula from string](formula-from-string.md)  



#### Properties
|  |  |
| --- | --- |
| Command number | 1597 |
| Thread safe | &check; |
| Forbidden on the server ||


