---
id: load-4d-view-document
title: Load 4D View document
slug: /commands/load-4d-view-document
displayed_sidebar: docs
---

<!--REF #_command_.Load 4D View document.Syntax-->**Load 4D View document** ( *4DViewDocument* ) : Object<!-- END REF-->
<!--REF #_command_.Load 4D View document.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| 4DViewDocument | Blob | &#8594;  | 4D View document |
| Function result | Object | &#8592; | Object representation of the 4D View document |

<!-- END REF-->

#### Description 

<!--REF #_command_.Load 4D View document.Summary-->The **Load 4D View document** command allows you to convert a 4D View document into a 4D object.<!-- END REF--> 

Neither a valid 4D View license, nor an instance of the legacy 4D View plug-in in your environment are required for this command. 

Pass in the *4DViewDocument* parameter a BLOB variable or field containing the 4D View document to convert. The command returns a 4D [object](# "Data structured as a native 4D object") that describes all information originally stored within the 4D View document, including:

* document structure (number of rows and columns), type and information (version, title...)
* cell attributes (cell type, value, formula, name, style, security...)
* column attributes (width, style, type, security, visibility, break...)
* row attributes (height, style, type, security, visibility, break...)
* styles, borders, and panes

Using this command, you can recover any data stored in your 4D View documents and handle them in an open format. 

**Note**: If you need to convert documents from 4D View to 4D View Pro, it is recommended to use the dedicated  command which performs a direct and transparent conversion. 

#### Example 

You want to load and convert a 4D View document stored on disk:

```4d
 var $blob : Blob
 var $object : Object
 DOCUMENT TO BLOB("document.4PV";$blob)
 $object:=Load 4D View document($blob)
 ALERT("Document title is "+$object.title)
```

For example, if you convert the following document: 

![](../assets/en/commands/pict3631552.en.png)

You will get the following result (stringified object):

```json
{
    "version": 9,
    "title": "4D View test",
    "subject": "",
    "author": "",
    "company": "",
    "note": "",
    "creationDate": "2017-06-13",
    "creationTime": 63230,
    "modificationDate": "2017-06-13",
    "modificationTime": 63295,
    "columnCount": 2048,
    "rowCount": 65535,
    "columnHeaderHeight": 380,
    "rowHeaderWidth": 1180,
    "columnWidth": 2160,
    "rowHeight": 320,
    "noExternalCall": false,
    "columns": [],
    "rows": [],
    "cells": [
        {
            "kind": "value",
            "value": "hello world",
            "valueType": "string",
            "column": 1,
            "row": 1
        },
        {
            "kind": "value",
            "value": 42,
            "valueType": "real",
            "column": 1,
            "row": 3
        },
        {
            "kind": "value",
            "value": true,
            "valueType": "bool",
            "column": 1,
            "row": 4
        }
    ],
    "cellNames": [],
    "customFormats": [],
    "rowEdges": [
        {
            "style": 13,
            "color": 15597568,
            "left": 2,
            "top": 6,
            "right": 3,
            "bottom": 6
        },
        {
            "style": 13,
            "color": 15597568,
            "left": 2,
            "top": 11,
            "right": 3,
            "bottom": 11
        }
    ],
    "columnEdges": [
        {
            "style": 13,
            "color": 15597568,
            "left": 2,
            "top": 6,
            "right": 2,
            "bottom": 10
        },
        {
            "style": 13,
            "color": 15597568,
            "left": 4,
            "top": 6,
            "right": 4,
            "bottom": 10
        }
    ],
    "defaultStyle": {
        "locked": false,
        "hidden": false,
        "gridHidden": false,
        "spellCheck": false,
        "pictHeights": false,
        "inputFilter": 0,
        "backColorEven": 16777215,
        "backColorOdd": 16777215,
        "fontID": 2,
        "fontSize": 11,
        "fontBold": false,
        "fontItalic": false,
        "fontUnderline": false,
        "fontOutline": false,
        "fontShadow": false,
        "fontCondensed": false,
        "fontExtended": false,
        "normalColorEven": 0,
        "normalColorOdd": 0,
        "zeroColorEven": 255,
        "zeroColorOdd": 255,
        "minusColorEven": 16711680,
        "minusColorOdd": 16711680,
        "hAlign": 0,
        "vAlign": 0,
        "rotation": 0,
        "wordWrap": false,
        "forceTextFormat": false,
        "numericFormat": 0,
        "stringFormat": 0,
        "booleanFormat": 0,
        "dateTimeFormat": 0,
        "pictureFormat": 0
    },
    "exportRanges": [],
    "fontNames": [
        {
            "id": 2,
            "name": "Lucida Grande" 
        }
    ],
    "inputFilters": [],
    "pictures": [
        {
            "column": 3,
            "row": 3,
            "width": 920,
            "height": 1000,
            "drawingMode": 5,
            "behind": false,
            "fixedSize": false,
            "locked": false,
            "hOffset": 0,
            "vOffset": 0,
            "picture": "[object Picture]" 
        }
    ]
}
```

**Note:** For more information about the format of the returned [object](# "Data structured as a native 4D object"), please contact the 4D technical services. 


#### Properties
|  |  |
| --- | --- |
| Command number | 1528 |
| Thread safe | &check; |
| Forbidden on the server ||


