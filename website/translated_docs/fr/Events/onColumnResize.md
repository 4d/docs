---
id: onColumnResize
title: Sur redimensionnement colonne
---

| Code | Peut être appelé par                                                                                                                                                            | Définition                                                                                                                           |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 33   | [Zone 4D View Pro](FormObjects/viewProArea_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Colonne de List Box](FormObjects/listbox_overview.md#list-box-columns) | La largeur d'une colonne est modifiée directement par l'utilisateur ou à la suite d'un redimensionnement de la fenêtre de formulaire |


## Description

### List Box

Cet événement est généré lorsque la largeur d'une colonne dans la list box est modifiée par un utilisateur. L'événement est déclenché "en direct", c'est-à-dire envoyé en continu pendant l'événement, tant que la list box ou la colonne concernée est redimensionnée. Ce redimensionnement s'effectue manuellement par un utilisateur, ou peut se produire suite au redimensionnement de la list box et de ses colonnes avec la fenêtre de formulaire elle-même (que le formulaire soit redimensionné manuellement ou à l'aide de la commande `RESIZE FORM WINDOW`).

> L'événement `On Column Resize` n'est pas déclenché lorsqu'une [fausse colonne](FormObjects/propertiesResizingOptions.html#about-the-fake-blank-column) est redimensionnée.

### 4D View Pro

Cet événement est généré lorsque la largeur d'une colonne est modifiée par un utilisateur. On this context, the [event object](overview.md#event-object) returned by the `FORM Event` command contains:

| Propriété   | Type        | Description                                                                                |
| ----------- | ----------- | ------------------------------------------------------------------------------------------ |
| code        | entier long | Sur redimensionnement colonne                                                              |
| description | Texte       | "On Column Resize"                                                                         |
| objectName  | Texte       | 4D View Pro area name                                                                      |
| sheetName   | Texte       | Name of the sheet of the event                                                             |
| range       | object      | Plage de cellules des colonnes dont les largeurs ont changé                                |
| header      | boolean     | "True" si la colonne d'en-tête de ligne (première colonne) est redimensionnée, sinon false |

#### Exemple

```4d
 If(FORM Event.code=On Column Resize)
    VP SET CELL STYLE(FORM Event.range;New object("hAlign";vk horizontal align right))
 End if
```