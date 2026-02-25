---
id: set-automatic-relations
title: SET AUTOMATIC RELATIONS
slug: /commands/set-automatic-relations
displayed_sidebar: docs
---

<!--REF #_command_.SET AUTOMATIC RELATIONS.Syntax-->**SET AUTOMATIC RELATIONS** ( *uno* : Boolean {; *muchos* : Boolean} )<!-- END REF-->
<!--REF #_command_.SET AUTOMATIC RELATIONS.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| uno | Boolean | &#8594; | Estado de todas las relaciones Muchos a Uno |
| muchos | Boolean | &#8594; | Estado de todas las relaciones de Uno a Muchos |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|2004|Modificado|
|<6|Creado|

</details>
</div>

## Descripción 

<!--REF #_command_.SET AUTOMATIC RELATIONS.Summary-->SET AUTOMATIC RELATIONS cambia temporalmente todas las relaciones manuales en relaciones automáticas para toda la base en el proceso actual.<!-- END REF--> Las relaciones permanecen automáticas a menos que se realice una llamada posterior a SET AUTOMATIC RELATIONS.

* Si *uno* es true, entonces todas las relaciones Muchos a Uno se vuelven automáticas. Si *uno* es false, todas las relaciones Muchos a Uno se vuelven manuales.
* Si *muchos* es true, entonces todas las relaciones Uno a Muchos se vuelven automáticas. Si *muchos* es false, todas las relaciones Uno a Muchos se vuelven manuales.

Este comando cambia relaciones definidas como manuales en modo Diseño a automáticas, justo antes de ejecutar operaciones que requieran que sean automáticas (tales como búsquedas relacionales y ordenaciones). Una vez termina la operación, las relaciones pueden cambiarse a manuales llamando nuevamente a **SET AUTOMATIC RELATIONS**. La relaciones definidas como automáticas en el entorno Diseño no son afectadas por este comando.

**Notas:** 

* Cuando pase [True](../commands/true) al comando **SET AUTOMATIC RELATIONS**, el modo automático se "bloquea" para todas las relaciones manuales durante la sesión. En este caso, todas las llamadas al comando [SET FIELD RELATION](../commands/set-field-relation) durante la misma sesión se ignoran, sin importar si estaban antes o después de **SET AUTOMATIC RELATIONS**. Para "desbloquear" el modo automático y tener en cuenta las llamadas a [SET FIELD RELATION](../commands/set-field-relation), pase [False](../commands/false) a **SET AUTOMATIC RELATIONS**.
* Las funcionalidades automáticas se desactivan cuando las tablas relacionadas se visualizan en un formulario listado mostrado utilizando [DISPLAY SELECTION](../commands/display-selection), [MODIFY SELECTION](../commands/modify-selection), o un subformulario. Ver *Relaciones manuales y automáticas*.

## Ejemplo 

El siguiente ejemplo vuelve automáticas todas las relaciones Muchos a Uno y restablece a manual todas las relaciones Uno a Muchos cambiadas previamente:

```4d
 SET AUTOMATIC RELATIONS(True;False)
```

## Ver también 

[GET AUTOMATIC RELATIONS](../commands/get-automatic-relations)  
[GET RELATION PROPERTIES](../commands/get-relation-properties)  
*Relaciones*  
[SELECTION RANGE TO ARRAY](../commands/selection-range-to-array)  
[SELECTION TO ARRAY](../commands/selection-to-array)  
[SET FIELD RELATION](../commands/set-field-relation)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 310 |
| Hilo seguro | yes |


