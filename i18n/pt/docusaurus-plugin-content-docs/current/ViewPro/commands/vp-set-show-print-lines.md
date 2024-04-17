---
id: vp-set-show-print-lines
title: VP SET SHOW PRINT LINES
---

<!-- REF #_method_.VP SET SHOW PRINT LINES.Syntax -->

**VP SET SHOW PRINT LINES** ( _vpAreaName_ : Text {; visible : Boolean}{; _sheet_ : Integer} )<!-- END REF -->

<!-- REF #_method_.VP SET SHOW PRINT LINES.Params -->

| Parâmetro  | Tipo       |    | Descrição                                                                              |                  |
| ---------- | ---------- | -- | -------------------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text       | -> | Nome de objeto formulário área 4D View Pro                                             |                  |
| visible    | Parâmetros | -> | Linhas de impressão apresentadas se True (padrão), ocultas se False |                  |
| sheet      | Integer    | -> | Índice da folha (folha atual se omitida)                            | <!-- END REF --> |

#### Descrição

The `VP SET SHOW PRINT LINES` command <!-- REF #_method_.VP SET SHOW PRINT LINES.Summary --> sets whether to display print preview lines in a spreadsheet.<!-- END REF -->.

Em _vpAreaName_, passe o nome da área 4D View Pro.

In _visible_, pass `True` to display the print lines, and `False` to hide them. `True` é passado por padrão.

In _sheet_, pass the index of the target sheet. Se nenhum índice for especificado, o comando se aplica à folha atual.

> A indexação começa em 0.

The position of a spreadsheet's print lines varies according to that spreadsheet's page breaks.

#### Exemplo

O código a seguir exibe linhas de impressão na segunda folha de um documento:

```4d
VP SET SHOW PRINT LINES("ViewProArea";True;1)

```

![set-show-print-lines](../../assets/en/ViewPro/vp-set-show-print-lines.png)

Com uma quebra de página:

![set-show-print-lines-with-page-break](../../assets/en/ViewPro/vp-set-show-print-lines-page-break.png)

#### Veja também

[4D Get show print lines](vp-get-show-print-lines.md)
