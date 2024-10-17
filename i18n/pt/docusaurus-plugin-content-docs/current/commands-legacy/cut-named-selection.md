---
id: cut-named-selection
title: CUT NAMED SELECTION
slug: /commands/cut-named-selection
displayed_sidebar: docs
---

<!--REF #_command_.CUT NAMED SELECTION.Syntax-->**CUT NAMED SELECTION** ( {*tabela* ;} *nome* )<!-- END REF-->
<!--REF #_command_.CUT NAMED SELECTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela da qual cortar seleção, ou Tabela por padrão, se omitida |
| nome | Text | &#8594;  | Nome da seleção temporal a criar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.CUT NAMED SELECTION.Summary-->CUT NAMED SELECTION cria uma seleção temporal *nome* e coloca ali a seleção atual de *tabela*.<!-- END REF--> Diferente de [COPY NAMED SELECTION](copy-named-selection.md "COPY NAMED SELECTION"), este comando não copia a seleção atual de *tabela*, mas a move a própria tabela selecionada.

Depois de executar o comando, a seleção atual de *tabela* no processo atual fica vazia. Portanto, CUT NAMED SELECTION não deve ser utilizado quando um registro está sendo modificado. 

CUT NAMED SELECTION é mais eficiente em termos de utilização de memória, que [COPY NAMED SELECTION](copy-named-selection.md "COPY NAMED SELECTION"). [COPY NAMED SELECTION](copy-named-selection.md "COPY NAMED SELECTION"), utiliza 4 bytes de memória por cada registro da seleção. CUT NAMED SELECTION, só a referência à lista é movida. 

#### Exemplo 

O método seguinte vazia a seleção atual de uma tabela *\[Clientes\]*:

```4d
 CUT NAMED SELECTION([Clientes];"AEliminar")
 CLEAR NAMED SELECTION("AEliminar")
```

#### Ver também 

[CLEAR NAMED SELECTION](clear-named-selection.md)  
[COPY NAMED SELECTION](copy-named-selection.md)  
[USE NAMED SELECTION](use-named-selection.md)  