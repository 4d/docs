---
id: c-longint
title: C_LONGINT
slug: /commands/c-longint
displayed_sidebar: docs
---

<!--REF #_command_.C_LONGINT.Syntax-->**C_LONGINT** ( {*metodo* ;} *variable* {; *variable2* ; ... ; *variableN*} )<!-- END REF-->
<!--REF #_command_.C_LONGINT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| metodo | Método | &#x1F852; | Nombre del método opcional |
| variable | Variable | &#x1F852; | Nombre de la(s) variable(s) a declarar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.C_LONGINT.Summary-->El comando **C\_LONGINT** asigna el tipo Entero largo a cada variable especificada.<!-- END REF-->

La primera sintaxis del comando, en la cual el parámetro opcional *método* NO se pasa, se utiliza para declarar una variable proceso, interproceso, o local. 

**Nota:** esta sintaxis puede utilizarse en bases interpretadas.

La segunda sintaxis del comando, en la cual el parámetro opcional *método* SI se pasa, se utiliza para predeclarar ante el compilador el resultado y/o los parámetros ($0, $1, $2 etc.) de un método. Utilice esta sintaxis para evitar la fase de declaración de variables durante la compilación de la base, ahorrando tiempo de compilación.

**Advertencia:** la segunda sintaxis no se puede ejecutar en modo interpretado. Por esta razón, si utiliza esta sintaxis, mantengala en un método que no se ejecute en modo interpretado. El nombre de este método debe comenzar por “COMPILER.”

##### Uso avanzado 

La sintaxis **C\_LONGINT**(${...}) le permite declarar un número variable de parámetros del mismo tipo, bajo la condición de que estos sean los últimos parámetros del método. Por ejemplo, la declaración **C\_LONGINT**(${5}) le indica a 4D y al compilador que a partir del quinto parámetro, el método puede recibir un número variable de parámetros de ese tipo. Para mayor información, consulte el comando *Indirecciones sobre los parámetros*.

#### Ejemplos 

Ver ejemplos en la sección .

#### Ver también 

*\_o\_C\_INTEGER*  
[C\_REAL](c-real.md)  
*Comandos del Compilador*  
[Count parameters](count-parameters.md)  