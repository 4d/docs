---
id: vp-get-workbook-options
title: VP Get workbook options
---

###

<!-- REF #_method_.VP Get workbook options.Syntax -->

**VP Get workbook options** ( *vpAreaName* : Text ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get workbook options.Params -->

| Parâmetro  | Tipo   |                             | Descrição                                        |                  |
| ---------- | ------ | --------------------------- | ------------------------------------------------ | ---------------- |
| vpAreaName | Text   | ->                          | Nome de objeto formulário área 4D View Pro       |                  |
| Resultados | Object | <- | Objeto que contém as opções do livro de trabalho | <!-- END REF --> |

#### Descrição

`VP Get workbook options` <!-- REF #_method_.Get workbook options.Summary -->
returns an object containing all the workbook options in *vpAreaName*<!-- END REF -->

Em *vpAreaName*, passe o nome da área 4D View Pro.

O objeto devolvido contém todas as opções de workbook (padrão e modificadas) no workbook.

A lista de opções de pasta de trabalho é referenciada na descrição de [`VP SET WORKBOOK OPTIONS`](vp-set-workbook-options.md).

#### Exemplo

```4d
var $workbookOptions : Object

$workbookOptions:=VP Get workbook options("ViewProArea")
```

#### Veja também

[VP SET WORKBOOK OPTIONS](vp-set-workbook-options.md)
