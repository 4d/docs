---
id: vp-get-column-attributes
title: VP Get column attributes
---

<!-- REF #_method_.VP Get column attributes.Syntax -->

**VP Get column attributes** (  *rangeObj* : Object ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get column attributes.Params -->

| Parâmetro  | Tipo       |                             | Descrição                          |                  |
| ---------- | ---------- | --------------------------- | ---------------------------------- | ---------------- |
| rangeObj   | Object     | ->                          | Objeto intervalo                   |                  |
| Resultados | Collection | <- | Coleção de propriedades da colunas | <!-- END REF --> |

#### Descrição

O comando `VP Get column attributes` <!-- REF #_method_.VP Get column attributes.Summary -->retorna uma coleção de propriedades para qualquer coluna no *rangeObj*<!-- END REF -->.

Em *rangeObj*, passe um objeto que contenha um intervalo das colunas cujos atributos serão recuperados.

A coleção retornada contém todas as propriedades das colunas, independentemente de terem sido definidas ou não pelo comando [VP SET COLUMN ATTRIBUTES](vp-set-column-attributes.md).

#### Exemplo

O seguinte código:

```4d
C_OBJECT($range)
C_COLLECTION($attr)
 
$range:=VP Column("ViewProArea";1;2)
$attr:=VP Get column attributes($range)
```

... devolverá uma coleção dos atributos no intervalo dado:

![](../../assets/en/ViewPro/cmd_vpGetColumnAttributes.PNG)

#### Veja também

[VP Get row attributes](vp-get-row-attributes.md)<br/>
[VP SET COLUMN ATTRIBUTES](vp-set-column-attributes.md)<br/>
[VP SET ROW ATTRIBUTES](vp-set-row-attributes.md)
