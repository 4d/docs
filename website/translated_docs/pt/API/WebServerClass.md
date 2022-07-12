---
id: WebServerClass
title: WebServer
---


The `WebServer` class API allows you to start and monitor a web server for the main (host) application as well as each hosted component (see the [Web Server object](WebServer/webServerObject.md) overview). This class is available from the `4D` class store.



### Web Server object

Web server objects are instantiated with the [`WEB Server`](#web-server) command.

They provide the following properties and functions:


### Resumo
|                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #WebServerClass.accessKeyDefined.Syntax -->](#accesskeydefined)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.accessKeyDefined.Summary -->|
| [<!-- INCLUDE #WebServerClass.certificateFolder.Syntax -->](#certificatefolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.certificateFolder.Summary -->|
| [<!-- INCLUDE #WebServerClass.characterSet.Syntax -->](#characterset)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.characterSet.Summary -->|
| [<!-- INCLUDE #WebServerClass.cipherSuite.Syntax -->](#ciphersuite)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.cipherSuite.Summary -->|
| [<!-- INCLUDE #WebServerClass.CORSEnabled.Syntax -->](#corsenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.CORSEnabled.Summary -->|
| [<!-- INCLUDE #WebServerClass.CORSSettings.Syntax -->](#corssettings)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.CORSSettings.Summary --> |
| [<!-- INCLUDE #WebServerClass.debugLog.Syntax -->](#debuglog)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.debugLog.Summary -->|
| [<!-- INCLUDE #WebServerClass.defaultHomepage.Syntax -->](#defaulthomepage)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.defaultHomepage.Summary -->|
| [<!-- INCLUDE #WebServerClass.HSTSEnabled.Syntax -->](#hstsenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HSTSEnabled.Summary --> |
| [<!-- INCLUDE #WebServerClass.HSTSMaxAge.Syntax -->](#hstsmaxage)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HSTSMaxAge.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPCompressionLevel.Syntax -->](#httpcompressionlevel)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPCompressionLevel.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPCompressionThreshold.Syntax -->](#httpcompressionthreshold)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPCompressionThreshold.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPEnabled.Syntax -->](#httpenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPEnabled.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPPort.Syntax -->](#httpport)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPPort.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPTrace.Syntax -->](#httptrace)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPTrace.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPSEnabled.Syntax -->](#httpsenabled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPSEnabled.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPSPort.Syntax -->](#httpsport)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPSPort.Summary -->|
| [<!-- INCLUDE #WebServerClass.inactiveProcessTimeout.Syntax -->](#inactiveprocesstimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.inactiveProcessTimeout.Summary -->|
| [<!-- INCLUDE #WebServerClass.inactiveSessionTimeout.Syntax -->](#inactivesessiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.inactiveSessionTimeout.Summary -->|
| [<!-- INCLUDE #WebServerClass.IPAddressToListen.Syntax -->](#ipaddresstolisten)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.IPAddressToListen.Summary -->|
| [<!-- INCLUDE #WebServerClass.isRunning.Syntax -->](#isrunning)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.isRunning.Summary -->|
| [<!-- INCLUDE #WebServerClass.keepSession.Syntax -->](#keepsession)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.keepSession.Summary -->|
| [<!-- INCLUDE #WebServerClass.logRecording.Syntax -->](#logrecording)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.logRecording.Summary -->|
| [<!-- INCLUDE #WebServerClass.maxConcurrentProcesses.Syntax -->](#maxconcurrentprocesses)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.maxConcurrentProcesses.Summary -->|
| [<!-- INCLUDE #WebServerClass.maxRequestSize.Syntax -->](#maxrequestsize)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.maxRequestSize.Summary -->|
| [<!-- INCLUDE #WebServerClass.maxSessions.Syntax -->](#maxsessions)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.maxSessions.Summary -->|
| [<!-- INCLUDE #WebServerClass.minTLSVersion.Syntax -->](#mintlsversion)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.minTLSVersion.Summary -->|
| [<!-- INCLUDE #WebServerClass.name.Syntax -->](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.name.Summary -->|
| [<!-- INCLUDE #WebServerClass.openSSLVersion.Syntax -->](#opensslversion)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.openSSLVersion.Summary -->|
| [<!-- INCLUDE #WebServerClass.perfectForwardSecrecy.Syntax -->](#perfectforwardsecrecy)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.perfectForwardSecrecy.Summary -->|
| [<!-- INCLUDE #WebServerClass.rootFolder.Syntax -->](#rootfolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.rootFolder.Summary -->|
| [<!-- INCLUDE #WebServerClass.scalableSession.Syntax -->](#scalablesession)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.scalableSession.Summary -->|


[<!-- INCLUDE #WebServerClass.sessionCookieDomain.Syntax -->](#sessioncookiedomain)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionCookieDomain.Summary -->| |[<!-- INCLUDE #WebServerClass.sessionCookieName.Syntax -->](#sessioncookiename)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionCookieName.Summary -->| |[<!-- INCLUDE #WebServerClass.sessionCookiePath.Syntax -->](#sessioncookiepath)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionCookiePath.Summary -->| |[<!-- INCLUDE #WebServerClass.sessionCookieSameSite.Syntax -->](#sessioncookiesamesite)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionCookieSameSite.Summary -->| |[<!-- INCLUDE #WebServerClass.sessionIPAddressValidation.Syntax -->](#sessionipaddressvalidation)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionIPAddressValidation.Summary -->| |[<!-- INCLUDE #WebServerClass.start().Syntax -->](#start)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.start().Summary -->| |[<!-- INCLUDE #WebServerClass.stop().Syntax -->](#stop)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.stop().Summary -->|



## WEB Server

<details><summary>Histórico</summary>
| Versão | Mudanças                            |
| ------ | ----------------------------------- |
| v18 R3 | Adicionado                          |
| v19    | suporte para .sessionCookieSameSite |

</details>

<!-- REF #_command_.WEB Server.Syntax -->
**WEB Server** : 4D. WebServer<br>**WEB Server**( *option* : Integer ) : 4D. WebServer<!-- END REF -->


<!-- REF #_command_.WEB Server.Params -->

| Parameter | Type          |    | Descrição                                                      |
| --------- | ------------- | -- | -------------------------------------------------------------- |
| option    | Integer       | -> | Web server to get (default if omitted = `Web server database`) |
| Resultado | 4D. WebServer | <- | Web server object                                              |

<!-- END REF -->

A função `.start()`<!-- REF #WebServerClass.start().Summary -->inicia o servidor web sobre o que se aplica<!-- END REF -->, utilizando as propriedades estabelecidas no parâmetro opcional do objeto *settings*.

Por padrão, se o parâmetro *opção* for omitido, o comando retorna uma referência ao servidor Web do banco de dados, i. . o servidor web padrão. Para designar o servidor da Web para retornar, você pode passar uma das seguintes constantes no parâmetro de *opção*:

| Constante                      | Value | Comentário                                               |
| ------------------------------ | ----- | -------------------------------------------------------- |
| `Web server database`          | 1     | Current database Web server (default if omitted)         |
| `Web server host database`     | 2     | Web server of the host database of a component           |
| `Web server receiving request` | 3     | Web server that received the request (target Web server) |

O objeto Servidor Web retornado contém os valores atuais das propriedades do Servidor Web.

#### Exemplo

Do seu componente, você quer saber se o servidor Web do banco de dados host está iniciado:

```4d
  // Method of a component
 var $hostWS : 4D. WebServer
 $hostWS:=WEB Server(Web server host database)
 If($hostWS.isRunning)
    ...
 End if
```

## WEB Server list

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R3 | Adicionado |
</details>

<!-- REF #_command_.WEB Server list.Syntax -->
**WEB Server list** : Collection<!-- END REF -->


<!-- REF #_command_.WEB Server list.Params -->

| Parameter | Type    |    | Descrição                                      |
| --------- | ------- | -- | ---------------------------------------------- |
| Resultado | Coleção | <- | Collection of the available Web server objects |

<!-- END REF -->

O comando `WEB Server list` <!-- REF #_command_.WEB Server list.Summary -->retorna uma coleção de todos os objetos Web server disponíveis nas aplicações 4D<!-- END REF -->.

Uma aplicação 4D pode conter em qualquer lugar de um a vários servidores Web:

- one Web server for the host database (default Web server)
- one Web server for each component.

Todos os servidores Web disponíveis são retornados pelo comando `WEB Server list` , quer estejam realmente executando ou não.

> The default Web server object is automatically loaded by 4D at startup. On the other hand, each component Web server that you want to use must be instantiated using the [`WEB Server`](#web-server) command.

Você pode usar o [. ame](#name) propriedade do objeto do servidor Web para identificar o projeto ou componente ao qual cada objeto do servidor Web está anexado na lista.


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


<!-- REF #WebServerClass.accessKeyDefined.Syntax -->
**.accessKeyDefined** : Boolean<!-- END REF -->


A propriedade **.accessKeyDefined** contém<!-- REF #WebServerClass.accessKeyDefined. Summary -->true se uma chave de acesso for definida nas configurações do web server<!-- END REF -->. Esta propriedade é usada pelo servidor web WebAdmin para validar a configuração de segurança da interface de administração.


<!-- REF WebServerClass.certificateFolder.Desc -->

## .certificateFolder



<!-- REF #WebServerClass.certificateFolder.Syntax -->
**.certificateFolder** : Text<!-- END REF -->


Rota de<!-- REF #WebServerClass.certificateFolder. Summary -->pasta onde está o certificado de arquivos<!-- END REF -->. O caminho está formatado no caminho completo POSIX usando sistemas de arquivos. Ao usar essa propriedade no parâmetro `configurações` do [`. tart()`](#start) função, pode ser um [`Pasta` objeto](FolderClass.md).

<!-- END REF -->


<!-- REF WebServerClass.characterSet.Desc -->

## .characterSet


<!-- REF #WebServerClass.characterSet.Syntax -->
**.characterSet** : Number<br>**.characterSet** : Text<!-- END REF -->


O <!-- REF #WebServerClass.characterSet.Summary -->conjunto de caracteres que o Servidor Web 4D deve usar para se comunicar com navegadores conectados ao aplicativo<!-- FIM REF -->. The default value actually depends on the language of the OS. Pode ser um inteiro MIBEnum ou uma string de nome, identificadores [definidos por IANA](http://www.iana.org/assignments/character-sets/character-sets.xhtml). Aqui está a lista de identificadores correspondentes aos conjuntos de caracteres suportados pelo Servidor Web 4D:

*   4 = ISO-8859-1
*   12 = ISO-8859-9
*   13 = ISO-8859-10
*   17 = Shift-JIS
*   2024 = Windows-31J
*   2026 = Big5
*   38 = euc-kr
*   106 = UTF-8
*   2250 = Windows-1250
*   2251 = Windows-1251
*   2253 = Windows-1253
*   2255 = Windows-1255
*   2256 = Windows-1256

<!-- END REF -->


<!-- REF WebServerClass.cipherSuite.Desc -->

## .cipherSuite


<!-- REF #WebServerClass.cipherSuite.Syntax -->
**.cipherSuite** : Text<!-- END REF -->


A lista de cifrado <!-- REF #WebServerClass.cipherSuite.Summary -->utilizada para o protocolo seguro<!-- END REF -->. Define a prioridade dos algoritmos de criptografia implementados pelo servidor web 4D. Can be a sequence of strings separated by colons (for example "ECDHE-RSA-AES128-..."). See the [ciphers page](https://www.openssl.org/docs/manmaster/man1/ciphers.html) on the OpenSSL site.

<!-- END REF -->



<!-- REF WebServerClass.CORSEnabled.Desc -->

## .CORSEnabled

<!-- REF #WebServerClass.CORSEnabled.Syntax -->
**.CORSEnabled** : Boolean<!-- END REF -->


O <!-- REF #WebServerClass.CORSEnabled.Summary -->CORS (*cross-origin resource sharing*) status do serviço para o servidor<!-- FIM REF -->. Por razões de segurança, solicitações de "cross-domain" são proibidas no nível do navegador por padrão. Quando ativado (True), chamadas XHR (por exemplo, Solicitações REST) de páginas da Web fora do domínio podem ser permitidas na sua aplicação (você precisa definir a lista de endereços permitidos na lista de domínio CORS, veja `CORSSettings` abaixo). Quando desativado (False, padrão), todas as solicitações de cruzamento de sites enviadas com CORS são ignoradas. Quando habilitado (verdadeiro) e um domínio ou método não permitido envia uma solicitação de site cruzado, ele é rejeitado com uma resposta de erro "403 - proibido".

Padrão: Falso (desabilitado)

Para obter mais informações sobre o CORS, consulte a [página de compartilhamento de recursos entre origens](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) na Wikipédia.

<!-- END REF -->


<!-- REF WebServerClass.CORSSettings.Desc -->

## .CORSSettings


<!-- REF #WebServerClass.CORSSettings.Syntax -->
**.CORSSettings** : Collection<!-- END REF -->


Uma <!-- REF #WebServerClass.CORSSettings.Summary -->lista de hosts e métodos permitidos para o serviço CORS<!-- END REF --> (veja [`CORSenabled`](#corsenabled) propriedade). Cada objeto deve conter uma propriedade **host** e, opcionalmente, uma propriedade **métodos**:

*   **host** (text, mandatory): Domain name or IP address from where external pages are allowed to send data requests to the Server via CORS. Multiple domain attributes can be added to create a white list. If *host* is not present or empty, the object is ignored. Several syntaxes are supported:
    -   192.168.5.17:8081
    -   192.168.5.17
    -   192.168.*
    -   192.168.*:8081
    -   http://192.168.5.17:8081
    -   http://*.myDomain.com
    -   http://myProject.myDomain.com
    -   *.myDomain.com
    -   myProject.myDomain.com
    -   \*

*   **methods** (text, optional): Accepted HTTP method(s) for the corresponding CORS host. Separate each method with a ";" (e,g,: "post;get"). If *methods* is empty, null, or undefined, all methods are enabled.

<!-- END REF -->


<!-- REF WebServerClass.debugLog.Desc -->

## .debugLog


<!-- REF #WebServerClass.debugLog.Syntax -->
**.debugLog** : Number<!-- END REF -->


O <!-- REF #WebServerClass.debugLog.Summary -->status do arquivo de log de requisições HTTP<!-- END REF --> (HTTPDebugLog_nn. xt, armazenado na pasta "Logs" da aplicação -- nn é o número do arquivo).

*   0 = disabled
*   1 = enabled without body parts (body size is provided in this case)
*   3 = enabled with body parts in response only
*   5 = enabled with body parts in request only
*   7 = enabled with body parts in response and request

<!-- END REF -->


<!-- REF WebServerClass.defaultHomepage.Desc -->

## .defaultHomepage


<!-- REF #WebServerClass.defaultHomepage.Syntax -->
**.defaultHomepage** : Text<!-- END REF -->


O <!-- REF #WebServerClass.defaultHomepage.Summary -->nome da página inicial padrão<!-- END REF --> ou "" para não enviar a página inicial personalizada.

<!-- END REF -->


<!-- REF WebServerClass.HSTSEnabled.Desc -->

## .HSTSEnabled

<!-- REF #WebServerClass.HSTSEnabled.Syntax -->
**.HSTSEnabled** : Boolean<!-- END REF -->


<!-- REF #WebServerClass.HSTSEnabled. Summary -->estado HTTP Strict Transport Security (HSTS)<!-- END REF -->. O HSTS permite que o servidor declare que os navegadores só devem interagir com ele através de conexões HTTPS seguras. Navegadores gravarão as informações de HSTS na primeira vez que receberem uma resposta do servidor web, então quaisquer futuras solicitações HTTP serão automaticamente transformadas em solicitações HTTPS. O tempo que essas informações são armazenadas pelo navegador é especificado na propriedade `HSTSMaxAge`. A HSTS requer que HTTPS esteja ativado no servidor. HTTP deve também ser habilitado para permitir conexões iniciais de clientes.

<!-- END REF -->


<!-- REF WebServerClass.HSTSMaxAge.Desc -->

## .HSTSMaxAge

<!-- REF #WebServerClass.HSTSMaxAge.Syntax -->
**.HSTSMaxAge** : Number<!-- END REF -->


O <!-- REF #WebServerClass.HSTSMaxAge.Summary -->tempo máximo (em segundos) que HSTS está ativo para cada nova conexão de cliente<!-- END REF -->. Esta informação é armazenada no lado do Cliente durante a duração especificada.

Valor padrão: 63072000 (2 anos).

<!-- END REF -->


<!-- REF WebServerClass.HTTPCompressionLevel.Desc -->

## .HTTPCompressionLevel

<!-- REF #WebServerClass.HTTPCompressionLevel.Syntax -->
**.HTTPCompressionLevel** : Number<!-- END REF -->


O <!-- REF #WebServerClass.HTTPCompressionLevel.Summary -->nivel de compressão para todos os intercambios HTTP comprimidos para o servidor HTTP 4D (petições do cliente ou respostas do servidor)<!-- END REF -->. Este seletor permite otimizar trocas priorizando a velocidade de execução (menos compactação) ou a quantidade de compressão (menos velocidade)

Possible values:

*   1 to 9 (where 1 is the fastest compression and 9 the highest).
*   -1 = set a compromise between speed and rate of compression.

Padrão = 1 (compressão mais rápida).

<!-- END REF -->


<!-- REF WebServerClass.HTTPCompressionThreshold.Desc -->

## .HTTPCompressionThreshold

<!-- REF #WebServerClass.HTTPCompressionThreshold.Syntax -->
**.HTTPCompressionThreshold** : Number<!-- END REF -->


O <!-- REF #WebServerClass.HTTPCompressionThreshold.Summary -->tamanho limite (bytes) para solicitações abaixo das quais as trocas não devem ser compactadas<!-- END REF -->. Essa configuração é útil para evitar perder o tempo da máquina ao comprimir pequenas trocas.

Limite de compressão padrão = 1024 bytes

<!-- END REF -->


<!-- REF WebServerClass.HTTPEnabled.Desc -->

## .HTTPEnabled


<!-- REF #WebServerClass.HTTPEnabled.Syntax -->
**.HTTPEnabled** : Boolean<!-- END REF -->


The<!-- REF #WebServerClass.HTTPEnabled. Summary -->HTTP protocol state<!-- END REF -->.

<!-- END REF -->



<!-- REF WebServerClass.HTTPPort.Desc -->

## .HTTPPort


<!-- REF #WebServerClass.HTTPPort.Syntax -->
**.HTTPPort** : Number<!-- END REF -->


The<!-- REF #WebServerClass.HTTPPort. Summary -->listening IP port number for HTTP<!-- END REF -->.

Default = 80

<!-- END REF -->


<!-- REF WebServerClass.HTTPTrace.Desc -->

## .HTTPTrace

<!-- REF #WebServerClass.HTTPTrace.Syntax -->
**.HTTPTrace** : Boolean<!-- END REF -->


The<!-- REF #WebServerClass.HTTPTrace. Summary -->activation of `HTTP TRACE`<!-- END REF -->. For security reasons, by default the Web server rejects `HTTP TRACE` requests with an error 405. When enabled, the web server replies to `HTTP TRACE` requests with the request line, header, and body.

<!-- END REF -->


<!-- REF WebServerClass.HTTPSEnabled.Desc -->

## .HTTPSEnabled


<!-- REF #WebServerClass.HTTPSEnabled.Syntax -->
**.HTTPSEnabled** : Boolean<!-- END REF -->

The<!-- REF #WebServerClass.HTTPSEnabled. Summary -->HTTPS protocol state<!-- END REF -->.

<!-- END REF -->


<!-- REF WebServerClass.HTTPSPort.Desc -->

## .HTTPSPort


<!-- REF #WebServerClass.HTTPSPort.Syntax -->
**.HTTPSPort** : Number<!-- END REF -->

The<!-- REF #WebServerClass.HTTPSPort. Summary -->listening IP port number for HTTPS<!-- END REF -->.

Default = 443

<!-- END REF -->


<!-- REF WebServerClass.inactiveProcessTimeout.Desc -->

## .inactiveProcessTimeout

<!-- REF #WebServerClass.inactiveProcessTimeout.Syntax -->
**.inactiveProcessTimeout** : Number<!-- END REF -->

> This property is not returned in [scalable sessions mode](#scalablesession).

The<!-- REF #WebServerClass.inactiveProcessTimeout. Summary -->life duration (in minutes) of the inactive legacy session processes<!-- END REF -->. At the end of the timeout, the process is killed on the server, the `On Web Legacy Close Session` database method is called, then the legacy session context is destroyed.

Default = 480 minutes

<!-- END REF -->


<!-- REF WebServerClass.inactiveSessionTimeout.Desc -->

## .inactiveSessionTimeout

<!-- REF #WebServerClass.inactiveSessionTimeout.Syntax -->
**.inactiveSessionTimeout** : Number<!-- END REF -->

> This property is not returned in [scalable sessions mode](#scalablesession).

The<!-- REF #WebServerClass.inactiveSessionTimeout. Summary -->life duration (in minutes) of inactive legacy sessions (duration set in cookie)<!-- END REF -->. At the end of this period, the session cookie expires and is no longer sent by the HTTP client.

Default = 480 minutes

<!-- END REF -->


<!-- REF WebServerClass.IPAddressToListen.Desc -->

## .IPAddressToListen


<!-- REF #WebServerClass.IPAddressToListen.Syntax -->
**.IPAddressToListen** : Text<!-- END REF -->


The<!-- REF #WebServerClass.IPAddressToListen. Summary -->IP address on which the 4D Web Server will receive HTTP requests<!-- END REF -->. By default, no specific address is defined. Both IPv6 string formats and IPv4 string formats are supported.

<!-- END REF -->


<!-- REF WebServerClass.isRunning.Desc -->


## .isRunning


<!-- REF #WebServerClass.isRunning.Syntax -->
**.isRunning** : Boolean<!-- END REF -->


*Read-only property*

The<!-- REF #WebServerClass.isRunning. Summary -->web server running state<!-- END REF -->.

<!-- END REF -->


<!-- REF WebServerClass.keepSession.Desc -->

## .keepSession

<!-- REF #WebServerClass.keepSession.Syntax -->
**.keepSession** : Boolean<!-- END REF -->


<!-- REF #WebServerClass.keepSession.Summary -->True if legacy sessions are enabled in the web server, False otherwise<!-- END REF -->.

##### See also:
[.scalableSession](#scalablesession)

<!-- END REF -->


<!-- REF WebServerClass.logRecording.Desc -->

## .logRecording


<!-- REF #WebServerClass.logRecording.Syntax -->
**.logRecording** : Number<!-- END REF -->


The<!-- REF #WebServerClass.logRecording. Summary -->log requests (logweb.txt) recording value<!-- END REF -->.

*   0 = Do not record (default)
*   1 = Record in CLF format
*   2 = Record in DLF format
*   3 = Record in ELF format
*   4 = Record in WLF format

<!-- END REF -->


<!-- REF WebServerClass.maxConcurrentProcesses.Desc -->

## .maxConcurrentProcesses


<!-- REF #WebServerClass.maxConcurrentProcesses.Syntax -->
**.maxConcurrentProcesses** : Number<!-- END REF -->


The<!-- REF #WebServerClass.maxConcurrentProcesses. Summary -->maximum number of concurrent web processes supported by the web server<!-- END REF -->. When this number (minus one) is reached, 4D will not create any other processes and returns the HTTP status 503 - Service Unavailable to all new requests.

Possible values: 10 - 32000

Default = 100

<!-- END REF -->


<!-- REF WebServerClass.maxRequestSize.Desc -->

## .maxRequestSize


<!-- REF #WebServerClass.maxRequestSize.Syntax -->
**.maxRequestSize** : Number<!-- END REF -->


The<!-- REF #WebServerClass.maxRequestSize. Summary -->maximum size (in bytes) of incoming HTTP requests (POST) that the web server is allowed to process<!-- END REF -->. Passing the maximum value (2147483647) means that, in practice, no limit is set. This limit is used to avoid web server saturation due to incoming requests that are too large. If a request reaches this limit, the web server rejects it.

Possible values: 500000 - 2147483647

<!-- END REF -->


<!-- REF WebServerClass.maxSessions.Desc -->

## .maxSessions

<!-- REF #WebServerClass.maxSessions.Syntax -->
**.maxSessions** : Number<!-- END REF -->

> This property is not returned in [scalable sessions mode](#scalablesession).

The<!-- REF #WebServerClass.maxSessions. Summary -->maximum number of simultaneous legacy sessions<!-- END REF -->. When you reach the limit, the oldest legacy session is closed (and `On Web Legacy Close Session` database method is called) if the web server needs to create a new one. The number of simultaneous legacy sessions cannot exceed the total number of web processes (`maxConcurrentProcesses` property, 100 by default)

<!-- END REF -->


<!-- REF WebServerClass.minTLSVersion.Desc -->

## .minTLSVersion

<!-- REF #WebServerClass.minTLSVersion.Syntax -->
**.minTLSVersion** : Number<!-- END REF -->


The<!-- REF #WebServerClass.minTLSVersion. Summary -->minimum TLS version accepted for connections<!-- END REF -->. Connection attempts from clients supporting only versions below the minimum will be rejected.

Possible values:

*   1 = TLSv1_0
*   2 = TLSv1_1
*   3 = TLSv1_2 (default)
*   4 = TLSv1_3

If modified, the server must be restarted to use the new value.

<!-- END REF -->


<!-- REF WebServerClass.name.Desc -->

## .name


<!-- REF #WebServerClass.name.Syntax -->
**.name** : Text<!-- END REF -->


*Read-only property*

The<!-- REF #WebServerClass.name. Summary -->name of the web server application<!-- END REF -->.

<!-- END REF -->



<!-- REF WebServerClass.openSSLVersion.Desc -->

## .openSSLVersion

<!-- REF #WebServerClass.openSSLVersion.Syntax -->
**.openSSLVersion** : Text<!-- END REF -->


*Read-only property*

The<!-- REF #WebServerClass.openSSLVersion. Summary -->version of the OpenSSL library used<!-- END REF -->.

<!-- END REF -->


<!-- REF WebServerClass.perfectForwardSecrecy.Desc -->

## .perfectForwardSecrecy


<!-- REF #WebServerClass.perfectForwardSecrecy.Syntax -->
**.perfectForwardSecrecy** : Boolean<!-- END REF -->


*Read-only property*

The<!-- REF #WebServerClass.perfectForwardSecrecy. Summary -->PFS availability on the server<!-- END REF -->.

<!-- END REF -->


<!-- REF WebServerClass.rootFolder.Desc -->
## .rootFolder


<!-- REF #WebServerClass.rootFolder.Syntax -->
**.rootFolder** : Text<!-- END REF -->


The<!-- REF #WebServerClass.rootFolder. Summary -->path of web server root folder<!-- END REF -->. O caminho está formatado no caminho completo POSIX usando sistemas de arquivos. When using this property in the `settings` parameter, it can be a `Folder` object.

<!-- END REF -->

<!-- REF WebServerClass.scalableSession.Desc -->
## .scalableSession


<!-- REF #WebServerClass.scalableSession.Syntax -->
**.scalableSession** : Boolean<!-- END REF -->


<!-- REF #WebServerClass.scalableSession.Summary -->True if scalable sessions are used in the web server, and False otherwise<!-- END REF -->.

##### See also:
[.keepSession](#keepsession)
<!-- END REF -->

<!-- REF WebServerClass.sessionCookieDomain.Desc -->

## .sessionCookieDomain


<!-- REF #WebServerClass.sessionCookieDomain.Syntax -->
**.sessionCookieDomain** : Text<!-- END REF -->


The<!-- REF #WebServerClass.sessionCookieDomain. Summary -->"domain" field of the session cookie<!-- END REF -->. Used to control the scope of the session cookies. If you set, for example, the value "/*.4d.fr" for this selector, the client will only send a cookie when the request is addressed to the domain ".4d.fr", which excludes servers hosting external static data.

<!-- END REF -->


<!-- REF WebServerClass.sessionCookieName.Desc -->

## .sessionCookieName


<!-- REF #WebServerClass.sessionCookieName.Syntax -->
**.sessionCookieName** : Text<!-- END REF -->


The<!-- REF #WebServerClass.sessionCookieName. Summary -->name of the cookie used for storing the session ID<!-- END REF -->.

*Read-only property*

<!-- END REF -->


<!-- REF WebServerClass.sessionCookiePath.Desc -->

## .sessionCookiePath


<!-- REF #WebServerClass.sessionCookiePath.Syntax -->
**.sessionCookiePath** : Text<!-- END REF -->


The<!-- REF #WebServerClass.sessionCookiePath. Summary -->"path" field of the session cookie<!-- END REF -->. Used to control the scope of the session cookies. If you set, for example, the value "/4DACTION" for this selector, the client will only send a cookie for dynamic requests beginning with 4DACTION, and not for pictures, static pages, etc.

<!-- END REF -->

<!-- REF WebServerClass.sessionCookieSameSite.Desc -->

## .sessionCookieSameSite

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v19    | Adicionado |
</details>

<!-- REF #WebServerClass.sessionCookieSameSite.Syntax -->
**.sessionCookieSameSite** : Text<!-- END REF -->


The<!-- REF #WebServerClass.sessionCookieSameSite. Summary -->"SameSite" session cookie value<!-- END REF -->. Possible values (using constants):

| Constante           | Value    | Descrição                                                                                                                           |
| ------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Web SameSite Strict | "Strict" | *Default value* - Cookies are only sent in a first-party context                                                                    |
| Web SameSite Lax    | "Lax"    | Cookies are also sent on cross-site subrequests but only when a user is navigating to the origin site (i.e. when following a link). |
| Web SameSite None   | "None"   | Cookies are sent in all contexts, i.e in responses to both first-party and cross-origin requests.                                   |

See the [Session Cookie SameSite](WebServer/webServerConfig.md#session-cookie-samesite) description for detailed information.


<!-- END REF -->

<!-- REF WebServerClass.sessionIPAddressValidation.Desc -->

## .sessionIPAddressValidation


<!-- REF #WebServerClass.sessionIPAddressValidation.Syntax -->
**.sessionIPAddressValidation** : Boolean<!-- END REF -->

> This property is not used in [scalable sessions mode](#scalablesession) (there is no IP address validation).

The<!-- REF #WebServerClass.sessionIPAddressValidation. Summary -->IP address validation for session cookies<!-- END REF -->. For security reasons, by default the web server checks the IP address of each request containing a session cookie and rejects it if this address does not match the IP address used to create the cookie. In some specific applications, you may want to disable this validation and accept session cookies, even when their IP addresses do not match. For example when mobile devices switch between WiFi and 3G/4G networks, their IP address will change. In this case, you can allow clients to be able to continue using their web sessions even when the IP addresses change (this setting lowers the security level of your application).

<!-- END REF -->


<!-- REF WebServerClass.start().Desc -->

## .start()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R3 | Adicionado |
</details>

<!-- REF #WebServerClass.start().Syntax -->

**.start**() : Object<br>**.start**( *settings* : Object ) : Object<!-- END REF -->



<!-- REF #WebServerClass.start().Params -->

| Parameter | Type   |    | Descrição                             |
| --------- | ------ | -- | ------------------------------------- |
| settings  | Objeto | -> | Web server settings to set at startup |
| Resultado | Objeto | <- | Status of the web server startup      |

<!-- END REF -->

The `.start()` function<!-- REF #WebServerClass.start(). Summary -->starts the web server on which it is applied<!-- END REF -->, using properties set in the optional *settings* object parameter.

The web server starts with default settings defined in the settings file of the project or (host database only) using the `WEB SET OPTION` command. However, using the *settings* parameter, you can define customized properties for the web server session.

All settings of [Web Server objects](#web-server-object) can be customized, except read-only properties ([.isRunning](#isrunning), [.name](#name), [.openSSLVersion](#opensslversion), [.perfectForwardSecrecy](#perfectforwardsecrecy), and [.sessionCookieName(#sessioncookiename)]).

Customized session settings will be reset when the [`.stop()`](#stop) function is called.


#### Returned object

The function returns an object describing the Web server launch status. This object can contain the following properties:

| Propriedade |                         | Type     | Descrição                                                            |
| ----------- | ----------------------- | -------- | -------------------------------------------------------------------- |
| success     |                         | Booleano | True if the web server was correctly started, False otherwise        |
| errors      |                         | Coleção  | 4D error stack (not returned if the web server started successfully) |
|             | \[].errCode            | Número   | 4D error code                                                        |
|             | \[].message            | Texto    | Description of the 4D error                                          |
|             | \[].componentSignature | Texto    | Signature of the internal component which returned the error         |
> If the Web server was already launched, an error is returned.

#### Exemplo

```4d
 var $settings;$result : Object
 var $webServer : 4D. WebServer

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

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R3 | Adicionado |
</details>

<!-- REF #WebServerClass.stop().Syntax -->
**.stop()** <!-- END REF -->

<!-- REF #WebServerClass.stop().Params -->

| Parameter | Type |  | Descrição                       |
| --------- | ---- |  | ------------------------------- |
|           |      |  | Does not require any parameters |

 <!-- END REF -->

The `.stop()` function<!-- REF #WebServerClass.stop(). Summary -->stops the web server on which it is applied<!-- END REF -->.

If the web server was started, all web connections and web processes are closed, once the currently handled requests are finished. If the web server was not started, the method does nothing.
> This function resets the customized web settings defined for the session using the *settings* parameter of the [`.start()`](#start) function, if any.


#### Exemplo

To stop the database Web server:

```4d
 var $webServer : 4D. WebServer

 $webServer:=WEB Server(Web server database)
 $webServer.stop()
```

<!-- END REF -->




<style> h2 { background: #d9ebff;}</style>
