---
id: onHeaderClick
title: On Header Click
---

| Code | Peut être appelé par                                                                                                                                                            | Définition                                    |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| 42   | [Zone 4D View Pro](FormObjects/viewProArea_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Colonne de List Box](FormObjects/listbox_overview.md#list-box-columns) | Un clic se produit dans un en-tête de colonne |

## Description

### List Box

Cet événement est généré lorsqu'un clic se produit sur l'en-tête d'une colonne de list box. Dans ce cas, la commande `Self` vous permet d'identifier l'en-tête de la colonne sur laquelle vous avez cliqué.

Si la propriété [Sortable](FormObjects/properties_Action.md#sortable) a été sélectionnée pour la list box, vous pouvez décider d'autoriser ou non un tri standard de la colonne en passant la valeur 0 ou -1 dans la variable `$0` :

- Si `$0` est égal à 0, un tri standard est effectué.
- Si `$0` est égal à -1, un tri standard n'est pas effectué et l'en-tête n'affiche pas la flèche de tri. Le développeur peut toujours générer un tri de colonne basé sur des critères de tri personnalisés à l'aide du langage 4D.

Si la propriété [Sortable](FormObjects/properties_Action.md#sortable) n'est pas sélectionnée pour la list box, la variable `$0` n'est pas utilisée.

### 4D View Pro

Cet événement est généré lorsque l'utilisateur clique sur un en-tête de colonne ou de ligne dans un document 4D View Pro. Dans ce contexte, l'[objet événement](overview.md#event-object) retourné par la commande `FORM Event` contient :

| Propriété   | Type        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| code        | entier long | 42                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Description | text        | "On Header Click"                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| objectName  | text        | Nom de la zone 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| sheetName   | text        | Nom de la feuille de l'événement                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| range       | object      | Plage de cellule                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| sheetArea   | entier long | L'emplacement de la feuille où l'événement a eu lieu:<br/><li>0: La zone d'intersection entre les en-têtes des numéros/lettres de colonne (en haut à gauche de la feuille)</li><li>1: Les en-têtes des colonnes (zone indiquant les numéros/lettres de colonne)</li><li>2: Les en-têtes des lignes (zone indiquant les numéros de ligne)</li> |

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
