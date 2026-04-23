---
id: get-document-size
title: Get document size
slug: /commands/get-document-size
displayed_sidebar: docs
---

<!--REF #_command_.Get document size.Syntax-->**Get document size** ( *document* : Text, Time {; *} ) : Real<!-- END REF-->
<!--REF #_command_.Get document size.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| document | Text, Time | &#8594; | Número de referencia del documento o Nombre del documento |
| * | Operador | &#8594; | En Mac OS únicamente: -si se omite, tamaño del data fork - si se especifica, tamaño del resource fork |
| Resultado | Real | &#8592; | Tamaño (expresado en bytes) del documento |
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

<!--REF #_command_.Get document size.Summary-->El comando Get document size devuelve el tamaño de un documento, expresado en bytes.<!-- END REF--> 

Si el documento está abierto, pase su número de referencia en *documento*.  
Si el documento no está abierto, pase su nombre o ruta en *documento*.

En Macintosh, si no pasa el parámetro opcional *\**, se devuelve el tamaño del data fork. Si no pasa el parámetro *\**, se devuelve el tamaño del resource fork.

## Ver también 

[Get document position](../commands/get-document-position)  
[SET DOCUMENT POSITION](../commands/set-document-position)  
[SET DOCUMENT SIZE](../commands/set-document-size)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 479 |
| Hilo seguro | yes |
| Modifica variables | error |


