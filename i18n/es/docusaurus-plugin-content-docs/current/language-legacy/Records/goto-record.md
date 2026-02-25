---
id: goto-record
title: GOTO RECORD
slug: /commands/goto-record
displayed_sidebar: docs
---

<!--REF #_command_.GOTO RECORD.Syntax-->**GOTO RECORD** ( {*tabla* : Table ;} *posicion* : Integer )<!-- END REF-->
<!--REF #_command_.GOTO RECORD.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594; | Tabla del registro de destino o Tabla por defecto, si se omite |
| posicion | Integer | &#8594; | Número devuelto por número registro |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|11 SQL|Modificado|
|<6|Creado|

</details>
</div>

## Descripción 

<!--REF #_command_.GOTO RECORD.Summary-->GOTO RECORD selecciona el registro actual de *tabla*.<!-- END REF--> El parámetro *registro* es el número devuelto por la función [Record Number](record-number.md "Record Number"). Después de ejecutar este comando, el registro es el único registro en la selección. 

Si *registro* es inferior al número más pequeño en la base o superior al número más grande de la base, 4D genera un mensaje de error que indica que el número está fuera del intervalo. Si *registro* es igual al número de registro de un registro borrado, 4D devuelve el error -10503 y la selección queda vacía.   

## Ejemplo 

Ver el ejemplo para Record Number.

## Ver también 

*Acerca de números de registros*  
[Record number](../commands/record-number)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 242 |
| Hilo seguro | yes |
| Modifica variables | error |
| Modifica la selección actual ||


