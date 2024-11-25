---
id: ob-is-empty
title: OB Is empty
slug: /commands/ob-is-empty
displayed_sidebar: docs
---

<!--REF #_command_.OB Is empty.Syntax-->**OB Is empty** ( *objeto* ) : Boolean<!-- END REF-->
<!--REF #_command_.OB Is empty.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objeto | Object, Campo Object | &#8594;  | Objeto estructurado |
| Resultado | Boolean | &#8592; | True si objeto está vacío o indefinido, de lo contrario False |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OB Is empty.Summary-->El comando **OB Is empty** devuelve **True** si *objeto* no está definido o está vacío, y **False** si *objeto* está definido (inicializado) y contiene al menos una propiedad.<!-- END REF-->  
  
*objeto* debe haber sido creado con el comando [C\_OBJECT](c-object.md) o designar un campo objeto 4D.

#### Ejemplo 

Estos son los diferentes resultados de este comando como también del comando [OB Is defined](ob-is-defined.md), dependiendo del contexto:

```4d
 var $ref : Object
 $empty:=OB Is empty($ref) // True
 $def:=OB Is defined($ref) // False
 
 OB SET($ref;"nombre";"Susie";"edad";4)
  // $ref="{"nombre":"Susie","edad":4}"
 $empty:=OB Is empty($ref) // False
 $def:=OB Is defined($ref) // True
 
 OB REMOVE($ref;"nombre")
 OB REMOVE($ref;"edad")
 $empty:=OB Is empty($ref) // True
 $def:=OB Is defined($ref) // True
```

#### Ver también 

[OB Is defined](ob-is-defined.md)  