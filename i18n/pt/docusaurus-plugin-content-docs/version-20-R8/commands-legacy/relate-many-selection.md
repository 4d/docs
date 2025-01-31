---
id: relate-many-selection
title: RELATE MANY SELECTION
slug: /commands/relate-many-selection
displayed_sidebar: docs
---

<!--REF #_command_.RELATE MANY SELECTION.Syntax-->**RELATE MANY SELECTION** ( *campo* )<!-- END REF-->
<!--REF #_command_.RELATE MANY SELECTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| campo | Field | &#8594;  | Campo da tabela Muitos (onde a relação começa) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.RELATE MANY SELECTION.Summary-->O comando RELATE MANY SELECTION cria uma seleção de registros na tabela Muitos, baseada na seleção atual da tabela Um.<!-- END REF-->  

**Nota**: RELATE MANY SELECTION muda o registro atual da tabela Um.

#### Exemplo 

Este exemplo seleciona todas as faturas de clientes com crédito superior ou igual a $1.000\. O campo *\[Faturas\]IDCliente* está relacionado com o campo *\[Clientes\]NumID*. 

```4d
  // Selecionar os clientes
 QUERY([Clientes];[Clientes]Credit>=1000)
  // Buscar todas as faturas relacionadas com cada um desses clientes
 RELATE MANY SELECTION([Faturas]IDCliente)
```

#### Ver também 

[QUERY](query.md)  
[RELATE ONE](relate-one.md)  
[RELATE ONE SELECTION](relate-one-selection.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 340 |
| Thread-seguro | &check; |
| Modificar o registro atual ||
| Modificar a seleção atual ||


