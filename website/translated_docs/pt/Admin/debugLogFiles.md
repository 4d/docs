---
id: debugLogFiles
title: Description of log files
---

4D applications can generate several log files that are useful for debugging or optimizing their execution. Logs are usually started or stopped using selectors of the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19/help/command/en/page642.html) or [WEB SET OPTION](https://doc.4d.com/4dv19/help/command/en/page1210.html) commands and are stored in the [Logs folder](Project/architecture.md#logs-folder) of the database.

Information logged needs to be analyzed to detect and fix issues. This section provides a comprehensive description of the following log files:

*   [4DRequestsLog.txt](#4drequestslogtxt)
*   [4DRequestsLog_ProcessInfo.txt](l#4drequestslog_processinfotxt)
*   [HTTPDebugLog.txt](#httpdebuglogtxt)
*   4DDebugLog.txt ([standard](#4ddebuglogtxt-standard) & [tabular](#4ddebuglogtxt-tabular))
*   [4DDiagnosticLog.txt](#4ddiagnosticlogtxt)
*   [4DIMAPLog.txt](#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
*   [4DPOP3Log.txt](#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
*   [4DSMTPLog.txt](#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
*   [ORDA client requests log file](#orda-client-requests)

> When a log file can be generated either on 4D Server or on the remote client, the word "Server" is added to the server-side log file name, for example "4DRequestsLogServer.txt"

Arquivos de Histórico compartilham alguns campos para que possa estabelecer uma cronologia e fazer conexões entre entradas quando depurar:

*   `sequence_number`: this number is unique over all debug logs and is incremented for each new entry whatever the log file, so that you can know the exact sequence of the operations.
*   `connection_uuid`: for any 4D process created on a 4D client that connects to a server, this connection UUID is logged on both server and client side. It allows you to easily identify the remote client that launched each process.

## 4DRequestsLog.txt

Esses arquivos de histórico gravam petições normais realizadas pela máquina 4D Server ou a máquina remota 4D que executaram o comando (excluindo petições Web).

Como iniciar esse log:

*   on the server:

```4d
SET DATABASE PARAMETER(4D Server log recording;1)
//server side
```


*   on a client:

```4d
SET DATABASE PARAMETER(Client Log Recording;1)
//remote side
```
> Esta declaração também começa um arquivo de histórico [4DRequestsLog_ProcessInfo.txt](l#4drequestslog_processinfotxt).

#### Headers

Este arquivo começa com os cabeçalhos abaixo:

*   Log Session Identifier
*   Hostname of the server that hosts the application
*   User Login Name: login on the OS of the user that ran the 4D application on the server.

#### Conteúdos

Para cada petição, os campos abaixo estão logados:

| Field name                                 | Description                                                                                                                                                                                                      |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sequence_number                            | Unique and sequential operation number in the logging session                                                                                                                                                    |
| time                                       | Date and time using ISO 8601 format: 'YYYY-MM-DDTHH:MM:SS.mmm'                                                                                                                                                   |
| systemid                                   | System ID                                                                                                                                                                                                        |
| component                                  | Component signature (e.g., '4SQLS' or 'dbmg')                                                                                                                                                                    |
| process\_info_                           | index   Corresponds to the "index" field in 4DRequestsLog_ProcessInfo.txt log, and permits linking a request to a process.                                                                                       |
| request                                    | Request ID in C/S or message string for SQL requests or `LOG EVENT` messages                                                                                                                                     |
| bytes_in                                   | Number of bytes received                                                                                                                                                                                         |
| bytes_out                                  | Number of bytes sent                                                                                                                                                                                             |
| server\_duration &#124; exec\_duration | Depends on where the log is generated:<p><li>*server\_duration* when generated on the client --Time taken in microseconds for the server to process the request and return a response. B to F in image below, OR</li><li>*exec\_duration* when generated on the server --Time taken in microseconds for the server to process the request. B to E in image below.</li>                                                                                               |
| write\_duration                          | Time taken in microseconds for sending the:<p><li>Request (when run on the client). A to B in image below.</li><li>Response (when run on the server). E to F in image below.</li>                                                                                          |
| task_kind                                  | Preemptive or cooperative (respectively 'p' or 'c')                                                                                                                                                              |
| rtt                                        | Time estimate in microseconds for the client to send the request and the server to acknowledge it. A to D and E to H in image below.<p><li>Only measured when using the ServerNet network layer, returns 0 when used with the legacy network layer.</li><li>For Windows versions prior to Windows 10 or Windows Server 2016, the call will return 0.</li> |

Fluxo de petição:

![](assets/en/Admin/logRequestFlow.PNG)

## 4DRequestsLog_ProcessInfo.txt

Este arquivo de histórico registra a informação em cada processo criado na máquina 4D Server ou na máquina remota 4D que executa o comando (excluindo petições Web).

Como iniciar esse log:

*   on the server:

```4d
SET DATABASE PARAMETER(4D Server log recording;1) //server side
```

*   on a client:

```4d
SET DATABASE PARAMETER(Client Log Recording;1) //remote side
```
> Esta declaração também começa o arquivo de histórico [4DRequestsLog.txt](#4drequestslogtxt).

#### Headers

Este arquivo começa com os cabeçalhos abaixo:

*   Log Session Identifier
*   Hostname of the server that hosts the application
*   User Login Name: login on the OS of the user that ran the 4D application on the server.


#### Conteúdos

Para cada processo, os campos abaixo são registrados:

| Field name                        | Description                                                    |
| --------------------------------- | -------------------------------------------------------------- |
| sequence_number                   | Unique and sequential operation number in the logging session  |
| time                              | Date and time using ISO 8601 format: "YYYY-MM-DDTHH:MM:SS.mmm" |
| process\_info_index             | Unique and sequential process number                           |
| CDB4DBaseContext                  | DB4D component database context UUID                           |
| systemid                          | System ID                                                      |
| server\_process\_id           | Process ID on Server                                           |
| remote\_process\_id           | Process ID on Client                                           |
| process\_name                   | Process name                                                   |
| cID                               | Identifier of 4D Connection                                    |
| uID                               | Identifier of 4D Client                                        |
| IP Client                         | IPv4/IPv6 address                                              |
| host_name                         | Client hostname                                                |
| user_name                         | User Login Name on client                                      |
| connection\_uuid                | UUID identifier of process connection                          |
| server\_process\_unique\_id | Unique process ID on Server                                    |

## HTTPDebugLog.txt

This log file records each HTTP request and each response in raw mode. Whole requests, including headers, are logged; optionally, body parts can be logged as well.

Como iniciar esse log:

```4d
WEB SET OPTION(Web debug log;wdl enable without body)  
//other values are available
```

The following fields are logged for both Request and Response:

| Field name     | Description                                                   |
| -------------- | ------------------------------------------------------------- |
| SocketID       | ID of socket used for communication                           |
| PeerIP         | IPv4 address of host (client)                                 |
| PeerPort       | Port used by host (client)                                    |
| TimeStamp      | Timestamp in milliseconds (since system startup)              |
| ConnectionID   | Connection UUID (UUID of VTCPSocket used for communication)   |
| SequenceNumber | Unique and sequential operation number in the logging session |

## 4DDebugLog.txt (standard)

Esses registros de histórico gravam cada evento que ocorreu ao nível de programação de 4D. Modo padrão oferece uma vista básica de eventos.

Como iniciar esse log:

```4d
SET DATABASE PARAMETER(Debug Log Recording;2)  
//standard, all processes

SET DATABASE PARAMETER(Current process debug log recording;2)  
//standard, current process only
```

Os campos abaixo estão registrados para cada evento:

| Column # | Description                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| 1        | Unique and sequential operation number in the logging session                                                 |
| 2        | Date and time in ISO 8601 format (YYYY-MM-DDThh:mm:ss.mmm)                                                    |
| 3        | Process ID (p=xx) and unique process ID (puid=xx)                                                             |
| 4        | Stack level                                                                                                   |
| 5        | Can be Command Name/ Method Name/Message/ Task Start Stop info/Plugin Name, event or Callback/Connection UUID |
| 6        | Time taken for logging operation in milliseconds                                                              |

## 4DDebugLog.txt (tabular)

Esse arquivo de histórico registra cada evento que ocorrer ao nível de programação 4D em um formato tabulado e compacto que inclui informação adicional (comparado ao formato padrão).

Como iniciar esse log:

```4d
SET DATABASE PARAMETER(Debug Log Recording;2+4)  
//extended tabbed format, all processes

SET DATABASE PARAMETER(Current process debug log recording;2+4)  
//extended, current process only
```

Os campos abaixo estão registrados para cada evento:

| Column # | Field name                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1        | sequence_number                 | Unique and sequential operation number in the logging session                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 2        | time                            | Date and time in ISO 8601 format (YYYY-MM-DDThh:mm:ss.mmm)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 3        | ProcessID                       | Process ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 4        | unique_processID                | Unique process ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 5        | stack_level                     | Stack level                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 6        | operation_type                  | Tipo operação histórico. Esse valor pode ser um valor absoluto:<p><ol><li>Comando</li><li>Método (método de projeto, método de banco de dados, etc)</li><li>Mensagem (enviada só pelo comando [LOG EVENT](https://doc.4d.com/4dv19/help/command/en/page667.html))</li><li>PluginMessage</li><li>PluginEvent</li><li>PluginCommand</li><li>PluginCallback</li><li>Tarefa</li><li>Método membro (método anexado à coleção ou a um objeto)</li></ol></p>Quando fechar um nível de stack, as colunas `operation_type`, `operation` e `operation_parameters` tem o mesmo valor que o nível de stack registrado na coluna `stack_opening_sequence_number` column. For example:<p><ol><li>121  15:16:50:777  5  8  1  2 CallMethod Parameters 0</li><li>122  15:16:50:777  5  8  2  1 283  0</li><li>123  15:16:50:777  5  8  2  1 283  0 122 3</li><li>124  15:16:50:777  5  8  1  2 CallMethod Parameters 0 121 61</li></ol></p>A primeira e segunda linha abrem o nível de stack, a terceira e quarta linha fecham o nível de stack. Valores nas colunas 6, 7 e 8 são repetidos na linha do nível de stack ao fechar. A coluna 10 contém os números de sequência de abertura do nível de stack, ou seja, 122 para a terceira linha e 121 para a quarta. |
| 7        | operation                       | Pode representar (dependendo do tipo da operação):<li>uma ID de comando de linguagem (quando tipo =1)</li><li>um nome de método (quando tipo =2)</li><li>uma combinação de pluginIndex;pluginCommand (quando tipo=4, 5, 6 ou 7). Pode conter algo como '3;2'</li><li>uma UUID task connection (quando tipo = 8)</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 8        | operation_parameters            | Parâmetros passados a comandos, métodos ou plugins                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 9        | form_event                      | Evento formulário se houver: vazio em outros casos (suponha que a coluna é usada quando o código for executado em um método formulário ou método objeto)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 10       | stack_opening_sequence_number | Só para níveis stack fechamento: número sequencia do nível correspondente de abertura de stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 11       | stack_level_execution_time    | Só para níveis de stack de fechamento: tempo decorrido em microssegundos da ação de histórico atual; só para os níveis de stack de fechamento (ver décima coluna em linhas 123 e 124 no histórico acima)                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

## 4DDiagnosticLog.txt

Esse arquivo registra vários eventos relacionados à operação de aplicação e sua leitura humana. Pode incluir informação personalizada nesse arquivo usando o comando [LOG EVENT](https://doc.4d.com/4dv19/help/command/en/page667.html)

Como iniciar esse log:

```4d
 SET DATABASE PARAMETER(Diagnostic log recording;1) //start recording
```

Os campos abaixo estão registrados para cada evento:

| Field Name         | Description                                                   |
| ------------------ | ------------------------------------------------------------- |
| sequenceNumber     | Unique and sequential operation number in the logging session |
| timestamp          | Date and time in ISO 8601 format (YYYY-MM-DDThh:mm:ss.mmm)    |
| loggerID           | Optional                                                      |
| componentSignature | Optional - internal component signature                       |
| messageLevel       | Info, Warning, Error                                          |
| message            | Description of the log entry                                  |

Dependendo do evento, vários outros campos podem ser registrados, como task, socket, etc.

## 4DSMTPLog.txt, 4DPOP3Log.txt, and 4DIMAPLog.txt

Esses históricos registram cada troca entre a aplicação 4D e o servidor de mail (SMTP, POP3, IMAP) que foram iniciados pelos comandos abaixo:

*   SMTP - [SMTP New transporter](API/SMTPTransporterClass.md#smtp-new-transporter)
*   POP3 - [POP3 New transporter](API/POP3TransporterClass.md#pop3-new-transporter)
*   IMAP  - [IMAP New transporter](API/IMAPTransporterClass.md#imap-new-transporter)

Os arquivos de histórico podem ser produzidos em duas versões:

*   a regular version:
    *   named 4DSMTPLog.txt, 4DPOP3Log.txt, or 4DIMAPLog.txt
    *   no attachments
    *   uses an automatic circular file recycling each 10 MB
    *   intended for usual debugging

    To start this log:

    ```4d
    SET DATABASE PARAMETER(SMTP Log;1) //start SMTP log 
    SET DATABASE PARAMETER(POP3 Log;1) //start POP3 log 
    SET DATABASE PARAMETER(IMAP Log;1) //start IMAP log
    ```

    4D Server: Click on the **Start Request and Debug Logs** button in the [Maintenance Page](https://doc.4d.com/4Dv18R5/4D/18-R5/Maintenance-Page.300-5149308.en.html) of the 4D Server administration window.

      This log path is returned by the `Get 4D file` command.

*   an extended version:
    *   attachment(s) included no automatic recycling
    *   custom name
    *   reserved for specific purposes

    To start this log:

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

#### Conteúdos

Para cada petição, os campos abaixo estão logados:

| Column # | Description                                                   |
| -------- | ------------------------------------------------------------- |
| 1        | Unique and sequential operation number in the logging session |
| 2        | Date and time in RFC3339 format (yyyy-mm-ddThh:mm:ss.ms)      |
| 3        | 4D Process ID                                                 |
| 4        | Unique process ID                                             |
| 5        | <ul><li>SMTP,POP3, or IMAP session startup information, including server host name, TCP port number used to connect to SMTP,POP3, or IMAP server and TLS status,or</li><li>data exchanged between server and client, starting with "S <" (data received from the SMTP,POP3, or IMAP server) or "C >" (data sent by the SMTP,POP3, or IMAP client): authentication mode list sent by the server and selected authentication mode, any error reported by the SMTP,POP3, or IMAP Server, header information of sent mail (standard version only) and if the mail is saved on the server,or</li><li>SMTP,POP3, or IMAP session closing information.</li></ul>                                    |

## ORDA client requests

Esse registro grava cada petição ORDA enviada de uma máquina remota. Pode dirigir informação de histórico a uma memória ou a um arquivo em disco. O nome e rota desse arquivo pode ser escolhido.

Como iniciar esse log:

```4d
//to be executed on a remote machine
ds.startRequestLog(File("/PACKAGE/Logs/ordaLog.txt"))  
//can be also sent to memory
```

Se quiser usar esse número de sequência único em histórico de petições ORDA, necessita ativá-lo:

```4d
//to be executed on a remote machine

SET DATABASE PARAMETER(Client Log Recording;1)  
//to enable log sequence number

ds.startRequestLog(File("/PACKAGE/Logs/ordaLog.txt"))  
//can be also sent to memory

SET DATABASE PARAMETER(Client Log Recording;0)  
//disabling sequence number
```

Os campos abaixo são registrados para cada petição:

| Field name     | Description                                                   | Exemplo                                                   |
| -------------- | ------------------------------------------------------------- | --------------------------------------------------------- |
| sequenceNumber | Unique and sequential operation number in the logging session | 104                                                       |
| url            | Client ORDA request URL                                       | "rest/Persons(30001)"                                     |
| startTime      | Starting date and time using ISO 8601 format                  | "2019-05-28T08:25:12.346Z"                                |
| endTime        | Ending date and time using ISO 8601 format                    | "2019-05-28T08:25:12.371Z"                                |
| duration       | Client processing duration (ms)                               | 25                                                        |
| response       | Server response object                                        | {"status":200,"body":{"__entityModel":"Persons",\[...]}} |



## Using a log configuration file

You can use a **log configuration file** to easily manage log recording in a production environment. This file is preconfigured by the developer. Typically, it can be sent to customers so that they just need to select it or copy it in a local folder. Once enabled, the log configuration file triggers the recording of specific logs.

### How to enable the file

There are several ways to enable the log configuration file:

- On 4D Server with interface, you can open the Maintenance page and click on the [Load logs configuration file](Admin/server-admin.md#load-logs-configuration-file) button, then select the file. In this case, you can use any name for the configuration file. It is immediately enabled on the server.
- You can copy the log configuration file in the [Settings folder](Project/architecture.md#settings-1) of the project. In this case, the file must be named `logConfig.json`. It is enabled at project startup (only on the server in client/server).
- With a built application, you can copy the `logConfig.json` file in the following folder:
    + Windows: `Users\[userName]\AppData\Roaming\[application]`
    + macOS: `/Users/[userName]/Library/ApplicationSupport/[application]`

> If you want to enable the log configuration file for all projects in stand-alone, server and remote 4D applications, you can copy the `logConfig.json` file in the following folder: - Windows: `Users\[userName]\AppData\Roaming\4D or \4D Server` - macOS: `/Users/[userName]/Library/ApplicationSupport/4D or /4D Server`

### JSON file description

The log configuration file is a `.json` file that can contain the following properties:

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

### Exemplo

Here is an example of log configuration file:

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