---
id: cs
title: cs
slug: /commands/cs
displayed_sidebar: docs
---

<!--REF #_command_.cs.Syntax-->**cs** -> Resultado<!-- END REF-->
<!--REF #_command_.cs.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Object | &larr; | Tienda de clases que contiene todas las clases de la base actual |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.cs.Summary-->El comando **cs** devuelve un objeto *Class Store* que contiene todas las clases usuario definidas en la base actual o en el componente.<!-- END REF--> TEste comando es necesario para instanciar un objeto de una clase usuario. 

**Nota:** este comando funciona solo en bases proyecto. En bases binarias, **cs** devuelve un Class Store vacío.

#### Ejemplo 

Ha creado la clase Polygon:

```4d
  //Clase: Polygon
 
 Class constructor
 var $1;$2 : Integer
 This.area:=$1*$2
```

Luego, en un método, puede escribir:

```4d
 var $poly : Object
 $poly:=cs.Polygon.new(4;3)
  // {area:12}
```

#### Ver también 

[4D](4d.md)  
[Super](super.md)  