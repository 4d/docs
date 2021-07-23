---
id: onVpRangeChanged
title: On VP Range Changed
---

| Code | Puede ser llamado por                                   | Definición                                                                                            |
| ---- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 61   | [Área 4D View Pro](FormObjects/viewProArea_overview.md) | The 4D View Pro cell range has changed (e.g., a formula calculation, value removed from a cell, etc.) |


## Descripción


This event is generated when a change occurs within a cell range in the 4D View Pro document.

The object returned by the FORM Event command contains:

| Propriedad   | Tipo         | Descripción                                                                                                                                                                                                                                                                  |
| ------------ | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objectName   | texto        | Nombre del área 4D View Pro                                                                                                                                                                                                                                                  |
| code         | entero largo | On VP Range Changed                                                                                                                                                                                                                                                          |
| description  | texto        | "On VP Range Changed"                                                                                                                                                                                                                                                        |
| sheetName    | texto        | Nombre de la hoja del evento                                                                                                                                                                                                                                                 |
| range        | objeto       | Cell range of the change                                                                                                                                                                                                                                                     |
| changedCells | objeto       | Range containing only the changed cells. It can be a combined range.                                                                                                                                                                                                         |
| action       | texto        | The type of operation generating the event:<p><p><li>"clear" - A clear range value operation</li><li>"dragDrop" - A drag and drop operation</li><li>"dragFill" - A drag fill operation</li><li>"evaluateFormula" - Setting a formula in a specified cell range</li><li>"paste" - A paste operation</li><li>"setArrayFormula" - Setting a formula in a specified cell range</li><li>"sort" - Sorting a range of cells</li> |
> See also [On After Edit](onAfterEdit.md).	
