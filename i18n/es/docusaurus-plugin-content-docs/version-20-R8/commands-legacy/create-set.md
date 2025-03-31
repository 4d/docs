---
id: create-set
title: CREATE SET
slug: /commands/create-set
displayed_sidebar: docs
---

<!--REF #_command_.CREATE SET.Syntax-->**CREATE SET** ( {*tabla* ;} *conjunto* )<!-- END REF-->
<!--REF #_command_.CREATE SET.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla para la cual crear un conjunto a partir de la selección actual o Tabla por defecto si se omite |
| conjunto | Text | &#8594;  | Nombre del nuevo conjunto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.CREATE SET.Summary-->CREATE SET crea un nuevo conjunto, *conjunto*, para *tabla*, y coloca la selección actual en *conjunto*.<!-- END REF--> El puntero del registro actual de la tabla se guarda con *conjunto*. Si *conjunto* se utiliza con [USE SET](use-set.md "USE SET"), la selección actual y el registro actual se restauran. Como para todo conjunto, no hay criterio de ordenación; cuando *conjunto* se utiliza, se utiliza el orden por defecto. Si ya existe un conjunto con el mismo nombre, el conjunto existente se borra y reemplaza por el nuevo conjunto.

#### Ejemplo 

El siguiente ejemplo crea un conjunto después de efectuar una búsqueda, de manera que el conjunto pueda guardarse en el disco:

```4d
 QUERY([Personas]) // El usuario efectúa una búsqueda
 CREATE SET([Personas];"ConjuntoBusqueda") // Creación de un nuevo conjunto
 SAVE SET("ConjuntoBusqueda";"MiBusqueda") // El conjunto se guarda en el disco
```

#### Ver también 

[CLEAR SET](clear-set.md)  
[CREATE EMPTY SET](create-empty-set.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 116 |
| Hilo seguro | &check; |


