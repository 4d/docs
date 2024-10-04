---
id: c-object
title: C_OBJECT
slug: /commands/c-object
displayed_sidebar: docs
---

<!--REF #_command_.C_OBJECT.Syntax-->**C_OBJECT** ( {*metodo* ;} *variable* {; *variable2* ; ... ; *variableN*} )<!-- END REF-->
<!--REF #_command_.C_OBJECT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| metodo | Método | &#x1F852; | Nombre del método |
| variable | Variable | &#x1F852; | Nombre(s) de la(s) variable(s) o parámetro(s) ${...} a declarar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.C_OBJECT.Summary-->El comando **C\_OBJECT** asigna el tipo [Objeto](# "Datos estructurados como forma de objeto nativo 4D") a todas las variables especificadas.<!-- END REF--> 

El tipo [Objeto](# "Datos estructurados como forma de objeto nativo 4D") es soportado por el lenguaje 4D a partir de la v14\. Los objetos de este tipo son administrados por los comandos del tema *Objetos (Lenguaje)* o por medio de la notación de objetos (ver *Uso de la notación objeto*).  
  
La primera sintaxis del comando (si el parámetro *metodo* no se pasa) se utiliza para declarar y digitar una variable proceso, interproceso o local. Esta sintaxis puede utilizarse en bases interpretadas.  
  
La segunda sintaxis del comando (si el parámetro *metodo* se pasa) se utiliza para declarar de antemano el resultado y/o los parámetros ($0, $1, $2, etc.) de un método para el compilador. Debe utilizar esta sintaxis si desea evitar la fase de escribir variables con el fin de ahorrar tiempo al compilar la base de datos.  
  
**ADVERTENCIA**: no puede ejecutar la segunda sintaxis en modo interpretado. Por esta razón, cuando se utiliza esta sintaxis, debe guardarla en un método (cuyo nombre debe comenzar por "COMPILER") que no se ejecute en modo interpretado.  
  
**Importante:** el comandoC\_OBJECT no crea un objeto llamado *variable*. Si desea acceder a las propiedades del objeto usando la notación de objetos, primero debe inicializarlo usando el comando [New object](new-object.md), de lo contrario se devuelve un error de sintaxis.

##### Uso avanzado 

La sintaxis **C\_OBJECT**(${...}) le permite declarar un número variable de parámetros del mismo tipo, bajo la condición de que estos sean los últimos parámetros del método. Por ejemplo, la declaración **C\_OBJECT**(${5}) le indica a 4D y al compilador que a partir del quinto parámetro, el método puede recibir un número variable de parámetros de ese tipo. Para mayor información, consulte el comando *Indirecciones sobre los parámetros*.

#### Ejemplo 

```4d
 C_OBJET($obj) //La variable $obj se declara pero el objeto $obj no existe
 $obj:=New object //El objeto $obj se inicializa
 $obj.prop:=42 //...y sus propiedades pueden ser accedidas
```

#### Ver también 

[ARRAY OBJECT](array-object.md)  
*Objetos (Lenguaje)*  