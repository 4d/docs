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

| Propriedade  | Tipo          | Descrição                                                                                                                                                                                                            |
| ------------ | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objectName   | text          | Nome da área 4D View Pro                                                                                                                                                                                             |
| code         | inteiro longo | On VP Range Changed                                                                                                                                                                                                  |
| description  | text          | "On VP Range Changed"                                                                                                                                                                                                |
| sheetName    | text          | Nome da folha do evento                                                                                                                                                                                              |
| range        | object        | Cell range of the change                                                                                                                                                                                             |
| changedCells | object        | Intervalo que contém apenas as células alteradas. Pode ser um intervalo combinado.                                                                                                                                   |
| action       | text          | O tipo de operação que gera o evento:<li>"clear" - A clear range value operation</li><li>"dragDrop" - Uma operação de arrastar e largar</li><li>"dragFill" - Uma operação de preenchimento por arrastamento</li><li>"evaluateFormula" - Setting a formula in a specified cell range</li><li>"paste" - Uma operação de colagem</li><li>"setArrayFormula" - Setting a formula in a specified cell range</li><li>"sort" - Ordenar um intervalo de células</li> |
> See also [On After Edit](onAfterEdit.md). 
