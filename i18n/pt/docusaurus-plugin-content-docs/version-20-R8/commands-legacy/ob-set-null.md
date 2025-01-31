---
id: ob-set-null
title: OB SET NULL
slug: /commands/ob-set-null
displayed_sidebar: docs
---

<!--REF #_command_.OB SET NULL.Syntax-->**OB SET NULL** ( *objeto* ; *propriedade* )<!-- END REF-->
<!--REF #_command_.OB SET NULL.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objeto | Object, Campo Object | &#8594;  | Objeto estruturado |
| propriedade | Text | &#8594;  | Nome da propriedade onde o valor nulo será aplicado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OB SET NULL.Summary-->O comando **OB SET NULL** armazena o valor **null** no objeto de linguagem designado pelo parâmetro *objeto* .<!-- END REF-->deve ter sido definido utilizando o comando *C\_OBJECT* ou designar um campo objeto 4D..  
  
No parâmetro *propriedade*, passe a etiqueta da propriedade na que deseja armazenar o valor **null**. Se a propriedade já existe em *objeto*, seu valor se atualiza. Se não existe, é criada.  
Tenha em conta que o parâmetro *propriedade* tem em conta as maiúsculas e minúsculas.

#### Exemplo 

Queremos colocar o valor nulo na propriedade "idade" para Lea:

```4d
 var $ref : Object
 OB SET($ref;"nome";"Lea";"idade";4)
  // $ref = {"nome":"Lea","idade":4}
 ...
 OB SET NULL($ref ;"idade")
  // $ref = {"nome":"Lea","idade":null}
```

#### Ver também 

[Null](null.md)  
[OB GET PROPERTY NAMES](ob-get-property-names.md)  
[OB SET](ob-set.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1233 |
| Thread-seguro | &check; |


