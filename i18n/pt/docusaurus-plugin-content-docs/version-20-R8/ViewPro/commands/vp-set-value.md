---
id: vp-set-value
title: VP SET VALUE
---

<!-- REF #_method_.VP SET VALUE.Syntax -->

**VP SET VALUE** ( *rangeObj* : Object ; *valueObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP SET VALUE.Params -->

| Parâmetro | Tipo   |    | Descrição                              |                  |
| --------- | ------ | -- | -------------------------------------- | ---------------- |
| rangeObj  | Object | -> | Objeto intervalo                       |                  |
| valueObj  | Object | -> | Valores de células e opções de formato | <!-- END REF --> |

#### Descrição

O comando `VP SET VALUE` <!-- REF #_method_.VP SET VALUE.Summary -->atribui um valor especificado a um intervalo de células designado<!-- END REF -->.

The command allows you to use a generic code to set and format the types of values in *rangeObj*, whereas other commands, such as [`VP SET TEXT VALUE`](vp-set-text-value.md) and [`VP SET NUM VALUE`](vp-set-num-value.md), reduce the values to specific types.

In *rangeObj*, pass a range of the cell(s) (created for example with [`VP Cell`](vp-cell) or [`VP Column`](vp-column.md)) whose value you want to specify. If *rangeObj* includes multiple cells, the value specified will be repeated in each cell.

The parameter *valueObj* is an object that includes properties for the value and the [format](../configuring.md#cell-format) to assign to *rangeObj*. Pode incluir as seguintes propriedades:

| Propriedade | Tipo                                     | Descrição                                                                                                                                                                                               |
| ----------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value       | Integer, Real, Boolean, Text, Date, Null | Valor a atribuir a *rangeObj* (exceto - hora). Passar null para apagar o conteúdo da célula.                                                         |
| time        | Real                                     | Valor hora (em segundos) a atribuir a *rangeObj*                                                                                                                                     |
| format      | Text                                     | Padrão para propriedade valor/tempo. For information on patterns and formatting characters, please refer to the [Cell Format](../configuring.md#cell-format) paragraph. |

#### Exemplo

```4d
//Set the cell value as False
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";False))
 
//Set the cell value as 2
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";2))
 
//Set the cell value as $125,571.35
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";125571.35;"format";"_($* #,##0.00_)"))
 
//Set the cell value as Hello World!
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";"Hello World!"))
 
//Set the cell value as current date
VP SET VALUE(VP Cell("ViewProArea";4;2);New object("value";Current date))
 
//Set the cell value as current hour
VP SET VALUE(VP Cell("ViewProArea";5;2);New object("time";Current hour))
 
//Set the cell value as specific date and time
VP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";!2024-12-18!);"time";?14:30:10?;"format";vk pattern full date time))
 
//Erase cell content
VP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";Null))
```

#### Veja também

[Cell Format](../configuring.md#cell-format)<br/>
[VP Get values](vp-get-value.md)<br/>
[VP SET VALUE](vp-set-value.md)<br/>
[VP SET BOOLEAN VALUE](vp-set-boolean-value.md)<br/>
[VP SET DATE TIME VALUE](vp-set-date-time-value.md)<br/>
[VP SET FIELD](vp-set-field.md)<br/>
[VP SET FORMULA](vp-set-formula.md)<br/>
[VP SET NUM VALUE](vp-set-num-value.md)<br/>
[VP SET TEXT VALUE](vp-set-text-value.md)<br/>
[VP SET TIME VALUE](vp-set-time-value.md)
