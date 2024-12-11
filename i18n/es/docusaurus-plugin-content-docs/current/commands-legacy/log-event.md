---
id: log-event
title: LOG EVENT
slug: /commands/log-event
displayed_sidebar: docs
---

<!--REF #_command_.LOG EVENT.Syntax-->**LOG EVENT** ( {*tipoSalida* ;} *mensaje* {; *importancia*} )<!-- END REF-->
<!--REF #_command_.LOG EVENT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tipoSalida | Integer | &#8594;  | Tipo de salida del mensaje |
| mensaje | Text | &#8594;  | Contenido del mensaje |
| importancia | Integer | &#8594;  | Nivel de importancia del mensaje (sólo para Windows) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LOG EVENT.Summary-->El comando **LOG EVENT** permite configurar un sistema personalizado de registro de eventos internos que ocurren durante el uso de su aplicación.<!-- END REF-->

Pase en el parámetro *mensaje* la información personalizada a notar en función del evento.

El parámetro opcional *tipoSalida* permite precisar el canal de salida tomado por el *mensaje*. Puede pasar en este parámetro una de las siguientes constantes, ubicadas en el tema *Historial de eventos*:

| Constante                    | Tipo         | Valor | Comentario                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------- | ------------ | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Into 4D commands log         | Entero largo | 3     | Indica a 4D grabar el *mensaje* en el archivo de historial de los comandos de 4D, si este archivo se ha activado. *El archivo de historial de comandos de 4D puede activarse utilizando el comando [SET DATABASE PARAMETER](set-database-parameter.md) (selector 34*).<br/>**Nota:** los archivos de historial de 4D se agrupan en la carpeta **Logs** (ver el comando *[Get 4D folder](get-4d-folder.md)*).                                                                        |
| Into 4D debug message        | Entero largo | 1     | Indica a 4D enviar el *mensaje* al entorno de depuración del sistema. El resultado depende de la plataforma:<br/>En macOS: el comando envía el mensaje a la ConsolaBajo Windows: el comando envía el mensaje como un mensaje de depuración. Para poder leer este mensaje, debe tener Microsoft Visual Studio o DebugView para Windows (<http://technet.microsoft.com/en-us/sysinternals/bb896647.aspx>)                                                                          |
| Into 4D diagnostic log       | Entero largo | 5     | Le indica a 4D poner el mensaje en el archivo de diagnóstico de 4D, si este archivo está activo.<br/>El archivo de diagnóstico puede activarse con ayuda del comando [SET DATABASE PARAMETER](set-database-parameter.md) (*selector 79*).                                                                                                                                                                                                                                           |
| Into 4D request log          | Entero largo | 2     | Indica a 4D grabar el *mensaje* en el archivo de historial de peticiones de 4D, si este archivo ha sido activado                                                                                                                                                                                                                                                                                                                                                                            |
| Into system standard outputs | Entero largo | 6     | Indica a 4D enviar el *mensaje* a un flujo de salida estándar. El mensaje se envía a: **stdout** si *importance* \= Information message o Warning message **stderr** si *importance* \= Error message                                                                                                                                                                                                                                                                                       |
| Into Windows log events      | Entero largo | 0     | Indica a 4D enviar el *mensaje* “Log events” de Windows. Este historial recibe y almacena los mensajes que vienen de las aplicaciones en ejecución. En este caso, puede definir el nivel de importancia del *mensaje* vía el parámetro opcional *importancia* (ver a continuación).**<br/>Notas:** <br/>para que esta funcionalidad esté disponible, el servicio Log Events de Windows debe estar en ejecución. Bajo macOS, el comando no hace nada con este tipo de salida |

Si omite el parámetro *tipoSalida,* el valor 0 se utiliza por defecto (Into Windows Log Events).

Puede atribuir un nivel de importancia a *mensaje*, mediante el parámetro opcional *importancia*, que le ayuda a leer y comprender los eventos de registro. Hay tres niveles de importancia: Información, Advertencia y Error.  4D le suministra las siguientes constantes predefinidas:

| Constante           | Tipo         | Valor |
| ------------------- | ------------ | ----- |
| Error message       | Entero largo | 2     |
| Information message | Entero largo | 0     |
| Warning message     | Entero largo | 1     |

Si no pasa nada en el parámetro *importancia* o si pasa un valor invalido, se utiliza el valor por defecto (0).

:::note

El parámetro *importancia* sólo se utiliza con *tipoSalida* `Into Windows log events`, `Into 4D diagnostic log`, y `Into system standard outputs`.

:::

#### Ejemplo 

Si quiere realizar un seguimiento de las aperturas de su base bajo Windows, puede escribir la siguiente línea de código en el [Método base On Startup](metodo-base-on-startup.md):

```4d
 LOG EVENT(Into Windows log events;"The Invoice database was opened.")
```

Cada vez que se abre la base, esta información se escribirá en el visor de eventos de Windows y su nivel de importancia será 0.

#### Ver también 

[SET DATABASE PARAMETER](set-database-parameter.md)  


#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 667 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


