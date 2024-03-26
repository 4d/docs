---
id: vp-set-field
title: VP SET FIELD
---

<!-- REF #_method_.VP SET FIELD.Syntax -->

**VP SET FIELD** ( _rangeObj_ : Object ; _field_ : Pointer { ; _formatPattern_ : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET FIELD.Params -->

| Parâmetro     | Tipo     |    | Descrição                                |                  |
| ------------- | -------- | -- | ---------------------------------------- | ---------------- |
| rangeObj      | Object   | -> | Objeto intervalo                         |                  |
| campo         | Ponteiro | -> | Referência ao campo na estrutura virtual |                  |
| formatPattern | Text     | -> | Formato do campo                         | <!-- END REF --> |

#### Descrição

The `VP SET FIELD` command <!-- REF #_method_.VP SET FIELD.Summary -->assigns a 4D database virtual field to a designated cell range<!-- END REF -->.

In _rangeObj_, pass a range of the cell(s) whose value you want to specify. If _rangeObj_ includes multiple cells, the specified field will be linked in each cell.

The _field_ parameter specifies a 4D database [virtual field](../formulas.md#referencing-fields-using-the-virtual-structure) to be assigned to the _rangeObj_. The virtual structure name for _field_ can be viewed in the formula bar. If any of the cells in _rangeObj_ have existing content, it will be replaced by _field_.

The optional _formatPattern_ defines a pattern for the _field_ parameter. You can pass any valid [custom format](../configuring.md#cell-format).

#### Exemplo

```4d
VP SET FIELD(VP Cell("ViewProArea";5;2);->[TableName]Field)
```

#### Veja também

[VP SET VALUE](vp-set-value.md)
