---
id: component-list
title: COMPONENT LIST
slug: /commands/component-list
displayed_sidebar: docs
---

<!--REF #_command_.COMPONENT LIST.Syntax-->**COMPONENT LIST** ( *arrayComponentes* )<!-- END REF-->
<!--REF #_command_.COMPONENT LIST.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| arrayComponentes | Text array | &#8592; | Nombres de los componentes |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.COMPONENT LIST.Summary-->El comando COMPONENT LIST dimensiona y llena el array *arrayComponentes* con los nombres de los componentes cargados por la aplicación 4D para la base local actual.<!-- END REF-->

Al abrir una base, 4D carga los componentes válidos ubicados en la carpeta Componentes:

* la carpeta Componentes ubicada junto al archivo de estructura (si lo hay),
* la carpeta Componentes que se encuentra junto a la aplicación 4D ejecutable.

**Recuerde:** si el mismo componente está en las dos ubicaciones, 4D sólo cargará el ubicado junto a la estructura.

Este comando puede llamarse desde la base local o desde un componente. Si la base no utiliza componentes, el array *arrayComponentes* se devuelve vacío.

Los nombres de los componentes son los nombres de los archivos de estructura de las bases de las matrices (.4db, .4dc o .4dbase). Este comando puede utilizarse para configurar arquitecturas e interfaces modulares que ofrezcan funcionalidades adicionales de acuerdo a la presencia de los componentes.

Para mayor información sobre componentes 4D, por favor consulte el *Manual de Diseño*.

#### Ver también 

[PLUGIN LIST](plugin-list.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1001 |
| Hilo seguro | &check; |


