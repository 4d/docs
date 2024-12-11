---
id: set-blob-size
title: SET BLOB SIZE
slug: /commands/set-blob-size
displayed_sidebar: docs
---

<!--REF #_command_.SET BLOB SIZE.Syntax-->**SET BLOB SIZE** ( *BLOB* ; *tamaño* {; *relleno*} )<!-- END REF-->
<!--REF #_command_.SET BLOB SIZE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | Campo o variable de tipo BLOB |
| tamaño | Integer | &#8594;  | Nuevo tamaño del BLOB |
| relleno | Integer | &#8594;  | Código ASCII del caracter de relleno |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET BLOB SIZE.Summary-->SET BLOB SIZE redimensiona el BLOB *blob* de acuerdo al valor pasado en *tamaño*.<!-- END REF-->

Si quiere asignar nuevos bytes a un BLOB y quiere inicializar estos bytes en un valor especifico, pase este valor (0..255) en el parámetro opcional *relleno*.

##### Nota 

**Nota de compatibilidad**: como este comando altera el blob pasado como parámetro, no soporta objetos blob (tipo 4D.Blob). Ver *Pasar blobs y objetos blob a comandos 4D* en developer.4d.com.

#### Manejo de errores 

Si no puede redimensionar un BLOB por memoria insuficiente, se genera el error -108\. Puede interceptar este error utilizando el método de interrupción [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Ejemplo 1 

Cuando usted ha terminado con un gran BLOB proceso o interproceso, es buena idea liberar la memoria que ocupa. Para hacer esto, escriba:

```4d
 SET BLOB SIZE(aProcessBLOB;0)
 SET BLOB SIZE(◊anInterprocessBLOB;0)
```

#### Ejemplo 2 

El siguiente ejemplo crea un BLOB de 16K lleno de 0xFF:

```4d
 var vxData : Blob
 SET BLOB SIZE(vxData;16*1024;0xFF)
```

#### Ver también 

[BLOB size](blob-size.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 606 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


