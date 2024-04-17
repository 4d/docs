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

| Propiedad    | Tipo         | Descripción                                                                                                                                                                                                               |
| ------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objectName   | text         | Nombre del área 4D View Pro                                                                                                                                                                                               |
| code         | entero largo | On VP Range Changed                                                                                                                                                                                                       |
| description  | text         | "On VP Range Changed"                                                                                                                                                                                                     |
| sheetName    | text         | Nombre de la hoja del evento                                                                                                                                                                                              |
| range        | object       | Rango de celdas del cambio                                                                                                                                                                                                |
| changedCells | object       | Rango que contiene sólo las celdas modificadas. Puede ser una gama combinada.                                                                                                                                             |
| action       | text         | El tipo de operación que genera el evento:<li>"clear" - operación para borrar el valor de un rango</li><li>"dragDrop" - Una operación de arrastrar y soltar</li><li>"dragFill" - Una operación de llenado por arrastre</li><li>"evaluateFormula" - Definición de una fórmula en un rango de celdas especificado</li><li>"paste" - Una operación de pegado</li><li>"setArrayFormula" - Definición de una fórmula en un rango de celdas especificado</li><li>"sort" - Ordenar un rango de celdas</li> |
> Ver también [On After Edit](onAfterEdit.md).	
