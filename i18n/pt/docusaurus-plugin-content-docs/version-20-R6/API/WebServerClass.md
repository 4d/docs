---
id: WebServerClass
title: WebServer
---

The `WebServer` class API allows you to start and monitor a web server for the main (host) application as well as each hosted component (see the [Web Server object](WebServer/webServerObject.md) overview). Essa classe está disponível no "class store" de `4D`.

### Objeto Web Server

Os objetos servidor Web são instanciados com o comando [`WEB Server`](#web-server).

Eles oferecem as propriedades abaixo e funções:

### Resumo

|                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebServerClass.accessKeyDefined.Syntax -->](#accesskeydefined)<br/><!-- INCLUDE #WebServerClass.accessKeyDefined.Summary -->                               |
| [<!-- INCLUDE #WebServerClass.certificateFolder.Syntax -->](#certificatefolder)<br/><!-- INCLUDE #WebServerClass.certificateFolder.Summary -->                            |
| [<!-- INCLUDE #WebServerClass.characterSet.Syntax -->](#characterset)<br/><!-- INCLUDE #WebServerClass.characterSet.Summary -->                                           |
| [<!-- INCLUDE #WebServerClass.cipherSuite.Syntax -->](#ciphersuite)<br/><!-- INCLUDE #WebServerClass.cipherSuite.Summary -->                                              |
| [<!-- INCLUDE #WebServerClass.CORSEnabled.Syntax -->](#corsenabled)<br/><!-- INCLUDE #WebServerClass.CORSEnabled.Summary -->                                              |
| [<!-- INCLUDE #WebServerClass.CORSSettings.Syntax -->](#corssettings)<br/><!-- INCLUDE #WebServerClass.CORSSettings.Summary -->                                           |
| [<!-- INCLUDE #WebServerClass.debugLog.Syntax -->](#debuglog)<br/><!-- INCLUDE #WebServerClass.debugLog.Summary -->                                                       |
| [<!-- INCLUDE #WebServerClass.defaultHomepage.Syntax -->](#defaulthomepage)<br/><!-- INCLUDE #WebServerClass.defaultHomepage.Summary -->                                  |
| [<!-- INCLUDE #WebServerClass.HSTSEnabled.Syntax -->](#hstsenabled)<br/><!-- INCLUDE #WebServerClass.HSTSEnabled.Summary -->                                              |
| [<!-- INCLUDE #WebServerClass.HSTSMaxAge.Syntax -->](#hstsmaxage)<br/><!-- INCLUDE #WebServerClass.HSTSMaxAge.Summary -->                                                 |
| [<!-- INCLUDE #WebServerClass.HTTPCompressionLevel.Syntax -->](#httpcompressionlevel)<br/><!-- INCLUDE #WebServerClass.HTTPCompressionLevel.Summary -->                   |
| [<!-- INCLUDE #WebServerClass.HTTPCompressionThreshold.Syntax -->](#httpcompressionthreshold)<br/><!-- INCLUDE #WebServerClass.HTTPCompressionThreshold.Summary -->       |
| [<!-- INCLUDE #WebServerClass.HTTPEnabled.Syntax -->](#httpenabled)<br/><!-- INCLUDE #WebServerClass.HTTPEnabled.Summary -->                                              |
| [<!-- INCLUDE #WebServerClass.HTTPPort.Syntax -->](#httpport)<br/><!-- INCLUDE #WebServerClass.HTTPPort.Summary -->                                                       |
| [<!-- INCLUDE #WebServerClass.HTTPTrace.Syntax -->](#httptrace)<br/><!-- INCLUDE #WebServerClass.HTTPTrace.Summary -->                                                    |
| [<!-- INCLUDE #WebServerClass.HTTPSEnabled.Syntax -->](#httpsenabled)<br/><!-- INCLUDE #WebServerClass.HTTPSEnabled.Summary -->                                           |
| [<!-- INCLUDE #WebServerClass.HTTPSPort.Syntax -->](#httpsport)<br/><!-- INCLUDE #WebServerClass.HTTPSPort.Summary -->                                                    |
| [<!-- INCLUDE #WebServerClass.inactiveProcessTimeout.Syntax -->](#inactiveprocesstimeout)<br/><!-- INCLUDE #WebServerClass.inactiveProcessTimeout.Summary -->             |
| [<!-- INCLUDE #WebServerClass.inactiveSessionTimeout.Syntax -->](#inactivesessiontimeout)<br/><!-- INCLUDE #WebServerClass.inactiveSessionTimeout.Summary -->             |
| [<!-- INCLUDE #WebServerClass.IPAddressToListen.Syntax -->](#ipaddresstolisten)<br/><!-- INCLUDE #WebServerClass.IPAddressToListen.Summary -->                            |
| [<!-- INCLUDE #WebServerClass.isRunning.Syntax -->](#isrunning)<br/><!-- INCLUDE #WebServerClass.isRunning.Summary -->                                                    |
| [<!-- INCLUDE #WebServerClass.keepSession.Syntax -->](#keepsession)<br/><!-- INCLUDE #WebServerClass.keepSession.Summary -->                                              |
| [<!-- INCLUDE #WebServerClass.logRecording.Syntax -->](#logrecording)<br/><!-- INCLUDE #WebServerClass.logRecording.Summary -->                                           |
| [<!-- INCLUDE #WebServerClass.maxConcurrentProcesses.Syntax -->](#maxconcurrentprocesses)<br/><!-- INCLUDE #WebServerClass.maxConcurrentProcesses.Summary -->             |
| [<!-- INCLUDE #WebServerClass.maxRequestSize.Syntax -->](#maxrequestsize)<br/><!-- INCLUDE #WebServerClass.maxRequestSize.Summary -->                                     |
| [<!-- INCLUDE #WebServerClass.maxSessions.Syntax -->](#maxsessions)<br/><!-- INCLUDE #WebServerClass.maxSessions.Summary -->                                              |
| [<!-- INCLUDE #WebServerClass.minTLSVersion.Syntax -->](#mintlsversion)<br/><!-- INCLUDE #WebServerClass.minTLSVersion.Summary -->                                        |
| [<!-- INCLUDE #WebServerClass.name.Syntax -->](#name)<br/><!-- INCLUDE #WebServerClass.name.Summary -->                                                                   |
| [<!-- INCLUDE #WebServerClass.openSSLVersion.Syntax -->](#opensslversion)<br/><!-- INCLUDE #WebServerClass.openSSLVersion.Summary -->                                     |
| [<!-- INCLUDE #WebServerClass.perfectForwardSecrecy.Syntax -->](#perfectforwardsecrecy)<br/><!-- INCLUDE #WebServerClass.perfectForwardSecrecy.Summary -->                |
| [<!-- INCLUDE #WebServerClass.rootFolder.Syntax -->](#rootfolder)<br/><!-- INCLUDE #WebServerClass.rootFolder.Summary -->                                                 |
| [<!-- INCLUDE #WebServerClass.scalableSession.Syntax -->](#scalablesession)<br/><!-- INCLUDE #WebServerClass.scalableSession.Summary -->                                  |
| [<!-- INCLUDE #WebServerClass.sessionCookieDomain.Syntax -->](#sessioncookiedomain)<br/><!-- INCLUDE #WebServerClass.sessionCookieDomain.Summary -->                      |
| [<!-- INCLUDE #WebServerClass.IPAddressToListen.Syntax -->](#ipaddresstolisten)<br/><!-- INCLUDE #WebServerClass.IPAddressToListen.Summary -->                            |
| [<!-- INCLUDE #WebServerClass.sessionCookiePath.Syntax -->](#sessioncookiepath)<br/><!-- INCLUDE #WebServerClass.sessionCookiePath.Summary -->                            |
| [<!-- INCLUDE #WebServerClass.sessionCookieSameSite.Syntax -->](#sessioncookiesamesite)<br/><!-- INCLUDE #WebServerClass.sessionCookieSameSite.Summary -->                |
| [<!-- INCLUDE #WebServerClass.sessionIPAddressValidation.Syntax -->](#sessionipaddressvalidation)<br/><!-- INCLUDE #WebServerClass.sessionIPAddressValidation.Summary --> |
| [<!-- INCLUDE #WebServerClass.start().Syntax -->](#start)<br/><!-- INCLUDE #WebServerClass.start().Summary -->                                                            |
| [<!-- INCLUDE #WebServerClass.stop().Syntax -->](#stop)<br/><!-- INCLUDE #WebServerClass.stop().Summary -->                                                               |

## WEB Server

<details><summary>História</summary>

| Release | Mudanças                                            |
| ------- | --------------------------------------------------- |
| 18 R3   | Adicionado                                          |
| 19      | suporte para .sessionCookieSameSite |

</details>

<!-- REF #_command_.WEB Server.Syntax -->**WEB Server** : 4D.WebServer<br/>**WEB Server**( *option* : Integer ) : 4D.WebServer<!-- END REF -->

<!-- REF #_command_.WEB Server.Params -->

| Parâmetro  | Tipo                          |                             | Descrição                                                                                |
| ---------- | ----------------------------- | --------------------------- | ---------------------------------------------------------------------------------------- |
| option     | Integer                       | ->                          | Servidor Web a ser obtido (padrão se omitido = `Web server database`) |
| Resultados | 4D. WebServer | <- | Objeto Web Server                                                                        |

<!-- END REF -->

The `WEB Server` command <!-- REF #_command_.WEB Server.Summary -->returns the default Web server object, or the Web server object defined through the *option* parameter<!-- END REF -->.

By default, if the *option* parameter is omitted, the command returns a reference to the Web server of the database, i.e. the default Web server. To designate the Web server to return, you can pass one of the following constants in the *option* parameter:

| Parâmetros                                   | Valor | Comentário                                                                     |
| -------------------------------------------- | ----- | ------------------------------------------------------------------------------ |
| `Web server database`                        | 1     | Servidor Web de banco de dados atual (padrão caso omitido)  |
| Parâmetros                                   | 2     | Servidor Web do banco de dados de host de um componente                        |
| `Solicitação de recebimento do servidor web` | 3     | Servidor web que recebeu o pedido (servidor Web de destino) |

O objeto Servidor Web retornado contém os valores atuais das propriedades do Servidor Web.

#### Exemplo

Do seu componente, você quer saber se o servidor Web do banco de dados host está iniciado:

```4d
  // Método de um componente
 var $hostWS : 4D.WebServer
 $hostWS:=WEB Server(Web server host database)
 If($hostWS.isRunning)
    ...
 End if
```

## WEB Server list

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R3   | Adicionado |

</details>

<!-- REF #_command_.WEB Server list.Syntax -->**WEB Server list** : Collection<!-- END REF -->

<!-- REF #_command_.WEB Server list.Params -->

| Parâmetro  | Tipo       |                             | Descrição                                     |
| ---------- | ---------- | --------------------------- | --------------------------------------------- |
| Resultados | Collection | <- | Coleção de objetos do Servidor Web disponível |

<!-- END REF -->

The `WEB Server list` command <!-- REF #_command_.WEB Server list.Summary -->returns a collection of all Web server objects available in the 4D application<!-- END REF -->.

Uma aplicação 4D pode conter em qualquer lugar de um a vários servidores Web:

- um servidor Web para o banco de dados host (servidor Web padrão)
- um servidor web para cada componente.

All available Web servers are returned by the `WEB Server list` command, whether they are actually running or not.

> O objeto do servidor Web padrão é carregado automaticamente pelo 4D na inicialização. Parâmetros

You can use the [.name](#name) property of the Web server object to identify the project or component to which each Web server object in the list is attached.

#### Exemplo

Queremos saber quantos servidores rodando estão disponíveis:

```4d
 var $wSList : Collection
 var $vRun : Integer

 $wSList:=WEB Server list
 $vRun:=$wSList.countValues(True;"isRunning")
 ALERT(String($vRun)+" web server(s) running on "+String($wSList.length)+" available.")

```

## .accessKeyDefined

<!-- REF #WebServerClass.accessKeyDefined.Syntax -->**.accessKeyDefined** : Boolean<!-- END REF -->

A propriedade **.accessKeyDefined** contém <!-- REF #WebServerClass.accessKeyDefined.Summary -->true se uma chave de acesso estiver definida nas configurações do servidor Web<!-- END REF -->. Esta propriedade é usada pelo servidor web WebAdmin para validar a configuração de segurança da interface de administração.

<!-- REF WebServerClass.certificateFolder.Desc -->

## .certificateFolder

<!-- REF #WebServerClass.certificateFolder.Syntax -->**.certificateFolder** : Text<!-- END REF -->

Path of the <!-- REF #WebServerClass.certificateFolder.Summary -->folder where the certificate files are located<!-- END REF -->. O caminho está formatado no caminho completo POSIX usando sistemas de arquivos. Ao usar essa propriedade no parâmetro `settings` da função [`.start()`](#start), ela pode ser um objeto [`Folder`](FolderClass.md).

<!-- END REF -->

<!-- REF WebServerClass.characterSet.Desc -->

## .characterSet

<!-- REF #WebServerClass.characterSet.Syntax -->**.characterSet** : Number<br/>**.characterSet** : Text<!-- END REF -->

The <!-- REF #WebServerClass.characterSet.Summary -->character set that the 4D Web Server should use to communicate with browsers connecting to the application<!-- END REF -->. O valor padrão realmente depende da linguagem do SO. O valor padrão realmente depende da linguagem do SO. Aqui está a lista de identificadores correspondentes aos conjuntos de caracteres suportados pelo Servidor Web 4D:

- 4 = ISO-8859-1
- 12 = ISO-8859-9
- 13 = ISO-8859-10
- 17 = Shift-JIS
- 2024 = Windows-31J
- 2026 = Big5
- 38 = euc-kr
- 106 = UTF-8
- 2250 = Windows-1250
- 2251 = Windows-1251
- 2253 = Windows-1253
- 2255 = Windows-1255
- 2256 = Windows-1256

<!-- END REF -->

<!-- REF WebServerClass.cipherSuite.Desc -->

## .cipherSuite

<!-- REF #WebServerClass.cipherSuite.Syntax -->**.cipherSuite** : Text<!-- END REF -->

The <!-- REF #WebServerClass.cipherSuite.Summary -->cipher list used for the secure protocol<!-- END REF -->. Define a prioridade dos algoritmos de criptografia implementados pelo servidor web 4D. Pode ser uma sequência de frases separadas por dois pontos (por exemplo, "ECDHE-RSA-AES128-..."). Veja a [página ciphers](https://www.openssl.org/docs/manmaster/man1/ciphers.html) no site OpenSSL.

<!-- END REF -->

<!-- REF WebServerClass.CORSEnabled.Desc -->

## .CORSEnabled

<!-- REF #WebServerClass.CORSEnabled.Syntax -->**.CORSEnabled** : Boolean<!-- END REF -->

The <!-- REF #WebServerClass.CORSEnabled.Summary -->CORS (*Cross-origin resource sharing*) service status for the web server<!-- END REF -->. Por razões de segurança, solicitações de "cross-domain" são proibidas no nível do navegador por padrão. Por razões de segurança, solicitações de "cross-domain" são proibidas no nível do navegador por padrão. Quando desativado (False, padrão), todas as solicitações de cruzamento de sites enviadas com CORS são ignoradas. Quando habilitado (verdadeiro) e um domínio ou método não permitido envia uma solicitação de site cruzado, ele é rejeitado com uma resposta de erro "403 - proibido".

Padrão: Falso (desabilitado)

For more information about CORS, please refer to the [Cross-origin resource sharing page](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) on Wikipedia.

<!-- END REF -->

<!-- REF WebServerClass.CORSSettings.Desc -->

## .CORSSettings

<!-- REF #WebServerClass.CORSSettings.Syntax -->**.CORSSettings** : Collection<!-- END REF -->

Contains the <!-- REF #WebServerClass.CORSSettings.Summary -->list of allowed hosts and methods for the CORS service<!-- END REF --> (see [`CORSEnabled`](#corsenabled) property). Cada objeto deve conter uma propriedade **host** e, opcionalmente, uma propriedade **methods**:

- **host** (text, mandatory): Domain name or IP address from where external pages are allowed to send data requests to the Server via CORS. Vários atributos de domínio podem ser adicionados para criar uma lista branca. Vários atributos de domínio podem ser adicionados para criar uma lista branca. Várias sintaxes são suportadas:
  - 192.168.5.17:8081
  - 192.168.5.17
  - 192.168.\*
  - 192.168.\*:8081
  - <http://192.168.5.17:8081>
  - <http://\\\\\*.myDomain.com>
  - <http://myProject.myDomain.com>
  - \*.myDomain.com
  - myProject.myDomain.com
  - \*

- **methods** (texto, opcional): métodos HTTP aceito(s) para o host CORS correspondente. Separar cada método com um ";" (por exemplo: "post;get"). Separar cada método com um ";" (por exemplo: "post;get").

<!-- END REF -->

<!-- REF WebServerClass.debugLog.Desc -->

## .debugLog

<!-- REF #WebServerClass.debugLog.Syntax -->**.debugLog** : Number<!-- END REF -->

The <!-- REF #WebServerClass.debugLog.Summary -->status of the HTTP request log file<!-- END REF --> (HTTPDebugLog_nn.txt, stored in the "Logs" folder of the application -- nn is the file number).

- 0 = desactivado
- 1 = habilitado sem partes do corpo (o tamanho do corpo é fornecido neste caso)
- 3 = ativado com partes do corpo apenas em resposta
- 5 = ativado com partes do corpo apenas em resposta
- 7 = ativado com partes do corpo apenas em resposta

<!-- END REF -->

<!-- REF WebServerClass.defaultHomepage.Desc -->

## .defaultHomepage

<!-- REF #WebServerClass.defaultHomepage.Syntax -->**.defaultHomepage** : Text<!-- END REF -->

The <!-- REF #WebServerClass.defaultHomepage.Summary -->name of the default home page<!-- END REF --> or "" to not send the custom home page.

<!-- END REF -->

<!-- REF WebServerClass.HSTSEnabled.Desc -->

## .HSTSEnabled

<!-- REF #WebServerClass.HSTSEnabled.Syntax -->**.HSTSEnabled** : Boolean<!-- END REF -->

The <!-- REF #WebServerClass.HSTSEnabled.Summary -->HTTP Strict Transport Security (HSTS) status<!-- END REF -->. O HSTS permite que o servidor declare que os navegadores só devem interagir com ele através de conexões HTTPS seguras. Navegadores gravarão as informações de HSTS na primeira vez que receberem uma resposta do servidor web, então quaisquer futuras solicitações HTTP serão automaticamente transformadas em solicitações HTTPS. O HSTS permite que o servidor declare que os navegadores só devem interagir com ele através de conexões HTTPS seguras. A HSTS requer que HTTPS esteja ativado no servidor. HTTP deve também ser habilitado para permitir conexões iniciais de clientes.

<!-- END REF -->

<!-- REF WebServerClass.HSTSMaxAge.Desc -->

## .HSTSMaxAge

<!-- REF #WebServerClass.HSTSMaxAge.Syntax -->**.HSTSMaxAge** : Number<!-- END REF -->

The <!-- REF #WebServerClass.HSTSMaxAge.Summary -->maximum length of time (in seconds) that HSTS is active for each new client connection<!-- END REF -->. Esta informação é armazenada no lado do Cliente durante a duração especificada.

Valor padrão: 63072000 (2 anos).

<!-- END REF -->

<!-- REF WebServerClass.HTTPCompressionLevel.Desc -->

## .HTTPCompressionLevel

<!-- REF #WebServerClass.HTTPCompressionLevel.Syntax -->**.HTTPCompressionLevel** : Number<!-- END REF -->

The <!-- REF #WebServerClass.HTTPCompressionLevel.Summary -->compression level for all compressed HTTP exchanges for the 4D HTTP server (client requests or server replies)<!-- END REF -->. Este seletor permite otimizar trocas priorizando a velocidade de execução (menos compactação) ou a quantidade de compressão (menos velocidade)

Valores possíveis:

- 1 a 9 (onde 1 é a compressão mais rápida e 9 a mais alta).
- -1 = define um compromisso entre a velocidade e a taxa de compressão.

Padrão = 1 (compressão mais rápida).

<!-- END REF -->

<!-- REF WebServerClass.HTTPCompressionThreshold.Desc -->

## .HTTPCompressionThreshold

<!-- REF #WebServerClass.HTTPCompressionThreshold.Syntax -->**.HTTPCompressionThreshold** : Number<!-- END REF -->

The <!-- REF #WebServerClass.HTTPCompressionThreshold.Summary -->size threshold (bytes) for requests below which exchanges should not be compressed<!-- END REF -->. Essa configuração é útil para evitar perder o tempo da máquina ao comprimir pequenas trocas.

Limite de compressão padrão = 1024 bytes

<!-- END REF -->

<!-- REF WebServerClass.HTTPEnabled.Desc -->

## .HTTPEnabled

<!-- REF #WebServerClass.HTTPEnabled.Syntax -->**.HTTPEnabled** : Boolean<!-- END REF -->

Estado do protocolo <!-- REF #WebServerClass.HTTPEnabled.Summary -->HTTP<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.HTTPPort.Desc -->

## .HTTPPort

<!-- REF #WebServerClass.HTTPPort.Syntax -->**.HTTPPort** : Number<!-- END REF -->

The <!-- REF #WebServerClass.HTTPPort.Summary -->listening IP port number for HTTP<!-- END REF -->.

O padrão = 80

<!-- END REF -->

<!-- REF WebServerClass.HTTPTrace.Desc -->

## .HTTPTrace

<!-- REF #WebServerClass.HTTPTrace.Syntax -->**.HTTPTrace** : Boolean<!-- END REF -->

The <!-- REF #WebServerClass.HTTPTrace.Summary -->activation of `HTTP TRACE`<!-- END REF -->. For security reasons, by default the Web server rejects `HTTP TRACE` requests with an error 405. When enabled, the web server replies to `HTTP TRACE` requests with the request line, header, and body.

<!-- END REF -->

<!-- REF WebServerClass.HTTPSEnabled.Desc -->

## .HTTPSEnabled

<!-- REF #WebServerClass.HTTPSEnabled.Syntax -->**.HTTPSEnabled** : Boolean<!-- END REF -->

The <!-- REF #WebServerClass.HTTPSEnabled.Summary -->HTTPS protocol state<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.HTTPSPort.Desc -->

## .HTTPSPort

<!-- REF #WebServerClass.HTTPSPort.Syntax -->**.HTTPSPort** : Number<!-- END REF -->

The <!-- REF #WebServerClass.HTTPSPort.Summary -->listening IP port number for HTTPS<!-- END REF -->.

O padrão = 443

<!-- END REF -->

<!-- REF WebServerClass.inactiveProcessTimeout.Desc -->

## .inactiveProcessTimeout

<!-- REF #WebServerClass.inactiveProcessTimeout.Syntax -->**.inactiveProcessTimeout** : Number<!-- END REF -->

> This property is not returned in [scalable sessions mode](#scalablesession).

The <!-- REF #WebServerClass.inactiveProcessTimeout.Summary -->life duration (in minutes) of the inactive legacy session processes<!-- END REF -->. At the end of the timeout, the process is killed on the server, the `On Web Legacy Close Session` database method is called, then the legacy session context is destroyed.

Default = 480 minutos

<!-- END REF -->

<!-- REF WebServerClass.inactiveSessionTimeout.Desc -->

## .inactiveSessionTimeout

<!-- REF #WebServerClass.inactiveSessionTimeout.Syntax -->**.inactiveSessionTimeout** : Number<!-- END REF -->

> This property is not returned in [scalable sessions mode](#scalablesession).

The <!-- REF #WebServerClass.inactiveSessionTimeout.Summary -->life duration (in minutes) of inactive legacy sessions (duration set in cookie)<!-- END REF -->. No final do período, o cookie da sessão expira e não é mais enviada pelo cliente HTTP.

Default = 480 minutos

<!-- END REF -->

<!-- REF WebServerClass.IPAddressToListen.Desc -->

## .IPAddressToListen

<!-- REF #WebServerClass.IPAddressToListen.Syntax -->**.IPAddressToListen** : Text<!-- END REF -->

The <!-- REF #WebServerClass.IPAddressToListen.Summary -->IP address on which the 4D Web Server will receive HTTP requests<!-- END REF -->. Normalmente, nenhum endereço específico é definido. Os formatos string IPv6 e IPv4 são compatíveis

<!-- END REF -->

<!-- REF WebServerClass.isRunning.Desc -->

## .isRunning

<!-- REF #WebServerClass.isRunning.Syntax -->**.isRunning** : Boolean<!-- END REF -->

*Propriedade apenas leitura*

The <!-- REF #WebServerClass.isRunning.Summary -->web server running state<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.keepSession.Desc -->

## .keepSession

<!-- REF #WebServerClass.keepSession.Syntax -->**.keepSession** : Boolean<!-- END REF -->

Contains <!-- REF #WebServerClass.keepSession.Summary -->`True` if legacy sessions are enabled in the web server, `False` otherwise<!-- END REF -->.

##### Veja também

[.scalableSession](#scalablesession)

<!-- END REF -->

<!-- REF WebServerClass.logRecording.Desc -->

## .logRecording

<!-- REF #WebServerClass.logRecording.Syntax -->**.logRecording** : Number<!-- END REF -->

The <!-- REF #WebServerClass.logRecording.Summary -->log requests (logweb.txt) recording value<!-- END REF -->.

- 0 = Não registrar (padrão)
- 1 = Guardar no formato CLF
- 2 = Guardar no formato DLF
- 3 = Guardar no formato ELF
- 4 = Guardar no formato WLF

<!-- END REF -->

<!-- REF WebServerClass.maxConcurrentProcesses.Desc -->

## .maxConcurrentProcesses

<!-- REF #WebServerClass.maxConcurrentProcesses.Syntax -->**.maxConcurrentProcesses** : Number<!-- END REF -->

The <!-- REF #WebServerClass.maxConcurrentProcesses.Summary -->maximum number of concurrent web processes supported by the web server<!-- END REF -->. Quando este número (menos um) é alcançado, 4D não cria outro processos e retorna o status HTTP 503 - Serviço indisponível para novas petições.

Valores possíveis: 10 - 32000

Normal = 100

<!-- END REF -->

<!-- REF WebServerClass.maxRequestSize.Desc -->

## .maxRequestSize

<!-- REF #WebServerClass.maxRequestSize.Syntax -->**.maxRequestSize** : Number<!-- END REF -->

Contains the <!-- REF #WebServerClass.maxRequestSize.Summary -->maximum size (in bytes) of incoming HTTP requests (POST) that the web server is allowed to process<!-- END REF -->. Passar o valor máximo (2147483647) significa na prática que não é estabelecido um limite. Este limite é utilizado para evitar a saturação do servidor web devido a pedidos recebidos demasiado grandes. Se um pedido atingir este limite, o servidor web rejeita-o.

Valores possíveis: 500000 - 2147483647

<!-- END REF -->

<!-- REF WebServerClass.maxSessions.Desc -->

## .maxSessions

<!-- REF #WebServerClass.maxSessions.Syntax -->**.maxSessions** : Number<!-- END REF -->

> This property is not returned in [scalable sessions mode](#scalablesession).

Contains the <!-- REF #WebServerClass.maxSessions.Summary -->maximum number of simultaneous legacy sessions<!-- END REF -->. When you reach the limit, the oldest legacy session is closed (and `On Web Legacy Close Session` database method is called) if the web server needs to create a new one. The number of simultaneous legacy sessions cannot exceed the total number of web processes (`maxConcurrentProcesses` property, 100 by default)

<!-- END REF -->

<!-- REF WebServerClass.minTLSVersion.Desc -->

## .minTLSVersion

<!-- REF #WebServerClass.minTLSVersion.Syntax -->**.minTLSVersion** : Number<!-- END REF -->

The <!-- REF #WebServerClass.minTLSVersion.Summary -->minimum TLS version accepted for connections<!-- END REF -->. As tentativas de ligação de clientes que suportam apenas versões abaixo do mínimo serão rejeitadas.

Valores possíveis:

- 1 = TLSv1_0
- 2 = TLSv1_1
- 3 = TLSv1_2 (padrão)
- 4 = TLSv1_3

Se modificado, o servidor deve ser reiniciado para utilizar o novo valor.

<!-- END REF -->

<!-- REF WebServerClass.name.Desc -->

## .name

<!-- REF #WebServerClass.name.Syntax -->**.name** : Text<!-- END REF -->

*Propriedade apenas leitura*

The <!-- REF #WebServerClass.name.Summary -->name of the web server application<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.openSSLVersion.Desc -->

## .openSSLVersion

<!-- REF #WebServerClass.openSSLVersion.Syntax -->**.openSSLVersion** : Text<!-- END REF -->

*Propriedade apenas leitura*

The <!-- REF #WebServerClass.openSSLVersion.Summary -->version of the OpenSSL library used<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.perfectForwardSecrecy.Desc -->

## .perfectForwardSecrecy

<!-- REF #WebServerClass.perfectForwardSecrecy.Syntax -->**.perfectForwardSecrecy** : Boolean<!-- END REF -->

*Propriedade apenas leitura*

The <!-- REF #WebServerClass.perfectForwardSecrecy.Summary -->PFS availability on the server<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.rootFolder.Desc -->

## .rootFolder

<!-- REF #WebServerClass.rootFolder.Syntax -->**.rootFolder** : Text<!-- END REF -->

The <!-- REF #WebServerClass.rootFolder.Summary -->path of web server root folder<!-- END REF -->. O caminho está formatado no caminho completo POSIX usando sistemas de arquivos. When using this property in the `settings` parameter, it can be a `Folder` object.

<!-- END REF -->

<!-- REF WebServerClass.scalableSession.Desc -->

## .scalableSession

<!-- REF #WebServerClass.scalableSession.Syntax -->**.scalableSession** : Boolean<!-- END REF -->

Contains <!-- REF #WebServerClass.scalableSession.Summary -->`True` if scalable sessions are used in the web server, and `False` otherwise<!-- END REF -->.

##### Veja também

[.keepSession](#keepsession)

<!-- END REF -->

<!-- REF WebServerClass.sessionCookieDomain.Desc -->

## .sessionCookieDomain

<!-- REF #WebServerClass.sessionCookieDomain.Syntax -->**.sessionCookieDomain** : Text<!-- END REF -->

The <!-- REF #WebServerClass.sessionCookieDomain.Summary -->"domain" field of the session cookie<!-- END REF -->. Utilizado para controlar o alcance dos cookies da sessão. Se definir, por exemplo, o valor "/\*.4d.fr" para este selector, o cliente só enviará um cookie quando o pedido for dirigido ao domínio ".4d.fr", o que exclui os servidores que hospedam dados estáticos externos.

<!-- END REF -->

<!-- REF WebServerClass.sessionCookieName.Desc -->

## .sessionCookieName

<!-- REF #WebServerClass.sessionCookieName.Syntax -->**.sessionCookieName** : Text<!-- END REF -->

The <!-- REF #WebServerClass.sessionCookieName.Summary -->name of the cookie used for storing the session ID<!-- END REF -->.

*Propriedade apenas leitura*

<!-- END REF -->

<!-- REF WebServerClass.sessionCookiePath.Desc -->

## .sessionCookiePath

<!-- REF #WebServerClass.sessionCookiePath.Syntax -->**.sessionCookiePath** : Text<!-- END REF -->

The <!-- REF #WebServerClass.sessionCookiePath.Summary -->"path" field of the session cookie<!-- END REF -->. Utilizado para controlar o alcance dos cookies da sessão. Se definir, por exemplo, o valor "/4DACTION" para este selector, o cliente só enviará um cookie para pedidos dinâmicos que comecem por 4DACTION, e não para imagens, páginas estáticas, etc.

<!-- END REF -->

<!-- REF WebServerClass.sessionCookieSameSite.Desc -->

## .sessionCookieSameSite

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19      | Adicionado |

</details>

<!-- REF #WebServerClass.sessionCookieSameSite.Syntax -->**.sessionCookieSameSite** : Text<!-- END REF -->

The <!-- REF #WebServerClass.sessionCookieSameSite.Summary -->"SameSite" session cookie value<!-- END REF -->. Possíveis valores (usando constantes):

| Parâmetros          | Valor    | Descrição                                                                                                                                                                                   |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Web SameSite Strict | "Strict" | *Valor por defeito* - Os cookies só são enviados num contexto de primeira parte                                                                                                             |
| Web SameSite Lax    | "Lax"    | Os cookies também são enviados em pedidos cruzados mas apenas quando um utilizador está a navegar para o sítio de origem (isto é, quando segue um link). |
| Web SameSite None   | "None"   | Os cookies são enviados em todos os contextos, ou seja, em resposta a pedidos tanto de primeira parte como de origem cruzada.                                               |

See the [Session Cookie SameSite](WebServer/webServerConfig.md#session-cookie-samesite) description for detailed information.

<!-- END REF -->

<!-- REF WebServerClass.sessionIPAddressValidation.Desc -->

## .sessionIPAddressValidation

<!-- REF #WebServerClass.sessionIPAddressValidation.Syntax -->**.sessionIPAddressValidation** : Boolean<!-- END REF -->

> This property is not used in [scalable sessions mode](#scalablesession) (there is no IP address validation).

The <!-- REF #WebServerClass.sessionIPAddressValidation.Summary -->IP address validation for session cookies<!-- END REF -->. Por razões de segurança, por defeito o servidor web verifica o endereço IP de cada pedido contendo um cookie de sessão e rejeita-o se este endereço não corresponder ao endereço IP utilizado para criar o cookie. Em algumas aplicações específicas, poderá querer desactivar esta validação e aceitar cookies de sessão, mesmo quando os seus endereços IP não correspondem. Por exemplo, quando os dispositivos móveis mudam entre redes WiFi e 3G/4G, o seu endereço IP muda. Neste caso, pode permitir que os clientes possam continuar a utilizar as suas sessões web mesmo quando os endereços IP mudam (esta configuração reduz o nível de segurança da sua aplicação).

<!-- END REF -->

<!-- REF WebServerClass.start().Desc -->

## .start()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R3   | Adicionado |

</details>

<!-- REF #WebServerClass.start().Syntax -->**.start**() : Object<br/>**.start**( *settings* : Object ) : Object<!-- END REF -->

<!-- REF #WebServerClass.start().Params -->

| Parâmetro  | Tipo   |                             | Descrição                                           |
| ---------- | ------ | --------------------------- | --------------------------------------------------- |
| settings   | Object | ->                          | Configurações do servidor Web a definir no arranque |
| Resultados | Object | <- | Estado de arranque do servidor web                  |

<!-- END REF -->

The `.start()` function <!-- REF #WebServerClass.start().Summary -->starts the web server on which it is applied<!-- END REF -->, using properties set in the optional *settings* object parameter.

The web server starts with default settings defined in the settings file of the project or (host database only) using the `WEB SET OPTION` command. However, using the *settings* parameter, you can define customized properties for the web server session.

All settings of [Web Server objects](#web-server-object) can be customized, except read-only properties ([.isRunning](#isrunning), [.name](#name), [.openSSLVersion](#opensslversion), [.perfectForwardSecrecy](#perfectforwardsecrecy), and [.sessionCookieName(#sessioncookiename)]).

As configurações de sessão personalizadas serão redefinidas quando a função [`.stop()`](#stop) for chamada.

#### Objeto devolvido

A função devolve um objecto que descreve o estado de lançamento do servidor Web. Este objeto pode conter as seguintes propriedades:

| Propriedade |                                                                                             | Tipo       | Descrição                                                                                   |
| ----------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------- |
| success     |                                                                                             | Parâmetros | Verdadeiro se o servidor web foi correctamente iniciado, Falso caso contrário               |
| errors      |                                                                                             | Collection | pilha de erros 4D (não devolvidos se o servidor web começou com sucesso) |
|             | \[].errCode            | Number     | Código de erro 4D                                                                           |
|             | \[].message            | Text       | Descrição do erro 4D                                                                        |
|             | \[].componentSignature | Text       | Assinatura da componente interna que devolveu o erro                                        |

> Se o servidor Web já tiver sido lançado, é devolvido um erro.

#### Exemplo

```4d
 var $settings;$result : Object
 var $webServer : 4D.WebServer

 $settings:=New object("HTTPPort";8080;"defaultHomepage";"myAdminHomepage.html")

 $webServer:=WEB Server
 $result:=$webServer.start($settings)
 If($result.success)
  //...
 End if
```

<!-- END REF -->

<!-- REF WebServerClass.stop().Desc -->

## .stop()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R3   | Adicionado |

</details>

<!-- REF #WebServerClass.stop().Syntax -->**.stop()**<!-- END REF -->

<!-- REF #WebServerClass.stop().Params -->

| Parâmetro | Tipo |   | Descrição                  |
| --------- | ---- | - | -------------------------- |
|           |      |   | Não exige nenhum parâmetro |

<!-- END REF -->

The `.stop()` function <!-- REF #WebServerClass.stop().Summary -->stops the web server on which it is applied<!-- END REF -->.

Se o servidor web foi iniciado, todas as ligações e processos web são fechados, uma vez terminados os pedidos actualmente tratados. Se o servidor web não foi iniciado, o método não faz nada.

> This function resets the customized web settings defined for the session using the *settings* parameter of the [`.start()`](#start) function, if any.

#### Exemplo

Para parar o servidor Web da base de dados:

```4d
 var $webServer : 4D.WebServer

 $webServer:=WEB Server(Web server database)
 $webServer.stop()
```

<!-- END REF -->
