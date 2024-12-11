---
id: clear-named-selection
title: CLEAR NAMED SELECTION
slug: /commands/clear-named-selection
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR NAMED SELECTION.Syntax-->**CLEAR NAMED SELECTION** ( *nome* )<!-- END REF-->
<!--REF #_command_.CLEAR NAMED SELECTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nome | Text | &#8594;  | Nome da seleção temporal a apagar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.CLEAR NAMED SELECTION.Summary-->CLEAR NAMED SELECTION apaga *nome* da memória e libera a memória utilizada por *nome*.<!-- END REF-->CLEAR NAMED SELECTION não afeta as tabelas, seleções, ou registros. Como as seleções temporais utilizam memória, é recomendável apagar as seleções temporárias quando já não sejam necessárias.

Se *nome* foi criado pelo comando [CUT NAMED SELECTION](cut-named-selection.md "CUT NAMED SELECTION") e depois manipulado utilizando o comando [USE NAMED SELECTION](use-named-selection.md "USE NAMED SELECTION"), *nome* não existe mais em memória. Neste caso, não é necessário utilizar o comando CLEAR NAMED SELECTION.

#### Ver também 

[COPY NAMED SELECTION](copy-named-selection.md)  
[CUT NAMED SELECTION](cut-named-selection.md)  
[USE NAMED SELECTION](use-named-selection.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 333 |
| Thread-seguro | &check; |
| Proibido no servidor ||


