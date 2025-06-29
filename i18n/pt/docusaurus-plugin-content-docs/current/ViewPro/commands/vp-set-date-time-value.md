---
id: vp-set-date-time-value
title: VP SET DATE TIME VALUE
---

<!-- REF #_method_.VP SET DATE TIME VALUE.Syntax -->

**VP SET DATE TIME VALUE** ( *rangeObj* : Object ; *dateValue* : Date ; *timeValue* : Time {; *formatPattern* : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET DATE TIME VALUE.Params -->

| Parâmetro     | Tipo   |    | Descrição            |                  |
| ------------- | ------ | -- | -------------------- | ---------------- |
| rangeObj      | Object | -> | Objeto intervalo     |                  |
| dateValue     | Date   | -> | Valor date a definir |                  |
| timeValue     | Hora   | -> | Valor hora a definir |                  |
| formatPattern | Text   | -> | Formato do valor     | <!-- END REF --> |

## Descrição

O comando `VP SET DATA VALUE` <!-- REF #_method_.VP SET DATE TIME VALUE.Summary --> atribui um valor de data e horário especificado a um intervalo de células designadas<!-- END REF -->.

Em *rangeObj*, passe um intervalo de células (criado, por exemplo, com [`VP Cell`](vp-cell.md) ou [`VP Column`](vp-column.md)) cujo valor você deseja especificar. Se *rangeObj* incluir várias células, o valor especificado será repetido em cada célula.

O parâmetro *dateValue* especifica um valor de data a ser atribuído ao intervalo *rangeObj*.

O parâmetro *timeValue* especifica um valor de tempo (expresso em segundos) a ser atribuído ao *rangeObj*.

The optional *formatPattern* defines a pattern for the *dateValue* and *timeValue* parameters. Para informações sobre padrões e caracteres de formatação, por favor, consulte a seção [Formato de Data e Hora](../configuring.md#date-and-time).

## Exemplo

```4d
//Set the cell value as the current date and time
VP SET DATE TIME VALUE(VP Cell("ViewProArea";6;2);Current time;Current date;vk pattern full date time)
 
//Set the cell value as the 18th of December
VP SET DATE TIME VALUE(VP Cell("ViewProArea";3;9);!2024-12-18!;?14:30:10?;vk pattern sortable date time)
```

## Veja também

[4D View Pro cell format](../configuring.md#cell-format)<br/>
[VP SET DATE VALUE](vp-set-date-value.md)<br/>
[VP SET TIME VALUE](vp-set-time-value.md)<br/>
[VP SET VALUE](vp-set-value.md)