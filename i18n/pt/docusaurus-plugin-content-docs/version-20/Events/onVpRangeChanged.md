---
id: onVpRangeChanged
title: On VP Range Changed
---

| Code | Pode ser chamado por                                    | Definição                                                                                                                |
| ---- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 61   | [Área 4D View Pro](FormObjects/viewProArea_overview.md) | O intervalo de células 4D View Pro foi alterado (por exemplo, um cálculo de fórmula, valor removido de uma célula, etc.) |


## Descrição


Esse evento é gerado quando ocorre uma alteração em um intervalo de células no documento 4D View Pro.

O objeto devolvido pelo comando FORM Event contém:

| Propriedade  | Tipo          | Descrição                                                                                                                                                                                                            |
| ------------ | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objectName   | text          | Nome da área 4D View Pro                                                                                                                                                                                             |
| code         | inteiro longo | On VP Range Changed                                                                                                                                                                                                  |
| description  | text          | "On VP Range Changed"                                                                                                                                                                                                |
| sheetName    | text          | Nome da folha do evento                                                                                                                                                                                              |
| range        | object        | Intervalo de células da alteração                                                                                                                                                                                    |
| changedCells | object        | Intervalo que contém apenas as células alteradas. Pode ser um intervalo combinado.                                                                                                                                   |
| action       | text          | O tipo de operação que gera o evento:<li>"clear" - Uma operação de limpeza do valor do intervalo</li><li>"dragDrop" - Uma operação de arrastar e largar</li><li>"dragFill" - Uma operação de preenchimento por arrastamento</li><li>"evaluateFormula" - Definir uma fórmula num intervalo de células especificado</li><li>"paste" - Uma operação de colagem</li><li>"setArrayFormula" - Definir uma fórmula num intervalo de células especificado</li><li>"sort" - Ordenar um intervalo de células</li> |
> Ver também [On After Edit](onAfterEdit.md).	
