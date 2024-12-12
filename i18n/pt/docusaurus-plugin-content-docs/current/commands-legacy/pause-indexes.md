---
id: pause-indexes
title: PAUSE INDEXES
slug: /commands/pause-indexes
displayed_sidebar: docs
---

<!--REF #_command_.PAUSE INDEXES.Syntax-->**PAUSE INDEXES** ( *aTabela* )<!-- END REF-->
<!--REF #_command_.PAUSE INDEXES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Tabela para a qual parar os índices |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.PAUSE INDEXES.Summary-->O comando **PAUSE INDEXES**  desativa temporariamente todos os índices de *aTabela*, exceto o índice da chave primária .<!-- END REF-->  
  
Os índices não se eliminam fisicamente dos dados (arquivo .4DIndx) ou da estrutura da base ( \_USER\_INDEXES, ver *Tabelas sistema*), mas são inválidos e portanto não se atualizam. Quando os índices estão desativados, todas as operações realizadas em *aTabela* (pesquisas, ordens, adições, modificações e eliminações de registros) já não utilizam os índices.  
  
Este comando é especialmente útil quando é importado ou modificado grandes quantidades de dados em tabelas que têm vários índices. Como 4D deve atualizar os índices cada vez que um registro é validado, a operação poderia tomar uma quantidade considerável de tempo. Desativar os índices de antemão permite acelerar significativamente a operação.  
  
Para reativar os índices depois de terminada a operação, pode chamar ao comando [RESUME INDEXES](resume-indexes.md) para *aTabela*.  
  
**Nota*:*** Pode obter um resultado similar utilizando os comandos [CREATE INDEX](create-index.md) e [DELETE INDEX](delete-index.md), mas com diferenças:

* é necessário chamar a [DELETE INDEX](delete-index.md) / [CREATE INDEX](create-index.md) para cada índice em*Tabela*.
* chamar aos comandos [DELETE INDEX](delete-index.md) / [CREATE INDEX](create-index.md) muda o número interno do índice, o que não ocorre com **PAUSE INDEXES** / [RESUME INDEXES](resume-indexes.md). Mudar o número de índice gerará uma reindexação automática dos dados se o conjunto de dados mudar.

  
É chamado o comando **PAUSE INDEXES** para uma tabela e logo sai da base sem ter chamado ao comando [RESUME INDEXES](resume-indexes.md) para esta tabela, todos os índices da tabela são reconstruídos automaticamente quando reiniciada a base.  
  
**Nota**: Este comando não pode ser executado desde um 4D remoto.

#### Exemplo 

Exemplo de método de importação massivo de dados:

```4d
 PAUSE INDEXES([Articles])
 IMPORT DATA("HugeImport.txt") //Importing
 RESUME INDEXES([Articles])
```

#### Ver também 

[DELETE INDEX](delete-index.md)  
[RESUME INDEXES](resume-indexes.md)  