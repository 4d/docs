---
id: clear-set
title: CLEAR SET
slug: /commands/clear-set
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR SET.Syntax-->**CLEAR SET** ( *conjunto* )<!-- END REF-->
<!--REF #_command_.CLEAR SET.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| conjunto | Text | &#8594;  | Nome do conjunto a limpar da memória |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.CLEAR SET.Summary-->CLEAR SET Apaga *conjunto* da memória e libera a memória utilizada por *conjunto*.<!-- END REF--> O comando não afeta as tabelas, seleções, ou registros. Para salvar um conjunto antes de apagá-lo, utilize o comando [SAVE SET](save-set.md). Como os conjuntos utilizam memória, é bom apagá-los quando não forem mais necessários.  

#### Exemplo 

Ver o exemplo do comando [USE SET](use-set.md "USE SET").

#### Ver também 

[CREATE EMPTY SET](create-empty-set.md)  
[CREATE SET](create-set.md)  
[LOAD SET](load-set.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 117 |
| Thread-seguro | &check; |


