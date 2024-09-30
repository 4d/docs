---
id: c-collection
title: C_COLLECTION
slug: /commands/c-collection
displayed_sidebar: docs
---

<!--REF #_command_.C_COLLECTION.Syntax-->**C_COLLECTION** ( {*metodo* ;} *variable* {; *variable2* ; ... ; *variableN*} )<!-- END REF-->
<!--REF #_command_.C_COLLECTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| metodo | Método | &#x1F852; | Nombre del método |
| variable | Variable | &#x1F852; | Nombre(s) de la variable(s) o parámetro(s) ${...} a declarar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.C_COLLECTION.Summary-->El comando **C\_COLLECTION** asigna el tipo Colección a todas las variables que se especifican.<!-- END REF-->

El tipo Colección es soportado por el lenguaje 4D a partir de la v16 R4\. Las variables de este tipo contienen una lista ordenada de valores de atributo objeto de todo tipo, almacenados como un array JSON. Las colecciones se gestionan utilizando los comandos del tema *Objetos (Lenguaje)*.

Se utiliza la primera sintaxis del comando (cuando no se pasa el parámetro método) para declarar y digitar una variable de tipo local, proceso o interproceso. Esta sintaxis se puede utilizar en bases de datos interpretadas.

Se utiliza la segunda sintaxis del comando (cuando se pasa el parámetro *método*) para declarar de antemano el resultado del método y/o los parámetros ($0, $1, $2, etc.) para el compilador. Debe utilizar esta sintaxis si desea omitir la fase de escritura de variables para ahorrar tiempo cuando se compila la base de datos.

**ATENCIÓN**: no puede ejecutar la segunda sintaxis en modo interpretado. Por esta razón, cuando se utiliza esta sintaxis, tiene que almacenar en un método (cuyo nombre debe comenzar por "COMPILER") que no se ejecuta en modo interpretado.

##### Uso avanzado 

La sintaxis **C\_COLLECTION**(${...}) le permite declarar un número variable de parámetros del mismo tipo, bajo la condición de que estos sean los últimos parámetros del método. Por ejemplo, la declaración **C\_COLLECTION**(${5}) le indica a 4D y al compilador que a partir del quinto parámetro, el método puede recibir un número variable de parámetros de ese tipo. Para mayor información, consulte el comando *Indirecciones sobre los parámetros*.

#### Ejemplo 

Usted desea declarar una variable proceso colección y llenarla con una nueva colección:

```4d
 C_COLLECTION(myCol)
  //aquí el valor de myCol es nulo
 myCol:=New collection("Green";100;"Orange";200;"Red";300)
  //myCol= ["Green",100,"Orange",200,"Red",300]
```

#### Ver también 

*Colecciones*  
[New collection](new-collection.md)  