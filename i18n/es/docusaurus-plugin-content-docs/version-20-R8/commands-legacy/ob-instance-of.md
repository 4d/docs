---
id: ob-instance-of
title: OB Instance of
slug: /commands/ob-instance-of
displayed_sidebar: docs
---

<!--REF #_command_.OB Instance of.Syntax-->**OB Instance of** ( *objeto* ; *clase* ) : Boolean<!-- END REF-->
<!--REF #_command_.OB Instance of.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objeto | Object | &#8594;  | Objeto cuya clase se va a probar |
| clase | Object | &#8594;  | Clase para probar pertenencia |
| Resultado | Boolean | &#8592; | True si objeto pertenece a la clase especificada o a una clase hijo, y false en caso contrario |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OB Instance of.Summary-->El comando **OB Instance of** devuelve true si *objeto* pertenece a *clase* o una de sus clases hijo, y en caso contrario false.<!-- END REF-->

Si *clase* no es un objeto Clase válido, se devuelve el error -10745.

#### Ejemplo 

Creó la clase Polygon:

```4d
  //Clase: Polygon
 Class constructor
 var $1;$2 : Integer
 This.area:=$1*$2
```

Luego, en un método, puede escribir:

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

#### Ver también 

[OB Class](ob-class.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1731 |
| Hilo seguro | &check; |


