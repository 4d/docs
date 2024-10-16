---
id: set-query-and-lock
title: SET QUERY AND LOCK
slug: /commands/set-query-and-lock
displayed_sidebar: docs
---

<!--REF #_command_.SET QUERY AND LOCK.Syntax-->**SET QUERY AND LOCK** ( *bloq* )<!-- END REF-->
<!--REF #_command_.SET QUERY AND LOCK.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| bloq | Boolean | &#8594;  | True = bloquear os registros encontrados por pesquisas; False = Não bloquear os registros |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET QUERY AND LOCK.Summary-->O comando SET QUERY AND LOCK permite solicitar o bloqueio automático dos registros encontrados por todas as pesquisas que seguem o chamado deste comando na transação atual.<!-- END REF--> Isso significa que os registros não podem ser modificados por um processo diferente ao processo atual entre uma pesquisa e a manipulação de resultados.  
  
Por padrão, os registros encontrados pelas pesquisas não estão bloqueados. Passe [True](true.md "True") no parâmetro *bloq* para ativar o bloqueio.  
  
Este comando deve imperativamente ser utilizado no interior de uma transação. Se for chamado fora deste contexto, é gerado um erro. Isso permite um melhor controle do bloqueio de registros. Os registros encontrados permanecerão bloqueados até que a transação termine ( confirmada ou cancelada). Depois que a transação se completa, todos os registros são desbloqueados.  
  
Os registros estão bloqueados para todas as tabelas na transação atual.  
  
Quando uma instrução SET QUERY AND LOCK (True) for executada, os comandos de pesquisa (por exemplo QUERY) adotam um funcionamento específico se for encontrado um registro bloqueado:  
  
\- A pesquisa se detém e a variável sistema OK toma o valor 0,  
\- A seleção atual fica vazia,  
\- O conjunto sistema LockedSet contém o registro bloqueado que causou que a pesquisa fosse interrompida.  
  
Portanto, neste contexto é necessário testar o conjunto LockedSet definido depois de uma pesquisa infrutífera (seleção atual vazia ou variável OK em 0) para determinar a causa da falha.

Chame SET QUERY AND LOCK(False) com o objetivo de desativar o mecanismo posteriormente.

SET QUERY AND LOCK modifica unicamente o comportamento dos comandos de pesquisa em outras palavras:

* [QUERY](query.md)
* [QUERY SELECTION](query-selection.md)
* [QUERY BY EXAMPLE](query-by-example.md)
* [QUERY BY FORMULA](query-by-formula.md)
* [QUERY BY SQL](query-by-sql.md)
* [QUERY SELECTION BY FORMULA](query-selection-by-formula.md)
* [QUERY SELECTION WITH ARRAY](query-selection-with-array.md)
* [QUERY WITH ARRAY](query-with-array.md)
* [QUERY BY ATTRIBUTE](query-by-attribute.md)
* [QUERY SELECTION BY ATTRIBUTE](query-selection-by-attribute.md)

Entretanto, SET QUERY AND LOCK não afeta os outros comandos que modificam a seleção atual tais como as **[ALL RECORDS](all-records.md), [RELATE MANY](relate-many.md)** etc.

#### Exemplo 

Neste exemplo, não é possível apagar um cliente que teria sido passado da categoria “C” a categoria “A” em outro processo entre [QUERY](query.md "QUERY") e [DELETE SELECTION](delete-selection.md "DELETE SELECTION"): 

```4d
 START TRANSACTION
 SET QUERY AND LOCK(True)
 QUERY([Clientes];[Clientes]Categoria=“C”)
  //Neste momento, os registros encontrados são bloqueados automaticamente por todos os outros processos
 DELETE SELECTION([Clientes])
 SET QUERY AND LOCK(False)
 VALIDATE TRANSACTION
```

#### Gestão de erros 

Se o comando não é chamado no contexto de uma transação, um erro é gerado.

#### Ver também 

[QUERY](query.md)  