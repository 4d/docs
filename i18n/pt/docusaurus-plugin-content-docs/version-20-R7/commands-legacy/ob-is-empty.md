---
id: ob-is-empty
title: OB Is empty
slug: /commands/ob-is-empty
displayed_sidebar: docs
---

<!--REF #_command_.OB Is empty.Syntax-->**OB Is empty** ( *objeto* ) : Boolean<!-- END REF-->
<!--REF #_command_.OB Is empty.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objeto | Object, Campo Object | &#8594;  | Objeto estruturado |
| Resultado | Boolean | &#8592; | True se objeto está vazio ou indefinido, caso contrário False |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OB Is empty.Summary-->O comando **OB Is empty** devolve **True** se *objeto* não está definido ou está vazio, e **False** se *objeto* está definido (inicializado) e contém ao menos uma propriedade.<!-- END REF-->deve ter sido criado com o comando *C\_OBJECT* ou designar um campo objeto 4D..

#### Exemplo 

Estes são os diferentes resultados deste comando como também do comando [OB Is defined](ob-is-defined.md), dependendo do contexto:

```4d
 var $ref : Object
 $empty:=OB Is empty($ref) // True
 $def:=OB Is defined($ref) // False
 
 OB SET($ref;"nome";"Susie";"idade";4)
  // $ref="{"nome":"Susie","idade":4}"
 $empty:=OB Is empty($ref) // False
 $def:=OB Is defined($ref) // True
 
 OB REMOVE($ref;"nome")
 OB REMOVE($ref;"idade")
 $empty:=OB Is empty($ref) // True
 $def:=OB Is defined($ref) // True
```

#### Ver também 

[OB Is defined](ob-is-defined.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1297 |
| Thread-seguro | &check; |


