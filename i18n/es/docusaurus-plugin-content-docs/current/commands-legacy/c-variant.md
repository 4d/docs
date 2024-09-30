---
id: c-variant
title: C_VARIANT
slug: /commands/c-variant
displayed_sidebar: docs
---

<!--REF #_command_.C_VARIANT.Syntax-->**C_VARIANT** ( {*metodo* ;} *variable* {; *variable2* ; ... ; *variableN*} )<!-- END REF-->
<!--REF #_command_.C_VARIANT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| metodo | Método | &#x1F852; | Nombre opcional del método |
| variable | Variable | &#x1F852; | Nombre de las variables a declarar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.C_VARIANT.Summary-->**C\_VARIANT** convierte cada variable especificada como una variable Variant.<!-- END REF--> Una variable variant puede contener cualquier valor de los siguientes tipos de datos 4D: BLOB, Booleano, Colección, Fecha, Entero largo, Objeto, Imagen, Puntero, Real, Texto, Hora, Null, Indefinido.

La primera forma del comando, en la cual NO se pasa el parámetro *metodo* opcional, se utiliza para declarar y escribir toda variable proceso, interproceso o local.

**Nota:** este formulario se puede utilizar en bases de datos interpretadas y compiladas.

La segunda forma del comando, en la cual se pasa el parámetro opcional *metodo*, se utiliza para predeclarar al compilador el resultado y/o los parámetros ($0, $1, $2, etc.) para un método. Utilice esta forma del comando para omitir la fase de escritura de variables mientras compila una base de datos, ahorrando tiempo de compilación.

**ATENCIÓN**: el uso de una variant en lugar de un tipo fijo puede reducir el rendimiento.  

##### Uso avanzado 

La sintaxis **C\_VARIANT**(${...}) le permite declarar un número variable de parámetros del mismo tipo, si son los últimos parámetros para el método. Por ejemplo, la declaración **C\_VARIANT**(${5}) le dice a 4D y al compilador que a partir del quinto parámetro, el método puede recibir un número variable de parámetros de ese tipo. Para más información, consulte la sección *Indirecciones sobre los parámetros*.

#### Ejemplo 

Para verificar el tipo y el valor de una variable variant:

```4d
 C_VARIANT($var)
 C_LONGINT($vt)
 $var:="test"
 $vt:=Type($var) //$vt="Is variant"
 $vt:=Value type($var) //$vt="Is text"
```
