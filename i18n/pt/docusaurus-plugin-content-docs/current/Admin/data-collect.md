---
id: data-collect
title: Recolha de dados
---

Para ajudar a tornar os produtos melhores, automaticamente coletamos dados referentes a estatísticas de usuário nas aplicações 4D Server Dados completados são anônimos e dados são transferidos sem ter impacto na experiência de usuário. Dados completados são anônimos e dados são transferidos sem ter impacto na experiência de usuário.

Esta página explica:

- que informação é coletada,
- onde a informação é armazenada e quando é enviada a 4D,
- como desativar a coleção de dados automática em aplicações cliente/servidor

## Informação coletada

Dados são coletados durante os eventos abaixo:

- arranque da base de dados,
- fechamento de banco de dados,
- início do servidor Web,
- execução php,
- ligação cliente,
- envio da recolha de dados.

Alguns dados são também recolhidos a intervalos regulares.

### Recolhidos no arranque da base de dados

| Dados                   | Tipo                                                     | Notas                                                                                                                                    |
| ----------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| CPU                     | Text                                                     | Nome, tipo, e velocidade do processador                                                                                                  |
| numberOfCores           | Number                                                   | Número total de núcleos                                                                                                                  |
| memory                  | Number                                                   | Volume de armazenamento de memória (em bytes) disponível na máquina                                                   |
| system                  | Text                                                     | Versão do sistema operativo e número de construção                                                                                       |
| headless                | Parâmetros                                               | Verdadeiro se a aplicação estiver a correr em modo sem cabeça                                                                            |
| version                 | Number                                                   | Número da versão da aplicação 4D                                                                                                         |
| buildNumber             | Number                                                   | Número da versão da aplicação 4D                                                                                                         |
| licença                 | Object                                                   | Nome comercial e descrição das licenças do produto                                                                                       |
| isRosetta               | Parâmetros                                               | True se 4D for emulado através do Rosetta no macOS, False caso contrário (não emulado ou no Windows). |
| uniqueID                | Text                                                     | ID único do 4D Server                                                                                                                    |
| id                      | Texto (cadeia de caracteres com hash) | Identificação única associada à base de dados (_Polinômio Rolling hash do nome da base de dados_)                     |
| dataFileSize            | Number                                                   | Tamanho do arquivo de dados em bytes                                                                                                     |
| indexesSize             | Number                                                   | Tamanho do índice em bytes                                                                                                               |
| cacheSize               | Number                                                   | Tamanho da cache em bytes                                                                                                                |
| usingLegacyNetworkLayer | Parâmetros                                               | Verdadeiro se a usar a camada de rede herdada para o servidor de aplicações                                                              |
| usingQUICNetworkLayer   | Parâmetros                                               | True se a base de dados utilizar a camada de rede QUIC                                                                                   |
| encryptedConnections    | Parâmetros                                               | True se as ligações cliente/servidor forem encriptadas                                                                                   |
| encrypted               | Parâmetros                                               | True se o arquivo de dados estiver criptografado                                                                                         |
| compiled                | Parâmetros                                               | Verdadeiro se a aplicação for compilada                                                                                                  |
| isEngined               | Parâmetros                                               | Verdadeiro se a aplicação for fundida com o Volume Desktop 4D                                                                            |
| projectMode             | Parâmetros                                               | Verdadeiro se a aplicação for compilada                                                                                                  |
| mobile                  | Collection                                               | Informação sobre sessões móveis                                                                                                          |

### Recolhidos no arranque do servidor Web e no envio da recolha de dados

| Dados     | Tipo   | Notas                                                                           |
| --------- | ------ | ------------------------------------------------------------------------------- |
| webServer | Object | "started":true se o servidor Web estiver a arrancar ou iniciado |

### Recolha a intervalos regulares

| Dados                       | Tipo   | Notas                                      |
| --------------------------- | ------ | ------------------------------------------ |
| maximumNumberOfWebProcesses | Number | Número máximo de processos Web simultâneos |
| maximumUsedPhysicalMemory   | Number | Utilização máxima da memória física        |
| maximumUsedVirtualMemory    | Number | Utilização máxima da memória virtual       |

### Recolhido no envio da recolha de dados

| Dados                                       | Tipo   | Notas                                                                                          |
| ------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------- |
| uptime                                      | Number | Tempo decorrido (em segundos) desde que a base de dados 4D local foi aberta |
| cacheReadBytes                              | Object | Número de bytes lidos da cache                                                                 |
| cacheMissBytes                              | Object | Número de bytes perdidos na cache                                                              |
| cacheReadCount                              | Object | Número de leituras na cache                                                                    |
| cacheMissCount                              | Object | Número de leituras falhadas na cache                                                           |
| dataSegment1.diskReadBytes  | Object | Número de bytes lidos no ficheiro de dados                                                     |
| dataSegment1.diskWriteBytes | Object | Número de bytes escritos no ficheiro de dados                                                  |
| dataSegment1.diskReadCount  | Object | Número de leituras no ficheiro de dados                                                        |
| dataSegment1.diskWriteCount | Object | Número de escritas no ficheiro de dados                                                        |
| indexSegment.diskReadBytes  | Number | Número de bytes lidos no ficheiro de índice                                                    |
| indexSegment.diskWriteBytes | Number | Número de bytes escritos no ficheiro de índice                                                 |
| indexSegment.diskReadCount  | Number | Número de leituras no ficheiro índice                                                          |
| indexSegment.diskWriteCount | Number | Número de escritas no ficheiro de índice                                                       |

### Recolhidos aquando do encerramento da base de dados e do envio da recolha de dados

| Dados                          | Tipo   | Notas                                                         |
| ------------------------------ | ------ | ------------------------------------------------------------- |
| webserverHits                  | Number | Número de acessos ao servidor Web durante a recolha de dados  |
| restHits                       | Number | Número de acessos ao servidor REST durante a recolha de dados |
| webserverBytesIn               | Number | Bytes recebidos pelo servidor Web durante a recolha de dados  |
| webserverBytesOut              | Number | Bytes enviados pelo servidor Web durante a recolha de dados   |
| qodly.webforms | Number | Número de formulários web Qodly                               |

### Recolhido sempre que PHP execute é chamado

| Dados       | Tipo       | Notas                                                                                           |
| ----------- | ---------- | ----------------------------------------------------------------------------------------------- |
| phpCall     | Number     | Nùmero de llamadas a `PHP execute`                                                              |
| externalPHP | Parâmetros | True se o cliente efetuar uma chamada para `PHP execute` e utilizar a sua própria versão de php |

### Recolhido na ligação do cliente

| Dados                      | Tipo       | Notas                                                                                                              |
| -------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------ |
| maximum4DClientConnections | Number     | Número máximo de ligações 4D Client ao servidor                                                                    |
| connectionSystems          | Collection | SO do cliente sem o número de compilação (entre parêntesis) e número de clientes que o utilizam |

## Onde é armazenado e enviado?

Os dados coletados são escritos em um arquivo de texto (formato JSON) por banco de dados quando 4D Servidor abandona. O ficheiro é armazenado dentro da [pasta 4D ativa](https://doc.4d.com/4dv20/help/command/en/page485.html), ou seja:

- en Windows:
  `Users\[userName]\AppData\Roaming\4D Server`
- em macOS: `/Users/[userName]/Library/ApplicationSupport/4D Server`

Uma vez por semana, o ficheiro é automaticamente enviado através da rede para 4D. O arquivo é então apagado da pasta 4D activa.

![](../assets/en/Admin/data-collect.png)

> Se o arquivo não pôde ser enviado por algum motivo, é, no entanto, apagado e não é exibida nenhuma mensagem de erro no lado do Servidor 4D.

O ficheiro é enviado para o seguinte endereço de servidor: `https://dcollector.4d.com` (ip: 195.68.52.83).

## Desativar a coleção de dados em aplicações cliente/servidor geradas

Pode desactivar a recolha automática de dados em [aplicações construídas cliente/servidor](../Desktop/building.md#clientserver-page).

Para desativar a coleção, passe o valor **False** para a chave [`ServerDataCollection`](https://doc.4d.com/4Dv20/4D/20/ServerDataCollection.300-6335775.en.html) no arquivo `buildApp.4DSettings`, utilizado para construir a aplicação cliente/servidor.
