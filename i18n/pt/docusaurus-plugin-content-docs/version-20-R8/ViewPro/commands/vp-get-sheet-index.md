---
id: vp-get-sheet-index
title: VP Get sheet index
---

<!-- REF #_method_.VP Get sheet index.Syntax -->

**VP Get sheet index** ( *vpAreaName* : Text ; *name* : Text ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get sheet index.Params -->

| Parâmetro  | Tipo    |                             | Descrição                                  |                  |
| ---------- | ------- | --------------------------- | ------------------------------------------ | ---------------- |
| vpAreaName | Text    | ->                          | Nome de objeto formulário área 4D View Pro |                  |
| name       | Text    | ->                          | Nome da folha                              |                  |
| Resultado  | Integer | <- | Índice da folha                            | <!-- END REF --> |

#### Descrição

The `VP Get sheet index` command <!-- REF #_method_.VP Get sheet index.Summary -->returns the index of a sheet based on its name in *vpAreaName*.<!-- END REF -->

Em *vpAreaName*, passe o nome da área 4D View Pro.

Em *name*, passe o nome da planilha cujo índice será retornado. If no sheet named *name* is found in the document, the method returns -1.

> A indexação começa em 0.

#### Exemplo

No documento seguinte:

![](../../assets/en/ViewPro/vp-sheet-index-name.png)

Obter o índice da folha denominada "Total first quarter":

```4d
$index:=VP Get sheet index("ViewProArea"; "Total do primeiro trimestre") //retorna 2
```

#### Veja também

[VP Get sheet count](vp-get-sheet-count.md)<br/>
[VP Get sheet name](vp-get-sheet-name.md)
