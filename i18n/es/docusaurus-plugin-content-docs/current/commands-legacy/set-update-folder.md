---
id: set-update-folder
title: SET UPDATE FOLDER
slug: /commands/set-update-folder
displayed_sidebar: docs
---

<!--REF #_command_.SET UPDATE FOLDER.Syntax-->**SET UPDATE FOLDER** ( *rutaCarpeta* {; *erroresDiscretos*} )<!-- END REF-->
<!--REF #_command_.SET UPDATE FOLDER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rutaCarpeta | Text | &#8594;  | Ruta de acceso de la carpeta (paquete bajo OS X) que contiene la aplicación actualizada |
| erroresDiscretos | Boolean | &#8594;  | False (por defecto) = mostrar mensajes de error, <br/>True = no reportarlos |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.SET UPDATE FOLDER.Summary-->El comando **SET UPDATE FOLDER** especifica la carpeta que contiene la actualización de la aplicación 4D fusionada actual.<!-- END REF--> Esta información se almacena en la sesión 4D hasta que se llama el método [RESTART 4D](restart-4d.md). Si se sale de la aplicación manualmente, esta información no se conserva.  
  
Este comando está destinado a ser utilizado en un proceso de actualización automática de una aplicación fusionada (servidor o monopuesto). Para más información, consulte el capítulo *Terminar y desplegar aplicaciones finales* en el Manual de *Diseño*.  
  
**Nota**: este comando sólo funciona con 4D Server o con una aplicación monopuesto fusionada con 4D Volume Desktop.

En el parámetro *rutaCarpeta*, pase la ruta de acceso completa de la carpeta de la nueva versión de la aplicación fusionada (carpeta que contiene la aplicación *my4DApp.exe* bajo Windows o el paquete *my4DApp.app* bajo OS X), creado por el generador de aplicaciones de 4D. La nueva versión debe haber sido generada por el generador de aplicaciones de 4D v14\. En particular, debe contener una versión actualizada de la herramienta "updater" incluida en 4D y que se utiliza para administrar las actualizaciones remotas.  
  
**Nota**: le recomendamos que utilice los mismos nombres de la versión original para los archivos de la nueva versión de la aplicación, ya que la carpeta de la aplicación se sustituye durante la actualización. Si utiliza nombres diferentes para estos archivos, los atajos y/o rutas almacenados ya no funcionarán más.  
  
Si los parámetros son válidos, la actualización se pone "en espera" en la sesión hasta que se llame el comando [RESTART 4D](restart-4d.md). Si ha ejecutado varias veces **SET UPDATE FOLDER** antes de llamar a \[[RESTART 4D](restart-4d.md), se tiene en cuenta la última llamada válida.  
  
Puede pasar una cadena vacía ("" ) en el parámetro *rutaCarpeta* para reinicializar la información de actualización para la sesión actual.  
  
El parámetro opcional *erroresDiscretos* especifica cómo se reportan los errores por la herramienta "updater":  
* si pasa **False** o si se omite este parámetro, los errores se registran en el historial de actualización y se muestran en una caja de diálogo de alerta.
* si pasa **True**, los errores sólo se registran en el historial de actualización.
Excepción: si la herramienta "updater" no puede crear el archivo de historial, se muestra una caja de diálogo de alerta, independientemente del valor del parámetro *erroresDiscretos*. Para más información, consulte la descripción del comando [Get last update log path](get-last-update-log-path.md).  
  
Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1, de lo contrario, toma el valor 0\. Puede interceptar los errores generados por el comando utilizando un método instalado utilizando el comando [ON ERR CALL](on-err-call.md).

#### Ejemplo 

Usted creó una carpeta "MyUpdates" en su disco, en la cual ubicó una nueva versión de la aplicación "MyApp". Usted no desea mostrar los errores. Para preparar la actualización, escribe:

```4d
  // Sintaxis Windows
 SET UPDATE FOLDER("C:\\MyUpdates"+Folder separator+"MyApp"+Folder separator;True)
 
  // Sintaxis OS X
 SET UPDATE FOLDER("MacHD:MyUpdates"+Folder separator+"MyApp.app"+Folder separator;True)
```

#### Ver también 

[Get last update log path](get-last-update-log-path.md)  
[RESTART 4D](restart-4d.md)  