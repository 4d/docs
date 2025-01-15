---
id: vp-set-current-sheet
title: VP SET CURRENT SHEET
---

<!-- REF #_method_.VP SET CURRENT SHEET.Syntax -->

**VP SET CURRENT SHEET** ( *vpAreaName* : Text ; *sheet* : Integer)<!-- END REF -->

<!-- REF #_method_.VP SET CURRENT SHEET.Params -->

| Parâmetro  | Tipo    |                             | Descrição                                  |                  |
| ---------- | ------- | --------------------------- | ------------------------------------------ | ---------------- |
| vpAreaName | Text    | ->                          | Nome de objeto formulário área 4D View Pro |                  |
| sheet      | Integer | <- | Índice da nova folha atual                 | <!-- END REF --> |

#### Descrição

The `VP SET CURRENT SHEET` command <!-- REF #_method_.VP SET CURRENT SHEET.Summary -->sets the current sheet in *vpAreaName*<!-- END REF --> . A folha atual é a folha selecionada no documento.

Em *vpAreaName*, passe o nome da área 4D View Pro.

Em *sheet*, passe o índice da planilha a ser definida como planilha atual. If the index passed is inferior to 0 or exceeds the number of sheets, the command does nothing.

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
