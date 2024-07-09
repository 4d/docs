---
id: vp-set-field
title: VP SET FIELD
---

<!-- REF #_method_.VP SET FIELD.Syntax -->

**VP SET FIELD** ( *rangeObj* : Object ; *field* : Pointer { ; *formatPattern* : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET FIELD.Params -->

| Parâmetro     | Tipo     |    | Descrição                                |                  |
| ------------- | -------- | -- | ---------------------------------------- | ---------------- |
| rangeObj      | Object   | -> | Objeto intervalo                         |                  |
| campo         | Ponteiro | -> | Referência ao campo na estrutura virtual |                  |
| formatPattern | Text     | -> | Formato do campo                         | <!-- END REF --> |

#### Descrição

O comando `VP SET FIELD` <!-- REF #_method_.VP SET FIELD.Summary -->atribui um campo virtual do banco de dados 4D a um intervalo de células designado<!-- END REF -->.

In *rangeObj*, pass a range of the cell(s) whose value you want to specify. If *rangeObj* includes multiple cells, the specified field will be linked in each cell.

The *field* parameter specifies a 4D database [virtual field](../formulas.md#referencing-fields-using-the-virtual-structure) to be assigned to the *rangeObj*. The virtual structure name for *field* can be viewed in the formula bar. If any of the cells in *rangeObj* have existing content, it will be replaced by *field*.

The optional *formatPattern* defines a pattern for the *field* parameter. You can pass any valid [custom format](../configuring.md#cell-format).

#### Exemplo

```4d
VP SET FIELD(VP Cell("ViewProArea";5;2);->[TableName]Field)
```

#### Veja também

[VP SET VALUE](vp-set-value.md)
