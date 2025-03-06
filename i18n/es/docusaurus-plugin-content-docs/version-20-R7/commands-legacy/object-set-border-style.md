---
id: object-set-border-style
title: OBJECT SET BORDER STYLE
slug: /commands/object-set-border-style
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET BORDER STYLE.Syntax-->**OBJECT SET BORDER STYLE** ( {* ;} *objeto* ; *estiloBorde* )<!-- END REF-->
<!--REF #_command_.OBJECT SET BORDER STYLE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)<br/>Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o <br/>Campo o variable (si se omite *) |
| estiloBorde | Integer | &#8594;  | Estilo de línea de borde |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT SET BORDER STYLE.Summary-->El comando **OBJECT SET BORDER STYLE** modifica el estilo de línea del borde del objeto(s) designada por los parámetros   *objeto* y *\** .<!-- END REF-->  
  
La propiedad "Border Line Style" modifica la apariencia de los contornos de objetos. Para obtener más información, consulte *Estilo del borde* en el manual de *Diseño*.  
  
Al pasar el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no se pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo u variable de objeto únicamente).  
  
En el parámetro *estiloBorde*, pase el valor del estilo de la línea fronteriza que desea aplicar al objeto. Puede pasar una de las siguientes constantes, que se encuentra en el tema "*Propiedades de los objetos*":

| Constante     | Tipo         | Valor | Comentario                                                                                                          |
| ------------- | ------------ | ----- | ------------------------------------------------------------------------------------------------------------------- |
| Border Dotted | Entero largo | 2     | Los objetos aparecen enmarcados con una línea punteada de 1-pt.                                                     |
| Border Double | Entero largo | 5     | Los objetos aparecen enmarcados con una línea doble, es decir, dos líneas continuas de 1-pt. separadas por un píxel |
| Border None   | Entero largo | 0     | Los objetos aparecen sin borde                                                                                      |
| Border Plain  | Entero largo | 1     | Los objetos aparecen enmarcado con una línea de borde continua de 1-pt.                                             |
| Border Raised | Entero largo | 3     | Los objetos aparecen con un efecto 3D (relieve)                                                                     |
| Border Sunken | Entero largo | 4     | Los objetos aparecen enmarcados con un efecto 3D hundido (relieve inverso)                                          |
| Border System | Entero largo | 6     | La línea del borde se dibuja en función de las especificaciones gráficas del sistema                                |

#### Ver también 

[OBJECT Get border style](object-get-border-style.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1262 |
| Hilo seguro | &cross; |


