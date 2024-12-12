---
id: ob-keys
title: OB Keys
slug: /commands/ob-keys
displayed_sidebar: docs
---

<!--REF #_command_.OB Keys.Syntax-->**OB Keys** ( *objeto* ) : Collection<!-- END REF-->
<!--REF #_command_.OB Keys.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objeto | Object | &#8594;  | Objeto para devolver nombres de propiedad |
| Resultado | Collection | &#8592; | Colección de nombres de propiedad (cadenas) |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.OB Keys.Summary-->El comando **OB Keys** devuelve una colección de cadenas que contienen todos los nombres de propiedades enumerables del *objeto*.<!-- END REF--> 

Solo se devuelven los nombres de propiedades de primer nivel (no se devuelven los nombres de propiedades de los subobjetos). El orden de los nombres dentro de la colección devuelta sigue el orden de definición de las propiedades.

#### Ejemplo 

Quiere una colección con todos los nombres de propiedad de primer nivel de un objeto:

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

#### Ver también 

[OB Entries](ob-entries.md)  
[OB Values](ob-values.md)  