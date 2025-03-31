---
id: license-usage
title: License usage
slug: /commands/license-usage
displayed_sidebar: docs
---

<!--REF #_command_.License usage.Syntax-->**License usage** : Collection<!-- END REF-->
<!--REF #_command_.License usage.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Collection | &#8592; | Uma coleção de objetos com informação sobre licenças retidas |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.License usage.Summary-->O comando **License usage** retorna uma coleção de objetos contendo informação das licenças retidas.<!-- END REF-->

Cada objeto na coleção retornada tem os atributos abaixo:

| **Nome propriedade**   | **Tipo** | **Descrição**                                                                                                            |
| ---------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------ |
| productId              | Number   | ID do tipo de licença                                                                                                    |
| productName            | Text     | Nome do tipo de licença                                                                                                  |
| productUsedCount       | Number   | Número de licenças retidas (incluindo essa mesma) quando a licença for retida                                            |
| productBalance         | Number   | Número de licenças retidas para o produto (logo após a ação)                                                             |
| globalProductUsedCount | Number   | Quando vários servidores estão rodando na mesma máquina, mostra a contagem de todas as licenças retidas para todos eles. |
| token                  | Number   | ID único da operação                                                                                                     |
| time                   | Text     | Timestamp que indica quando a licença foi retida, em formato ISO 8601                                                    |
| reason                 | Text     | A razão/chamada desse uso de licença                                                                                     |
| session                | Object   | Contém informação específica sobre a sessão de licença retida                                                            |

Dependendo do tipo de sessão (cliente 4D ou REST por exemplo), os conteúdos do objeto *session* na tabela acima variam. Veja abaixo para mais detalhes.

#### objeto session para sessões 4D client 

Dentro da coleção retornada para sessões 4D, cada elemento contém u m objeto session idêntico àquele retornado pelo comando [Process activity](../commands/process-activity.md):

| **Nome de propriedade** | **Tipo**      | **Descrição**                                                                 |
| ----------------------- | ------------- | ----------------------------------------------------------------------------- |
| type                    | Text (enum)   | Tipo de sessão. Valores possíveis: "remote", "storedProcedure", "web", "rest" |
| userName                | Text          | Nome usuário                                                                  |
| machineName             | Text          | Nome da máquina remota                                                        |
| systemUserName          | Text          | Nome da sessão de sistema aberto na máquina remota                            |
| IPAddress               | Text          | Endereço IP da máquina remota                                                 |
| hostType                | Text (enum)   | Tipo Host. Valores possíveis: "windows", "mac", "browser"                     |
| creationDateTime        | Date ISO 8601 | Data e hora da conexão da máquina remota                                      |
| state                   | Text (enum)   | Estado sessão. valores possíveis: "active", "postponed", "sleeping"           |
| ID                      | Text          | UUID da sessão                                                                |
| persistentID            | Text          | ID persistente da sessão                                                      |

#### objeto session para sessões SQL 

Essa tabela detalha os conteúdos do objeto session para sessões SQL:

| **Nome de propriedadeame** | **Tipo** | **Descrição**         |
| -------------------------- | -------- | --------------------- |
| IPAddress                  | Text     | Endereço IP da sessão |
| userAgent                  | Text     | Agente usuário        |
| userName                   | Text     | Nome usuário          |
| userId                     | Number   | ID de usuário         |

#### objeto session para sessões REST 

Essa tabela detalha os conteúdos do objeto sessão para sessões REST:

| **Nome de propriedade** | **Tipo** | **Descrição**                               |
| ----------------------- | -------- | ------------------------------------------- |
| userName                | Text     | Nome de usuário                             |
| sessionID               | Text     | Sessão REST ID                              |
| IPAddress               | Text     | ID do cliente que iniciou a sessão REST     |
| isDatastore             | Boolean  | True se a petição REST vem de uma datastore |


#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1782 |
| Thread-seguro | &cross; |


