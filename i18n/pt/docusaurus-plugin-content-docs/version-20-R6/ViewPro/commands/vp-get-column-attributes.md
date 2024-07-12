---
id: vp-get-column-attributes
title: VP Get column attributes
---

<!-- REF #_method_.VP Get column attributes.Syntax -->

**VP Get column attributes** (  *rangeObj* : Object ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get column attributes.Params -->

| Parâmetro  | Tipo       |    | Descrição                          |                  |
| ---------- | ---------- | -- | ---------------------------------- | ---------------- |
| rangeObj   | Object     | -> | Objeto intervalo                   |                  |
| Resultados | Collection | <- | Coleção de propriedades da colunas | <!-- END REF --> |

#### Descrição

The `VP Get column attributes` command <!-- REF #_method_.VP Get column attributes.Summary -->returns a collection of properties for any column in the *rangeObj*<!-- END REF -->.

In *rangeObj*, pass an object containing a range of the columns whose attributes will be retrieved.

The returned collection contains any properties for the columns, whether or not they have been set by the [VP SET COLUMN ATTRIBUTES](vp-set-column-attributes.md) command.

#### Exemplo

O seguinte código:

```4d
C_OBJECT($range)
C_COLLECTION($attr)
 
$range:=VP Column("ViewProArea";1;2)
$attr:=VP Get column attributes($range)
```

... will return a collection of the attributes within the given range:

![](../../assets/en/ViewPro/cmd_vpGetColumnAttributes.PNG)

#### Veja também

[VP Get row attributes](vp-get-row-attributes.md)<br/>
[VP SET COLUMN ATTRIBUTES](vp-set-column-attributes.md)<br/>
[VP SET ROW ATTRIBUTES](vp-set-row-attributes.md)
