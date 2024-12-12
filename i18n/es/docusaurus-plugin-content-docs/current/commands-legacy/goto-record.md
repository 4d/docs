---
id: goto-record
title: GOTO RECORD
slug: /commands/goto-record
displayed_sidebar: docs
---

<!--REF #_command_.GOTO RECORD.Syntax-->**GOTO RECORD** ( {*tabla* ;} *posicion* )<!-- END REF-->
<!--REF #_command_.GOTO RECORD.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla del registro de destino o Tabla por defecto, si se omite |
| posicion | Integer | &#8594;  | Número devuelto por número registro |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GOTO RECORD.Summary-->GOTO RECORD selecciona el registro actual de *tabla*.<!-- END REF--> El parámetro *registro* es el número devuelto por la función [Record Number](record-number.md "Record Number"). Después de ejecutar este comando, el registro es el único registro en la selección. 

Si *registro* es inferior al número más pequeño en la base o superior al número más grande de la base, 4D genera un mensaje de error que indica que el número está fuera del intervalo. Si *registro* es igual al número de registro de un registro borrado, 4D devuelve el error -10503 y la selección queda vacía.   

#### Ejemplo 

Ver el ejemplo para Record Number.

#### Ver también 

*Acerca de números de registros*  
[Record number](record-number.md)  