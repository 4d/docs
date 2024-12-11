---
id: create-empty-set
title: CREATE EMPTY SET
slug: /commands/create-empty-set
displayed_sidebar: docs
---

<!--REF #_command_.CREATE EMPTY SET.Syntax-->**CREATE EMPTY SET** ( {*tabla* ;} *conjunto* )<!-- END REF-->
<!--REF #_command_.CREATE EMPTY SET.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla para la cual crear un conjunto vacío o Tabla por defecto si se omite |
| conjunto | Text | &#8594;  | Nombre del nuevo conjunto vacío |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.CREATE EMPTY SET.Summary-->CREATE EMPTY SET crea un conjunto vacío, *conjunto*, para *tabla*.<!-- END REF--> Puede añadir registros a este conjunto con el comando [ADD TO SET](add-to-set.md "ADD TO SET"). Si ya existe un conjunto con el mismo nombre, el conjunto existente se borra y reemplaza con el nuevo conjunto.

**Nota:** no tiene que utilizar CREATE EMPTY SET antes de utilizar [CREATE SET](create-set.md "CREATE SET").

#### Ejemplo 

Consulte el ejemplo de la sección *Conjuntos*.

#### Ver también 

[CLEAR SET](clear-set.md)  
[CREATE SET](create-set.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 140 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


