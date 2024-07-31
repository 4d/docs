---
id: vp-delete-rows
title: VP DELETE ROWS
---

<!-- REF #_method_.VP DELETE ROWS.Syntax -->

**VP DELETE ROWS** ( *rangeObj* : Object )<!-- END REF -->

<!-- REF #_method_.VP DELETE ROWS.Params -->

| Parâmetro | Tipo   |    | Descrição        |                  |
| --------- | ------ | -- | ---------------- | ---------------- |
| rangeObj  | Object | -> | Objeto intervalo | <!-- END REF --> |

#### Descrição

O comando `VP DELETE ROWS` <!-- REF #_method_.VP DELETE ROWS.Summary -->remove as linhas do *rangeObj*<!-- END REF -->.

Em *rangeObj*, passe um objeto que contenha um intervalo de linhas a remover. Se o intervalo passado contiver:

- tanto colunas como linhas, apenas as linhas são removidas.
- apenas colunas, o comando não faz nada.

> \> > Rows are deleted from bottom to top.

#### Exemplo

Para eliminar as linhas selecionadas pelo usuário (na imagem abaixo, as linhas 1, 2 e 3):

![](../../assets/en/ViewPro/cmd_vpDeleteRows.PNG)

utilizar o seguinte código:

```4d

 VP DELETE ROWS(VP Get selection("ViewProArea"))
```

#### Veja também

[VP DELETE ROWS](vp-delete-columns.md)<br/>
[VP INSERT COLUMNS](vp-insert-columns.md)<br/>
[VP INSERT ROWS](vp-insert-rows.md)
