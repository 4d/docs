---
id: set-file-to-pasteboard
title: SET FILE TO PASTEBOARD
slug: /commands/set-file-to-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.SET FILE TO PASTEBOARD.Syntax-->**SET FILE TO PASTEBOARD** ( *archivo* {; *} )<!-- END REF-->
<!--REF #_command_.SET FILE TO PASTEBOARD.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| archivo | Text | &#8594;  | Nombre del archivo o ruta de acceso completa del archivo |
| * | Operador | &#8594;  | Si se pasa = añadir; Si se omite= reemplazar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET FILE TO PASTEBOARD.Summary-->El comando SET FILE TO PASTEBOARD añade al portapapeles la ruta de acceso completa del archivo pasada en el parámetro *archivo*.<!-- END REF--> Este comando permite crear interfaces permitiendo arrastrar y soltar objetos 4D a los archivos en el escritorio por ejemplo.  
  
En el parámetro *archivo*, puede pasar una ruta de acceso completo o un simple nombre de archivo (sin ruta de acceso). En el último caso, el archivo debe estar ubicado junto al archivo de estructura de la base.  
  
El comando admite el asterisco *\** como parámetro opcional. Por defecto, cuando se omite este parámetro, el comando reemplaza el contenido del portapapeles por la última ruta de acceso definida por *archivo*. Si pasa este parámetro, el comando añade el *archivo* al portapapeles. De esta forma puede contener una "pila" de rutas de acceso de archivos. En ambos casos, se borran los datos diferentes a las rutas de acceso que estén en el portapapeles.  

**Nota:** el portapapeles está en modo sólo lectura durante el evento de formulario On Drag Over. Por lo tanto no es posible utilizar este comando en ese contexto.

#### Ver también 

[Get file from pasteboard](get-file-from-pasteboard.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 975 |
| Hilo seguro | &cross; |


