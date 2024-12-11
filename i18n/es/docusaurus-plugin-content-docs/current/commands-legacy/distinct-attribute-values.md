---
id: distinct-attribute-values
title: DISTINCT ATTRIBUTE VALUES
slug: /commands/distinct-attribute-values
displayed_sidebar: docs
---

<!--REF #_command_.DISTINCT ATTRIBUTE VALUES.Syntax-->**DISTINCT ATTRIBUTE VALUES** ( *campoObjeto* ; *ruta* ; *arrayValores* )<!-- END REF-->
<!--REF #_command_.DISTINCT ATTRIBUTE VALUES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| campoObjeto | Field | &#8594;  | Campo de objeto del que desea obtener la lista de valores de atributos distintos |
| ruta | Text | &#8594;  | Ruta de acceso del atributo cuyos valores distintos desea obtener |
| arrayValores | Text array, Integer array, Boolean array, Date array, Time array | &#8592; | Valores distintos en la ruta de atributos |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DISTINCT ATTRIBUTE VALUES.Summary-->**Tema:** Arrays

El comando **DISTINCT ATTRIBUTE VALUES** crea y llena el *arrayValores* con valores no repetidos (únicos) procedentes del atributo *ruta* en el campo *campoObjeto* para la selección actual de la tabla a la que pertenece el campo.<!-- END REF--> Si *campoObjeto* no es un campo de objeto indexado, se devuelve un error.

Pase en *ruta* una ruta atributo válida. Utilice la notación punto estándar para definir rutas a atributos anidados, por ejemplo "empresa.direccion.numero". Tenga en cuenta que los nombres de atributos objeto son sensibles a las mayúsculas y minúsculas.

El array que pasó en *arrayValores* debe ser del mismo tipo que el atributo *ruta* pasado como parámetro, de lo contrario el array se vuelve a digitar. Sólo se admiten los siguientes tipos de arrays: numérico, texto, fecha y hora (los valores deben ser escalar: punteros, objetos, blobs o imágenes no son soportados).

Después de la llamada, el tamaño del array es igual al número de valores distintos que se encuentran en la selección. El comando no cambia la selección actual o el registro actual.

##### Utilización de la propiedad virtual .length 

Puede utilizar la propiedad virtual "longitud" con este comando. Está disponible automáticamente para todos los atributos de tipo array, y ofrece el tamaño del array, es decir, el número de elementos que contiene. Esta propiedad está diseñada para ser utilizada en búsquedas (ver **QUERY BY ATTRIBUTE**[QUERY BY ATTRIBUTE](query-by-attribute.md)). También se puede utilizar con el comando **DISTINCT ATTRIBUTE VALUES** para obtener los diferentes tamaños de array para un atributo.

#### Ejemplo 

Su base contiene un campo objeto \[Customer\]full\_Data (indexado) con 12 registros:

![](../assets/en/commands/pict2897927.en.png)

Si ejecuta este código:

```4d
 ARRAY LONGINT(aLAges;0)
 ALL RECORDS([Customer])
  //get the distinct values for the "age" attibute
 DISTINCT ATTRIBUTE VALUES([Customer]full_Data;"age";aLAges)
```

El array *aLAges* obtiene los siguientes 9 elementos:

```4d
  //aLAges{1}=33
  //aLAges{2}=35
  //aLAges{3}=36
  //aLAges{4}=40
  //aLAges{5}=42
  //aLAges{6}=44
  //aLAges{7}=52
  //aLAges{8}=54
  //aLAges{9}=60
```

#### Ver también 

  
[DISTINCT ATTRIBUTE PATHS](distinct-attribute-paths.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1397 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


