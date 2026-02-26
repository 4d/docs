---
id: wp-paragraph-range
title: WP Paragraph range
slug: /WritePro/commands/wp-paragraph-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Paragraph range.Syntax-->**WP Paragraph range** ( *rangoObj* : Object ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Paragraph range.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rangoObj | Object | &#8594;  | Rango o elemento |
| Resultado | Object | &#8592; | Rango de objetos que se refiere sólo a los párrafos |
</div>
<!-- END REF-->


## Descripción 

<!--REF #_command_.WP Paragraph range.Summary-->El comando **WP Paragraph range** devuelve un rango de objetos específico que se refiere únicamente a los párrafos contenidos en *rangoObj* que se pasó como parámetro.<!-- END REF--> El objeto rango de párrafo devuelto puede ser utilizado por [WP GET ATTRIBUTES](../commands/wp-get-attributes) y [WP SET ATTRIBUTES](../commands/wp-set-attributes) para manejar los atributos del párrafo únicamente.

En *rangoObj*, puede pasar:

* un rango, o
* un elemento (tabla / línea / párrafo / encabezado / pie de página / cuerpo / sección / subsección)

## Ejemplo 

Usted quiere definir el margen interior para los párrafos únicamente:

```4d
 $oParagraphs:=WP Get paragraphs($oSelection)
 WP SET ATTRIBUTES($oParagraphs;wk padding;20)
```

## Ver también 

[WP Picture range](../commands/wp-picture-range)  
[WP Selection range](../commands/wp-selection-range)  
[WP Text range](../commands/wp-text-range)  

