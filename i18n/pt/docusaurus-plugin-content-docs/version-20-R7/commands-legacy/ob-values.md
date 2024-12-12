---
id: ob-values
title: OB Values
slug: /commands/ob-values
displayed_sidebar: docs
---

<!--REF #_command_.OB Values.Syntax-->**OB Values** ( *objeto* ) : Collection<!-- END REF-->
<!--REF #_command_.OB Values.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objeto | Object | &#8594;  | Objeto a retornar valores de propriedade |
| Resultado | Collection | &#8592; | Coleção de valores propriedade (variante) |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.OB Values.Summary-->O comando **OB Values** retorna uma coleção de variantes contendo todas os valores de propriedade enumeráveis de *objeto*.<!-- END REF--> 

A ordem de valores dentro da coleção retornada segue a ordem de definição das propriedades

#### Exemplo 

Se quiser uma coleção com todos os valores de propriedade de um objeto:

```4d
 var $person : Object
 var $col : Collection
 
 $person:=New object
 $person.lastName:="Smith"
 $person.firstName:="Jenny"
 $person.children:=New object("Mary";12;"Mark";8)
 
 $col:=OB Values($person)
 
  //$col[0]="Smith"
  //$col[1]="Jenny"
  //$col[2]={"Mary":12,"Mark":8}
```

#### Ver também 

[OB Entries](ob-entries.md)  
[OB Keys](ob-keys.md)  