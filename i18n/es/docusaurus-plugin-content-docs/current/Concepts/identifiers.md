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

:::tip

Comenzar el nombre de una propiedad objeto con un carácter de subrayado ("_") excluirá la propiedad de las características de autocompletado en el editor de código de 4D. Por ejemplo, si declara `$o._myPrivateProperty`, no se propondrá en el editor de código cuando escriba `"$o. "`.

:::

Ver también [ECMA Script standard](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6).

:::note

Si utiliza **notación de cadena** entre corchetes, los nombres de las propiedades pueden contener cualquier caracter (ej.: `miObjeto["1. First property"]`).

:::

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

## Tablas y campos

Una tabla se designa colocando su nombre entre paréntesis: \[...]. Para designar un campo hay que especificar primero la tabla a la que pertenece (el nombre del campo sigue inmediatamente al nombre de la tabla).

Un nombre de tabla y un nombre de campo pueden contener hasta 31 caracteres.

- Un nombre de tabla o campo debe comenzar con una letra, un guión bajo o un signo dólar ("$")
- A partir de ahí, el nombre puede incluir caracteres alfabéticos, numéricos, el carácter espacio y el carácter de subrayado ("_").
- No utilice nombres reservados, es decir, nombres de comandos 4D (`Date`, `Time`, etc), keywords (`If`, `For`, etc.), o nombres de constantes (`Euro`, `Black`, `Friday`, etc.).
- Deben respetarse reglas adicionales cuando la base deba manejarse vía SQL: sólo se aceptan los caracteres _0123456789abcdefghijklmnopqrstuvwxyz, y el nombre no debe incluir ninguna palabra clave SQL (comando, atributo, etc.).

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

El nombre de una variable puede tener hasta 31 caracteres, sin incluir los símbolos de alcance (`$` or `<>`).

- Un nombre de variable debe comenzar con una letra, un guión bajo o un dólar ("$") para [parámetros](parameters.md) y [variables locales](variables.md#local-variables), o `<>` para [variables interproceso](variables.md#interprocess-variables) (obsoleto).
- A partir de ahí, el nombre puede incluir cualquier letra o dígito, y el caracter de subrayado ("_").
- No utilice nombres reservados, es decir, nombres de comandos 4D (`Date`, `Time`, etc), palabras clave (`If`, `For`, etc.), nombres de variables de sistema (`OK`, `document`...), o nombres constantes (`Euro`, `Black`, `Friday`, etc.).
- Los nombres de las variables son sensibles a las mayúsculas y minúsculas.

Ejemplos:

```4d
For($vlRecord;1;100) //variable local
$vsMyString:="Hello there" //variable local
var $vName; $vJob : Text //variables locales 
If(bValidate=1) //variable proceso 
<>vlProcessID:=Current process() //variable interproceso
```

### Compatibilidad

Algunas prácticas de nombramiento estaban permitidas anteriormente, pero ya no están soportadas cuando [el modo de escritura directa está habilitado](../Project/compiler.md#enabling-direct-typing) (introducido en 4D 20 R7). Habilitar este modo producirá errores de sintaxis si:

- un nombre de variable tiene un dígito como primer caracter,
- un nombre de variable contiene caracteres de espacio,
- ha declarado variables llamadas $0, $1, etc.

## Otros nombres

En el lenguaje 4D, varios elementos tienen sus nombres manejados como cadenas: **formularios**, **objetos de formulario**, **selecciones temporales**, **procesos**, **conjuntos**, **barras de menú**, etc.

Estos nombres de cadena pueden contener hasta 255 caracteres, sin incluir los caracteres `$` or `<>` (si los hay).

- Los nombres de las cadenas pueden contener cualquier carácter.
- Los nombres de las cadenas son sensibles a las mayúsculas y minúsculas.

Ejemplos:

```4d
DIALOG([Storage];"Note box"+String($vlStage))
OBJECT SET FONT(*;"Binfo";"Times")
USE NAMED SELECTION([Customers];"Closed")//Selección temporal process
USE NAMED SELECTION([Customers];"<>ByZipcode") //Selección temporal interproceso
 //Iniciar el proceso global "Add Customers"
$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")
 //Iniciar el proceso local "$Follow Mouse Moves"
$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")
CREATE SET([Customers];"Customer Orders")//Conjunto process
USE SET("<>Deleted Records") //Conjunto interprocess
If(Records in set("$Selection"+String($i))>0) //Conjunto Client

```
