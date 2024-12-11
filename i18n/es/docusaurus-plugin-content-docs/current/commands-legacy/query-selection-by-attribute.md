---
id: query-selection-by-attribute
title: QUERY SELECTION BY ATTRIBUTE
slug: /commands/query-selection-by-attribute
displayed_sidebar: docs
---

<!--REF #_command_.QUERY SELECTION BY ATTRIBUTE.Syntax-->**QUERY SELECTION BY ATTRIBUTE** ( {*tabla*}{;}{*conjOp* ;} *campoObjeto* ; *rutaAtributo* ; *opBusq* ; *valor* {; *} )<!-- END REF-->
<!--REF #_command_.QUERY SELECTION BY ATTRIBUTE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla para la cual devolver una selección de registros o tabla por defecto si se omite |
| conjOp | * | &#8594;  | Operador de conjunción a utilizar ara unir múltiples búsquedas (si las hay) |
| campoObjeto | Field | &#8594;  | Campo objeto para buscar atributos |
| rutaAtributo | Text | &#8594;  | Nombre o ruta de atributo |
| opBusq | *, Text | &#8594;  | Operador de búsqueda (comparador) |
| valor | Text, Number, Date, Time | &#8594;  | Valor a comparar |
| * | Operador | &#8594;  | Continuar bandera de búsqueda |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QUERY SELECTION BY ATTRIBUTE.Summary-->**QUERY SELECTION BY ATTRIBUTE** trabaja y realiza las mismas acciones que [QUERY BY ATTRIBUTE](query-by-attribute.md).<!-- END REF--> La diferencia entre estos dos comandos es el alcance de la búsqueda:

* [QUERY BY ATTRIBUTE](query-by-attribute.md) busca los registros entre todos los registros de la tabla.
* **QUERY SELECTION BY ATTRIBUTE** busca los registros entre los registros seleccionados actualmente en la tabla.

**QUERY SELECTION BY ATTRIBUTE** busca los registros en *tabla*. El comando **QUERY SELECTION BY ATTRIBUTE** cambia la selección actual de *tabla* para el proceso actual y vuelve el primer registro de la nueva selección el registro actual.

Para más información, consulte la descripción del comando [QUERY BY ATTRIBUTE](query-by-attribute.md).

El comando **QUERY SELECTION BY ATTRIBUTE** es útil cuando una búsqueda no se puede definir mediante una combinación de [QUERY BY ATTRIBUTE](query-by-attribute.md) (e incluso [QUERY](query.md)) llamadas junto con el parámetro *\**. Por lo general, este es el caso cuando se desea consultar una selección actual que no sea resultado de una búsqueda previa, pero a partir de un comando como [USE SET](use-set.md).

#### Ejemplo 

Usted quiere encontrar personas con una edad entre 20 y 30, entre los registros que anteriormente fueron resaltados por el usuario:

```4d
 USE SET("UserSet") //crea una nueva selección actual
 QUERY SELECTION BY ATTRIBUTE([People];[People]OB_Info;"age";>;20;*)
 QUERY SELECTION BY ATTRIBUTE([People];&;[People]OB_Info;"age";<;30) //dispara la búsqueda
```
  
  

#### Ver también 

[QUERY BY ATTRIBUTE](query-by-attribute.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1424 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Modifica el registro actual ||
| Modifica la selección actual ||
| Prohibido en el servidor ||


