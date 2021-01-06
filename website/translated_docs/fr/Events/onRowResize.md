---
id: onRowResize
title: On Row Resize
---

| Code | Peut être appelé par                                    | Définition                                                            |
| ---- | ------------------------------------------------------- | --------------------------------------------------------------------- |
| 60   | [Zone 4D View Pro](FormObjects/viewProArea_overview.md) | La hauteur d'une ligne est modifiée par un utilisateur avec la souris |


## Description

Cet événement est généré lorsque la hauteur d'une ligne est modifiée par un utilisateur dans un document 4D View Pro. Dans ce contexte, l'[objet événement](overview.md#event-object) retourné par la commande `FORM Event` contient :

| Propriété   | Type        | Description                                                                                 |
| ----------- | ----------- | ------------------------------------------------------------------------------------------- |
| code        | entier long | 60                                                                                          |
| description | Texte       | "On Row Resize"                                                                             |
| objectName  | Texte       | 4D View Pro area name                                                                       |
| sheetName   | Texte       | Name of the sheet of the event                                                              |
| range       | object      | Plage de cellules des lignes dont les hauteurs ont changé                                   |
| header      | boolean     | "True" si la ligne de la colonne d'en-tête (première ligne) est redimensionnée, sinon false |

#### Exemple

```4d
 If(FORM Event.code=On Row Resize)
    VP SET CELL STYLE(FORM Event.range;New object("vAlign";vk vertical align top))
 End if
```