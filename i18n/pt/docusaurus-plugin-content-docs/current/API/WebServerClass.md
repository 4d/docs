---
id: WebServerClass
title: WebServer
---


A `API da classe WebServer` permite que você inicie e monitore um servidor web para o aplicativo (host) principal, bem como cada componente hospedado (consulte a visão geral do objeto [Web Server](WebServer/webServerObject.md)). Esta classe está disponível na loja de classes de `4D`.

### Objeto Web Server

Objetos do servidor web são instanciados com o comando [`WEB Server`](#web-server).

Eles oferecem as propriedades abaixo e funções:

### Resumo

|                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebServerClass.accessKeyDefined.Syntax -->](#accesskeydefined)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.accessKeyDefined.Summary -->|
| [<!-- INCLUDE #WebServerClass.certificateFolder.Syntax -->](#certificatefolder)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.certificateFolder.Summary -->|
| [<!-- INCLUDE #WebServerClass.characterSet.Syntax -->](#characterset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.characterSet.Summary -->|
| [<!-- INCLUDE #WebServerClass.cipherSuite.Syntax -->](#ciphersuite)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.cipherSuite.Summary -->|
| [<!-- INCLUDE #WebServerClass.CORSEnabled.Syntax -->](#corsenabled)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.CORSEnabled.Summary -->|
| [<!-- INCLUDE #WebServerClass.CORSSettings.Syntax -->](#corssettings)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.CORSSettings.Summary --> |
| [<!-- INCLUDE #WebServerClass.debugLog.Syntax -->](#debuglog)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.debugLog.Summary -->|
| [<!-- INCLUDE #WebServerClass.defaultHomepage.Syntax -->](#defaulthomepage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.defaultHomepage.Summary -->|
| [<!-- INCLUDE #WebServerClass.HSTSEnabled.Syntax -->](#hstsenabled)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HSTSEnabled.Summary --> |
| [<!-- INCLUDE #WebServerClass.HSTSMaxAge.Syntax -->](#hstsmaxage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HSTSMaxAge.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPCompressionLevel.Syntax -->](#httpcompressionlevel)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPCompressionLevel.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPCompressionThreshold.Syntax -->](#httpcompressionthreshold)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPCompressionThreshold.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPEnabled.Syntax -->](#httpenabled)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPEnabled.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPPort.Syntax -->](#httpport)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPPort.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPTrace.Syntax -->](#httptrace)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPTrace.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPSEnabled.Syntax -->](#httpsenabled)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPSEnabled.Summary -->|
| [<!-- INCLUDE #WebServerClass.HTTPSPort.Syntax -->](#httpsport)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.HTTPSPort.Summary -->|
| [<!-- INCLUDE #WebServerClass.inactiveProcessTimeout.Syntax -->](#inactiveprocesstimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.inactiveProcessTimeout.Summary -->|
| [<!-- INCLUDE #WebServerClass.inactiveSessionTimeout.Syntax -->](#inactivesessiontimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.inactiveSessionTimeout.Summary -->|
| [<!-- INCLUDE #WebServerClass.IPAddressToListen.Syntax -->](#ipaddresstolisten)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.IPAddressToListen.Summary -->|
| [<!-- INCLUDE #WebServerClass.isRunning.Syntax -->](#isrunning)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.isRunning.Summary -->|
| [<!-- INCLUDE #WebServerClass.keepSession.Syntax -->](#keepsession)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.keepSession.Summary -->|
| [<!-- INCLUDE #WebServerClass.logRecording.Syntax -->](#logrecording)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.logRecording.Summary -->|
| [<!-- INCLUDE #WebServerClass.maxConcurrentProcesses.Syntax -->](#maxconcurrentprocesses)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.maxConcurrentProcesses.Summary -->|
| [<!-- INCLUDE #WebServerClass.maxRequestSize.Syntax -->](#maxrequestsize)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.maxRequestSize.Summary -->|
| [<!-- INCLUDE #WebServerClass.maxSessions.Syntax -->](#maxsessions)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.maxSessions.Summary -->|
| [<!-- INCLUDE #WebServerClass.minTLSVersion.Syntax -->](#mintlsversion)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.minTLSVersion.Summary -->|
| [<!-- INCLUDE #WebServerClass.name.Syntax -->](#name)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.name.Summary -->|
| [<!-- INCLUDE #WebServerClass.openSSLVersion.Syntax -->](#opensslversion)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.openSSLVersion.Summary -->|
| [<!-- INCLUDE #WebServerClass.perfectForwardSecrecy.Syntax -->](#perfectforwardsecrecy)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.perfectForwardSecrecy.Summary -->|
| [<!-- INCLUDE #WebServerClass.rootFolder.Syntax -->](#rootfolder)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.rootFolder.Summary -->|
| [<!-- INCLUDE #WebServerClass.scalableSession.Syntax -->](#scalablesession)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.scalableSession.Summary -->|
| [<!-- INCLUDE #WebServerClass.sessionCookieDomain.Syntax -->](#sessioncookiedomain)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionCookieDomain.Summary -->|
| [<!-- INCLUDE #WebServerClass.sessionCookieName.Syntax -->](#sessioncookiename)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionCookieName.Summary -->|
| [<!-- INCLUDE #WebServerClass.sessionCookiePath.Syntax -->](#sessioncookiepath)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionCookiePath.Summary -->|
| [<!-- INCLUDE #WebServerClass.sessionCookieSameSite.Syntax -->](#sessioncookiesamesite)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionCookieSameSite.Summary -->|
| [<!-- INCLUDE #WebServerClass.sessionIPAddressValidation.Syntax -->](#sessionipaddressvalidation)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.sessionIPAddressValidation.Summary -->|
| [<!-- INCLUDE #WebServerClass.start().Syntax -->](#start)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.start().Summary -->|
| [<!-- INCLUDE #WebServerClass.stop().Syntax -->](#stop)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebServerClass.stop().Summary -->|

## WEB Server

<details><summary>Histórico</summary>

| Versão | Mudanças                            |
| ------ | ----------------------------------- |
| v18 R3 | Adicionado                          |
| v19    | suporte para .sessionCookieSameSite |

</details>

<!-- REF #_command_.WEB Server.Syntax -->**WEB Server** : 4D. WebServer<br/>**WEB Server**( *option* : Integer ) : 4D. WebServer<!-- END REF -->


<!-- REF #_command_.WEB Server.Params -->

| Parâmetro  | Tipo          |    | Descrição                                                                          |
| ---------- | ------------- | -- | ---------------------------------------------------------------------------------- |
| option     | Integer       | -> | Servidor Web a ser obtido (padrão se omitido = `Banco de dados de servidores Web`) |
| Resultados | 4D. WebServer | <- | Objeto Web Server                                                                  |

<!-- END REF -->

O comando `WEB Server` <!-- REF #_command_.WEB Server.Summary -->retorna o objeto padrão web server ou o objeto web server definido através do parâmetro *option*<!-- END REF -->.

O servidor web começa com as definições padrão definidas no ficheiro de definições do projecto ou (apenas base de dados anfitriã) usando o comando `WEB SET OPTION` . No entanto, utilizando o parâmetro *settings*, pode definir propriedades personalizadas para a sessão do servidor web.

| Parâmetros                                      | Valor | Comentário                                                  |
| ----------------------------------------------- | ----- | ----------------------------------------------------------- |
| `Web server database`                           | 1     | Servidor Web de banco de dados atual (padrão caso omitido)  |
| `<a href="#keepsession">.keepSession</a>` | 2     | Servidor Web do banco de dados de host de um componente     |
| `Solicitação de recebimento do servidor web`    | 3     | Servidor web que recebeu o pedido (servidor Web de destino) |

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

<!-- REF #_command_.WEB Server list.Syntax -->**WEB Server list** : Collection<!-- END REF -->


<!-- REF #_command_.WEB Server list.Params -->

| Parâmetro  | Tipo       |    | Descrição                                     |
| ---------- | ---------- | -- | --------------------------------------------- |
| Resultados | Collection | <- | Coleção de objetos do Servidor Web disponível |

<!-- END REF -->

O comando `WEB Server list` <!-- REF #_command_.WEB Server list.Summary -->retorna uma coleção de todos os objetos Web server disponíveis na aplicação 4D<!-- END REF -->.

Uma aplicação 4D pode conter em qualquer lugar de um a vários servidores Web:

- um servidor Web para o banco de dados host (servidor Web padrão)
- um servidor web para cada componente.

Todos os servidores Web disponíveis são retornados pelo comando `WEB Server list` , quer estejam realmente executando ou não.

> O objeto do servidor Web padrão é carregado automaticamente pelo 4D na inicialização. Por outro lado, cada servidor de Web de componente que você deseja usar deve ser instanciado usando o comando [`WEB Server`](#web-server).

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

<!-- REF #WebServerClass.accessKeyDefined.Syntax -->**.accessKeyDefined** : Boolean<!-- END REF -->


A propriedade **.accessKeyDefined** contém <!-- REF #WebServerClass.accessKeyDefined.Summary -->true se uma chave de acesso for definida na configuração do servidor de web<!-- END REF -->. Esta propriedade é usada pelo servidor web WebAdmin para validar a configuração de segurança da interface de administração.

<!-- REF WebServerClass.certificateFolder.Desc -->

## .certificateFolder

<!-- REF #WebServerClass.certificateFolder.Syntax -->**.certificateFolder** : Text<!-- END REF -->


Caminho do <!-- REF #WebServerClass.certificateFolder.Summary -->pasta onde se encontram os ficheiros do certificado<!-- END REF -->. O caminho está formatado no caminho completo POSIX usando sistemas de arquivos. Ao usar essa propriedade no parâmetro `configurações` do [`. tart()`](#start) função, pode ser um [`Pasta` objeto](FolderClass.md).

<!-- END REF -->

<!-- REF WebServerClass.characterSet.Desc -->

## .characterSet

<!-- REF #WebServerClass.characterSet.Syntax -->**.characterSet** : Number<br/>**.characterSet** : Text<!-- END REF -->


O <!-- REF #WebServerClass.characterSet.Summary -->conjunto de caracteres que o Servidor 4D Web deve usar para comunicar com navegadores conectados à aplicação<!-- END REF -->. O valor padrão realmente depende da linguagem do SO. Pode ser um inteiro MIBEnum ou uma string de nome, identificadores [definidos por IANA](http://www.iana.org/assignments/character-sets/character-sets.xhtml). Aqui está a lista de identificadores correspondentes aos conjuntos de caracteres suportados pelo Servidor Web 4D:

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


O <!-- REF #WebServerClass.cipherSuite.Summary -->lista cipher usada para protocolo de segurança<!-- END REF -->. Define a prioridade dos algoritmos de criptografia implementados pelo servidor web 4D. Pode ser uma sequência de frases separadas por dois pontos (por exemplo, "ECDHE-RSA-AES128-..."). Veja a página cifras [](https://www.openssl.org/docs/manmaster/man1/ciphers.html) no site OpenSSL.

<!-- END REF -->

<!-- REF WebServerClass.CORSEnabled.Desc -->

## .CORSEnabled

<!-- REF #WebServerClass.CORSEnabled.Syntax -->**.CORSEnabled** : Boolean<!-- END REF -->


O <!-- REF #WebServerClass.CORSEnabled.Summary -->CORS (*Cross-origin resource sharing*) estado de serviço para o servidor web<!-- END REF -->. Por razões de segurança, solicitações de "cross-domain" são proibidas no nível do navegador por padrão. Quando ativado (True), chamadas XHR (por exemplo, Solicitações REST) de páginas da Web fora do domínio podem ser permitidas na sua aplicação (você precisa definir a lista de endereços permitidos na lista de domínio CORS, veja `CORSSettings` abaixo). Quando desativado (False, padrão), todas as solicitações de cruzamento de sites enviadas com CORS são ignoradas. Quando habilitado (verdadeiro) e um domínio ou método não permitido envia uma solicitação de site cruzado, ele é rejeitado com uma resposta de erro "403 - proibido".

Padrão: Falso (desabilitado)

Para obter mais informações sobre o CORS, consulte a [página de compartilhamento de recursos entre origens](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) na Wikipédia.

<!-- END REF -->

<!-- REF WebServerClass.CORSSettings.Desc -->

## .CORSSettings

<!-- REF #WebServerClass.CORSSettings.Syntax -->**.CORSSettings** : Collection<!-- END REF -->


Contém <!-- REF #WebServerClass.CORSSettings.Summary -->lista de hosts permitidos e métodos para o serviço CORS<!-- END REF --> (ver propriedade [`CORSEnabled`](#corsenabled)). Cada objeto deve conter uma propriedade **host** e, opcionalmente, uma propriedade **métodos**:


- **host** (texto, obrigatório): Nome de domínio ou endereço IP onde as páginas externas são permitidas de enviar requisições de dados para o servidor através do CORS. Vários atributos de domínio podem ser adicionados para criar uma lista branca. Se *host* não estiver presente ou vazio, o objeto é ignorado. Várias sintaxes são suportadas:
  - 192.168.5.17:8081
  - 192.168.5.17
  - 192.168.*
  - 192.168.*:8081
  - <http://192.168.5.17:8081>
  - <http://*.myDomain.com>
  - <http://myProject.myDomain.com>
  - *.myDomain.com
  - myProject.myDomain.com
  - \*

- **métodos** (texto, opcional): Métodos HTTP aceito(s) para o host CORS correspondente. Separar cada método com um ";" (por exemplo: "post;get"). Se os métodos ** estiverem como vazio, nulo ou indefinido, todos os métodos estão habilitados.

<!-- END REF -->

<!-- REF WebServerClass.debugLog.Desc -->

## .debugLog

<!-- REF #WebServerClass.debugLog.Syntax -->**.debugLog** : Number<!-- END REF -->


O <!-- REF #WebServerClass.debugLog.Summary -->estado do arquivo de log da petição HTTP<!-- END REF --> (HTTPDebugLog_nn.txt, armazenado na pasta "Logs" da aplicação - nn é o número de arquivo).

- 0 = desactivado
- 1 = habilitado sem partes do corpo (o tamanho do corpo é fornecido neste caso)
- 3 = ativado com partes do corpo apenas em resposta
- 5 = ativado com partes do corpo apenas em resposta
- 7 = ativado com partes do corpo apenas em resposta

<!-- END REF -->

<!-- REF WebServerClass.defaultHomepage.Desc -->

## .defaultHomepage

<!-- REF #WebServerClass.defaultHomepage.Syntax -->**.defaultHomepage** : Text<!-- END REF -->


O <!-- REF #WebServerClass.defaultHomepage.Summary -->nome da página home<!-- END REF --> ou "" para não enviar a página home personalizada.

<!-- END REF -->

<!-- REF WebServerClass.HSTSEnabled.Desc -->

## .HSTSEnabled

<!-- REF #WebServerClass.HSTSEnabled.Syntax -->**.HSTSEnabled** : Boolean<!-- END REF -->


O <!-- REF #WebServerClass.HSTSEnabled.Summary -->estado HTTP Strict Transport Security (HSTS)<!-- END REF -->. O HSTS permite que o servidor declare que os navegadores só devem interagir com ele através de conexões HTTPS seguras. Navegadores gravarão as informações de HSTS na primeira vez que receberem uma resposta do servidor web, então quaisquer futuras solicitações HTTP serão automaticamente transformadas em solicitações HTTPS. O tempo que essas informações são armazenadas pelo navegador é especificado na propriedade `HSTSMaxAge`. A HSTS requer que HTTPS esteja ativado no servidor. HTTP deve também ser habilitado para permitir conexões iniciais de clientes.

<!-- END REF -->

<!-- REF WebServerClass.HSTSMaxAge.Desc -->

## .HSTSMaxAge



<!-- REF #WebServerClass.HSTSMaxAge.Syntax -->**.HSTSMaxAge** : Number<!-- END REF -->


O <!-- REF #WebServerClass.HSTSMaxAge.Summary -->tamanho máximo de tempo (em segundos) em que HSTS está ativo para cada nova conexão de cliente<!-- END REF -->. Esta informação é armazenada no lado do Cliente durante a duração especificada.

Valor padrão: 63072000 (2 anos).

<!-- END REF -->

<!-- REF WebServerClass.HTTPCompressionLevel.Desc -->

## .HTTPCompressionLevel

<!-- REF #WebServerClass.HTTPCompressionLevel.Syntax -->**.HTTPCompressionLevel** : Number<!-- END REF -->


O <!-- REF #WebServerClass.HTTPCompressionLevel.Summary -->nível de compressão para todas as trocas HTTP compactado para o servidor 4D HTTP (petições cliente ou respostas servidor)<!-- END REF -->. Este seletor permite otimizar trocas priorizando a velocidade de execução (menos compactação) ou a quantidade de compressão (menos velocidade)

Valores possíveis:

- 1 a 9 (onde 1 é a compressão mais rápida e 9 a mais alta).
- -1 = define um compromisso entre a velocidade e a taxa de compressão.

Padrão = 1 (compressão mais rápida).

<!-- END REF -->

<!-- REF WebServerClass.HTTPCompressionThreshold.Desc -->

## .HTTPCompressionThreshold

<!-- REF #WebServerClass.HTTPCompressionThreshold.Syntax -->**.HTTPCompressionThreshold** : Number<!-- END REF -->


O <!-- REF #WebServerClass.HTTPCompressionThreshold.Summary -->tamanho limite (bytes) para petições abaixo da qual as trocas não serão compactadas<!-- END REF -->. Essa configuração é útil para evitar perder o tempo da máquina ao comprimir pequenas trocas.

Limite de compressão padrão = 1024 bytes

<!-- END REF -->

<!-- REF WebServerClass.HTTPEnabled.Desc -->

## .HTTPEnabled

<!-- REF #WebServerClass.HTTPEnabled.Syntax -->**.HTTPEnabled** : Boolean<!-- END REF -->


O <!-- REF #WebServerClass.HTTPEnabled.Summary -->Estado do protocolo HTTP<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.HTTPPort.Desc -->

## .HTTPPort

<!-- REF #WebServerClass.HTTPPort.Syntax -->**.HTTPPort** : Number<!-- END REF -->


O <!-- REF #WebServerClass.HTTPPort.Summary -->número da porta listening IP para HTTP<!-- END REF -->.

O padrão = 80

<!-- END REF -->

<!-- REF WebServerClass.HTTPTrace.Desc -->

## .HTTPTrace

<!-- REF #WebServerClass.HTTPTrace.Syntax -->**.HTTPTrace** : Boolean<!-- END REF -->


O <!-- REF #WebServerClass.HTTPTrace.Summary -->ativação de `HTTP TRACE`<!-- END REF -->. Por razões de segurança, o servidor web padrão rejeita petições `HTTP TRACE` com um erro 405. Quando ativado, o servidor web responde a petições `HTTP TRACE` com a linha, cabeçalho e corpo pedido.

<!-- END REF -->

<!-- REF WebServerClass.HTTPSEnabled.Desc -->

## .HTTPSEnabled

<!-- REF #WebServerClass.HTTPSEnabled.Syntax -->**.HTTPSEnabled** : Boolean<!-- END REF -->


O <!-- REF #WebServerClass.HTTPSEnabled.Summary -->Estado do protocolo HTTPS<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.HTTPSPort.Desc -->

## .HTTPSPort

<!-- REF #WebServerClass.HTTPSPort.Syntax -->**.HTTPSPort** : Number<!-- END REF -->


O <!-- REF #WebServerClass.HTTPSPort.Summary -->número de porta listening IP para HTTPS<!-- END REF -->.

O padrão = 443

<!-- END REF -->

<!-- REF WebServerClass.inactiveProcessTimeout.Desc -->

## .inactiveProcessTimeout

<!-- REF #WebServerClass.inactiveProcessTimeout.Syntax -->**.inactiveProcessTimeout** : Number<!-- END REF -->

> Esta propriedade não é retornada em [scalable sessions mode](#scalablesession).

O <!-- REF #WebServerClass.inactiveProcessTimeout.Summary -->O Duração (em minutos) dos processos de sessão legado inativos<!-- END REF -->. No final do timeout, o processo é terminado no servidor, o método de database `On Web Legacy Close Session` é chamado, e então o contexto sessão legado é destruído.

Default = 480 minutos

<!-- END REF -->

<!-- REF WebServerClass.inactiveSessionTimeout.Desc -->

## .inactiveSessionTimeout

<!-- REF #WebServerClass.inactiveSessionTimeout.Syntax -->**.inactiveSessionTimeout** : Number<!-- END REF -->

> Esta propriedade não é retornada em [scalable sessions mode](#scalablesession).

O <!-- REF #WebServerClass.inactiveSessionTimeout.Summary -->duração (em minutos) da sessão inativa legado (estabelecida no cookie)<!-- END REF -->. No final do período, o cookie da sessão expira e não é mais enviada pelo cliente HTTP.

Default = 480 minutos

<!-- END REF -->

<!-- REF WebServerClass.IPAddressToListen.Desc -->

## .IPAddressToListen

<!-- REF #WebServerClass.IPAddressToListen.Syntax -->**.IPAddressToListen** : Text<!-- END REF -->


O <!-- REF #WebServerClass.IPAddressToListen.Summary -->Endereço IP no qual o servidor 4D Web vai receber a petição HTTP<!-- END REF -->. Normalmente, nenhum endereço específico é definido. Os formatos string IPv6 e IPv4 são compatíveis

<!-- END REF -->

<!-- REF WebServerClass.isRunning.Desc -->

## .isRunning

<!-- REF #WebServerClass.isRunning.Syntax -->**.isRunning** : Boolean<!-- END REF -->


*Propriedade apenas leitura*

O <!-- REF #WebServerClass.isRunning.Summary -->estado execução do servidor web<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.keepSession.Desc -->

## .keepSession

<!-- REF #WebServerClass.keepSession.Syntax -->**.keepSession** : Boolean<!-- END REF -->


Contém <!-- REF #WebServerClass.keepSession.Summary -->`True` se sessões legado são ativadas no servidor web, ou então `False`<!-- END REF -->.

##### Veja também

[.scalableSession](#scalablesession)

<!-- END REF -->

<!-- REF WebServerClass.logRecording.Desc -->

## .logRecording

<!-- REF #WebServerClass.logRecording.Syntax -->**.logRecording** : Number<!-- END REF -->


O <!-- REF #WebServerClass.logRecording.Summary -->valor guardado no log de petições (logweb.txt)<!-- END REF -->.

- 0 = Não registrar (padrão)
- 1 = Guardar no formato CLF
- 2 = Guardar no formato DLF
- 3 = Guardar no formato ELF
- 4 = Guardar no formato WLF

<!-- END REF -->

<!-- REF WebServerClass.maxConcurrentProcesses.Desc -->

## .maxConcurrentProcesses

<!-- REF #WebServerClass.maxConcurrentProcesses.Syntax -->**.maxConcurrentProcesses** : Number<!-- END REF -->


O <!-- REF #WebServerClass.maxConcurrentProcesses.Summary -->número máximo de processos web simultâneos suportados pelo servidor web<!-- END REF -->. Quando este número (menos um) é alcançado, 4D não cria outro processos e retorna o status HTTP 503 - Serviço indisponível para novas petições.

Valores possíveis: 10 - 32000

Normal = 100

<!-- END REF -->

<!-- REF WebServerClass.maxRequestSize.Desc -->

## .maxRequestSize

<!-- REF #WebServerClass.maxRequestSize.Syntax -->**.maxRequestSize** : Number<!-- END REF -->


Contém <!-- REF #WebServerClass.maxRequestSize.Summary -->tamanho máximo (em bytes) de petições HTTP entrando (POST) que o web server está autorizado a processar<!-- END REF -->. Passar o valor máximo (2147483647) significa na prática que não é estabelecido um limite. Este limite é utilizado para evitar a saturação do servidor web devido a pedidos recebidos demasiado grandes. Se um pedido atingir este limite, o servidor web rejeita-o.

Valores possíveis: 500000 - 2147483647

<!-- END REF -->

<!-- REF WebServerClass.maxSessions.Desc -->

## .maxSessions

<!-- REF #WebServerClass.maxSessions.Syntax -->**.maxSessions** : Number<!-- END REF -->

> Esta propriedade não é retornada em [scalable sessions mode](#scalablesession).

Contém <!-- REF #WebServerClass.maxSessions.Summary -->número máximo de sessões de legado simultâneas<!-- END REF -->. Quando se atinge o limite, a sessão de legado mais antiga é encerrada (e `On Web Legacy Close Session` método de base de dados é chamado) se o servidor web precisar de criar um novo. O número de sessões legadas em simultâneo não pode exceder o número total de processos web (`maxConcurrentProcesses` propriedade, 100 por padrão)

<!-- END REF -->

<!-- REF WebServerClass.minTLSVersion.Desc -->

## .minTLSVersion

<!-- REF #WebServerClass.minTLSVersion.Syntax -->**.minTLSVersion** : Number<!-- END REF -->


O <!-- REF #WebServerClass.minTLSVersion.Summary -->versão mínima de TLS aceita para ligações<!-- END REF -->. As tentativas de ligação de clientes que suportam apenas versões abaixo do mínimo serão rejeitadas.

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

O <!-- REF #WebServerClass.name.Summary -->nome da aplicação do servidor web<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.openSSLVersion.Desc -->

## .openSSLVersion

<!-- REF #WebServerClass.openSSLVersion.Syntax -->**.openSSLVersion** : Text<!-- END REF -->


*Propriedade apenas leitura*

O <!-- REF #WebServerClass.openSSLVersion.Summary -->versão da biblioteca OpenSSL utilizada<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.perfectForwardSecrecy.Desc -->

## .perfectForwardSecrecy

<!-- REF #WebServerClass.perfectForwardSecrecy.Syntax -->**.perfectForwardSecrecy** : Boolean<!-- END REF -->


*Propriedade apenas leitura*

O <!-- REF #WebServerClass.perfectForwardSecrecy.Summary -->disponibilidade do PFS no servidor<!-- END REF -->.

<!-- END REF -->

<!-- REF WebServerClass.rootFolder.Desc -->
## .rootFolder

<!-- REF #WebServerClass.rootFolder.Syntax -->**.rootFolder** : Text<!-- END REF -->


O <!-- REF #WebServerClass.rootFolder.Summary -->caminho da pasta raiz do servidor web<!-- END REF -->. O caminho está formatado no caminho completo POSIX usando sistemas de arquivos. Ao utilizar esta propriedade no parâmetro `settings` , pode ser um objecto `Folder` .

<!-- END REF -->

<!-- REF WebServerClass.scalableSession.Desc -->

## .scalableSession

<!-- REF #WebServerClass.scalableSession.Syntax -->**.scalableSession** : Boolean<!-- END REF -->


Contém <!-- REF #WebServerClass.scalableSession.Summary -->`True` se forem utilizadas sessões escaláveis no servidor web, e `Falso` caso contrário<!-- END REF -->.

##### Veja também

[.keepSession](#keepsession)

<!-- END REF -->

<!-- REF WebServerClass.sessionCookieDomain.Desc -->

## .sessionCookieDomain

<!-- REF #WebServerClass.sessionCookieDomain.Syntax -->**.sessionCookieDomain** : Text<!-- END REF -->


O <!-- REF #WebServerClass.sessionCookieDomain.Summary -->campo "domínio" do cookie da sessão<!-- END REF -->. Utilizado para controlar o alcance dos cookies da sessão. Se definir, por exemplo, o valor "/*.4d.fr" para este selector, o cliente só enviará um cookie quando o pedido for dirigido ao domínio ".4d.fr", o que exclui os servidores que hospedam dados estáticos externos.

<!-- END REF -->

<!-- REF WebServerClass.sessionCookieName.Desc -->

## .sessionCookieName

<!-- REF #WebServerClass.sessionCookieName.Syntax -->**.sessionCookieName** : Text<!-- END REF -->


O <!-- REF #WebServerClass.sessionCookieName.Summary -->nome do cookie utilizado para guardar o ID da sessão<!-- END REF -->.

*Propriedade apenas leitura*

<!-- END REF -->

<!-- REF WebServerClass.sessionCookiePath.Desc -->

## .sessionCookiePath

<!-- REF #WebServerClass.sessionCookiePath.Syntax -->**.sessionCookiePath** : Text<!-- END REF -->


O <!-- REF #WebServerClass.sessionCookiePath.Summary -->campo "caminho" do cookie da sessão<!-- END REF -->. Utilizado para controlar o alcance dos cookies da sessão. Se definir, por exemplo, o valor "/4DACTION" para este selector, o cliente só enviará um cookie para pedidos dinâmicos que comecem por 4DACTION, e não para imagens, páginas estáticas, etc.

<!-- END REF -->

<!-- REF WebServerClass.sessionCookieSameSite.Desc -->

## .sessionCookieSameSite

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v19    | Adicionado |

</details>

<!-- REF #WebServerClass.sessionCookieSameSite.Syntax -->**.sessionCookieSameSite** : Text<!-- END REF -->


O <!-- REF #WebServerClass.sessionCookieSameSite.Summary -->"Valor do cookie da sessão "SameSite<!-- END REF -->. Possíveis valores (usando constantes):

| Parâmetros          | Valor    | Descrição                                                                                                                                                |
| ------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Web SameSite Strict | "Strict" | *Valor por defeito* - Os cookies só são enviados num contexto de primeira parte                                                                          |
| Web SameSite Lax    | "Lax"    | Os cookies também são enviados em pedidos cruzados mas apenas quando um utilizador está a navegar para o sítio de origem (isto é, quando segue um link). |
| Web SameSite None   | "None"   | Os cookies são enviados em todos os contextos, ou seja, em resposta a pedidos tanto de primeira parte como de origem cruzada.                            |

Ver o [Session Cookie SameSite](WebServer/webServerConfig.md#session-cookie-samesite) descrição para informações detalhadas.

<!-- END REF -->

<!-- REF WebServerClass.sessionIPAddressValidation.Desc -->

## .sessionIPAddressValidation

<!-- REF #WebServerClass.sessionIPAddressValidation.Syntax -->**.sessionIPAddressValidation** : Boolean<!-- END REF -->

> Esta propriedade não é utilizada em [modo sessões escaláveis](#scalablesession) (não há validação de endereço IP).


O <!-- REF #WebServerClass.sessionIPAddressValidation.Summary -->Validação de endereço IP para cookies de sessão<!-- END REF -->. Por razões de segurança, por defeito o servidor web verifica o endereço IP de cada pedido contendo um cookie de sessão e rejeita-o se este endereço não corresponder ao endereço IP utilizado para criar o cookie. Em algumas aplicações específicas, poderá querer desactivar esta validação e aceitar cookies de sessão, mesmo quando os seus endereços IP não correspondem. Por exemplo, quando os dispositivos móveis mudam entre redes WiFi e 3G/4G, o seu endereço IP muda. Neste caso, pode permitir que os clientes possam continuar a utilizar as suas sessões web mesmo quando os endereços IP mudam (esta configuração reduz o nível de segurança da sua aplicação).

<!-- END REF -->

<!-- REF WebServerClass.start().Desc -->

## .start()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v18 R3 | Adicionado |
</details>

<!-- REF #WebServerClass.start().Syntax -->
**.start**() : Object<br/>**.start**( *settings* : Object ) : Object<!-- END REF -->


<!-- REF #WebServerClass.start().Params -->

| Parâmetro  | Tipo   |    | Descrição                                           |
| ---------- | ------ | -- | --------------------------------------------------- |
| settings   | Objeto | -> | Configurações do servidor Web a definir no arranque |
| Resultados | Objeto | <- | Estado de arranque do servidor web                  |

<!-- END REF -->

A função `.start()` <!-- REF #WebServerClass.start().Summary -->inicia o servidor web em que é aplicado<!-- END REF -->, utilizando propriedades definidas nas definições opcionais ** parâmetro do objecto.

O servidor web começa com as definições padrão definidas no ficheiro de definições do projecto ou (apenas base de dados anfitriã) usando o comando `WEB SET OPTION`. No entanto, utilizando o parâmetro *settings*, pode definir propriedades personalizadas para a sessão do servidor web.

Todas as definições dos objectos do [Web Server](#web-server-object) podem ser personalizadas, excepto propriedades só de leitura ([.isRunning](#isrunning), [.name](#name), [.openSSLVersion](#opensslversion), [.perfectForwardSecrecy](#perfectforwardsecrecy), e [.sessionCookieName(#sessioncookiename)]).

As definições personalizadas da sessão serão reiniciadas quando a função [`.stop()`](#stop) for chamada.

#### Objeto devolvido

A função devolve um objecto que descreve o estado de lançamento do servidor Web. Este objeto pode conter as seguintes propriedades:

| Propriedade |                         | Tipo       | Descrição                                                                     |
| ----------- | ----------------------- | ---------- | ----------------------------------------------------------------------------- |
| success     |                         | Parâmetros | Verdadeiro se o servidor web foi correctamente iniciado, Falso caso contrário |
| errors      |                         | Collection | pilha de erros 4D (não devolvidos se o servidor web começou com sucesso)      |
|             | \[].errCode            | Número     | Código de erro 4D                                                             |
|             | \[].message            | Text       | Descrição do erro 4D                                                          |
|             | \[].componentSignature | Text       | Assinatura da componente interna que devolveu o erro                          |
> Se o servidor Web já tiver sido lançado, é devolvido um erro.

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

<!-- REF #WebServerClass.stop().Syntax -->**.stop()**<!-- END REF -->


<!-- REF #WebServerClass.stop().Params -->
| Parâmetro | Tipo |  | Descrição                                             |
| --------- | ---- |  | ----------------------------------------------------- |
|           |      |  | Não exige nenhum parâmetro|<!-- END REF -->

|

A função `.stop()` <!-- REF #WebServerClass.stop().Summary -->pára o servidor web em que é aplicado<!-- END REF -->.

Se o servidor web foi iniciado, todas as ligações e processos web são fechados, uma vez terminados os pedidos actualmente tratados. Se o servidor web não foi iniciado, o método não faz nada.
> Esta função repõe as definições web personalizadas definidas para a sessão utilizando o parâmetro ** da função [`.start()`](#start) , se existir.

#### Exemplo

Para parar o servidor Web da base de dados:

```4d
 var $webServer : 4D. WebServer

 $webServer:=WEB Server(Web server database)
 $webServer.stop()
```

<!-- END REF -->
