---
id: move-document
title: MOVE DOCUMENT
slug: /commands/move-document
displayed_sidebar: docs
---

<!--REF #_command_.MOVE DOCUMENT.Syntax-->**MOVE DOCUMENT** ( *rutaFuente* ; *rutaDest* )<!-- END REF-->
<!--REF #_command_.MOVE DOCUMENT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rutaFuente | Text | &#8594;  | Ruta de acceso completa al documento existente |
| rutaDest | Text | &#8594;  | Ruta de acceso de destino |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.MOVE DOCUMENT.Summary-->El comando MOVE DOCUMENT mueve o renombra un documento.<!-- END REF--> 

Pase la ruta de acceso completa al documento existente en *rutaFuente* y el nuevo nombre y/o ubicación del documento en *rutaDest*.

**Advertencia:** utilizando MOVE DOCUMENT, puede mover un documento desde y hacia cualquier directorio en el mismo volumen. Si quiere mover un documento entre dos volúmenes diferentes, utilice el comando [COPY DOCUMENT](copy-document.md "COPY DOCUMENT") para “mover” el documento luego borre la copia original con el comando [DELETE DOCUMENT](delete-document.md "DELETE DOCUMENT").

#### Ejemplo 1 

El siguiente ejemplo renombra el documento DocNombre:

```4d
 MOVE DOCUMENT("C:\\CARPETA\\DocNombre";"C:\\CARPETA\\NewDocNombre")
```

#### Ejemplo 2 

El siguiente ejemplo mueve y renombre el documento DocNombre:

```4d
 MOVE DOCUMENT("C:\\CARPETA1\\DocNombre";"C:\\CARPETA2\\NewDocNombre")
```

#### Ejemplo 3 

El siguiente ejemplo mueve el documento DocName:

```4d
 MOVE DOCUMENT("C:\\CARPETA1\\DocNombre";"C:\\CARPETA2\\DocNombre")
```

**Nota:** en los dos últimos ejemplos, debe existir la carpeta de destino *"C:\\\\CARPETA2"*. El comando MOVE DOCUMENT sólo mueve un documento; no crea carpetas.

#### Ver también 

[COPY DOCUMENT](copy-document.md)  