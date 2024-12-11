---
id: add-to-set
title: ADD TO SET
slug: /commands/add-to-set
displayed_sidebar: docs
---

<!--REF #_command_.ADD TO SET.Syntax-->**ADD TO SET** ( {*tabela* ;} *conjunto* )<!-- END REF-->
<!--REF #_command_.ADD TO SET.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela do registro atual, ou tabela padrão, se omitido |
| conjunto | Text | &#8594;  | Nome do conjunto ao qual adicionar os registros atuais |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ADD TO SET.Summary-->ADD TO SET adiciona o registro atual de *tabela* a conjunto.<!-- END REF--> O conjunto já deve existir; se não, ocorre um erro. Se não houver um registro atual para *tabela*, ADD TO SET não tem nenhum efeito.  

#### Ver também 

[REMOVE FROM SET](remove-from-set.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 119 |
| Thread-seguro | &check; |
| Modificar variáveis | error |
| Proibido no servidor ||


