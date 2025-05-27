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

## Descrição

O comando `VP SET FIELD` <!-- REF #_method_.VP SET FIELD.Summary -->atribui um campo virtual do banco de dados 4D a um intervalo de células designado<!-- END REF -->.

Em *rangeObj*, passe um intervalo dá(s) célula(s) cujo valor pretende especificar. Se *rangeObj* inclui várias células, o campo especificado será conectado em cada célula.

The *field* parameter specifies a 4D database [virtual field](../formulas.md#referencing-fields-using-the-virtual-structure) to be assigned to the *rangeObj*. O nome da estrutura virtual do *field* pode ser visualizado na barra de fórmulas. If any of the cells in *rangeObj* have existing content, it will be replaced by *field*.

O *formatPattern* opcional define um padrão para o parâmetro de campo. Você pode passar qualquer [formato personalizado] válido(../configuring.md#cell-format).

## Exemplo

```4d
VP SET FIELD(VP Cell("ViewProArea";5;2);->[TableName]Field)
```

## Veja também

[VP SET VALUE](vp-set-value.md)

