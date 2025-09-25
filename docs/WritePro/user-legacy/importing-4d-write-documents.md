---
id: importing-4d-write-documents
title: Importing 4D Write documents
displayed_sidebar: docs
slug: /WritePro/importing-4d-write-documents
---

One of the main features of the new 4D Write Pro object is the ability to import and convert existing 4D Write documents. This will allow you to migrate applications that currently rely on the 4D Write plug-in.

**Compatibility notes:** 

* Only 4D Write documents of the last generation ("4D Write v7") are supported.
* Copying-pasting from a 4D Write document to a 4D Write Pro area is not supported for the moment. A 4D Write document can only be imported using 4D Write Pro language commands.
* Carriage returns (CR) in formulas behave differently in 4D Write and 4D Write Pro. In 4D Write, they are always interpreted as paragraph breaks, whereas in 4D Write Pro they are interpreted as line breaks by default. To maintain CR in formulas as paragraph breaks in imported 4D Write documents, after conversion use:  
```4d  
 WP SET ATTRIBUTES(wp;wk break paragraphs in formulas;wk true)  
```  
    
For more information, see *Managing formulas*.

## How to import a 4D Write document 

4D Write Pro objects offer two ways to import 4D Write documents:

* For 4D Write files stored on disk, you use the [WP Import document](../commands/wp-import-document) command,
* For 4D Write areas stored in BLOB fields, you use the [WP New](../commands/wp-new) command.

For more information, please refer to the description of these commands.

## Which properties will be recovered from 4D Write? 

To facilitate your migration from the 4D Write plug-in to 4D Write Pro, we want to support as many 4D Write features as possible in 4D Write Pro objects.

This paragraph lists the 4D Write plug-in properties that are currently recovered in a 4D Write Pro area after an import using the [WP Import document](../commands/wp-import-document) or [WP New](../commands/wp-new) commands. 

Note however that a few differences can be seen, which are not considered as bugs. This is due, for example, to the default font used in 4D Write Pro for bullets, or small conversions in the Underline type. 

### Document info 

| **4D Write plug-in**     | **4D Write Pro**                              |
| ------------------------ | --------------------------------------------- |
| Creation date & time     | Available                                     |
| Modification date & time | Available                                     |
| Locked                   | Not available (use read-only object property) |
| Title                    | Available                                     |
| Subject                  | Available (only plain text)                   |
| Author                   | Available                                     |
| Company                  | Available                                     |
| Notes                    | Available                                     |

### Document view parameters 

| **4D Write plug-in**      | **4D Write Pro**                                                   |
| ------------------------- | ------------------------------------------------------------------ |
| View page mode            | Not imported (use Document/Page view mode in the context menu)     |
| View rulers               | Not imported (use object property)                                 |
| View frames               | Not imported (use object property)                                 |
| View header               | Not imported (use object property)                                 |
| View footer               | Not imported (use object property)                                 |
| View first page header    | Not available                                                      |
| View first page footer    | Not available                                                      |
| View pictures             | Not available                                                      |
| View HScrollbar           | Not imported (use hor. scrollbar object property)                  |
| View VScrollbar           | Not imported (use vert. scrollbar object property)                 |
| View invisible characters | Not imported (use object property)                                 |
| View references           | Not imported (use [ST SET OPTIONS](../../commands/st-set-options)) |
| View column separators    | Available (starting with v17)                                      |
| View H Splitter           | Not available                                                      |
| View V Splitter           | Not available                                                      |
| View Wysiwyg              | Not available                                                      |
| View zoom                 | Not imported (use Document/Zoom in the context menu)               |

### Document parameters 

| **4D Write plug-in** | **4D Write Pro**                                                 |
| -------------------- | ---------------------------------------------------------------- |
| Unit                 | Not imported (use Document/Measurement unit in the context menu) |
| Language             | Not available                                                    |
| Count of columns     | Available (starting with v17)                                    |
| Column spacing       | Available (starting with v17)                                    |
| Widows & orphans     | Available                                                        |
| Default tab          | Available                                                        |
| Leading tab          | Available                                                        |
| URL color            | Not available                                                    |
| URL visited color    | Not available                                                    |

**Note:** The system separator (as returned by [GET SYSTEM FORMAT](../../commands/get-system-format)) is used as decimal separator for decimal tabs. You can change this parameter using the [WP SET ATTRIBUTES](../commands/wp-set-attributes) command. 

### Document pagination parameters 

| **4D Write plug-in**                            | **4D Write Pro** |
| ----------------------------------------------- | ---------------- |
| Page width                                      | Available        |
| Page height                                     | Available        |
| First page number                               | Available        |
| First page header & footer are different        | Available        |
| Left & right page header & footer are different | Available        |
| Page binding                                    | Available        |
| Opposite pages                                  | Available        |
| Page margins                                    | Available        |
| Header top margin                               | Available        |
| Header bottom margin                            | Available        |
| Footer top margin                               | Available        |
| Footer bottom margin                            | Available        |
| First page top margin                           | Available        |
| First page bottom margin                        | Available        |
| Header first page top margin                    | Available        |
| Header first page bottom margin                 | Available        |
| Footer first page top margin                    | Available        |
| Footer first page bottom margin                 | Available        |
| First page is right                             | Available        |

### Document printing parameters 

| **4D Write plug-in** | **4D Write Pro** |
| -------------------- | ---------------- |
| Kind of paper        | Not available    |
| Landscape            | Not available    |
| Width                | Not available    |
| Height               | Not available    |
| User margins         | Not available    |
| Scale                | Not available    |
| X resolution         | Not available    |
| Y resolution         | Not available    |

### Images 

**Compatibility notes:** 

* Picture display modes are automatically imported as of 4D Write Pro v19 R2, using [WP Import document](../commands/wp-import-document). You can restore the previous behavior (all images are scaled to fit) using the *importDisplayMode* attribute.
* On Windows, images having the Mac OS PICT format are imported but cannot be rendered in 4D Write Pro. If you import a document containing images of this type, you need to convert them to another format. Support of PICT format has been removed since 4D v18 and can no longer be used.

| **4D Write plug-in**               | **4D Write Pro**                                     |
| ---------------------------------- | ---------------------------------------------------- |
| X (left)                           | (& position :absolute) (for images in page only)     |
| Y (top)                            | (& position :absolute) (for images in page only)     |
| Width                              | Available                                            |
| Height                             | Available                                            |
| Page number                        | Available (starting with v16 R6)                     |
| Behind                             | Available (starting with v16 R6)                     |
| Not in first page                  | Available (starting with v16 R6)                     |
| Viewport mode (scale to fit, etc.) | Available                                            |
| Is expression                      | Available for inline pictures (starting with v16 R5) |
| Keep size                          | Not imported (automatic in 4D Write Pro)             |

### Character properties 

| **4D Write plug-in**                        | **4D Write Pro (span properties)** |
| ------------------------------------------- | ---------------------------------- |
| Italic                                      | Available                          |
| Bold                                        | Available                          |
| Strikeout                                   | Available                          |
| Underline                                   | Available                          |
| Shadow                                      | Available                          |
| Exponent (superscript or subscript)         | Available                          |
| Capitals (uppercase or small uppercase)     | Available                          |
| Font Family                                 | Available                          |
| Font Size                                   | Available                          |
| Text Color                                  | Available                          |
| Text Back Color                             | Available                          |
| Underline Color                             | Available                          |
| Strikeout Color                             | Available                          |
| Shadow color                                | Available                          |
| User property                               | Not available                      |
| Spell checking (syntax & grammar on or off) | Not imported (area property)       |
| Appearance                                  | Not available                      |
| Style sheet                                 | Available (starting with 4D v18)   |

### Paragraph properties 

| **4D Write plug-in**                 | **4D Write Pro** |
| ------------------------------------ | ---------------- |
| Justification                        | Available        |
| Interline                            | Available        |
| Bullet                               | Available        |
| Left margin                          | Available        |
| Right margin                         | Available        |
| Text indent                          | Available        |
| Border line style                    | Available        |
| Border line color                    | Available        |
| Border back color                    | Available        |
| Left border                          | Available        |
| Right border                         | Available        |
| Top border & top inside border       | Available        |
| Bottom border & bottom inside border | Available        |
| Border spacing                       | Available        |
| Style Sheet                          | Available        |
| Tabulations                          | Available        |

### Hyperlinks 

| **4D Write plug-in** | **4D Write Pro**                          |
| -------------------- | ----------------------------------------- |
| URL link             | Available (\*)                            |
| 4D method link       | Available (\*\*) (starting with v17 R5)   |
| Open document link   | Available (converted to a local file URL) |

* (\*) Starting with 4D v16 R4, URL links are converted to editable attributes. For more information, please refer to *Link commands*.
* (\*\*) You need to adapt parameters received within the called methods:  

| **Parameters** | **4D Write plug-in**| **4D Write Pro**|                                                                                                                                                                                                                                                                           
| -------------- | ------------------- | --------------- |
| $1 | Longint - 4D Write area reference | Text - 4D Write Pro area name |                                                                                                                                                                                                                                                             
| $2 | Text - Link label  | Object - Link description:.method - Link's method name. Must be be allowed with the [SET ALLOWED METHODS](../../commands/set-allowed-methods) command. .parameter - User parameter value passed to the method (if used).range - Range of the link's label. See *Range handling commands* | 
| $3 | Longint - User parameter (methodRef) | \- |                                                                                                                                                                                                                                                                                       

### 4D expressions 

| **4D Write plug-in** | **4D Write Pro**  |
| -------------------- | ----------------- |
| 4D expression        | Available\*       |
| Date & Time          | Available         |
| HTML expression      | Not available\*\* |
| RTF expression       | Not available     |

\*Use the [WP SET ATTRIBUTES](../commands/wp-set-attributes) command with the wk break paragraphs in formulas attribute to transform CR returned by formulas into paragraph breaks in the imported document (line breaks by default). (See *Managing formulas*) 

\*\*can be imported as text between **##htmlBegin##** and **##htmlEnd##** tags if you use the wk import html expressions as text constant.

### Text data 

| **4D Write plug-in** | **4D Write Pro** |
| -------------------- | ---------------- |
| Main text data       | Available        |
| Header text data     | Available        |
| Footer text data     | Available        |