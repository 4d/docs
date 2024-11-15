---
id: ob-class
title: OB Class
slug: /commands/ob-class
displayed_sidebar: docs
---

<!--REF #_command_.OB Class.Syntax-->**OB Class** ( *objeto* ) : any<!-- END REF-->
<!--REF #_command_.OB Class.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objeto | Object | &#8594;  | Objeto cuya clase se devolverá |
| Resultado | Null, Object | &#8592; | Clase de objeto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OB Class.Summary-->El comando **OB Class** devuelve la clase del *objeto* pasado en el parámetro.<!-- END REF--> En 4D, todos los objetos son heredados del objeto clase. Si *objeto* no es un objeto existente, **OB Class** devuelve null. 

#### Ejemplo 

Usted ha creado la clase Polygon:

```4d
  //Clase: Polygon
 
 Class constructor
 var $1;$2 : Integer
 This.area:=$1*$2
```

Luego, en un método, puedes escribir:

```4d
 var $poly;$class : Object
 $poly:=cs.Polygon.new(4;3)
 
 $class:=OB Class($poly)
  //$class contains Class: Polygon
```

#### Ver también 

[OB Instance of](ob-instance-of.md)  