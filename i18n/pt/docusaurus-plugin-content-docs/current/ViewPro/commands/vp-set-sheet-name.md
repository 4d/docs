---
id: vp-set-sheet-name
title: VP SET SHEET NAME
---

<!-- REF #_method_.VP SET SHEET NAME.Syntax -->

**VP SET SHEET NAME** ( _vpAreaName_ : Text ; _name_ : Text {; _sheet_: Integer} )<!-- END REF -->

<!-- REF #_method_.VP SET SHEET NAME.Params -->

| Parâmetro  | Tipo    |    | Descrição                                  |                  |
| ---------- | ------- | -- | ------------------------------------------ | ---------------- |
| vpAreaName | Text    | -> | Nome de objeto formulário área 4D View Pro |                  |
| name       | Text    | -> | Novo nome para a folha                     |                  |
| sheet      | Integer | -> | Index of the sheet to be renamed           | <!-- END REF --> |

#### Descrição

The `VP SET SHEET NAME` command <!-- REF #_method_.VP SET SHEET NAME.Summary -->renames a sheet in the document loaded in _vpAreaName_<!-- END REF -->.

Em _vpAreaName_, passe o nome da área 4D View Pro.

In _name_, pass a new name for the sheet.

In _sheet_, pass the index of the sheet to rename.

> A indexação começa em 0.

If no _sheet_ is passed, the command renames the current sheet.

O novo nome não pode conter os seguintes caracteres: `*, :, [, ], ?,\,/`

O comando não faz nada se:

- o novo nome contém caracteres proibidos
- o valor do novo nome está em branco
- o novo nome já existe
- the passed _sheet_ index does not exist

#### Exemplo

Defina o nome da terceira folha como "Total first quarter":

```4d
VP SET SHEET NAME("ViewProArea";"Total first quarter";2)
```

![](../../assets/en/ViewPro/vp-sheet-index-name.png)
