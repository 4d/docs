---
id: delete-folder
title: DELETE FOLDER
slug: /commands/delete-folder
displayed_sidebar: docs
---

<!--REF #_command_.DELETE FOLDER.Syntax-->**DELETE FOLDER** ( *carpeta* {; *opcionEliminacion*} )<!-- END REF-->
<!--REF #_command_.DELETE FOLDER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| carpeta | Text | &#8594;  | Nombre o ruta de acceso completa de la carpeta a borrar |
| opcionEliminacion | Integer | &#8594;  | Opción de eliminación de la carpeta |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DELETE FOLDER.Summary-->El comando **DELETE FOLDER**borra la carpeta cuyo nombre o ruta completa se pasa en *carpeta*.<!-- END REF--> 

Por defecto, por razones de seguridad, si se omite el parámetro *opcionEliminacion*, **DELETE FOLDER** sólo permite carpetas vacías a eliminar. Si desea que el comando pueda eliminar carpetas no vacías, debe utilizar el parámetro *opcionEliminacion*. En *opcionEliminacion*, puede pasar una de las siguientes constantes, que se encuentra en el tema "*Documentos sistema*":

| Constante            | Tipo         | Valor | Comentario                                     |
| -------------------- | ------------ | ----- | ---------------------------------------------- |
| Delete only if empty | Entero largo | 0     | Elimina la carpeta sólo cuando está vacía      |
| Delete with contents | Entero largo | 1     | Elimina la carpeta junto con todo su contenido |

* Cuando se pasa Delete only if empty (0) o si se omite el parámetro *opcionEliminacion*:  
   * La carpeta especificada en el parámetro *carpeta* solamente se borra si está vacía; de lo contrario, el comando no hace nada y se genera un error \-47 (el archivo ya está abierto, o la carpeta no está vacía).  
   * Si la carpeta especificada no existe, se genera el error \-120 (Intento de acceso a un archivo con una ruta de acceso que especifica un directorio no existente).
* Cuando se pasa Delete with contents (1):  
   * Se elimina la carpeta, junto con todo su contenido.  
   **Advertencia:** incluso cuando esta carpeta y/o su contenido están bloqueados o en modo sólo lectura, si el usuario actual tiene los derechos de acceso adecuados, se eliminan.  
   * Si esta carpeta, o cualquiera de los archivos que contiene, no se pueden eliminar, la eliminación se interrumpe tan pronto como se detecta el primer elemento inaccesible, y se devuelve un error (\*). En este caso, la carpeta se puede eliminar sólo parcialmente. Cuando se cancela la eliminación, puede utilizar el comando \[#cmd id="1015"/\] para recuperar el nombre y la ruta del archivo que origina el error.  
   * Si la carpeta especificada no existe, el comando no hace nada y ningún error se devuelve.  
   (\*) En Windows: -54 (Intento de abrir un archivo bloqueado para escritura)  
   En OS X: -45 (El archivo está bloqueado o la ruta de acceso no es correcta)

Puede interceptar estos errores utilizando un método instalado por el comando [ON ERR CALL](on-err-call.md).  

#### Ver también 

  
[DELETE DOCUMENT](delete-document.md)  