---
id: c-blob
title: C_BLOB
slug: /commands/c-blob
displayed_sidebar: docs
---

<!--REF #_command_.C_BLOB.Syntax-->**C_BLOB** ( {*metodo* ;} *variable* {; *variable2* ; ... ; *variableN*} )<!-- END REF-->
<!--REF #_command_.C_BLOB.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| metodo | Método | &#x1F852; | Nombre del método opcional |
| variable | Variable | &#x1F852; | Nombre de la(s) variable(s) a declarar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.C_BLOB.Summary-->C\_BLOBasigna el tipo BLOB a cada variable especificada.<!-- END REF-->

La primera sintaxis del comando, en el cual el parámetro opcional *método* NO se pasa, se utiliza para declarar una variable de proceso, interproceso o local.

**Nota:** esta sintaxis puede utilizarse en bases interpretadas.

La segunda sintaxis del comando, en la cual el parámetro opcional *método* SÍ se pasa, se utiliza para declarar ante el compilador el resultado y/o los parámetros ($0, $1, $2 etc.) de un método. Utilice esta sintaxis del comando para evitar declarar las variables durante la compilación de una base, ahorrando tiempo de compilación. 

**Advertencia:** la segunda sintaxis no se puede ejecutar en modo interpretado. Por esta razón, si utiliza esta sintaxis, manténgala en un método que no se ejecute en modo interpretado. El nombre de este método debe comenzar por “COMPILER.”

##### Uso avanzado 

La sintaxis **C\_BLOB**(${...}) le permite declarar un número variable de parámetros del mismo tipo, bajo la condición de que estos sean los últimos parámetros del método. Por ejemplo, la declaración **C\_BLOB**(${5}) le indica a 4D y al compilador que a partir del quinto parámetro, el método puede recibir un número variable de parámetros de ese tipo. Para mayor información, consulte el comando *Indirecciones sobre los parámetros*.

#### Ejemplos 

Ver ejemplos en la sección *Comandos del Compilador*. 

#### Ver también 

*Comandos del Compilador*  
[Count parameters](count-parameters.md)  