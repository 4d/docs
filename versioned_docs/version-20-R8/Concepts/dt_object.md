---
id: object
title: Object
---

Variables, fields or expressions of the Object type can contain various types of data. The structure of native 4D objects is based on the classic principle of "property/value" pairs. The syntax of these objects is based on JSON notation: 

- A property name is always a text, for example "Name". It must follow [specific rules](identifiers.md#object-properties).

- A property value can be of the following type:
	- number (Real, Integer, etc.)
	- text
	- null
	- boolean
	- pointer (stored as such, evaluated using the `JSON Stringify` command or when copying),
	- date (date type or ISO date format string)
	- object(1) (objects can be nested on several levels)
	- picture(2)
	- collection

(1) **Non-streamable objects** such as ORDA objects ([entities](ORDA/dsMapping.md#entity), [entity selections](ORDA/dsMapping.md#entity-selection), etc.), [file handles](../API/FileHandleClass.md), [web server](../API/WebServerClass.md)... cannot be stored in **object fields**. An error is returned if you try to do it; however, they are fully supported in **object variables** in memory. 

(2) When exposed as text in the debugger or exported to JSON, picture object properties print "[object Picture]". 

:::caution

Keep in mind that property names differentiate between upper and lower case.

:::


You manage Object type variables, fields or expressions using the standard [object notation](#properties) or the commands available in the **Objects (Language)** theme. Note that specific commands of the **Queries** theme such as `QUERY BY ATTRIBUTE`, `QUERY SELECTION BY ATTRIBUTE`, or `ORDER BY ATTRIBUTE` can be used to carry out processing on object fields. 

Each property value accessed through the object notation is considered an expression. You can use such values wherever 4D expressions are expected:

- in 4D code, either written in the methods (Code Editor) or externalized (formulas, 4D tags files processed by `PROCESS 4D TAGS` or the Web Server, export files, 4D Write Pro documents...),
- in the Expression areas of the Debugger and the Runtime explorer,
- in the Property list of the Form editor for form objects: Variable or Expression field as well as various selection list box and columns expressions (Data Source, background color, style, or font color).

## Instantiation 

Objects must have been instantiated, otherwise trying to read or modify their properties will generate a syntax error.

Object instantiation can be done in one of the following ways:

- using the [`New object`](https://doc.4d.com/4dv19R/help/command/en/page1471.html) command,
- using the `{}` operator.

:::info

Several 4D commands and functions return objects, for example [`Database measures`](https://doc.4d.com/4Dv19R7/4D/19-R7/database-measures.301-5945423.en.html) or [`File`](../commands/file.md). In this case, it is not necessary to instantiate explicitely the object, the 4D language does it for you.

:::



### `New object` command

The [`New object`](https://doc.4d.com/4dv19R/help/command/en/page1471.html) command creates a new empty or prefilled object and returns its reference. 

Examples:

```4d
 var $obVar : Object //declaration of an object type 4D variable
 $obVar:=New object //instantiation of an object and assignment to the 4D variable
 
 var $obFilled : Object 
 $obFilled:=New object("name";"Smith";"age";42) //instantiation and assignment of a prefilled object
```


### `{}` operator

The `{}` operator allows you to create an **object literal**. An object literal is a semi-column separated list of zero or more pairs of property names and associated values of an object, enclosed in curly braces (`{}`). The object literal syntax creates empty or filled objects. 

Since any property value is considered an expression, you can create sub-objects using `{}` in property values.  You can also create and reference **collection literals**.

Examples:

```4d
 var $o ; $o2 ; $o3 : Object //declaration of object variables
 $o := {} // instantiation of an empty object 
 $o2 := {a: "foo"; b: 42; c: {}; d: ($toto) ? true : false } // instantiation of an object
 		// with properties {"a":"foo","b":42,"c":{},"d":false})

	// same properties using variables
 var $a : Text
 var $b : Number
 var $c : Object
 $a:="foo"
 $b:=42
 $c:={}
 $o3:={ a: $a; b: $b; c: $c } // {"a":"foo";b":42;"c":{}}

```

You can mix the `New object` and literal syntaxes:

```4d
$o:={\
	ob1: {age: 42}; \
	ob2: New object("message"; "Hello"); \
	form1: Formula(return This.ob1.age+10); \
	form2 : Formula(ALERT($1)); \
	col: [1; 2; 3; 4; 5; 6]\
	}

$o.form1()  //52
$o.form2($o.ob2.message)  // displays Hello
$col:=$o.col[5] //6
```




### Regular or shared object  

You can create two types of objects:

- regular (non-shared) objects, using the [`New object`](https://doc.4d.com/4Dv20/4D/20/New-object.301-6237618.en.html) command or object literal syntax (`{}`). These objects can be edited without any specific access control but cannot be shared between processes. 
- shared objects, using the [`New shared object`](https://doc.4d.com/4Dv20/4D/20/New-shared-object.301-6237617.en.html) command. These objects can be shared between processes, including preemptive threads. Access to these objects is controlled by `Use...End use` structures. 
For more information, refer to the [Shared objects and collections](shared.md) section.



## Properties

You access object property values through a chain of tokens. Object properties can be accessed in two ways:

- using a "dot" symbol:
    > object.propertyName

Example:
```4d
     employee.name:="Smith"
```

- using a string within square brackets:
    > object["propertyName"]

Examples:
```4d
     $vName:=employee["name"]
     //or also:
     $property:="name"
	 $vName:=employee[$property]

```

Since an object property value can be an object or a collection, you can use a sequence of symbols to access sub-properties, for example:

```4d
 $vAge:=employee.children[2].age
```

Object notation is available on any language element that can contains or returns an object, i.e:

- **Objects** themselves (stored in variables, fields, object properties, object arrays, or collection elements).
    Examples:
    
```4d
     $age:=$myObjVar.employee.age //variable
     $addr:=[Emp]data_obj.address //field
     $city:=$addr.city //property of an object
     $pop:=$aObjCountries{2}.population //object array
     $val:=$myCollection[3].subvalue //collection element
```
- **4D commands** that return objects.
    Example:

```4d
     $measures:=Database measures.DB.tables
```
    
- **Project methods** or **Functions** that return objects.
    Example:
    
```4d
      // MyMethod1
     #DECLARE -> $o : Object
     $o:=New object("a";10;"b";20)
     
      //myMethod2
     $result:=MyMethod1.a //10
```

- **Collections**
    Example:
    
```4d
     myColl.length //size of the collection
```


### Null value

When using the objects, the **null** value is supported though the **Null** command. This command can be used to assign or compare the null value to object properties, for example:

```4d
 myObject.address.zip:=Null
 If(myColl[2]=Null)
```

For more information, please refer to [Null and Undefined](dt_null_undefined.md).

### Undefined value

Evaluating an object property can sometimes produce an undefined value. Assigning an undefined value to an existing object property reinitializes or clears its value. Assigning an undefined value to a non existing object property does nothing.

For more information, please refer to [Null and Undefined](dt_null_undefined.md)


### Pointers

**Preliminary Note:** Since objects are always passed by reference, there is usually no need to use pointers. While just passing the object, internally 4D automatically uses a mechanism similar to a pointer, minimizing memory need and allowing you to modify the parameter and to return modifications. As a result, you should not need to use pointers. However, in case you want to use pointers, property values can be accessed through pointers. 

Using object notation with pointers is very similar to using object notation directly with objects, except that the "dot" symbol must be omitted.

- Direct access:
> pointerOnObject->propertyName

- Access by name:
> pointerOnObject->["propertyName"]

Example:

```4d
 var vObj : Object
 var vPtr : Pointer
 vObj:=New object
 vObj.a:=10
 vPtr:=->vObj
 x:=vPtr->a //x=10
```

## Object operators

You can use comparison operators with **object references**, which means that you can evaluate if two or more references point to the same instance of an object. 

```4d
var $o1:={a: 42} //reference to an instance
var $o2:={a: 42} //reference to a different instance
var $o3:=$o1 //reference to the same instance
```

Based upon the code above, the comparison table is: 


|Operation |Syntax |Returns |Expression |Value|
|---|---|---|---|---|
|Equality |objectRef = objectRef |Boolean |$o1 = $o3 |True|
|  | ||$o1 = $o2 |False|
|Inequality |objectRef # objectRef |Boolean |$o1 # $o3 |False|
|   |||$o1 # $o2 |True|



## Resources

Objects use *resources* such a documents, entity locks, and of course, memory. These resources are retained as long as objects need them. Usually, you do not have to worry about them, 4D automatically releases all resources attached to an object when it detects that the object itself is no longer referenced by any variable or other object. 

For instance, when there is no more references to an entity on which you have set a lock with [`$entity.lock()`](../API/EntityClass.md#lock), 4D will free the memory but also automatically release the associated lock, a call to [`$entity.unlock()`](../API/EntityClass.md#unlock) is useless.

If you want to release immediately all resources occupied by an object without having to wait that 4D does it automatically (at the end of the method execution for local variables for example), you just have to **nullify all its references**. For example:

```4d

$doc:=WP Import document("large_novel.4wp")
	... // do something with $doc
$doc:=Null  // free resources occupied by $doc
	... // continue execution with more free memory

```

## Examples

Using object notation simplifies the 4D code while handling objects. Note however that the command-based notation is still fully supported.

- Writing and reading objects (this example compares object notation and command notation):

```4d
  // Using the object notation
 var $myObj : Object //declares a 4D variable object
 $myObj:={} //creates an object literal and assigns it to the variable
 $myObj.age:=56
 $age:=$myObj.age //56
 
  // Using the command notation
 var $myObj2 : Object //declares a 4D variable object
 OB SET($myObj2;"age";42) //creates an object and adds the age property
 $age:=OB Get($myObj2;"age") //42
 
  // Of course, both notations can be mixed
 var $myObj3 : Object
 OB SET($myObj3;"age";10)
 $age:=$myObj3.age //10
```

- Create a property and assign values, including objects:

```4d
 var $Emp : Object
 $Emp:=New object
 $Emp.city:="London" //creates the city property and sets its value to "London"
 $Emp.city:="Paris" //modifies the city property
 $Emp.phone:=New object("office";"123456789";"home";"0011223344")
  //creates the phone property and sets its value to an object
```

- Get a value in a sub-object is very simple using the object notation:

```4d
 $vCity:=$Emp.city //"Paris"
 $vPhone:=$Emp.phone.home //"0011223344"
```

- You can access properties as strings using the `[]` operator 

```4d
 $Emp["city"]:="Berlin" //modifies the city property
  //this can be useful for creating properties through variables
 var $addr : Text
 $addr:="address"
 For($i;1;4)
    $Emp[$addr+String($i)]:=""
 End for
  // creates 4 empty properties "address1...address4" in the $Emp object
```
