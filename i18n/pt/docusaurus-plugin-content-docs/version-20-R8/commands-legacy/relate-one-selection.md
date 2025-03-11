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

<!--REF #_command_.RELATE ONE SELECTION.Summary-->O comando **RELATE ONE SELECTION** cria uma nova seleção de registros em *tabela1* a partir da seleção de registros da *tabelaN* relacionada e carrega o primeiro registro da nova seleção como o registro atual.<!-- END REF--> 

Este comando só pode ser utilizado se há uma relação de *tabelaN* a *tabela1*. **RELATE ONE SELECTION** pode funcionar através de vários níveis de relações. Pode haver várias tabelas relacionadas entre a *tabelaN* e a *tabela1*. 

As relações podem ser manuais ou automáticas. Quando existem relações automáticas, elas são sempre usadas primeiro por **RELATE ONE SELECTION**. Quando vários caminhos são possíveis da tabela inicial para a tabela de destino, o **RELATE ONE SELECTION** usa o caminho mais curto, usando as relações automáticas (se houver). Se houver caminhos existentes do mesmo tamanho e você quiser controlar o caminho usado, ou se quiser “forçar” o uso de relações manuais, será necessário usar o comando [`SET FIELD RELATION`](set-field-relation.md).

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

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 349 |
| Thread-seguro | &check; |
| Modificar o registro atual ||
| Modificar a seleção atual ||


