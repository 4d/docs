---
id: debugLogFiles
title: Descrição de arquivos de histórico
---

Aplicações 4D podem gerar vários arquivos de histórico ou log úteis para depuração e otimizar sua execução. Os históricos são normalmente iniciados ou interrompidos utilizando os selectores dos comandos [SET DATABASE PARAMETER](https://doc.4d.com/4dv20/help/command/en/page642.html), [WEB SET OPTION](https://doc.4d.com/4dv20/help/command/en/page1210.html), ou [HTTP SET OPTION](https://doc.4d.com/4dv20/help/command/en/page1160.html) e são armazenados na [pasta Logs](Project/architecture.md#logs) do projeto.

Informação gravada precisa ser analisada para detectar e corrigir os problemas. Esta seção oferece uma descrição detalhada dos arquivos de log abaixo:

* [4DRequestsLog.txt](#4drequestslogtxt)
* [4DRequestsLog_ProcessInfo.txt](l#4drequestslog_processinfotxt)
* [HTTPDebugLog.txt](#httpdebuglogtxt)
* [4DHTTPClientLog.txt](#4dhttpclientlogtxt)
* 4DDebugLog.txt ([padrão](#4ddebuglogtxt-standard) & [tabular](#4ddebuglogtxt-tabular))
* [4DDiagnosticLog.txt](#4ddiagnosticlogtxt)
* [4DIMAPLog.txt](#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
* [4DPOP3Log.txt](#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
* [4DSMTPLog.txt](#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
* [Ficheiro de registo dos pedidos ORDA](#orda-requests)

> Nota: quando um arquivo de histórico for gerado seja em 4D Server ou em cliente remoto, a palavra "Server" é adicionada ao nome do arquivo do lado servidor, por exemplo "4DRequestsLogServer.txt"

Arquivos de Histórico compartilham alguns campos para que possa estabelecer uma cronologia e fazer conexões entre entradas quando depurar:

* `sequence_number`: esse número é unico entre todos os arquivos de histórico e é aumentado a cada nova entrada qualquer que seja o arquivo de log, para que possa saber a sequência exata das operações.
* `connection_uuid`: para qualquer processo 4D criado em um cliente 4D que conecte a u m servidor, essa conexão UUID é registrada tanto no servior quanto no lado do cliente. Permite que facilmente identifique o cliente remoto que lança cada processo.

## 4DRequestsLog.txt

Esses arquivos de histórico gravam petições normais realizadas pela máquina 4D Server ou a máquina remota 4D que executaram o comando (excluindo petições Web).

Como iniciar esse log:

* no servidor:

```4d
SET DATABASE PARAMETER(4D Server log recording;1)
//lado servidor
```

* em um cliente:

```4d
SET DATABASE PARAMETER(Client Log Recording;1)
//lado remoto
```
> Esta declaração também começa o arquivo de histórico [4DRequestsLog.txt](#4drequestslogtxt).

#### Cabeçalhos

Este arquivo começa com os cabeçalhos abaixo:

* Identificador de sessão de histórico
* Hostname do servidor que hospeda a aplicação
* Nome login Usuário: login do SO do usuário que roda a aplicação 4D no servidor.

#### Conteúdos

Para cada petição, os campos abaixo estão logados:

| Campo nome                                 | Descrição                                                                                                                                                                          |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sequence_number                            | Número de operação único e sequencial da sessão de histórico                                                                                                                       |
| time                                       | Data e hora usando formato ISO 8601: 'YYYY-MM-DDTHH:MM:SS.mmm'                                                                                                                     |
| systemid                                   | ID de sistema                                                                                                                                                                      |
| componente                                 | Assinatura de componente (por exemplo '4SQLS' ou 'dbmg')                                                                                                                           |
| process\_info_                           | index Corresponds to the "index" field in 4DRequestsLog_ProcessInfo.txt log, and permits linking a request to a process.                                                           |
| request                                    | [ID do pedido C/S ou ORDA](https://github.com/4d/request-log-definitions/blob/master/RequestIDs.txt) ou cadeia de mensagens para pedidos SQL, ou mensagens `LOG EVENT`             |
| bytes_in                                   | Número de bytes recebidos                                                                                                                                                          |
| bytes_out                                  | Número de bytes enviados                                                                                                                                                           |
| server\_duration &#124; exec\_duration | Depende de onde o histórico for gerado:<li>*server\_duration* se for gerado no cliente - tempo que levou em microssegundos para o servidor processar a petição e retornar a resposta. B a F na imagem abaixo OU</li><li>*exec\_duration* se gerado no servidor - tempo que levou em microssegundos para o servidor processar a petição. B a E na imagem abaixo.</li>                                                                                          |
| write\_duration                          | Tempo que levou em microssegundos para enviar:<li>a petição (quando rodar no cliente). A a B na imagem abaixo.</li><li>Resposta (quando rodar no servidor). E a F na imagem abaixo.</li>                                                                                   |
| task_kind                                  | Preemptivo ou cooperativo (respectivamente 'p' ou 'c')                                                                                                                             |
| rtt                                        | Tempo estimado em microssegundos para o cliente enviar a petição e o servidor para reconhecê-la. A a D e E a H na imagem abaixo.<li>Só medido quando usar a capa de rede ServerNet, retorna 0 se usado com capa de rede legado.</li><li>Para versões de Windows anteriores a Windows 10 ou Windows Server 2016, a chamada retorna 0.</li> |
| extra                                      | Informações adicionais relacionadas com o contexto, por exemplo, nome da classe de dados e/ou nome do atributo no caso de um pedido ORDA                                           |

Fluxo de petição:

![](../assets/en/Admin/logRequestFlow.PNG)

## 4DRequestsLog_ProcessInfo.txt

Este arquivo de histórico registra a informação em cada processo criado na máquina 4D Server ou na máquina remota 4D que executa o comando (excluindo petições Web).

Como iniciar esse log:

* no servidor:

```4d
SET DATABASE PARAMETER(4D Server log recording;1) //lado servidor
```

* em um cliente:

```4d
SET DATABASE PARAMETER(Client Log Recording;1) //lado remoto
```
> Esta declaração também começa um arquivo de histórico [4DRequestsLog_ProcessInfo.txt](#4drequestslog_processinfotxt).

#### Cabeçalhos

Este arquivo começa com os cabeçalhos abaixo:

* Identificador de sessão de histórico
* Hostname do servidor que hospeda a aplicação
* Nome login Usuário: login do SO do usuário que roda a aplicação 4D no servidor.

#### Conteúdos

Para cada processo, os campos abaixo são registrados:

| Campo nome                        | Descrição                                                               |
| --------------------------------- | ----------------------------------------------------------------------- |
| sequence_number                   | Número de operação único e sequencial da sessão de histórico            |
| time                              | Hora e data usando o formato ISO 8601 format: "YYYY-MM-DDTHH:MM:SS.mmm" |
| process\_info_index             | Número de processo único e sequencial                                   |
| CDB4DBaseContext                  | DB4D contexto de componente database UUID                               |
| systemid                          | ID de sistema                                                           |
| server\_process\_id           | ID de processo no servidor                                              |
| remote\_process\_id           | Id de processo no cliente                                               |
| process\_name                   | Nome de processo                                                        |
| cID                               | Identificador de conexão 4D                                             |
| uID                               | Identificador de Cliente 4D                                             |
| IP Client                         | IPv4/IPv6アドレス                                                           |
| host_name                         | Hostname do cliente                                                     |
| user_name                         | Nome de login de usuário no cliente                                     |
| connection\_uuid                | Identificador UUID da conexão de processo                               |
| server\_process\_unique\_id | ID de Processo único em Servidor                                        |

## HTTPDebugLog.txt

Este arquivo registra cada petição HTTP e cada resposta em modo raw (não processado). Petições inteiras, incluindo cabeçalhos, são registradas; opcionalmente, partes do corpo podem ser registradas também.

Como iniciar esse log:

```4d



WEB SET OPTION(Web debug log;wdl enable without body)  
//outros valores estão disponíveis
```

Os campos abaixo são registrados tanto para Request quanto para Response:

| Campo nome     | Descrição                                                    |
| -------------- | ------------------------------------------------------------ |
| SocketID       | ID da socked usada para comunicação                          |
| PeerIP         | Endereço IPv4 do host (cliente)                              |
| PeerPort       | Porta usada por host (cliente)                               |
| TimeStamp      | Timestamp em milisegundos (desde início sistema)             |
| ConnectionID   | Connection UUID (UUID de VTCPSocket usada para comunicação)  |
| SequenceNumber | Número de operação único e sequencial da sessão de histórico |

## 4DHTTPClientLog.txt

Este arquivo de histórico registra o tráfego HTTP que passa pelo cliente HTTP do 4D. Whole requests and responses, including headers, are logged; optionally, body parts can be logged as well.

Como iniciar esse log:

```4d

HTTP SET OPTION(HTTP client log; HTTP enable log with all body parts)  
//outros valores estão disponíveis
```

Os campos abaixo são registrados tanto para Request quanto para Response:

| Campo nome      | Descrição                                                                        |
| --------------- | -------------------------------------------------------------------------------- |
| SequenceID      | Número de operação único e sequencial da sessão de histórico                     |
| ConnectionID    | Identificador UUID da conexão de processo                                        |
| LocalIP         | Endereço IP do Cliente                                                           |
| PeerIP          | Endereço IP do servidor                                                          |
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

| Coluna # | Descrição                                                                                                       |
| -------- | --------------------------------------------------------------------------------------------------------------- |
| 1        | Número de operação único e sequencial da sessão de histórico                                                    |
| 2        | Data e hora em formato ISO 8601 (YYYY-MM-DDThh:mm:ss.mmm)                                                       |
| 3        | ID de processo (p=xx) e ID de processo único (puid=xx)                                                          |
| 4        | Nível de stack                                                                                                  |
| 5        | Pode ser Command Name/ Method Name/Message/ Task Start Stop info/Plugin Name, event ou Callback/Connection UUID |
| 6        | Tempo que leva para a operação de histórico em milissegundos                                                    |

## 4DDebugLog.txt (tabular)

Esse arquivo de histórico registra cada evento que ocorrer ao nível de programação 4D em um formato tabulado e compacto que inclui informação adicional (comparado ao formato padrão).

Como iniciar esse log:

```4d
SET DATABASE PARAMETER(Debug Log Recording;2+4)  
//extended tabbed format, all processes SET DATABASE PARAMETER(Current process debug log recording;2+4)  
//extended, current process only
```

Os campos abaixo estão registrados para cada evento:

| Coluna # | Campo nome                      | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1        | sequence_number                 | Número de operação único e sequencial da sessão de histórico                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2        | time                            | Data e hora em formato ISO 8601 (YYYY-MM-DDThh:mm:ss.mmm)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 3        | ProcessID                       | Process ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 4        | unique_processID                | ID de processo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 5        | stack_level                     | Nível de stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 6        | operation_type                  | Tipo operação histórico. Esse valor pode ser um valor absoluto:<p><ol><li>Comando</li><li>Método (método de projeto, método de banco de dados, etc)</li><li>Mensagem (enviada só pelo comando [LOG EVENT](https://doc.4d.com/4dv20/help/command/en/page667.html))</li><li>PluginMessage</li><li>PluginEvent</li><li>PluginCommand</li><li>PluginCallback</li><li>Tarefa</li><li>Método membro (método anexado à coleção ou a um objeto)</li></ol></p>Quando fechar um nível de stack, as colunas `operation_type`, `operation` e `operation_parameters` tem o mesmo valor que o nível de stack registrado na coluna `stack_opening_sequence_number` column. Por exemplo:<p><ol><li>121  15:16:50:777  5  8  1  2 CallMethod Parameters 0</li><li>122  15:16:50:777  5  8  2  1 283  0</li><li>123  15:16:50:777  5  8  2  1 283  0 122 3</li><li>124  15:16:50:777  5  8  1  2 CallMethod Parameters 0 121 61</li></ol></p>A primeira e segunda linha abrem o nível de stack, a terceira e quarta linha fecham o nível de stack. Valores nas colunas 6, 7 e 8 são repetidos na linha do nível de stack ao fechar. A coluna 10 contém os números de sequência de abertura do nível de stack, ou seja, 122 para a terceira linha e 121 para a quarta. |
| 7        | operation                       | Pode representar (dependendo do tipo da operação):<li>uma ID de comando de linguagem (quando tipo =1)</li><li>um nome de método (quando tipo =2)</li><li>uma combinação de pluginIndex;pluginCommand (quando tipo=4, 5, 6 ou 7). Pode conter algo como '3;2'</li><li>uma UUID task connection (quando tipo = 8)</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 8        | operation_parameters            | Parâmetros passados a comandos, métodos ou plugins                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 9        | form_event                      | Evento formulário se houver: vazio em outros casos (suponha que a coluna é usada quando o código for executado em um método formulário ou método objeto)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 10       | stack_opening_sequence_number | Só para níveis stack fechamento: número sequencia do nível correspondente de abertura de stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 11       | stack_level_execution_time    | Só para níveis de stack de fechamento: tempo decorrido em microssegundos da ação de histórico atual; só para os níveis de stack de fechamento (ver décima coluna em linhas 123 e 124 no histórico acima)                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

## 4DDiagnosticLog.txt

Esse arquivo registra vários eventos relacionados à operação de aplicação e sua leitura humana. Pode incluir informação personalizada nesse arquivo usando o comando [LOG EVENT](https://doc.4d.com/4dv19/help/command/en/page667.html)

Como iniciar esse log:

```4d
 SET DATABASE PARAMETER(Diagnostic log recording;1) //começa o registro
```

Os campos abaixo estão registrados para cada evento:

| Nome de campo      | Descrição                                                    |
| ------------------ | ------------------------------------------------------------ |
| sequenceNumber     | Número de operação único e sequencial da sessão de histórico |
| timestamp          | Data e hora em formato ISO 8601 (YYYY-MM-DDThh:mm:ss.mmm)    |
| loggerID           | Opcional                                                     |
| componentSignature | Opcional - assinatura interna de componente                  |
| messageLevel       | Informação, Aviso, Erro                                      |
| message            | Descrição da entrada de histórico                            |

Dependendo do evento, vários outros campos podem ser registrados, como task, socket, etc.

### Níveis de registo de diagnóstico

O arquivo *4DDiagnosticLog.txt* pode registar diferentes níveis de mensagens, desde `ERROR` (mais importante) a `TRACE` (menos importante). Por predefinição, o nível `INFO` está definido, o que significa que o arquivo registará apenas eventos importantes, incluindo erros e resultados inesperados (ver abaixo).

Pode selecionar o nível das mensagens utilizando o seletor `Diagnostic log level` do comando [SET DATABASE PARAMETER](https://doc.4d.com/4dv20/help/command/en/page642.html), consoante as suas necessidades. Quando se selecciona um nível, os níveis acima (que são mais importantes) são implicitamente seleccionados também. Estão disponíveis os seguintes níveis:

| Parâmetros  | Descrição                                                                                            | Quando seleccionado, inclui                                   |
| ----------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `Log error` | Uma parte da aplicação não funciona                                                                  | `Log error`                                                   |
| `Log warn`  | Erro potencial, utilização de uma função obsoleta, má utilização, situação indesejável ou inesperada | `Log error`, `Log warn`                                       |
| `Log info`  | *Nível padrão* - Evento de aplicação importante                                                      | `Log error`, `Log warn`, `Log info`                           |
| `Log debug` | Detalhe do fluxo de aplicação (para serviços técnicos 4D)                                            | `Log error`, `Log warn`, `Log info`, `Log debug`              |
| `Log trace` | Outras informações internas (para serviços técnicos 4D)                                              | `Log error`, `Log warn`, `Log info`, `Log debug`, `Log trace` |

Exemplo:

```4d
SET DATABASE PARAMETER (Diagnostic log recording; 1)
SET DATABASE PARAMETER (Diagnostic log level; Log trace)
```


## 4DSMTPLog.txt, 4DPOP3Log.txt, e 4DIMAPLog.txt

Esses históricos registram cada troca entre a aplicação 4D e o servidor de mail (SMTP, POP3, IMAP) que foram iniciados pelos comandos abaixo:

* SMTP - [SMTP New transporter](API/SMTPTransporterClass.md#smtp-new-transporter)
* POP3 - [POP3 New transporter](API/POP3TransporterClass.md#pop3-new-transporter)
* IMAP  - [IMAP New transporter](API/IMAPTransporterClass.md#imap-new-transporter)

Os arquivos de histórico podem ser produzidos em duas versões:

* uma versão comum:
  * chamada 4DSMTPLog.txt, 4DPOP3Log.txt, ou 4DIMAPLog.txt
  * sem anexos
  * usa um arquivo circular automático que é reciclado a cada 10MB
  * para depurações comuns

 Para começar esse histórico:

 ```4d
 SET DATABASE PARAMETER(SMTP Log;1) //start SMTP log 
 SET DATABASE PARAMETER(POP3 Log;1) //start POP3 log 
 SET DATABASE PARAMETER(IMAP Log;1) //start IMAP log
 ```

> 4D Server: Clique no botão **Start Request and Debug Logs** na página [Maintenance](https://doc.4d.com/4Dv18R5/4D/18-R5/Maintenance-Page.300-5149308.en.html) da janela de administração de 4D Server.

   A rota do histórico é retornada pelo comando `Get 4D file`.

* uma versão estendida:
  * attachment(s) included no automatic recycling
  * nome personalizado
  * guardado para propósitos específicos

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

| Coluna # | Descrição                                                    |
| -------- | ------------------------------------------------------------ |
| 1        | Número de operação único e sequencial da sessão de histórico |
| 2        | Data e hora em formato RFC3339 (yyyy-mm-ddThh:mm:ss.ms)      |
| 3        | ID de 4D Process                                             |
| 4        | ID de processo                                               |
| 5        | <ul><li>Informação de início de SMTP,POP3, ou sessão IMAP, incluindo nome de servidor host, número de porta TCP usada para conectar com servidor SMTP,POP3, ou IMAP e status de TLS, ou</li><li>troca de dados entre servidor e cliente, começando com "S <" (dados recebidos de servidor SMTP,POP3, ou IMAP) ou "C >" (dados enviados pelo cliente SMTP,POP3, ou IMAP client): lista de modo autenticação enviada pelo servidor e seleciona modo autenticação, qualquer erro relatado por servidor SMTP,POP3, ou IMAP, informação de cabeçalho do mail enviado (apenas na versão normal) e se o mail foi salvo no servidor, ou</li><li>Informação de fechamento de sessão de SMPT, POP3 ou IMAP.</li></ul>                                   |

## Pedidos ORDA

Os registos de pedidos ORDA podem registar cada pedido ORDA e a resposta do servidor. Estão disponíveis dois registos de pedidos ORDA:

- um registo de pedidos ORDA do lado do cliente, em formato .txt
- um registo de pedidos ORDA do lado do servidor, em formato .jsonl

### Do lado do cliente

O registo ORDA do lado do cliente regista cada pedido ORDA enviado a partir de uma máquina remota. Pode direcionar as informações de registo para a memória ou para um arquivo .txt no disco da máquina remota. O nome e rota desse arquivo pode ser escolhido.

Como iniciar esse log:

```4d
    //on a remote machine SET DATABASE PARAMETER(Client Log Recording;1)  
ds.startRequestLog(File("/PACKAGE/Logs/ordaLog.txt"))
    //can be also sent to memory SET DATABASE PARAMETER(Client Log Recording;0)  
```

:::note

O acionamento do lado do cliente [4DRequestsLog.txt](#4drequestslogtxt) utilizando `SET DATABASE PARAMETER` não é obrigatório. No entanto, é necessário se pretender registar o campo único `sequenceNumber` .

:::


Os campos abaixo são registrados para cada petição:

| Campo nome     | Descrição                                                    | Exemplo                                                 |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| sequenceNumber | Número de operação único e sequencial da sessão de histórico | 104                                                     |
| url            | Solicitar URL                                                | "rest/Persons(30001)"                                   |
| startTime      | Data e hora de início utilizando o formato ISO 8601          | "2019-05-28T08:25:12.346Z"                              |
| endTime        | Data e hora final usando formato ISO 8601                    | "2019-05-28T08:25:12.371Z"                              |
| duration       | Duração do processamento do cliente em milissegundos (ms)    | 25                                                      |
| response       | Objeto resposta servidor                                     | {"status":200,"body":{"__entityModel":"Persons",\[...] |

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

O registo ORDA do lado do servidor regista cada pedido ORDA processado pelo servidor, bem como a resposta do servidor (opcional). As informações de registo são guardadas num arquivo .jsonl no disco da máquina do servidor (por predefinição, *ordaRequests.jsonl*).

Como iniciar esse log:

```4d
    //on the server SET DATABASE PARAMETER(4D Server log recording;1)
ds.startRequestLog(File("/PACKAGE/Logs/ordaRequests.jsonl");srl log response without body)
    //srl... parameter is optional SET DATABASE PARAMETER(4D Server log recording;0)
```

:::note

O acionamento do servidor [4DRequestsLog.txt](#4drequestslogtxt) utilizando `SET DATABASE PARAMETER` não é obrigatório. No entanto, é necessário se pretender registar os campos únicos `sequenceNumber` e `duration` .

:::

Os campos abaixo são registrados para cada petição:

| Campo nome     | Descrição                                                                                                                | Exemplo                                                 |
| -------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- |
| sequenceNumber | Número de operação único e sequencial da sessão de histórico                                                             | 104                                                     |
| url            | Solicitar URL                                                                                                            | "rest/Persons(30001)"                                   |
| startTime      | Data e hora de início utilizando o formato ISO 8601                                                                      | "2019-05-28T08:25:12.346Z"                              |
| duration       | Duração do processamento do servidor em microssegundos (µ)                                                               | 2500                                                    |
| response       | Objeto de resposta do servidor, pode ser configurado em [`.startRequestLog()`](../API/DataStoreClass.md#startrequestlog) | {"status":200,"body":{"__entityModel":"Persons",\[...] |
| ipAddress      | Endereço IP do usuário                                                                                                   | "192.168.1.5"                                           |
| userName       | Nome do usuário 4D                                                                                                       | "henry"                                                 |
| systemUserName | Nome de login do usuário na máquina                                                                                      | "hsmith"                                                |
| machineName    | Nome da máquina do utilizador                                                                                            | "PC of Henry Smith"                                     |

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

É possível utilizar um arquivo de configuração de registo **** para gerir facilmente a gravação de registos num ambiente de produção. Este arquivo é pré-configurado pelo programador. Normalmente, pode ser enviado aos clientes para que estes apenas tenham de o selecionar ou copiar para uma pasta local. Uma vez ativado, o arquivo de configuração de registos desencadeia a gravação de registos específicos.

### Como activar o arquivo

Existem várias formas de ativar o arquivo de configuração do registo, dependendo da sua configuração:

- **Servidor 4D com interface**: pode abrir a página Manutenção e clicar no botão [Carregar arquivo de configuração dos registos](ServerWindow/maintenance.md#load-logs-configuration-file) , depois selecionar o arquivo. Neste caso, pode utilizar qualquer nome para o arquivo de configuração. É imediatamente ativado no servidor.
- **um projeto interpretado ou compilado**: o arquivo deve ter o nome `logConfig.json` e ser copiado para a pasta [Settings](../Project/architecture.md#settings-1) do projeto (situada ao mesmo nível que a pasta [`Project`](../Project/architecture.md#project-folder)). É ativado no arranque do projeto (apenas no servidor em cliente/servidor).
- **uma aplicação construída**: o arquivo deve ter o nome `logConfig.json` e ser copiado para a pasta seguinte:
    * Windows: `Users\[userName]\AppData\Roaming\[application]`
    * macOS: `/Users/[userName]/Library/ApplicationSupport/[application]`
- **todos os projetos com um 4D autônomo ou remoto**: o arquivo deve chamar-se `logConfig.json` e ser copiado para a pasta seguinte:
    * Windows: `Users\[userName]\AppData\Roaming\4D`
    * macOS: `/Users/[userName]/Library/ApplicationSupport/4D`
- **todos os projetos com 4D Server**: o arquivo deve ser nomeado `logConfig.json` e copiado para a seguinte pasta:
    * Windows: `Users\[userName]\AppData\Roaming\4D Server`
    * macOS: `/Users/[userName]/Library/ApplicationSupport/4D Server`

:::note

Se um ficheiro `logConfig.json` estiver instalado nas pastas Settings e AppData/Library, o arquivo da pasta Settings terá prioridade.

:::

### Descrição do ficheiro JSON

O arquivo de configuração do registo é um arquivo `.json` que deve estar em conformidade com o seguinte esquema json:

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
                    "description":
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
