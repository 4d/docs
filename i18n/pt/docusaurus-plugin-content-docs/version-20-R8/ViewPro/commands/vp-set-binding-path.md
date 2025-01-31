---
id: vp-set-binding-path
title: VP SET BINDING PATH
---

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R5   | Adicionado |

</details>

<!-- REF #_method_.VP SET BINDING PATH.Syntax -->

**VP SET BINDING PATH** ( *rangeObj* : Object  ; *dataContextAttribute*  : Text) <!-- END REF -->

<!-- REF #_method_.VP SET BINDING PATH.Params -->

| Parâmetro            | Tipo   |    | Descrição                                |                  |
| -------------------- | ------ | -- | ---------------------------------------- | ---------------- |
| rangeObj             | Object | -> | Objeto intervalo                         |                  |
| dataContextAttribute | Text   | -> | Nome do atributo a associar a *rangeObj* | <!-- END REF --> |

#### Descrição

The `VP SET BINDING PATH` command <!-- REF #_method_.VP SET BINDING PATH.Summary -->binds an attribute from a sheet's data context to *rangeObj*<!-- END REF -->. After you set a data context using the [SET DATA CONTEXT](vp-set-data-context.md) method. When loaded, if the data context contains the attribute, the value of *dataContextAttribute* is automatically displayed in the cells in *rangeObj*.

In *rangeObj*, pass an object that is either a cell range or a combined range of cells.

- If *rangeObj* is a range with several cells, the command binds the attribute to the first cell of the range.
- If *rangeObj* contains several ranges of cells, the command binds the attribute to the first cell of each range.

In *dataContextAttribute*, pass the name of the attribute to bind to *rangeObj*. If *dataContextAttribute* is an empty string, the function removes the current binding.

> Os atributos do tipo coleção não são suportados. Quando você passar o nome de uma coleção, o comando não faz nada.

#### Exemplo

Defina um contexto de dados e vincule o atributo `firstName` e `lastName` às células:

```4d
var $p : Object

$p:=New object
$p.firstName:="Freehafer"
$p.lastName:="Nancy" VP SET DATA CONTEXT("ViewProArea"; $p) VP SET BINDING PATH(VP Cell("ViewProArea"; 0; 0); "firstName")
VP SET BINDING PATH(VP Cell("ViewProArea"; 1; 0); "lastName")
```

![](../../assets/en/ViewPro/vp-set-data-context-bind.png)

#### Veja também

[VP Get binding path](vp-get-binding-path.md)<br/>
[VP Get data context](vp-get-data-context.md)<br/>
[VP SET DATA CONTEXT](vp-get-data-context.md)
