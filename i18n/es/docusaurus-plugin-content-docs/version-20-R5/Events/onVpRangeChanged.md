---
id: onVpRangeChanged
title: On VP Range Changed
---

| Code | Puede ser llamado por                                   | Definición                                                                                                                                                |
| ---- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 61   | [4D View Pro Area](FormObjects/viewProArea_overview.md) | El rango de celdas 4D View Pro ha cambiado (por ejemplo, un cálculo de fórmula, un valor eliminado de una celda, etc.) |

## Descripción

Este evento se genera cuando se produce un cambio dentro de un rango de celdas en el documento 4D View Pro.

El objeto devuelto por el comando FORM Event contiene:

| Propiedad    | Tipo         | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objectName   | text         | Nombre del área 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                                         |
| code         | entero largo | On VP Range Changed                                                                                                                                                                                                                                                                                                                                                                                                                 |
| description  | text         | "On VP Range Changed"                                                                                                                                                                                                                                                                                                                                                                                                               |
| sheetName    | text         | Nombre de la hoja del evento                                                                                                                                                                                                                                                                                                                                                                                                        |
| range        | object       | Rango de celdas del cambio                                                                                                                                                                                                                                                                                                                                                                                                          |
| changedCells | object       | Rango que contiene sólo las celdas modificadas. Puede ser una gama combinada.                                                                                                                                                                                                                                                                                                                       |
| action       | text         | The type of operation generating the event:<li>"clear" - A clear range value operation</li><li>"dragDrop" - A drag and drop operation</li><li>"dragFill" - A drag fill operation</li><li>"evaluateFormula" - Setting a formula in a specified cell range</li><li>"paste" - A paste operation</li><li>"setArrayFormula" - Setting a formula in a specified cell range</li><li>"sort" - Sorting a range of cells</li> |

> See also [On After Edit](onAfterEdit.md).
