---
id: records-in-table
title: Records in table
slug: /commands/records-in-table
displayed_sidebar: docs
---

<!--REF #_command_.Records in table.Syntax-->**Records in table** {( *tabela* )} : Integer<!-- END REF-->
<!--REF #_command_.Records in table.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para a qual vai devolver o número de registros, ou tabela padrão, se omitida |
| Resultado | Integer | &#8592; | Número total de registros na tabela |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Records in table.Summary-->Records in table devolve o número total dos registros que contém tabela.<!-- END REF--> [Records in selection](records-in-selection.md "Records in selection") devolve unicamente o número de registros na seleção atual. Se Records in table for utilizado dentro de uma transação, os registros criados durante a transação serão considerados

#### Exemplo 

O exemplo a seguir mostra um alerta que indica o número de registros na tabela:

```4d
 ALERT("Há "+String(Records in table([Pessoas]))+" registros na tabela.")
```

#### Ver também 

[Records in selection](records-in-selection.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 83 |
| Thread-seguro | &check; |


