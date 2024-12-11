---
id: save-related-one
title: SAVE RELATED ONE
slug: /commands/save-related-one
displayed_sidebar: docs
---

<!--REF #_command_.SAVE RELATED ONE.Syntax-->**SAVE RELATED ONE** ( *campo* )<!-- END REF-->
<!--REF #_command_.SAVE RELATED ONE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| campo | Field | &#8594;  | Campo Muitos |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SAVE RELATED ONE.Summary-->SAVE RELATED ONE guarda o registro relacionado a *campo*.<!-- END REF--> Execute este comando para atualizar um registro criado com [CREATE RELATED ONE](create-related-one.md), ou para guardar as mudanças realizadas a um registro carregado por [RELATE ONE](relate-one.md).

SAVE RELATED ONE não guardará um registro bloqueado. Quando utilize este comando, primeiro deve ter certeza que o registro não esteja bloqueado. Se o registro estiver bloqueado, o comando é ignorado, não se guarda o registro e não se devolve nenhum erro.

#### Ver também 

[CREATE RELATED ONE](create-related-one.md)  
[Locked](locked.md)  
[RELATE ONE](relate-one.md)  
*Triggers*  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 43 |
| Thread-seguro | &check; |
| Proibido no servidor ||


