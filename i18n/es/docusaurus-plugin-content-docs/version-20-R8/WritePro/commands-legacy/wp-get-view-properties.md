---
id: wp-get-view-properties
title: WP Get view properties
slug: /WritePro/commands/wp-get-view-properties
displayed_sidebar: docs
---

<!--REF #_command_.WP Get view properties.Syntax-->**WP Get view properties** ( * ; *wpArea* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get view properties.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, wpArea es un nombre de objeto de formulario (cadena). Si se omite, wpArea es un campo de objeto o variable (documento) |
| wpArea | Text, Object | &#8594;  | Nombre del objeto del formulario (si se especifica *) o variable o campo del objeto 4D Write Pro (si se omite *) |
| Resultado | Object | &#8592; | Propiedades de la vista actual |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP Get view properties.Summary-->El comando **WP Get view properties** devuelve las propiedades de la vista actual para el área 4D Write Pro designada por *wpArea*.<!-- END REF--> 

Si pasa el parámetro opcional *\**, indica que *wpArea* es un nombre de objeto de formulario (cadena). Si no pasa este parámetro, indica que *wpArea* es un documento 4D Write Pro (variable objeto o campo). Este comando solo se puede utilizar si *wpArea* está asociada con un objeto de formulario (es decir, se muestra en el forpara definir a qué vista ir.

Las propiedades vista del área 4D Write Pro se pueden definir:

* a nivel del formulario en la Lista de propiedades,
* dinámicamente durante la sesión utilizando el comando [WP SET VIEW PROPERTIES](wp-set-view-properties.md).

**Objeto devuelto**

El objeto devuelto contiene todas las propiedades de vista del área 4D Write Pro, junto con su valor actual:

| Constante                    | Valor                  | Comentario                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| wk display formula as symbol | displayFormulaAsSymbol | Muestra las referencias de las fórmulas como un símbolo ![](../../assets/en/WritePro/commands/pict6013182.es.png). Sólo funciona si las fórmulas se muestran como referencias (ver wk visible references). Valores posibles: True/False                                                                                                                                                                                                                                  |
| wk formula highlight         | formulaHighlight       | Modo de vista de resaltado de fórmulas. Valores posibles: wk references (por defecto): se resaltan las fórmulas que se muestran como referencias wk values: se resaltan las fórmulas mostradas como valores wk always: las fórmulas se resaltan siempre, sea cual sea su modo de visualización wk never: las fórmulas no se resaltan nunca, sea cual sea su modo de visualización El color de las fórmulas resaltadas puede ser definido por wk formula highlight color. |
| wk formula highlight color   | formulaHighlightColor  | Color de las fórmulas resaltadas (ver wk formula highlight). Valores posibles: una cadena de color CSS ("#010101" o "#FFFFFF" o "rojo"). un valor entero largo de color 4D                                                                                                                                                                                                                                                                                               |
| wk page view mode            | pageMode               | Modo de visualización del documento 4D Write Pro en el área formulario en pantalla. Valores posibles (cadena): "draft": modo borrador con propiedades básicas del documento "page": modo de visualización más completo, que incluye bordes de la página, orientación, márgenes, saltos de pagina, encabezados y pies de página, etc. "embedded": modo de visualización adaptado a las áreas anidadas                                                                     |
| wk resolution                | dpi                    | Resolución de pantalla para los contenidos del área 4D Write Pro. Valores posibles: wk auto (0) Número mayor que 1                                                                                                                                                                                                                                                                                                                                                       |
| wk spell enable              | spellEnabled           | Activa la corrección ortográfica. Valores posibles: True/False                                                                                                                                                                                                                                                                                                                                                                                                           |
| wk visible background        | visibleBackground      | Muestra las imágenes de fondo y el color de fondo (efecto visible solo en el modo de vista de página o anidado). Valores posibles: Verdadero/Falso                                                                                                                                                                                                                                                                                                                       |
| wk visible empty images      | visibleEmptyImages     | Muestra o exporta un rectángulo negro por defecto para las imágenes que no pueden ser cargadas o calculadas (imágenes vacías o en un formato no soportado). Valores posibles: True/False. Valor por defecto: True Si el valor es False, los elementos imagen que falten no se mostrarán en absoluto aunque tengan bordes, ancho, alto o fondo; esto puede afectar al diseño de la página para las imágenes en línea.                                                     |
| wk visible footers           | visibleFooters         | Muestra los pies de página (efecto visible solo en el modo de visualización de página). Valores posibles: Verdadero/Falso                                                                                                                                                                                                                                                                                                                                                |
| wk visible headers           | visibleHeaders         | Muestra los encabezados (efecto visible solo en el modo de visualización de página). Valores posibles: Verdadero/Falso                                                                                                                                                                                                                                                                                                                                                   |
| wk visible hidden characters | visibleHiddenChars     | Muestra los caracteres invisibles. Valores posibles: Verdadero/Falso                                                                                                                                                                                                                                                                                                                                                                                                     |
| wk visible horizontal ruler  | visibleHorizontalRuler | Muestra la regla horizontal. Valores posibles: Verdadero/Falso                                                                                                                                                                                                                                                                                                                                                                                                           |
| wk visible HTML WYSIWYG      | htmlWYSIWIGEnabled     | Activa la vista HTML WYSIWYG. Valores posibles: True/False                                                                                                                                                                                                                                                                                                                                                                                                               |
| wk visible page frames       | visiblePageFrames      | Muestra los marcos de página (efecto visible solo en el modo de visualización de página). Valores posibles: Verdadero/Falso                                                                                                                                                                                                                                                                                                                                              |
| wk visible references        | visibleReferences      | Muestra todas las expresiones 4D insertadas en el documento como referencias. Valores posibles: Verdadero/Falso                                                                                                                                                                                                                                                                                                                                                          |
| wk visible vertical ruler    | visibleVerticalRuler   | Muestra la regla vertical (efecto visible solo en el modo de visualización de página). Valores posibles: Verdadero/Falso                                                                                                                                                                                                                                                                                                                                                 |
| wk zoom                      | zoom                   | Porcentaje de zoom para mostrar los contenidos del área 4D Write Pro. Valores posibles: Número mayor que 1                                                                                                                                                                                                                                                                                                                                                               |

#### Ejemplo 

En el área de 4D Write Pro, desea mostrar las reglas solo en el modo página:

```4d
 var $viewProps : Object
 $viewProps:=WP Get view properties(*;"4DWPArea")
 If($viewProps.pageMode="page")
    $viewProps.visibleHorizontalRuler:=True
    $viewProps.visibleVerticalRuler:=True
 Else
    $viewProps.visibleHorizontalRuler:=False
 End if
 WP SET VIEW PROPERTIES(*;"4DWPArea";$viewProps)
```

#### Ver también 

[WP SET VIEW PROPERTIES](wp-set-view-properties.md)  