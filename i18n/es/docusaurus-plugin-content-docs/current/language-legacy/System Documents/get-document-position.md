---
id: get-document-position
title: Get document position
slug: /commands/get-document-position
displayed_sidebar: docs
---

<!--REF #_command_.Get document position.Syntax-->**Get document position** ( *docRef* : Time ) : Real<!-- END REF-->
<!--REF #_command_.Get document position.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| docRef | Time | &#8594; | Número de referencia del documento |
| Resultado | Real | &#8592; | Posición en el archivo (expresada en bytes) a partir del inicio del archivo |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|6|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.Get document position.Summary-->El comando **Get document position** devuelve la posición, desde el inicio del documento, en la que tendrá lugar la próxima lectura ([RECEIVE PACKET](../commands/receive-packet)) o escritura ([SEND PACKET](../commands/send-packet)).
<!-- END REF-->

Este comando solo funciona en un documento que esté abierto actualmente y cuyo número de referencia se pasa en *docRef*.

## Ver también 

[RECEIVE PACKET](../commands/receive-packet)  
[SEND PACKET](../commands/send-packet)  
[SET DOCUMENT POSITION](../commands/set-document-position)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 481 |
| Hilo seguro | yes |


