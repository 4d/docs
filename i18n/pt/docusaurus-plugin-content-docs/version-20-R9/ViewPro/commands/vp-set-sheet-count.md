---
id: vp-set-sheet-count
title: VP SET SHEET COUNT
---

<!-- REF #_method_.VP SET SHEET COUNT.Syntax -->

**VP SET SHEET COUNT** ( *vpAreaName* : Text ; *number* : Integer  ) <!-- END REF -->

<!-- REF #_method_.VP SET SHEET COUNT.Params -->

| Parâmetro  | Tipo    |    | Descrição                                  |                  |
| ---------- | ------- | -- | ------------------------------------------ | ---------------- |
| vpAreaName | Text    | -> | Nome de objeto formulário área 4D View Pro |                  |
| number     | Integer | -> | Número de folhas                           | <!-- END REF --> |

## Descrição

O comando `VP SET SHEET COUNT` <!-- REF #_method_.VP SET SHEET COUNT.Summary -->define o número de folhas em *vpAreaName*<!-- END REF -->.

Em `number`, passe um número correspondente à quantidade de folhas que o documento conterá depois que o comando for executado.

> **Aviso**: O comando excluirá folhas se a quantidade anterior de folhas em seu documento for superior ao número passado. Por exemplo, se houver 5 folhas no seu documento e você definir a contagem de planilha para 3, o comando excluirá as folhas número 4 e 5.

## Exemplo

O documento tem atualmente uma folha:

![](../../assets/en/ViewPro/vp-sheet-1.png)

Para definir o número de folhas como 3:

```4d
VP SET SHEET COUNT("ViewProArea";3)
```

![](../../assets/en/ViewPro/vp-sheet-3.png)

## Veja também

[VP Get sheet count](vp-get-sheet-count.md)