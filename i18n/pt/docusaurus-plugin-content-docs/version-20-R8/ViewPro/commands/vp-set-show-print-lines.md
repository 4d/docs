---
id: vp-set-show-print-lines
title: VP SET SHOW PRINT LINES
---

<!-- REF #_method_.VP SET SHOW PRINT LINES.Syntax -->

**VP SET SHOW PRINT LINES** ( *vpAreaName* : Text {; visible : Boolean}{; *sheet* : Integer} )<!-- END REF -->

<!-- REF #_method_.VP SET SHOW PRINT LINES.Params -->

| Parâmetro  | Tipo       |    | Descrição                                                                              |                  |
| ---------- | ---------- | -- | -------------------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text       | -> | Nome de objeto formulário área 4D View Pro                                             |                  |
| visible    | Parâmetros | -> | Linhas de impressão apresentadas se True (padrão), ocultas se False |                  |
| sheet      | Integer    | -> | Índice da folha (folha atual se omitida)                            | <!-- END REF --> |

#### Descrição

The `VP SET SHOW PRINT LINES` command <!-- REF #_method_.VP SET SHOW PRINT LINES.Summary --> sets whether to display print preview lines in a spreadsheet.<!-- END REF -->.

Em *vpAreaName*, passe o nome da área 4D View Pro.

Em *visible*, passe `True` para exibir as linhas de impressão e `False` para ocultá-las. `True` é passado por padrão.

Em *sheet*, passe o índice da folha de destino. Se nenhum índice for especificado, o comando se aplica à folha atual.

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
