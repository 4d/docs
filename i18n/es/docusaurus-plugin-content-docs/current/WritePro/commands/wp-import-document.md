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

| **Atributo**            | **Tipo** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| anchoredTextAreas       | Text     | Sólo para documentos MS Word (.docx). Especifica cómo se manejan las áreas de texto ancladas en Word. Valores disponibles:<br/><br/> **anchored** (por defecto) - Las áreas de texto ancladas se tratan como cuadros de texto. **inline** - Las áreas de texto ancladas se tratan como texto en línea en la posición del ancla. **ignore** \- Las áreas de texto ancladas son ignoradas. **Nota**: el diseño y el número de páginas en el documento pueden cambiar. Ver también *Cómo importar formato .docx*                                                                                                                                                                                                                                                         |
| anchoredImages          | Text     | Sólo para documentos MS Word (.docx). Especifica cómo se manejan las imágenes ancladas. Available values:<br/><br/> **all** (default) - All anchored images are imported as anchored images with their text wrapping properties (exception: the .docx wrapping option "tight" is imported as wrap square). **ignoreWrap** \- Las imágenes ancladas son importadas, pero todo texto que se envuelve alrededor de la imagen es ignorado. **ignore** \- Las imágenes ancladas no son importadas.                                                                                                                                                                                                                                                                     |
| secciones               | Text     | Sólo para documentos MS Word (.docx). Especifica cómo se maneja la sección. Valores disponibles:<br/><br/> **all** (por defecto) - Se importan todas las secciones. Secciones continuas, incluso impares se convierten en secciones estándar. **ignore** \- Sections are converted to default 4D Write Pro sections (A4 portrait layout without header or footer). **Nota**: las rupturas de secciones de cualquier tipo pero continuas se convierten en rupturas de sección con rupturas de página. Continuous section breaks are imported as continuous section breaks.                                                                                                                                                                          |
| fields                  | Text     | Sólo para documentos MS Word (.docx). Especifica cómo se manejan los campos .docx que no pueden ser convertidos a fórmulas 4D Write Pro. Valores disponibles:<br/><br/> **ignore** \- Los campos .docx son ignorados. **label** - Las referencias de campo .docx se importan como etiquetas entre llaves dobles ("{{ }}"). Ej: el campo "ClientName" se importará como {{ClientName}}. **value** (default) - El último valor calculado para el campo .docx (si está disponible) es importado. **Note**: If a .docx field corresponds to a 4D Write Pro variable, the field is imported as a formula and this option is ignored. |
| borderRules             | Text     | Sólo para documentos MS Word (.docx). Especifica cómo se gestionan los bordes de los párrafos. Valores disponibles:<br/><br/> **collapse** \- El formato del párrafo se modifica para imitar los bordes colapsados automáticamente. Tenga en cuenta que la propiedad contraída sólo se aplica durante la operación de importación. Si se vuelve a aplicar una hoja de estilo con un ajuste de colapso automático de bordes después de la operación de importación, se ignorará el ajuste. **noCollapse** (por defecto) - No se modifica el formato de los párrafos.                                                                                                                                                                                                                                   |
| preferredFontScriptType | Text     | Sólo para documentos MS Word (.docx). Especifica el tipo de letra preferido que se utilizará cuando se definan distintos tipos de letra para una única propiedad de fuente en OOXML. Valores disponibles:<br/><br/> **latin** (por defecto) - script latino **bidi** \- script bidreccional. Adecuado si el documento es principalmente bidireccional de izquierda a derecha (LTR) o de derecha a izquierda (RTL) texto (por ejemplo, árabe o hebreo). **eastAsia** \- East Asian script. Adecuado si el documento es principalmente texto asiático.                                                                                                                                                                                        |
| htmlExpressions         | Text     | Sólo para documentos 4D Write (.4w7). Especifica cómo se manejan las expresiones HTML. Available values: <br/><br/> **rawText** \- HTML expressions are imported as raw text within ##htmlBegin## and ##htmlEnd## tags **ignore** (default) - HTML expressions are ignored.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| importDisplayMode       | Text     | Sólo para documentos 4D Write (.4w7). Especifica cómo se gestiona la visualización de imágenes. Available values: <br/><br/> **legacy -** 4W7 image display mode is converted using a background image if different than scaled to fit. **noLegacy** (default) - 4W7 image display mode is converted to the *imageDisplayMode* attribute if different than scaled to fit.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

**Notas de compatibilidad**

- *Las hojas de estilo de caracteres de los documentos heredados de 4D Write utilizan un mecanismo propietario que no es compatible con 4D Write Pro. To get the best result for imported text, style sheet attributes are converted to "hard coded" style attributes. Las hojas de estilo de caracteres antiguos no son importadas y ya no están referenciadas en el documento.*
- *El soporte para la importación en formato .docx solo está certificado para Microsoft Word 2010 y más recientes. Versiones antiguas, especialmente Microsoft Word 2007, pueden no importar correctamente.*

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
