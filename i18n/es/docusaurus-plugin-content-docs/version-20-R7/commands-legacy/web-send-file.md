---
id: web-send-file
title: WEB SEND FILE
slug: /commands/web-send-file
displayed_sidebar: docs
---

<!--REF #_command_.WEB SEND FILE.Syntax-->**WEB SEND FILE** ( *archivohtml* )<!-- END REF-->
<!--REF #_command_.WEB SEND FILE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| archivohtml | Text | &#8594;  | Ruta de acceso HTML al archivo HTML o cadena vacía para terminar SEND HTML FILE |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WEB SEND FILE.Summary-->El comando **WEB SEND FILE** envía al navegador web la página HTML o el archivo web almacenado en el documento cuya ruta se pasa en *archivohtml*.<!-- END REF--> 

Por defecto, 4D busca el documento HTML al interior de la carpeta raíz, definida en las Propiedades de la base.  
Este comando acepta como parámetro una ruta de acceso expresada en sintaxis Poxis (nombres de directorios o de carpetas separados por una barra oblicua "/") o en sintaxis sistema.  
Si pasa una ruta de acceso inválida, se genera un error asociado a la gestión de los archivos de su sistema operativo. Puede interceptar este error utilizando un método instalado por el comando [ON ERR CALL](on-err-call.md). Si el método muestra una caja de diálogo de alerta o de mensaje, aparecerá en el equipo del navegador. 

Una vez se ejecuta **WEB SEND FILE**, la variable sistema OK se actualiza: si el archivo a enviar existe y si el timeout no ha pasado, OK toma el valor 1\. De lo contrario, toma el valor 0\. 

**Nota:** si llama **WEB SEND FILE** desde un proceso que no es un proceso web, el comando no hace nada. No se devuelve ningún error y la llamada simplemente se ignora.

Las referencias a las variables 4D y a las etiquetas de tipo *4DSCRIPT* en la página siempre se analizan cuando el tipo de documento lo permite (documento basado en texto). 

#### Ejemplo 

La carpeta raíz HTML de la base es la carpeta *WebDocs*. Contiene los siguientes elementos:   
  
.

```4d
 .\WebDocs\HTM\MiPagina.HTM
```

El envío de la página web *"MiPagina.HTM"* debe efectuarse de la siguiente forma:

```4d
 WEB SEND FILE("HTM/MiPagina.HTM")
```

#### Variables y conjuntos del sistema 

Si el archivo a enviar existe y si el timeout no ha pasado, OK toma el valor 1\. De lo contrario, toma el valor 0.

#### Ver también 

[WEB SEND BLOB](web-send-blob.md)  