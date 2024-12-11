---
id: remove-from-set
title: REMOVE FROM SET
slug: /commands/remove-from-set
displayed_sidebar: docs
---

<!--REF #_command_.REMOVE FROM SET.Syntax-->**REMOVE FROM SET** ( {*tabela* ;} *conjunto* )<!-- END REF-->
<!--REF #_command_.REMOVE FROM SET.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Registro atual da tabela, ou tabela padrão, se omitido |
| conjunto | Text | &#8594;  | Nome do conjunto ao qual para remover o registro atual |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.REMOVE FROM SET.Summary-->REMOVE FROM SET elimina o registro atual de *tabela* de *conjunto*.<!-- END REF--> O conjunto já deve existir; se não existir, ocorre um erro. Se não existir um registro atual para Tabela, REMOVE FROM SET não tem efeito.

#### Ver também 

[ADD TO SET](add-to-set.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 561 |
| Thread-seguro | &check; |
| Modificar variáveis | error |
| Proibido no servidor ||


