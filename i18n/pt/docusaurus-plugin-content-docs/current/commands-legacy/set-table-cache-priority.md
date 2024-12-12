---
id: set-table-cache-priority
title: SET TABLE CACHE PRIORITY
slug: /commands/set-table-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.SET TABLE CACHE PRIORITY.Syntax-->**SET TABLE CACHE PRIORITY** ( *Tabela* ; *prioridade* )<!-- END REF-->
<!--REF #_command_.SET TABLE CACHE PRIORITY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Table | Table | &#8594;  | Tabela cuja prioridade de dados escalar vai ser estabelecida para a sessão |
| prioridade | Integer | &#8594;  | Valor de prioridade de cache para valores escalares na tabela |

<!-- END REF-->

#### Modo especialista 

<!--REF #_command_.SET TABLE CACHE PRIORITY.Summary-->Este comando está reservado para necessidades específicas.<!-- END REF--> Deve ser utilizado com cuidado, já que pode afetar o rendimento do banco de dados.

#### Descrição 

O comando **SET TABLE CACHE PRIORITY** estabelece uma *prioridade* específica para os dados relacionados a *Tabela* em cache para todos os processos na sessão atual. Este comando deve ser chamado nos métodos de banco de dados **On Startup** ou **On Server Startup**.

**Nota:** Este comando só funciona em modo local (4D Server e 4D); não pode ser usado em modo remoto 4D. 

Este comando gerencia prioridade para dados apenas em campos escalares (data, número ou tipo string). Prioridade para campos de tipo binário (Blobs, textos, imagens e objetos) é manejada pelo comando [SET BLOBS CACHE PRIORITY](set-blobs-cache-priority.md). 

Passe em *prioridade* uma das constantes abaixo do tema "*Gestão de Cache*":

| Constante                | Comentário                                      |
| ------------------------ | ----------------------------------------------- |
| Cache priority low       |                                                 |
| Cache priority very low  |                                                 |
| Cache priority normal    | Define a prioridade da cache a seu valor padrão |
| Cache priority high      |                                                 |
| Cache priority very high |                                                 |

#### Exemplo 

Em , se quiser estabelecer uma prioridade mais alta para os dados escalares \[Customer\] :

```4d
 SET TABLE CACHE PRIORITY([Customer];Cache priority very high)
```

#### Ver também 

[ADJUST INDEX CACHE PRIORITY](adjust-index-cache-priority.md)  
[ADJUST TABLE CACHE PRIORITY](adjust-table-cache-priority.md)  
[Get adjusted table cache priority](get-adjusted-table-cache-priority.md)  