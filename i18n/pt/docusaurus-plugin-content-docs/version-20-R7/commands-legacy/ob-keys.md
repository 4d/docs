---
id: ob-keys
title: OB Keys
slug: /commands/ob-keys
displayed_sidebar: docs
---

<!--REF #_command_.OB Keys.Syntax-->**OB Keys** ( *objeto* ) : Collection<!-- END REF-->
<!--REF #_command_.OB Keys.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objeto | Object | &#8594;  | Objeto a retornar os nomes de propriedade |
| Resultado | Collection | &#8592; | Coleção de nomes de propriedade (strings) |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.OB Keys.Summary-->O comando **OB Keys** retorna uma coleção de strings contendo todos os nomes de propriedade enumeráveis do *objeto*.<!-- END REF--> 

Apenas os nomes de propriedade de primeiro-nível são retornados (nomes de propriedade de sub-objetos não são retornados). A ordem dos nomes dentro da coleção retornada seguem a ordem de definição das propriedades

#### Exemplo 

Se quiser uma coleção com todos os nomes de propriedade de primeiro-nível de um objeto:

```4d
 var $person : Object
 var $col : Collection

 $person:=New object
 $person.lastName:="Smith"
 $person.firstName:="Jenny"
 $person.children:=New object("Mary";12;"Mark";8)
 
 $col:=OB Keys($person)

 //$col[0]="lastName"
  //$col[1]="firstName"
  //$col[2]="children"


```

#### Ver também 

[OB Entries](ob-entries.md)  
[OB Values](ob-values.md)  