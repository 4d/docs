---
id: ob-remove
title: OB REMOVE
slug: /commands/ob-remove
displayed_sidebar: docs
---

<!--REF #_command_.OB REMOVE.Syntax-->**OB REMOVE** ( *objeto* ; *propriedade* )<!-- END REF-->
<!--REF #_command_.OB REMOVE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objeto | Object, Campo Object | &#8594;  | Objeto estruturado |
| propriedade | Text | &#8594;  | Nome da propriedade a remover |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OB REMOVE.Summary-->O comando **OB REMOVE** remove a *propriedade* do objeto de linguagem designado pelo parâmetro *objeto*.<!-- END REF--> Este comando remove a propriedade, assim como seu valor atual.  
  
*objeto* deve ter sido definido utilizando o comando *C\_OBJECT* ou designar um campo objeto 4D.  
  
No parâmetro *propriedade*, passe a etiqueta da propriedade a ler. Tenha em conta que o parâmetro *propriedade* leva em consideração as maiúsculas e minúsculas.

#### Exemplo 

Você quer eliminar a propriedade "idade" de um objeto:

```4d
 var $Object : Object
 OB SET($Object;"nome";"smith";"idade";42;"cliente";True)
  // $Object={"nome":"smith","idade":42,"client":true}
 OB REMOVE($Object;"idade")
  // $Object={"nome":"smith","cliente":true}
```

#### Ver também 

[OB SET](ob-set.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1226 |
| Thread-seguro | &check; |


