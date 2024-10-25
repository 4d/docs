---
id: get-automatic-relations
title: GET AUTOMATIC RELATIONS
slug: /commands/get-automatic-relations
displayed_sidebar: docs
---

<!--REF #_command_.GET AUTOMATIC RELATIONS.Syntax-->**GET AUTOMATIC RELATIONS** ( *uno* ; *muchos* )<!-- END REF-->
<!--REF #_command_.GET AUTOMATIC RELATIONS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| uno | Boolean | &#8592; | Estado de todas las relaciones de Muchos a Uno |
| muchos | Boolean | &#8592; | Estado de todas las relaciones de Uno a Muchos |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET AUTOMATIC RELATIONS.Summary-->El comando GET AUTOMATIC RELATIONS le permite saber si el estado automático/manual de todas las relaciones manuales Muchos a Uno y Uno a Muchos de la base han sido modificadas en el proceso actual.<!-- END REF-->

* *uno*: este parámetro devuelve [True](true.md "True") si una llamada anterior al comando [SET AUTOMATIC RELATIONS](set-automatic-relations.md "SET AUTOMATIC RELATIONS") vuelve automáticas todas las relaciones manuales Muchos a Uno, por ejemplo SET AUTOMATIC RELATIONS(True;False).

Este parámetro devuelve [False](false.md "False") si el comando [SET AUTOMATIC RELATIONS](set-automatic-relations.md "SET AUTOMATIC RELATIONS") no ha sido llamado o si su ejecución previa no modificó las relaciones manuales Muchos a Uno, por ejemplo SET AUTOMATIC RELATIONS(False;False). 

* *muchos*: este parámetro devuelve [True](true.md "True") si la llamada previa al comando [SET AUTOMATIC RELATIONS](set-automatic-relations.md "SET AUTOMATIC RELATIONS") vuelve automáticas todas las relaciones manuales Uno a Muchos, por ejemplo SET AUTOMATIC RELATIONS(True;True).

Este parámetro devuelve [False](false.md "False") si el comando [SET AUTOMATIC RELATIONS](set-automatic-relations.md "SET AUTOMATIC RELATIONS") no ha sido llamado o si si ejecución previa no modificó la relaciones manuales Uno a Muchos, por ejemplo SET AUTOMATIC RELATIONS(True;False).

#### Ejemplo 

Consulte el ejemplo del comando [GET FIELD RELATION](get-field-relation.md "GET FIELD RELATION"). 

#### Ver también 

[GET FIELD RELATION](get-field-relation.md)  
[GET RELATION PROPERTIES](get-relation-properties.md)  
[SET AUTOMATIC RELATIONS](set-automatic-relations.md)  