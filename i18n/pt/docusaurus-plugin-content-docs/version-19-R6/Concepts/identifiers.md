---
id: identifiers
title: Identificadores
---

This section describes the conventions and rules for naming various elements in the 4D language (variables, object properties, tables, forms, etc.).

> If non-Roman characters are used in the names of the identifiers, their maximum length may be smaller.

## Arrays

Array names follow the same rules as [variables](#variables).

## Classes

The name of a class can contain up to 31 characters.

A class name must be compliant with standard [property naming rules](#object-properties) for dot notation.

> Giving the same name to a class and a [database table](#tables) is not recommended, in order to prevent any conflict.

## Funções

Function names must be compliant with standard [property naming rules](#object-properties) for dot notation.

> **Tip:** Starting the function name with an underscore character ("_") will exclude the function from the autocompletion features in the 4D code editor.

## Propriedades dos objectos

The name of an object property (also called object *attribute*) can contain up to 255 characters.

Object properties can reference scalar values, ORDA elements, class functions, other objects, etc. Object properties can reference scalar values, ORDA elements, class functions, other objects, etc. Whatever their nature, object property names must follow the following rules **if you want to use the [dot notation](dt_object.md#object-properties)**:

- A property name must begin with a letter, an underscore, or a dollar "$".
- Thereafter, the name can include any letter, digit, the underscore character ("_"), or the dollar character ("$").
- Property names are case sensitive.

Exemplos:

```4d
myObject.myAttribute:="10"
$value:=$clientObj.data.address.city
```

> If you use **string notation** within square brackets, property names can contain any characters (ex: `myObject["1. First property"]`).

See also [ECMA Script standard](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6).

## Parâmetros

Parameter names must start with a `$` character and follow the same rules as [variable names](#variables).

Exemplos:

```4d
Function getArea($width : Integer; $height : Integer)-> $area : Integer

#DECLARE ($i : Integer ; $param : Date) -> $myResult : Object
```

## Métodos projeto

The name of a project method name contain up to 31 characters.

- A project method name must begin with a letter, a digit, or an underscore
- Thereafter, the name can include any letter or digit, the underscore character ("_"), or the space character.
- Do not use reserved names, i.e. 4D command names (`Date`, `Time`, etc), keywords (`If`, `For`, etc.), or constant names (`Euro`, `Black`, `Friday`, etc.).
- Project method names are case insensitive.

Exemplos:

```4d
If(New client)
DELETE DUPLICATED VALUES APPLY TO SELECTION([Employees];INCREASE SALARIES)
```

**Dica:** é uma boa técnica de programação adotar a mesma convenção de nomenclatura que a utilizada por 4D para os métodos integrados. Use uppercase characters for naming your methods; however if a method returns a value, capitalize the first character of its name. By doing so, when you reopen a project for maintenance after a few months, you will already know if a method returns a result by simply looking at its name in the Explorer window.

 > Quando chamar um método, apenas digite seu nome. However, some 4D built-in commands, such as `ON EVENT CALL`, as well as all plug-in commands, expect the name of a method as a string when a method parameter is passed.

Exemplos:

```4d
 //This command expects a method (function) or formula QUERY BY FORMULA([aTable];Special query)
 //This command expects a method (procedure) or statement APPLY TO SELECTION([Employees];INCREASE SALARIES)
 //But this command expects a method name ON EVENT CALL("HANDLE EVENTS")
```

## Tables and Fields

You designate a table by placing its name between brackets: \[...]. You designate a field by first specifying the table to which it belongs (the field name immediately follows the table name).

A table name and field name can contain up to 31 characters.

- A table or field name must begin with a letter, an underscore, or a dollar ("$")
- Depois disso, o nome pode incluir caracteres alfabéticos, numéricos, o caractere espaço e o caractere de sublinhado/traço baixo ("_") .
- Do not use reserved names, i.e. 4D command names (`Date`, `Time`, etc), keywords (`If`, `For`, etc.), or constant names (`Euro`, `Black`, `Friday`, etc.).
- Additional rules must be respected when the database must be handled via SQL: only the characters _0123456789abcdefghijklmnopqrstuvwxyz are accepted, and the name must not include any SQL keywords (command, attribute, etc.).

Exemplos:

```4d
FORM SET INPUT([Clients];"Entry")
ADD RECORD([Letters])
[Orders]Total:=Sum([Line]Amount)
QUERY([Clients];[Clients]Name="Smith")
[Letters]Text:=Capitalize text([Letters]Text)

```

> Giving the same name to a table and a [class](#classes) is not recommended, in order to prevent any conflict.

## Variáveis

The name of a variable can be up to 31 characters, not including the scope symbols (`$` or `<>`).

- A variable name must begin with a letter, an underscore, or a dollar ("$") for [parameters](parameters.md) and [local variables](variables.md#local-variables), or `<>` for [interprocess variables](variables.md#interprocess-variables).
- A digit as first character is allowed but not recommended, and is not supported by the [`var` declaration syntax](variables.md#using-the-var-keyword).
- Thereafter, the name can include any letter or digit, and the underscore character ("_").
- Space character is allowed but not recommended, and is not supported by the [`var` declaration syntax](variables.md#using-the-var-keyword).
- Do not use reserved names, i.e. 4D command names (`Date`, `Time`, etc), keywords (`If`, `For`, etc.), or constant names (`Euro`, `Black`, `Friday`, etc.).
- Variable names are case insensitive.

Exemplos:

```4d
For($vlRecord;1;100) //local variable
$vsMyString:="Hello there" //local variable
var $vName; $vJob : Text //local variales If(bValidate=1) //process variable
<>vlProcessID:=Current process() //interprocess variable
```

## Outros nomes

In the 4D language, several elements have their names handled as strings: **forms**, **form objects**, **named selections**, **processes**, **sets**, **menu bars**, etc.

Such string names can contain up to 255 characters, not including the `$` or `<>` characters (if any).

- String names can contain any characters.
- String names are case insensitive.

Exemplos:

```4d
DIALOG([Storage];"Note box"+String($vlStage))
OBJECT SET FONT(*;"Binfo";"Times")
USE NAMED SELECTION([Customers];"Closed")//Process Named Selection USE NAMED SELECTION([Customers];"<>ByZipcode") //Interprocess Named Selection
 //Starting the global process "Add Customers"
$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")
 //Starting the local process "$Follow Mouse Moves"
$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")
CREATE SET([Customers];"Customer Orders")//Process set USE SET("<>Deleted Records") //Interprocess set If(Records in set("$Selection"+String($i))>0) //Client set

```
