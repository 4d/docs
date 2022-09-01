---
id: debugLogFiles
title: Descripción de los archivos históricos
---

Las aplicaciones 4D pueden generar varios archivos de historial que son útiles para depurar u optimizar su ejecución. Los historiales suelen iniciarse o detenerse utilizando selectores de los comandos [SET DATABASE PARAMETER](https://doc.4d.com/4dv19/help/command/en/page642.html) o [WEB SET OPTION](https://doc.4d.com/4dv19/help/command/en/page1210.html) y se almacenan en la carpeta [Logs folder](Project/architecture.md#logs) del proyecto.

La información histórica debe ser analizada para detectar y solucionar los problemas. Esta sección ofrece una descripción completa de los siguientes archivos de registro:

* [4DRequestsLog.txt](#4drequestslogtxt)
* [4DRequestsLog_ProcessInfo.txt](l#4drequestslog_processinfotxt)
* [HTTPDebugLog.txt](#httpdebuglogtxt)
* 4DDebugLog.txt ([standard](#4ddebuglogtxt-standard) & [tabular](#4ddebuglogtxt-tabular))
* [4DDiagnosticLog.txt](#4ddiagnosticlogtxt)
* [4DIMAPLog.txt](#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
* [4DPOP3Log.txt](#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
* [4DSMTPLog.txt](#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
* [Archivo de historial de peticiones ORDA clientes](#orda-client-requests)

> Cuando un archivo de historial puede generarse tanto en 4D Server como en el cliente remoto, se añade la palabra "Server" al nombre del archivo de historial del lado del servidor, por ejemplo "4DRequestsLogServer.txt"

Los archivos de historial comparten algunos campos para que pueda establecer una cronología y hacer conexiones entre las entradas mientras depura:

* `sequence_number`: este número es único en todos los registros de depuración y se incrementa para cada nueva entrada cualquiera que sea el archivo de historial, para que pueda conocer la secuencia exacta de las operaciones.
* `connection_uuid`: para cada proceso 4D creado en un cliente 4D que se conecte a un servidor, este UUID de conexión se registra tanto del lado del servidor como del cliente. Permite identificar fácilmente el cliente remoto que lanzó cada proceso.

## 4DRequestsLog.txt

Este archivo de historial registra las solicitudes estándar llevadas a cabo por la máquina 4D Server o la máquina remota 4D que ejecutó el comando (excluyendo las solicitudes web).

Como iniciar este historial:

* en el servidor:

```4d
SET DATABASE PARAMETER(4D Server log recording;1)
//del lado del servidor
```

* en un cliente:

```4d
SET DATABASE PARAMETER(Client Log Recording;1)
//del lado remoto
```
> Esta instrucción también inicia el archivo de historial [4DRequestsLog_ProcessInfo.txt](#4drequestslog_processinfotxt).

#### Encabezados

Este archivo comienza con los siguientes encabezados:

* Log Session Identifier (Identificador de sesión de historial)
* Nombre del servidor que aloja la aplicación
* Nombre de usuario: nombre de usuario en el sistema operativo que ejecutó la aplicación 4D en el servidor.

#### Contenido

Para cada petición, se registran los siguientes campos:

| Nombre del campo                           | Descripción                                                                                                                                                                                                        |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| sequence_number                            | Número de operación único y secuencial en la sesión de historial                                                                                                                                                   |
| time                                       | Fecha y hora utilizando el formato ISO 8601: 'YYYY-MM-DDTHH:MM:SS.mmm'                                                                                                                                             |
| systemid                                   | ID del sistema                                                                                                                                                                                                     |
| component                                  | Firma del componente (por ejemplo, "4SQLS" o "dbmg")                                                                                                                                                               |
| process\_info_                           | index Corresponds to the "index" field in 4DRequestsLog_ProcessInfo.txt log, and permits linking a request to a process.                                                                                           |
| request                                    | ID de petición en modo remoto cadena de mensajes para las peticiones SQL o mensajes `LOG EVENT`                                                                                                                    |
| bytes_in                                   | Número de bytes recibidos                                                                                                                                                                                          |
| bytes_out                                  | Número de bytes enviados                                                                                                                                                                                           |
| server\_duration &#124; exec\_duration | Depende de dónde se genere el registro:<li>*server\_duration* cuando se genera en el cliente --Tiempo que tarda el servidor en procesar la petición y devolver una respuesta en microsegundos. B a F en la imagen de abajo, O</li><li>*exec\_duration* cuando se genera en el servidor --Tiempo en microsegundos que tarda el servidor en procesar la petición. B a E en la imagen de abajo.</li>                                                                                                                          |
| write\_duration                          | Tiempo de envío en microsegundos:<li>La petición (cuando se ejecuta en el cliente). A a B en la imagen de abajo.</li><li>Respuesta (cuando se ejecuta en el servidor). E a F en la imagen de abajo.</li>                                                                                                                                |
| task_kind                                  | Apropiativo o cooperativo (respectivamente "p" o "c")                                                                                                                                                              |
| rtt                                        | Tiempo estimado en microsegundos para que el cliente envíe la solicitud y el servidor la acuse de recibo. De la A a la D y de la E a la H en la imagen de abajo.<li>Sólo se mide cuando se utiliza la capa de red ServerNet, devuelve 0 cuando se utiliza con la capa de red heredada.</li><li>Para las versiones de Windows anteriores a Windows 10 o Windows Server 2016, la llamada devolverá 0.</li> |

Flujo de solicitudes:

![](../assets/en/Admin/logRequestFlow.PNG)

## 4DRequestsLog_ProcessInfo.txt

Este archivo de historial registra la información de cada proceso creado en la máquina 4D Server o en la máquina remota 4D que ejecutó el comando (excluyendo las solicitudes web).

Como iniciar este historial:

* en el servidor:

```4d
SET DATABASE PARAMETER(4D Server log recording;1) //lado servidor
```

* en un cliente:

```4d
SET DATABASE PARAMETER(Client Log Recording;1) //del lado remoto
```
> Esta instrucción también inicia el archivo de historial [4DRequestsLog.txt](#4drequestslogtxt).

#### Encabezados

Este archivo comienza con los siguientes encabezados:

* Log Session Identifier (Identificador de sesión de historial)
* Nombre del servidor que aloja la aplicación
* Nombre de usuario: nombre de usuario en el sistema operativo que ejecutó la aplicación 4D en el servidor.

#### Contenido

Para cada proceso, se registran los siguientes campos:

| Nombre del campo                  | Descripción                                                            |
| --------------------------------- | ---------------------------------------------------------------------- |
| sequence_number                   | Número de operación único y secuencial en la sesión de historial       |
| time                              | Fecha y hora utilizando el formato ISO 8601: 'YYYY-MM-DDTHH:MM:SS.mmm" |
| process\_info\_index          | Número de proceso único y secuencial                                   |
| CDB4DBaseContext                  | UUID del contexto de base del componente DB4D                          |
| systemid                          | ID del sistema                                                         |
| server\_process\_id           | ID del proceso en el servidor                                          |
| remote\_process\_id           | ID del proceso en el cliente                                           |
| process\_name                   | Nombre del proceso                                                     |
| cID                               | Identificador de la conexión 4D                                        |
| uID                               | Identificador del cliente 4D                                           |
| IP Client                         | Dirección IPv4/IPv6                                                    |
| host_name                         | Nombre de host del cliente                                             |
| user_name                         | Nombre de conexión usuario en el cliente                               |
| connection\_uuid                | Identificador UUID de proceso de conexión                              |
| server\_process\_unique\_id | ID único del proceso en el servidor                                    |

## HTTPDebugLog.txt

Este archivo de historial registra cada petición HTTP y cada respuesta en modo bruto (raw). Se registran las solicitudes completas, incluidos los encabezados; opcionalmente, también se pueden registrar las partes del cuerpo.

Como iniciar este historial:

```4d
WEB SET OPTION(Web debug log;wdl enable without body)  
//otros valores están disponibles
```

Los siguientes campos se registran tanto para la solicitud como para la respuesta:

| Nombre del campo | Descripción                                                        |
| ---------------- | ------------------------------------------------------------------ |
| SocketID         | ID del socket utilizado para la comunicación                       |
| PeerIP           | Dirección IPv4 del host (cliente)                                  |
| PeerPort         | Puerto utilizado por host (cliente)                                |
| TimeStamp        | Timestamp en milisegundos (desde el inicio del sistema)            |
| ConnectionID     | Conexión UUID (UUID del VTCPSocket utilizado para la comunicación) |
| SequenceNumber   | Número de operación único y secuencial en la sesión de historial   |

## 4DDebugLog.txt (estándar)

Este archivo de historial registra cada evento que se produce a nivel de programación 4D. El modo estándar ofrece una visión básica de los eventos.

Como iniciar este historial:

```4d
SET DATABASE PARAMETER(Debug Log Recording;2)  
//estándar, todos los procesos

SET DATABASE PARAMETER(Current process debug log recording;2)  
//estándar, sólo el proceso actual
```

Los siguientes campos se registran para cada evento:

| Columna # | Descripción                                                                                                                                        |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1         | Número de operación único y secuencial en la sesión de historial                                                                                   |
| 2         | Fecha y hora en el formato ISO 8601: (YYYY-MM-DDThh:mm:ss.mmm)                                                                                     |
| 3         | ID proceso (p=xx) e ID único proceso (puid=xx)                                                                                                     |
| 4         | Nivel de stack                                                                                                                                     |
| 5         | Puede ser Nombre del comando/Nombre del método/Mensaje/Información de inicio y parada de la tarea/Nombre, evento o callback plugin / UUID conexión |
| 6         | Tiempo de la operación de conexión en milisegundos                                                                                                 |

## 4DDebugLog.txt (tabular)

Este archivo de historial registra cada evento que se produce a nivel de programación 4D en un formato compacto y con pestañas que incluye información adicional (en comparación con el formato estándar).

Como iniciar este historial:

```4d
SET DATABASE PARAMETER(Debug Log Recording;2+4)  
//formato tabular extendido, todos los procesos

SET DATABASE PARAMETER(Current process debug log recording;2+4)  
//extendido, sólo el proceso actual
```

Los siguientes campos se registran para cada evento:

| Columna # | Nombre del campo                | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1         | sequence_number                 | Número de operación único y secuencial en la sesión de historial                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2         | time                            | Fecha y hora en el formato ISO 8601: (YYYY-MM-DDThh:mm:ss.mmm)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 3         | ProcessID                       | ID del Proceso                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 4         | unique_processID                | ID único del proceso                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 5         | stack_level                     | Nivel de stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 6         | operation_type                  | Tipo de operación histórico. Este valor puede ser un valor absoluto:<p><ol><li>Comando</li><li>Método (método de proyecto, método base, etc.)</li><li>Mensaje (enviado por el comando [LOG EVENT](https://doc.4d.com/4dv19/help/command/en/page667.html) únicamente)</li><li>PluginMessage</li><li>PluginEvent</li><li>PluginCommand</li><li>PluginCallback</li><li>Tarea</li><li>Método miembro (método adjunto a una colección o a un objeto)</li></ol></p>Al cerrar un nivel de pila, las columnas `operation_type`, `operation` y `operation_parameters` tienen el mismo valor que el nivel de pila de apertura registrado en la columna `stack_opening_sequence_number`. Por ejemplo:<p><ol><li>121  15:16:50:777  5  8  1  2 CallMethod Parameters 0</li><li>122  15:16:50:777  5  8  2  1 283  0</li><li>123  15:16:50:777  5  8  2  1 283  0 122 3</li><li>124  15:16:50:777  5  8  1  2 CallMethod Parameters 0 121 61</li></ol></p>La primera y la segunda línea abren el nivel de la pila, la tercera y la cuarta lo cierran. Los valores de las columnas 6, 7 y 8 se repiten en la línea del nivel de pila de cierre. La columna 10 contiene los números de secuencia de apertura del nivel de pila, es decir, 122 para la tercera línea y 121 para la cuarta. |
| 7         | operation                       | Puede representar (según el tipo de operación):<li>un ID de comando de lenguaje (cuando tipo=1)</li><li>un nombre de método (cuando tipo=2)</li><li>una combinación de pluginIndex;pluginCommand (cuando tipo=4, 5, 6 o 7). Puede contener algo como '3;2'</li><li>una UUID task connection (cuando tipo = 8)</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 8         | operation_parameters            | Parámetros pasados a comandos, métodos o plugins                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 9         | form_event                      | Evento formulario si lo hay; vacío en otros casos (supongamos que la columna se utiliza cuando se ejecuta el código en un método formulario o en un método objeto)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 10        | stack_opening_sequence_number | Sólo para los niveles de pila de cierre: número de secuencia del nivel de pila de apertura correspondiente                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 11        | stack_level_execution_time    | Sólo cuando se cierra el nivel de la pila: el tiempo transcurrido en microsegundos de la acción registrada actualmente (ver la décima columna en las líneas 123 y 124 del registro anterior)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

## 4DDiagnosticLog.txt

Este archivo de historial registra muchos eventos relacionados con el funcionamiento interno de la aplicación y es legible para las personas. Puede incluir información personalizada en este archivo utilizando el comando [LOG EVENT](https://doc.4d.com/4dv19/help/command/en/page667.html).

Como iniciar este historial:

```4d
 SET DATABASE PARAMETER(Diagnostic log recording;1) //iniciar registro
```

Los siguientes campos se registran para cada evento:

| Nombre del campo   | Descripción                                                      |
| ------------------ | ---------------------------------------------------------------- |
| sequenceNumber     | Número de operación único y secuencial en la sesión de historial |
| timestamp          | Fecha y hora en el formato ISO 8601: (YYYY-MM-DDThh:mm:ss.mmm)   |
| loggerID           | Opcional                                                         |
| componentSignature | Opcional - firma del componente interno                          |
| messageLevel       | Información, avisos, errores                                     |
| message            | Descripción de la entrada del historial                          |

Dependiendo del evento, se pueden incluir otros campos en el registro, como la tarea, socket, etc.

### Cómo activar el archivo

The *4DDiagnosticLog.txt* file can log different levels of messages, from `ERROR` (most important) to `TRACE` (less important). By default, the `INFO` level is set, which means that the file will log only important events, including errors and unexpected results (see below).

You can select the level of messages using the `Diagnostic log level` selector of the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19/help/command/en/page642.html) command, depending on your needs. When you select a level, levels above (which are more important) are implicitely selected also. Los siguientes niveles están disponibles:

| Columna # | Descripción                                                                                   | Cuando se selecciona, incluye   |
| --------- | --------------------------------------------------------------------------------------------- | ------------------------------- |
| ERROR     | Una parte de la aplicación no funciona                                                        | ERROR                           |
| WARN      | Potential error, use of a deprecated function, poor uses, undesirable or unexpected situation | ERROR, WARN                     |
| INFO      | ID Proceso 4D                                                                                 | ERROR, WARN, INFO               |
| DEBUG     | Detalle del flujo de aplicación (para los servicios técnicos 4D)                              | ERROR, WARN, INFO, DEBUG        |
| TRACE     | Otra información interna (para los servicios técnicos de 4D)                                  | ERROR, WARN, INFO, DEBUG, TRACE |

## 4DSMTPLog.txt, 4DPOP3Log.txt y 4DIMAPLog.txt

Estos archivos de registro registran cada intercambio entre la aplicación 4D y el servidor de correo (SMTP, POP3, IMAP) que ha sido iniciado por los siguientes comandos:

* SMTP - [SMTP New transporter](API/SMTPTransporterClass.md#smtp-new-transporter)
* POP3 - [POP3 New transporter](API/POP3TransporterClass.md#pop3-new-transporter)
* IMAP  - [IMAP New transporter](API/IMAPTransporterClass.md#imap-new-transporter)

Los archivos de historial pueden producirse en dos versiones:

* una versión normal:
  * archivos llamados 4DSMTPLog.txt, 4DPOP3Log.txt, o 4DIMAPLog.txt
  * sin adjuntos
  * utiliza un reciclaje automático de archivos circulares cada 10 MB
  * destinado a la depuración habitual

 Para iniciar este historial:

 ```4d
 SET DATABASE PARAMETER(SMTP Log;1) //start SMTP log
 SET DATABASE PARAMETER(POP3 Log;1) //start POP3 log
 SET DATABASE PARAMETER(IMAP Log;1) //start IMAP log
 ```

> 4D Server: clic en el botón **Iniciar los historiales de peticiones y de depuración** en la página [Mantenimiento](ServerWindow/maintenance.md) ode la ventana de administración de 4D Server.

   Esta ruta al historial es devuelta por el comando `Get 4D file`.

* una versión extendida:
  * attachment(s) included no automatic recycling
  * nombre personalizado
  * reservado con fines específicos

 Para iniciar este historial:

 ```4d
 $server:=New object
 ...
 //SMTP
 $server.logFile:="MySMTPAuthLog.txt"
 $transporter:=SMTP New transporter($server)

 // POP3
 $server.logFile:="MyPOP3AuthLog.txt"
 $transporter:=POP3 New transporter($server)

 //IMAP
 $server.logFile:="MyIMAPAuthLog.txt"
 $transporter:=IMAP New transporter($server)
 ```

#### Contenido

Para cada petición, se registran los siguientes campos:

| Columna # | Descripción                                                      |
| --------- | ---------------------------------------------------------------- |
| 1         | Número de operación único y secuencial en la sesión de historial |
| 2         | Fecha y hora en el formato RFC3339 (yyyy-mm-ddThh:mm:ss.ms)      |
| 3         | ID Proceso 4D                                                    |
| 4         | ID único del proceso                                             |
| 5         | <ul><li>Información de inicio de sesión SMTP, POP3 o IMAP, incluyendo el nombre del servidor, el número de puerto TCP utilizado para conectarse al servidor SMTP, POP3 o IMAP y el estado de TLS, o</li><li>datos intercambiados entre el servidor y el cliente, empezando por "S <" (datos recibidos del servidor SMTP,POP3 o IMAP) o "C >" (datos enviados por el cliente SMTP,POP3 o IMAP): lista de modos de autenticación enviada por el servidor y modo de autenticación seleccionado, cualquier error notificado por el servidor SMTP,POP3 o IMAP, información del encabezado del correo enviado (sólo versión estándar) y si el correo se guarda en el servidor, o</li><li>Información de cierre de sesión SMTP, POP3 o IMAP.</li></ul>                                       |

## Peticiones cliente ORDA

Este diario registra cada petición de ORDA enviada desde una máquina remota. Puede dirigir la información de registro a la memoria o a un archivo en el disco. El nombre y la ubicación de este archivo de registro son de su elección.

Como iniciar este historial:

```4d
//a ejecutar en una máquina remota
ds.startRequestLog(File("/PACKAGE/Logs/ordaLog.txt"))  
//también puede enviarse a la memoria
```

Si desea utilizar el número de secuencia único en el registro de peticiones de ORDA, debe activarlo:

```4d
//a ejecutar en una máquina remota

SET DATABASE PARAMETER(Client Log Recording;1)  
//para activar el número de secuencia del historial

ds.startRequestLog(File("/PACKAGE/Logs/ordaLog.txt"))  
//también puede enviarse a la memoria

SET DATABASE PARAMETER(Client Log Recording;0)  
//desactiva el número de secuencia
```

Los siguientes campos se registran para cada petición:

| Nombre del campo | Descripción                                                      | Ejemplo                                                   |
| ---------------- | ---------------------------------------------------------------- | --------------------------------------------------------- |
| sequenceNumber   | Número de operación único y secuencial en la sesión de historial | 104                                                       |
| url              | URL de la petición ORDA efectuada por el cliente                 | "rest/Persons(30001)"                                     |
| startTime        | Fecha y hora de inicio en formato ISO 8601                       | "2019-05-28T08:25:12.346Z"                                |
| endTime          | Fecha y hora final en formato ISO 8601                           | "2019-05-28T08:25:12.371Z"                                |
| duration         | Duración del procesamiento cliente (ms)                          | 25                                                        |
| response         | Objeto respuesta del servidor                                    | {"status":200,"body":{"__entityModel":"Persons",\[...]}} |

## Utilización de un archivo de configuración de log

You can use a **log configuration file** to easily manage log recording in a production environment. Este archivo está preconfigurado por el desarrollador. Typically, it can be sent to customers so that they just need to select it or copy it in a local folder. Once enabled, the log configuration file triggers the recording of specific logs.

### Cómo activar el archivo

Hay varias maneras de activar el archivo de configuración de los logs:

* On 4D Server with interface, you can open the Maintenance page and click on the [Load logs configuration file](ServerWindow/maintenance.md#load-logs-configuration-file) button, then select the file. In this case, you can use any name for the configuration file. Se activa inmediatamente en el servidor.
* You can copy the log configuration file in the [Settings folder](Project/architecture.md#settings-1) of the project. En este caso, el archivo debe llamarse `logConfig.json`. It is enabled at project startup (only on the server in client/server).
* With a built application, you can copy the `logConfig.json` file in the following folder:
  * Windows: `Users\[userName]\AppData\Roaming\[application]`
  * macOS: `/Users/[userName]/Library/ApplicationSupport/[application]`

> If you want to enable the log configuration file for all projects in stand-alone, server and remote 4D applications, you can copy the `logConfig.json` file in the following folder:
> 
> * Windows: `Users\[userName]\AppData\Roaming\4D or \4D Server`
> * macOS: `/Users/[userName]/Library/ApplicationSupport/4D or /4D Server`

### Descripción del archivo JSON

El archivo de configuración de log es un archivo `.json` que puede contener las siguientes propiedades:

```json
{
    "$schema": "http://json-schema.org/draft-07/schema",
    "title": "Logs Configuration File",
    "description": "A file that controls the state of different types of logs in 4D clients and servers",
    "type": "object",
    "properties": {
        "forceLoggingConfiguration": {
            "description": "Forcing the logs configuration described in the file ingoring changes coming from code or user interface",
            "type": "boolean",
            "default": true
        },
        "requestLogs": {
            "description": "Configuration for request logs",
            "type": "object",
            "properties": {
                "clientState": {
                    "description": "Enable/Disable client request logs (from 0 to N)",
                    "type": "integer",
                    "minimum": 0
                },
                "serverState": {
                    "description": "Enable/Disable server request logs (from 0 to N)",
                    "type": "integer",
                    "minimum": 0
                }
            }
        },
        "debugLogs": {
            "description": "Configuration for debug logs",
            "type": "object",
            "properties": {
                "commandList": {
                    "description": "Commands to log or not log",
                    "type": "array",
                    "items": {
                        "type": "string"
                    },
                    "minItems": 1,
                    "uniqueItems": true
                },
                "state": {
                    "description": "integer to specify type of debuglog and options",

                    "type": "integer",
                    "minimum": 0
                }
            }
        },
        "diagnosticLogs":{
            "description": "Configuration for debug logs",
            "type": "object",
            "properties": {
                "state":{
                    "description": "Enable/Disable diagnostic logs 0 or 1 (0 = do not record, 1 = record)",
                    "type": "integer",
                    "minimum": 0    
                },
                "level": {
              "description": "Configure diagnostic logs",
              "type": "integer",
              "minimum": 2,
              "maximum": 6
          }
            }
          },
        "httpDebugLogs": {
            "description": "Configuration for http debug logs",
            "type": "object",
            "properties": {
                "level": {
                    "description": "Configure http request logs",
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 7
                },
                "state": {
                    "description": "Enable/Disable recording of web requests",
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 4
                }
            }
        },
        "POP3Logs": {
            "description": "Configuration for POP3 logs",
            "type": "object",
            "properties": {
                "state": {
                    "description": "Enable/Disable POP3 logs (from 0 to N)",
                    "type": "integer",
                    "minimum": 0
                }
            }
        },
        "SMTPLogs": {
            "description": "Configuration for SMTP logs",
            "type": "object",
            "properties": {
                "state": {
                    "description": "Enable/Disable SMTP log recording (form 0 to N)",
                    "type": "integer",
                    "minimum": 0
                }
            }
        },
        "IMAPLogs": {
            "description": "Configuration for IMAP logs",
            "type": "object",
            "properties": {
                "state": {
                    "description": "Enable/Disable IMAP log recording (form 0 to N)",
                    "type": "integer"
                }
            }
        },
        "ORDALogs": {
            "description": "Configuration for ORDA logs",
            "type": "object",
            "properties": {
                "state": {
                    "description": "Enable/Disable ORDA logs (0 or 1)",
                    "type": "integer"
                },
                "filename": {
                    "type": "string"
                }
            }
        }
    }
}
```

### Ejemplo

Este es un ejemplo de archivo de configuración de log:

```json
{
 "forceLoggingConfiguration": false,
 "requestLogs": {
  "clientState": 1,
  "serverState": 1
 },
 "debugLogs": {
  "commandList":["322","311","112"],
        "state": 4
 },
 "diagnosticLogs":{
        "state" : 1
 },
 "httpDebugLogs": {
  "level": 5,
        "state" : 1
 },
 "POP3Logs": {
        "state" : 1
 },
 "SMTPLogs": {
        "state" : 1
 },
 "IMAPLogs": {
        "state" : 1
 },
 "ORDALogs": {
        "state" : 1,
  "filename": "ORDALog.txt"
 }
}
```
