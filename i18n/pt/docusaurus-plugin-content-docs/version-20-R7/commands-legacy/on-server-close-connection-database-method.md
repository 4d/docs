---
id: on-server-close-connection-database-method
title: On Server Close Connection database method
slug: /commands/on-server-close-connection-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Server Close Connection database method.Syntax-->$1, $2, $3 -> On Server Close Connection database method<!-- END REF-->
<!--REF #_command_.On Server Close Connection database method.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| $1 | Integer | &#8592; | Número de usuário utilizado internamente por 4D Server para identificar usuários |
| $2 | Integer | &#8592; | Número de conexão utilizado internamente por 4D Server para identificar uma conexão |
| $3 | Integer | &#8592; | Obsoleto: devolve sempre 0 mas deve ser declarado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.On Server Close Connection database method.Summary-->O **On Server Close Connection database method** é chamado no computador servidor cada vez que termina um processo 4D Client.<!-- END REF--> 

Como para o [On Server Open Connection database method](on-server-open-connection-database-method.md), 4D Server passa três parâmetros de tipo inteiro longo ao **On Server Close Connection database method**. Por outra parte, 4D Server não espera um resultado em retorno.

O método deve conter a declaração explícita de três parâmetros Inteiro longo:

```4d
 var $1;$2;$3 : Integer
```

Esta tabela detalha a informação oferecida pelos três parâmetros passados ao método base:

| **Parâmetro** | **Descrição**                                                                       |
| ------------- | ----------------------------------------------------------------------------------- |
| $1            | Número de usuário utilizado internamente por 4D Server para identificar usuários    |
| $2            | Número de conexão utilizado internamente por 4D Server para identificar uma conexão |
| $3            | Obsoleto: devolve sempre 0 mas deve ser declarado                                   |

O **On Server Close Connection database method** é o inverso exato do [On Server Open Connection database method](on-server-open-connection-database-method.md). Para maior informação e uma descrição deste método base, assim como para a descrição dos **processos 4D Client**, ver a descrição deste método base.

#### Exemplo 

Ver o primeiro exemplo para [On Server Open Connection database method](on-server-open-connection-database-method.md).
