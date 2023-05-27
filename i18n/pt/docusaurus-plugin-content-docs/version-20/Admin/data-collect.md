---
id: data-collect
title: Coleta de dados
---

Para ajudar a tornar os produtos melhores, automaticamente coletamos dados referentes a estatísticas de usuário nas aplicações 4D Server Dados completados são anônimos e dados são transferidos sem ter impacto na experiência de usuário. Dados completados são anônimos e dados são transferidos sem ter impacto na experiência de usuário.

Esta página explica:

- what information is collected,
- where information is stored and when it is sent to 4D,
- como desativar a coleção de dados automática em aplicações cliente/servidor


## Informação coletada

Dados são coletados durante os eventos abaixo:

- database startup,
- fechamento de banco de dados,
- web server startup,
- php execution,
- client connection,
- data collection sending.

Some data is also collected at regular intervals.

### Collected at database startup

| Dados                   | Tipo                 | Notas                                                                                             |
| ----------------------- | -------------------- | ------------------------------------------------------------------------------------------------- |
| CPU                     | Text                 | Nome, tipo, e velocidade do processador                                                           |
| numberOfCores           | Número               | Número total de núcleos                                                                           |
| memory                  | Número               | Volume de armazenamento de memória (em bytes) disponível na máquina                               |
| system                  | Text                 | Versão do sistema operativo e número de construção                                                |
| headless                | Parâmetros           | Verdadeiro se a aplicação estiver a correr em modo sem cabeça                                     |
| version                 | Número               | Número da versão da aplicação 4D                                                                  |
| buildNumber             | Número               | Número da versão da aplicação 4D                                                                  |
| licença                 | Objeto               | Nome comercial e descrição das licenças do produto                                                |
| isRosetta               | Parâmetros           | True if 4D is emulated through Rosetta on macOS, False otherwise (not emulated or on Windows).    |
| uniqueID                | Text                 | Unique ID of the 4D Server                                                                        |
| id                      | Text (hashed string) | Identificação única associada à base de dados (*Polinômio Rolling hash do nome da base de dados*) |
| dataFileSize            | Número               | Tamanho do arquivo de dados em bytes                                                              |
| indexesSize             | Número               | Tamanho do índice em bytes                                                                        |
| cacheSize               | Número               | Tamanho da cache em bytes                                                                         |
| usingLegacyNetworkLayer | Parâmetros           | Verdadeiro se a usar a camada de rede herdada para o servidor de aplicações                       |
| usingQUICNetworkLayer   | Parâmetros           | True if the database uses the QUIC network layer                                                  |
| encryptedConnections    | Parâmetros           | True if client/server connections are encrypted                                                   |
| encrypted               | Parâmetros           | True se o arquivo de dados estiver criptografado                                                  |
| compiled                | Parâmetros           | Verdadeiro se a aplicação for compilada                                                           |
| isEngined               | Parâmetros           | Verdadeiro se a aplicação for fundida com o Volume Desktop 4D                                     |
| projectMode             | Parâmetros           | Verdadeiro se a aplicação for compilada                                                           |
| mobile                  | Collection           | Informação sobre sessões móveis                                                                   |


### Collected at web server startup and data collection sending

| Dados     | Tipo   | Notas                                                   |
| --------- | ------ | ------------------------------------------------------- |
| webServer | Objeto | "started":true if the web server is starting or started |


### Collected at regular intervals

| Dados                       | Tipo   | Notas                                        |
| --------------------------- | ------ | -------------------------------------------- |
| maximumNumberOfWebProcesses | Número | Maximum number of simultaneous web processes |
| maximumUsedPhysicalMemory   | Número | Maximum use of physical memory               |
| maximumUsedVirtualMemory    | Número | Maximum use of virtual memory                |


### Collected at data collection sending

| Dados                       | Tipo   | Notas                                                                       |
| --------------------------- | ------ | --------------------------------------------------------------------------- |
| uptime                      | Número | Tempo decorrido (em segundos) desde que a base de dados 4D local foi aberta |
| cacheReadBytes              | Objeto | Number of bytes read from cache                                             |
| cacheMissBytes              | Objeto | Number of bytes missed from cache                                           |
| cacheReadCount              | Objeto | Number of reads in the cache                                                |
| cacheMissCount              | Objeto | Number of reads missed in the cache                                         |
| dataSegment1.diskReadBytes  | Objeto | Number of bytes read in the data file                                       |
| dataSegment1.diskWriteBytes | Objeto | Number of bytes written in the data file                                    |
| dataSegment1.diskReadCount  | Objeto | Number of reads in the data file                                            |
| dataSegment1.diskWriteCount | Objeto | Number of writes in the data file                                           |
| indexSegment.diskReadBytes  | Número | Number of bytes read in the index file                                      |
| indexSegment.diskWriteBytes | Número | Number of bytes written in the index file                                   |
| indexSegment.diskReadCount  | Número | Number of reads in the index file                                           |
| indexSegment.diskWriteCount | Número | Number of writes in the index file                                          |



### Collected at database closure and data collection sending

| Dados             | Tipo   | Notas                                                        |
| ----------------- | ------ | ------------------------------------------------------------ |
| webserverHits     | Número | Number of hits on the web server during the data collection  |
| restHits          | Número | Number of hits on the REST server during the data collection |
| webserverBytesIn  | Número | Bytes received by the web server during the data collection  |
| webserverBytesOut | Número | Bytes sent by the web server during the data collection      |




### Collected every time PHP execute is called

| Dados       | Tipo       | Notas                                                                               |
| ----------- | ---------- | ----------------------------------------------------------------------------------- |
| phpCall     | Número     | Number of calls to `PHP execute`                                                    |
| externalPHP | Parâmetros | True if the client performs a call to `PHP execute` and uses its own version of php |


### Collected at client connection

| Dados                      | Tipo       | Notas                                                                              |
| -------------------------- | ---------- | ---------------------------------------------------------------------------------- |
| maximum4DClientConnections | Número     | Maximum number of 4D Client connections to the server                              |
| connectionSystems          | Collection | Client OS without the build number (in parenthesis) and number of clients using it |



## Onde é armazenado e enviado?

Collected data is written in a text file (JSON format) per database when 4D Server quits. The file is stored inside the [active 4D folder](https://doc.4d.com/4dv20/help/command/en/page485.html), i.e.:

- no Windows: `Utilizadores\[userName]\AppData\Roaming\4D Server`
- em macOS: `/Users/[userName]/Library/ApplicationSupport/4D Server`

Uma vez por semana, o ficheiro é automaticamente enviado através da rede para 4D. O arquivo é então apagado da pasta 4D activa.

![](../assets/en/Admin/data-collect.png)

> Se o arquivo não pôde ser enviado por algum motivo, é, no entanto, apagado e não é exibida nenhuma mensagem de erro no lado do Servidor 4D.

O ficheiro é enviado para o seguinte endereço de servidor: `https://dcollector.4d.com` (ip: 195.68.52.83).


## como desativar a coleção de dados automática em aplicações cliente/servidor

Pode desactivar a recolha automática de dados em [aplicações construídas cliente/servidor](../Desktop/building.md#clientserver-page).

Para desativar a coleção, passar o valor **Falso** para a chave [`ServerDataCollection`](https://doc.4d.com/4Dv19R6/4D/19-R6/ServerDataCollection.300-6011712.en.html) no arquivo `buildApp.4DSettings` , utilizado para construir a aplicação cliente/servidor.