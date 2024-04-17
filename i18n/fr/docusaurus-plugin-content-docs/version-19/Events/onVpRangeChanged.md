---
id: onVpRangeChanged
title: On VP Range Changed
---

| Code | Peut être appelé par                                    | Définition                                                                                                      |
| ---- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 61   | [Zone 4D View Pro](FormObjects/viewProArea_overview.md) | La plage de cellules 4D View Pro a changé (ex : un calcul de formule, une valeur supprimée d'une cellule, etc.) |

## Description

Cet événement est généré lorsqu'un changement intervient dans une plage de cellules dans le document 4D View Pro.

L'objet retourné par la commande FORM Event contient :

| Propriété    | Type        | Description                                                                                                                                                                                                               |
| ------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objectName   | text        | Nom de la zone 4D View Pro                                                                                                                                                                                                |
| code         | entier long | On VP Range Changed                                                                                                                                                                                                       |
| Description  | text        | "On VP Range Changed"                                                                                                                                                                                                     |
| sheetName    | text        | Nom de la feuille de l'événement                                                                                                                                                                                          |
| range        | object      | Plage de cellules liées au changement                                                                                                                                                                                     |
| changedCells | object      | Plage contenant uniquement les cellules modifiées. Il peut s'agir d'une gamme combinée.                                                                                                                                   |
| action       | text        | Le type d'opération générant l'événement :<li>"clear" - effacement de la valeur de la plage</li><li>"dragDrop" - glisser-déposer</li><li>"dragFill" - remplissage par glisser</li><li>"evaluateFormula" - évaluation d'une formule dans une plage de cellules spécifiée</li><li>"paste" - coller</li><li>"setArrayFormula" - Définition d'une formule dans une plage de cellules spécifiée</li><li>"sort" - Tri d'une plage de cellules</li> |
> Voir également [On After Edit](onAfterEdit.md). 
