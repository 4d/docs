---
id: object-set-font-size
title: OBJECT SET FONT SIZE
slug: /commands/object-set-font-size
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FONT SIZE.Syntax-->**OBJECT SET FONT SIZE** ( {* ;} *objeto* ; *tamaño* )<!-- END REF-->
<!--REF #_command_.OBJECT SET FONT SIZE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *), o Campo o variable (si se omite *) |
| tamaño | Integer | &#8594;  | Tamaño de fuente en puntos |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT SET FONT SIZE.Summary-->**OBJECT SET FONT SIZE** define los objetos formulario especificados por *objeto* para mostrarse utilizando el tamaño de fuente que se pasa en *tamaño*.<!-- END REF-->

Si especifica el parámetro opcional *\**, indica un nombre de objeto (una cadena) en *objeto*. Si omite el parámetro opcional \*, indica un campo o una variable en *objeto*. En este caso, usted especifica una referencia de un campo o de una variable (objetos campo o variable únicamente) en lugar de una cadena. Para mayor información sobre nombres de objetos, consulte la sección *Propiedades de los objetos*.

El *tamaño* puede ser cualquier entero entre 1 y 255\. Si el tamaño de fuente exacto no existe, los caracteres son redimensionados proporcionalmente.

El área para el objeto, como se definió en el formulario, debe ser lo suficientemente grande para mostrar los datos en el nuevo tamaño. De lo contrario, el texto puede truncarse o no ser visualizado.

**Nota:** si utiliza este comando en un *objeto* que estaba utilizando una hoja de estilo, la referencia a la hoja de estilo se elimina automáticamente del objeto - incluso si asigna los mismos atributos que los de la hoja de estilo.

#### Ejemplo 1 

El siguiente ejemplo define el tamaño de fuente para una variable llamada *vtInfo*: 

```4d
 OBJECT SET FONT SIZE(vtInfo;14)
```

#### Ejemplo 2 

El siguiente ejemplo define el tamaño de fuente para todos los objetos de formulario cuyo nombre comienza por "hl": 

```4d
 OBJECT SET FONT SIZE(*;"hl@";14)
```

#### Ver también 

*Interacción de comandos genéricos con textos multiestilos*  
[OBJECT Get font size](object-get-font-size.md)  
[OBJECT SET FONT](object-set-font.md)  
[OBJECT SET FONT STYLE](object-set-font-style.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 165 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


