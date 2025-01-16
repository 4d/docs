---
id: vp-set-sheet-name
title: VP SET SHEET NAME
---

<!-- REF #_method_.VP SET SHEET NAME.Syntax -->

**VP SET SHEET NAME** ( *vpAreaName* : Text ; *name* : Text {; *sheet*: Integer} )<!-- END REF -->

<!-- REF #_method_.VP SET SHEET NAME.Params -->

| Parâmetro  | Tipo    |    | Descrição                                  |                  |
| ---------- | ------- | -- | ------------------------------------------ | ---------------- |
| vpAreaName | Text    | -> | Nome de objeto formulário área 4D View Pro |                  |
| name       | Text    | -> | Novo nome para a folha                     |                  |
| sheet      | Integer | -> | Índice da folha a ser renomeada            | <!-- END REF --> |

#### Descrição

O comando `VP SET SHEET NAME` <!-- REF #_method_.VP SET SHEET NAME.Summary -->renomeia uma planilha no documento carregado em *vpAreaName*<!-- END REF -->.

Em *vpAreaName*, passe o nome da área 4D View Pro.

Em *name*, introduza um novo nome para a folha.

Em *sheet*, passe o índice da folha a ser renomeada.

> A indexação começa em 0.

Se nenhum *sheet* for passado, o comando renomeia a planilha atual.

O novo nome não pode conter os seguintes caracteres: `*, :, [, ], ?,\,/`

O comando não faz nada se:

- o novo nome contém caracteres proibidos
- o valor do novo nome está em branco
- o novo nome já existe
- o índice *sheet* passado não existe

#### Exemplo

Defina o nome da terceira folha como "Total first quarter":

```4d
VP SET SHEET NAME("ViewProArea";"Total first quarter";2)
```

![](../../assets/en/ViewPro/vp-sheet-index-name.png)
