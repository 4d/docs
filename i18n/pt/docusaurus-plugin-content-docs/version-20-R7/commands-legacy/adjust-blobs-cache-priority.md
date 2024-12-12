---
id: adjust-blobs-cache-priority
title: ADJUST BLOBS CACHE PRIORITY
slug: /commands/adjust-blobs-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.ADJUST BLOBS CACHE PRIORITY.Syntax-->**ADJUST BLOBS CACHE PRIORITY** ( *Tabela* ; *prioridade* )<!-- END REF-->
<!--REF #_command_.ADJUST BLOBS CACHE PRIORITY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Table | Table | &#8594;  | Tabela cujos "blobs" de valores de prioridade de dados vão ser ajustados |
| prioridade | Integer | &#8594;  | Valor de prioridade de Cache para Blobs na tabela |

<!-- END REF-->

#### Modo especialista 

<!--REF #_command_.ADJUST BLOBS CACHE PRIORITY.Summary-->Este comando está reservado para necessidades específicas.<!-- END REF--> Deve ser utilizado com cuidado, já que pode afetar o rendimento do banco de dados.

#### Descrição 

O comando **ADJUST BLOBS CACHE PRIORITY** modifica a *prioridade* dos dados "blobs" relacionados com *tabela n*a caché para o processo atual. Uma chamada a este comando substitui todas as prioridades previamente ajustadas através do mesmo comando no mesmo processo. Este comando ajusta a prioridade para uma necessidade temporária, por exemplo durante uma pesquisa ou uma importação.

**Nota:** este comando só funciona em modo local (4D Server e 4D); Não pode ser utilizado em modo remoto 4D.

Os tipos de campos de datos "Blobs" incluem BLOB, texto, imagem e objeto. Este comando maneja a prioridade para tais dados quando forem armazenados no arquivo de dados unicamente.  
A prioridade para os campos de tipo escalar (como os tipos data, número ou strings) é ajustada pelo comando [ADJUST TABLE CACHE PRIORITY](adjust-table-cache-priority.md). 

Passe em *prioridad*e uma das constantes abaixo do tema "*Gestão de Cache*":

| Constante                | Tipo          | Valor | Comentário                                      |
| ------------------------ | ------------- | ----- | ----------------------------------------------- |
| Cache priority high      | Inteiro longo | 1000  |                                                 |
| Cache priority low       | Inteiro longo | \-900 |                                                 |
| Cache priority normal    | Inteiro longo | 0     | Define a prioridade da cache a seu valor padrão |
| Cache priority very high | Inteiro longo | 30000 |                                                 |
| Cache priority very low  | Inteiro longo | \-1   |                                                 |

#### Exemplo 

Se quiser mudar temporariamente a prioridade da cache dos campos de texto da tabela \[Docs\] armazenados no arquivo de dados ao executar uma pesquisa sequêncial:

```4d
 ADJUST BLOBS CACHE PRIORITY([Docs];Cache priority very high)
 QUERY([Docs];[Docs]Author#"A@") // pesquisa sequêncial de um campo não indexado
  //... executa várias outras pesquisas ou ordenações na mesma tabela
  // quando terminar, volta para prioridade de cache normal
 ADJUST BLOBS CACHE PRIORITY([Docs];Cache priority normal)
```

#### Ver também 

[Get adjusted blobs cache priority](get-adjusted-blobs-cache-priority.md)  
[SET BLOBS CACHE PRIORITY](set-blobs-cache-priority.md)  