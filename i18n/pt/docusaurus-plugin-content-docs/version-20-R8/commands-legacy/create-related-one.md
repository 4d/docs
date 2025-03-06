---
id: create-related-one
title: CREATE RELATED ONE
slug: /commands/create-related-one
displayed_sidebar: docs
---

<!--REF #_command_.CREATE RELATED ONE.Syntax-->**CREATE RELATED ONE** ( *campo* )<!-- END REF-->
<!--REF #_command_.CREATE RELATED ONE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| campo | Field | &#8594;  | Muitos campos |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.CREATE RELATED ONE.Summary-->CREATE RELATED ONE tem duas ações.<!-- END REF--> Se não existir um registro relacionado a *campo* (ou seja, se o valor atual de *campo*, não é encontrado no campo correspondente de nenhum registro da tabela relacionada), CREATE RELATED ONE cria um novo registro relacionado.   
  
Para guardar neste registro o valor do campo que provocou sua criação, atribua-o ao campo correspondente. Utilize o comando [SAVE RELATED ONE](save-related-one.md "SAVE RELATED ONE") para guardar o novo registro.  
  
Se já existe um registro relacionado, CREATE RELATED ONE atua como [RELATE ONE](relate-one.md "RELATE ONE") e carrega o registro relacionado em memória.

#### Ver também 

[SAVE RELATED ONE](save-related-one.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 65 |
| Thread-seguro | &check; |


