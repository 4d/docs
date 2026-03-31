---
id: set-document-position
title: SET DOCUMENT POSITION
slug: /commands/set-document-position
displayed_sidebar: docs
---

<!--REF #_command_.SET DOCUMENT POSITION.Syntax-->**SET DOCUMENT POSITION** ( *docRef* : Time ; *offset* : Real {; *ancla* : Integer} )<!-- END REF-->
<!--REF #_command_.SET DOCUMENT POSITION.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| docRef | Time | &#8594; | Número de referencia del documento |
| offset | Real | &#8594; | Posición del archivo (expresada en bytes) |
| ancla | Integer | &#8594; | 1 = En relación con el inicio del archivo 2 = En relación con el final del archivo 3 = En relación con la posición actual |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|11 SQL Release 3|Modificado|
|<6|Creado|

</details>
</div>

## Descripción 

<!--REF #_command_.SET DOCUMENT POSITION.Summary-->Este comando funciona únicamente en un documento abierto cuyo número de referencia se pasa en *docRef*.<!-- END REF--> 

SET DOCUMENT POSITION define la posición que se pasa en *offset* donde ocurrirá la próxima lectura ([RECEIVE PACKET](receive-packet.md "RECEIVE PACKET")) o escritura ([SEND PACKET](send-packet.md "SEND PACKET")).

Si omite el parámetro opcional *ancla*, la posición es relativa al inicio del documento. Si especifica el parámetro *ancla*, pase uno de los valores listados anteriormente. 

Dependiendo del ancla puede pasar valores positivos o negativos en *offset*.

## Ver también 

[Get document position](../commands/get-document-position)  
[RECEIVE PACKET](../commands/receive-packet)  
[SEND PACKET](../commands/send-packet)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 482 |
| Hilo seguro | yes |


