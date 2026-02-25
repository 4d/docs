---
id: get-automatic-relations
title: GET AUTOMATIC RELATIONS
slug: /commands/get-automatic-relations
displayed_sidebar: docs
---

<!--REF #_command_.GET AUTOMATIC RELATIONS.Syntax-->**GET AUTOMATIC RELATIONS** ( *uno* : Boolean ; *muchos* : Boolean )<!-- END REF-->
<!--REF #_command_.GET AUTOMATIC RELATIONS.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| uno | Boolean | &#8592; | Estado de todas las relaciones de Muchos a Uno |
| muchos | Boolean | &#8592; | Estado de todas las relaciones de Uno a Muchos |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|2004|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.GET AUTOMATIC RELATIONS.Summary-->El comando GET AUTOMATIC RELATIONS le permite saber si el estado automático/manual de todas las relaciones manuales Muchos a Uno y Uno a Muchos de la base han sido modificadas en el proceso actual.<!-- END REF-->

* *uno*: este parámetro devuelve [True](../commands/true) si una llamada anterior al comando [SET AUTOMATIC RELATIONS](set-automatic-relations.md "SET AUTOMATIC RELATIONS") vuelve automáticas todas las relaciones manuales Muchos a Uno, por ejemplo SET AUTOMATIC RELATIONS(True;False).

Este parámetro devuelve [False](../commands/false) si el comando [SET AUTOMATIC RELATIONS](set-automatic-relations.md "SET AUTOMATIC RELATIONS") no ha sido llamado o si su ejecución previa no modificó las relaciones manuales Muchos a Uno, por ejemplo SET AUTOMATIC RELATIONS(False;False). 

* *muchos*: este parámetro devuelve [True](../commands/true) si la llamada previa al comando [SET AUTOMATIC RELATIONS](set-automatic-relations.md "SET AUTOMATIC RELATIONS") vuelve automáticas todas las relaciones manuales Uno a Muchos, por ejemplo SET AUTOMATIC RELATIONS(True;True).

Este parámetro devuelve [False](../commands/false) si el comando [SET AUTOMATIC RELATIONS](set-automatic-relations.md "SET AUTOMATIC RELATIONS") no ha sido llamado o si si ejecución previa no modificó la relaciones manuales Uno a Muchos, por ejemplo SET AUTOMATIC RELATIONS(True;False).

## Ejemplo 

Consulte el ejemplo del comando [GET FIELD RELATION](get-field-relation.md "GET FIELD RELATION"). 

## Ver también 

[GET FIELD RELATION](../commands/get-field-relation)  
[GET RELATION PROPERTIES](../commands/get-relation-properties)  
[SET AUTOMATIC RELATIONS](../commands/set-automatic-relations)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 899 |
| Hilo seguro | yes |


