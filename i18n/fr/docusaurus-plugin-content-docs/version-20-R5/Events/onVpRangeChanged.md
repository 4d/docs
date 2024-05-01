---
id: onVpRangeChanged
title: On VP Range Changed
---

| Code | Peut être appelé par                                    | Définition                                                                                                                                                         |
| ---- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 61   | [4D View Pro Area](FormObjects/viewProArea_overview.md) | La plage de cellules 4D View Pro a changé (ex : un calcul de formule, une valeur supprimée d'une cellule, etc.) |

## Description

Cet événement est généré lorsqu'un changement intervient dans une plage de cellules dans le document 4D View Pro.

L'objet retourné par la commande FORM Event contient :

| Propriété    | Type        | Description                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------ | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objectName   | text        | Nom de la zone 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                                          |
| code         | entier long | On VP Range Changed                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Description  | text        | "On VP Range Changed"                                                                                                                                                                                                                                                                                                                                                                                                               |
| sheetName    | text        | Nom de la feuille de l'événement                                                                                                                                                                                                                                                                                                                                                                                                    |
| range        | object      | Plage de cellules liées au changement                                                                                                                                                                                                                                                                                                                                                                                               |
| changedCells | object      | Plage contenant uniquement les cellules modifiées. Il peut s'agir d'une gamme combinée.                                                                                                                                                                                                                                                                                                             |
| action       | text        | The type of operation generating the event:<li>"clear" - A clear range value operation</li><li>"dragDrop" - A drag and drop operation</li><li>"dragFill" - A drag fill operation</li><li>"evaluateFormula" - Setting a formula in a specified cell range</li><li>"paste" - A paste operation</li><li>"setArrayFormula" - Setting a formula in a specified cell range</li><li>"sort" - Sorting a range of cells</li> |

> See also [On After Edit](onAfterEdit.md).
