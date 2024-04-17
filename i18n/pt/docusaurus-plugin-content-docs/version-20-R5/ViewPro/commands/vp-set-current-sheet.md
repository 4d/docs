---
id: vp-set-current-sheet
title: VP SET CURRENT SHEET
---

<!-- REF #_method_.VP SET CURRENT SHEET.Syntax -->

**VP SET CURRENT SHEET** ( _vpAreaName_ : Text ; _sheet_ : Integer)<!-- END REF -->

<!-- REF #_method_.VP SET CURRENT SHEET.Params -->

| Parâmetro  | Tipo    |    | Descrição                                  |                  |
| ---------- | ------- | -- | ------------------------------------------ | ---------------- |
| vpAreaName | Text    | -> | Nome de objeto formulário área 4D View Pro |                  |
| sheet      | Integer | <- | Índice da nova folha atual                 | <!-- END REF --> |

#### Descrição

The `VP SET CURRENT SHEET` command <!-- REF #_method_.VP SET CURRENT SHEET.Summary -->sets the current sheet in _vpAreaName_<!-- END REF --> . A folha atual é a folha selecionada no documento.

Em _vpAreaName_, passe o nome da área 4D View Pro.

In _sheet_, pass the index of the sheet to be set as current sheet. If the index passed is inferior to 0 or exceeds the number of sheets, the command does nothing.

> A indexação começa em 0.

#### Exemplo

A folha atual do documento é a primeira folha:

![first-sheet-selected](../../assets/en/ViewPro/vp-sheet-3-select.png)

Definir a folha atual como a terceira folha:

```4d
VP SET CURRENT SHEET("ViewProArea";2)
```

![](../../assets/en/ViewPro/vp-sheet-3-select.png)

#### Veja também

[VP Get current sheet](vp-get-current-sheet.md)
