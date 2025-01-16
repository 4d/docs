---
id: blob-size
title: BLOB size
slug: /commands/blob-size
displayed_sidebar: docs
---

<!--REF #_command_.BLOB size.Syntax-->**BLOB size** ( *BLOB* ) : Integer<!-- END REF-->
<!--REF #_command_.BLOB size.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | Campo o variable de tipo BLOB |
| Resultado | Integer | &#8592; | Tamaño en bytes del BLOB |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.BLOB size.Summary-->BLOB size devuelve el tamaño del *blob* expresado en bytes.<!-- END REF-->

#### Ejemplo 

La línea de código añade 100 bytes al BLOB *miBlob*:

```4d
 SET BLOB SIZE(miBlob;BLOB size(miBlob)+100)
```

#### Ver también 

[SET BLOB SIZE](set-blob-size.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 605 |
| Hilo seguro | &check; |


