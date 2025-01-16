---
id: vp-get-current-sheet
title: VP Get current sheet
---

<!-- REF #_method_.VP Get current sheet.Syntax -->

**VP Get current sheet** ( *vpAreaName* : Text )<!-- END REF -->

<!-- REF #_method_.VP Get current sheet.Params -->

| Parâmetro  | Tipo    |                             | Descrição                                  |                  |
| ---------- | ------- | --------------------------- | ------------------------------------------ | ---------------- |
| vpAreaName | Text    | ->                          | Nome de objeto formulário área 4D View Pro |                  |
| Resultado  | Integer | <- | Índice da folha actual                     | <!-- END REF --> |

#### Descrição

The `VP Get current sheet` command <!-- REF #_method_.VP Get current sheet.Summary -->returns the index of the current sheet in *vpAreaName*. A planilha atual é a planilha selecionada no documento.<!-- END REF -->

Em *vpAreaName*, passe o nome da área 4D View Pro.

> A indexação começa em 0.

#### Exemplo

Quando a terceira folha é selecionada:

![third-sheet](../../assets/en/ViewPro/vp-sheet-3-select.png)

O comando devolve 2:

```4d
$index:=VP Get current sheet("ViewProArea")
```

#### Veja também

[VP SET CURRENT SHEET](vp-set-current-sheet.md)
