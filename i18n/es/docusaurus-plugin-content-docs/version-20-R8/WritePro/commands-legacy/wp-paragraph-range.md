---
id: wp-paragraph-range
title: WP Paragraph range
slug: /WritePro/commands/wp-paragraph-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Paragraph range.Syntax-->**WP Paragraph range** ( *rangoObj* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Paragraph range.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rangoObj | Object | &#8594;  | Rango o elemento |
| Resultado | Object | &#8592; | Rango de objetos que se refiere sólo a los párrafos |

<!-- END REF-->

#### Compatibilidad 

<!--REF #_command_.WP Paragraph range.Summary-->**WP Paragraph range** recibió el nombre de **WP Get paragraphs** en versiones anteriores de 4D Write Pro.<!-- END REF--> Ha sido renombrado por claridad.

#### Descripción 

El nuevo comando **WP Paragraph range** devuelve un rango de objetos específico que se refiere únicamente a los párrafos contenidos en *rangoObj* que se pasó como parámetro. El objeto rango de párrafo devuelto puede ser utilizado por [WP GET ATTRIBUTES](../commands/wp-get-attributes.md) y [WP SET ATTRIBUTES](../commands/wp-set-attributes.md) para manejar los atributos del párrafo únicamente.

En *rangoObj*, puede pasar:

* un rango, o
* un elemento (tabla / línea / párrafo / encabezado / pie de página / cuerpo / sección / subsección)

#### Ejemplo 

Usted quiere definir el margen interior para los párrafos únicamente:

```4d
 $oParagraphs:=WP Get paragraphs($oSelection)
 WP SET ATTRIBUTES($oParagraphs;wk padding;20)
```

#### Ver también 

[WP Picture range](wp-picture-range.md)  
[WP Selection range](wp-selection-range.md)  
[WP Text range](wp-text-range.md)  