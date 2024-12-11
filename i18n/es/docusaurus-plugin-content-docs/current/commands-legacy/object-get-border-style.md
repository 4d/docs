---
id: object-get-border-style
title: OBJECT Get border style
slug: /commands/object-get-border-style
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get border style.Syntax-->**OBJECT Get border style** ( {* ;} *objeto* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get border style.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o <br/>Campo o variable (si se omite *) |
| Resultado | Integer | &#8592; | Estilo de línea de borde |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT Get border style.Summary-->El comando **OBJECT Get border style** devuelve el estilo de línea de borde del objeto o de los objetos designado(s) por los parámetros *objeto* y *\**.<!-- END REF-->

Puede definir el estilo de línea del borde para un objeto en modo de diseño utilizando la lista de propiedades, o utilizando el comando [OBJECT SET BORDER STYLE](object-set-border-style.md).

Si pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no se pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto únicamente).

El comando devuelve un valor que corresponde al estilo de la línea fronteriza. Puede comparar el valor recibido con las siguientes constantes, que se encuentran en el tema "*Propiedades de los objetos*":

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

[OBJECT SET BORDER STYLE](object-set-border-style.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1263 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


