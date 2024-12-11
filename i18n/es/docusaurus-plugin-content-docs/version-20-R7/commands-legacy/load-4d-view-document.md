---
id: load-4d-view-document
title: Load 4D View document
slug: /commands/load-4d-view-document
displayed_sidebar: docs
---

<!--REF #_command_.Load 4D View document.Syntax-->**Load 4D View document** ( *4DViewDocument* ) : Object<!-- END REF-->
<!--REF #_command_.Load 4D View document.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| 4DViewDocument | Blob | &#8594;  | Documento 4D View |
| Resultado | Object | &#8592; | Representación del objeto del documento 4D View |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Load 4D View document.Summary-->El comando **Load 4D View document** permite convertir un documento 4D View en un objeto 4D.<!-- END REF--> 

Ni una licencia válida 4D View, ni una instancia del plug-in 4D View heredado en su entorno son necesarios para este comando.

Pase en el parámetro *4DViewDocument* una variable BLOB o campo que contenga el documento 4D View a convertir. El comando devuelve un [objeto](# "Datos estructurados como forma de objeto nativo 4D") 4D que describe toda la información almacenada originalmente en el documento 4D View, incluyendo:

* estructura del documento (número de filas y columnas), tipo e información (versión, título...)
* atributos de celda (tipo de celda, valor, fórmula, nombre, estilo, seguridad...)
* atributos de columna (ancho, estilo, tipo, seguridad, visibilidad, ruptura...)
* atributos de fila (altura, estilo, tipo, seguridad, visibilidad, ruptura...)
* estilos, bordes y paneles

Utilizando este comando, puede recuperar toda información almacenada en sus documentos 4D View y manejarlos en un formato abierto. 

**Nota**: si necesita convertir documentos de 4D View a 4D View Pro, se recomienda utilizar el comando dedicado  que realiza una conversión directa y transparente.

#### Ejemplo 

Desea cargar y convertir un documento 4D View almacenado en el disco:

```4d
 var $blob : Blob
 var $object : Object
 DOCUMENT TO BLOB("document.4PV";$blob)
 $object:=Load 4D View document($blob)
 ALERT("Document title is "+$object.title)
```

Por ejemplo, si convierte el siguiente documento:

![](../assets/en/commands/pict3631552.en.png)

Obtendrá el siguiente resultado (objeto stringified):

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

**Nota:** para más información sobre el formato del [objeto](# "Datos estructurados como forma de objeto nativo 4D"), devuelto, contacte los servicios técnicos de 4D.


#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1528 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


