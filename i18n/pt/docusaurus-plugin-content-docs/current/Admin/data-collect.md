---
id: data-collect
title: Coleta de dados
---

Para ajudar a tornar os produtos melhores, automaticamente coletamos dados referentes a estatísticas de usuário nas aplicações 4D Server Dados completados são anônimos e dados são transferidos sem ter impacto na experiência de usuário. Dados completados são anônimos e dados são transferidos sem ter impacto na experiência de usuário.

Esta página explica:

- que informação é coletada,
- onde a informação é armazenada e quando é enviada a 4D,
- como desativar a coleção de dados automática em aplicações cliente/servidor


## Informação coletada

Dados são coletados durante os eventos abaixo:

- database startup,
- fechamento de banco de dados,
- início do servidor Web,
- execução php,
- client connection,
- data collection sending.

Alguns dados são também recolhidos a intervalos regulares.

### Recolhidos no arranque da base de dados

| Dados                   | Tipo                 | Notas                                                                                                 |
| ----------------------- | -------------------- | ----------------------------------------------------------------------------------------------------- |
| CPU                     | Text                 | Nome, tipo, e velocidade do processador                                                               |
| numberOfCores           | Número               | Número total de núcleos                                                                               |
| memory                  | Número               | Volume de armazenamento de memória (em bytes) disponível na máquina                                   |
| system                  | Text                 | Versão do sistema operativo e número de construção                                                    |
| headless                | Parâmetros           | Verdadeiro se a aplicação estiver a correr em modo sem cabeça                                         |
| version                 | Número               | Número da versão da aplicação 4D                                                                      |
| buildNumber             | Número               | Número da versão da aplicação 4D                                                                      |
| licença                 | Objeto               | Nome comercial e descrição das licenças do produto                                                    |
| isRosetta               | Parâmetros           | True se 4D for emulado através do Rosetta no macOS, False caso contrário (não emulado ou no Windows). |
| uniqueID                | Text                 | ID único do 4D Server                                                                                 |
| id                      | Text (hashed string) | Identificação única associada à base de dados (*Polinômio Rolling hash do nome da base de dados*)     |
| dataFileSize            | Número               | Tamanho do arquivo de dados em bytes                                                                  |
| indexesSize             | Número               | Tamanho do índice em bytes                                                                            |
| cacheSize               | Número               | Tamanho da cache em bytes                                                                             |
| usingLegacyNetworkLayer | Parâmetros           | Verdadeiro se a usar a camada de rede herdada para o servidor de aplicações                           |
| usingQUICNetworkLayer   | Parâmetros           | True if the database uses the QUIC network layer                                                      |
| encryptedConnections    | Parâmetros           | True se as ligações cliente/servidor forem encriptadas                                                |
| encrypted               | Parâmetros           | True se o arquivo de dados estiver criptografado                                                      |
| compiled                | Parâmetros           | Verdadeiro se a aplicação for compilada                                                               |
| isEngined               | Parâmetros           | Verdadeiro se a aplicação for fundida com o Volume Desktop 4D                                         |
| projectMode             | Parâmetros           | Verdadeiro se a aplicação for compilada                                                               |
| mobile                  | Collection           | Informação sobre sessões móveis                                                                       |


### Collected at web server startup and data collection sending

| Dados     | Tipo   | Notas                                                   |
| --------- | ------ | ------------------------------------------------------- |
| webServer | Objeto | "started":true if the web server is starting or started |


### Collected at regular intervals

| Dados                       | Tipo   | Notas                                      |
| --------------------------- | ------ | ------------------------------------------ |
| maximumNumberOfWebProcesses | Número | Número máximo de processos Web simultâneos |
| maximumUsedPhysicalMemory   | Número | Utilização máxima da memória física        |
| maximumUsedVirtualMemory    | Número | Utilização máxima da memória virtual       |


### Collected at data collection sending

| Dados                       | Tipo   | Notas                                                                       |
| --------------------------- | ------ | --------------------------------------------------------------------------- |
| uptime                      | Número | Tempo decorrido (em segundos) desde que a base de dados 4D local foi aberta |
| cacheReadBytes              | Objeto | Número de bytes lidos da cache                                              |
| cacheMissBytes              | Objeto | Número de bytes perdidos na cache                                           |
| cacheReadCount              | Objeto | Número de leituras na cache                                                 |
| cacheMissCount              | Objeto | Número de leituras falhadas na cache                                        |
| dataSegment1.diskReadBytes  | Objeto | Número de bytes lidos no ficheiro de dados                                  |
| dataSegment1.diskWriteBytes | Objeto | Número de bytes escritos no ficheiro de dados                               |
| dataSegment1.diskReadCount  | Objeto | Número de leituras no ficheiro de dados                                     |
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