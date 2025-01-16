---
id: adjust-index-cache-priority
title: ADJUST INDEX CACHE PRIORITY
slug: /commands/adjust-index-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.ADJUST INDEX CACHE PRIORITY.Syntax-->**ADJUST INDEX CACHE PRIORITY** ( *Campo* ; *prioridade* )<!-- END REF-->
<!--REF #_command_.ADJUST INDEX CACHE PRIORITY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Field | Field | &#8594;  | Campo cujos valores de prioridade índice serão ajustados |
| prioridade | Integer | &#8594;  | Valor de prioridade de cache para campos índice |

<!-- END REF-->

#### Modo especialista 

<!--REF #_command_.ADJUST INDEX CACHE PRIORITY.Summary-->Este comando está reservado para necessidades específicas.<!-- END REF--> Deve ser utilizado com cuidado, já que pode afetar o rendimento do banco de dados.

#### Descrição 

O comando **ADJUST INDEX CACHE PRIORITY** modifica o valor *prioridade* de indíces relacionados ao *Campo* em cache para o processo atual. Uma chamada para este comando substitui qualquer valor de prioridade ajustado através do mesmo comando no mesmo processo. Este comando ajusta a prioridade para necessidades temporárias, como por exemplo quando executando uma importação ou uma pesquisa. 

**Nota:** Este comando só funciona em modo local (4D Server e 4D); não pode ser usado em modo 4D remoto. 

Este comando maneja prioridades para todos os índices relacionados a *Campo*, incluindo índices de palavras chaves. Entretanto, não muda a prioridade de índices compostos. 

Passe em *prioridade* uma das constantes abaixo do tema "*Gestão de Cache*" :

| Constante                | Comentário                                      |
| ------------------------ | ----------------------------------------------- |
| Cache priority low       |                                                 |
| Cache priority very low  |                                                 |
| Cache priority normal    | Define a prioridade da cache a seu valor padrão |
| Cache priority high      |                                                 |
| Cache priority very high |                                                 |

#### Exemplo 

Se quiser mudar temporariamente a prioridade de cache para o índice de campo \[Docs\]Comments:

```4d
 ADJUST INDEX CACHE PRIORITY([Docs]Comments;Cache priority very high)
 QUERY([Docs];[Docs]Comments%"Extra") // pesquisa um campo indexado
  //... executa diversas pesquisas ou ordenações na mesma tabela
  // quando terminar, volta a prioridade de cache para normal
 ADJUST INDEX CACHE PRIORITY([Docs]Comments;Cache priority normal)
```

#### Ver também 

[Get adjusted index cache priority](get-adjusted-index-cache-priority.md)  
[SET INDEX CACHE PRIORITY](set-index-cache-priority.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1430 |
| Thread-seguro | &check; |


