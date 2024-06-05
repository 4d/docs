---
id: onColumnResize
title: On Column Resize
---

| Code | Peut être appelé par                                                                                                                                                                     | Définition                                                                                                                           |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 33   | [Zone 4D View Pro](../FormObjects/viewProArea_overview.md) - [List Box](../FormObjects/listbox_overview.md) - [Colonne de List Box](../FormObjects/listbox_overview.md#list-box-columns) | La largeur d'une colonne est modifiée directement par l'utilisateur ou à la suite d'un redimensionnement de la fenêtre de formulaire |

## Description

### List Box

Cet événement est généré lorsque la largeur d'une colonne dans la list box est modifiée par un utilisateur. L'événement est déclenché "en direct", c'est-à-dire envoyé en continu pendant l'événement, tant que la list box ou la colonne concernée est redimensionnée. Ce redimensionnement s'effectue manuellement par un utilisateur, ou peut se produire suite au redimensionnement de la list box et de ses colonnes avec la fenêtre de formulaire elle-même (que le formulaire soit redimensionné manuellement ou à l'aide de la

> L'événement `On Column Resize` n'est pas déclenché lorsqu'une [fausse colonne](../FormObjects/properties_ResizingOptions.md#about-the-fake-blank-column) est redimensionnée.

### 4D View Pro

Cet événement est généré lorsque la largeur d'une colonne est modifiée par un utilisateur. Dans ce contexte, l'[objet événement](overview.md#event-object) retourné par la commande `FORM Event` contient :

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
