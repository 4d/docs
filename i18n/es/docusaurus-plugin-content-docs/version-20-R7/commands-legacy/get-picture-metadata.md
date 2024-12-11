---
id: get-picture-metadata
title: GET PICTURE METADATA
slug: /commands/get-picture-metadata
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE METADATA.Syntax-->**GET PICTURE METADATA** ( *imagen* ; *nomMeta* ; *ContenidoMeta* {; *nomMeta2* ; *ContenidoMeta2* ; ... ; *nomMetaN* ; *ContenidoMetaN*} )<!-- END REF-->
<!--REF #_command_.GET PICTURE METADATA.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| imagen | Picture | &#8594;  | Imagen de la cual obtener los metadatos |
| nomMeta | Text | &#8594;  | Nombre o ruta de acceso del bloque a leer |
| ContenidoMeta | Variable | &#8592; | Contenido del metadato |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET PICTURE METADATA.Summary-->El comando **GET PICTURE METADATA** permite leer el contenido de los metadatos (o meta-tags) presentes en *imagen* (campo o variable imagen 4D).<!-- END REF--> Para mayor información sobre metadatos, consulte la descripción del comando [SET PICTURE METADATA](set-picture-metadata.md).

En el parámetro *nomMeta*, pase una cadena especificando el tipo de metadato a recuperar. Puede pasar:

* una constante del tema *Nombres de metadatos imágenes* con una ruta de etiqueta,
* el nombre de un bloque completo de metadatos ("TIFF", "EXIF", "GPS" o "IPTC"),
* una cadena vacía ("").

Pase en el parámetro *ContenidoMeta* la variable destinada a recibir los metadatos. 

* Si pasa una ruta de etiqueta en *nomMeta*, el parámetro *ContenidoMeta* contiene directamente el valor a leer. El valor se convertirá en el tipo de la variable (si el tipo de variable no se ha definido, se utilizará el tipo texto por defecto. Las variables de tipo texto serán formateadas en XML (estándar XMP). Puede pasar un array cuando el metadato contiene más de un valor (este es el caso, particularmente, para las etiquetas IPTC Keywords).
* Si pasa un nombre de bloque o una cadena vacía en *nomMeta*, el parámetro *ContenidoMeta* debe ser una referencia valida del elemento DOM XML. En este caso, el contenido del bloque designado (o de todos los bloques si pasó una cadena vacía en *nomMeta*) se copia nuevamente en el elemento de referencia.

#### Ejemplo 1 

Uso de estructuras de árbol DOM

```4d
 $xml:=DOM Create XML Ref("Root") //Creación de un árbol XML DOM
 
  //Recepción de los metadatos TIFF
 $_Xml_TIFF:=DOM Create XML element($xml;"/Root/TIFF")
 GET PICTURE METADATA(vImagen;"TIFF";$_Xml_TIFF)
 
  //Recepción de los metadatos GPS
 $_Xml_GPS:=DOM Create XML element($xml;"/Root/GPS")
 GET PICTURE METADATA(vImagen;"GPS";$_Xml_GPS)
```

#### Ejemplo 2 

Uso de variables

```4d
 var $fechaComoFecha : Date
 GET PICTURE METADATA(vImagen;TIFF DateTime;$fechaComoFecha)
  //devuelve únicamente la fecha ya que $fechaComoFecha es de tipo Fecha
 
 var $fechaComoTexto : Text
 GET PICTURE METADATA(vImagen;TIFF/DateTime;$fechaComoTexto)
  //devuelve únicamente la fecha en formato XML
 
 C_INTEGER($urgency)
 GET PICTURE METADATA(vImagen;IPTC urgency;$urgencia)
```

#### Ejemplo 3 

Recepción de etiquetas con valores múltiples en arrays

```4d
 ARRAY TEXT($tTkeywords;0)
 GET PICTURE METADATA(vImagen;IPTC keywords;$tTkeywords)
```

Después de la ejecución del comando, arrTkeywords contiene por ejemplo:   

```4d
 $arrTkeywords{1}="Francia"
 $arrTkeywords{2}="Europa"
```

#### Ejemplo 4 

Recepción de etiquetas con valores múltiples en una variable Texto

```4d
 var $vTwords;0 : Text
 GET PICTURE METADATA(vImagen;IPTC keywords;$vTwords)
```

Después de la ejecución del comando, *vTwords* contiene por ejemplo "Francia;Europa".

#### Variables y conjuntos del sistema 

La variable sistema *OK* devuelve 1 si la recuperación de los metadatos es correcta y 0 si se produce un error o si no se encuentra al menos una de las etiquetas. En todos los casos, se devuelven los valores legibles.

#### Ver también 

[GET PICTURE KEYWORDS](get-picture-keywords.md)  
*Nombres de metadatos imágenes*  
*Picture Metadata Values*  
[SET PICTURE METADATA](set-picture-metadata.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1122 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


