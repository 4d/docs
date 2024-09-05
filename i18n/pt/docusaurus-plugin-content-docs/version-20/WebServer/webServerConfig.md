---
id: webServerConfig
title: Configuração
---

As configurações do servidor web 4D incluem parâmetros de segurança, portas de escuta, caminhos padrão e várias opções que abrangem todos os recursos do servidor. 4D fornece valores padrão para cada configuração.


## Onde configurar os parâmetros?

Há diferentes maneiras de configurar as definições do servidor web 4D, dependendo do escopo e do servidor que você deseja definir:

| Localização do parâmetro                 | Âmbito                                              | Servidor Web a ser usado                                       |
| ---------------------------------------- | --------------------------------------------------- | -------------------------------------------------------------- |
| [objeto webServer](webServerObject.md)   | Temporário (sessão atual)                           | Qualquer servidor Web, incluindo servidores Web de componentes |
| `WEB SET OPTION` ou um comando `WEB XXX` | Temporário (sessão atual)                           | Servidor principal                                             |
| **Settings** dialog box (**Web** pages)  | Permanente (todas as sessões, armazenadas no disco) | Servidor principal                                             |

> Alguns parâmetros não estão disponíveis em todos os locais.

## Cache

| Pode ser definido com              | Nome                                                                             | Comentários |
| ---------------------------------- | -------------------------------------------------------------------------------- | ----------- |
| Caixa de diálogos de configurações | [Options (I) page/Use the 4D Web cache](../settings/web.md#use-the-4d-web-cache) |             |
| Caixa de diálogos de configurações | [Options (I) page/Page Cache Size](../settings/web.md#page-cache-size)           |             |

Ativa e configura a cache da página Web.

O servidor web 4D tem um cache que permite carregar páginas estáticas, imagens GIF, imagens JPEG (<512 kb) e folhas de estilo (arquivos .css) na memória, à medida que forem solicitadas. O uso do cache permite que você aumente significativamente o desempenho do servidor da Web ao enviar páginas estáticas. A cache é partilhada entre todos os processos Web. Quando a cache está ativada, o servidor da Web 4D procura primeiro qualquer página estática solicitada pelo navegador na cache. Se encontrar a página, envia-a imediatamente. Se não, 4D carrega a página do disco e a coloca no cache.

Você pode modificar o tamanho da cache na área **Pages Cache Size** . O valor que você define depende do número e do tamanho das páginas estáticas do seu site, bem como dos recursos que as máquinas hospedeiras têm à disposição.
> Ao usar o banco de dados da Web, você pode verificar o desempenho da cache usando o comando `WEB GET STATISTICS` . Se, por exemplo, você notar que a taxa de utilização do cache está próxima a 100%, você pode querer considerar aumentar o tamanho que lhe foi atribuído. As URLs [/4DSTATS] e [/4DHTMLSTATS] permitem que você também obtenha informações sobre o estado do cache.


## Pasta de certificados

| Pode ser definido com | Nome                | Comentários                                                                                                                                   |
| --------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| objeto webServer      | `certificateFolder` | Propriedade de texto, mas pode ser um objeto [`4D. Folder`](API/FolderClass.md)  quando usado com o parâmetro *settings* da função `start()`. |

Pasta onde estão localizados os arquivos de certificado TLS para o servidor web.

Por padrão, com o 4D ou o 4D Server, esses arquivos devem ser colocados ao lado da pasta do projeto [](Project/architecture.md#project-folder).

Com o 4D em modo remoto, esses arquivos devem estar localizados na pasta de recursos locais do banco de dados na máquina remota (consulte `4D Client Database Folder` parágrafo do comando `Get 4D folder`). Deve copiar esses arquivos manualmente na máquina remota.

> Os arquivos de certificado TLS são *key.pem* (documento que contém a chave de criptografia privada) e *cert.pem* (documento que contém o certificado).


## Conjunto de caracteres

| Pode ser definido com              | Nome                                                                     | Comentários                    |
| ---------------------------------- | ------------------------------------------------------------------------ | ------------------------------ |
| objeto webServer                   | `characterSet`                                                           | Integer MIBEnum ou string Name |
| `WEB SET OPTION`                   | `Web character set`                                                      | Integer MIBEnum ou string Name |
| Caixa de diálogos de configurações | [Página Opções (II) /Conjunto standard](../settings/web.md#standard-set) | Menu pop-up                    |

Define o conjunto de caracteres a serem usados pelo servidor web 4D. O valor padrão realmente depende da linguagem do SO.
> Essa configuração também é usada para gerar relatórios rápidos em formato HTML.


## Lista de criptogramas

| Pode ser definido com | Nome                                               | Comentários |
| --------------------- | -------------------------------------------------- | ----------- |
| objeto webServer      | [`cipherSuite`](API/WebServerClass.md#ciphersuite) | Text        |

Lista de criptogramas  usada para o protocolo seguro; define a prioridade dos algoritmos de cifra implementados pelo servidor da Web. Pode ser uma sequência de frases separadas por dois pontos (por exemplo, "ECDHE-RSA-AES128-..."). Veja a página cifras [](https://www.openssl.org/docs/manmaster/man1/ciphers.html) no site OpenSSL.

> A lista de criptogramas padrão usada por 4D pode ser modificada para a sessão usando o comando `SET DATABASE PARAMETER` . Nesse caso, a modificação se aplica a todo o aplicativo 4D, incluindo o servidor web, o servidor SQL, as conexões cliente/servidor, bem como o cliente HTTP e todos os comandos 4D que usam o protocolo seguro.

## Parâmetros CORS

| Pode ser definido com              | Nome                                                                                                                  | Comentários                                                                      |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| objeto webServer                   | [`CORSSettings`](API/WebServerClass.md#corssettings)                                                                  | Coleção de objetos (lista de hosts e métodos permitidos para o serviço CORS)     |
| `WEB SET OPTION`                   | `Web CORS settings`                                                                                                   | Coleção de objetos (lista de hosts e métodos permitidos para o serviço CORS)     |
| Caixa de diálogos de configurações | [Opções (II) página/Nomes de domínio e métodos HTTP permitidos](../settings/web.md#domain-names-HTTP-methods-allowed) | Clique no botão [+] para adicionar um nome de domínio permitido e seu método (s) |

Lista de hosts e métodos permitidos para o serviço CORS.

#### Nomes de domínio

Nome de domínio ou endereço IP de onde as páginas externas têm permissão para enviar solicitações de dados ao servidor via CORS. Vários atributos de domínio podem ser adicionados para criar uma lista branca. Várias sintaxes são suportadas:

- 192.168.5.17:8081
- 192.168.5.17
- 192.168.*
- 192.168.*:8081
- http://192.168.5.17:8081
- http://*.myDomain.com
- http://myProject.myDomain.com
- *.myDomain.com
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

[Ativar CORS](#enable-cors-service)



## Registro de depuração

| Pode ser definido com | Nome            | Comentários |
| --------------------- | --------------- | ----------- |
| objeto webServer      | `debugLog`      | number      |
| `WEB SET OPTION`      | `Web debug log` | number      |

Status of the HTTP request log file of the web server (HTTPDebugLog_nn.txt, stored in the "Logs" folder of the application -- nn is the file number). É útil para a depuração de problemas relacionados com o servidor Web. Regista cada pedido e cada resposta em modo bruto. Petições inteiras, incluindo cabeçalhos, são registradas; opcionalmente, partes do corpo podem ser registradas também.

| Valor | Parâmetros                     | Descrição                                                                         |
| ----- | ------------------------------ | --------------------------------------------------------------------------------- |
| 0     | wdl disable                    | Os debug logs Web HTTP são desativados                                            |
| 1     | wdl enable without body        | Default is true (enabled).                                                        |
| 3     | wdl enable with response body  | O log de depuração HTTP da Web está ativado com parte do corpo apenas em resposta |
| 5     | wdl enable with request body   | Web HTTP debug log está ativado com a parte do corpo apenas no pedido             |
| 7     | wdl enable with all body parts | O log de depuração HTTP da Web está ativado com parte do corpo apenas em resposta |


## Defaut Home page

| Pode ser definido com              | Nome                                                                              | Comentários                               |
| ---------------------------------- | --------------------------------------------------------------------------------- | ----------------------------------------- |
| objeto webServer                   | [`defaultHomepage`](API/WebServerClass.md#defaulthomepage)                        | Text                                      |
| `WEB SET HOME PAGE`                |                                                                                   | Pode ser diferente para cada processo web |
| Caixa de diálogos de configurações | [Página configuração/Página inicial padrão](../settings/web.md#default-home-page) |                                           |

Designar uma página inicial padrão para o servidor Web. Esta página pode ser estática ou [semi-dynamic].

Por padrão, quando o servidor web é iniciado pela primeira vez, 4D cria uma página inicial chamada "index.html" e a coloca na pasta raiz HTML. Se você não modificar essa configuração, qualquer navegador que se conectar ao servidor da Web obterá a seguinte página:

![](../assets/en/WebServer/defaultHomePage.png)

Você pode designar outra página inicial padrão inserindo seu nome de caminho.

- O caminho é relativo à pasta raiz [padrão HTML](#root-folder).
- O caminho é expresso com a sintaxe POSIX (pastas são separadas por uma barra ("/"))
- O caminho não deve começar nem terminar com uma barra.

Por exemplo, se você quiser que a página inicial padrão seja "MyHome. tm", e está localizado na pasta "Web" (ela própria localizada na pasta raiz padrão HTML), use "Web/MyHome.htm".

Se não especificar nenhuma página inicial padrão, o método da base de dados `Conexão Web` é chamado. Cabe-lhe a si processar o pedido de forma processual.

## Ativar CORS

| Pode ser definido com              | Nome                                                               | Comentários                                           |
| ---------------------------------- | ------------------------------------------------------------------ | ----------------------------------------------------- |
| objeto webServer                   | [`CORSEnabled`](API/WebServerClass.md#corsenabled)                 | Booleano, true para ativar o CORS (false por defeito) |
| `WEB SET OPTION`                   | `Web CORS enabled`                                                 | 0 (desativado, padrão) ou 1 (ativado)                 |
| Caixa de diálogos de configurações | [Página Options (II)/Activar CORS](../settings/web.md#enable-cors) | Não seleccionado por defeito                          |

O servidor web 4D implementa o compartilhamento de recursos entre origens (CORS) para permitir que páginas web específicas servidas de outro domínio acessem os recursos do aplicativo web atual por meio de chamadas XHR, por exemplo, usando REST. Por razões de segurança, solicitações de "cross-domain" são proibidas no nível do navegador por padrão. Quando ativado, chamadas XHR (por exemplo, Solicitações REST) de páginas da Web fora do domínio podem ser permitidas na sua aplicação (você precisa definir a lista de endereços permitidos na lista de domínio CORS, veja as configurações do CORS abaixo). Neste caso, se um domínio ou método não permitido enviar uma solicitação de um site cruzado, será rejeitado com uma resposta de erro "403 - proibida".

Quando desativado (padrão), todas as solicitações de cruzamento de sites enviadas com CORS são ignoradas.

Para obter mais informações sobre o CORS, consulte a [página de compartilhamento de recursos entre origens](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) na Wikipédia.

#### Veja também
[Parâmetros CORS](#cors-settings)

## Ativar HTTP

| Pode ser definido com              | Nome                                                       | Comentários |
| ---------------------------------- | ---------------------------------------------------------- | ----------- |
| objeto webServer                   | [`HTTPEnabled`](API/WebServerClass.md#httpenabled)         | boolean     |
| `WEB SET OPTION`                   | `Web HTTP enabled`                                         |             |
| Caixa de diálogos de configurações | [Configuração/Ativar HTTP](../settings/web.md#enable-http) |             |

Indica se o servidor da Web aceitará ou não conexões não seguras.


## Ativar HTTPS

| Pode ser definido com              | Nome                                                 | Comentários |
| ---------------------------------- | ---------------------------------------------------- | ----------- |
| objeto webServer                   | [`HTTPSEnabled`](API/WebServerClass.md#httpsenabled) | boolean     |
| `WEB SET OPTION`                   | `Web HTTPS enabled`                                  |             |
| Caixa de diálogos de configurações | Página configuração/Habilitar HTTPS                  |             |

Estado da comunicação por HTTPS. Esta opção está descrita em [esta seção](Admin/tls.md).


## Ativar HSTS

| Pode ser definido com | Nome                                               | Comentários                                          |
| --------------------- | -------------------------------------------------- | ---------------------------------------------------- |
| objeto webServer      | [`HSTSEnabled`](API/WebServerClass.md#hstsenabled) | Booleano, true para ativar HSTS (por padrão é false) |
| `WEB SET OPTION`      | `Web HSTS enabled`                                 | 0 (desativado, padrão) ou 1 (ativado)                |

Estado do HTTP Strict Transport Security (HSTS).

Quando [HTTPS estiver ativado](#enable-https), lembre-se de que se [HTTP também estiver ativado](#enable-http), o navegador ainda poderá alternar entre HTTPS e HTTP (por exemplo, na área de URL do navegador, o usuário pode substituir "https" por "http"). Para proibir redirecionamentos http, você pode [desativar o HTTP](#enable-http), mas, nesse caso, uma mensagem de erro é exibida nas solicitações HTTP do cliente.

O HSTS permite que o servidor web 4D declare que os navegadores só devem interagir com ele por meio de conexões HTTPS seguras. Uma vez ativado, o servidor 4D da web irá adicionar automaticamente informações relacionadas ao HSTS em todos os cabeçalhos de resposta. Navegadores gravarão as informações de HSTS na primeira vez que receberem uma resposta do servidor da web 4D, então quaisquer futuras solicitações HTTP serão automaticamente transformadas em solicitações HTTPS. O tempo que esta informação é armazenada pelo navegador é especificado com a configuração da Web **HSTS idade máxima**.

> O HSTS exige que o [HTTPS esteja ativado](#enable-https) no servidor. [O HTTP](#enable-http) também deve ser ativado para permitir conexões iniciais do cliente.

> Você pode obter o modo de conexão atual usando o comando `WEB Is secured connection` .


## HSTS Max Age

| Pode ser definido com | Nome                                             | Comentários        |
| --------------------- | ------------------------------------------------ | ------------------ |
| objeto webServer      | [`HSTSMaxAge`](API/WebServerClass.md#hstsmaxage) | número em segundos |
| `WEB SET OPTION`      | `Web HSTS max age`                               | número em segundos |

Especifica o tempo máximo (em segundos) em que o HSTS fica ativo para cada nova conexão de cliente. Esta informação é armazenada no lado do Cliente durante a duração especificada. O valor padrão é 63072000 (2 anos)

> **Aviso:** Uma vez que o HSTS estiver ativado, as conexões do cliente continuarão a usar este mecanismo para a duração especificada. Quando estiver testando seus aplicativos, é recomendável definir uma curta duração para poder alternar entre os modos de conexão segura e não segura, se necessário.





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

| Pode ser definido com              | Nome                                                           | Comentários |
| ---------------------------------- | -------------------------------------------------------------- | ----------- |
| objeto webServer                   | [`HTTPPort`](API/WebServerClass.md#httpport)                   | number      |
| `WEB SET OPTION`                   | `Web port ID`                                                  |             |
| Caixa de diálogos de configurações | [Página Configuração/Porta HTTP](../settings/web.md#http-port) |             |

Número da porta IP (TCP) de escuta para HTTP. Por padrão, 4D publica uma aplicação web na porta Web HTTP normal (porta TCP), que é a porta 80. Se essa porta já for usada por outro serviço da web, você precisa alterar a porta HTTP usada pelo 4D para esse banco de dados.

> No macOS, a modificação da porta HTTP permite iniciar o servidor web 4D sem ser o usuário raiz da máquina (consulte [macOS HelperTool](#macos-helpertool)).

Em um navegador da Web, é necessário incluir o número da porta HTTP não padrão no endereço inserido para se conectar ao aplicativo da Web. O endereço deve ter um sufixo constituído por dois pontos seguidos pelo número do porto. Por exemplo, se você estiver usando a porta HTTP número 8080, você irá especificar "123.4.567.89:8080".
> **Aviso**: Se você usar números de porta TCP diferentes dos números padrão (80 para HTTP padrão e 443 para HTTPS), tome cuidado para não usar números de porta que sejam padrão para outros serviços que você possa querer usar simultaneamente. Por exemplo, se você também planeja usar o protocolo FTP em seu servidor web, não use a porta TCP 20 e 21, que são as portas padrão para esse protocolo. Os números de portas abaixo de 256 são reservados para serviços conhecidos e números de portas de 256 a 1024 são reservados para serviços específicos originários das plataformas UNIX. Para segurança máxima, especifique o número de portas para além destes intervalos (por exemplo, nos anos 2000 ou 3000).

Se especificar 0, 4D usará o número de porta HTTP 80 por padrão.


## HTTP Trace

| Pode ser definido com | Nome                                           | Comentários                        |
| --------------------- | ---------------------------------------------- | ---------------------------------- |
| objeto webServer      | [`HTTPTrace`](API/WebServerClass.md#httptrace) | Boolean, padrão = false            |
| `WEB SET OPTION`      | `Web HTTP TRACE`                               | Integer, 0 por padrão (desativado) |

Ativação do método HTTP TRACE no servidor web 4D. Por motivos de segurança, por padrão o servidor 4D web rejeita solicitações HTTP TRACE com um erro 405. Se necessário, você pode habilitar o método HTTP TRACE, nesse caso o servidor Web 4D responde a solicitações HTTP TRACE com a linha, cabeçalho e corpo do pedido.




## Porta HTTPS

| Pode ser definido com              | Nome                                                             | Comentários |
| ---------------------------------- | ---------------------------------------------------------------- | ----------- |
| objeto webServer                   | [`HTTPSPort`](API/WebServerClass.md#httpsport)                   | number      |
| `WEB SET OPTION`                   | `Web HTTPS port ID`                                              |             |
| Caixa de diálogos de configurações | [Página Configuração/Porta HTTPS](../settings/web.md#https-port) |             |

Número da porta IP de escuta para conexões HTTPS via TLS. Por padrão, o valor é 443 (valor padrão). Veja também o [HTTP Port](#http-port) para informações sobre números de porta.


## Tempo limite do processo inativo

| Pode ser definido com              | Nome                                                                                                 | Comentários |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------- | ----------- |
| objeto webServer                   | [`inactiveProcessTimeout`](API/WebServerClass.md#inactiveprocesstimeout)                             |             |
| `WEB SET OPTION`                   | `Web inactive process timeout`                                                                       |             |
| Caixa de diálogos de configurações | [Página Opções (I)/Tempo limite dos processos inativos](../settings/web.md#inactive-process-timeout) | Slider      |

Life duration (in minutes) of inactive processes associated with legacy sessions. At the end of the timeout, the process is killed on the server, the `On Web Legacy Close Session` database method is called, then the session context is destroyed.

Padrão: 480 minutos (passe 0 para repor o valor predefinido)


## Tempo limite da sessão inativa

| Pode ser definido com | Nome                                                                     | Comentários |
| --------------------- | ------------------------------------------------------------------------ | ----------- |
| objeto webServer      | [`inactiveSessionTimeout`](API/WebServerClass.md#inactivesessiontimeout) |             |
| `WEB SET OPTION`      | `Web inactive session timeout`                                           |             |

Duração da vida (em minutos) das sessões inativas (duração definida na cookie). No final do período, o cookie da sessão expira e não é mais enviada pelo cliente HTTP.

Padrão: 480 minutos (passe 0 para repor o valor predefinido)


## Endereço IP de escuta

| Pode ser definido com              | Nome                                                             | Comentários |
| ---------------------------------- | ---------------------------------------------------------------- | ----------- |
| objeto webServer                   | [`IPAddressToListen`](API/WebServerClass.md#ipaddresstolisten)   |             |
| `WEB SET OPTION`                   | `Web IP address to listen`                                       |             |
| Caixa de diálogos de configurações | [Página Configuração/Endereço IP](../settings/web.md#ip-address) | Menu pop-up |

Sequências de endereços IP nas quais o servidor web 4D receberá solicitações HTTP (4D local e servidor 4D).

Por padrão, nenhum endereço específico é definido (**Qualquer valor** na caixa de diálogo de Configurações), o que significa que o servidor responde a todos os endereços IP. Quando você nomeia um endereço específico, o servidor responde apenas às solicitações enviadas para este endereço. Essa função é projetada para servidores web 4D localizados em máquinas com vários endereços TCP/IP. É, por exemplo, frequentemente o caso da maioria dos fornecedores de alojamento.

Valores possíveis: Cadeia de endereços IP. Ambos os formatos de string IPv6 (por exemplo, "2001:0db8:0000:0000:ff00:0042:8329") e formatos de string IPv4 (por exemplo, "123.45.67.89") são suportados.

#### Acerca do suporte IPv6

*   **Sem aviso quando a porta TCP estiver ocupada**<br/> Quando o servidor estiver definido para responder em "Qualquer" endereços IP, se a porta TCP estiver sendo usada por outra aplicação, isso não é indicado quando o servidor é iniciado. Na verdade, o servidor 4D não detecta nenhum erro neste caso porque a porta permanece gratuita no endereço IPv6. No entanto, não é possível acessá-lo usando o endereço IPv4 da máquina, nem através do endereço local: 127.0.0.1.

Se o seu servidor 4D não parecer responder na porta definida, pode testar o endereço [::1] na máquina do servidor (equivalente a 127.0.0.1 para IPv6, adicionar [:portNum] para testar outro número de porta). Se 4D responder, é provável que outro aplicativo esteja usando a porta em IPv4.

*   **Endereços IPv6 mapeados**<br/> Para padronizar o processamento, 4D fornece uma representação híbrida padrão de endereços IPv4 em IPv6. Esses endereços são escritos com um prefixo de 96 bits no formato IPv6, seguido de 32 bits escritos na notação ponto-decimal do IPv4. Por exemplo, ::ffff:192.168.2.34 representa o endereço IPv4 192.168.2.34.

*   **Indicação dos números da porta**<br/> Uma vez que a notação IPv6 usa dois-pontos (:), adicionar números de porta pode causar alguma confusão, por exemplo:

```code4d
    2001:0DB8::85a3:0:ac1f:8001 // endereço IPv6
    2001:0DB8::85a3:0:ac1f:8001:8081 // endereço IPv6 com a porta 8081
```

Para evitar essa confusão, recomendamos usar a notação [ ] sempre que você combinar um endereço IPv6 com um número de porta, por exemplo:

```code4d
    [2001:0DB8::85a3:0:ac1f:8001]:8081 //endereço IPv6 com porta 8081
```

## Manter sessão

| Pode ser definido com              | Nome                                                                                                                           | Comentários                      |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- |
| objeto webServer                   | [`keepSession`](API/WebServerClass.md#keepsession)                                                                             |                                  |
| `WEB SET OPTION`                   | `Web keep session`                                                                                                             |                                  |
| Caixa de diálogos de configurações | [Opções (I) páginas/sessões de legado (sessões de processo único)](../settings/web.md#legacy-sessions-single-process-sessions) | somente nos projetos convertidos |

Estado do gerenciamento de sessão antigo para o servidor Web 4D (obsoleto).

> Quando essa opção estiver marcada, a opção "Reuse Temporary Contexts" (Reutilizar contextos temporários) é automaticamente marcada (e bloqueada).


## Log Recording

| Pode ser definido com              | Nome                                                        | Comentários |
| ---------------------------------- | ----------------------------------------------------------- | ----------- |
| objeto webServer                   | [`logRecording`](API/WebServerClass.md#logrecording)        |             |
| `WEB SET OPTION`                   | `Web log recording`                                         |             |
| Caixa de diálogos de configurações | [Log (type) page/Log Format](../settings/web.md#log-format) | Menu pop-up |

Inicia ou interrompe o registro das solicitações recebidas pelo servidor da Web 4D no arquivo *logweb.txt* e define seu formato. Por padrão, os pedidos não são registados (0/No Log File). Quando ativado, o arquivo *logweb.txt* é automaticamente colocado na pasta Logs .

Esta configuração permite que você selecione o formato deste arquivo. Os valores disponíveis são:

| Valor | Nome do formato            | Descrição                                                                                                                                                                                                                                             |
| ----- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0     | Nenhum arquivo de registro | Por padrão                                                                                                                                                                                                                                            |
| 1     | Registo em formato CLF     | Formato de registro comum - cada linha do arquivo representa uma requisição, tais como: `host rfc931 usuário [DD/MMM/YYYY:HH:MM:SS] comprimento do estado "request"` - Cada campo é separado por um espaço e cada linha termina pela sequência CR/LF. |
| 2     | Registo em formato DLF     | Formato de Log Combinado - Similar ao formato CLF, mas adiciona dois campos HTTP adicionais no final de cada solicitação: Referer e User-agent.                                                                                                       |
| 3     | Registo em formato ELF     | Extended Log Format - A ser personalizado na caixa de diálogo das Propriedades                                                                                                                                                                        |
| 4     | Registo em formato WLF     | WebStar Log Format - Para ser personalizado na caixa de diálogo Propriedades                                                                                                                                                                          |

> Formatos 3 e 4 são formatos personalizados cujo conteúdo deve ser definido antecipadamente na caixa de diálogo [Configurações](../settings/web.md#log-format). Se você usar um destes formatos sem que nenhum dos seus campos tenha sido selecionado nesta página, o arquivo de log não será gerado.


## Processos Web em simultâneo máximo

| Pode ser definido com              | Nome                                                                                                       | Comentários |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------- | ----------- |
| objeto webServer                   | [`maxConcurrentProcesses`](API/WebServerClass.md#maxconcurrentprocesses)                                   |             |
| `WEB SET OPTION`                   | `Web max concurrent processes`                                                                             |             |
| Caixa de diálogos de configurações | [Página opções (I)/Processos Web simultâneos máximos](../settings/web.md#maximum-concurrent-web-processes) |             |

Limite estritamente alto de processos da Web simultâneos que podem ser abertos simultaneamente no servidor quando **nenhuma sessão** ou **sessões herdadas** são usadas (**sessões escaláveis** suportam um número [ilimitado](sessions.md) de processos preemptivos). Esse parâmetro permite evitar a saturação do servidor como resultado de um grande número de solicitações. Quando o número máximo de processos da Web simultâneos (menos um) for alcançado, 4D não cria mais novos processos e envia o status HTTP `503 - Serviço Indisponível` para todas as novas solicitações.

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
| `WEB SET OPTION`      | `Web max sessions`                                 |             |

Maximum number of simultaneous legacy sessions. When you reach the limit set, the oldest legacy session is closed (and `On Web Legacy Close Session` database method is called) if the Web server needs to create a new one. The number of simultaneous legacy sessions cannot exceed the [maximum number of Web processes](#maximum-concurrent-web-processes) (100 by default).

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

> A versão TLS mínima usada pelo 4D pode ser modificada para a sessão usando o comando `SET DATABASE PARAMETER` , neste caso a modificação se aplica a toda aplicação 4D, incluindo o servidor web, o servidor SQL e as conexões cliente/servidor.


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

Verdadeiro se o PFS está disponível no servidor web (consulte a seção TLS [TLS](Admin/tls.md#perfect-forward-secrecy-pfs)).


## Reutilizar contextos temporários (em modo remoto)

| Pode ser definido com              | Nome                                                                                     | Comentários |
| ---------------------------------- | ---------------------------------------------------------------------------------------- | ----------- |
| Caixa de diálogos de configurações | [Options (I) page/Reuse Temporary Contexts](../settings/web.md#reuse-temporary-contexts) |             |

> Essa opção só está disponível quando a opção **No sessions** está marcada.

Permite otimizar a operação do 4D Web Server no modo remoto, reutilizando processos da Web criados para processar solicitações anteriores da Web. De fato, o servidor web em 4D precisa de um processo web específico para lidar com cada solicitação web; no modo remoto, quando necessário, esse processo se conecta à máquina 4D Server para acessar os dados e o mecanismo de banco de dados. Assim, ele gera um contexto temporário usando suas próprias variáveis, seleções, etc. Quando o pedido tiver sido tratado, este processo é encerrado.

Quando a opção **Reutilizar Contextos Temporários** é marcada, no modo remoto 4D mantém os processos web específicos e reutiliza-os para solicitações subsequentes. Removendo o estágio de criação do processo, o desempenho do servidor web é melhorado.

Em troca, você deve se certificar neste caso de inicializar sistematicamente as variáveis usadas em métodos 4D para evitar obter resultados incorretos. Da mesma forma, é necessário apagar quaisquer seleções ou registros atuais definidos durante a solicitação anterior.

> Esta opção só tem um efeito com um servidor web 4D em modo remoto. Com um 4D em modo local, todos os processos da Web (exceto os processos de sessão) são eliminados após seu uso.


## Robots.txt

Certos robôs (mecanismos de consulta, spiders...) percorrem servidores da Web e páginas estáticas. Se não quiser que os robôs acessem todo o seu site, você pode definir quais URLs eles não podem acessar.

Para isso, coloque o arquivo ROBOTS.TXT na raiz do servidor. Este ficheiro deve ser estruturado da seguinte forma:

```4d
   User-Agent: <name>
   Disallow: <URL> ou <beginning of the URL>
```

Por exemplo:

```4d
   User-Agent: *
   Disallow: /4D
   Disallow: /%23%23
   Disallow: /GIFS/
```

*   "User-Agent: *" - todos os robôs são afetados.
*   "Disallow: /4D" - os robôs não têm permissão para acessar URLs que começam com /4D.
*   "Disallow: /%23%23" - os robôs não têm permissão para acessar URLs que começam com /%23%23.
*   "Disallow: /GIFS/' - os robôs não têm permissão para acessar a pasta /GIFS/ ou suas subpastas.

Outro exemplo

```code4d
   User-Agent: *
   Disallow: /
```

Neste caso, os robots não estão autorizados a aceder a todo o sítio.


## Pasta raiz

| Pode ser definido com              | Nome                                                                         | Comentários                                                                                                                            |
| ---------------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| objeto webServer                   | [`rootFolder`](API/WebServerClass.md#rootfolder)                             | Text property but can be a [`4D. Folder`](API/FolderClass.md) object when used with the *settings* parameter of the `start()` function |
| `WEB SET ROOT FOLDER`              |                                                                              |                                                                                                                                        |
| Caixa de diálogos de configurações | [Página configuração/Raiz HTML padrão](../settings/web.md#default-html-root) |                                                                                                                                        |

Caminho da pasta raiz do servidor web, ou seja, a pasta na qual 4D procurará as páginas HTML estáticas e semidinâmicas, imagens, etc., para enviar aos navegadores. O caminho é formatado no caminho completo POSIX. O servidor da Web precisará ser reiniciado para que a nova pasta raiz seja levada em consideração.

Além disso, a pasta raiz do HTML define, no disco rígido do servidor da Web, o nível hierárquico acima do qual os arquivos não poderão ser acessados. Se um URL solicitado ou um comando 4D tentar acessar um arquivo localizado acima da pasta raiz HTML, será retornado um erro indicando que o arquivo não foi encontrado.

Por padrão, 4D define uma pasta HTML Root chamada **WebFolder**. Se ela ainda não existir, a pasta raiz HTML será fisicamente criada no disco no momento em que o servidor Web for iniciado pela primeira vez. A pasta raiz é criada:
- com 4D (local) e 4D Server, no mesmo nível da pasta [Project](Project/architecture.md#project-folder).
- com 4D em modo remoto, na pasta de recursos locais.

Você pode designar outra pasta raiz HTML padrão inserindo seu caminho.

- O caminho é relativo à pasta do projeto [](Project/architecture.md#project-folder) (4D local e 4D Server) ou à pasta que contém o aplicativo 4D ou o pacote de software (4D em modo remoto).
- O caminho é expresso com a sintaxe POSIX (pastas são separadas por uma barra ("/"))
- Para "subir" um nível na hierarquia de pastas, digite "..." (dois pontos) antes do nome da pasta
- O caminho não deve começar com uma barra (exceto se você quiser que a pasta raiz HTML seja a pasta remota Project ou 4D, mas que o acesso às pastas acima seja proibido; nesse caso, você pode passar "/" como a pasta raiz).

Por exemplo, se você quiser que a pasta raiz HTML seja a subpasta "Web" na pasta "MyWebApp", digite "MyWebApp/Web".

> Quando a pasta raiz do HTML é modificada, o cache é limpo para não armazenar arquivos cujo acesso é restrito.


## Sessões escaláveis

| Pode ser definido com              | Nome                                                                                                         | Comentários |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------ | ----------- |
| objeto webServer                   | [`scalableSession`](API/WebServerClass.md#scalablesession)                                                   |             |
| `WEB SET OPTION`                   | `Sessão escalável Web`                                                                                       |             |
| Caixa de diálogos de configurações | [Options (I) page/Automatic Session Management](../settings/web.md#scalable-sessions-multi-process-sessions) |             |

Session management enabling status for the 4D web server. Web server sessions are detailed in the [Web sessions](sessions.md) page.



## Domínio do cookie de sessão

| Pode ser definido com | Nome                                                               | Comentários |
| --------------------- | ------------------------------------------------------------------ | ----------- |
| objeto webServer      | [`sessionCookieDomain`](API/WebServerClass.md#sessioncookiedomain) |             |
| `WEB SET OPTION`      | `Web session cookie domain`                                        |             |

Valor do campo "domain" do cookie de sessão. Útil para controlar o âmbito dos cookies de sessão. Se definir, por exemplo, o valor "/*.4d.fr" para este selector, o cliente só enviará um cookie quando o pedido for dirigido ao domínio ".4d.fr", o que exclui os servidores que hospedam dados estáticos externos.


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

Valor do atributo `SameSite` valor do cookie da sessão. Esse atributo permite que você declare se o seu cookie deve ser restrito a um contexto de primeira parte ou do mesmo site, como proteção contra alguns ataques de falsificação de solicitação entre sites ([CSRF](https://developer.mozilla.org/en-US/docs/Glossary/CSRF)).

> Para obter uma descrição detalhada do atributo `SameSite` , consulte a documentação do [Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) ou [esta página web.dev](https://web.dev/samesite-cookies-explained/).

Há três valores disponíveis:

- "Strict" (padrão `SameSite` valor do atributo para cookies de sessão 4D): os cookies serão enviados somente no contexto primário, ou seja, no contexto correspondente ao domínio do site atual, e nunca para sites de terceiros.
- "Laxos": Os cookies não são enviados em solicitações entre sites (por exemplo, para carregar imagens ou quadros em um site de terceiros), mas são enviados quando um usuário está navegando para o site de origem (ou seja, ele segue um link).
- "None": Cookies são enviados em todos os contextos, ou seja, nas respostas para solicitações de primeira e de cruzada de origem. Quando o valor "Nenhum" é usado, o atributo "cookie `Secure` deve também ser definido (ou o cookie será bloqueado).

O valor do atributo `Secure` do cookie de sessão é automaticamente definido como "True" se a conexão for HTTPS (qualquer que seja o valor do atributo `SameSite`).

> Não é recomendável definir `SameSite=None` em um servidor HTTP, pois o atributo `Secure` estará ausente (usado somente em HTTPS) e os cookies serão bloqueados.



## Utilizar processos preemptivos

| Pode ser definido com              | Nome                                                                                     | Comentários |
| ---------------------------------- | ---------------------------------------------------------------------------------------- | ----------- |
| Caixa de diálogos de configurações | [Options (I) page/Use Preemptive Processes](../settings/web.md#use-preemptive-processes) |             |

Essa opção ativa o modo preemptivo para o código do servidor Web do seu aplicativo quando a opção **No sessions** é selecionada (o modo preemptivo é sempre ativado com **scalable sessions**). Quando essa opção estiver marcada nesse contexto, o compilador 4D avaliará automaticamente a propriedade de segurança de thread de cada parte do código relacionado à Web [](preemptiveWeb.md#thread-safety-of-4d-web-code) e retornará erros em caso de incompatibilidade.




## Parâmetros obsoletos

As configurações a seguir ainda são compatíveis, mas dependem de recursos ou tecnologias obsoletos. Em geral, é recomendável manter os valores padrão.

#### Allow database Access through 4DSYNC URLs

Essa opção controla o suporte de solicitações de sincronização HTTP que contêm URLs obsoletos */4DSYNC* .

#### Validação do endereço IP da sessão

> Essa opção não está disponível no modo [scalable sessions](WebServer/sessions.md) (não há validação).

Estado de validação de endereço IP para cookies de sessão. Por motivos de segurança por padrão o servidor web 4D verifica o endereço IP de cada solicitação contendo um cookie de sessão e rejeita-o se este endereço não corresponde ao endereço IP usado para criar o cookie. Em algumas aplicações específicas, poderá querer desactivar esta validação e aceitar cookies de sessão, mesmo quando os seus endereços IP não correspondem. Por exemplo, quando os dispositivos móveis mudam entre redes Wi-Fi e 4G/5G, seu endereço IP será alterado. Neste caso, você deve passar 0 nesta opção para permitir que os clientes possam continuar usando suas sessões da Web, mesmo quando o endereço IP mudar. Observe que essa configuração reduz o nível de segurança de seu aplicativo. Quando é modificado, essa configuração é eficaz imediatamente (não é necessário reiniciar o servidor HTTP).




#### Enviar diretamente caracteres expandidos

Quando essa opção está marcada, o servidor da Web envia caracteres estendidos "como estão" em páginas semidinâmicas, sem convertê-los em entidades HTML. Essa opção mostrou um aumento de velocidade na maioria dos sistemas operacionais estrangeiros (especialmente o sistema japonês).


#### Ligações Keep-Alive

O servidor web 4D pode usar conexões persistentes. A opção keep-alive permite que você mantenha uma única conexão TCP aberta para o conjunto de trocas entre o navegador da Web e o servidor para economizar recursos do sistema e otimizar as transferências.

A opção **Use Keep-Alive Connections** ativa ou desativa as conexões TCP keep-alive para o servidor Web. Esta opção está activada por padrão. Na maioria dos casos, é recomendável manter essa opção marcada, pois ela acelera as trocas. Se o navegador da Web não suportar a conexão keep alive, o 4D Web Server mudará automaticamente para HTTP/1.0.

A função keep-alive do 4D Web Server diz respeito a todas as conexões TCP/IP (HTTP, HTTPS). Observe, entretanto, que as conexões keep-alive nem sempre são usadas para todos os processos da Web 4D.

Em alguns casos, outras funções internas otimizadas podem ser invocadas. As ligações persistentes são úteis principalmente para páginas estáticas.

Duas opções permitem que você defina como funcionam as conexões persistentes:

*   **Número de solicitações por conexão**: Permite definir o número máximo de solicitações e respostas que podem trafegar em uma conexão keep alive. Limitar o número de solicitações por conexão permite que você evite a inundação do servidor devido a um grande número de solicitações recebidas (uma técnica usada por hackers).<p>
O valor padrão (100) pode ser aumentado ou diminuído dependendo dos recursos da máquina que hospeda o 4D Web Server.</p>

*   **Timeout**: Esse valor define o período máximo de espera (em segundos) durante o qual o servidor da Web mantém uma conexão TCP aberta sem receber nenhuma solicitação do navegador da Web. Quando este período acabar, o servidor fecha a conexão.<p>
Se o navegador da web enviar um pedido depois que a conexão for fechada, uma nova conexão TCP será criada automaticamente. Esta operação não é visível para o utilizador.</p>

