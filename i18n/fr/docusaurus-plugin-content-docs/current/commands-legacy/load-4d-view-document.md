---
id: load-4d-view-document
title: Load 4D View document
slug: /commands/load-4d-view-document
displayed_sidebar: docs
---

<!--REF #_command_.Load 4D View document.Syntax-->**Load 4D View document** ( *document4DView* ) : Object<!-- END REF-->
<!--REF #_command_.Load 4D View document.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| document4DView | Blob | &#8594;  | Document du plug-in 4D View |
| Résultat | Object | &#8592; | Représentation du document 4D View sous forme d'objet |

<!-- END REF-->

#### Description 

<!--REF #_command_.Load 4D View document.Summary-->La commande **Load 4D View document** convertit un document 4D View en objet 4D.<!-- END REF--> 

L'utilisation de cette commande ne nécessite ni licence 4D View, ni même une instance du plug-in 4D View dans votre environnement 4D. 

Passez dans le paramètre *document4DView* la variable ou le champ BLOB contenant le document 4D View à convertir. La commande retourne un [objet](# "Données structurées sous forme d'objet natif 4D") 4D qui décrit toutes les informations stockées dans le document 4D View d'origine, incluant :

* la structure du document (nombre de lignes et de colonnes), son type et ses informations (version, titre...)
* les attributs de cellules (type, valeur, formule, nom, style, sécurité...)
* les attributs de colonnes (largeur, style, type, sécurité, visibilité, ruptures...)
* les attributs de lignes (hauteur, style, type, sécurité, visibilité, ruptures...)
* les styles, bordures et volets.

A l'aide de cette commande, vous pouvez récupérer toutes les données stockées dans vos documents 4D View et les manipuler dans un format ouvert. 

**Note** : Si vous souhaitez convertir vos documents 4D View en 4D View Pro, il est recommandé d'utiliser la commande dédiée  qui effectue la conversion de façon directe et transparente. 

#### Exemple 

Vous souhaitez charger et convertir un document 4D View stocké sur disque :

```4d
 var $blob : Blob
 var $object : Object
 DOCUMENT TO BLOB("document.4PV";$blob)
 $object:=Load 4D View document($blob)
 ALERT("Titre du document : "+$object.title)
```

Par exemple, si vous convertissez le document suivant : 

![](../assets/en/commands/pict3631552.en.png)

Vous obtenez le résultat suivant (objet stringifié) :

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

**Note :** Pour plus d'informations sur le format de l'[objet](# "Données structurées sous forme d'objet natif 4D") retourné, veuillez contacter les services techniques de 4D. 


#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1528 |
| Thread safe | &check; |
| Interdite sur le serveur ||


