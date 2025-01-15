---
id: vp-set-time-value
title: VP SET TIME VALUE
---

<!-- REF #_method_.VP SET TIME VALUE.Syntax -->

**VP SET TIME VALUE** ( *rangeObj* : Object ; *timeValue* : Text { ; *formatPattern* : Text }  ) <!-- END REF -->

<!-- REF #_method_.VP SET TIME VALUE.Params -->

| Parâmetro     | Tipo   |    | Descrição            |                  |
| ------------- | ------ | -- | -------------------- | ---------------- |
| rangeObj      | Object | -> | Objeto intervalo     |                  |
| timeValue     | Hora   | -> | Valor hora a definir |                  |
| formatPattern | Text   | -> | Formato do valor     | <!-- END REF --> |

#### Descrição

The `VP SET TIME VALUE` command <!-- REF #_method_.VP SET TIME VALUE.Summary -->assigns a specified time value to a designated cell range<!-- END REF -->.

Em *rangeObj*, passe um intervalo de células (criado, por exemplo, com [`VP Cell`](vp-cell.md) ou [`VP Column`](vp-column.md)) cujo valor você deseja especificar. If *rangeObj* includes multiple cells, the value specified will be repeated in each cell.

The *timeValue* parameter specifies a time expressed in seconds to be assigned to the *rangeObj*.

O *formatPattern* opcional define um [padrão](../configuring.md#cell-format) para o parâmetro *timeValue*.

#### Exemplo

```4d
//Set the value to the current time
VP SET TIME VALUE(VP Cell("ViewProArea";5;2);Current time)
 
//Set the value to a specific time with a designated format
VP SET TIME VALUE(VP Cell("ViewProArea";5;2);?12:15:06?;vk pattern long time)
```

#### Veja também

[Cell Format](../configuring.md#cell-format)<br/>
[VP SET DATE TIME VALUE](vp-set-date-time-value.md)<br/>
[VP SET VALUE](vp-set-value.md)
