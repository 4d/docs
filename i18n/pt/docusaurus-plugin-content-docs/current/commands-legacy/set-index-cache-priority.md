---
id: set-index-cache-priority
title: SET INDEX CACHE PRIORITY
slug: /commands/set-index-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.SET INDEX CACHE PRIORITY.Syntax-->**SET INDEX CACHE PRIORITY** ( *Campo* ; *prioridade* )<!-- END REF-->
<!--REF #_command_.SET INDEX CACHE PRIORITY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Field | Field | &#8594;  | Campo cujo valor de prioridade de índices vai ser estabelecida para a sessão |
| prioridade | Integer | &#8594;  | Valor de prioridade cache para o campo índice |

<!-- END REF-->

#### Modo especialista 

<!--REF #_command_.SET INDEX CACHE PRIORITY.Summary-->Este comando está reservado para necessidades específicas.<!-- END REF--> Deve ser utilizado com cuidado, já que pode afetar o rendimento do banco de dados.

#### Descrição 

O comando **SET INDEX CACHE PRIORITY** estabelece uma *prioridade* específica para o índice relacionado ao cache *Campo* para todos os processos na sessão atual. Este comando devia ser chamado no método de banco de dados **On Startup** ou **On Server Startup**. 

**Nota:** Este comando só funciona em modo local (4D Server e 4D); não pode ser usada em modo remoto 4D. 

Este comando maneja prioridade para todos os índices relacionadas ao *Campo*, incluindo índices de palavras chaves (prioridade de índices compostos não pode ser personalizada).

Passe em *prioridade* uma das constantes abaixo do tema "*Gestão de Cache*":

| Constante                | Comentário                                      |
| ------------------------ | ----------------------------------------------- |
| Cache priority low       |                                                 |
| Cache priority very low  |                                                 |
| Cache priority normal    | Define a prioridade da cache a seu valor padrão |
| Cache priority high      |                                                 |
| Cache priority very high |                                                 |

#### Exemplo 

Em , se quiser estabelecer uma alta prioridade para os índices campo \[Customer\]LastName:

```4d
 SET INDEX CACHE PRIORITY([Customer]LastName;Cache priority very high)
```

#### Ver também 

[ADJUST INDEX CACHE PRIORITY](adjust-index-cache-priority.md)  
[Get adjusted index cache priority](get-adjusted-index-cache-priority.md)  