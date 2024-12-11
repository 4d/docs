---
id: ob-set-array
title: OB SET ARRAY
slug: /commands/ob-set-array
displayed_sidebar: docs
---

<!--REF #_command_.OB SET ARRAY.Syntax-->**OB SET ARRAY** ( *objeto* ; *propriedade* ; *array* )<!-- END REF-->
<!--REF #_command_.OB SET ARRAY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objeto | Object, Object | &#8594;  | Objeto estruturado |
| propriedade | Text | &#8594;  | Nome da propriedade a definir |
| array | Array, Variable | &#8594;  | Array a armazenar em propriedade |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OB SET ARRAY.Summary-->O comando **OB SET ARRAY** define o *array* a ser associado a *propriedade* no objeto definido pelo parâmetro *objeto*.<!-- END REF-->deve ter sido definido com o comando [C\_OBJECT](c-object.md) ou designar um campo objeto 4D..  
  
No parâmetro *propriedade*, passe a etiqueta da propriedade a criar ou modificar. Se a propriedade já existe em *objeto*, seu valor se atualiza. Se não existe, é criado.  
Tenha em conta que o parâmetro *propriedade* leva em conta as maiúsculas e minúsculas.  
  
No parâmetro *array*, passe o array que deve passar como valor da propriedade. Se admitem vários tipos de array: real, inteiro longo, texto, booleano, objeto, ponteiro ou imagem.  
  
**Nota**: 

* variáveis simples são compatíveis com o parâmetro *array*, nesse caso um array de valor único é criado e associado com a *propriedade*
* não é possível utilizar arrays de duas dimensões.

#### Exemplo 1 

Utilizando um array texto:

```4d
 var $Children : Object
 ARRAY TEXT($arrChildren;3)
 $arrChildren{1}:="Richard"
 $arrChildren{2}:="Susan"
 $arrChildren{3}:="James"
 
 OB SET ARRAY($Children;"Children";$arrChildren)
  // Valor de $Children = {"Children":["Richard","Susan","James"]}
```

#### Exemplo 2 

Adição de um elemento de um array:

```4d
 ARRAY TEXT($arrText;2)
 $arrText{1}:="Smith"
 $arrText{2}:="White"
 var $Employees : Object
 OB SET ARRAY($Employees;"Employees";$arrText)
 APPEND TO ARRAY($arrText;"Brown") // Add to the 4D array
  // $Employees = {"Employees":["Smith","White"]}
 
 OB SET ARRAY($Employees;"Employees";$arrText)
  // $Employees = {"Employees":["Smith","White","Brown"]}
```

#### Exemplo 3 

Utilizando um array texto com seleção de um elemento:

```4d
  // $Employees = {"Employees":["Smith","White","Brown"]}
 OB SET ARRAY($Employees ;"Manager";$arrText{1})
  // $Employees = {"Employees":["Smith","White","Brown"],"Manager":["Smith"]}
```

#### Exemplo 4 

Uso de um array objeto:

```4d
 var $Children;$ref_richard;$ref_susan;$ref_james : Object
 ARRAY OBJECT($arrChildren;0)
 OB SET($ref_richard;"nom";"Richard";"age";7)
 APPEND TO ARRAY($arrChildren;$ref_richard)
 OB SET($ref_susan;"name";"Susan";"age";4)
 APPEND TO ARRAY($arrChildren;$ref_susan)
 OB SET($ref_james;"name";"James";"age";3)
 
 APPEND TO ARRAY($arrChildren;$ref_james)
 
  // $arrChildren {1} = {"name":"Richard","age":7}
  // $arrChildren {2} = {"name":"Susan","age":4}
  // $arrChildren {3} = {"name":"James","age":3}
 
 OB SET ARRAY($Children;"Children";$arrChildren)
 
  // $Children = {"Children":[{"name":"Richard","age":7},{"name":"Susan",
  // "age":4},{"name":"James","age":3}]}
```

Assim é como o objeto aparece no depurador:

![](../assets/en/commands/pict1211436.en.png)

#### Exemplo 5 

```4d
 ARRAY TEXT($arrGirls;3)
 $arrGirls{1}:="Emma"
 $arrGirls{2}:="Susan"
 $arrGirls{3}:="Jamie"
 OB SET ARRAY([People]Children;"Girls";$arrGirls)
```

![](../assets/en/commands/pict1899097.en.png)

#### Exemplo 6 

Usar um array de imagem:

```4d
 ARRAY PICTURE($arrPhotos;3)
 READ PICTURE FILE("pict1.jpg";$arrPhotos{1})
 READ PICTURE FILE("pict2.jpg";$arrPhotos{2})
 READ PICTURE FILE("pict3.jpg";$arrPhotos{3})
 
 OB SET ARRAY([Cities]Places;"Photoset";$arrPhotos)
```

#### Ver também 

*Conversões de Tipo entre coleções e arrays 4D*  
[OB GET ARRAY](ob-get-array.md)  
[OB SET](ob-set.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1227 |
| Thread-seguro | &check; |
| Proibido no servidor ||


