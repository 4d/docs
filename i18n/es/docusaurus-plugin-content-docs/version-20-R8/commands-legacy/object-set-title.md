---
id: object-set-title
title: OBJECT SET TITLE
slug: /commands/object-set-title
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET TITLE.Syntax-->**OBJECT SET TITLE** ( {* ;} *objeto* ; *titulo* )<!-- END REF-->
<!--REF #_command_.OBJECT SET TITLE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *), o Variable (si se omite *) |
| titulo | Text | &#8594;  | Nuevo título para el objeto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT SET TITLE.Summary-->El comando OBJECT SET TITLE cambia el título de los objetos especificados por *objeto* y lo reemplaza por el valor pasado en *titulo* *.<!-- END REF-->*  
  
Si especifica el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena) . Si omite el parámetro opcional \*, indica que el parámetro *objeto* es una variable. En este caso, usted especifica una referencia de un campo o de una variable (variable tipo objeto únicamente) en lugar de una cadena. Para mayor información sobre nombres de objetos, consulte la sección *Propiedades de los objetos*. 

OBJECT SET TITLE aplica a todos los tipos de objetos simples que contienen una etiqueta:

* botones y botones 3D,
* casillas de selección y casillas de selección 3D,
* botones radio y botones radio 3D,
* encabezados de listbox,
* textos estáticos,
* áreas de grupo.

Generalmente, este comando se aplica a un objeto a la vez. El área de título del objeto debe ser lo suficientemente grande para acomodar el texto; si no lo es, el texto se trunca. 

No utilice retornos de carro en *titulo*.

#### Ejemplo 1 

El siguiente ejemplo es el método de objeto de un botón de búsqueda ubicado en el área de pie de página de un formulario de salida mostrado por el comando [MODIFY SELECTION](modify-selection.md). El método busca una tabla; dependiendo de los resultados de búsqueda, activa o desactiva un botón titulado *bEliminar* y cambia su título:

```4d
 QUERY([Personas];[Personas]Nombre=vNombre)
 Case of
    :(Records in selection([Personas])=0) // No se encontró ninguna persona
       OBJECT SET TITLE(bDelete;" Borrar")
       OBJECT SET ENABLED(bDelete;False)
    :(Records in selection([Personas])=1) // Se encontró una persona
       OBJECT SET TITLE(bDelete;"Borrar persona")
       OBJECT SET ENABLED(bDelete;True)
    :(Records in selection([Personas])>1) // Se encontraron varias personas
       OBJECT SET TITLE(bDelete;"Borrar personas")
       OBJECT SET ENABLED(bDelete;True)
 End case
```

#### Ejemplo 2 

Usted quiere insertar los títulos en dos líneas:

```4d
 OBJECT SET TITLE(*;"header1";"Ascending sort \\\ \\Descending sort")
 OBJECT SET TITLE(*;"button1";"Click here \\to print")
```

![](../assets/en/commands/pict1242273.en.png)

#### Ver también 

[OBJECT Get title](object-get-title.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 194 |
| Hilo seguro | &cross; |


