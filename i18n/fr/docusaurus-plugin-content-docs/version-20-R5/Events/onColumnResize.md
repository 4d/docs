---
id: onColumnResize
title: On Column Resize
---

| Code | Peut être appelé par                                                                                                                                                                 | Définition                                                                                                                           |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| 33   | [4D View Pro Area](../FormObjects/viewProArea_overview.md) - [List Box](../FormObjects/listbox_overview.md) - [List Box Column](../FormObjects/listbox_overview.md#list-box-columns) | La largeur d'une colonne est modifiée directement par l'utilisateur ou à la suite d'un redimensionnement de la fenêtre de formulaire |

## Description

### List Box

Cet événement est généré lorsque la largeur d'une colonne dans la list box est modifiée par un utilisateur. The event is triggered "live", _i.e._, sent continuously during the event, for as long as the list box or column concerned is being resized. This resizing is performed manually by a user, or may occur as a result of the list box and its column(s) being resized along with the form window itself (whether the form is resized manually or using the `RESIZE FORM WINDOW` command).

> The `On Column Resize` event is not triggered when a [fake column](../FormObjects/properties_ResizingOptions.md#about-the-fake-blank-column) is resized.

### 4D View Pro

Cet événement est généré lorsque la largeur d'une colonne est modifiée par un utilisateur. On this context, the [event object](overview.md#event-object) returned by the `FORM Event` command contains:

| Propriété   | Type        | Description                                                                                                   |
| ----------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| code        | entier long | On Column Resize                                                                                              |
| Description | text        | "On Column Resize"                                                                                            |
| objectName  | text        | Nom de la zone 4D View Pro                                                                                    |
| sheetName   | text        | Nom de la feuille de l'événement                                                                              |
| range       | object      | Plage de cellules des colonnes dont les largeurs ont changé                                                   |
| header      | boolean     | "True" si la colonne d'en-tête de ligne (première colonne) est redimensionnée, sinon false |

#### Exemple

```4d
 If(FORM Event.code=On Column Resize)
    VP SET CELL STYLE(FORM Event.range;New object("hAlign";vk horizontal align right))
 End if
```
