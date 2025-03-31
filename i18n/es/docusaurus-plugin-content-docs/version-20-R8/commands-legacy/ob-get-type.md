---
id: ob-get-type
title: OB Get type
slug: /commands/ob-get-type
displayed_sidebar: docs
---

<!--REF #_command_.OB Get type.Syntax-->**OB Get type** ( *objeto* ; *propiedad* ) : Integer<!-- END REF-->
<!--REF #_command_.OB Get type.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objeto | Object | &#8594;  | Objeto estructurado |
| propiedad | Text | &#8594;  | Nombre de la propiedad |
| Resultado | Integer | &#8592; | Tipo de valor de la propiedad |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OB Get type.Summary-->El comando **OB Get type** devuelve el tipo del valor asociado a la *propiedad* del *objeto*.<!-- END REF-->debe haber sido definido utilizando el comando *C\_OBJECT* o designar un campo objeto 4D.

En el parámetro *propiedad*, pase la etiqueta de la propiedad cuyo tipo quiere conocer.  
Tenga en cuenta que el parámetro *propiedad* tiene en cuenta las mayúsculas y minúsculas.  
  
El comando devuelve un entero largo que indica el tipo de valor. Puede comparar este valor con las siguientes constantes, que se encuentran en el tema "*Tipos de campos y variables*":

| Constante     | Tipo         | Valor |
| ------------- | ------------ | ----- |
| Is Boolean    | Entero largo | 6     |
| Is collection | Entero largo | 42    |
| Is date       | Entero largo | 4     |
| Is null       | Entero largo | 255   |
| Is object     | Entero largo | 38    |
| Is real       | Entero largo | 1     |
| Is text       | Entero largo | 2     |
| Is undefined  | Entero largo | 5     |

**Nota:** para los atributos imagen, el comando devuelve Is object.

#### Ejemplo 

Queremos obtener el tipo de valores estándar:

```4d
 var $ref : Object
 OB SET($ref;"nombre";"smith";"edad";42)
 $type:=OB Get type($ref;"nombre") //$type devuelve 2
 $type2:=OB Get type($ref;"edad") //$type2 devuelve 1
```

#### Ver también 

[OB GET PROPERTY NAMES](ob-get-property-names.md)  
[Value type](value-type.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1230 |
| Hilo seguro | &check; |


