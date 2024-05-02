---
id: webServerConfig
title: Configuração
---

As configurações do servidor web 4D incluem parâmetros de segurança, portas de escuta, caminhos padrão e várias opções que abrangem todos os recursos do servidor. 4D fornece valores padrão para cada configuração.

## Onde configurar os parâmetros?

Há diferentes maneiras de configurar as definições do servidor web 4D, dependendo do escopo e do servidor que você deseja definir:

| Localização do parâmetro                                                         | Âmbito                                                                 | Servidor Web a ser usado                                       |
| -------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------- |
| [webServer object](webServerObject.md)                                           | Temporário (sessão atual)                           | Qualquer servidor Web, incluindo servidores Web de componentes |
| `WEB SET OPTION` or a `WEB XXX` command                                          | Temporário (sessão atual)                           | Servidor principal                                             |
| [**Settings** dialog box](../settings/web.md) (**Web** pages) | Permanente (todas as sessões, armazenadas no disco) | Servidor principal                                             |

> Alguns parâmetros não estão disponíveis em todos os locais.

## Cache

| Pode ser definido com              | Nome                                                                               | Comentários |
| ---------------------------------- | ---------------------------------------------------------------------------------- | ----------- |
| Caixa de diálogos de configurações | [Configuration page/Use the 4D Web cache](../settings/web.md#use-the-4d-web-cache) |             |
| Caixa de diálogos de configurações | [Configuration page/Page Cache Size](../settings/web.md#page-cache-size)           |             |

Ativa e configura a cache da página Web.

The 4D web server has a cache that allows you to load static pages, GIF images, JPEG images (<512 kb) and style sheets (.css files) in memory, as they are requested. O uso do cache permite que você aumente significativamente o desempenho do servidor da Web ao enviar páginas estáticas. A cache é partilhada entre todos os processos Web. Quando a cache está ativada, o servidor da Web 4D procura primeiro qualquer página estática solicitada pelo navegador na cache. Se encontrar a página, envia-a imediatamente. Se não, 4D carrega a página do disco e a coloca no cache.

You can modify the size of the cache in the **Pages Cache Size** area. O valor que você define depende do número e do tamanho das páginas estáticas do seu site, bem como dos recursos que as máquinas hospedeiras têm à disposição.

> While using your web database, you can check the performance of the cache by using the `WEB GET STATISTICS` command. Se, por exemplo, você notar que a taxa de utilização do cache está próxima a 100%, você pode querer considerar aumentar o tamanho que lhe foi atribuído. As URLs [/4DSTATS] e [/4DHTMLSTATS] permitem que você também obtenha informações sobre o estado do cache.

## Pasta de certificados

| Pode ser definido com | Nome                | Comentários                                                                                                                                            |
| --------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| objeto webServer      | `certificateFolder` | Text property but can be a [`4D.Folder`](API/FolderClass.md) object when used with the _settings_ parameter of the `start()` function. |

Pasta onde estão localizados os arquivos de certificado TLS para o servidor web.

By default with 4D or 4D Server, these files must be placed next to the [project folder](Project/architecture.md#project-folder).

With 4D in remote mode, these files must be located in the local resources folder of the database on the remote machine (see `4D Client Database Folder` paragraph of the `Get 4D folder` command). Deve copiar esses arquivos manualmente na máquina remota.

> TLS certificate files are _key.pem_ (document containing the private encryption key) and _cert.pem_ (document containing the certificate).

## Conjunto de caracteres

| Pode ser definido com              | Nome                                                                                 | Comentários                    |
| ---------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------ |
| objeto webServer                   | `characterSet`                                                                       | Integer MIBEnum ou string Name |
| `WEB SET OPTION`                   | `Web character set`                                                                  | Integer MIBEnum ou string Name |
| Caixa de diálogos de configurações | [Options (II) page/Standard Set](../settings/web.md#standard-set) | Menu pop-up                    |

Define o conjunto de caracteres a serem usados pelo servidor web 4D. O valor padrão realmente depende da linguagem do SO.

> Essa configuração também é usada para gerar relatórios rápidos em formato HTML.

## Lista de cifras

| Pode ser definido com | Nome                                               | Comentários |
| --------------------- | -------------------------------------------------- | ----------- |
| objeto webServer      | [`cipherSuite`](API/WebServerClass.md#ciphersuite) | Text        |

Lista de cifras usada para o protocolo seguro; define a prioridade dos algoritmos de cifra implementados pelo servidor da Web. Pode ser uma sequência de frases separadas por dois pontos (por exemplo, "ECDHE-RSA-AES128-..."). See the [ciphers page](https://www.openssl.org/docs/manmaster/man1/ciphers.html) on the OpenSSL site.

> The default cipher list used by 4D can be modified for the session using the `SET DATABASE PARAMETER` command, in which case the modification applies to the entire 4D application, including the web server, SQL server, client/server connections, as well as the HTTP client and all the 4D commands that make use of the secure protocol.

## Parâmetros CORS

| Pode ser definido com              | Nome                                                                                                                               | Comentários                                                                                                                                             |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objeto webServer                   | [`CORSSettings`](API/WebServerClass.md#corssettings)                                                                               | Coleção de objetos (lista de hosts e métodos permitidos para o serviço CORS)                                                         |
| `WEB SET OPTION`                   | `Web CORS settings`                                                                                                                | Coleção de objetos (lista de hosts e métodos permitidos para o serviço CORS)                                                         |
| Caixa de diálogos de configurações | [Options (II) page/Domain names and HTTP methods allowed](../settings/web.md#domain-names-HTTP-methods-allowed) | Clique no botão [+] para adicionar um nome de domínio permitido e seu método (s) |

Lista de hosts e métodos permitidos para o serviço CORS.

#### Nomes de domínio

Nome de domínio ou endereço IP de onde as páginas externas têm permissão para enviar solicitações de dados ao servidor via CORS. Vários atributos de domínio podem ser adicionados para criar uma lista branca. Várias sintaxes são suportadas:

- 192.168.5.17:8081
- 192.168.5.17
- 192.168.\*
- 192.168.\*:8081
- http://192.168.5.17:8081
- http://\*.myDomain.com
- http://myProject.myDomain.com
- \*.myDomain.com
- myProject.myDomain.com
- \*

#### Métodos HTTP autorizados (propriedade methods)

Método(s) HTTP aceite(s) para o host CORS correspondente. São suportados os seguintes métodos HTTP:

- GET
- HEAD
- POST
- PUT
- DELETE
- OPTIONS
- TRACE
- PATCH

Separar cada método com um ";" (por exemplo: "post;get"). Se methods estiver vazio, null ou indefinido, todos os métodos serão ativados.

#### Veja também

[Enable CORS Service](#enable-cors-service)

## Debug log

| Pode ser definido com | Nome            | Comentários |
| --------------------- | --------------- | ----------- |
| objeto webServer      | `debugLog`      | number      |
| `WEB SET OPTION`      | `Web debug log` | number      |

Status of the HTTP request log file of the web server ([_HTTPDebugLog_nn.txt_](../Debugging/debugLogFiles.md#httpdebuglogtxt), stored in the "Logs" folder of the application -- nn is the file number). É útil para a depuração de problemas relacionados com o servidor Web. Regista cada pedido e cada resposta em modo bruto. Petições inteiras, incluindo cabeçalhos, são registradas; opcionalmente, partes do corpo podem ser registradas também.

| Valor | Parâmetros                     | Descrição                                                                         |
| ----- | ------------------------------ | --------------------------------------------------------------------------------- |
| 0     | wdl disable                    | Os debug logs Web HTTP são desativados                                            |
| 1     | wdl enable without body        | Default is true (enabled).                     |
| 3     | wdl enable with response body  | O log de depuração HTTP da Web está ativado com parte do corpo apenas em resposta |
| 5     | wdl enable with request body   | Web HTTP debug log está ativado com a parte do corpo apenas no pedido             |
| 7     | wdl enable with all body parts | O log de depuração HTTP da Web está ativado com parte do corpo apenas em resposta |

## Defaut Home page

| Pode ser definido com              | Nome                                                                         | Comentários                               |
| ---------------------------------- | ---------------------------------------------------------------------------- | ----------------------------------------- |
| objeto webServer                   | [`defaultHomepage`](API/WebServerClass.md#defaulthomepage)                   | Text                                      |
| `WEB SET HOME PAGE`                |                                                                              | Pode ser diferente para cada processo web |
| Caixa de diálogos de configurações | [Configuration page/Default Home Page](../settings/web.md#default-home-page) |                                           |

Designar uma página inicial padrão para o servidor Web. Esta página pode ser estática ou [semi-dynamic].

Por padrão, quando o servidor web é iniciado pela primeira vez, 4D cria uma página inicial chamada "index.html" e a coloca na pasta raiz HTML. Se você não modificar essa configuração, qualquer navegador que se conectar ao servidor da Web obterá a seguinte página:

![](../assets/en/WebServer/defaultHomePage.png)

Você pode designar outra página inicial padrão inserindo seu nome de caminho.

- The path is relative to the [default HTML root folder](#root-folder).
- O caminho é expresso com a sintaxe POSIX (pastas são separadas por uma barra ("/"))
- O caminho não deve começar nem terminar com uma barra.

Por exemplo, se você quiser que a página inicial padrão seja "MyHome. tm", e está localizado na pasta "Web" (ela própria localizada na pasta raiz padrão HTML), use "Web/MyHome.htm".

If you do not specify any default home page, the `On Web Connection` database method is called. Cabe-lhe a si processar o pedido de forma processual.

## Activar CORS

| Pode ser definido com              | Nome                                                                               | Comentários                                                                 |
| ---------------------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| objeto webServer                   | [`CORSEnabled`](API/WebServerClass.md#corsenabled)                                 | Booleano, true para ativar o CORS (false por padrão)     |
| `WEB SET OPTION`                   | `Web CORS enabled`                                                                 | 0 (desativado, padrão) ou 1 (ativado) |
| Caixa de diálogos de configurações | [Options (II) page/Enable CORS](../settings/web.md#enable-cors) | Não seleccionado por defeito                                                |

O servidor web 4D implementa o compartilhamento de recursos entre origens (CORS) para permitir que páginas web específicas servidas de outro domínio acessem os recursos do aplicativo web atual por meio de chamadas XHR, por exemplo, usando REST. Por razões de segurança, solicitações de "cross-domain" são proibidas no nível do navegador por padrão. Quando ativado, chamadas XHR (por exemplo, Solicitações REST) de páginas da Web fora do domínio podem ser permitidas na sua aplicação (você precisa definir a lista de endereços permitidos na lista de domínio CORS, veja as configurações do CORS abaixo). Neste caso, se um domínio ou método não permitido enviar uma solicitação de um site cruzado, será rejeitado com uma resposta de erro "403 - proibida".

Quando desativado (padrão), todas as solicitações de cruzamento de sites enviadas com CORS são ignoradas.

For more information about CORS, please refer to the [Cross-origin resource sharing page](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) on Wikipedia.

#### Veja também

[CORS Settings](#cors-settings)

## Ativar HTTP

| Pode ser definido com              | Nome                                                             | Comentários |
| ---------------------------------- | ---------------------------------------------------------------- | ----------- |
| objeto webServer                   | [`HTTPEnabled`](API/WebServerClass.md#httpenabled)               | boolean     |
| `WEB SET OPTION`                   | `Web HTTP enabled`                                               |             |
| Caixa de diálogos de configurações | [Configuration page/Enable HTTP](../settings/web.md#enable-http) |             |

Indica se o servidor da Web aceitará ou não conexões não seguras.

## Ativar HTTPS

| Pode ser definido com              | Nome                                                 | Comentários |
| ---------------------------------- | ---------------------------------------------------- | ----------- |
| objeto webServer                   | [`HTTPSEnabled`](API/WebServerClass.md#httpsenabled) | boolean     |
| `WEB SET OPTION`                   | `Web HTTPS enabled`                                  |             |
| Caixa de diálogos de configurações | Página configuração/Habilitar HTTPS                  |             |

Estado da comunicação por HTTPS. This option is described in [this section](Admin/tls.md).

## Ativar HSTS

| Pode ser definido com | Nome                                               | Comentários                                                                 |
| --------------------- | -------------------------------------------------- | --------------------------------------------------------------------------- |
| objeto webServer      | [`HSTSEnabled`](API/WebServerClass.md#hstsenabled) | Booleano, true para ativar HSTS (por padrão é false)     |
| `WEB SET OPTION`      | `Web HSTS enabled`                                 | 0 (desativado, padrão) ou 1 (ativado) |

Estado do HTTP Strict Transport Security (HSTS).

When [HTTPS is enabled](#enable-https), keep in mind that if [HTTP is also enabled](#enable-http), the browser can still switch between HTTPS and HTTP (for example, in the browser URL area, the user can replace "https" by "http"). To forbid http redirections, you can [disable HTTP](#enable-http), however in this case an error message is displayed to client HTTP requests.

O HSTS permite que o servidor web 4D declare que os navegadores só devem interagir com ele por meio de conexões HTTPS seguras. Uma vez ativado, o servidor 4D da web irá adicionar automaticamente informações relacionadas ao HSTS em todos os cabeçalhos de resposta. Navegadores gravarão as informações de HSTS na primeira vez que receberem uma resposta do servidor da web 4D, então quaisquer futuras solicitações HTTP serão automaticamente transformadas em solicitações HTTPS. The length of time this information is stored by the browser is specified with the Web **HSTS max age** setting.

> HSTS requires that [HTTPS is enabled](#enable-https) on the server. [HTTP](#enable-http) must also be enabled to allow client initial connections.

> You can get the current connection mode using the `WEB Is secured connection` command.

## HSTS Max Age

| Pode ser definido com | Nome                                             | Comentários        |
| --------------------- | ------------------------------------------------ | ------------------ |
| objeto webServer      | [`HSTSMaxAge`](API/WebServerClass.md#hstsmaxage) | número em segundos |
| `WEB SET OPTION`      | `Web HSTS max age`                               | número em segundos |

Especifica o tempo máximo (em segundos) em que o HSTS fica ativo para cada nova conexão de cliente. Esta informação é armazenada no lado do Cliente durante a duração especificada.
O valor padrão é 63072000 (2 anos)

> **Warning:** Once HSTS is enabled, client connections will continue to use this mechanism for the specified duration. Quando estiver testando seus aplicativos, é recomendável definir uma curta duração para poder alternar entre os modos de conexão segura e não segura, se necessário.

## Web HTTP compression level

| Pode ser definido com | Nome                                                                 | Comentários                      |
| --------------------- | -------------------------------------------------------------------- | -------------------------------- |
| objeto webServer      | [`HTTPCompressionLevel`](API/WebServerClass.md#httpcompressionlevel) |                                  |
| `WEB SET OPTION`      | `Web HTTP compression level`                                         | Aplica-se à Web e ao Serviço Web |

Nível de compactação para todas as trocas HTTP compactadas para o servidor da Web 4D (solicitações do cliente ou respostas do servidor). Esta configuração permite otimizar as trocas pela velocidade de execução (menos compressão) ou pela compressão (menos velocidade). A escolha de um valor depende do tamanho e do tipo de dados trocados.

Passe de 1 a 9 como valor onde 1 é a compressão mais rápida e 9 mais alta. Pode também passar de -1 para obter um compromisso entre a velocidade e a taxa de compressão. Por padrão, o nível de compressão é 1 (compressão mais rápida).

## Limite de compressão HTTP

| Pode ser definido com | Nome                                                                         | Comentários |
| --------------------- | ---------------------------------------------------------------------------- | ----------- |
| objeto webServer      | [`HTTPCompressionThreshold`](API/WebServerClass.md#httpcompressionthreshold) |             |
| `WEB SET OPTION`      | `Web HTTP compression threshold`                                             |             |

Na estrutura das trocas HTTP otimizadas, o limite de tamanho das solicitações abaixo do qual as trocas não devem ser compactadas. Essa configuração é útil para evitar perder o tempo da máquina ao comprimir pequenas trocas.

Passa o tamanho expresso em bytes como valor. Por defeito, o limite de compressão é definido para 1024 bytes.

## Porta HTTP

| Pode ser definido com              | Nome                                                         | Comentários |
| ---------------------------------- | ------------------------------------------------------------ | ----------- |
| objeto webServer                   | [`HTTPPort`](API/WebServerClass.md#httpport)                 | number      |
| `WEB SET OPTION`                   | `Web port ID`                                                |             |
| Caixa de diálogos de configurações | [Configuration page/HTTP Port](../settings/web.md#http-port) |             |

Número da porta IP (TCP) de escuta para HTTP. Por padrão, 4D publica uma aplicação web na porta Web HTTP normal (porta TCP), que é a porta 80. Se essa porta já for usada por outro serviço da web, você precisa alterar a porta HTTP usada pelo 4D para esse banco de dados.

> In macOS, modifying the HTTP port allows you to start the 4D web server without being the root user of the machine (see [macOS HelperTool](#macos-helpertool)).

Em um navegador da Web, é necessário incluir o número da porta HTTP não padrão no endereço inserido para se conectar ao aplicativo da Web. O endereço deve ter um sufixo constituído por dois pontos seguidos pelo número do porto. Por exemplo, se você estiver usando a porta HTTP número 8080, você irá especificar "123.4.567.89:8080".

> **Warning**: If you use TCP port numbers other than the default numbers (80 for standard HTTP and 443 for HTTPS), be careful not to use port numbers that are defaults for other services that you might want to use simultaneously. Por exemplo, se você também planeja usar o protocolo FTP em seu servidor web, não use a porta TCP 20 e 21, que são as portas padrão para esse protocolo. Os números de portas abaixo de 256 são reservados para serviços conhecidos e números de portas de 256 a 1024 são reservados para serviços específicos originários das plataformas UNIX. Para segurança máxima, especifique o número de portas para além destes intervalos (por exemplo, nos anos 2000 ou 3000).

Se especificar 0, 4D usará o número de porta HTTP 80 por padrão.

## HTTP Trace

| Pode ser definido com | Nome                                           | Comentários                                           |
| --------------------- | ---------------------------------------------- | ----------------------------------------------------- |
| objeto webServer      | [`HTTPTrace`](API/WebServerClass.md#httptrace) | Boolean, padrão = false                               |
| `WEB SET OPTION`      | `Web HTTP TRACE`                               | Integer, 0 por padrão (desativado) |

Ativação do método HTTP TRACE no servidor web 4D. Por motivos de segurança, por padrão o servidor 4D web rejeita solicitações HTTP TRACE com um erro 405. Se necessário, você pode habilitar o método HTTP TRACE, nesse caso o servidor Web 4D responde a solicitações HTTP TRACE com a linha, cabeçalho e corpo do pedido.

## Porta HTTPS

| Pode ser definido com              | Nome                                                           | Comentários |
| ---------------------------------- | -------------------------------------------------------------- | ----------- |
| objeto webServer                   | [`HTTPSPort`](API/WebServerClass.md#httpsport)                 | number      |
| `WEB SET OPTION`                   | `Web HTTPS port ID`                                            |             |
| Caixa de diálogos de configurações | [Configuration page/HTTPS Port](../settings/web.md#https-port) |             |

Número da porta IP de escuta para conexões HTTPS via TLS. Por padrão, o valor é 443 (valor padrão). See also [HTTP Port](#http-port) for information on port numbers.

## Tempo limite do processo inativo

| Pode ser definido com              | Nome                                                                                                        | Comentários |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------- |
| objeto webServer                   | [`inactiveProcessTimeout`](API/WebServerClass.md#inactiveprocesstimeout)                                    |             |
| `WEB SET OPTION`                   | `Web inactive process timeout`                                                                              |             |
| Caixa de diálogos de configurações | [Options (I) page/Inactive Process Timeout](../settings/web.md#inactive-process-timeout) | Slider      |

Duração da vida (em minutos) dos processos inativos associados às sessões. At the end of the timeout, the process is killed on the server, the `On Web Close Process` database method is called, then the session context is destroyed.

Padrão: 480 minutos (passe 0 para repor o valor predefinido)

## Tempo limite da sessão inativa

| Pode ser definido com | Nome                                                                     | Comentários |
| --------------------- | ------------------------------------------------------------------------ | ----------- |
| objeto webServer      | [`inactiveSessionTimeout`](API/WebServerClass.md#inactivesessiontimeout) |             |
| `WEB SET OPTION`      | `Web inactive session timeout`                                           |             |

Duração da vida (em minutos) das sessões inativas (duração definida na cookie). No final do período, o cookie da sessão expira e não é mais enviada pelo cliente HTTP.

Padrão: 480 minutos (passe 0 para repor o valor predefinido)

## Endereço IP de escuta

| Pode ser definido com              | Nome                                                           | Comentários |
| ---------------------------------- | -------------------------------------------------------------- | ----------- |
| objeto webServer                   | [`IPAddressToListen`](API/WebServerClass.md#ipaddresstolisten) |             |
| `WEB SET OPTION`                   | `Web IP address to listen`                                     |             |
| Caixa de diálogos de configurações | [Configuration page/IP Address](../settings/web.md#ip-address) | Menu pop-up |

Sequências de endereços IP nas quais o servidor web 4D receberá solicitações HTTP (4D local e servidor 4D).

By default, no specific address is defined (**Any** value in the Settings dialog box), which means that the server responds to all IP addresses. Quando você nomeia um endereço específico, o servidor responde apenas às solicitações enviadas para este endereço. Essa função é projetada para servidores web 4D localizados em máquinas com vários endereços TCP/IP. É, por exemplo, frequentemente o caso da maioria dos fornecedores de alojamento.

Valores possíveis: Cadeia de endereços IP. Ambos os formatos de string IPv6 (por exemplo, "2001:0db8:0000:0000:ff00:0042:8329") e formatos de string IPv4 (por exemplo, "123.45.67.89") são suportados.

#### Acerca do suporte IPv6

- **No warning when TCP port is occupied**<br/>
  When the server is set to respond on "Any" IP addresses, if the TCP port is being used by another application, this is not indicated when the server is started. Na verdade, o servidor 4D não detecta nenhum erro neste caso porque a porta permanece gratuita no endereço IPv6. No entanto, não é possível acessá-lo usando o endereço IPv4 da máquina, nem através do endereço local: 127.0.0.1.

Se o seu servidor 4D não parecer responder na porta definida, pode testar o endereço [::1] na máquina do servidor (equivalente a 127.0.0.1 para IPv6, adicionar [:portNum] para testar outro número de porta). Se 4D responder, é provável que outro aplicativo esteja usando a porta em IPv4.

- **IPv4-mapped IPv6 addresses**<br/>
  To standardize processing, 4D provides a standard hybrid representation of IPv4 addresses in IPv6. Esses endereços são escritos com um prefixo de 96 bits no formato IPv6, seguido de 32 bits escritos na notação ponto-decimal do IPv4. Por exemplo, ::ffff:192.168.2.34 representa o endereço IPv4 192.168.2.34.

- **Indication of port numbers**<br/>
  Since IPv6 notation uses colons (:), adding port numbers may lead to some confusion, for example:

```code4d
	2001:0DB8::85a3:0:ac1f:8001 // IPv6 address
	2001:0DB8::85a3:0:ac1f:8001:8081 // IPv6 address with port 8081
```

Para evitar essa confusão, recomendamos usar a notação [ ] sempre que você combinar um endereço IPv6 com um número de porta, por exemplo:

```code4d
	[2001:0DB8::85a3:0:ac1f:8001]:8081 //IPv6 address with port 8081
```

## Manter sessão

| Pode ser definido com              | Nome                                                                                                                                                           | Comentários                      |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| objeto webServer                   | [`keepSession`](API/WebServerClass.md#keepsession)                                                                                                             |                                  |
| `WEB SET OPTION`                   | `Web keep session`                                                                                                                                             |                                  |
| Caixa de diálogos de configurações | [Options (I) page/Legacy sessions (single process sessions)](../settings/web.md#legacy-sessions-single-process-sessions) | somente nos projetos convertidos |

Estado do gerenciamento de sessão antigo para o servidor Web 4D (obsoleto).

> Quando essa opção estiver marcada, a opção "Reuse Temporary Contexts" (Reutilizar contextos temporários) é automaticamente marcada (e bloqueada).

## Log Recording

| Pode ser definido com              | Nome                                                                | Comentários |
| ---------------------------------- | ------------------------------------------------------------------- | ----------- |
| objeto webServer                   | [`logRecording`](API/WebServerClass.md#logrecording)                |             |
| `WEB SET OPTION`                   | `Web log recording`                                                 |             |
| Caixa de diálogos de configurações | [Log (type) page](../settings/web.md#log-format) | Menu pop-up |

Starts or stops the recording of requests received by the 4D web server in the _logweb.txt_ file and sets its format. Por padrão, os pedidos não são registados (0/No Log File). When enabled, the _logweb.txt_ file is automatically placed in the Logs folder.

Esta configuração permite que você selecione o formato deste arquivo. Os valores disponíveis são:

| Valor | Nome do formato            | Descrição                                                                                                                                                                                                                                                |
| ----- | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0     | Nenhum arquivo de registro | Por padrão                                                                                                                                                                                                                                               |
| 1     | Registo em formato CLF     | Common Log Format - Each line of the file represents a request, such as: `host rfc931 user [DD/MMM/YYYY:HH:MM:SS] "request" state length` - Each field is separated by a space and each line ends by the CR/LF sequence. |
| 2     | Registo em formato DLF     | Formato de Log Combinado - Similar ao formato CLF, mas adiciona dois campos HTTP adicionais no final de cada solicitação: Referer e User-agent.                                                                          |
| 3     | Registo em formato ELF     | Extended Log Format - A ser personalizado na caixa de diálogo das Propriedades                                                                                                                                                                           |
| 4     | Registo em formato WLF     | WebStar Log Format - Para ser personalizado na caixa de diálogo Propriedades                                                                                                                                                                             |

> Formats 3 and 4 are custom formats whose contents must be set beforehand in the [Settings dialog box](../settings/web.md#log-format). Se você usar um destes formatos sem que nenhum dos seus campos tenha sido selecionado nesta página, o arquivo de log não será gerado.

## Processos Web em simultâneo máximo

| Pode ser definido com              | Nome                                                                                                                        | Comentários |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ----------- |
| objeto webServer                   | [`maxConcurrentProcesses`](API/WebServerClass.md#maxconcurrentprocesses)                                                    |             |
| `WEB SET OPTION`                   | `Web max concurrent processes`                                                                                              |             |
| Caixa de diálogos de configurações | [Options (I) page/Maximum Concurrent Web Processes](../settings/web.md#maximum-concurrent-web-processes) |             |

Strictly high limit of concurrent web processes that can be simultaneously open on the server when **no sessions** or **legacy sessions** are used (**scalable sessions** support an [unlimited number](sessions.md) of preemptive processes). Esse parâmetro permite evitar a saturação do servidor como resultado de um grande número de solicitações. When the maximum number of concurrent Web processes (minus one) is reached, 4D no longer creates new processes and sends the HTTP status `503 - Service Unavailable` to all new requests.

Por padrão, o valor é 100. Pode definir o número entre 10 e 32000.

## Tamanho máximo do pedido

| Pode ser definido com | Nome                                                     | Comentários |
| --------------------- | -------------------------------------------------------- | ----------- |
| objeto webServer      | [`maxRequestSize`](API/WebServerClass.md#maxrequestsize) |             |
| `WEB SET OPTION`      | `Web maximum requests size`                              |             |

Tamanho máximo (em bytes) das solicitações HTTP de entrada (POST) que o servidor web está autorizado a processar. Por padrão, o valor é 2 000 000, ou seja, um pouco menos de 2 MB. Passar o valor máximo (2 147 483 648) significa que, na prática, nenhum limite é definido.

Este limite é utilizado para evitar a saturação do servidor web devido a pedidos recebidos demasiado grandes. Este limite é utilizado para evitar a saturação do servidor web devido a pedidos recebidos demasiado grandes.

Valores possíveis: 500 000 a 2 147 483 648.

## Número máximo de sessões

| Pode ser definido com | Nome                                               | Comentários |
| --------------------- | -------------------------------------------------- | ----------- |
| objeto webServer      | [`maxSessions`](API/WebServerClass.md#maxsessions) |             |
| `WEB SET OPTION`      | `Web max sessions	`                                |             |

Número máximo de sessões simultâneas. When you reach the limit set, the oldest session is closed (and `On Web Close Process` database method is called) if the Web server needs to create a new one. The number of simultaneous sessions cannot exceed the [maximum number of Web processes](#maximum-concurrent-web-processes) (100 by default).

Valor padrão: 100 (passe 0 para restaurar o valor padrão).

## Versão TLS mínima

| Pode ser definido com | Nome                                                   | Comentários |
| --------------------- | ------------------------------------------------------ | ----------- |
| objeto webServer      | [`minTLSVersion`](API/WebServerClass.md#mintlsversion) | number      |

Versão mínima de TLS aceita para ligações. As tentativas de ligação de clientes que suportam apenas versões abaixo do mínimo serão rejeitadas.

Valores possíveis:

- 1 = TLSv1_0
- 2 = TLSv1_1
- 3 = TLSv1_2 (padrão)
- 4 = TLSv1_3

Se modificado, o servidor deve ser reiniciado para utilizar o novo valor.

> The minimum TLS version used by 4D can be modified for the session using the `SET DATABASE PARAMETER` command, in which case the modification applies to the entire 4D application, including the web server, SQL server and client/server connections.

## Nome

| Pode ser definido com | Nome                                 | Comentários |
| --------------------- | ------------------------------------ | ----------- |
| objeto webServer      | [`name`](API/WebServerClass.md#name) |             |

Nome da aplicação do servidor web. Útil quando são iniciados servidores Web de componentes.

## Versão OpenSSL

| Pode ser definido com | Nome                                                     | Comentários     |
| --------------------- | -------------------------------------------------------- | --------------- |
| objeto webServer      | [`openSSLVersion`](API/WebServerClass.md#opensslversion) | Somente leitura |

Versão da biblioteca OpenSSL utilizada.

## Perfect Forward Secrecy

| Pode ser definido com | Nome                                                                   | Comentários             |
| --------------------- | ---------------------------------------------------------------------- | ----------------------- |
| objeto webServer      | [`perfectForwardSecrecy`](API/WebServerClass.md#perfectforwardsecrecy) | Booleano, só de leitura |

True if PFS is available on the web server (see [TLS](Admin/tls.md#perfect-forward-secrecy-pfs) section).

## Reutilizar contextos temporários (em modo remoto)

| Pode ser definido com              | Nome                                                                                                                | Comentários |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------- |
| Caixa de diálogos de configurações | [Options (I) page/Maximum Concurrent Web Processes](../settings/web.md#reuse-temporary-contexts) |             |

> This option is only available when **No sessions** option is checked.

Permite otimizar a operação do 4D Web Server no modo remoto, reutilizando processos da Web criados para processar solicitações anteriores da Web. De fato, o servidor web em 4D precisa de um processo web específico para lidar com cada solicitação web; no modo remoto, quando necessário, esse processo se conecta à máquina 4D Server para acessar os dados e o mecanismo de banco de dados. Assim, ele gera um contexto temporário usando suas próprias variáveis, seleções, etc. Quando o pedido tiver sido tratado, este processo é encerrado.

When the **Reuse Temporary Contexts** option is checked, in remote mode 4D maintains the specific web processes and reuses them for subsequent requests. Removendo o estágio de criação do processo, o desempenho do servidor web é melhorado.

Em troca, você deve se certificar neste caso de inicializar sistematicamente as variáveis usadas em métodos 4D para evitar obter resultados incorretos. Da mesma forma, é necessário apagar quaisquer seleções ou registros atuais definidos durante a solicitação anterior.

> Esta opção só tem um efeito com um servidor web 4D em modo remoto. Com um 4D em modo local, todos os processos da Web (exceto os processos de sessão) são eliminados após seu uso.

## Robots.txt

Certain robots (query engines, spiders...) scroll through web servers and static pages. Se não quiser que os robôs acessem todo o seu site, você pode definir quais URLs eles não podem acessar.

Para isso, coloque o arquivo ROBOTS.TXT na raiz do servidor. Este ficheiro deve ser estruturado da seguinte forma:

```4d
   User-Agent: <name>
   Disallow: <URL> or <beginning of the URL>
```

Por exemplo:

```4d
   User-Agent: *
   Disallow: /4D
   Disallow: /%23%23
   Disallow: /GIFS/
```

- "User-Agent: \*" - todos os robôs são afetados.
- "Disallow: /4D" - os robôs não têm permissão para acessar URLs que começam com /4D.
- "Disallow: /%23%23" - os robôs não têm permissão para acessar URLs que começam com /%23%23.
- "Disallow: /GIFS/' - os robôs não têm permissão para acessar a pasta /GIFS/ ou suas subpastas.

Outro exemplo

```code4d
   User-Agent: *
   Disallow: /
```

Neste caso, os robots não estão autorizados a aceder a todo o sítio.

## Pasta raiz

| Pode ser definido com              | Nome                                                                         | Comentários                                                                                                                           |
| ---------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| objeto webServer                   | [`rootFolder`](API/WebServerClass.md#rootfolder)                             | Text property but can be a [`4D.Folder`](API/FolderClass.md) object when used with the _settings_ parameter of the `start()` function |
| `WEB SET ROOT FOLDER`              |                                                                              |                                                                                                                                       |
| Caixa de diálogos de configurações | [Configuration page/Default HTML Root](../settings/web.md#default-html-root) |                                                                                                                                       |

Caminho da pasta raiz do servidor web, ou seja, a pasta na qual 4D procurará as páginas HTML estáticas e semidinâmicas, imagens, etc., para enviar aos navegadores. O caminho é formatado no caminho completo POSIX. O servidor da Web precisará ser reiniciado para que a nova pasta raiz seja levada em consideração.

Além disso, a pasta raiz do HTML define, no disco rígido do servidor da Web, o nível hierárquico acima do qual os arquivos não poderão ser acessados. Se um URL solicitado ou um comando 4D tentar acessar um arquivo localizado acima da pasta raiz HTML, será retornado um erro indicando que o arquivo não foi encontrado.

By default, 4D defines a HTML Root folder named **WebFolder**. Se ela ainda não existir, a pasta raiz HTML será fisicamente criada no disco no momento em que o servidor Web for iniciado pela primeira vez. A pasta raiz é criada:

- with 4D (local) and 4D Server, at the same level as the [Project folder](Project/architecture.md#project-folder).
- com 4D em modo remoto, na pasta de recursos locais.

Você pode designar outra pasta raiz HTML padrão inserindo seu caminho.

- The path is relative to the [Project folder](Project/architecture.md#project-folder) (4D local and 4D Server) or to the folder containing the 4D application or software package (4D in remote mode).
- O caminho é expresso com a sintaxe POSIX (pastas são separadas por uma barra ("/"))
- Para "subir" um nível na hierarquia de pastas, digite "..." (dois pontos) antes do nome da pasta
- O caminho não deve começar com uma barra (exceto se você quiser que a pasta raiz HTML seja a pasta remota Project ou 4D, mas que o acesso às pastas acima seja proibido; nesse caso, você pode passar "/" como a pasta raiz).

Por exemplo, se você quiser que a pasta raiz HTML seja a subpasta "Web" na pasta "MyWebApp", digite "MyWebApp/Web".

> Quando a pasta raiz do HTML é modificada, o cache é limpo para não armazenar arquivos cujo acesso é restrito.

## Sessões escaláveis

| Pode ser definido com              | Nome                                                                                                                                                             | Comentários |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| objeto webServer                   | [`scalableSession`](API/WebServerClass.md#scalablesession)                                                                                                       |             |
| `WEB SET OPTION`                   | `Sessão escalável Web`                                                                                                                                           |             |
| Caixa de diálogos de configurações | [Options (I) page/Scalable sessions (multi-process sessions)](../settings/web.md#scalable-sessions-multi-process-sessions) |             |

Session management enabling status for the 4D web server. Web server sessions are detailed in the [User sessions](sessions.md) page.

## Domínio do cookie de sessão

| Pode ser definido com | Nome                                                               | Comentários |
| --------------------- | ------------------------------------------------------------------ | ----------- |
| objeto webServer      | [`sessionCookieDomain`](API/WebServerClass.md#sessioncookiedomain) |             |
| `WEB SET OPTION`      | `Web session cookie domain`                                        |             |

Valor do campo "domain" do cookie de sessão. Útil para controlar o âmbito dos cookies de sessão. Se definir, por exemplo, o valor "/\*.4d.fr" para este selector, o cliente só enviará um cookie quando o pedido for dirigido ao domínio ".4d.fr", o que exclui os servidores que hospedam dados estáticos externos.

## Nome do cookie de sessão

| Pode ser definido com | Nome                                                           | Comentários |
| --------------------- | -------------------------------------------------------------- | ----------- |
| objeto webServer      | [`sessionCookieName`](API/WebServerClass.md#sessioncookiename) |             |
| `WEB SET OPTION`      | `Web session cookie name`                                      |             |

Nome do cookie utilizado para guardar o ID da sessão. Predefinição = "4DSID".

## Caminho do cookie de sessão

| Pode ser definido com | Nome                                                           | Comentários |
| --------------------- | -------------------------------------------------------------- | ----------- |
| objeto webServer      | [`sessionCookiePath`](API/WebServerClass.md#sessioncookiepath) |             |
| `WEB SET OPTION`      | `Web session cookie path`                                      |             |

campo "caminho" do cookie da sessão. Utilizado para controlar o alcance dos cookies da sessão. Se definir, por exemplo, o valor "/4DACTION" para este selector, o cliente só enviará um cookie para pedidos dinâmicos que comecem por 4DACTION, e não para imagens, páginas estáticas, etc.

## Session Cookie SameSite

| Pode ser definido com | Nome                                                                   | Comentários |
| --------------------- | ---------------------------------------------------------------------- | ----------- |
| objeto webServer      | [`sessionCookieSameSite`](API/WebServerClass.md#sessioncookiesamesite) |             |

Value of the `SameSite` attribute value of the session cookie. This attribute allows you to declare if your cookie should be restricted to a first-party or same-site context, as a protection from some cross-site request forgery ([CSRF](https://developer.mozilla.org/en-US/docs/Glossary/CSRF)) attacks.

> For a detailed description of the `SameSite` attribute, please refer to the [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) or [this web.dev page](https://web.dev/samesite-cookies-explained/).

Há três valores disponíveis:

- "Strict" (default `SameSite` attribute value for 4D session cookies): cookies will only be sent in the first-party context, i.e. context matching the domain of the current site, and never to third-party websites.
- "Laxos": Os cookies não são enviados em solicitações entre sites (por exemplo, para carregar imagens ou quadros em um site de terceiros), mas são enviados quando um usuário está navegando para o site de origem (ou seja, ele segue um link).
- "None": Cookies são enviados em todos os contextos, ou seja, nas respostas para solicitações de primeira e de cruzada de origem. When "None" value is used, the cookie `Secure` attribute must also be set (or the cookie will be blocked).

The `Secure` attribute value of the session cookie is automatically set to "True" if the connection is HTTPS (whatever the `SameSite` attribute value).

> It is not recommended to set `SameSite=None` on a HTTP server since the `Secure` attribute will be missing (used in HTTPS only) and cookies will be blocked.

## Utilizar processos preemptivos

| Pode ser definido com              | Nome                                                                                                                | Comentários |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------- |
| Caixa de diálogos de configurações | [Options (I) page/Maximum Concurrent Web Processes](../settings/web.md#use-preemptive-processes) |             |

This option enables the preemptive mode for your application's web server code when **No sessions** option is selected (the preemptive mode is always enabled with **scalable sessions**). When this option is checked in this context, the 4D compiler will automatically evaluate the thread-safety property of each piece of [web-related code](preemptiveWeb.md#thread-safety-of-4d-web-code) and return errors in case of incompatibility.

## Parâmetros obsoletos

As configurações a seguir ainda são compatíveis, mas dependem de recursos ou tecnologias obsoletos. Em geral, é recomendável manter os valores padrão.

#### Allow database Access through 4DSYNC URLs

This option controls the support of HTTP synchronization requests containing deprecated _/4DSYNC_ URLs.

#### Validação do endereço IP da sessão

> This option is not not available in [scalable sessions mode](WebServer/sessions.md) (there is no validation).

Estado de validação de endereço IP para cookies de sessão. Por motivos de segurança por padrão o servidor web 4D verifica o endereço IP de cada solicitação contendo um cookie de sessão e rejeita-o se este endereço não corresponde ao endereço IP usado para criar o cookie. Em algumas aplicações específicas, poderá querer desactivar esta validação e aceitar cookies de sessão, mesmo quando os seus endereços IP não correspondem. Por exemplo, quando os dispositivos móveis mudam entre redes Wi-Fi e 4G/5G, seu endereço IP será alterado. Neste caso, você deve passar 0 nesta opção para permitir que os clientes possam continuar usando suas sessões da Web, mesmo quando o endereço IP mudar. Observe que essa configuração reduz o nível de segurança de seu aplicativo. Quando é modificado, essa configuração é eficaz imediatamente (não é necessário reiniciar o servidor HTTP).

#### Enviar diretamente caracteres expandidos

Quando essa opção está marcada, o servidor da Web envia caracteres estendidos "como estão" em páginas semidinâmicas, sem convertê-los em entidades HTML. Essa opção mostrou um aumento de velocidade na maioria dos sistemas operacionais estrangeiros (especialmente o sistema japonês).

#### Ligações Keep-Alive

O servidor web 4D pode usar conexões persistentes. A opção keep-alive permite que você mantenha uma única conexão TCP aberta para o conjunto de trocas entre o navegador da Web e o servidor para economizar recursos do sistema e otimizar as transferências.

The **Use Keep-Alive Connections** option enables or disables keep-alive TCP connections for the web server. Esta opção está activada por padrão. Na maioria dos casos, é recomendável manter essa opção marcada, pois ela acelera as trocas. Se o navegador da Web não suportar a conexão keep alive, o 4D Web Server mudará automaticamente para HTTP/1.0.

A função keep-alive do 4D Web Server diz respeito a todas as conexões TCP/IP (HTTP, HTTPS). Observe, entretanto, que as conexões keep-alive nem sempre são usadas para todos os processos da Web 4D.

Em alguns casos, outras funções internas otimizadas podem ser invocadas. As ligações persistentes são úteis principalmente para páginas estáticas.

Duas opções permitem que você defina como funcionam as conexões persistentes:

- **Number of requests by connection**: Allows you to set the maximum number of requests and responses able to travel over a connection keep alive. Limiting the number of requests per connection allows you to prevent server flooding due to a large number of incoming requests (a technique used by hackers).<p>
  The default value (100) can be increased or decreased depending on the resources of the machine hosting the 4D Web Server.</p>

- **Timeout**: This value defines the maximum wait period (in seconds) during which the web server maintains an open TCP connection without receiving any requests from the web browser. Once this period is over, the server closes the connection.<p>
  If the web browser sends a request after the connection is closed, a new TCP connection is automatically created. This operation is not visible for the user.</p>
