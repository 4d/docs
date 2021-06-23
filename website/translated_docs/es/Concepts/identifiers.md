---
id: identifiers
title: Identificadores
---

Esta sección describe las convenciones y reglas para nombrar los distintos elementos del lenguaje 4D (variables, propiedades objeto, tablas, formularios, etc.).

> Si se utilizan caracteres no romanos en los nombres de los identificadores, su longitud máxima puede ser menor.



## Arrays

Los nombres de los arrays siguen las mismas reglas que las [variables](#variables).


## Clases

El nombre de una clase puede contener hasta 31 caracteres.

Un nombre de clase debe cumplir con el estándar [reglas de nomenclatura de propiedades](#object-properties) para la notación de puntos.

> No se recomienda dar el mismo nombre a una clase y a una [tabla de la base](#tables), para evitar conflictos.



## Funciones

Los nombres de función deben cumplir con el estándar [reglas de nomenclatura de propiedades](#object-properties) para la notación de puntos.

> **Consejo:** comenzar el nombre de la función con un carácter de subrayado ("_") excluirá la función de las funcionalidades de autocompletado en el editor de código 4D.



## Propiedades de los objetos

El nombre de una propiedad objeto (también llamado objeto *atributo*) puede contener hasta 255 caracteres.

Las propiedades de los objetos pueden hacer referencia a valores escalares, elementos ORDA, funciones de clase, otros objetos, etc. Sea cual sea su naturaleza, los nombres de las propiedades de los objetos deben seguir las siguientes reglas **si se quiere utilizar la [notación de punto](dt_object.md#object-properties)**:

- El nombre de una propiedad debe comenzar con una letra, un guión bajo o un dólar "$".
- A partir de ahí, el nombre puede incluir cualquier letra, dígito, el caracter de subrayado ("_"), o el caracter de dólar ("$").
- Los nombres de propiedades son sensibles a las mayúsculas y minúsculas.


Ejemplos:

```4d
myObject.myAttribute:="10"
$value:=$clientObj.data.address.city
```

> Si utiliza **notación de cadena** entre corchetes, los nombres de las propiedades pueden contener cualquier caracter (ej.: `miObjeto["1. First property"]`).

Ver también [ECMA Script standard](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6).

## Parámetros

Los nombres de los parámetros deben comenzar con un caracter `$` y seguir las mismas reglas que los [nombres de variables](#variables).

Ejemplos:

```4d
Function getArea($width : Integer; $height : Integer)-> $area : Integer

#DECLARE ($i : Integer ; $param : Date) -> $myResult : Object
```


## Métodos proyecto

El nombre de un método proyecto puede contener hasta 31 caracteres.

- Un nombre de método proyecto debe comenzar por una letra, un dígito o un guión bajo
- A partir de ahí, el nombre puede incluir cualquier letra o dígito, el caracter de subrayado ("_"), o el caracter de espacio.
- No utilice nombres reservados, es decir, nombres de comandos 4D (`Date`, `Time`, etc), keywords (`If`, `For`, etc.), o nombres de constantes (`Euro`, `Black`, `Friday`, etc.).
- Los nombres de métodos proyecto son sensibles a las mayúsculas y minúsculas.

Ejemplos:

```4d
If(New client)
DELETE DUPLICATED VALUES
APPLY TO SELECTION([Employees];INCREASE SALARIES)
```

**Consejo:** es una buena técnica de programación adoptar la misma convención de nomenclatura que la utilizada por 4D para los métodos integrados. Utilice mayúsculas para nombrar sus métodos; sin embargo, si un método devuelve un valor, ponga en mayúscula el primer carácter de su nombre. De este modo, cuando vuelva a abrir un proyecto para su mantenimiento después de unos meses, ya sabrá si un método devuelve un resultado simplemente mirando su nombre en la ventana del Explorador.

 > Cuando se llama a un método, sólo hay que escribir su nombre. Sin embargo, algunos comandos integrados en 4D, como `ON EVENT CALL`, así como también todos los comandos del plug-in, esperan el nombre de un método como una cadena cuando se pasa un parámetro de tipo método.

Ejemplos:

```4d
    //Este comando espera un método (función) o una fórmula
QUERY BY FORMULA([aTable];Special query)
    //Este comando espera un método (procedimiento) o una instrucción
APPLY TO SELECTION([Employees];INCREASE SALARIES)
    //Pero este comando espera un nombre de método
ON EVENT CALL("HANDLE EVENTS")
```





## Tables and Fields

Una tabla se designa colocando su nombre entre paréntesis: \[...]. You designate a field by first specifying the table to which it belongs (the field name immediately follows the table name).

Un nombre de tabla y un nombre de campo pueden contener hasta 31 caracteres.

- A table or field name must begin with a letter, an underscore, or a dollar ("$")
- A partir de ahí, el nombre puede incluir caracteres alfabéticos, numéricos, el carácter espacio y el carácter de subrayado ("_").
- No utilice nombres reservados, es decir, nombres de comandos 4D (`Date`, `Time`, etc), keywords (`If`, `For`, etc.), o nombres de constantes (`Euro`, `Black`, `Friday`, etc.).
- Additional rules must be respected when the database must be handled via SQL: only the characters _0123456789abcdefghijklmnopqrstuvwxyz are accepted, and the name must not include any SQL keywords (command, attribute, etc.).


Ejemplos:

```4d
FORM SET INPUT([Clients];"Entry")
ADD RECORD([Letters])
[Orders]Total:=Sum([Line]Amount)
QUERY([Clients];[Clients]Name="Smith")
[Letters]Text:=Capitalize text([Letters]Text)

```

> No se recomienda dar el mismo nombre a una tabla y a una [clase](#classes), para evitar conflictos.

## Variables

The name of a variable can be up to 31 characters, not including the scope symbols ($ or <>).

- A variable name must begin with a letter, an underscore, or a dollar ("$") for [parameters](parameters.md) and [local variables](variables.md#local-variables), or "<>" for [interprocess variables](variables.md#interprocess-variables).
- A digit as first character is allowed but not recommended, and is not supported by the [`var` declaration syntax](variables.md#using-the-var-keyword).
- Thereafter, the name can include any letter or digit, and the underscore character ("_").
- Space character is allowed but not recommended, and is not supported by the [`var` declaration syntax](variables.md#using-the-var-keyword).
- No utilice nombres reservados, es decir, nombres de comandos 4D (`Date`, `Time`, etc), keywords (`If`, `For`, etc.), o nombres de constantes (`Euro`, `Black`, `Friday`, etc.).
- Los nombres de las variables son sensibles a las mayúsculas y minúsculas.


Ejemplos:

```4d
For($vlRecord;1;100) //variable local
$vsMyString:="Hello there" //variable local
var $vName; $vJob : Text //variables locales 
If(bValidate=1) //variable proceso 
<>vlProcessID:=Current process() //variable interproceso
```

## Otros nombres

In the 4D language, several elements have their names handled as strings: **forms**, **form objects**, **named selections**, **processes**, **sets**, **menu bars**, etc.

Such string names can contain up to 255 characters, not including the "$" or "<>" characters (if any).

- String names can contain any characters.
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

