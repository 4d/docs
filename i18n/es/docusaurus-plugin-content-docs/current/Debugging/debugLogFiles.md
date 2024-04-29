---
id: debugLogFiles
title: Archivo de historial
---

Las aplicaciones 4D pueden generar varios archivos de historial que son útiles para depurar u optimizar su ejecución. Logs are usually started or stopped using selectors of the [SET DATABASE PARAMETER](https://doc.4d.com/4dv20/help/command/en/page642.html), [WEB SET OPTION](https://doc.4d.com/4dv20/help/command/en/page1210.html), or [HTTP SET OPTION](https://doc.4d.com/4dv20/help/command/en/page1160.html) commands and are stored in the [Logs folder](Project/architecture.md#logs) of the project.

La información histórica debe ser analizada para detectar y solucionar los problemas. Esta sección ofrece una descripción completa de los siguientes archivos de registro:

- [4DRequestsLog.txt](#4drequestslogtxt)
- [4DRequestsLog_ProcessInfo.txt](l#4drequestslog_processinfotxt)
- [HTTPDebugLog.txt](#httpdebuglogtxt)
- [4DHTTPClientLog.txt](#4dhttpclientlogtxt)
- 4DDebugLog.txt ([standard](#4ddebuglogtxt-standard) & [tabular](#4ddebuglogtxt-tabular))
- [4DDiagnosticLog.txt](#4ddiagnosticlogtxt)
- [4DIMAPLog.txt](#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
- [4DPOP3Log.txt](#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
- [4DSMTPLog.txt](#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
- [ORDA requests log file](#orda-requests)

> Cuando un archivo de historial puede generarse tanto en 4D Server como en el cliente remoto, se añade la palabra "Server" al nombre del archivo de historial del lado del servidor, por ejemplo "4DRequestsLogServer.txt"

Los archivos de historial comparten algunos campos para que pueda establecer una cronología y hacer conexiones entre las entradas mientras depura:

- `sequence_number`: this number is unique over all debug logs and is incremented for each new entry whatever the log file, so that you can know the exact sequence of the operations.
- `connection_uuid`: for any 4D process created on a 4D client that connects to a server, this connection UUID is logged on both server and client side. Permite identificar fácilmente el cliente remoto que lanzó cada proceso.

## 4DRequestsLog.txt

Este archivo de historial registra las solicitudes estándar llevadas a cabo por la máquina 4D Server o la máquina remota 4D que ejecutó el comando (excluyendo las solicitudes web).

Como iniciar este historial:

- en el servidor:

```4d
SET DATABASE PARAMETER(4D Server log recording;1)
//del lado del servidor
```

- en un cliente:

```4d
SET DATABASE PARAMETER(Client Log Recording;1)
//del lado remoto
```

> This statement also starts the [4DRequestsLog_ProcessInfo.txt](#4drequestslog_processinfotxt) log file.

#### Encabezados

Este archivo comienza con los siguientes encabezados:

- Log Session Identifier (Identificador de sesión de historial)
- Nombre del servidor que aloja la aplicación
- Nombre de usuario: nombre de usuario en el sistema operativo que ejecutó la aplicación 4D en el servidor.

#### Contenido

Para cada petición, se registran los siguientes campos:

| Nombre del campo                                                               | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sequence_number                                           | Número de operación único y secuencial en la sesión de historial                                                                                                                                                                                                                                                                                                                                                                                                                |
| time                                                                           | Fecha y hora utilizando el formato ISO 8601: 'YYYY-MM-DDTHH:MM:SS.mmm'                                                                                                                                                                                                                                                                                                                                          |
| systemid                                                                       | ID del sistema                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| component                                                                      | Firma del componente (por ejemplo, "4SQLS" o "dbmg")                                                                                                                                                                                                                                                                                                                                                                                                         |
| process\_info\_index               | Corresponde al campo "index" en el archivo de historial 4DRequestsLog_ProcessInfo.txt, y permite vincular una petición a un proceso.                                                                                                                                                                                                                                                                                       |
| request                                                                        | [C/S or ORDA request ID](https://github.com/4d/request-log-definitions/blob/master/RequestIDs.txt) or message string for SQL requests or `LOG EVENT` messages                                                                                                                                                                                                                                                                                                                   |
| bytes_in                                                  | Número de bytes recibidos                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| bytes_out                                                 | Número de bytes enviados                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| server\_duration \| exec\_duration | Depends on where the log is generated:<li>_server\_duration_ when generated on the client --Time taken in microseconds for the server to process the request and return a response. B to F in image below, OR</li><li>_exec\_duration_ when generated on the server --Time taken in microseconds for the server to process the request. B to E in image below.</li> |
| write\_duration                                          | Time taken in microseconds for sending the:<li>Request (when run on the client). A to B in image below.</li><li>Response (when run on the server). E to F in image below.</li>                                                                                                                                                                            |
| task_kind                                                 | Apropiativo o cooperativo (respectivamente "p" o "c")                                                                                                                                                                                                                                                                                                                                                                                                        |
| rtt                                                                            | Tiempo estimado en microsegundos para que el cliente envíe la solicitud y el servidor la acuse de recibo. A to D and E to H in image below.<li>Only measured when using the ServerNet network layer, returns 0 when used with the legacy network layer.</li><li>For Windows versions prior to Windows 10 or Windows Server 2016, the call will return 0.</li>                                                   |
| extra                                                                          | Información adicional relacionada con el contexto, por ejemplo el nombre de la clase de datos y/o el nombre del atributo en caso de petición ORDA                                                                                                                                                                                                                                                                                                                               |

Flujo de solicitudes:

![](../assets/en/Admin/logRequestFlow.PNG)

## 4DRequestsLog_ProcessInfo.txt

Este archivo de historial registra la información de cada proceso creado en la máquina 4D Server o en la máquina remota 4D que ejecutó el comando (excluyendo las solicitudes web).

Como iniciar este historial:

- en el servidor:

```4d
SET DATABASE PARAMETER(4D Server log recording;1) //lado servidor
```

- en un cliente:

```4d
SET DATABASE PARAMETER(Client Log Recording;1) //del lado remoto
```

> This statement also starts the [4DRequestsLog.txt](#4drequestslogtxt) log file.

#### Encabezados

Este archivo comienza con los siguientes encabezados:

- Log Session Identifier (Identificador de sesión de historial)
- Nombre del servidor que aloja la aplicación
- Nombre de usuario: nombre de usuario en el sistema operativo que ejecutó la aplicación 4D en el servidor.

#### Contenido

Para cada proceso, se registran los siguientes campos:

| Nombre del campo                                                                              | Descripción                                                                                                                            |
| --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| sequence_number                                                          | Número de operación único y secuencial en la sesión de historial                                                                       |
| time                                                                                          | Fecha y hora utilizando el formato ISO 8601: 'YYYY-MM-DDTHH:MM:SS.mmm" |
| process\_info\_index                              | Número de proceso único y secuencial                                                                                                   |
| CDB4DBaseContext                                                                              | UUID del contexto de base del componente DB4D                                                                                          |
| systemid                                                                                      | ID del sistema                                                                                                                         |
| server\_process\_id                               | ID del proceso en el servidor                                                                                                          |
| remote\_process\_id                               | ID del proceso en el cliente                                                                                                           |
| process\_name                                                           | Nombre del proceso                                                                                                                     |
| cID                                                                                           | Identificador de la conexión 4D                                                                                                        |
| uID                                                                                           | Identificador del cliente 4D                                                                                                           |
| IP Client                                                                                     | Dirección IPv4/IPv6                                                                                                                    |
| host_name                                                                | Nombre de host del cliente                                                                                                             |
| user_name                                                                | Nombre de conexión usuario en el cliente                                                                                               |
| connection\_uuid                                                        | Identificador UUID de proceso de conexión                                                                                              |
| server\_process\_unique\_id | ID único del proceso en el servidor                                                                                                    |

## HTTPDebugLog.txt

Este archivo de historial registra cada petición HTTP y cada respuesta en modo bruto (raw). Se registran las solicitudes completas, incluidos los encabezados; opcionalmente, también se pueden registrar las partes del cuerpo.

Como iniciar este historial:

```4d

WEB SET OPTION(Web debug log;wdl enable without body)  
//other values are available
```

Los siguientes campos se registran tanto para la solicitud como para la respuesta:

| Nombre del campo | Descripción                                                                           |
| ---------------- | ------------------------------------------------------------------------------------- |
| SocketID         | ID del socket utilizado para la comunicación                                          |
| PeerIP           | Dirección IPv4 del host (cliente)                                  |
| PeerPort         | Puerto utilizado por host (cliente)                                |
| TimeStamp        | Timestamp en milisegundos (desde el inicio del sistema)            |
| ConnectionID     | Conexión UUID (UUID del VTCPSocket utilizado para la comunicación) |
| SequenceNumber   | Número de operación único y secuencial en la sesión de historial                      |

## 4DHTTPClientLog.txt

Este archivo de historial registra el tráfico HTTP que pasa por el cliente HTTP de 4D. Se registran las peticiones y respuestas completas, incluidos los encabezados; opcionalmente, también se pueden registrar las partes del cuerpo.

Como iniciar este historial:

```4d

HTTP SET OPTION(HTTP client log; HTTP enable log with all body parts)  
//other values are available
```

Los siguientes campos se registran tanto para la solicitud como para la respuesta:

| Nombre del campo | Descripción                                                                                                               |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------- |
| SequenceID       | Número de operación único y secuencial en la sesión de historial                                                          |
| ConnectionID     | Identificador UUID de proceso de conexión                                                                                 |
| LocalIP          | Dirección IP del cliente                                                                                                  |
| PeerIP           | Dirección IP del servidor                                                                                                 |
| TimeStamp        | Marca de tiempo (ms) en el momento en que se envía la solicitud o se recibe completamente la respuesta |
| ElapsedTimeInMs  | (sólo respuesta) Diferencia con la marca de tiempo de la petición                                      |

Dependiendo de las opciones de historial, también se pueden registrar otros campos.

- Para la petición: línea de petición, encabezados, cuerpo de la petición
- Para respuesta: línea de estado, encabezados, cuerpo de la respuesta (sin comprimir), si lo hay

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
| 2         | Fecha y hora en el formato ISO 8601: (YYYY-MM-DDThh:mm:ss.mmm)  |
| 3         | ID proceso (p=xx) e ID único proceso (puid=xx)                                                               |
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

| Columna # | Nombre del campo                                                                             | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1         | sequence_number                                                         | Número de operación único y secuencial en la sesión de historial                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 2         | time                                                                                         | Fecha y hora en el formato ISO 8601: (YYYY-MM-DDThh:mm:ss.mmm)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 3         | ProcessID                                                                                    | ID del Proceso                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 4         | unique_processID                                                        | ID único del proceso                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 5         | stack_level                                                             | Nivel de stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 6         | operation_type                                                          | Tipo de operación histórico. This value may be an absolute value:<p><ol><li>Command</li><li>Method (project method, database method, etc.)</li><li>Message (sent by [LOG EVENT](https://doc.4d.com/4dv20/help/command/en/page667.html) command only)</li><li>PluginMessage</li><li>PluginEvent</li><li>PluginCommand</li><li>PluginCallback</li><li>Task</li><li>Member method (method attached to a collection or an object)</li></ol></p>When closing a stack level, the `operation_type`, `operation` and `operation_parameters` columns have the same value as the opening stack level logged in the `stack_opening_sequence_number` column. For example:<p><ol><li>121  15:16:50:777  5  8  1  2 CallMethod Parameters 0</li><li>122  15:16:50:777  5  8  2  1 283  0</li><li>123  15:16:50:777  5  8  2  1 283  0 122 3</li><li>124  15:16:50:777  5  8  1  2 CallMethod Parameters 0 121 61</li></ol></p>The 1st and 2nd lines open a stack level, the 3rd and 4th lines close a stack level. Los valores de las columnas 6, 7 y 8 se repiten en la línea del nivel de pila de cierre. La columna 10 contiene los números de secuencia de apertura del nivel de pila, es decir, 122 para la tercera línea y 121 para la cuarta. |
| 7         | operation                                                                                    | May represent (depending on operation type):<li>a Language Command ID (when type=1)</li><li>a Method Name (when type=2)</li><li>a combination of pluginIndex;pluginCommand (when type=4, 5, 6 or 7). May contain something like '3;2'</li><li>a Task Connection UUID (when type=8)</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 8         | operation_parameters                                                    | Parámetros pasados a comandos, métodos o plugins                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 9         | form_event                                                              | Evento formulario si lo hay; vacío en otros casos (supongamos que la columna se utiliza cuando se ejecuta el código en un método formulario o en un método objeto)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 10        | stack_opening_sequence_number | Sólo para los niveles de pila de cierre: número de secuencia del nivel de pila de apertura correspondiente                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 11        | stack_level_execution_time    | Sólo cuando se cierra el nivel de la pila: el tiempo transcurrido en microsegundos de la acción registrada actualmente (ver la décima columna en las líneas 123 y 124 del registro anterior)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

## 4DDiagnosticLog.txt

Este archivo de historial registra muchos eventos relacionados con el funcionamiento interno de la aplicación y es legible para las personas. You can include custom information in this file using the [LOG EVENT](https://doc.4d.com/4dv19/help/command/en/page667.html) command.

Como iniciar este historial:

```4d
 SET DATABASE PARAMETER(Diagnostic log recording;1) //start recording
```

Los siguientes campos se registran para cada evento:

| Nombre del campo   | Descripción                                                                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| sequenceNumber     | Número de operación único y secuencial en la sesión de historial                                                                                  |
| timestamp          | Fecha y hora en el formato ISO 8601: (YYYY-MM-DDThh:mm:ss.mmm) |
| loggerID           | Opcional                                                                                                                                          |
| componentSignature | Opcional - firma del componente interno                                                                                                           |
| messageLevel       | Información, avisos, errores                                                                                                                      |
| message            | Descripción de la entrada del historial                                                                                                           |

Dependiendo del evento, se pueden incluir otros campos en el registro, como la tarea, socket, etc.

### Cómo activar el archivo

The _4DDiagnosticLog.txt_ file can log different levels of messages, from `ERROR` (most important) to `TRACE` (less important). By default, the `INFO` level is set, which means that the file will log only important events, including errors and unexpected results (see below).

You can select the level of messages using the `Diagnostic log level` selector of the [SET DATABASE PARAMETER](https://doc.4d.com/4dv20/help/command/en/page642.html) command, depending on your needs. Cuando se selecciona un nivel, los niveles superiores (que son más importantes) también se seleccionan implícitamente. Los siguientes niveles están disponibles:

| Constante   | Descripción                                                                                     | Cuando se selecciona, incluye                                 |
| ----------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `Log error` | Una parte de la aplicación no funciona                                                          | `Log error`                                                   |
| `Log warn`  | Posible error, uso de una función obsoleta, usos deficientes, situación indeseable o inesperada | `Log error`, `Log warn`                                       |
| `Log info`  | _Default level_ - Important application event                                                   | `Log error`, `Log warn`, `Log info`                           |
| `Log debug` | Detalle del flujo de aplicación (para los servicios técnicos 4D)             | `Log error`, `Log warn`, `Log info`, `Log debug`              |
| `Log trace` | Otra información interna (para los servicios técnicos de 4D)                 | `Log error`, `Log warn`, `Log info`, `Log debug`, `Log trace` |

Ejemplo:

```4d
SET DATABASE PARAMETER (Diagnostic log recording; 1)
SET DATABASE PARAMETER (Diagnostic log level; Log trace)
```

## 4DSMTPLog.txt, 4DPOP3Log.txt y 4DIMAPLog.txt

Estos archivos de registro registran cada intercambio entre la aplicación 4D y el servidor de correo (SMTP, POP3, IMAP) que ha sido iniciado por los siguientes comandos:

- SMTP - [SMTP New transporter](API/SMTPTransporterClass.md#smtp-new-transporter)
- POP3 - [POP3 New transporter](API/POP3TransporterClass.md#pop3-new-transporter)
- IMAP  - [IMAP New transporter](API/IMAPTransporterClass.md#imap-new-transporter)

Los archivos de historial pueden producirse en dos versiones:

- una versión normal:
  - archivos llamados 4DSMTPLog.txt, 4DPOP3Log.txt, o 4DIMAPLog.txt
  - sin adjuntos
  - utiliza un reciclaje automático de archivos circulares cada 10 MB
  - destinado a la depuración habitual

Para iniciar este historial:

```4d
SET DATABASE PARAMETER(SMTP Log;1) //inicia SMTP log
SET DATABASE PARAMETER(POP3 Log;1) //inicia POP3 log
SET DATABASE PARAMETER(IMAP Log;1) //inicia IMAP log
```

> 4D Server: Click on the **Start Request and Debug Logs** button in the [Maintenance Page](ServerWindow/maintenance.md) of the 4D Server administration window.

Esta ruta al historial es devuelta por el comando `Get 4D file`.

- una versión extendida:
  - attachment(s) included no automatic recycling
  - nombre personalizado
  - reservado con fines específicos

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

| Columna # | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1         | Número de operación único y secuencial en la sesión de historial                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2         | Fecha y hora en el formato RFC3339 (yyyy-mm-ddThh:mm:ss.ms)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 3         | ID Proceso 4D                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 4         | ID único del proceso                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 5         | <ul><li>SMTP,POP3, or IMAP session startup information, including server host name, TCP port number used to connect to SMTP,POP3, or IMAP server and TLS status,or</li><li>data exchanged between server and client, starting with "S <" (data received from the SMTP,POP3, or IMAP server) or "C >" (data sent by the SMTP,POP3, or IMAP client): authentication mode list sent by the server and selected authentication mode, any error reported by the SMTP,POP3, or IMAP Server, header information of sent mail (standard version only) and if the mail is saved on the server,or</li><li>SMTP,POP3, or IMAP session closing information.</li></ul> |

## Peticiones ORDA

Los registros de peticiones ORDA pueden registrar cada petición ORDA y la respuesta del servidor. Existen dos registros de peticiones ORDA:

- un registro de peticiones ORDA del lado del cliente, en formato .txt
- un registro de peticiones ORDA del lado del servidor, en formato .jsonl

### Del lado del cliente

El registro ORDA del lado del cliente registra cada petición ORDA enviada desde una máquina remota. Puede dirigir la información de registro a la memoria o a un archivo .txt en el disco de la máquina remota. El nombre y la ubicación de este archivo de registro son de su elección.

Como iniciar este historial:

```4d
	//on a remote machine
SET DATABASE PARAMETER(Client Log Recording;1)  
ds.startRequestLog(File("/PACKAGE/Logs/ordaLog.txt"))
	//can be also sent to memory
SET DATABASE PARAMETER(Client Log Recording;0)  
```

:::note

Triggering the client-side [4DRequestsLog.txt](#4drequestslogtxt) using `SET DATABASE PARAMETER` is not mandatory. However, it is required if you want to log the unique `sequenceNumber` field.

:::

Los siguientes campos se registran para cada petición:

| Nombre del campo | Descripción                                                                    | Ejemplo                                                                                                                                                                                                                                                 |
| ---------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sequenceNumber   | Número de operación único y secuencial en la sesión de historial               | 104                                                                                                                                                                                                                                                     |
| url              | Solicitar URL                                                                  | "rest/Persons(30001)"                                                                                                                                                                                                                |
| startTime        | Fecha y hora de inicio en formato ISO 8601                                     | "2019-05-28T08:25:12.346Z"                                                                                                                                                                              |
| endTime          | Fecha y hora final en formato ISO 8601                                         | "2019-05-28T08:25:12.371Z"                                                                                                                                                                              |
| duration         | Duración del procesamiento del cliente en milisegundos (ms) | 25                                                                                                                                                                                                                                                      |
| response         | Objeto respuesta del servidor                                                  | {"status":200,"body":{"__entityModel":"Persons",\[...]}} |

#### Ejemplo

Este es un ejemplo de un registro de archivo de historial ORDA del lado del cliente:

```json
	{
		"sequenceNumber": 7880,
		"url": "rest/Employees/$entityset/F910C2E4A2EE6B43BBEE74A0A4F68E5A/Salary?$compute='sum'&$progress4Dinfo='D0706F1E77D4F24985BE4DDE9FFA1739'",
		"startTime": "2023-05-15T10:43:39.400Z",
		"endTime": "2023-05-15T10:43:39.419Z",
		"duration": 19,
		"response": {
			"status": 200,
			"body": 75651
		}
	}
```

### Del lado del servidor

El registro ORDA del lado del servidor registra cada petición ORDA procesada por el servidor, así como la respuesta del servidor (opcional). Log information is saved in a .jsonl file on the server machine disk (by default, _ordaRequests.jsonl_).

Como iniciar este historial:

```4d
	//on the server
SET DATABASE PARAMETER(4D Server log recording;1)
ds.startRequestLog(File("/PACKAGE/Logs/ordaRequests.jsonl");srl log response without body)
	//srl... parameter is optional
SET DATABASE PARAMETER(4D Server log recording;0)
```

:::note

Triggering the server-side [4DRequestsLog.txt](#4drequestslogtxt) using `SET DATABASE PARAMETER` is not mandatory. However, it is required if you want to log the unique `sequenceNumber` and the `duration` fields.

:::

Los siguientes campos se registran para cada petición:

| Nombre del campo | Descripción                                                                                                   | Ejemplo                                                                                                                                                                                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sequenceNumber   | Número de operación único y secuencial en la sesión de historial                                              | 104                                                                                                                                                                                                                                                     |
| url              | Solicitar URL                                                                                                 | "rest/Persons(30001)"                                                                                                                                                                                                                |
| startTime        | Fecha y hora de inicio en formato ISO 8601                                                                    | "2019-05-28T08:25:12.346Z"                                                                                                                                                                              |
| duration         | Duración del procesamiento del servidor en microsegundos (µ)                               | 2500                                                                                                                                                                                                                                                    |
| response         | Server response object, can be configured in [`.startRequestLog()`](../API/DataStoreClass.md#startrequestlog) | {"status":200,"body":{"__entityModel":"Persons",\[...]}} |
| ipAddress        | Dirección IP del usuario                                                                                      | "192.168.1.5"                                                                                                                                                                                           |
| userName         | Nombre del usuario 4D                                                                                         | "henry"                                                                                                                                                                                                                                                 |
| systemUserName   | Nombre de inicio de sesión del usuario en la máquina                                                          | "hsmith"                                                                                                                                                                                                                                                |
| machineName      | Nombre de la máquina del usuario                                                                              | "PC of Henry Smith"                                                                                                                                                                                                                                     |

#### Ejemplo

Este es un ejemplo de un registro ORDA del lado del servidor:

```json
   {
		"url": "rest/Employees/$entityset/F910C2E4A2EE6B43BBEE74A0A4F68E5A/Salary?$compute='sum'&$progress4Dinfo='D0706F1E77D4F24985BE4DDE9FFA1739'",
		"systemUserName": "Admin",
		"userName": "Designer",
		"machineName": "DESKTOP-QSK9738",
		"taskID": 5,
		"taskName": "P_1",
		"startTime": "2023-05-15T11:43:39.401",
		"response": {
			"status": 200,
			"body": 75651
		},
		"sequenceNumber": 7008,
		"duration": 240
	}

```

## Utilización de un archivo de configuración de log

You can use a **log configuration file** to easily manage log recording in a production environment. Este archivo está preconfigurado por el desarrollador. Normalmente, se puede enviar a los clientes para que sólo tengan que seleccionarlo o copiarlo en una carpeta local. Una vez activado, el archivo de configuración de log desencadena el registro de registros específicos.

### Cómo activar el archivo

Hay varias maneras de activar el archivo de configuración de registro, dependiendo de su configuración:

- **4D Server with interface**: you can open the Maintenance page and click on the [Load logs configuration file](ServerWindow/maintenance.md#load-logs-configuration-file) button, then select the file. En este caso, puede utilizar cualquier nombre para el archivo de configuración. Se activa inmediatamente en el servidor.
- **an interpreted or compiled project**: the file must be named `logConfig.json` and copied in the [Settings folder](../Project/architecture.md#settings-1) of the project (located at the same level as the [`Project` folder](../Project/architecture.md#project-folder)). Se activa al iniciar el proyecto (sólo en el servidor en cliente/servidor).
- **a built application**: the file must be named `logConfig.json` and copied in the following folder:
  - Windows: `Users\[userName]\AppData\Roaming\[application]`
  - macOS: `/Users/[userName]/Library/ApplicationSupport/[application]`
- **all projects with a stand-alone or remote 4D**: the file must be named `logConfig.json` and copied in the following folder:
  - Windows: `Users\[userName]\AppData\Roaming\4D`
  - macOS: `/Users/[userName]/Library/ApplicationSupport/4D`
- **all projects with 4D Server**: the file must be named `logConfig.json` and copied in the following folder:
  - Windows: `Users\[userName]\AppData\Roaming\4D Server`
  - macOS: `/Users/[userName]/Library/ApplicationSupport/4D Server`

:::note

If a `logConfig.json` file is installed in both Settings and AppData/Library folders, the Settings folder file will have priority.

:::

### Descripción del archivo JSON

The log configuration file is a `.json` file that must comply with the following json schema:

```json
{
    "$schema": "http://json-schema.org/draft-07/schema",
    "title": "Logs Configuration File",
    "description": "A file that controls the state of different types of logs in 4D clients and servers",
    "type": "object",
    "properties": {
        "forceConfiguration": {
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
        "HTTPClientLogs": {
		     "description": "Configuration for http client logs",
		     "type": "object",
		     "properties": {
		          "state": {
		               "description": "Configure http client logs",
		               "type": "integer",
		               "minimum": 0,
		               "maximum": 7
		          },
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
