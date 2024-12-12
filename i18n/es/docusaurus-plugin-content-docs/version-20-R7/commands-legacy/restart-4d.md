---
id: restart-4d
title: RESTART 4D
slug: /commands/restart-4d
displayed_sidebar: docs
---

<!--REF #_command_.RESTART 4D.Syntax-->**RESTART 4D** {( *demora* {; *mensaje*} )}<!-- END REF-->
<!--REF #_command_.RESTART 4D.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| demora | Integer | &#8594;  | Tiempo de retardo (segundos) antes que 4D reinicie |
| mensaje | Text | &#8594;  | Texto a mostrar en los equipos clientes |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.RESTART 4D.Summary-->El comando **RESTART 4D** provoca el reinicio de la aplicación 4D actual.<!-- END REF-->  
  
Este comando es para uso en el contexto de una aplicación fusionada (cliente/servidor o mono puesto) y debe ser utilizado en junto con el comando [SET UPDATE FOLDER](set-update-folder.md). En este caso , el proceso de actualización automática se lanza: la nueva versión de la aplicación designada por [SET UPDATE FOLDER](set-update-folder.md) reemplaza automáticamente la versión actual en el momento del reinicio resultantes de **RESTART 4D**. La ruta de acceso al archivo de datos se guarda y se utiliza de forma automática.  
  
Si no se ha definido información de actualización utilizando el comando [SET UPDATE FOLDER](set-update-folder.md) en la sesión actual, el comando reinicia simplemente la aplicación 4D con los archivos de estructura y de datos actuales.  
  
Puede utilizar el parámetro *demora* para aplazar el reinicio de la aplicación con el fin de dar a los equipos cliente tiempo para desconectarse. Debe pasar un valor en segundos en *demora*. Si omite este parámetro, la aplicación servidor espera un máximo de 10 minutos, para que todas las aplicaciones cliente se desconecten. Después de este tiempo, todas las aplicaciones cliente se desconectan automáticamente.  
  
**Nota**: los parámetros *demora* y *mensaje* sólo se tienen en cuenta con las aplicaciones servidor (se ignoran en el caso de una aplicación monopuesto o en un 4D remoto).  
  
El parámetro opcional   *mensaje* muestra un mensaje personalizado para las aplicaciones cliente conectadas.  
  
Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1, de lo contrario, toma el valor 0 y se reinicia la aplicación. Puede interceptar los errores generados por el comando utilizando un método instalado utilizando el comando [ON ERR CALL](on-err-call.md).

#### Ver también 

[Get last update log path](get-last-update-log-path.md)  
[SET UPDATE FOLDER](set-update-folder.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1292 |
| Hilo seguro | &check; |
| Modifica variables | OK, error |


