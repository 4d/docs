---
id: wp-set-view-properties
title: WP SET VIEW PROPERTIES
slug: /WritePro/commands/wp-set-view-properties
displayed_sidebar: docs
---

<!--REF #_command_.WP SET VIEW PROPERTIES.Syntax-->**WP SET VIEW PROPERTIES** ( {* ;} *wpArea* ; *wpViewProps* )<!-- END REF-->
<!--REF #_command_.WP SET VIEW PROPERTIES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, wpArea es un nombre de objeto de formulario (cadena). Si se omite, wpArea es un campo de objeto o variable (documento) |
| wpArea | Text, Object | &#8594;  | Nombre del objeto del formulario (si se especifica *) o variable o campo del objeto 4D Write Pro (si se omite *) |
| wpViewProps | Object | &#8594;  | Propiedades vista a modificar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP SET VIEW PROPERTIES.Summary-->El comando **WP SET VIEW PROPERTIES** le permite configurar dinámicamente una o más propiedades de vista del área 4D Write Pro *wpArea*.<!-- END REF--> 

Si pasa el parámetro opcional *\**, indica que *wpArea* es un nombre de objeto de formulario (cadena). Si no pasa este parámetro, indica que *wpArea* es un documento 4D Write Pro (variable o campo objeto ). Este comando solo se puede utilizar si *wpArea* está asociada con un objeto de formulario (es decir, se muestra en el formulario), en cualquier página de formulario. Si el documento 4D Write Pro se muestra en varios objetos de formulario, es necesario utilizar el parámetro *\** para definir qué vista configurar.

En *wpViewProps*, pase un objeto en el que cada propiedad sea una propiedad vista que desee modificar en el área 4D Write Pro. Las propiedades vista que no están incluidas en el objeto wpViewProps mantendrán sus valores anteriores. Puede utilizar las siguientes constantes:

| Constante                                   | Valor                  | Comentario                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| wk display formula as symbol                | displayFormulaAsSymbol | Muestra las referencias de las fórmulas como un símbolo ![](../../assets/en/WritePro/commands/pict6013182.es.png). Sólo funciona si las fórmulas se muestran como referencias (ver wk visible references). Valores posibles: True/False                                                                                                                                                                                                                                  |
| wk formula highlight                        | formulaHighlight       | Modo de vista de resaltado de fórmulas. Valores posibles: wk references (por defecto): se resaltan las fórmulas que se muestran como referencias wk values: se resaltan las fórmulas mostradas como valores wk always: las fórmulas se resaltan siempre, sea cual sea su modo de visualización wk never: las fórmulas no se resaltan nunca, sea cual sea su modo de visualización El color de las fórmulas resaltadas puede ser definido por wk formula highlight color. |
| wk formula highlight color                  | formulaHighlightColor  | Color de las fórmulas resaltadas (ver wk formula highlight). Valores posibles: una cadena de color CSS ("#010101" o "#FFFFFF" o "rojo"). un valor entero largo de color 4D                                                                                                                                                                                                                                                                                               |
| wk page view mode                           | pageMode               | Modo de visualización del documento 4D Write Pro en el área formulario en pantalla. Valores posibles (cadena): "draft": modo borrador con propiedades básicas del documento "page": modo de visualización más completo, que incluye bordes de la página, orientación, márgenes, saltos de pagina, encabezados y pies de página, etc. "embedded": modo de visualización adaptado a las áreas anidadas                                                                     |
| wk resolution                               | dpi                    | Resolución de pantalla para los contenidos del área 4D Write Pro. Valores posibles: wk auto (0) Número mayor que 1                                                                                                                                                                                                                                                                                                                                                       |
| wk spell enable                             | spellEnabled           | Activa la corrección ortográfica. Valores posibles: True/False                                                                                                                                                                                                                                                                                                                                                                                                           |
| wk visible background and anchored elements | visibleBackground      | Muestra o exporta imágenes/color de fondo, imágenes ancladas y cajas de texto (para visualización, efecto visible solo en el modo de vista de página o anidado). Valores posibles: True/False                                                                                                                                                                                                                                                                            |
| wk visible empty images                     | visibleEmptyImages     | Muestra o exporta un rectángulo negro por defecto para las imágenes que no pueden ser cargadas o calculadas (imágenes vacías o en un formato no soportado). Valores posibles: True/False. Valor por defecto: True Si el valor es False, los elementos imagen que falten no se mostrarán en absoluto aunque tengan bordes, ancho, alto o fondo; esto puede afectar al diseño de la página para las imágenes en línea.                                                     |
| wk visible footers                          | visibleFooters         | Muestra los pies de página (efecto visible solo en el modo de visualización de página). Valores posibles: Verdadero/Falso                                                                                                                                                                                                                                                                                                                                                |
| wk visible headers                          | visibleHeaders         | Muestra los encabezados (efecto visible solo en el modo de visualización de página). Valores posibles: Verdadero/Falso                                                                                                                                                                                                                                                                                                                                                   |
| wk visible hidden characters                | visibleHiddenChars     | Muestra los caracteres invisibles. Valores posibles: Verdadero/Falso                                                                                                                                                                                                                                                                                                                                                                                                     |
| wk visible horizontal ruler                 | visibleHorizontalRuler | Muestra la regla horizontal. Valores posibles: Verdadero/Falso                                                                                                                                                                                                                                                                                                                                                                                                           |
| wk visible HTML WYSIWYG                     | htmlWYSIWIGEnabled     | Activa la vista HTML WYSIWYG. Valores posibles: True/False                                                                                                                                                                                                                                                                                                                                                                                                               |
| wk visible page frames                      | visiblePageFrames      | Muestra los marcos de página (efecto visible solo en el modo de visualización de página). Valores posibles: Verdadero/Falso                                                                                                                                                                                                                                                                                                                                              |
| wk visible references                       | visibleReferences      | Muestra todas las expresiones 4D insertadas en el documento como referencias. Valores posibles: Verdadero/Falso                                                                                                                                                                                                                                                                                                                                                          |
| wk visible vertical ruler                   | visibleVerticalRuler   | Muestra la regla vertical (efecto visible solo en el modo de visualización de página). Valores posibles: Verdadero/Falso                                                                                                                                                                                                                                                                                                                                                 |
| wk zoom                                     | zoom                   | Porcentaje de zoom para mostrar los contenidos del área 4D Write Pro. Valores posibles: Número mayor que 1                                                                                                                                                                                                                                                                                                                                                               |

Todas las propiedades se pueden modificar en cualquier momento, pero algunas solo se tienen en cuenta si se utiliza un modo de visualización compatible con 4D Write Pro. Por lo tanto, incluso si se modifica una propiedad de vista, es posible que no haya un efecto visible en el modo de visualización actual.

**Nota:** para más información sobre las propiedades vista, consulte la página *Definir un área 4D Write Pro*. 

Una vez que se han establecido las propiedades de vista para *wpArea* utilizando este comando, se aplican mientras que el área de formulario se usa siempre que no sea modificada por otra llamada. Las modificaciones de propiedad no se guardan con el documento o el formulario.

#### Ejemplo 

Desea definir algunas propiedades de vista para un área 4D Write Pro:

```4d
 var $viewProps : Object
 $viewProps:=New object
 
 $viewProps[wk page view mode]:="page"
  // o $viewProps.pageMode="page"
 
 $viewProps[wk visible horizontal ruler]:=True
  // o $viewProps.visibleHorizontalRuler:=True
 
 $viewProps[wk visible vertical ruler]:=True
  // o $viewProps.visibleVerticalRuler:=True
 
 WP SET VIEW PROPERTIES(*;"4DWPArea";$viewProps)
```

#### Ver también 

[WP Get view properties](wp-get-view-properties.md)  