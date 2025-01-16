---
id: vp-get-value
title: VP Get value
---

<!-- REF #_method_.VP Get value.Syntax -->

**VP Get value** ( *rangeObj* : Object ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get value.Params -->

| Parâmetro  | Tipo   |                             | Descrição                            |                  |
| ---------- | ------ | --------------------------- | ------------------------------------ | ---------------- |
| rangeObj   | Object | ->                          | Objeto intervalo                     |                  |
| Resultados | Object | <- | Objeto que contém um valor de célula | <!-- END REF --> |

#### Descrição

The `VP Get value` command <!-- REF #_method_.VP Get value.Summary -->retrieves a cell value from a designated cell range<!-- END REF -->.

Em *rangeObj*, passe um intervalo cujo valor você deseja recuperar.

#### Objeto devolvido

The object returned will contain the `value` property, and, in case of a js date value, a `time` property:

| Propriedade | Tipo                                       | Descrição                                                                  |
| ----------- | ------------------------------------------ | -------------------------------------------------------------------------- |
| value       | Integer, Real, Boolean, Text, Date, Object | Valor de *rangeObj* (exceto - tempo)                    |
| time        | Real                                       | Valor hora (em segundos) se o valor for do tipo data js |

Se o objetivo retornado incluir uma data ou hora, é tratado como uma datetime e completado como abaixo:

- valor hora - a porção da data se completa como dezembro, 30, 1899 em formato dd/MM/yyyy
- valor data - a parte da hora se completa como meia noite no formato HH:mm:ss (00:00:00)

If *rangeObj* contains multiple cells or multiple ranges, the value of the first cell is returned. O comando retorna um objeto null se a célula estiver vazia.

#### Exemplo

```4d
$cell:=VP Cell("ViewProArea";5;2)
$value:=VP Get value($cell)
If(Value type($value.value)=Is text)
    VP SET VALUE($cell;New object("value";Uppercase($value.value)))
End if
```

#### Veja também

[VP Get values](vp-get-values.md)<br/>
[VP SET VALUE](vp-set-value.md)<br/>
[VP SET VALUES](vp-set-values.md)
