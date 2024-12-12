---
id: is-picture-file
title: Is picture file
slug: /commands/is-picture-file
displayed_sidebar: docs
---

<!--REF #_command_.Is picture file.Syntax-->**Is picture file** ( *rutaArchivo* {; *} ) : Boolean<!-- END REF-->
<!--REF #_command_.Is picture file.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rutaArchivo | Text | &#8594;  | Ruta de acceso del archivo |
| * | Operador | &#8594;  | Validar los datos |
| Resultado | Boolean | &#8592; | True = rutaArchivo designa un archivo imagen, de lo contrario False |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Is picture file.Summary-->El comando Is picture file prueba el archivo designado por el parámetro *rutaArchivo* y devuelve True si es un archivo de imagen válido.<!-- END REF--> El comando devuelve False si el archivo no es de tipo imagen o si no se encuentra.   
  
Pase en el parámetro *rutaArchivo* la ruta de acceso del archivo imagen a probar. La ruta debe expresarse con la sintaxis del sistema. Puede pasar una ruta de acceso absoluta o relativa al archivo de estructura de la base. Si pasa una cadena vacía (""), el comando devuelve False.   
  
Si no pasa el parámetro *\**, el comando prueba el archivo buscando su extensión en la lista de codecs disponibles. Si quiere probar los archivos sin extensiones o efectuar una verificación más exhaustiva, pase el parámetro \*. En este caso, el comando hace pruebas adicionales: carga e inspecciona el encabezado del archivo e interroga los codecs con el fin de validar la imagen. Esta sintaxis ralentiza la ejecución de comandos.  
  
**Nota**: el comando devuelve True para los archivos PDF en Windows y archivos EMF bajo Mac OS.

#### Ver también 

[PICTURE CODEC LIST](picture-codec-list.md)  