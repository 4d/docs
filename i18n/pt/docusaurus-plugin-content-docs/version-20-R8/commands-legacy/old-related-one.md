---
id: old-related-one
title: OLD RELATED ONE
slug: /commands/old-related-one
displayed_sidebar: docs
---

<!--REF #_command_.OLD RELATED ONE.Syntax-->**OLD RELATED ONE** ( *campo* )<!-- END REF-->
<!--REF #_command_.OLD RELATED ONE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| campo | Field | &#8594;  | Muitos campos |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OLD RELATED ONE.Summary-->OLD RELATED ONE funciona da mesma forma que [RELATE ONE](relate-one.md "RELATE ONE"), com a diferença de que OLD RELATED ONE utiliza o valor anterior de *campo* para estabelecer a relação.<!-- END REF-->  

**Nota**: OLD RELATED ONE utiliza o valor anterior do campo Muitos devolvido pela função [Old](old.md "Old"). Para maior informação, consulte a descrição do comando [Old](old.md "Old").

OLD RELATED ONE carrega o registro anteriormente relacionado ao registro atual. Então pode acessar aos campos desse registro. Se deseja modificar este registro relacionado anterior e guardá-lo, deve chamar a [SAVE RELATED ONE](save-related-one.md "SAVE RELATED ONE"). Tenha em conta que um registro que acaba de ser criado, não tem um registro relacionado anterior.

#### Variáveis e conjuntos do sistema 

Se o comando for executado corretamente e se os registros relacionados forem carregados, a variável sistema OK toma o valor 1\. Se o usuário clicar em **Cancelar** na caixa de diálogo de seleção do registro (que aparece quando o registro relacionado tenha sido modificado), a variável *OK*toma o valor 0\. 

#### Ver também 

[Old](old.md)  
[OLD RELATED MANY](old-related-many.md)  
[RELATE ONE](relate-one.md)  
[SAVE RELATED ONE](save-related-one.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 44 |
| Thread-seguro | &cross; |
| Modificar variáveis | OK |


