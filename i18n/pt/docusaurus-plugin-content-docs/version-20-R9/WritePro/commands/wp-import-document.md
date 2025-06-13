---
id: wp-import-document
title: WP Import document
displayed_sidebar: docs
---

<!--REF #_command_.WP Import document.Syntax-->**WP Import document** ( *filePath* {; *option*} ) : Object<br/>**WP Import document** ( *fileObj* {; *option*} ) : Object<!-- END REF-->

<!--REF #_command_.WP Import document.Params-->

| Parâmetro | Tipo                     |                             | Descrição                                                                                                                                                                                                                                                          |
| --------- | ------------------------ | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| filePath  | Text                     | &#8594; | Path to: a 4D Write document (.4w7 or .4wt) or a 4D Write Pro document (.4wp) or a .docx document (.docx) |
| fileObj   | 4D. File | &#8594; | File object to import                                                                                                                                                                                                                                              |
| option    | Integer, Object          | &#8594; | (Integer) Import option for HTML expressions, (object) Import options for .docx document                                                                                                                     |
| Resultado | Object                   | &#8592; | Objeto 4D Write Pro                                                                                                                                                                                                                                                |

<!-- END REF-->

## Descrição

The **WP Import document** command<!--REF #_command_.WP Import document.Summary--> converts an existing 4D Write Pro / 4D Write document (.4wp, .4w7 or .4wt) or MS Word document (.docx) to a new 4D Write Pro object.<!-- END REF-->

Você pode passar um *filePath* ou *fileObj*:

- No parâmetro *filePath*, passe o caminho de um documento armazenado no disco. You must pass a complete path, unless the document is located at the same level as the structure file, in which case you can just pass its name.

- No parâmetro *fileObj*, passe um objeto 4D.File que representa o arquivo a importar.

The following types of documents are supported:

- former 4D Write documents (.4w7 or .4wt). For a detailed list of 4D Write features that are currently supported in 4D Write Pro objects, please refer to the *Importing 4D Write documents* section.
- Documentos no formato 4D Write Pro (.4wp). For more information about the 4D Write Pro document format, refer to *.4wp document format*.
- documents in .docx format. For more information about, refer to *Importing and Exporting in .docx format*.

**Nota:** se quiser importar um documento armazenado em um campo 4D BLOB, você também pode considerar o uso do comando [WP New](../commands-legacy/wp-new.md).

An error is returned if the *filePath* or *fileObj* parameter is invalid, if the file is missing, or if the file format is not supported.

O parâmetro *option* opcional permite definir opções de importação para:

- **longint**

By default, HTML expressions inserted in legacy 4D Write documents are not imported (no 4D Write Pro support). If you pass the wk import html expressions as text constant, HTML expressions will be imported as raw text within `##htmlBegin##` and `##htmlEnd##` tags -- which will require formatting actions afterward. Por exemplo:

```html
##htmlBegin##Imported titlebold##htmlEnd##  
```

- **object**

You can pass an object to define how the following attributes are handled during the import operation:

| **Attribute**           | **Tipo** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| anchoredTextAreas       | Text     | Somente para documentos MS Word (.docx). Specifies how Word anchored text areas are handled. Available values:<br/><br/> **anchored** (default) - Anchored text areas are treated as text boxes. **inline** \- Anchored text areas are treated as inline text at the position of the anchor. **ignore** \- As áreas de texto ancoradas são ignoradas. **Nota**: o layout e o número de páginas do documento podem mudar. Veja também *Como importar o formato .docx*                                                                                                                                                                                                                                                                                 |
| anchoredImages          | Text     | Somente para documentos MS Word (.docx). Specifies how anchored images are handled. Available values:<br/><br/> **all** (default) - All anchored images are imported as anchored images with their text wrapping properties (exception: the .docx wrapping option "tight" is imported as wrap square). **ignoreWrap** \- Anchored images are imported, but any text wrapping around the image is ignored. **ignore** \- Imagens ancoradas não são importadas.                                                                                                                                                                                                                                                                                     |
| sections                | Text     | Somente para documentos MS Word (.docx). Specifies how section are handled. Valores disponíveis:<br/><br/> **all** (padrão) - Todas as seções são importadas. Continuous, even, or odd sections are converted to standard sections. **ignore** \- Sections are converted to default 4D Write Pro sections (A4 portrait layout without header or footer). **Note**: Section breaks of any type but continuous are converted to section breaks with page break. Continuous section breaks are imported as continuous section breaks.                                                                                                                                                                                                 |
| fields                  | Text     | Somente para documentos MS Word (.docx). Specifies how .docx fields that can't be converted to 4D Write Pro formulas are handled. Valores disponíveis:<br/><br/> **ignore** \- Os campos .docx são ignorados. **label** \- .docx field references are imported as labels within double curly braces ("{{ }}"). Ex: The "ClientName" field would be imported as {{ClientName}}. **value** (default) - The last computed value for the .docx field (if available) is imported. **Note**: If a .docx field corresponds to a 4D Write Pro variable, the field is imported as a formula and this option is ignored. |
| borderRules             | Text     | Somente para documentos MS Word (.docx). Specifies how paragraph borders are handled. Available values:<br/><br/> **collapse** \- Paragraph formatting is modified to mimic automatically collapsed borders. Note that the collapse property only applies during the import operation. If a stylesheet with a automatic border collapse setting is reapplied after the import operation, the setting will be ignored. **noCollapse** (padrão) - A formatação do parágrafo não é modificada.                                                                                                                                                                                                                                                                                           |
| preferredFontScriptType | Text     | Somente para documentos MS Word (.docx). Specifies the preferred typeface to use when different typefaces are defined for a single font property in OOXML. Available values:<br/><br/> **latin** (default) - Latin script **bidi** \- Bidrectional script. Suitable if document is mainly bidirectional left-to-right (LTR) or right-to-left (RTL) text (e.g., Arabic or Hebrew). **eastAsia** \- East Asian script. Suitable if document is mainly Asian text.                                                                                                                                                                                                                             |
| htmlExpressions         | Text     | Somente para documentos 4D Write (.4w7). Specifies how HTML expressions are handled. Available values: <br/><br/> **rawText** \- HTML expressions are imported as raw text within ##htmlBegin## and ##htmlEnd## tags **ignore** (default) - HTML expressions are ignored.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| importDisplayMode       | Text     | Somente para documentos 4D Write (.4w7). Specifies how image display is handled. Available values: <br/><br/> **legacy -** 4W7 image display mode is converted using a background image if different than scaled to fit. **noLegacy** (default) - 4W7 image display mode is converted to the *imageDisplayMode* attribute if different than scaled to fit.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

**Notas de compatibilidade**

- *Character style sheets in legacy 4D Write documents use a proprietary mechanism, which is not supported by 4D Write Pro. To get the best result for imported text, style sheet attributes are converted to "hard coded" style attributes. Legacy character style sheets are not imported and are no longer referenced in the document.*
- *Support for importing in .docx format is only certified for Microsoft Word 2010 and newer. As versões mais antigas, especialmente Microsoft Word 2007, podem não ser importadas corretamente.*

## Exemplo 1

```4d
 var WPDoc : Object
 WPDoc:=WP Import document("C:\\documents\\4DWriteDocs\\Letter.4w7")
```

## Exemplo 2

You want to import a .docx document and would like that paragraph borders are collapsed as they are in MS Word:

```4d
 $options:=New object
 $options.borderRules:="collapse" //collapse paragraph borders while converting

 wpDoc:=WP Import document(«mydoc.docx»;$options)
```

You want to import original .docx fields as text (for fields not converted to 4D formulas):

```4d
 $options:=New object
 $options.fields:="label" //for unconverted fields, import field references as text between {{ and }}

 wpDoc:=WP Import document(«mydoc.docx»;$options)
```

You want to import a .docx document whose text is mostly in Japanese:

```4d
 $options:=New object
 $options.preferredFontScriptType:="eastAsia" //force conversion to prefer eastAsia font scripts

 wpDoc:=WP Import document(«mydoc.docx»;$options)
```

## Exemplo 3

You want to import a document on disk using a File object:

```4d
var $file : 4D.File

$file:=File("/RESOURCES/myFile.4wp")

WParea:=WP Import document($file)
```

## Veja também

[WP New](../commands-legacy/wp-new.md)
