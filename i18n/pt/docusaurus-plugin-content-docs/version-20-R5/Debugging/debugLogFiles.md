---
id: debugLogFiles
title: Arquivo de histórico
---

Aplicações 4D podem gerar vários arquivos de histórico ou log que são úteis para depuração e otimizar sua execução. Logs are usually started or stopped using selectors of the [SET DATABASE PARAMETER](https://doc.4d.com/4dv20/help/command/en/page642.html), [WEB SET OPTION](https://doc.4d.com/4dv20/help/command/en/page1210.html), or [HTTP SET OPTION](https://doc.4d.com/4dv20/help/command/en/page1160.html) commands and are stored in the [Logs folder](Project/architecture.md#logs) of the project.

Informação gravada precisa ser analisada para detectar e corrigir os problemas. Esta seção oferece uma descrição detalhada dos arquivos de log abaixo:

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

> Nota: quando um arquivo de histórico for gerado seja em 4D Server ou em cliente remoto, a palavra "Server" é adicionada ao nome do arquivo do lado servidor, por exemplo "4DRequestsLogServer.txt"

Arquivos de Histórico compartilham alguns campos para que possa estabelecer uma cronologia e fazer conexões entre entradas quando depurar:

- `sequence_number`: this number is unique over all debug logs and is incremented for each new entry whatever the log file, so that you can know the exact sequence of the operations.
- `connection_uuid`: for any 4D process created on a 4D client that connects to a server, this connection UUID is logged on both server and client side. Permite que facilmente identifique o cliente remoto que lança cada processo.

## 4DRequestsLog.txt

Esses arquivos de histórico gravam petições normais realizadas pela máquina 4D Server ou a máquina remota 4D que executaram o comando (excluindo petições Web).

Como iniciar esse log:

- no servidor:

```4d
SET DATABASE PARAMETER(4D Server log recording;1)
//lado servidor
```

- em um cliente:

```4d
SET DATABASE PARAMETER(Client Log Recording;1)
//lado remoto
```

> This statement also starts the [4DRequestsLog_ProcessInfo.txt](#4drequestslog_processinfotxt) log file.

#### Cabeçalhos

Este arquivo começa com os cabeçalhos abaixo:

- Identificador de sessão de histórico
- Hostname do servidor que hospeda a aplicação
- Nome login Usuário: login do SO do usuário que roda a aplicação 4D no servidor.

#### Conteúdos

Para cada petição, os campos abaixo estão logados:

| Campo nome                                                                     | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sequence_number                                           | Número de operação único e sequencial da sessão de histórico                                                                                                                                                                                                                                                                                                                                                                                                                    |
| time                                                                           | Data e hora usando formato ISO 8601: 'YYYY-MM-DDTHH:MM:SS.mmm'                                                                                                                                                                                                                                                                                                                                                  |
| systemid                                                                       | ID de sistema                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| componente                                                                     | Assinatura de componente (por exemplo '4SQLS' ou 'dbmg')                                                                                                                                                                                                                                                                                                                                                                                                     |
| process\_info_                                                                | index Corresponds to the "index" field in 4DRequestsLog_ProcessInfo.txt log, and permits linking a request to a process.                                                                                                                                                                                                                                                                                                   |
| request                                                                        | [C/S or ORDA request ID](https://github.com/4d/request-log-definitions/blob/master/RequestIDs.txt) or message string for SQL requests or `LOG EVENT` messages                                                                                                                                                                                                                                                                                                                   |
| bytes_in                                                  | Número de bytes recebidos                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| bytes_out                                                 | Número de bytes enviados                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| server\_duration \| exec\_duration | Depends on where the log is generated:<li>_server\_duration_ when generated on the client --Time taken in microseconds for the server to process the request and return a response. B to F in image below, OR</li><li>_exec\_duration_ when generated on the server --Time taken in microseconds for the server to process the request. B to E in image below.</li> |
| write\_duration                                          | Time taken in microseconds for sending the:<li>Request (when run on the client). A to B in image below.</li><li>Response (when run on the server). E to F in image below.</li>                                                                                                                                                                            |
| task_kind                                                 | Preemptivo ou cooperativo (respectivamente 'p' ou 'c')                                                                                                                                                                                                                                                                                                                                                                                                       |
| rtt                                                                            | Tempo estimado em microssegundos para o cliente enviar a petição e o servidor para reconhecê-la. A to D and E to H in image below.<li>Only measured when using the ServerNet network layer, returns 0 when used with the legacy network layer.</li><li>For Windows versions prior to Windows 10 or Windows Server 2016, the call will return 0.</li>                                                            |
| extra                                                                          | Informações adicionais relacionadas com o contexto, por exemplo, nome da classe de dados e/ou nome do atributo no caso de um pedido ORDA                                                                                                                                                                                                                                                                                                                                        |

Fluxo de petição:

![](../assets/en/Admin/logRequestFlow.PNG)

## 4DRequestsLog_ProcessInfo.txt

Este arquivo de histórico registra a informação em cada processo criado na máquina 4D Server ou na máquina remota 4D que executa o comando (excluindo petições Web).

Como iniciar esse log:

- no servidor:

```4d
SET DATABASE PARAMETER(4D Server log recording;1) //lado servidor
```

- em um cliente:

```4d
SET DATABASE PARAMETER(Client Log Recording;1) //lado remoto
```

> This statement also starts the [4DRequestsLog.txt](#4drequestslogtxt) log file.

#### Cabeçalhos

Este arquivo começa com os cabeçalhos abaixo:

- Identificador de sessão de histórico
- Hostname do servidor que hospeda a aplicação
- Nome login Usuário: login do SO do usuário que roda a aplicação 4D no servidor.

#### Conteúdos

Para cada processo, os campos abaixo são registrados:

| Campo nome                                                                                    | Descrição                                                                                                                               |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| sequence_number                                                          | Número de operação único e sequencial da sessão de histórico                                                                            |
| time                                                                                          | Hora e data usando o formato ISO 8601 format: "YYYY-MM-DDTHH:MM:SS.mmm" |
| process\_info_index                                | Número de processo único e sequencial                                                                                                   |
| CDB4DBaseContext                                                                              | DB4D contexto de componente database UUID                                                                                               |
| systemid                                                                                      | ID de sistema                                                                                                                           |
| server\_process\_id                               | ID de processo no servidor                                                                                                              |
| remote\_process\_id                               | Id de processo no cliente                                                                                                               |
| process\_name                                                           | Nome de processo                                                                                                                        |
| cID                                                                                           | Identificador de conexão 4D                                                                                                             |
| uID                                                                                           | Identificador de Cliente 4D                                                                                                             |
| IP Client                                                                                     | IPv4/IPv6アドレス                                                                                                                           |
| host_name                                                                | Hostname do cliente                                                                                                                     |
| user_name                                                                | Nome de login de usuário no cliente                                                                                                     |
| connection\_uuid                                                        | Identificador UUID da conexão de processo                                                                                               |
| server\_process\_unique\_id | ID de Processo único em Servidor                                                                                                        |

## HTTPDebugLog.txt

Este arquivo registra cada petição HTTP e cada resposta em modo raw (não processado). Petições inteiras, incluindo cabeçalhos, são registradas; opcionalmente, partes do corpo podem ser registradas também.

Como iniciar esse log:

```4d

WEB SET OPTION(Web debug log;wdl enable without body)  
//other values are available
```

Os campos abaixo são registrados tanto para Request quanto para Response:

| Campo nome     | Descrição                                                                      |
| -------------- | ------------------------------------------------------------------------------ |
| SocketID       | ID da socked usada para comunicação                                            |
| PeerIP         | Endereço IPv4 do host (cliente)                             |
| PeerPort       | Porta usada por host (cliente)                              |
| TimeStamp      | Timestamp em milisegundos (desde início sistema)            |
| ConnectionID   | Connection UUID (UUID de VTCPSocket usada para comunicação) |
| SequenceNumber | Número de operação único e sequencial da sessão de histórico                   |

## 4DHTTPClientLog.txt

Este arquivo de histórico registra o tráfego HTTP que passa pelo cliente HTTP do 4D. Whole requests and responses, including headers, are logged; optionally, body parts can be logged as well.

Como iniciar esse log:

```4d

HTTP SET OPTION(HTTP client log; HTTP enable log with all body parts)  
//other values are available
```

Os campos abaixo são registrados tanto para Request quanto para Response:

| Campo nome      | Descrição                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------- |
| SequenceID      | Número de operação único e sequencial da sessão de histórico                                        |
| ConnectionID    | Identificador UUID da conexão de processo                                                           |
| LocalIP         | Endereço IP do Cliente                                                                              |
| PeerIP          | Endereço IP do servidor                                                                             |
| TimeStamp       | Timestamp (ms) at the time the request is sent or the response is fully received |
| ElapsedTimeInMs | (response only) Difference with the request timestamp                            |

Depending on log options, various other fields can also be logged.

- Para solicitação: linha de solicitação, cabeçalhos, corpo da solicitação
- Para resposta: linha de estado, cabeçalhos, corpo da resposta (não compactado), se houver

## 4DDebugLog.txt (standard)

Esses registros de histórico gravam cada evento que ocorreu ao nível de programação de 4D. Modo padrão oferece uma vista básica de eventos.

Como iniciar esse log:

```4d
SET DATABASE PARAMETER(Debug Log Recording;2)  
//standard, all processes SET DATABASE PARAMETER(Current process debug log recording;2)  
//standard, current process only
```

Os campos abaixo estão registrados para cada evento:

| Coluna # | Descrição                                                                                                                    |
| -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 1        | Número de operação único e sequencial da sessão de histórico                                                                 |
| 2        | Data e hora em formato ISO 8601 (YYYY-MM-DDThh:mm:ss.mmm) |
| 3        | ID de processo (p=xx) e ID de processo único (puid=xx)                                 |
| 4        | Nível de stack                                                                                                               |
| 5        | Pode ser Command Name/ Method Name/Message/ Task Start Stop info/Plugin Name, event ou Callback/Connection UUID              |
| 6        | Tempo que leva para a operação de histórico em milissegundos                                                                 |

## 4DDebugLog.txt (tabular)

Esse arquivo de histórico registra cada evento que ocorrer ao nível de programação 4D em um formato tabulado e compacto que inclui informação adicional (comparado ao formato padrão).

Como iniciar esse log:

```4d
SET DATABASE PARAMETER(Debug Log Recording;2+4)  
//extended tabbed format, all processes SET DATABASE PARAMETER(Current process debug log recording;2+4)  
//extended, current process only
```

Os campos abaixo estão registrados para cada evento:

| Coluna # | Campo nome                                                                                   | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1        | sequence_number                                                         | Número de operação único e sequencial da sessão de histórico                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2        | time                                                                                         | Data e hora em formato ISO 8601 (YYYY-MM-DDThh:mm:ss.mmm)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 3        | ProcessID                                                                                    | Process ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 4        | unique_processID                                                        | ID de processo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 5        | stack_level                                                             | Nível de stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 6        | operation_type                                                          | Tipo operação histórico. This value may be an absolute value:<p><ol><li>Command</li><li>Method (project method, database method, etc.)</li><li>Message (sent by [LOG EVENT](https://doc.4d.com/4dv20/help/command/en/page667.html) command only)</li><li>PluginMessage</li><li>PluginEvent</li><li>PluginCommand</li><li>PluginCallback</li><li>Task</li><li>Member method (method attached to a collection or an object)</li></ol></p>When closing a stack level, the `operation_type`, `operation` and `operation_parameters` columns have the same value as the opening stack level logged in the `stack_opening_sequence_number` column. For example:<p><ol><li>121  15:16:50:777  5  8  1  2 CallMethod Parameters 0</li><li>122  15:16:50:777  5  8  2  1 283  0</li><li>123  15:16:50:777  5  8  2  1 283  0 122 3</li><li>124  15:16:50:777  5  8  1  2 CallMethod Parameters 0 121 61</li></ol></p>The 1st and 2nd lines open a stack level, the 3rd and 4th lines close a stack level. Valores nas colunas 6, 7 e 8 são repetidos na linha do nível de stack ao fechar. A coluna 10 contém os números de sequência de abertura do nível de stack, ou seja, 122 para a terceira linha e 121 para a quarta. |
| 7        | operation                                                                                    | May represent (depending on operation type):<li>a Language Command ID (when type=1)</li><li>a Method Name (when type=2)</li><li>a combination of pluginIndex;pluginCommand (when type=4, 5, 6 or 7). May contain something like '3;2'</li><li>a Task Connection UUID (when type=8)</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 8        | operation_parameters                                                    | Parâmetros passados a comandos, métodos ou plugins                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 9        | form_event                                                              | Evento formulário se houver: vazio em outros casos (suponha que a coluna é usada quando o código for executado em um método formulário ou método objeto)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 10       | stack_opening_sequence_number | Só para níveis stack fechamento: número sequencia do nível correspondente de abertura de stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 11       | stack_level_execution_time    | Só para níveis de stack de fechamento: tempo decorrido em microssegundos da ação de histórico atual; só para os níveis de stack de fechamento (ver décima coluna em linhas 123 e 124 no histórico acima)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

## 4DDiagnosticLog.txt

Esse arquivo registra vários eventos relacionados à operação de aplicação e sua leitura humana. You can include custom information in this file using the [LOG EVENT](https://doc.4d.com/4dv19/help/command/en/page667.html) command.

Como iniciar esse log:

```4d
 SET DATABASE PARAMETER(Diagnostic log recording;1) //start recording
```

Os campos abaixo estão registrados para cada evento:

| Nome de campo      | Descrição                                                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| sequenceNumber     | Número de operação único e sequencial da sessão de histórico                                                                 |
| timestamp          | Data e hora em formato ISO 8601 (YYYY-MM-DDThh:mm:ss.mmm) |
| loggerID           | Opcional                                                                                                                     |
| componentSignature | Opcional - assinatura interna de componente                                                                                  |
| messageLevel       | Informação, Aviso, Erro                                                                                                      |
| message            | Descrição da entrada de histórico                                                                                            |

Dependendo do evento, vários outros campos podem ser registrados, como task, socket, etc.

### Níveis de registo de diagnóstico

The _4DDiagnosticLog.txt_ file can log different levels of messages, from `ERROR` (most important) to `TRACE` (less important). By default, the `INFO` level is set, which means that the file will log only important events, including errors and unexpected results (see below).

You can select the level of messages using the `Diagnostic log level` selector of the [SET DATABASE PARAMETER](https://doc.4d.com/4dv20/help/command/en/page642.html) command, depending on your needs. Quando se selecciona um nível, os níveis acima (que são mais importantes) são implicitamente seleccionados também. Estão disponíveis os seguintes níveis:

| Parâmetros  | Descrição                                                                                            | Quando seleccionado, inclui                                   |
| ----------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `Log error` | Uma parte da aplicação não funciona                                                                  | `Log error`                                                   |
| `Log warn`  | Erro potencial, utilização de uma função obsoleta, má utilização, situação indesejável ou inesperada | `Log error`, `Log warn`                                       |
| `Log info`  | _Default level_ - Important application event                                                        | `Log error`, `Log warn`, `Log info`                           |
| `Log debug` | Detalhe do fluxo de aplicação (para serviços técnicos 4D)                         | `Log error`, `Log warn`, `Log info`, `Log debug`              |
| `Log trace` | Outras informações internas (para serviços técnicos 4D)                           | `Log error`, `Log warn`, `Log info`, `Log debug`, `Log trace` |

Exemplo:

```4d
SET DATABASE PARAMETER (Diagnostic log recording; 1)
SET DATABASE PARAMETER (Diagnostic log level; Log trace)
```

## 4DSMTPLog.txt, 4DPOP3Log.txt, e 4DIMAPLog.txt

Esses históricos registram cada troca entre a aplicação 4D e o servidor de mail (SMTP, POP3, IMAP) que foram iniciados pelos comandos abaixo:

- SMTP - [SMTP New transporter](API/SMTPTransporterClass.md#smtp-new-transporter)
- POP3 - [POP3 New transporter](API/POP3TransporterClass.md#pop3-new-transporter)
- IMAP  - [IMAP New transporter](API/IMAPTransporterClass.md#imap-new-transporter)

Os arquivos de histórico podem ser produzidos em duas versões:

- uma versão comum:
  - chamada 4DSMTPLog.txt, 4DPOP3Log.txt, ou 4DIMAPLog.txt
  - sem anexos
  - usa um arquivo circular automático que é reciclado a cada 10MB
  - para depurações comuns

Para começar esse histórico:

```4d
SET DATABASE PARAMETER(SMTP Log;1) //inicia SMTP log
SET DATABASE PARAMETER(POP3 Log;1) //inicia POP3 log
SET DATABASE PARAMETER(IMAP Log;1) //inicia IMAP log
```

> 4D Server: Click on the **Start Request and Debug Logs** button in the [Maintenance Page](ServerWindow/maintenance.md) of the 4D Server administration window.

This log path is returned by the `Get 4D file` command.

- uma versão estendida:
  - attachment(s) included no automatic recycling
  - nome personalizado
  - guardado para propósitos específicos

Para começar esse histórico:

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

| Coluna # | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1        | Número de operação único e sequencial da sessão de histórico                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2        | Data e hora em formato RFC3339 (yyyy-mm-ddThh:mm:ss.ms)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 3        | ID de 4D Process                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 4        | ID de processo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 5        | <ul><li>SMTP,POP3, or IMAP session startup information, including server host name, TCP port number used to connect to SMTP,POP3, or IMAP server and TLS status,or</li><li>data exchanged between server and client, starting with "S <" (data received from the SMTP,POP3, or IMAP server) or "C >" (data sent by the SMTP,POP3, or IMAP client): authentication mode list sent by the server and selected authentication mode, any error reported by the SMTP,POP3, or IMAP Server, header information of sent mail (standard version only) and if the mail is saved on the server,or</li><li>SMTP,POP3, or IMAP session closing information.</li></ul> |

## Pedidos ORDA

Os registos de pedidos ORDA podem registar cada pedido ORDA e a resposta do servidor. Estão disponíveis dois registos de pedidos ORDA:

- um registo de pedidos ORDA do lado do cliente, em formato .txt
- um registo de pedidos ORDA do lado do servidor, em formato .jsonl

### Do lado do cliente

O registo ORDA do lado do cliente regista cada pedido ORDA enviado a partir de uma máquina remota. Pode direcionar as informações de registo para a memória ou para um arquivo .txt no disco da máquina remota. O nome e rota desse arquivo pode ser escolhido.

Como iniciar esse log:

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

Os campos abaixo são registrados para cada petição:

| Campo nome     | Descrição                                                                    | Exemplo                                                                                                                                                                                                                                               |
| -------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sequenceNumber | Número de operação único e sequencial da sessão de histórico                 | 104                                                                                                                                                                                                                                                   |
| url            | Solicitar URL                                                                | "rest/Persons(30001)"                                                                                                                                                                                                              |
| startTime      | Data e hora de início utilizando o formato ISO 8601                          | "2019-05-28T08:25:12.346Z"                                                                                                                                                                            |
| endTime        | Data e hora final usando formato ISO 8601                                    | "2019-05-28T08:25:12.371Z"                                                                                                                                                                            |
| duration       | Duração do processamento do cliente em milissegundos (ms) | 25                                                                                                                                                                                                                                                    |
| response       | Objeto resposta servidor                                                     | {"status":200,"body":{"__entityModel":"Persons",\[...] |

#### Exemplo

Eis um exemplo de um registo de ficheiro de registo ORDA do lado do cliente:

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

### Do lado do servidor

O registo ORDA do lado do servidor regista cada pedido ORDA processado pelo servidor, bem como a resposta do servidor (opcional). Log information is saved in a .jsonl file on the server machine disk (by default, _ordaRequests.jsonl_).

Como iniciar esse log:

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

Os campos abaixo são registrados para cada petição:

| Campo nome     | Descrição                                                                                                     | Exemplo                                                                                                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sequenceNumber | Número de operação único e sequencial da sessão de histórico                                                  | 104                                                                                                                                                                                                                                                   |
| url            | Solicitar URL                                                                                                 | "rest/Persons(30001)"                                                                                                                                                                                                              |
| startTime      | Data e hora de início utilizando o formato ISO 8601                                                           | "2019-05-28T08:25:12.346Z"                                                                                                                                                                            |
| duration       | Duração do processamento do servidor em microssegundos (µ)                                 | 2500                                                                                                                                                                                                                                                  |
| response       | Server response object, can be configured in [`.startRequestLog()`](../API/DataStoreClass.md#startrequestlog) | {"status":200,"body":{"__entityModel":"Persons",\[...] |
| ipAddress      | Endereço IP do usuário                                                                                        | "192.168.1.5"                                                                                                                                                                                         |
| userName       | Nome do usuário 4D                                                                                            | "henry"                                                                                                                                                                                                                                               |
| systemUserName | Nome de login do usuário na máquina                                                                           | "hsmith"                                                                                                                                                                                                                                              |
| machineName    | Nome da máquina do utilizador                                                                                 | "PC of Henry Smith"                                                                                                                                                                                                                                   |

#### Exemplo

Eis um exemplo de um registo de registo ORDA do lado do servidor:

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

## Utilizar um ficheiro de configuração de log

You can use a **log configuration file** to easily manage log recording in a production environment. Este arquivo é pré-configurado pelo programador. Normalmente, pode ser enviado aos clientes para que estes apenas tenham de o selecionar ou copiar para uma pasta local. Uma vez ativado, o arquivo de configuração de registos desencadeia a gravação de registos específicos.

### Como activar o arquivo

Existem várias formas de ativar o arquivo de configuração do registo, dependendo da sua configuração:

- **4D Server with interface**: you can open the Maintenance page and click on the [Load logs configuration file](ServerWindow/maintenance.md#load-logs-configuration-file) button, then select the file. Neste caso, pode utilizar qualquer nome para o arquivo de configuração. É imediatamente ativado no servidor.
- **an interpreted or compiled project**: the file must be named `logConfig.json` and copied in the [Settings folder](../Project/architecture.md#settings-1) of the project (located at the same level as the [`Project` folder](../Project/architecture.md#project-folder)). É ativado no arranque do projeto (apenas no servidor em cliente/servidor).
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

### Descrição do ficheiro JSON

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

### Exemplo

Aqui está um exemplo de arquivo de configuração de log:

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
