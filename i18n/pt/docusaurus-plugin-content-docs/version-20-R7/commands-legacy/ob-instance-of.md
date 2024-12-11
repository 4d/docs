---
id: ob-instance-of
title: OB Instance of
slug: /commands/ob-instance-of
displayed_sidebar: docs
---

<!--REF #_command_.OB Instance of.Syntax-->**OB Instance of** ( *objeto* ; *classe* ) : Boolean<!-- END REF-->
<!--REF #_command_.OB Instance of.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objeto | Object | &#8594;  | Objeto cuja classe vai ser testada |
| classe | Object | &#8594;  | Classe a qual vai testar a pertenência |
| Resultado | Boolean | &#8592; | True se o objeto pertencer à classe especifica ou à uma classe child, senão false |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OB Instance of.Summary-->O comando **OB Instance of** devolve true se *objeto* pertencer à *classe* ou uma de suas classes filho, e em caso contrário false.<!-- END REF-->

Se *classe* não for um objeto Classe válido, se devolve o erro -10745.

#### Exemplo 

Criar a classe Polygon:

```4d
  //Classe: Polygon
 Class constructor
 var $1;$2 : Integer
 This.area:=$1*$2
```

Depois em um método, pode escrever:

```4d
 var $poly : Object
 var $instance : Boolean
 
 $poly:=cs.Polygon.new(4;3)
 
 $instance:=OB Instance of($poly;cs.Polygon)
  // true
 
 $instance:=OB Instance of($poly;4D.Object)
  // true 
 
 $instance:=OB Instance of($poly;cs.Circle)
  // false
```

#### Ver também 

[OB Class](ob-class.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1731 |
| Thread-seguro | &check; |
| Proibido no servidor ||


