---
id: is-field-value-null
title: Is field value Null
slug: /commands/is-field-value-null
displayed_sidebar: docs
---

<!--REF #_command_.Is field value Null.Syntax-->**Is field value Null** ( *campo* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is field value Null.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| campo | Field | &#8594;  | Campo a ser avaliado |
| Resultado | Boolean | &#8592; | TRUE = campo é NULL, False = campo não é NULL |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Is field value Null.Summary-->O comando Is field value Null retorna **True** se o campo determinado pelo parâmetro *Campo* contem o valor NULL e **False** do contrário.<!-- END REF-->  

O valor NULL é utilizado pelo motor SQL de 4D. Para maior informação, consulte *Manual de SQL* no manual 4D SQL.

O valor retornado por esse comando só tem significado se a opção *Mapear valores NULOS a valores vazios* não for selecionada no campo definição do editor de Structure. Se for selecionada, retorna **False**

**Nota:** este comando não pode ser utilizado com objetos e propriedades de objetos. Os valores nulos nos campos objeto são manejados através do comando [Null](null.md), 

#### Ver também 

[Null](null.md)  
[SET FIELD VALUE NULL](set-field-value-null.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 964 |
| Thread-seguro | &check; |


