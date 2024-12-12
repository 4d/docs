---
id: adjust-table-cache-priority
title: ADJUST TABLE CACHE PRIORITY
slug: /commands/adjust-table-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.ADJUST TABLE CACHE PRIORITY.Syntax-->**ADJUST TABLE CACHE PRIORITY** ( *Tabela* ; *prioridade* )<!-- END REF-->
<!--REF #_command_.ADJUST TABLE CACHE PRIORITY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Table | Table | &#8594;  | Tabela cujo valor de prioridade de dados escalares vai ser ajustada |
| prioridade | Integer | &#8594;  | Valor de prioridade de cache para a tabela |

<!-- END REF-->

#### Modo especialista 

<!--REF #_command_.ADJUST TABLE CACHE PRIORITY.Summary-->Este comando está reservado para necessidades específicas.<!-- END REF--> Deve ser utilizado com cuidado, já que pode afetar o rendimento do banco de dados.

#### Descrição 

O comando **ADJUST TABLE CACHE PRIORITY** modifica o valor *prioridade* dos dados relacionados a *Tabela* em cache para o processo atual. Uma chamada para este comando substitui qualquer valor de prioridade anteriormente ajustado através do mesmo comando no mesmo processo. Este comando ajusta a prioridade para necessidades temporárias, por exemplo durante uma pesquisa ou importação. 

**Nota:** Este comando só funciona em modo local (4D Server e 4D); não pode ser usada em modo remoto. 

Este comando gerencia prioridade somente para dados em campos escalares (data, número, ou tipo string). Prioridade para campos de tipo binário (Blobs, textos, imagens, e objetos) é manejada pelo comando [ADJUST BLOBS CACHE PRIORITY](adjust-blobs-cache-priority.md). 

Passe em *prioridade* uma das constantes abaixo do tema "*Gestão de Cache*" :

| Constante                | Comentário                                      |
| ------------------------ | ----------------------------------------------- |
| Cache priority low       |                                                 |
| Cache priority very low  |                                                 |
| Cache priority normal    | Define a prioridade da cache a seu valor padrão |
| Cache priority high      |                                                 |
| Cache priority very high |                                                 |

#### Exemplo 

Se quiser mudar temporariamente a prioridade de cache para os campos escalares \[Docs\]:

```4d
 ADJUST TABLE CACHE PRIORITY([Docs];Cache priority low)
  // ... faz alguma operação específica
 ADJUST TABLE CACHE PRIORITY([Docs];Cache priority normal)
```

#### Ver também 

[Get adjusted table cache priority](get-adjusted-table-cache-priority.md)  
[SET TABLE CACHE PRIORITY](set-table-cache-priority.md)  