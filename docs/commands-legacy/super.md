---
id: super
title: Super
slug: /commands/super
displayed_sidebar: docs
---

<!--REF #_command_.Super.Syntax-->**Super** {( *param* {; *param2* ; ... ; *paramN*} )} -> Function result<!-- END REF-->
<!--REF #_command_.Super.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| param | any | &srarr; | Parameter(s) to pass to the parent constructor |
| Function result | Object | &larr; | Object's parent |

<!-- END REF-->

#### Description 

<!--REF #_command_.Super.Summary-->The **Super** command makes calls to the superclass.<!-- END REF--> 

**Super** has been introduced to serve two different purposes:

* inside a **constructor code**, **Super** is a command that allows to call the constructor of the superclass. When used in a constructor, the **Super** command appears alone and must be used before the [This](this.md) keyword is used.
   * If all class constructors in the inheritance tree are not properly called, error -10748 is generated. It's 4D developer to make sure calls are valid.
   * If the [This](this.md) command is called on an object whose superclasses have not been constructed, error -10743 is generated.
   * If **Super** is called out of an object scope, or on an object whose superclass constructor has already been called, error-10746 is generated.

```4d
  // inside myClass constructor
 var $1;$2 : Text
 Super($1) //calls superclass constructor with a text param
 This.param:=$2 // use second param
```

* inside a **class member function**, **Super** designates the prototype of the superclass and allows to call a function of the superclass hierarchy.

```4d
 Super.doSomething(42) //calls "doSomething" function declared in superclasses
```

#### Example 1 

This example illustrates the use of **Super** in a class constructor. The command is called to avoid duplicating the constructor parts that are common between Rectangle and Square classes.

```4d
  //Class: Rectangle
 
 Class constructor
 var $1;$2 : Integer
 This.name:="Rectangle"
 This.height:=$1
 This.width:=$2
 
 Function sayName
 ALERT("Hi, I am a "+This.name+".")
 
 Function getArea
 var $0 : Integer
 $0:=This.height*This.width
```

```4d
  //Class: Square
 
 Class extends Rectangle
 
 Class constructor
 var $1 : Integer
 
  // It calls the parent class's constructor with lengths
  // provided for the Rectangle's width and height
 Super($1;$1)
 
  // In derived classes, Super must be called before you
  // can use 'This'
 This.name:="Square"
```

#### Example 2 

This example illustrates the use of **Super** in a class member method. 

You created the Rectangle class with a function:

```4d
  //Class: Rectangle
 
 Function nbSides
 var $0 : Text
 $0:="I have 4 sides"
```

You also created the Square class with a function calling the superclass function:

```4d
  //Class: Square
 
 Class extends Rectangle
 
 Function description
 var $0 : Text
 $0:=Super.nbSides()+" which are all equal"
```

Then you can write in a project method:

```4d
 var $square : Object
 var $message : Text
 $square:=cs.Square.new()
 $message:=$square.description() //I have 4 sides which are all equal
```

#### See also 

[cs](cs.md)  
[This](this.md)  