---
id: all-records
title: ALL RECORDS
slug: /commands/all-records
displayed_sidebar: docs
---

<!--REF #_command_.ALL RECORDS.Syntax-->**ALL RECORDS** {( *tabela* )}<!-- END REF-->
<!--REF #_command_.ALL RECORDS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para a qual vai selecionar todos os registros, ou tabela padrão, se omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ALL RECORDS.Summary-->ALL RECORDS seleciona todos os registros de *tabela* para o processo atual.<!-- END REF--> ALL RECORDS faz do primeiro registro da seleção o registro atual e o carrega em memória. ALL RECORDS retorna os registros na ordem padrão, que é a ordem no qual os registros são armazenados no disco

#### Exemplo 

O exemplo a seguir mostra todos os registros da tabela \[Pessoas\]: 

```4d
 ALL RECORDS([Pessoas]) // Seleção de todos os registros na tabela
 DISPLAY SELECTION([Pessoas]) // Mostrar os registros no formulário de saída
```

#### Ver também 

[DISPLAY SELECTION](display-selection.md)  
[MODIFY SELECTION](modify-selection.md)  
[ORDER BY](order-by.md)  
[QUERY](query.md)  
[Records in selection](records-in-selection.md)  
[Records in table](records-in-table.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 47 |
| Thread-seguro | &check; |
| Modificar o registro atual ||
| Modificar a seleção atual ||


