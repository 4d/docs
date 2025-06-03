---
id: vp-set-date-value
title: VP SET DATE VALUE
---

<!-- REF #_method_.VP SET DATE VALUE.Syntax -->

**VP SET DATE VALUE** ( *rangeObj* : Object ; *dateValue* : Date { ; *formatPattern* : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET DATE VALUE.Params -->

| Parâmetro     | Tipo   |    | Descrição            |                  |
| ------------- | ------ | -- | -------------------- | ---------------- |
| rangeObj      | Object | -> | Objeto intervalo     |                  |
| dateValue     | Date   | -> | Valor date a definir |                  |
| formatPattern | Text   | -> | Formato do valor     | <!-- END REF --> |

## Descrição

O comando <!-- REF #method_.VP SET VALUE.Summary --> atribui um valor de data para um intervalo de células designados<!-- END REF -->.

Em *rangeObj*, passe um intervalo dá(s) célula(s) cujo valor pretende especificar. If *rangeObj* includes multiple cells, the value specified will be repeated in each cell.

O parâmetro *dateValue* especifica um valor de data a ser atribuído ao intervalo *rangeObj*.

O parâmetro *formatPattern* opcional define um padrão para o parâmetro *dateValue*. Passe qualquer formato personalizado ou você pode usar uma das seguintes constantes:

| Parâmetros              | Descrição                              | Padrão predefinido dos EUA |
| ----------------------- | -------------------------------------- | -------------------------- |
| `vk pattern long date`  | Formato ISO 8601 para a data completa  | "dddd, dd MMMM yyyy"       |
| `vk pattern month day`  | Formato ISO 8601 para o mês e o dia    | "MMMM dd"                  |
| `vk pattern short date` | Formato ISO 8601 abreviado para a data | "MM/dd/yyyy"               |
| `vk pattern year month` | Formato ISO 8601 para o mês e o ano    | "yyyy MMMM"                |

Para informações sobre padrões e caracteres de formatação, por favor, consulte a seção [Formato de Data e Hora](../configuring.md#date-and-time).

## Exemplo

```4d
//Set the cell value to the current date
VP SET DATE VALUE(VP Cell("ViewProArea";4;2);Current date))
 
//Set the cell value to a specific date with a designated format
VP SET DATE VALUE(VP Cell("ViewProArea";4;4);Date("12/25/94");"d/m/yy ")
VP SET DATE VALUE(VP Cell("ViewProArea";4;6);!2005-01-15!;vk pattern month day)
```

## Veja também

[Formato de célula 4D View Pro](../configuring.md#cell-format)<br/>
[VP SET DATE TIME VALUE](vp-set-date-time-value.md)<br/>
[VP SET VALUE](vp-set-value.md)

