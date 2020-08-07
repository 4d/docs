---
id: object
title: Objects
---

Variables, fields or expressions of the Object type can contain various types of data. The structure of "native" 4D objects is based on the classic principle of "property/value" pairs. The syntax of these objects is based on JSON notation:

- A property name is always a text, for example "Name".

- A property value can be of the following type:
    - number (Real, Integer, etc.)
    - text
    - null
    - Boolean
    - pointer (stored as such, evaluated using the `JSON Stringify` command or when copying),
    - date (date type or ISO date format string)
    - object (objects can be nested on several levels)
    - picture(*)
    - collection

(*)When exposed as text in the debugger or exported to JSON, picture object properties print "[object Picture]".

**Warning:** Keep in mind that attribute names differentiate between upper and lower case.

You manage Object type variables, fields or expressions using the commands available in the **Objects (Language)** theme or through the object notation (see [Syntax basics](Concepts/dt_object.md#syntax-basics)). Note that specific commands of the Queries theme such as `QUERY BY ATTRIBUTE`, `QUERY SELECTION BY ATTRIBUTE`, or `ORDER BY ATTRIBUTE` can be used to carry out processing on object fields.

Each property value accessed through the object notation is considered an expression. When the object notation is enabled in your database (see below), you can use such values wherever 4D expressions are expected:

- in 4D code, either written in the methods (Method editor) or externalized (formulas, 4D tags files processed by PROCESS 4D TAGS or the Web Server, export files, 4D Write Pro documents...),
- in the Expression areas of the Debugger and the Runtime explorer,
- in the Property list of the Form editor for form objects: Variable or Expression field as well as various selection list box and columns expressions (Data Source, background color, style, or font color).

## Initialization

Objects must have been initialized, for example using the `New object` command, otherwise trying to read or modify their properties will generate a syntax error.

Example:
```4d
 C_OBJECT($obVar) //creation of an object type 4D variable
 $obVar:=New object //initialization of the object and assignment to the 4D variable
```

### Regular or shared object

You can create two types of objects:

- regular (non-shared) objects, using the `New object` command. These objects can be edited without any specific access control but cannot be shared between processes.
- shared objects, using the `New shared object` command. These objects can be shared between processes, including preemptive threads. Access to these objects is controlled by `Use...End use` structures. For more information, refer to the [Shared objects and collections](Concepts/shared.md) section.


## Syntax basics

Object notation can be used to access object property values through a chain of tokens.

### Object properties

With object notation, object properties can be accessed in two ways:

- using a "dot" symbol: > object.propertyName

Example:
```4d
     employee.name:="Smith"
```

- using a string within square brackets: > object["propertyName"]

Examples:
```4d
     $vName:=employee["name"]
     //or also:
     $property:="name"
     $vName:=employee[$property]

```

Since an object property value can be an object or a collection, object notation accepts a sequence of symbols to access sub-properties, for example:
```4d
 $vAge:=employee.children[2].age
```
Object notation is available on any language element that can contains or returns an object, i.e:

- **Objects** themselves (stored in variables, fields, object properties, object arrays, or collection elements). Examples:

```4d
     $age:=$myObjVar.employee.age //variable
     $addr:=[Emp]data_obj.address //field
     $city:=$addr.city //property of an object
     $pop:=$aObjCountries{2}.population //object array
     $val:=$myCollection[3].subvalue //collection element
```
- **4D commands** that return objects. Example:

```4d
     $measures:=Get database measures.DB.tables
```

- **Project methods** that return objects. Example:

```4d
      // MyMethod1
     C_OBJECT($0)
     $0:=New object("a";10;"b";20)

      //myMethod2
     $result:=MyMethod1.a //10
```

- **Collections** Example:

```4d
     myColl.length //size of the collection
```

### Pointers
**Preliminary Note:** Since objects are always passed by reference, there is usually no need to use pointers. While just passing the object, internally 4D automatically uses a mechanism similar to a pointer, minimizing memory need and allowing you to modify the parameter and to return modifications. As a result, you should not need to use pointers. However, in case you want to use pointers, property values can be accessed through pointers.

Using object notation with pointers is very similar to using object notation directly with objects, except that the "dot" symbol must be omitted.

- Direct access:
> pointerOnObject->propertyName

- Access by name:
> pointerOnObject->["propertyName"]

Example:

```4d
 C_OBJECT(vObj)
 C_POINTER(vPtr)
 vObj:=New object
 vObj.a:=10
 vPtr:=->vObj
 x:=vPtr->a //x=10
```

### Null value

When using the object notation, the **null** value is supported though the **Null** command. This command can be used to assign or compare the null value to object properties or collection elements, for example:

```4d
 myObject.address.zip:=Null
 If(myColl[2]=Null)
```

For more information, please refer to the `Null` command description.

### Undefined value

Evaluating an object property can sometimes produce an undefined value. Typically when trying to read or assign undefined expressions, 4D will generate errors. This does not happen in the following cases:

- Reading a property of an undefined object or value returns undefined; assigning an undefined value to variables (except arrays) has the same effect as calling with them:

```4d
     C_OBJECT($o)
     C_LONGINT($val)
     $val:=10 //$val=10
     $val:=$o.a //$o.a is undefined (no error), and assigning this value clears the variable
      //$val=0
```

- Reading the **length** property of an undefined collection produces 0:

```4d
     C_COLLECTION($c) //variable created but no collection is defined
     $size:=$c.length //$size = 0
```

- An undefined value passed as parameter to a project method is automatically converted to 0 or "" according to the declared parameter type.

```4d
     C_OBJECT($o)
     mymethod($o.a) //pass an undefined parameter

      //In mymethod method
     C_TEXT($1) //parameter type is text
      // $1 contains ""
```

- A condition expression is automatically converted to false when evaluating to undefined with the If and Case of keywords:

```4d
     C_OBJECT($o)
     If($o.a) // false
     End if
     Case of
        :($o.a) // false
     End case
```

- Assigning an undefined value to an existing object property reinitializes or clears its value, depending on its type:
 - Object, collection, pointer: Null
 - Picture: Empty picture
 - Boolean: False
 - String: ""
 - Number: 0
 - Date: !00-00-00! if "Use date type instead of ISO date format in objects" setting is enabled, otherwise ""
 - Time: 0 (number of ms)
 - Undefined, Null: no change

```4d
     C_OBJECT($o)
     $o:=New object("a";2)
     $o.a:=$o.b //$o.a=0
```

- Assigning an undefined value to a non existing object property does nothing.

When expressions of a given type are expected in your 4D code, you can make sure they have the correct type even when evaluated to undefined by surrounding them with the appropriate 4D cast command: `String`, `Num`, `Date`, `Time`, `Bool`. These commands return an empty value of the specified type when the expression evaluates to undefined. For example:

```4d
 $myString:=Lowercase(String($o.a.b)) //make sure you get a string value even if undefined
  //to avoid errors in the code
```

## Object property identifiers

Token member names (i.e., object property names accessed using the object notation) are more restrictive than standard 4D object names. They must comply with JavaScript Identifier Grammar (see [ECMA Script standard](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6)):

- the first character must be a letter, an underscore (_), or a dollar sign ($),
- subsequent characters may be any letter, digit, an underscore or dollar sign (space characters are NOT allowed),
- they are case sensitive.

**Note:**

- Using a table field as a collection index, for example a.b[[Table1]Id], is not allowed. You must use an intermediary variable.
- Creating object attributes using a string in square brackets allows you to override the ECMA Script rules. For example, the $o["My Att"] attribute is valid in 4D, despite the space. In this case, however, it will not be possible to use dot notation with this attribute.


## Examples
Using object notation simplifies the 4D code while handling objects. Note however that the command-based notation is still fully supported.

- Writing and reading objects (this example compares object notation and command notation):

```4d
  // Using the object notation
 C_OBJECT($myObj) //declares a 4D variable object
 $myObj:=New object //creates an object and assigns to the variable
 $myObj.age:=56
 $age:=$myObj.age //56

  // Using the command notation
 C_OBJECT($myObj2) //declares a 4D variable object
 OB SET($myObj2;"age";42) //creates an object and adds the age property
 $age:=OB Get($myObj2;"age") //42

  // Of course, both notations can be mixed
 C_OBJECT($myObj3)
 OB SET($myObj3;"age";10)
 $age:=$myObj3.age //10
```

- Create a property and assign values, including objects:

```4d
 C_OBJECT($Emp)
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
- You can access properties as strings using the [ ] operator

```4d
 $Emp["city"]:="Berlin" //modifies the city property
  //this can be useful for creating properties through variables
 C_TEXT($addr)
 $addr:="address"
 For($i;1;4)
    $Emp[$addr+String($i)]:=""
 End for
  // creates 4 empty properties "address1...address4" in the $Emp object
```
