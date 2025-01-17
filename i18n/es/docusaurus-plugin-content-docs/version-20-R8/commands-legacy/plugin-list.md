---
id: plugin-list
title: PLUGIN LIST
slug: /commands/plugin-list
displayed_sidebar: docs
---

<!--REF #_command_.PLUGIN LIST.Syntax-->**PLUGIN LIST** ( *arrayNumeros* ; *arrayNoms* )<!-- END REF-->
<!--REF #_command_.PLUGIN LIST.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| arrayNumeros | Integer array | &#8592; | Números de los plug-ins |
| arrayNoms | Text array | &#8592; | Nombres de los plug-ins |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.PLUGIN LIST.Summary-->El comando PLUGIN LIST llena los arrays *arrayNumeros* y *arrayNoms* con los números y los nombres de los plug-ins cargados por la aplicación 4D.<!-- END REF--> Estos dos arrays son dimensionados y sincronizados automáticamente por el comando. 

**Nota:** puede comparar los valores devueltos en el array *arrayNumeros* con las constantes del tema *Licencia disponible*. 

PLUGIN LIST tiene en cuenta todos los plug-ins, incluyendo aquellos que están integrados (por ejemplo 4D Chart) y los plug-ins de terceras partes.

#### Ver también 

[COMPONENT LIST](component-list.md)  
[Get plugin access](get-plugin-access.md)  
[Is license available](is-license-available.md)  
[SET PLUGIN ACCESS](set-plugin-access.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 847 |
| Hilo seguro | &check; |


