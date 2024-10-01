---
id: vp-get-sheet-count
title: VP Get sheet count
---

<!-- REF #_method_.VP Get sheet count.Syntax -->

**VP Get sheet count** ( *vpAreaName* : Text ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get sheet count.Params -->

| Parâmetro  | Tipo    |                             | Descrição                                  |                  |
| ---------- | ------- | --------------------------- | ------------------------------------------ | ---------------- |
| vpAreaName | Text    | ->                          | Nome de objeto formulário área 4D View Pro |                  |
| Resultado  | Integer | <- | Número de folhas                           | <!-- END REF --> |

#### Descrição

The `VP Get sheet count` command <!-- REF #_method_.VP Get sheet count.Summary -->returns the number of sheets in the document loaded in *vpAreaName*.<!-- END REF -->

Em *vpAreaName*, passe o nome da área 4D View Pro.

#### Exemplo

No documento seguinte:

![](../../assets/en/ViewPro/vp-sheet-3.png)

Obter a contagem de folhas e definir a folha atual como a última folha:

```4d
 $count:=VP Get sheet count("ViewProArea")
  //definir a folha atual para a última folha (a indexação começa em 0)
 VP SET CURRENT SHEET("ViewProArea";$count-1)
```

![](../../assets/en/ViewPro/vp-sheet-3-select.png)

#### Veja também

[VP Get sheet index](vp-get-sheet-index.md)<br/>
[VP SET SHEET COUNT](vp-set-sheet-count.md)
