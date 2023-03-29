---
id: onVpRangeChanged
title: On VP Range Changed
---

| Code | Pode ser chamado por                                    | Definição                                                                                             |
| ---- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 61   | [Área 4D View Pro](FormObjects/viewProArea_overview.md) | The 4D View Pro cell range has changed (e.g., a formula calculation, value removed from a cell, etc.) |

## Descrição

This event is generated when a change occurs within a cell range in the 4D View Pro document.

The object returned by the FORM Event command contains:

| Propriedade  | Tipo          | Descrição                                                                                                                                                                                                                  |
| ------------ | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objectName   | text          | Nome da área 4D View Pro                                                                                                                                                                                                   |
| code         | inteiro longo | On VP Range Changed                                                                                                                                                                                                        |
| description  | text          | "On VP Range Changed"                                                                                                                                                                                                      |
| sheetName    | text          | Name of the sheet of the event                                                                                                                                                                                             |
| range        | object        | Cell range of the change                                                                                                                                                                                                   |
| changedCells | object        | Range containing only the changed cells. It can be a combined range.                                                                                                                                                       |
| action       | text          | The type of operation generating the event:<li>"clear" - A clear range value operation</li><li>"dragDrop" - A drag and drop operation</li><li>"dragFill" - A drag fill operation</li><li>"evaluateFormula" - Setting a formula in a specified cell range</li><li>"paste" - A paste operation</li><li>"setArrayFormula" - Setting a formula in a specified cell range</li><li>"sort" - Sorting a range of cells</li> |
> See also [On After Edit](onAfterEdit.md). 
