---
id: query-selection
title: QUERY SELECTION
slug: /commands/query-selection
displayed_sidebar: docs
---

<!--REF #_command_.QUERY SELECTION.Syntax-->**QUERY SELECTION** ( {*tabla* }{;}{ *criterioBusqueda* {; *}} )<!-- END REF-->
<!--REF #_command_.QUERY SELECTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla en la cual efectuar la búsqueda o Tabla por defecto, si se omite |
| criterioBusqueda | Expression | &#8594;  | Líneas de búsqueda |
| * | Operador | &#8594;  | Bandera para continuar la búsqueda |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QUERY SELECTION.Summary-->**QUERY SELECTION** busca registros en *tabla*.<!-- END REF-->El comando **QUERY SELECTION** cambia la selección actual de *tabla* para el proceso actual y hace que el primer registro de la nueva selección sea el registro actual. 

**QUERY SELECTION** funciona y realiza las mismas acciones que [QUERY](query.md). La diferencia entre los dos comandos es el alcance de la búsqueda:

* [QUERY](query.md) busca registros entre los registros en la tabla.
* **QUERY SELECTION** busca registros entre los registros de la selección actual de la tabla.

Para mayor información, consulte la descripción del comando [QUERY](query.md).

El comando **QUERY SELECTION** es útil cuando una búsqueda no se puede definir utilizando una secuencia de llamadas enlazadas [QUERY](query.md) con el parámetro *\**. Por lo general, es el caso cuando desea consultar una selección actual que no sea resultado de una consulta previa, pero a partir de un comando como [USE SET](use-set.md). 

#### Ejemplo 

Usted desea consultar los registros que han sido resaltados previamente por el usuario en un formulario de lista. Puedes escribir:

```4d
 USE SET("UserSet") //reemplazar la selección actual con los registros seleccionados
 QUERY SELECTION([Company];[Company]City="New York City";*)
 QUERY SELECTION([Company]Type Business="Stock Exchange")
```

Va a encontrar todas las empresas ubicadas en la ciudad de Nueva York, con una actividad de Bolsa, entre la selección inicial del usuario.

#### Ver también 

[QUERY](query.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 341 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Modifica el registro actual ||
| Modifica la selección actual ||
| Prohibido en el servidor ||


