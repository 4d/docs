---
id: set-document-size
title: SET DOCUMENT SIZE
slug: /commands/set-document-size
displayed_sidebar: docs
---

<!--REF #_command_.SET DOCUMENT SIZE.Syntax-->**SET DOCUMENT SIZE** ( *docRef* : Time ; *tamaño* : Real )<!-- END REF-->
<!--REF #_command_.SET DOCUMENT SIZE.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| docRef | Time | &#8594; | Número de referencia del documento |
| tamaño | Real | &#8594; | Nuevo tamaño expresado en bytes |
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

<!--REF #_command_.SET DOCUMENT SIZE.Summary-->El comando SET DOCUMENT SIZE define el tamaño de un documento para el número de bytes que se pasan en *tamaño*.<!-- END REF--> 

Si el documento está abierto, pase su número de referencia en *docRef*.

En Macintosh, se modifica el tamaño del data fork del documento.

## Ver también 

[Get document position](../commands/get-document-position)  
[Get document size](../commands/get-document-size)  
[SET DOCUMENT POSITION](../commands/set-document-position)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 480 |
| Hilo seguro | yes |


