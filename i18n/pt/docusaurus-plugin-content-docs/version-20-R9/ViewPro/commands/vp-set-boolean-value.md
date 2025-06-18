---
id: vp-set-boolean-value
title: VP SET BOOLEAN VALUE
---

<!-- REF #_method_.VP SET BOOLEAN VALUE.Syntax -->

**VP SET BOOLEAN VALUE** ( *rangeObj* : Object  ; *boolValue* : Boolean) <!-- END REF -->

<!-- REF #_method_.VP SET BOOLEAN VALUE.Params -->

| Parâmetro | Tipo       |    | Descrição                |                  |
| --------- | ---------- | -- | ------------------------ | ---------------- |
| rangeObj  | Object     | -> | Objeto intervalo         |                  |
| boolValue | Parâmetros | -> | Valor booliano a definir | <!-- END REF --> |

## Descrição

O comando <!-- REF #_method_.VP SET VALUE.Summary -->atribui um valor booleano especificado a um intervalo de células designadas <!-- END REF -->.

Em *rangeObj*, passe um intervalo de células (criado, por exemplo, com [`VP Cell`](vp-cell.md) ou [`VP Column`](vp-column.md)) cujo valor você deseja especificar. Se *rangeObj* incluir várias células, o valor especificado será repetido em cada célula.

O parâmetro *boolValue* permite que você passe o valor booleano (**True** ou **False**) que será atribuído ao *rangeObj*.

## Exemplo

```4d
//Estabelece o valor da célula como False 
VP SET BOOLEAN VALUE(VP Cell("ViewProArea";3;2);False)
```

## Veja também

[VP SET VALUE](vp-set-value.md)