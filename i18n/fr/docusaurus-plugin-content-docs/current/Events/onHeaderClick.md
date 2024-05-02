---
id: onHeaderClick
title: On Header Click
---

| Code | Peut être appelé par                                                                                                                                                        | Définition                                    |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| 42   | [4D View Pro Area](FormObjects/viewProArea_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | Un clic se produit dans un en-tête de colonne |

## Description

### List Box

Cet événement est généré lorsqu'un clic se produit sur l'en-tête d'une colonne de list box. In this case, the `Self` command lets you find out the header of the column that was clicked.

If the [Sortable](FormObjects/properties_Action.md#sortable) property was selected for the list box, you can decide whether or not to authorize a standard sort of the column by passing the value 0 or -1 in the `$0` variable:

- If `$0` equals 0, a standard sort is performed.
- If `$0` equals -1, a standard sort is not performed and the header does not display the sort arrow. Le développeur peut toujours générer un tri de colonne basé sur des critères de tri personnalisés à l'aide du langage 4D.

If the [Sortable](FormObjects/properties_Action.md#sortable) property is not selected for the list box, the `$0` variable is not used.

### 4D View Pro

Cet événement est généré lorsque l'utilisateur clique sur un en-tête de colonne ou de ligne dans un document 4D View Pro. In this context, the [event object](overview.md#event-object) returned by the `FORM Event` command contains:

| Propriété   | Type        | Description                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| code        | entier long | 42                                                                                                                                                                                                                                                                                                                                                                                                             |
| Description | text        | "On Header Click"                                                                                                                                                                                                                                                                                                                                                                                              |
| objectName  | text        | Nom de la zone 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                     |
| sheetName   | text        | Nom de la feuille de l'événement                                                                                                                                                                                                                                                                                                                                                                               |
| range       | object      | Plage de cellule                                                                                                                                                                                                                                                                                                                                                                                               |
| sheetArea   | entier long | The sheet location where the event took place:<br/><li>0: The crossing area between column number/letter headers (top left of the sheet)</li><li>1: The column headers (area indicating the column numbers/letters)</li><li>2: The row headers (area indicating the row numbers)</li> |

#### Exemple

```4d
 If(FORM Event.code=On Header Click)
    Case of
       :(FORM Event.sheetArea=1)
          $values:=VP Get values(FORM Event.range)
       :(FORM Event.sheetArea=2)
          VP SET CELL STYLE(FORM Event.range;New object("backColor";"gray"))
       :(FORM Event.sheetArea=0)
          VP SET CELL STYLE(FORM Event.range;New object("borderBottom";\
          New object("color";"#800080";"style";vk line style thick)))
    End case
 End if
```
