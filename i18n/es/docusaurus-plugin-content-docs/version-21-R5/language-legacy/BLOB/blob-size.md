---
id: blob-size
title: BLOB size
slug: /commands/blob-size
displayed_sidebar: docs
---

<!--REF #_command_.BLOB size.Syntax-->**BLOB size** ( *BLOB* : Blob ) : Integer<!-- END REF-->
<!--REF #_command_.BLOB size.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Blob | Blob | &#8594; | Campo o variable de tipo BLOB |
| Resultado | Integer | &#8592; | Tamaño en bytes del BLOB |
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

<!--REF #_command_.BLOB size.Summary-->BLOB size devuelve el tamaño del *blob* expresado en bytes.<!-- END REF-->

## Ejemplo 

La línea de código añade 100 bytes al BLOB *miBlob*:

```4d
 SET BLOB SIZE(miBlob;BLOB size(miBlob)+100)
```

## Ver también 

[SET BLOB SIZE](../commands/set-blob-size)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 605 |
| Hilo seguro | yes |


