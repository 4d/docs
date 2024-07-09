---
id: vp-remove-sheet
title: VP REMOVE SHEET
---

<!-- REF #_method_.VP REMOVE SHEET.Syntax -->

**VP REMOVE SHEET** ( *vpAreaName* : Text ; *index*: Integer ) <!-- END REF -->

<!-- REF #_method_.VP REMOVE SHEET.Params -->

| Parâmetro  | Tipo    |    | Descrição                                  |                  |
| ---------- | ------- | -- | ------------------------------------------ | ---------------- |
| vpAreaName | Text    | -> | Nome de objeto formulário área 4D View Pro |                  |
| index      | Integer | -> | Índice da folha a remover                  | <!-- END REF --> |

#### Descrição

The `VP REMOVE SHEET` command <!-- REF #_method_.VP REMOVE SHEET.Summary -->removes the sheet with the specified *index* from the document loaded in *vpAreaName*<!-- END REF -->.

Em *vpAreaName*, passe o nome da área 4D View Pro.

In *index*, pass the index of the sheet to remove. If the passed *index* does not exist, the command does nothing.

> A indexação começa em 0.

#### Exemplo

O documento tem atualmente três folhas:

![](../../assets/en/ViewPro/vp-sheet-3.png)

Retirar a terceira folha:

```4d
VP REMOVE SHEET("ViewProArea";2)
```

![](../../assets/en/ViewPro/vp-sheet-2.png)

#### Veja também

[VP ADD SHEET](vp-add-sheet.md)
