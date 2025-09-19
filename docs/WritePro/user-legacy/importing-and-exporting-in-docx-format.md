---
id: importing-and-exporting-in-docx-format
title: Importing and Exporting in docx format
displayed_sidebar: docs
---

4D Write Pro can both import and export documents in the .docx format. This format is supported by word processing applications such as Microsoft Word.

**Compatibility note**: Support for 4D Write Pro documents imported or exported in .docx format is only certified for Microsoft Word 2010 and newer. Older versions, particularly Microsoft Word 2007, may not be able to open the documents.

## How to import .docx format 

Documents in .docx format can be imported into 4D Write Pro with the [WP Import document](../commands/wp-import-document) command. For more information, please refer to the description of this command.

### Behavioral changes 

While the majority of .docx settings are preserved, some settings are known to be either unsupported or behave differently in 4D Write Pro. These are:

#### Alignment / Layout 

| **Setting** | **Description**|                                                                                                                                                                                                                                                                                                                                                                                                                                                   
| -------- |----------- |
| Anchored text areas | Anchored text areas are imported as text boxes by default (they can also be ignored or imported as inline text, see [WP Import document](../commands/wp-import-document) command option). Only simple text areas can be imported. Inline text areas are imported as anchored in the front layer. Text areas anchored with text around are imported with their text wrapping properties (exception: the .docx wrapping option "tight" is imported as wrap square). |
| Paragraph layout    | Only Western text layouts are supported. Distributed, Thai and Asian paragraph styles are not supported.|                                                                                                                                                                                                                                                                                                                                                          
| Page Size           | Different page sizes per section are not supported. Only the page size from the first section is imported.                                                                                                                                                                                                                                                                                                                                                        |

#### Background 

| **Setting** | **Description** |
| ----------- | --------------- |
| Watermark   | Not supported   |

#### Expressions 

| **Setting**       | **Description**                      |
| ----------------- | ------------------------------------ |
| MS Word equations | Not supported. Data is not imported. |
| MS Word charts    | Not supported. Data is not imported. |

#### Lists 

| **Setting** | **Description**|                                                                                                                                   
| ----------- |--------------- |
| Hierarchical lists | Multi-level lists are not supported. Multi-level lists are converted to a single level lists so list appearance and/or numbering may be different |  |

#### Pictures / Images 

| **Setting** | **Description**|                                                                                                   
| ----------- |--------------- |
| DrawingML shapes     | Only simple DrawingML images (inline or anchored) are imported. Complex DrawingML shapes are not supported.       |
| VML shapes or images | Not supported. VML is obsolete in MS Word and should not be used in documents created with MS Word 2010 or older. |
| 3D models            | Not supported, however the last rendered 2D image of the 3D model may be imported if present in the .docx.        |
| SmartArt             | Not supported.                                                                                                    |

#### References / Review 

| **Setting** | **Description**                         |
| ----------- | --------------------------------------- |
| Comments    | Not supported. Content is not imported. |
| Footnotes   | Not supported. Content is not imported. |

#### Spacing 

| **Setting**| **Description**|                                                                     
| ----------- |--------------- |
| "At least" line spacing | Not supported. "At least" line spacing is converted to fixed (single) line spacing. |
| Fit text                | Not supported. The normal 4D Write Pro style is used.                               |

#### Tables 

| **Setting** | **Description**                               |
| ----------- | --------------------------------------------- |
| Tables      | Contiguous tables do not merge automatically. |

#### Text 

| **Setting**| **Description**|                                                                                                                                                 
| ----------- |--------------- |
| Themes | Text themes are not imported. If a color or font definition references a color or font in a theme, the last computed color or font will be used. Otherwise, the |
| color or font defined in the theme is used. | |                                                                                                                                                                 

### Import log 

When importing .docx format into 4D Write Pro, a log object is created and included within the imported document object. This object can be retrieved through the "importLog" custom attribute (or wk import log constant):

```4d
 $myDoc:=WP Import document("test.docx")
 if($myDoc#Null)
    var $log : Object
    $log:=$myDoc[wk import log]
 End if
```

The import log object contains the following properties:

| Constant    | Comment        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
| ----------- |--------------- |
| wk import log | Log object containing information about the .docx import operation. Properties are read-only and cannot be set:  <table> <tbody> <tr> <td>**Property**</td> <td> </td> <td>**Type**</td> <td>**Description**</td> </tr> <tr> <td>status</td> <td> </td> <td>Text</td> <td>Import status:<br/> successful - the document is imported into 4D Write Pro failed - an empty 4D Write Pro document is returned  </td> </tr> <tr> <td>developer</td> <td> </td> <td>Collection</td> <td>Collection of message object(s) for 4D Write Pro developers.</td> </tr> <tr> <td> </td> <td>\[ \].type</td> <td>Text</td> <td>The kind of message logged:<br/> info warning error  </td> </tr> <tr> <td> </td> <td>\[ \].message</td> <td>Text</td> <td>Message about the import operation.</td> </tr> <tr> <td>user</td> <td> </td> <td>Collection</td> <td>Collection of message object(s) for 4D Write Pro users.</td> </tr> <tr> <td> </td> <td>\[ \].type</td> <td>Text</td> <td>The kind of message logged:<br/> info warning  </td> </tr> <tr> <td> </td> <td>\[ \].messageShort</td> <td>Text</td> <td>Brief message about the import operation.</td> </tr> <tr> <td> </td> <td>\[ \].messageLong</td> <td>Text</td> <td>Extended message about the import operation.</td> </tr> </tbody> </table> **Warning:** *importLog* is a custom attribute, thus the wk import log constant cannot be used by [WP SET ATTRIBUTES](../commands/wp-set-attributes), [WP GET ATTRIBUTES](../commands/wp-get-attributes) or [WP RESET ATTRIBUTES](../commands/wp-reset-attributes) command (for more information, see *Using custom attributes*). |

## How to export in .docx format 

4D Write Pro objects offer two ways to export 4D Write Pro documents in .docx format:

* as .docx file exported to disk, use the [WP EXPORT DOCUMENT](../commands/wp-export-document) command.
* as .docx file exported to a BLOB variable, use the [WP EXPORT VARIABLE](../commands/wp-export-variable) command.

For more information, please refer to the description of these commands.

### Behavioral changes 

While the majority of 4D Write Pro settings are preserved, some settings are known to be either unsupported or behave differently in Microsoft Word. These are:

#### Alignment / Layout 

|**Setting**| **Paragraphs**| **Sections**| **Images** |                                                                                                                                                                          
| --------- |-------------- |------------ | ---------- |
| Anchoring                                                                                            | In Microsoft Word, anchored images are positioned relatively to the top left origin of the page and first paragraph. This could result in images being displayed in different locations than desired due to text layout differences between 4D Write Pro and Microsoft Word. |                                                              |            |
| Text boxes anchored to embedded area are not exported. Rendering can be different in Microsoft Word. |                                                                                                                                                                                                                                                                              |                                                              |            |
| Vertical align                                                                                       | Not supported by Microsoft Word (all items will be top-aligned)                                                                                                                                                                                                              | Not supported for inline images (all items will be baseline) |            |

#### Background 

|**Setting**| **Paragraphs**| **Sections**| **Images** |                                                                                                                                                                          
| --------- |-------------- |------------ | ---------- |
| Background clipping     | Not supported by Microsoft Word (background color fills entire paragraph, not including borders and margins) | Not supported by Microsoft Word (background clipping will be equal to the padding box)                        |                                                                                                                                                      |
| Background image        | Not supported by Microsoft Word                                                                              | Different background pictures/colors not supported by Microsoft Word (converted to anchored images or shapes) | Microsoft Word allows either a background color or a background image. If a background image is defined, the background color will be "transparent". |
| Background image repeat | Horizontal or vertical tiles are converted to full tiles in Microsoft Word                                   | Horizontal or vertical tiles are converted to full tiles in Microsoft                                         |                                                                                                                                                      |
| Background origin       | Origin box is converted to the same value as background clipping box.                                        | Not supported by Microsoft.                                                                                   |                                                                                                                                                      |

#### Borders 

|**Setting**| **Paragraphs**| **Sections**| **Images** |                                                                                                                                                                          
| --------- |-------------- |------------ | ---------- |
| Border color                    | Different border colors for each border line is not supported by Microsoft Word. The first defined 4D Write Pro image border line (in this order: top, right, bottom, left) will be used for all of an image's borders. |                                                                              |            |
| Border radius (rounded borders) | Not supported by Microsoft Word                                                                                                                                                                                         |                                                                              |            |
| Border width                    | Microsoft Word maximum is 12pt, borders exceeding this size will be reduced.                                                                                                                                            | Microsoft Word maximum is 12pt, borders exceeding this size will be reduced. |            |

#### Expressions 

|**Setting**| **Paragraphs**| **Sections**| **Images** |                                                                                                                                                                          
| --------- |-------------- |------------ | ---------- |
| Expressions | Only simple 4D expressions such as "Current date" or "Current time", or 4D Write Pro reserved local variables ($wp\_title, $wp\_pageNumber, etc.) are converted to Microsoft Word fields. Other 4D expressions are computed and converted to text or images during the export process. |              |            |

#### Lists 

|**Setting**| **Paragraphs**| **Sections**| **Images** |                                                                                                                                                                          
| --------- |-------------- |------------ | ---------- |
| Indent            | Converted to 0 for list items (list item indent is converted to hanging indent in Microsoft Word)               |              |            |
| Ordered list type | Greek, Armenian, and Georgian are converted to decimal and Hiragana is converted to Katakana in Microsoft Word. |              |            |

#### Pictures 

|**Setting**| **Paragraphs**| **Sections**| **Images** |                                                                                                                                                                          
| --------- |-------------- |------------ | ---------- |
| SVG         | Not supported by Microsoft Word (images in SVG format will be converted to PNG format) |              |            |

#### Size 

|**Setting**| **Paragraphs**| **Sections**| **Images** |                                                                                                                                                                          
| --------- |-------------- |------------ | ---------- |
| Minimum height        | Not supported by Microsoft Word (height is handled automatically)          |              |            |
| Width / Minimum width | Not supported by Microsoft Word (paragraph width is handled automatically) |              |            |

#### Spacing 

|**Setting**| **Paragraphs**| **Sections**| **Images** |                                                                                                                                                                          
| --------- |-------------- |------------ | ---------- |
| Padding     | Microsoft Word maximum is 31pt, padding exceeding this size will be reduced. | Microsoft Word maximum is 31pt, padding exceeding this size will be reduced. |            |

#### Tables 

| **Feature**           | **Description** |
| --------------------- | --------------- |
| Bottom carry-over row | Not exported.   |

#### Tabs 

|**Setting**| **Paragraphs**| **Sections**| **Images** |                                                                                                                                                                          
| --------- |-------------- |------------ | ---------- |
| Default tab stop       | Not supported by Microsoft Word (will be converted to absolute tab stops)                                                                    |              |            |
| Tab leading characters | Microsoft Word supports "dot" (....), "dash" (----), and "underscore" (\_\_\_\_) leading characters, all others will be converted to "none". |              |            |

#### Text 

|  **Setting**  | **Paragraphs**| **Sections**| **Images** |                                                                                                                                                                          
| ------------- |-------------- |------------ | ---------- |
| Linethrough  | Line color different from text color is not supported by Microsoft Word; only solid and double styles are supported |                                                                                 |            |
| Style Sheets | Paragraph style sheets are converted to paragraph styles.                                                           |                                                                                 |            |
| Text align   | Microsoft Word compresses spaces, so justified text layout may be reconfigured.                                     | Microsoft Word compresses spaces, so justified text layout may be reconfigured. |            |
| Text shadow  | 4D Write Pro shadow will be converted to blur and offset, using the default color in Microsoft Word.                |                                                                                 |            |
| Underline    | Semi-transparent underlines will be converted to solid.                                                             |                                                                                 |            |