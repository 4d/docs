---
id: HTTPAgentClass
title: HTTPAgent
---

A classe `HTTPAgent` permite que você manipule [objetos `HTTPAgent`] (#httpagent-object) que podem ser usados para gerenciar a persistência e a reutilização de conexões com servidores usando a classe [HTTPRequest] (HTTPRequestClass.md).

A classe `HTTPAgent` está disponível no repositório de classes `4D`. Você pode criar um novo objeto [`HTTPAgent`] (#httpagent-object) usando a função [4D.HTTPAgent.new()] (#4dhttpagentnew).

Quando nenhum agente está associado a uma solicitação HTTP, é usado um agente global com valores padrão. O agente padrão é a forma mais simples de agente HTTP, adequado para casos de uso básicos. Recomenda-se o uso de agentes personalizados para obter mais controle, no nível do agente e não para cada solicitação HTTP, sobre aspectos específicos da conexão, como configurações de keep-alive, tempos limite ou configurações de TLS/SSL.

<details><summary>História</summary>

| Release | Mudanças          |
| ------- | ----------------- |
| 20 R6   | Classe adicionada |

</details>

### Objeto HTTPAgent

Um objeto HTTPAgent é um objeto compartilhável.

Os objetos HTTPAgent fornecem as seguintes propriedades e funções:

|                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #HTTPAgentClass.options.Syntax -->](#options)<br/><!-- INCLUDE #HTTPAgentClass.options.Summary -->                            |
| [<!-- INCLUDE #HTTPAgentClass.requestsCount.Syntax -->](#requestsCount)<br/><!-- INCLUDE #HTTPAgentClass.requestsCount.Summary -->          |
| [<!-- INCLUDE #HTTPAgentClass.freeSocketsCount.Syntax -->](#freeSocketsCount)<br/><!-- INCLUDE #HTTPAgentClass.freeSocketsCount.Summary --> |

:::tip

Como o HTTPAgent é um objeto compartilhável, você pode adicioná-lo a uma classe singleton para poder usar o mesmo agente em todas as solicitações ao mesmo servidor.

:::

<!-- REF #4D.HTTPAgent.new().Desc -->

## 4D.HTTPAgent.new()

<!-- REF #4D.HTTPAgent.new().Syntax -->**4D.HTTPAgent.new**( { *options* : Object } ) : 4D.HTTPAgent<!-- END REF -->

<!-- REF #4D.HTTPAgent.new().Params -->

| Parâmetro  | Tipo                                              |                             | Descrição                      |
| ---------- | ------------------------------------------------- | :-------------------------: | ------------------------------ |
| options    | Object                                            |              ->             | opções padrão para o HTTPAgent |
| Resultados | [4D.HTTPAgent](#httpagent-object) | <- | Novo objeto HTTPAgent          |

<!-- END REF -->

#### Descrição

A função `4D.HTTPAgent.new()` <!-- REF #4D.HTTPAgent.new().Summary -->cria um objeto HTTPAgent compartilhável com as *opções* definidas e retorna um objeto `4D.HTTPAgent`<!-- END REF -->.

O [objeto `HTTPAgent`] (#httpagent-object) retornado é usado para personalizar as conexões com os servidores HTTP.

#### `options` parameter

No parâmetro *options*, passe um objeto que possa conter as seguintes propriedades (todas as propriedades são opcionais):

:::note

As opções do HTTPAgent serão mescladas com as [opções HTTPRequest](HTTPRequestClass.md#4dhttprequestnew) (as opções HTTPRequest têm prioridade); se nenhum agente específico for definido, será utilizado um agente global.

:::

| Propriedade            | Tipo       | Por padrão                                                                                                                                              | Descrição                                                                              |
| ---------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| keepAlive              | Parâmetros | true                                                                                                                                                    | Ativa o keep alive para o agente                                                       |
| maxSockets             | Integer    | 65535                                                                                                                                                   | Número máximo de sockets por servidor                                                  |
| maxTotalSockets        | Integer    | 65535                                                                                                                                                   | Número máximo de sockets para o agente                                                 |
| timeout                | Real       | indefinido                                                                                                                                              | Se definido, o tempo limite após o qual um soquete não utilizado é fechado             |
| certificatesFolder     | Folder     | singleton (consulte o valor padrão em [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | Define a pasta de certificados do cliente ativo para as solicitações que usam o agente |
| minTLSVersion          | Text       | singleton (consulte o valor padrão em [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | Define a versão mínima de TLS para as solicitações que usam esse agente                |
| protocol               | Text       | singleton (consulte o valor padrão em [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | Protocolo usado para as solicitações que usam o agente                                 |
| validateTLSCertificate | Parâmetros | singleton (consulte o valor padrão em [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | validateTLSCertificate para as solicitações que usam o agente                          |

:::note

Você pode solicitar vários servidores usando o mesmo agente. Nesse caso, cada servidor terá seu próprio pool de conexões usando as mesmas opções de agente.

:::

#### Exemplo

Criando o HTTPAgent:

```4d
var $options:={}
$options.maxSockets:=5 //5 é o número máximo de sockets por servidor
$options.maxTotalSockets:=10 //10 é o número máximo de sockets para o agente
$options.validateTLSCertificate:=True //Para validar o certificado do servidor

var $myAgent:=4D.HTTPAgent.new($options)

```

Envio de uma solicitação para verificar a hora local de qualquer cidade:

```4d
var $options:={}
$options.method:="GET"
$options.agent:=$myAgent
var $myRequest:=4D.HTTPRequest.new("http://worldtimeapi.org/api/timezone/Europe/Paris"; $options) 

```

:::note

Quando nenhum agente está associado a um HTTPRequest, é usado um agente global com valores padrão.

:::

<!-- REF #HTTPAgentClass.options.Desc -->

## .options

<!-- REF #HTTPAgentClass.options.Syntax -->**options** : Object<!-- END REF -->

#### Descrição

O objeto de propriedade `.options` contém <!-- REF #HTTPAgentClass.options.Summary -->as opções usadas atualmente do HTTPAgent<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPAgentClass.requestsCount.Desc -->

## .requestsCount

<!-- REF #HTTPAgentClass.requestsCount.Syntax -->**requestsCount** : Integer<!-- END REF -->

#### Descrição

A propriedade `.requestsCount` contém <!-- REF #HTTPAgentClass.requestsCount.Summary -->o número de solicitações atualmente tratadas pelo HTTPAgent<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPAgentClass.freeSocketsCount.Desc -->

## .freeSocketsCount

<!-- REF #HTTPAgentClass.freeSocketsCount.Syntax -->**freeSocketsCount** : Integer<!-- END REF -->

#### Descrição

A propriedade `.freeSocketsCount` contém <!-- REF #HTTPAgentClass.freeSocketsCount.Summary -->o número de sockets livres de `maxSockets` associados ao HTTPAgent<!-- END REF -->.

<!-- END REF -->
