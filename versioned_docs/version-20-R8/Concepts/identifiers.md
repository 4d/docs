---
id: identifiers
title: Identifiers
---

This section describes the conventions and rules for naming various elements in the 4D language (variables, object properties, tables, forms, etc.).

> If non-Roman characters are used in the names of the identifiers, their maximum length may be smaller.

## Arrays

Array names follow the same rules as [variables](#variables).

## Classes

The name of a class can contain up to 31 characters.

A class name must be compliant with standard [property naming rules](#object-properties) for dot notation.

> Giving the same name to a class and a [database table](#tables) is not recommended, in order to prevent any conflict.

## Functions

Function names must be compliant with standard [property naming rules](#object-properties) for dot notation.

> **Tip:** Starting the function name with an underscore character ("_") will exclude the function from the autocompletion features in the 4D code editor.

## Object properties  

The name of an object property (also called object *attribute*) can contain up to 255 characters.

Object properties can reference scalar values, ORDA elements, class functions, other objects, etc. Whatever their nature, object property names must follow the following rules **if you want to use the [dot notation](dt_object.md#object-properties)**:

- A property name must begin with a letter, an underscore, or a dollar "$".
- Thereafter, the name can include any letter, digit, the underscore character ("_"), or the dollar character ("$").
- Property names are case sensitive.

Examples:

```4d
myObject.myAttribute:="10"
$value:=$clientObj.data.address.city
```

:::tip

Starting an object property name with an underscore character ("_") will exclude the property from the autocompletion features in the 4D code editor. For example, if you declare `$o._myPrivateProperty`, it will not be proposed in the code editor when you type in `"$o. "`.

:::

See also [ECMA Script standard](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6).

:::note

If you use **string notation** within square brackets, property names can contain any characters (ex: `myObject["1. First property"]`).

:::


## Parameters

Parameter names must start with a `$` character and follow the same rules as [variable names](#variables).

Examples:

```4d
Function getArea($width : Integer; $height : Integer)-> $area : Integer

#DECLARE ($i : Integer ; $param : Date) -> $myResult : Object
```

## Project methods

The name of a project method name contain up to 31 characters.

- A project method name must begin with a letter, a digit, or an underscore
- Thereafter, the name can include any letter or digit, the underscore character ("_"), or the space character.
- Do not use reserved names, i.e. 4D command names (`Date`, `Time`, etc), keywords (`If`, `For`, etc.), or constant names (`Euro`, `Black`, `Friday`, etc.).
- Project method names are case insensitive.

Examples:

```4d
If(New client)
DELETE DUPLICATED VALUES
APPLY TO SELECTION([Employees];INCREASE SALARIES)
```

**Tip:** It is a good programming technique to adopt the same naming convention as the one used by 4D for built-in methods. Use uppercase characters for naming your methods; however if a method returns a value, capitalize the first character of its name. By doing so, when you reopen a project for maintenance after a few months, you will already know if a method returns a result by simply looking at its name in the Explorer window.

 > When you call a method, you just type its name. However, some 4D built-in commands, such as `ON EVENT CALL`, as well as all plug-in commands, expect the name of a method as a string when a method parameter is passed.

Examples:

```4d
 //This command expects a method (function) or formula
QUERY BY FORMULA([aTable];Special query)
 //This command expects a method (procedure) or statement
APPLY TO SELECTION([Employees];INCREASE SALARIES)
 //But this command expects a method name
ON EVENT CALL("HANDLE EVENTS")
```

## Tables and Fields

You designate a table by placing its name between brackets: \[...]. You designate a field by first specifying the table to which it belongs (the field name immediately follows the table name).

A table name and field name can contain up to 31 characters.

- A table or field name must begin with a letter, an underscore, or a dollar ("$")
- Thereafter, the name can include alphabetic characters, numeric characters, the space character, and the underscore character ("_").
- Do not use reserved names, i.e. 4D command names (`Date`, `Time`, etc), keywords (`If`, `For`, etc.), or constant names (`Euro`, `Black`, `Friday`, etc.).
- Additional rules must be respected when the database must be handled via SQL: only the characters _0123456789abcdefghijklmnopqrstuvwxyz are accepted, and the name must not include any SQL keywords (command, attribute, etc.).

Examples:

```4d
FORM SET INPUT([Clients];"Entry")
ADD RECORD([Letters])
[Orders]Total:=Sum([Line]Amount)
QUERY([Clients];[Clients]Name="Smith")
[Letters]Text:=Capitalize text([Letters]Text)

```

> Giving the same name to a table and a [class](#classes) is not recommended, in order to prevent any conflict.

## Variables

The name of a variable can be up to 31 characters, not including the scope symbols (`$` or `<>`).

- A variable name must begin with a letter, an underscore, or a dollar ("$") for [parameters](parameters.md) and [local variables](variables.md#local-variables), or `<>` for [interprocess variables](variables.md#interprocess-variables) (deprecated).
- Thereafter, the name can include any letter or digit, and the underscore character ("_").
- Do not use reserved names, i.e. 4D command names (`Date`, `Time`, etc), keywords (`If`, `For`, etc.), system variable names (`OK`, `document`...), or constant names (`Euro`, `Black`, `Friday`, etc.).
- Variable names are case insensitive.

Examples:

```4d
For($vlRecord;1;100) //local variable
$vsMyString:="Hello there" //local variable
var $vName; $vJob : Text //local variales
If(bValidate=1) //process variable
<>vlProcessID:=Current process() //interprocess variable
```

### Compatibility

Some naming practices were previously allowed but are no longer supported when the [direct typing mode is enabled](../Project/compiler.md#enabling-direct-typing) (introduced in 4D 20 R7). Enabling this mode will produce syntax errors if:

- a variable name has a digit as first character,
- a variable name contains space characters,
- you declared variables named $0, $1, etc.



## Other names

In the 4D language, several elements have their names handled as strings: **forms**, **form objects**, **named selections**, **processes**, **sets**, **menu bars**, etc.

Such string names can contain up to 255 characters, not including the `$` or `<>` characters (if any).

- String names can contain any characters.
- String names are case insensitive.

Examples:

```4d
DIALOG([Storage];"Note box"+String($vlStage))
OBJECT SET FONT(*;"Binfo";"Times")
USE NAMED SELECTION([Customers];"Closed")//Process Named Selection
USE NAMED SELECTION([Customers];"<>ByZipcode") //Interprocess Named Selection
 //Starting the global process "Add Customers"
$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")
 //Starting the local process "$Follow Mouse Moves"
$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")
CREATE SET([Customers];"Customer Orders")//Process set
USE SET("<>Deleted Records") //Interprocess set
If(Records in set("$Selection"+String($i))>0) //Client set

```
