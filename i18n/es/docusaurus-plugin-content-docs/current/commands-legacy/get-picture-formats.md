---
id: get-picture-formats
title: GET PICTURE FORMATS
slug: /commands/get-picture-formats
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE FORMATS.Syntax-->**GET PICTURE FORMATS** ( *imagen* ; *codecIDs* )<!-- END REF-->
<!--REF #_command_.GET PICTURE FORMATS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| imagen | Picture | &#8594;  | Campo o variable imagen a analizar |
| codecIDs | Text array | &#8592; | IDs de codec Imagen |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET PICTURE FORMATS.Summary-->**Tema:** Imágenes

El comando **GET PICTURE FORMATS** devuelve un array de todos los IDs codec (formatos imagen) contenidos en la *imagen* pasada como parámetro.<!-- END REF-->Una imagen 4D (campo o variable) puede contener la misma imagen codificada en diferentes formatos, tales como PNG, BMP, GIF... 

En el parámetro *imagen*, se pasa una variable imagen cuyos formatos desea que se devuelvan en el array *codecIDs*. 

Los identificadores codec devueltos son definidos por 4D exactamente de la misma manera que para el comando **PICTURE CODEC LIST**[PICTURE CODEC LIST](picture-codec-list.md). Pueden ser devueltos de las siguientes formas:

* Como extensiones (por ejemplo, ".gif")
* Como tipos Mime (por ejemplo, “image/jpeg”)
* Como códigos QuickTime de 4 caracteres

**Notas:** 

* Los siguientes codecs, manejados internamente por 4D, siempre se devuelven como extensiones: JPEG, PNG, TIFF, GIF, BMP, SVG, PDF, EMF.
* Los códigos QuickTime de 4 caracteres pueden ser devueltos en las bases de datos donde la opción de compatibilidad QuickTime support ha sido definida (utilizando el comando **SET DATABASE PARAMETER**[SET DATABASE PARAMETER](set-database-parameter.md)). Sin embargo, QuickTime ya no se soporta en 4D y no se recomienda el uso de codecs QuickTime.

Para más información sobre los IDs codec imagen, consulte la sección **Imágenes**.

#### Ejemplo 

Usted quiere saber los formatos de imagen almacenados en un campo para el registro actual:

```4d
 ARRAY TEXT($aTPictureFormats;0)
  //Obtener todos los formatos guardados
 GET PICTURE FORMATS([Employees]Photo;$aTPictureFormats)
```

#### Ver también 

  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1406 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


