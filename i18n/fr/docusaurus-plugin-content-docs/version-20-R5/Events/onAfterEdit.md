---
id: onAfterEdit
title: On After Edit
---

| Code | Peut être appelé par                                                                                                                                                                                                                                                                                                                                                                              | Définition                                                            |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| 45   | [4D View Pro area](../FormObjects/viewProArea_overview.md) - [4D Write Pro area](../FormObjects/writeProArea_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - Form - [Input](FormObjects/input_overview.md) - [Hierarchical List](FormObjects/list_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | Le contenu de l'objet saisissable qui a le focus vient d'être modifié |

## Description

### Cas général

Cet événement peut être utilisé pour filtrer la saisie de données dans les objets saisissables au clavier au niveau le plus bas.

When it is used, this event is generated after each change made to the contents of an enterable object, regardless of the action that caused the change, _i.e._:

- Actions d'édition standard qui modifient le contenu comme les actions coller, couper, supprimer ou annuler;
- Déposer une valeur (action similaire à coller);
- Any keyboard entry made by the user; in this case, the `On After Edit` event is generated after the [`On Before Keystroke`](onBeforeKeystroke.md) and [`On After Keystroke`](onAfterKeystroke.md) events, if they are used.
- Any modification made using a language command that simulates a user action (i.e., `POST KEY`).

Within the `On After Edit` event, text data being entered is returned by the [`Get edited text`](https://doc.4d.com/4dv19/help/command/en/page655.html) command.

### 4D View Pro

The object returned by the `FORM Event` command contains:

| Propriété   | Type        | Description                                                                                         |
| ----------- | ----------- | --------------------------------------------------------------------------------------------------- |
| code        | entier long | On After Edit                                                                                       |
| Description | text        | "On After Edit"                                                                                     |
| objectName  | text        | Nom de la zone 4D View Pro                                                                          |
| sheetName   | text        | Nom de la feuille de l'événement                                                                    |
| action      | text        | "editChange", "valueChanged", "DragDropBlock", "DragFillBlock", "formulaChanged", "clipboardPasted" |

Depending on the `action` property value, the [event object](overview.md#event-object) will contain additional properties.

#### action = editChange

| Propriété   | Type    | Description                              |
| ----------- | ------- | ---------------------------------------- |
| range       | object  | Plage de cellule                         |
| editingText | variant | La valeur provenant de l'éditeur courant |

#### action = valueChanged

| Propriété | Type    | Description                                |
| --------- | ------- | ------------------------------------------ |
| range     | object  | Plage de cellule                           |
| oldValue  | variant | Valeur de la cellule avant la modification |
| newValue  | variant | Valeur de la cellule après la modification |

#### action = DragDropBlock

| Propriété | Type    | Description                                                          |
| --------- | ------- | -------------------------------------------------------------------- |
| fromRange | object  | Plage de cellule source (qui est glissée)         |
| toRange   | object  | Plage de cellule de destination (qui est déposée) |
| copy      | boolean | Indique si la plage source est copiée ou non                         |
| insert    | boolean | Indique si la plage source est insérée ou non                        |

#### action = DragFillBlock

| Propriété     | Type        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fillRange     | object      | Plage utilisée pour le remplissage                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| autoFillType  | entier long | Value used for the fill.<li>0: Cells are filled with all data (values, formatting, and formulas)</li><li>1: Cells are filled with automatically sequential data</li><li>2: Cells are filled with formatting only</li><li>3: Cells are filled with values but not formatting</li><li>4: Values are removed from the cells</li><li>5: Cells are filled automatically</li> |
| fillDirection | entier long | Direction of the fill.<li>0: The cells to the left are filled</li><li>1: The cells to the right are filled</li><li>2: The cells above are filled</li><li>3: The cells below are filled</li>                                                                                                                                                                                                                                |

#### action = formulaChanged

| Propriété | Type   | Description       |
| --------- | ------ | ----------------- |
| range     | object | Plage de cellule  |
| formula   | text   | La formule saisie |

#### action = clipboardPasted

| Propriété   | Type        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| range       | object      | Plage de cellule                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| pasteOption | entier long | Specifies what is pasted from the clipboard:<li>0: Everything is pasted (values, formatting, and formulas)</li><li>1: Only values are pasted</li><li>2: Only the formatting is pasted</li><li>3: Only formulas are pasted</li><li>4: Values and formatting are pasted (not formulas)</li><li>5: Formulas and formatting are pasted (not values)</li> |
| pasteData   | object      | The data from the clipboard to be pasted<li>"text" (text): The text from the clipboard</li><li>"html" (text): The HTML from the clipboard</li>                                                                                                                                                                                                                                                                                                          |

#### Exemple

Here is an example handling an `On After Edit` event:

```4d
 If(FORM Event.code=On After Edit)
    If(FORM Event.action="valueChanged")
       ALERT("WARNING: You are currently changing the value\  
       from "+String(FORM Event.oldValue)+\  
       " to "+String(FORM Event.newValue)+"!")
    End if
 End if
```

L'exemple ci-dessus pourrait générer un objet événement tel que celui-ci :

```
{

"code":45;
"description":"On After Edit";
"objectName":"ViewProArea"
"sheetname":"Sheet1";
"action":"valueChanged";
"range": {area:ViewProArea,ranges:[{column:1,row:2,sheet:1}]};
"oldValue":"The quick brown fox";
"newValue":"jumped over the lazy dog";
}
```
