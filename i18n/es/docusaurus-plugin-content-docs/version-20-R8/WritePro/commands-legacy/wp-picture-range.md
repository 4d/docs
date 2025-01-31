---
id: wp-picture-range
title: WP Picture range
slug: /WritePro/commands/wp-picture-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Picture range.Syntax-->**WP Picture range** ( *rangoObj* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Picture range.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rangoObj | Object | &#8594;  | Rango de objetos del cual obtener imágenes |
| Resultado | Object | &#8592; | Rango de objetos que contiene imágenes únicamente |

<!-- END REF-->

#### Compatibilidad 

<!--REF #_command_.WP Picture range.Summary-->**WP Picture range** recibió el nombre de **WP Get pictures** en versiones anteriores de 4D Write Pro.<!-- END REF--> Ha sido renombrado por claridad.

#### Descripción 

El nuevo comando **WP Picture range** devuelve un objeto rango específico que referencia únicamente las imágenes contenidas en *rangoObj* que haya pasado en parámetro. El objeto rango de imágenes devuelto debe ser utilizado con [WP GET ATTRIBUTES](../commands/wp-get-attributes.md) y [WP SET ATTRIBUTES](../commands/wp-set-attributes.md) para manejar los atributos de imágenes.

En *rangoObj*, puede pasar:

* un rango, o
* un elemento (tabla / fila / párrafo / encabezado / pie / cuerpo / sección / subsección)

#### Ejemplo 

Usted desea cambiar el color del borde de las imágenes únicamente:

```4d
 $oPicts:=WP Get pictures($oSelection)
 WP SET ATTRIBUTES($oPicts;wk border color;"blue")
```

#### Ver también 

*Gestión de imágenes*  
*Utilizar los comandos del tema Texto con estilo*  
[WP Add picture](../commands/wp-add-picture.md)  
[WP INSERT PICTURE](../commands/wp-insert-picture.md)  
[WP Paragraph range](wp-paragraph-range.md)  
[WP Selection range](wp-selection-range.md)  
[WP Text range](wp-text-range.md)  