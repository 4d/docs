---
id: one-record-select
title: ONE RECORD SELECT
slug: /commands/one-record-select
displayed_sidebar: docs
---

<!--REF #_command_.ONE RECORD SELECT.Syntax-->**ONE RECORD SELECT** {( *tabla* )}<!-- END REF-->
<!--REF #_command_.ONE RECORD SELECT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla en la cual reducir la selección actual al registro actual o Tabla por defecto si se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.ONE RECORD SELECT.Summary-->ONE RECORD SELECT reduce la selección actual de *tabla* al registro actual.<!-- END REF--> Si no existe un registro actual o si el registro actual no está cargado en la memoria (caso particular), ONE RECORD SELECT no tiene ningún efecto.

#### Nota 

Este comando fue útil para “reponer” un registro que había sido apilado y desapilado de la pila de registro mientras la selección de la tabla era modificada. [SET QUERY DESTINATION](set-query-destination.md) permite efectuar una búsqueda sin tener que cambiar la selección ni el registro actual de una tabla; por lo tanto, no necesita más apilar y desapilar un registro actual para efectuar una búsqueda en su tabla. Por consiguiente, **ONE RECORD SELECT** es menos útil, a menos que quiera expresamente reducir la selección de una tabla al registro actual.

**Atención:** tenga en cuenta que un número de registro puede reutilizarse si se elimina el registro y se crea otro (ver *Acerca de números de registros*).

#### Ver también 

[CREATE SELECTION FROM ARRAY](create-selection-from-array.md)  
*Selecciones temporales*  
[SELECTION RANGE TO ARRAY](selection-range-to-array.md)  
[SELECTION TO ARRAY](selection-to-array.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 189 |
| Hilo seguro | &check; |
| Modifica el registro actual ||
| Modifica la selección actual ||


