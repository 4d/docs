---
id: vp-delete-columns
title: VP DELETE COLUMNS
---

<!-- REF #_method_.VP DELETE COLUMNS.Syntax -->

**VP DELETE COLUMNS** ( *rangeObj* : Object )<!-- END REF -->

<!-- REF #_method_.VP DELETE COLUMNS.Params -->

| Parâmetro | Tipo   |    | Descrição        |                  |
| --------- | ------ | -- | ---------------- | ---------------- |
| rangeObj  | Object | -> | Objeto intervalo | <!-- END REF --> |

#### Descrição

O comando `VP DELETE COLUMNS` <!-- REF #_method_.VP DELETE COLUMNS.Summary -->remove as colunas do *rangeObj*<!-- END REF -->.

Em rangeObj, passe um objeto que contenha um intervalo de colunas a remover. Se o intervalo passado contiver:

- tanto colunas como linhas, apenas as colunas são removidas.
- apenas linhas, o comando não faz nada.

> \> > Columns are deleted from right to left.

#### Exemplo

Para eliminar as colunas seleccionadas pelo utilizador (colunas B, C e D da imagem abaixo):

![](../../assets/en/ViewPro/cmd_vpDeleteColumns.PNG)

utilizar o seguinte código:

```4d
VP DELETE COLUMNS(VP Get selection("ViewProArea"))
```

#### Veja também

[VP DELETE ROWS](vp-delete-rows.md)<br/>
[VP INSERT COLUMNS](vp-insert-columns.md)<br/>
[VP INSERT ROWS](vp-insert-rows.md)
