---
id: object-set-subform-container-value
title: OBJECT SET SUBFORM CONTAINER VALUE
slug: /commands/object-set-subform-container-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET SUBFORM CONTAINER VALUE.Syntax-->**OBJECT SET SUBFORM CONTAINER VALUE** ( *value* )<!-- END REF-->
<!--REF #_command_.OBJECT SET SUBFORM CONTAINER VALUE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| value | any | &#8594;  | New value for the data source |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT SET SUBFORM CONTAINER VALUE.Summary-->The **OBJECT SET SUBFORM CONTAINER VALUE** command sets the current value of the data source bound with the subform container displayed in the parent form.<!-- END REF-->

This command can only be used in the context of a form used as a subform. In any other context, it does nothing.

Pass in *value* a value of the same type as the data source bound to the subform container. The data source must be an assignable expression (see *Assignable vs non-assignable expressions*), otherwise the command does nothing. 

For more information on bound variables and form/subform interaction, see *Managing the bound variable* on developer.4d.com.

#### Exemplo 

A detailed example is available in the [OBJECT Get subform container value](object-get-subform-container-value.md) section.

#### Ver também 

[Form](../commands/form.md)  
[OBJECT Get subform container value](object-get-subform-container-value.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1784 |
| Thread-seguro | &check; |
| Proibido no servidor ||


