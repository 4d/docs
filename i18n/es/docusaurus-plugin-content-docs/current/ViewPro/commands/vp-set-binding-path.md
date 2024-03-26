---
id: vp-set-binding-path
title: VP SET BINDING PATH
---

<details><summary>Historia</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R5  | Añadidos       |

</details>

<!-- REF #_method_.VP SET BINDING PATH.Syntax -->

**VP SET BINDING PATH** ( _rangeObj_ : Object  ; _dataContextAttribute_  : Text) <!-- END REF -->

<!-- REF #_method_.VP SET BINDING PATH.Params -->

| Parámetros           | Tipo   |    | Descripción                                 |                  |
| -------------------- | ------ | -- | ------------------------------------------- | ---------------- |
| rangeObj             | Object | -> | Objeto rango                                |                  |
| dataContextAttribute | Text   | -> | Nombre del atributo a vincular a _rangeObj_ | <!-- END REF --> |

#### Descripción

The `VP SET BINDING PATH` command <!-- REF #_method_.VP SET BINDING PATH.Summary -->binds an attribute from a sheet's data context to _rangeObj_<!-- END REF -->. After you set a data context using the [SET DATA CONTEXT](vp-set-data-context.md) method. When loaded, if the data context contains the attribute, the value of _dataContextAttribute_ is automatically displayed in the cells in _rangeObj_.

En _rangeObj_, pase un objeto que es un rango de celdas o un rango combinado de celdas.

- If _rangeObj_ is a range with several cells, the command binds the attribute to the first cell of the range.
- If _rangeObj_ contains several ranges of cells, the command binds the attribute to the first cell of each range.

In _dataContextAttribute_, pass the name of the attribute to bind to _rangeObj_. If _dataContextAttribute_ is an empty string, the function removes the current binding.

> Los atributos de tipo colección no están soportados. Cuando se pasa el nombre de un atributo de la colección, el comando no hace nada.

#### Ejemplo

Set a data context and bind the `firstName` and `lastName` attribute to cells:

```4d
var $p : Object

$p:=New object
$p.firstName:="Freehafer"
$p.lastName:="Nancy"

VP SET DATA CONTEXT("ViewProArea"; $p)

VP SET BINDING PATH(VP Cell("ViewProArea"; 0; 0); "firstName")
VP SET BINDING PATH(VP Cell("ViewProArea"; 1; 0); "lastName")
```

![](../../assets/en/ViewPro/vp-set-data-context-bind.png)

#### Ver también

[VP Get binding path](vp-get-binding-path.md)<br/>
[VP Get data context](vp-get-data-context.md)<br/>
[VP SET DATA CONTEXT](vp-get-data-context.md)
