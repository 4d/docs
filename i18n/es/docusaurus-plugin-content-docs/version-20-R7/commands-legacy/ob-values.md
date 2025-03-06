---
id: ob-values
title: OB Values
slug: /commands/ob-values
displayed_sidebar: docs
---

<!--REF #_command_.OB Values.Syntax-->**OB Values** ( *objeto* ) : Collection<!-- END REF-->
<!--REF #_command_.OB Values.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objeto | Object | &#8594;  | Objeto para devolver valores de propiedad |
| Resultado | Collection | &#8592; | Colección de valores de propiedad (variante) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OB Values.Summary-->El comando **OB Values** devuelve una colección de variantes que contiene todos los valores de propiedad enumerables del *objeto*.<!-- END REF--> 

El orden de los valores dentro de la colección devuelta sigue el orden de definición de las propiedades.

#### Ejemplo 

Desea una colección con todos los valores de propiedad de un objeto:

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

#### Ver también 

[OB Entries](ob-entries.md)  
[OB Keys](ob-keys.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1718 |
| Hilo seguro | &cross; |


