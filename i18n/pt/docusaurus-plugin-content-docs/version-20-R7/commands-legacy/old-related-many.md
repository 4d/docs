---
id: old-related-many
title: OLD RELATED MANY
slug: /commands/old-related-many
displayed_sidebar: docs
---

<!--REF #_command_.OLD RELATED MANY.Syntax-->**OLD RELATED MANY** ( *campo* )<!-- END REF-->
<!--REF #_command_.OLD RELATED MANY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| campo | Field | &#8594;  | Um Campo |

<!-- END REF-->

#### Descrição 

OLD RELATED MANY funciona da mesma forma que [RELATE MANY](relate-many.md "RELATE MANY"), exceto que OLD RELATED MANY utiliza o valor anterior do campo Um para estabelecer a relação.  

**Nota**: OLD RELATED MANY utiliza o valor anterior do campo Muitos, tal como o devolve a função [Old](old.md "Old"). Para maior informação, consulte a descrição do comando [Old](old.md "Old").  
  
OLD RELATED MANY muda a seleção da tabela relacionada e seleciona o primeiro registro da seleção atual como registro atual.

#### Ver também 

[OLD RELATED ONE](old-related-one.md)  
[RELATE MANY](relate-many.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 263 |
| Thread-seguro | &check; |
| Modificar o registro atual ||
| Modificar a seleção atual ||
| Proibido no servidor ||


