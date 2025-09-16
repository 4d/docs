---
id: exporting-to-svg-format
title: Exportar a formato SVG
displayed_sidebar: docs
---

#### 

Puede exportar páginas de documentos 4D Write Pro a formato SVG utilizando los comandos [WP EXPORT DOCUMENT](../commands/wp-export-document) y [WP EXPORT VARIABLE](../commands/wp-export-variable). Esta página contiene información adicional y notas sobre la exportación SVG. 

#### Renderización SVG 

Las imágenes SVG y las cajas de texto se renderizan de acuerdo con la configuración de la página mostrada en el modo vista Página. Se tienen en cuenta las siguientes propiedades:

* Atributos de fondo (si se exportan)
* Bordes
* Márgenes
* Orientación
* Relleno
* Tamaño de página
* Secciones (el renderizado SVG tiene en cuenta los atributos de sección, pero las secciones en sí no se exportan)

 Partes del documento que se exportan a SVG:

* Cuerpo
* Imágenes en línea
* Cajas de texto
* Título (metadatos wk title)

Partes del documento que se exportan a SVG en función del parámetro *opcion*:

* Encabezados
* Pies de página
* Referencias o valores (en cuanto a los valores, la opción wk recompute formulas determina si las fórmulas se evalúan antes de la exportación)
* Colores de fondo
* Imágenes definidas como imágenes de fondo e imágenes ancladas

Los siguientes elementos no se exportan a SVG:

* Fuentes (convertidas a estilos CSS, pero no anidadas en el SVG exportado. Ver *Gestión de fuentes*)
* Enlaces a marcadores (renderizados pero no activos)
* Enlaces a URLs (renderizados pero no activos)
* Resaltado de fórmulas personalizado
* Cajas de texto ancladas al modo de vista anidada
* Metadatos  
   * Autor  
   * Asunto  
   * Fecha de creación  
   * Fecha de modificación

#### Gestión de fuentes 

Las fuentes no están anidadas en el SVG exportado, por lo que el texto se renderizará correctamente sólo si la familia de fuentes y el estilo son compatibles con la plataforma en la que se renderiza la imagen SVG.

Si desea asegurarse de que la renderización será equivalente en todas las plataformas, incluso cuando las fuentes no están disponibles, puede utilizar la opción wk import google fonts al exportar un documento 4D Write Pro.

  
Las fuentes Google importadas sustituyen a las fuentes nativas cuando se renderiza el SVG. Si tiene intención de renderizar la imagen SVG en la misma plataforma, le recomendamos que no utilice la opción wk import google fonts ya que la renderización con fuentes nativas es siempre mejor.

**Nota:** sólo se conservan los estilos de negrita y cursiva. No se garantiza una compatibilidad del 100% entre los estilos de fuentes nativas y la definición de estilos de fuentes en CSS (y por tanto, en SVG). La exportación a PDF es más adecuada para la distribución a todas las plataformas o para una mejor compatibilidad WYSIWYG con las fuentes, ya que éstas están anidadas en el PDF.

#### Ejemplo 

Este ejemplo exporta una página de documento a formato SVG y crea una vista previa de la imagen utilizando [SVG EXPORT TO PICTURE](../../commands/svg-export-to-picture).

```4d
 var $preview : Picture
 var $options : Object
 var $svgRoot : Text
 var $options : Object
 
 $options:=New object
 $options[wk max picture DPI]:=96
 WP EXPORT VARIABLE(wpDoc;$text;wk svg;$options)
 $svgRoot:=DOM Parse XML variable($text;False)
 SVG EXPORT TO PICTURE($svgRoot;$preview;Own XML data source)
```