---
id: wp-import-document
title: WP Import document
displayed_sidebar: docs
---

<!--REF #_command_.WP Import document.Syntax-->**WP Import document** ( *filePath* {; *option*} ) : Object<br/>**WP Import document** ( *fileObj* {; *option*} ) : Object<!-- END REF-->

<!--REF #_command_.WP Import document.Params-->

| Parámetros | Tipo                    |                             | Descripción                                                                                                                                                                                                                                                          |
| ---------- | ----------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| filePath   | Text                    | &#8594; | Ruta a: un documento 4D Write (.4w7 o .4wt) o un documento 4D Write Pro (.4wp) o un documento .docx (.docx) |
| fileObj    | 4D.File | &#8594; | Objeto del archivo a importar                                                                                                                                                                                                                                        |
| option     | Integer, Object         | &#8594; | (Entero) Opción de importación para expresiones HTML, (objeto) Opciones de importación para documento .docx                                                                                                    |
| Resultado  | Object                  | &#8592; | Objeto 4D Write Pro                                                                                                                                                                                                                                                  |

<!-- END REF-->

## Descripción

El comando **WP Import document**<!--REF #_command_.WP Import document.Summary--> convierte un documento 4D Write Pro / 4D Write (.4wp, .4w7 o .4wt) o documento MS Word (.docx) en un nuevo objeto 4D Write Pro.<!-- END REF-->

Puede pasar un *filePath* o *fileObj*:

- En el parámetro *filePath*, pase la ruta de un documento almacenado en disco. Debe pasar una ruta completa, a menos que el documento se encuentre en el mismo nivel que el archivo de estructura, en cuyo caso puede pasar sólo su nombre.

- En el parámetro *fileObj*, pase un objeto 4D.File que representa el archivo a importar.

Se soportan los siguientes tipos de documentos:

- antiguos documentos 4D Write (.4w7 o .4wt). Para una lista detallada de características 4D Write que actualmente están soportadas en objetos 4D Write Pro, por favor consulte la sección *Importación de documentos 4D Write*.
- Documentos en formato 4D Write Pro (.4wp). Para obtener más información acerca del formato de documento 4D Write Pro, consulte el \*formato de documento *.4wp*.
- documentos en formato .docx. Para más información, consulte *Importar y exportar en formato .docx*.

**Nota:** si desea importar un documento almacenado en un campo BLOB 4D, también puede considerar el uso del comando [WP New](../commands-legacy/wp-new.md).

Se devuelve un error si el parámetro *filePath* o *fileObj* no es válido, si falta el archivo o si el formato de archivo no es compatible.

El parámetro opcional *option* permite definir opciones de importación para:

- **longint**

Por defecto, las expresiones HTML insertadas en documentos heredados de 4D Write no se importan (no son compatibles con 4D Write Pro). Si pasa la constante wk import html expressions as text, Las expresiones HTML se importarán como texto sin formato dentro de las etiquetas `##htmlBegin##` y `##htmlEnd##` -- las cuales requerirán acciones de formato posteriores. Por ejemplo:

```html
##htmlBegin##Imported titlebold##htmlEnd##  
```

- **object**

Puede pasar un objeto para definir cómo se gestionan los siguientes atributos durante la operación de importación:

| **Atributo**            | **Tipo** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| anchoredTextAreas       | Text     | Sólo para documentos MS Word (.docx). Especifica cómo se manejan las áreas de texto ancladas en Word. Valores disponibles:<br/><br/> **anchored** (por defecto) - Las áreas de texto ancladas se tratan como cuadros de texto. **inline** - Las áreas de texto ancladas se tratan como texto en línea en la posición del ancla. **ignore** \- Las áreas de texto ancladas son ignoradas. **Nota**: el diseño y el número de páginas en el documento pueden cambiar. Ver también *Cómo importar formato .docx*                                                                                                                                                                                                                                   |
| anchoredImages          | Text     | Sólo para documentos MS Word (.docx). Especifica cómo se manejan las imágenes ancladas. Available values:<br/><br/> **all** (default) - All anchored images are imported as anchored images with their text wrapping properties (exception: the .docx wrapping option "tight" is imported as wrap square). **ignoreWrap** \- Anchored images are imported, but any text wrapping around the image is ignored. **ignore** \- Las imágenes ancladas no son importadas.                                                                                                                                                                                                                                                                        |
| secciones               | Text     | Sólo para documentos MS Word (.docx). Especifica cómo se maneja la sección. Valores disponibles:<br/><br/> **all** (por defecto) - Se importan todas las secciones. Continuous, even, or odd sections are converted to standard sections. **ignore** \- Sections are converted to default 4D Write Pro sections (A4 portrait layout without header or footer). **Note**: Section breaks of any type but continuous are converted to section breaks with page break. Continuous section breaks are imported as continuous section breaks.                                                                                                                                                                                     |
| fields                  | Text     | Sólo para documentos MS Word (.docx). Specifies how .docx fields that can't be converted to 4D Write Pro formulas are handled. Valores disponibles:<br/><br/> **ignore** \- Los campos .docx son ignorados. **label** \- .docx field references are imported as labels within double curly braces ("{{ }}"). Ej: el campo "ClientName" se importará como {{ClientName}}. **value** (default) - The last computed value for the .docx field (if available) is imported. **Note**: If a .docx field corresponds to a 4D Write Pro variable, the field is imported as a formula and this option is ignored. |
| borderRules             | Text     | Sólo para documentos MS Word (.docx). Especifica cómo se gestionan los bordes de los párrafos. Available values:<br/><br/> **collapse** \- Paragraph formatting is modified to mimic automatically collapsed borders. Tenga en cuenta que la propiedad contraída sólo se aplica durante la operación de importación. If a stylesheet with a automatic border collapse setting is reapplied after the import operation, the setting will be ignored. **noCollapse** (por defecto) - No se modifica el formato de los párrafos.                                                                                                                                                                                                                                                   |
| preferredFontScriptType | Text     | Sólo para documentos MS Word (.docx). Specifies the preferred typeface to use when different typefaces are defined for a single font property in OOXML. Available values:<br/><br/> **latin** (default) - Latin script **bidi** \- Bidrectional script. Suitable if document is mainly bidirectional left-to-right (LTR) or right-to-left (RTL) text (e.g., Arabic or Hebrew). **eastAsia** \- East Asian script. Adecuado si el documento es principalmente texto asiático.                                                                                                                                                                                                          |
| htmlExpressions         | Text     | Sólo para documentos 4D Write (.4w7). Especifica cómo se manejan las expresiones HTML. Available values: <br/><br/> **rawText** \- HTML expressions are imported as raw text within ##htmlBegin## and ##htmlEnd## tags **ignore** (default) - HTML expressions are ignored.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| importDisplayMode       | Text     | Sólo para documentos 4D Write (.4w7). Especifica cómo se gestiona la visualización de imágenes. Available values: <br/><br/> **legacy -** 4W7 image display mode is converted using a background image if different than scaled to fit. **noLegacy** (default) - 4W7 image display mode is converted to the *imageDisplayMode* attribute if different than scaled to fit.                                                                                                                                                                                                                                                                                                                                                                                                                                        |

**Notas de compatibilidad**

- *Character style sheets in legacy 4D Write documents use a proprietary mechanism, which is not supported by 4D Write Pro. To get the best result for imported text, style sheet attributes are converted to "hard coded" style attributes. Legacy character style sheets are not imported and are no longer referenced in the document.*
- *Support for importing in .docx format is only certified for Microsoft Word 2010 and newer. Versiones antiguas, especialmente Microsoft Word 2007, pueden no importar correctamente.*

## Ejemplo 1

```4d
 var WPDoc : Object
 WPDoc:=WP Import document("C:\\documents\\4DWriteDocs\\Letter.4w7")
```

## Ejemplo 2

Quiere importar un documento .docx y le gustaría que los bordes de los párrafos estuvieran contraídos como en MS Word:

```4d
 $options:=New object
 $options.borderRules:="collapse" //colapsa los bordes de los párrafos al convertir

 wpDoc:=WP Import document(«mydoc.docx»;$options)
```

Desea importar los campos .docx originales como texto (para los campos no convertidos en fórmulas 4D):

```4d
 $options:=New object
 $options.fields:="label" //para campos no convertidos, importar referencias de campo como texto entre {{ and }}

 wpDoc:=WP Import document(«mydoc.docx»;$options)
```

Quieres importar un documento .docx cuyo texto está principalmente en japonés:

```4d
 $options:=New object
 $options.preferredFontScriptType:="eastAsia" //forzar la conversión para dar preferencia a las fuentes de Asia Oriental.

 wpDoc:=WP Import document(«mydoc.docx»;$options)
```

## Ejemplo 3

Desea importar un documento en disco utilizando un objeto File:

```4d
var $file : 4D.File

$file:=File("/RESOURCES/myFile.4wp")

WParea:=WP Import document($file)
```

## Ver también

[WP New](../commands-legacy/wp-new.md)
