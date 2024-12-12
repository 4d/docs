---
id: relate-one-selection
title: RELATE ONE SELECTION
slug: /commands/relate-one-selection
displayed_sidebar: docs
---

<!--REF #_command_.RELATE ONE SELECTION.Syntax-->**RELATE ONE SELECTION** ( *tabelaN* ; *tabela1* )<!-- END REF-->
<!--REF #_command_.RELATE ONE SELECTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabelaN | Table | &#8594;  | Nome da tabela Muitos (onde inicia a relação) |
| tabela1 | Table | &#8594;  | Nome da Tabela Um (onde termina a relação) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.RELATE ONE SELECTION.Summary-->O comando RELATE ONE SELECTION cria uma nova seleção de registros em *tabela1* a partir da seleção de registros da *tabelaN* relacionada e carrega o primeiro registro da nova seleção como o registro atual.<!-- END REF--> 

Este comando só pode ser utilizado se há uma relação de Muitos a Um. RELATE ONE SELECTION pode funcionar através de vários níveis de relações. Pode haver várias tabelas relacionadas entre a tabela Muitos e a tabela 1\. As relações podem ser manuais ou automáticas.

**RELATE ONE SELECTION** utiliza a "via mais curta" para passar da taba de início à tabela de destino. Se as vias existentes são de tamanho equivalente, e você precisar controlar o caminho utilizado, pode usar o comando [SET FIELD RELATION](set-field-relation.md). 

#### Exemplo 

O seguinte exemplo procura os clientes cujas faturas vencem hoje.  
  
Esta é uma maneira de criar uma seleção na tabela *\[Clientes\]*, a partir de uma seleção de registros da tabela *\[Faturas\]*:

```4d
 CREATE EMPTY SET([Clientes];"Data de vencimento do pagamento")
 QUERY([Faturas];[Faturas]DataVenc=Current date)
 While(Not(End selection([Faturas])))
    RELATE ONE([Faturas]ClienteID)
    ADD TO SET([Clientes];"Data de vencimento do pagamento")
    NEXT RECORD([Faturas])
 End while
```

A seguinte técnica utiliza **RELATE ONE SELECTION** para obter o mesmo resultado:  

```4d
 QUERY([Faturas];[Faturas]DataVence=Current date)
 RELATE ONE SELECTION([Faturas];[Clientes])
```
  
  
**Observe:** A partir da versão 11, este código pode ser inscrito desta maneira sem perder o rendimento:  

```4d
 QUERY([Clientes];[Faturas]DataVence=Current date)
```

#### Ver também 

*Conjuntos*  
[QUERY](query.md)  
[RELATE MANY SELECTION](relate-many-selection.md)  
[RELATE ONE](relate-one.md)  