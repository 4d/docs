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

| Propiedad    | Tipo         | Descripción                                                                                                                                                                                                                                                                  |
| ------------ | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objectName   | texto        | Nombre del área 4D View Pro                                                                                                                                                                                                                                                  |
| code         | entero largo | On VP Range Changed                                                                                                                                                                                                                                                          |
| description  | texto        | "On VP Range Changed"                                                                                                                                                                                                                                                        |
| sheetName    | texto        | Nombre de la hoja del evento                                                                                                                                                                                                                                                 |
| range        | objeto       | Cell range of the change                                                                                                                                                                                                                                                     |
| changedCells | objeto       | Range containing only the changed cells. It can be a combined range.                                                                                                                                                                                                         |
| action       | texto        | The type of operation generating the event:<p><p><li>"clear" - A clear range value operation</li><li>"dragDrop" - Una operación de arrastrar y soltar</li><li>"dragFill" - Una operación de llenado por arrastre</li><li>"evaluateFormula" - Definición de una fórmula en un rango de celdas especificado</li><li>"pegar" - Una operación de pegado</li><li>"setArrayFormula" - Definición de una fórmula en un rango de celdas especificado</li><li>"sort" - Ordenar un rango de celdas</li> |
> See also [On After Edit](onAfterEdit.md).	
