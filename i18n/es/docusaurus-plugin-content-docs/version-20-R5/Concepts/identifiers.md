---
id: identifiers
title: Identificadores
---

Esta sección describe las convenciones y reglas para nombrar los distintos elementos del lenguaje 4D (variables, propiedades objeto, tablas, formularios, etc.).

> Si se utilizan caracteres no romanos en los nombres de los identificadores, su longitud máxima puede ser menor.

## Arrays

Array names follow the same rules as [variables](#variables).

## Clases

El nombre de una clase puede contener hasta 31 caracteres.

A class name must be compliant with standard [property naming rules](#object-properties) for dot notation.

> Giving the same name to a class and a [database table](#tables) is not recommended, in order to prevent any conflict.

## Funciones

Function names must be compliant with standard [property naming rules](#object-properties) for dot notation.

> **Tip:** Starting the function name with an underscore character ("_") will exclude the function from the autocompletion features in the 4D code editor.

## Propiedades de los objetos

The name of an object property (also called object _attribute_) can contain up to 255 characters.

Las propiedades de los objetos pueden hacer referencia a valores escalares, elementos ORDA, funciones de clase, otros objetos, etc. Whatever their nature, object property names must follow the following rules **if you want to use the [dot notation](dt_object.md#object-properties)**:

- El nombre de una propiedad debe comenzar con una letra, un guión bajo o un dólar "$".
- A partir de ahí, el nombre puede incluir cualquier letra, dígito, el caracter de subrayado ("_"), o el caracter de dólar ("$").
- Los nombres de propiedades son sensibles a las mayúsculas y minúsculas.

Ejemplos:

```4d
myObject.myAttribute:="10"
$value:=$clientObj.data.address.city
```

:::tip

Comenzar el nombre de una propiedad objeto con un carácter de subrayado ("_") excluirá la propiedad de las características de autocompletado en el editor de código de 4D. For example, if you declare `$o._myPrivateProperty`, it will not be proposed in the code editor when you type in `"$o. "`.

:::

See also [ECMA Script standard](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6).

:::note

If you use **string notation** within square brackets, property names can contain any characters (ex: `myObject["1. First property"]`).

:::

## Parámetros

Parameter names must start with a `$` character and follow the same rules as [variable names](#variables).

Ejemplos:

```4d
Function getArea($width : Integer; $height : Integer)-> $area : Integer

#DECLARE ($i : Integer ; $param : Date) -> $myResult : Object
```

## Métodos proyecto

El nombre de un método proyecto puede contener hasta 31 caracteres.

- Un nombre de método proyecto debe comenzar por una letra, un dígito o un guión bajo
- A partir de ahí, el nombre puede incluir cualquier letra o dígito, el caracter de subrayado ("_"), o el caracter de espacio.
- Do not use reserved names, i.e. 4D command names (`Date`, `Time`, etc), keywords (`If`, `For`, etc.), or constant names (`Euro`, `Black`, `Friday`, etc.).
- Los nombres de métodos proyecto son sensibles a las mayúsculas y minúsculas.

Ejemplos:

```4d
If(New client)
DELETE DUPLICATED VALUES
APPLY TO SELECTION([Employees];INCREASE SALARIES)
```

**Tip:** It is a good programming technique to adopt the same naming convention as the one used by 4D for built-in methods. Utilice mayúsculas para nombrar sus métodos; sin embargo, si un método devuelve un valor, ponga en mayúscula el primer carácter de su nombre. De este modo, cuando vuelva a abrir un proyecto para su mantenimiento después de unos meses, ya sabrá si un método devuelve un resultado simplemente mirando su nombre en la ventana del Explorador.

> Cuando se llama a un método, sólo hay que escribir su nombre. However, some 4D built-in commands, such as `ON EVENT CALL`, as well as all plug-in commands, expect the name of a method as a string when a method parameter is passed.

Ejemplos:

```4d
 //Este comando espera un método (función) o una fórmula
QUERY BY FORMULA([aTable];Special query)
 //Este comando espera un método (procedimiento) o una instrucción
APPLY TO SELECTION([Employees];INCREASE SALARIES)
 //Pero este comando espera un nombre de método
ON EVENT CALL("HANDLE EVENTS")
```

## Tablas y campos

Una tabla se designa colocando su nombre entre paréntesis: \[...]. Para designar un campo hay que especificar primero la tabla a la que pertenece (el nombre del campo sigue inmediatamente al nombre de la tabla).

Un nombre de tabla y un nombre de campo pueden contener hasta 31 caracteres.

- Un nombre de tabla o campo debe comenzar con una letra, un guión bajo o un signo dólar ("$")
- A partir de ahí, el nombre puede incluir caracteres alfabéticos, numéricos, el carácter espacio y el carácter de subrayado ("_").
- Do not use reserved names, i.e. 4D command names (`Date`, `Time`, etc), keywords (`If`, `For`, etc.), or constant names (`Euro`, `Black`, `Friday`, etc.).
- Deben respetarse reglas adicionales cuando la base deba manejarse vía SQL: sólo se aceptan los caracteres _0123456789abcdefghijklmnopqrstuvwxyz, y el nombre no debe incluir ninguna palabra clave SQL (comando, atributo, etc.).

Ejemplos:

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

- A variable name must begin with a letter, an underscore, or a dollar ("$") for [parameters](parameters.md) and [local variables](variables.md#local-variables), or `<>` for [interprocess variables](variables.md#interprocess-variables).
- A digit as first character is allowed but not recommended, and is not supported by the [`var` declaration syntax](variables.md#using-the-var-keyword).
- A partir de ahí, el nombre puede incluir cualquier letra o dígito, y el caracter de subrayado ("_").
- Space character is allowed but not recommended, and is not supported by the [`var` declaration syntax](variables.md#using-the-var-keyword).
- Do not use reserved names, i.e. 4D command names (`Date`, `Time`, etc), keywords (`If`, `For`, etc.), or constant names (`Euro`, `Black`, `Friday`, etc.).
- Los nombres de las variables son sensibles a las mayúsculas y minúsculas.

Ejemplos:

```4d
For($vlRecord;1;100) //local variable
$vsMyString:="Hello there" //local variable
var $vName; $vJob : Text //local variales 
If(bValidate=1) //process variable
<>vlProcessID:=Current process() //interprocess variable
```

## Otros nombres

In the 4D language, several elements have their names handled as strings: **forms**, **form objects**, **named selections**, **processes**, **sets**, **menu bars**, etc.

Such string names can contain up to 255 characters, not including the `$` or `<>` characters (if any).

- Los nombres de las cadenas pueden contener cualquier carácter.
- Los nombres de las cadenas son sensibles a las mayúsculas y minúsculas.

Ejemplos:

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
