---
id: ob-get-property-names
title: OB GET PROPERTY NAMES
slug: /commands/ob-get-property-names
displayed_sidebar: docs
---

<!--REF #_command_.OB GET PROPERTY NAMES.Syntax-->**OB GET PROPERTY NAMES** ( *objeto* ; *nomProp* {; *arrTipos*} )<!-- END REF-->
<!--REF #_command_.OB GET PROPERTY NAMES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objeto | Object | &#8594;  | Objeto estructurado |
| nomProp | Text array | &#8592; | Nombres de las propiedades |
| arrTipos | Integer array | &#8592; | Tipos de propiedades |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OB GET PROPERTY NAMES.Summary-->El comando **OB GET PROPERTY NAMES** devuelve, en *arrProp*, los nombres de las propiedades contenidas en el objeto de lenguaje designados por el parámetro *objeto* .<!-- END REF-->debe haber sido definido utilizando el comando [C\_OBJECT](c-object.md) o designar un campo objeto 4D.  
  
Pase un array texto en el parámetro *arrProp*. Si el array no existe, el comando lo crea y lo redimensiona de forma automática.  
  
Opcionalmente, también puede pasar un array entero largo en *arrTipos*. Para cada elemento de *arrProp*, el comando devuelve, en *arrTipos*, el tipo de valor almacenado en la propiedad. Puede comparar los valores recibidos con las siguientes constantes, que se encuentran en el tema "*Tipos de campos y variables*":

| Constante     | Tipo         | Valor |
| ------------- | ------------ | ----- |
| Is Boolean    | Entero largo | 6     |
| Is collection | Entero largo | 42    |
| Is null       | Entero largo | 255   |
| Is object     | Entero largo | 38    |
| Is real       | Entero largo | 1     |
| Is text       | Entero largo | 2     |
| Object array  | Entero largo | 39    |

**Nota:** para los atributos array, el comando devuelve Is collection. 

#### Ejemplo 1 

Desea probar que un objeto no está vacío:

```4d
 ARRAY TEXT(arrNames;0)
 ARRAY LONGINT(arrTypes;0)
 var $ref_richard : Object
 OB SET($ref_richard;"name";"Richard";"age";7)
 OB GET PROPERTY NAMES($ref_richard;arrNames;arrTypes)
  // arrNames{1}="name", arrNames{2}="age"
  // arrTypes{1}=2, arrTypes{2}=1
 If(Size of array(arrNames)#0)
  // ...
 End if
```

#### Ejemplo 2 

Utilizando un elemento de array de objetos:

```4d
 var $Children;$ref_richard;$ref_susan;$ref_james : Object
 ARRAY OBJECT($arrayChildren;0)
 
 OB SET($ref_richard;"name";"Richard";"age";7)
 APPEND TO ARRAY($arrayChildren;$ref_richard)
 OB SET($ref_susan;"name";"Susan";"age";4;"girl";True) //atributo adicional
 APPEND TO ARRAY($arrayChildren;$ref_susan)
 OB SET($ref_james;"name";"James")
 OB SET NULL($ref_james;"age") //null attribute
 APPEND TO ARRAY($arrayChildren;$ref_james)
 
 OB GET PROPERTY NAMES($arrayChildren{1};$arrNames;$arrTypes)
  // $arrayChildren{1} = {"name":"Richard","age":7}
  // $arrNames{1}="name"
  // $arrNames{2}="age"
  // $arrTypes{1}=2
  // $arrTypes{2}=1
 
 OB GET PROPERTY NAMES($arrayChildren{2};$arrNames;$arrTypes)
  // $arrayChildren{3} = {"name":"Susan","age":4,"girl":true}
  // $arrNames{1}="name"
  // $arrNames{2}="age"
  // $arrNames{3}="girl"
  // $arrTypes{1}=2
  // $arrTypes{2}=1
  // $arrTypes{3}=6
 
 OB GET PROPERTY NAMES($arrayChildren{3};$arrNames;$arrTypes)
  // $arrayChildren{3} = {"name":"James","age":null}
  // $arrNames{1}="name"
  // $arrNames{2}="age"
  // $arrTypes{1}=2
  // $arrTypes{2}=255
```

#### Ver también 

[OB Get type](ob-get-type.md)  
[OB SET NULL](ob-set-null.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1232 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


