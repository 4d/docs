---
id: vp-get-row-attributes
title: VP Get row attributes
---

<!-- REF #_method_.VP Get row attributes.Syntax -->

**VP Get row attributes** ( rangeObj : Object ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get row attributes.Params -->

| Parâmetro  | Tipo       |                             | Descrição                        |                  |
| ---------- | ---------- | --------------------------- | -------------------------------- | ---------------- |
| rangeObj   | Object     | ->                          | Objeto intervalo                 |                  |
| Resultados | Collection | <- | Coleção de propriedades de linha | <!-- END REF --> |

## Descrição

O comando `VP Get row attributes` <!-- REF #_method_.VP Get row attributes.Summary --> retorna uma coleção de propriedades para qualquer linha no *rangeObj*<!-- END REF -->.

Em *rangeObj*, passe um objeto que contenha um intervalo de linhas cujos atributos serão recuperados.

The returned collection contains any properties for the rows, whether or not they have been set by the [VP SET ROW ATTRIBUTES](vp-set-row-attributes.md) method.

## Exemplo

O código seguinte retorna uma coleção de atributos no intervalo fornecido:

```4d
var $range : Object
var $attr : Collection
 
$range:=VP Column("ViewProArea";1;2)
$attr:=VP Get row attributes($range)
```

![](../../assets/en/ViewPro/cmd_vpGetRowAttributes.PNG)

## Veja também

[VP Get column attributes](vp-get-column-attributes.md)<br/>
[VP SET COLUMN ATTRIBUTES](vp-set-column-attributes.md)<br/>
[VP SET ROW ATTRIBUTES](vp-set-row-attributes.md)
