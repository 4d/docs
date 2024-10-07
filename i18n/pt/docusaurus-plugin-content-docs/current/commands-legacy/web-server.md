---
id: web-server
title: WEB Server
slug: /commands/web-server
displayed_sidebar: docs
---

<!--REF #_command_.WEB Server.Syntax-->**WEB Server** {( *opção* )} -> Resultado<!-- END REF-->
<!--REF #_command_.WEB Server.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| opção | Inteiro longo | &#x1F852; | Web server a ser obtido (padrão se omitido = servidor web do banco de dados) |
| Resultado | Objeto | &#x1F850; | Objeto web server |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WEB Server.Summary-->O comando **WEB Server** retorna o objeto de banco de dados Web server, ou o objeto Web server definido através do parâmetro *opção*.<!-- END REF--> 

como padrão, se o parâmetro *opção* for omitido, o comando retorna uma referência ao Web server do banco de dados, ou seja, o servidor Web padrão. Para determinar o Web server a retornar, pode passar uma das constantes abaixo do tema *Web Server* no parâmetro *opção*:

| Constante                    | Valor | Comentário                                                            |
| ---------------------------- | ----- | --------------------------------------------------------------------- |
| Web server database          | 1     | Servidor web do banco de dados atual (pré-determinado se for omitido) |
| Web server host database     | 2     | Servidor web do banco de dados local de um componente                 |
| Web server receiving request | 3     | Servidor web que recebeu a petlção (servidor web de destino)          |

##### Objeto retornado 

O objeto retornado *Web server* contém as propriedades apenas leitura e os métodos abaixo:

| **Propriedade <br/>** | **Tipo <br/>** | **Descrição <br/>**                                                                                                                                                     |
| ----------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| certificateFolder             | Text                   | Pasta onde os arquivos de certificado são salvos. Formato rota completa POSIX usando filesystems. Pode ser passado como um objeto [Folder ](folder.md) no parâmetro *settings*. |
| characterSet                  | Number                 | número do conjunto de caracteres                                                                                                                                                |
| cipherSuite                   | Text                   | Lista de Cipher usada para o protocolo de segurança                                                                                                                             |
| CORSEnabled                   | Booleano               | Estado de serviço CORS                                                                                                                                                          |
| CORSSettings                  | Coleção                | Lista de hosts e métodos permitidos para o serviço CORS (coleção de objetos com propriedades de texto host e métodos)                                                           |
| debugLog                      | Number                 | Valor de seletor do Debug log                                                                                                                                                   |
| defaultHomepage               | Text                   | Homepage padrão                                                                                                                                                                 |
| HSTSEnabled                   | Boolean                | Estado protocolo HSTS                                                                                                                                                           |
| HSTSMaxAge                    | Number                 | Duração vida HSTS                                                                                                                                                               |
| HTTPCompressionLevel          | Number                 | Nível compressão HTTP                                                                                                                                                           |
| HTTPCompressionThreshold      | Number                 | Threshold da compressão HTTP                                                                                                                                                    |
| HTTPEnabled                   | Boolean                | estado de protocolo HTTP                                                                                                                                                        |
| HTTPPort                      | Number                 | Porto de escuta para a porta IP para HTTP                                                                                                                                       |
| HTTPTrace                     | Boolean                | Ativação HTTP TRACE                                                                                                                                                             |
| HTTPSEnabled                  | Boolean                | Estado de protocolo HTTPS                                                                                                                                                       |
| HTTPSPort                     | Number                 | Porto de escuta para a porta IP para HTTPS                                                                                                                                      |
| inactiveSessionTimeout        | Number                 | Duração de vida dos processos da sessão inativa                                                                                                                                 |
| inactiveProcessTimeout        | Number                 | Duração de vida das sessões inativas                                                                                                                                            |
| IPAddressToListen             | Text                   | Endereço IP para escuta ou "0.0.0.0" para Qualquer um                                                                                                                           |
| isRunning                     | Boolean                | Estado do Web server executando - *Nâo pode ser estabelecido com o objeto configurações*                                                                                        |
| keepSession                   | Boolean                | Manter sessão                                                                                                                                                                   |
| logRecording                  | Number                 | Valor do registro de Log                                                                                                                                                        |
| maxConcurrentProcesses        | Number                 | Número máximo de processos web concorrentes                                                                                                                                     |
| maxRequestSize                | Number                 | Máximo tamanho requisitado                                                                                                                                                      |
| maxSessions                   | Number                 | Sessões máximas                                                                                                                                                                 |
| minTLSVersion                 | Number                 | Versão TLS mínima aceita para conexões                                                                                                                                          |
| name                          | Text                   | Nome do banco de dados web server - *Nâo pode ser estabelecido com o objeto configurações*                                                                                      |
| openSSLVersion                | Text                   | Versão da biblioteca usada OpenSSL - *Nâo pode ser estabelecido com o objeto configurações*                                                                                     |
| perfectForwardSecrecy         | Boolean                | PFS availability on the server - *Nâo pode ser estabelecido com o objeto configurações*                                                                                         |
| rootFolder                    | Text                   | Rota pasta Root                                                                                                                                                                 |
| sessionCookieDomain           | Text                   | Sessão domínio cookie                                                                                                                                                           |
| sessionCookieName             | Text                   | Sessão cookie name                                                                                                                                                              |
| sessionCookiePath             | Text                   | Sessão cookie path                                                                                                                                                              |
| sessionIPAddressValidation    | Boolean                | Sessão validação endereço IP                                                                                                                                                    |

Essas propriedades são definidas nas configurações de banco de dados do banco de dados host ou o componente. Para o banco de dados host, podem ser sobrescritos usando o comando [WEB SET OPTION](web-set-option.md). 

**Nota:** Essas propriedades também podem ser modificadas usando o parâmetro *configurações do método* *webServer.start( )* (exceto aqueleas marcadas como *Cannot be set with the settings object*). Quando o Web server tiver começado, valores modificados pelo parâmetro *configurações* são atualizados de acordo no objeto retornado por **WEB Server**. Esses valores são usados só durante a sessão subsequente Web Server (são resetadas quando o método *webServer.stop( )* for chamado). 

| **Método**           | **Descrição**       |
| -------------------- | ------------------- |
| *webServer.start( )* | Inicia o Web server |
| *webServer.stop( )*  | Para o Web server   |

#### Exemplo 

A partir de seu componente, se quiser saber se o servidor Web do banco de dados host tiver iniciado:

```4d
  // Método de um componente
 var $hostWS : Object
 $hostWS:=WEB Server(Web server host database)
 If($hostWS.isRunning)
    ...
 End if
```

#### Ver também 

[WEB Server list](web-server-list.md)  
*webServer.stop( )*  