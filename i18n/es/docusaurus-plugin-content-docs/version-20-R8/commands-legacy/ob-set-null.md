---
id: ob-set-null
title: OB SET NULL
slug: /commands/ob-set-null
displayed_sidebar: docs
---

<!--REF #_command_.OB SET NULL.Syntax-->**OB SET NULL** ( *objeto* ; *property* )<!-- END REF-->
<!--REF #_command_.OB SET NULL.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objeto | Object, Campo Object | &#8594;  | Objeto estructurado |
| property | Text | &#8594;  | Nombre de la propiedad donde el valor nulo se va a aplicar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OB SET NULL.Summary-->El comando **OB SET NULL** almacena el valor **null** en el objeto de lenguaje designado por el parámetro *objeto* .<!-- END REF-->debe haber sido definido utilizando el comando *C\_OBJECT* o designar un campo objeto 4D.  
  
En el parámetro *propiedad*, pase la etiqueta de la propiedad en la que desea almacenar el valor **null**. Si la propiedad ya existe en *objeto*, su valor se actualiza. Si no existe, se crea.  
Tenga en cuenta que el parámetro *propiedad* tiene en cuenta las mayúsculas y minúsculas.

#### Ejemplo 

Queremos poner el valor nulo en la propiedad "edad" para Lea:

```4d
 var $ref : Object
 OB SET($ref;"nombre";"Lea";"edad";4)
  // $ref = {"nombre":"Lea","edad":4}
 ...
 OB SET NULL($ref ;"edad")
  // $ref = {"nombre":"Lea","edad":null}
```

#### Ver también 

[Null](null.md)  
[OB GET PROPERTY NAMES](ob-get-property-names.md)  
[OB SET](ob-set.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1233 |
| Hilo seguro | &check; |


