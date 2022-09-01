---
id: data-collect
title: Sobre a coleção de dados
---

Para ajudar a tornar os produtos melhores, automaticamente coletamos dados referentes a estatísticas de usuário nas aplicações 4D Server Dados completados são anônimos e dados são transferidos sem ter impacto na experiência de usuário.

Esta página explica:

- que informação é coletada
- onde a informação é armazenada e quando é enviada a 4D
- como desativar a coleção de dados automática em aplicações cliente/servidor


## Informação coletada

Dados são coletados durante os eventos abaixo:

- 4D Server startup,
- abertura de banco de dados,
- fechamento de banco de dados,
- início do 4D Servidor.

### Dados coletados no início do 4D Server

| Dados         | Exemplo                                                                                              | Notas                                                               |
| ------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| CPU           | Intel(R) Core(TM) i7-2600 CPU @ 3.40GH 3.39GHz                                                       | Nome, tipo, e velocidade do processador                             |
| numberOfCores | 4                                                                                                    | Número total de núcleos                                             |
| memory        | 419430400                                                                                            | Volume de armazenamento de memória (em bytes) disponível na máquina |
| system        | Microsoft Windows 10 Pro 1809 (17763.253)                                                            | Versão do sistema operativo e número de construção                  |
| headless      | false                                                                                                | Verdadeiro se a aplicação estiver a correr em modo sem cabeça       |
| version       | 1960                                                                                                 | Número da versão da aplicação 4D                                    |
| buildNumber   | 123456                                                                                               | Número da versão da aplicação 4D                                    |
| licença       | {"name":"4D Developer Professional 19R6","products":[{"id":808464433,"name":"4D","allowedCount":1}]} | Nome comercial e descrição das licenças do produto                  |


### Recolhido por base de dados na abertura

| Dados                   | Exemplo                                                 | Notas                                                                                             |
| ----------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| id                      | string hashed                                           | Identificação única associada à base de dados (*Polinômio Rolling hash do nome da base de dados*) |
| dataFileSize            | 419430400                                               | Tamanho do arquivo de dados em bytes                                                              |
| indexesSize             | 419430400                                               | Tamanho do índice em bytes                                                                        |
| cacheSize               | 419430400                                               | Tamanho da cache em bytes                                                                         |
| usingLegacyNetworkLayer | fasle                                                   | Verdadeiro se a usar a camada de rede herdada para o servidor de aplicações                       |
| isEncrypted             | true                                                    | True se o arquivo de dados estiver criptografado                                                  |
| isCompiled              | true                                                    | Verdadeiro se a aplicação for compilada                                                           |
| isEngined               | true                                                    | Verdadeiro se a aplicação for fundida com o Volume Desktop 4D                                     |
| isProjectMode           | true                                                    | Verdadeiro se a aplicação for compilada                                                           |
| mobile                  | [{"os":"iOS", "version":"12.465", "simulator":"false"}] | Informação sobre sessões móveis                                                                   |


### Recolhido por base de dados no encerramento

| Dados  | Exemplo | Notas                                                                       |
| ------ | ------- | --------------------------------------------------------------------------- |
| uptime | 123456  | Tempo decorrido (em segundos) desde que a base de dados 4D local foi aberta |


### Recolhido pelo banco de dados ao iniciar o servidor web

| Dados     | Exemplo          | Notas          |
| --------- | ---------------- | -------------- |
| webServer | {"started":true} | Sempre verdade |



## Quando é armazenado e enviado?

Os dados recolhidos são escritos num ficheiro de texto (formato JSON) quando o Servidor 4D abandona o servidor. O ficheiro é armazenado dentro da pasta 4D ativa [](https://doc.4d.com/4dv19/help/command/en/page485.html), ou seja,

- no Windows: `Utilizadores\[userName]\AppData\Roaming\4D Server`
- em macOS: `/Users/[userName]/Library/ApplicationSupport/4D Server`

Uma vez por semana, o ficheiro é automaticamente enviado através da rede para 4D. O arquivo é então apagado da pasta 4D activa.

![](../assets/en/Admin/data-collect.png)

> Se o arquivo não pôde ser enviado por algum motivo, é, no entanto, apagado e não é exibida nenhuma mensagem de erro no lado do Servidor 4D.


## como desativar a coleção de dados automática em aplicações cliente/servidor

Pode desactivar a recolha automática de dados em [aplicações construídas cliente/servidor](../Desktop/building.md#clientserver-page).

Para desativar a coleção, passar o valor **Falso** para a chave [`ServerDataCollection`](https://doc.4d.com/4Dv19R6/4D/19-R6/ServerDataCollection.300-6011712.en.html) no arquivo `buildApp.4DSettings` , utilizado para construir a aplicação cliente/servidor.