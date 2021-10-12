---
id: onVpRangeChanged
title: On VP Range Changed
---

| Code | Puede ser llamado por                                   | Definición                                                                                                             |
| ---- | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 61   | [Área 4D View Pro](FormObjects/viewProArea_overview.md) | El rango de celdas 4D View Pro ha cambiado (por ejemplo, un cálculo de fórmula, un valor eliminado de una celda, etc.) |


## Descripción


Este evento se genera cuando se produce un cambio dentro de un rango de celdas en el documento 4D View Pro.

El objeto devuelto por el comando FORM Event contiene:

| Propiedad    | Tipo         | Descripción                                                                                                                                                                                                                                                                 |
| ------------ | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objectName   | texto        | Nombre del área 4D View Pro                                                                                                                                                                                                                                                 |
| code         | entero largo | On VP Range Changed                                                                                                                                                                                                                                                         |
| description  | texto        | "On VP Range Changed"                                                                                                                                                                                                                                                       |
| sheetName    | texto        | Nombre de la hoja del evento                                                                                                                                                                                                                                                |
| range        | objeto       | Rango de celdas del cambio                                                                                                                                                                                                                                                  |
| changedCells | objeto       | Rango que contiene sólo las celdas modificadas. Puede ser una gama combinada.                                                                                                                                                                                               |
| action       | texto        | El tipo de operación que genera el evento:<p><p><li>"clear" - operación para borrar el valor de un rango</li><li>"dragDrop" - Una operación de arrastrar y soltar</li><li>"dragFill" - Una operación de llenado por arrastre</li><li>"evaluateFormula" - Definición de una fórmula en un rango de celdas especificado</li><li>"pegar" - Una operación de pegado</li><li>"setArrayFormula" - Definición de una fórmula en un rango de celdas especificado</li><li>"sort" - Ordenar un rango de celdas</li> |
> Ver también [On After Edit](onAfterEdit.md).	
