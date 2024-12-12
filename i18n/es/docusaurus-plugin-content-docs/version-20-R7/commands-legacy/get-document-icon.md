---
id: get-document-icon
title: GET DOCUMENT ICON
slug: /commands/get-document-icon
displayed_sidebar: docs
---

<!--REF #_command_.GET DOCUMENT ICON.Syntax-->**GET DOCUMENT ICON** ( *rutaDoc* ; *icono* {; *tamaño*} )<!-- END REF-->
<!--REF #_command_.GET DOCUMENT ICON.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rutaDoc | Text | &#8594;  | Nombre o ruta de acceso del archivo del cual obtener el icono o cadena vacía para mostrar la caja de diálogo de apertura de archivos |
| icono | Picture, Picture | &#8592; | Icono de documentación |
| tamaño | Integer | &#8594;  | Tamaño del icono (en píxeles) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET DOCUMENT ICON.Summary-->El comando GET DOCUMENT ICON devuelve en el campo o la variable imagen 4D *icono*, el icono del documento cuyo nombre o ruta de acceso se pasa en *rutaDoc*.<!-- END REF--> *rutaDoc* puede especificar un archivo de todo tipo (ejecutable, documento, atajo o alias, etc.) o una carpeta. 

Pase en *rutaDoc* la ruta de acceso absoluta del documento. Igualmente, puede pasar únicamente el nombre del documento o ruta de acceso relativa, en este caso el documento debe encontrarse en el directorio actual de la base (generalmente, la carpeta que contiene el archivo de estructura de la base).

Si pasa una cadena vacía en *rutaDoc*, aparece la caja de diálogo estándar de apertura de archivos, permitiendo al usuario seleccionar el archivo a leer. Una vez se valida la caja de diálogo, la variable sistema Document contiene la ruta de acceso completa del archivo seleccionado. 

Pase en *icono* un campo o una variable imagen 4D. Después de la ejecución del comando, este parámetro contiene el icono del archivo (formato PICT).

El parámetro opcional *tamaño* permite indicar las dimensiones en píxeles del icono. Este valor representa el largo del cuadrado incluyendo el icono. Generalmente, los iconos se definen de 32x32 píxeles (“iconos largos”) o 16x16 píxeles (“iconos pequeños”). Si pasa 0 u omite este parámetro, el comando devuelve el icono más grande disponible.
