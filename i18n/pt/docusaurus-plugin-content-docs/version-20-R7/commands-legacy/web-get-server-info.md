---
id: web-get-server-info
title: WEB Get server info
slug: /commands/web-get-server-info
displayed_sidebar: docs
---

<!--REF #_command_.WEB Get server info.Syntax-->**WEB Get server info** {( *comCache* )} : Object<!-- END REF-->
<!--REF #_command_.WEB Get server info.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| comCache | Boolean | &#8594;  | True para retornar a descrição web cache. Senão (pré-determinado) a descrição da cache não é retornada |
| Resultado | Object | &#8592; | Informação no servidor Web executando e servidor SOAP |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WEB Get server info.Summary-->O comando **WEB Get server info** devolve um objeto que contèm informação do tempo de execução detalhada na sessão atual do servidor web 4D.<!-- END REF--> A informação devolvida inclui o servidor SOAP.

**Nota:** Esse comando retorna runtime information, *ou seja.* Parâmetros atuais usados pelo servidor Web. Esses parâmetros podem ser diferentes daqueles retornados pelo comando [WEB GET OPTION](web-get-option.md) já que dependem de configurações de sistema, recursos disponíveis, etc. 

De forma pré-determinada, o comando não devolve a propriedad e "caché", já que pode ser muito grande. Entretanto, se quiser conhecer o conteúdo da caché, passe True no parâmetro opcional *conCache*.

O objeto devolvido contém as propriedades abaixo (os nomes de propriedade são sensíveis às maiúsculas e minúsculas):

| **Nome da propriedade**     | **Tipo de valor** | **Descrição**                                                                                                                                                                |
| --------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| started                     | Booleano          | true se for iniciado o servidor http, do contrário false                                                                                                                     |
| uptime                      | Número            | Tempo transcorrido desde o último início de servidor http                                                                                                                    |
| httpRequestCount            | Número            | Número de visitas HTTP recebidas pelo servidor desde que foi iniciado                                                                                                        |
| startMode                   | Text            | "automático" se estiver ativada a opção "Iniciar servidor web no início", do contrário "manual".                                                                             |
| SOAPServerStarted           | Booleano          | true se for iniciado o servidor SOAP, no caso contrário false                                                                                                                |
| cache                       | Objeto            | *Esta propriedade só é incluída se o valor da propriedade do parâmetro cacheInfo for True*. Descreve o conteúdo da caché de servidor web (ver *Propriedade de cache* abaixo) |
| security                    | Objeto            | Estado atual das diferentes opções de segurança                                                                                                                              |
| cipherSuite                 | Text            | Lista Cipher usada por 4D para o protocolo de segurança (corresponde ao parâmetro de banco de dados SSL cipher list)                                                         |
| HTTPEnabled                 | Boolean           | True se HTTP ativo                                                                                                                                                           |
| HTTPSEnabled                | Boolean           | True se HTTPS ativo                                                                                                                                                          |
| HSTSEnabled                 | Boolean           | True se HSTS for ativo no servidor                                                                                                                                           |
| HSTSMaxAge                  | Number            | Idade máxima (em segundos) para HSTS. O padrão é 2 anos (63.072,000 segundos).                                                                                               |
| minTLSVersion               | Text            | Versão TLS mínima aceita para as conexôes (corresponde ao parâmetro de banco de dados Min TLS version)                                                                       |
| options                     | Objeto            | Estado atual de várias opções de servidor web padrão                                                                                                                         |
| CORSEnabled                 | Boolean           | True se o serviço CORS for ativo no servidor, False senão (normal)                                                                                                           |
| CORSSettings                | Collection        | Colelçai de objetos CORS definindo a lista de hosts e métodos permitidos (ver Web CORS settings web option)                                                                  |
| webCharacterSet             | Text            | Nome de conjunto de caracteres (corresponde a opção web Web character set)                                                                                                   |
| webHTTPCompressionLevel     | Número            | Nivel de compressão para os intercâmbios HTTP comprimidos (corresponde à opção web Web HTTP compression level)                                                               |
| webHTTPCompressionThreshold | Number            | Valor de compressão (corresponde à opção web Web HTTP compression threshold)                                                                                                 |
| webHTTPSPortID              | Number            | Número de porto TCP utilizado pelo servidor Web para conexôes seguras (corresponde à opção web Web HTTPS port ID)                                                            |
| webInactiveProcessTimeout   | Número            | Duração de vida dos processos de sessão inativos (corresponde a opção web Web inactive process timeout)                                                                      |
| webInactiveSessionTimeout   | Número            | Duração da vida das sessões inativas (corresponde a opção web Web inactive session timeout)                                                                                  |
| webIPAddressToListen        | Coleção           | O endereço IP (e) no "formato" definido no qual o servidor web recebe as solicitações http (corresponde a opção web Web IP address to listen)                                |
| webMaxConcurrentProcesses   | Número            | Número máximo de procesos web simultáneos (corresponde a la opción web Web max concurrent processes)                                                                         |
| webPortID                   | Número            | Porto TCP utilizado pelo servidor Web (corresponde a opção web Web port ID)                                                                                                  |

**Nota:** este comando devolve informação sobre o servidor web local. Se quiser monitorar o servidor web 4D Server desde um 4D remoto, deve aplicar a propriedade "Executar no servidor" ao método.

##### Propriedade de cache 

Se passar **true** no parâmetro *conCache*, o comando devolve a propriedade objeto "cache" com o conteúdo abaixo:

| **Nome da propriedade** | **Tipo de valor** | **Descrição**                                                                                                                                |
| ----------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| cacheUsage              | Número            | Taixa de uso da caché                                                                                                                        |
| numOfLoads              | Número            | Número de objetos carregados                                                                                                                 |
| currentSize             | Número            | Tamanho atual da caché                                                                                                                       |
| maxSize                 | Número            | Tamanho máximo da caché                                                                                                                      |
| objectMaxSize           | Número            | Tamanho máximo de objetos carregáveis na caché                                                                                               |
| enabled                 | Booleano          | true se a caché de servidor web estiver ativada                                                                                              |
| nbCachedObjects         | Número            | Número de objetos na caché                                                                                                                   |
| cachedObjects           | Coleção           | Coleção de objetos na caché. Cada objeto em caché é definido por diferentes propriedades (url, mimeType, expirationType, lastModified, etc.) |

#### Exemplo 

Depois de executar o código abaixo:

```4d
 $webServerInfo:=WEB Get server info(True)
```

... $webServerInfo will contain for example:

```json
{   "started": true,   "uptime": 40,   "SOAPServerStarted": true,   "startMode": "manual",   "httpRequestCount": 0,   "options": {      "CORSEnabled": false,      "CORSSettings": null,      "webCharacterSet": "UTF-8",      "webHTTPCompressionLevel": 1,      "webHTTPCompressionThreshold": 1024,      "webHTTPSPortID": 443,      "webIPAddressToListen": ["192.168.xxx.xxx"],      "webInactiveProcessTimeout": 28800,      "webInactiveSessionTimeout": 28800,      "webMaxConcurrentProcesses": 100,      "webPortID": 80   },   "security": {      "HTTPEnabled": true,      "cipherSuite": "ECDHE-RSA-AES128-GCM-SHA256:...:CAMELLIA128-SHA",      "openSSLVersion": "OpenSSL 1.0.2h 3 May 2016",      "perfectForwardSecrecy": true,      "minTLSVersion": "1.2"    },    "cache": {        "cacheUsage": 1,        "numOfLoads": 24,        "currentSize": 154219,        "maxSize": 10485760,        "objectMaxSize": 524288,        "enabled": true,        "nbCachedObjects": 23,        "cachedObjects": [            {...},{...}         ]   }}
```

#### Ver também 

[License info](license-info.md)  
[Process activity](../commands/process-activity.md)  
[SOAP REJECT NEW REQUESTS](soap-reject-new-requests.md)  