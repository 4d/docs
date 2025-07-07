---
id: vp-set-row-attributes
title: VP SET ROW ATTRIBUTES
---

<!-- REF #_method_.VP SET ROW ATTRIBUTES.Syntax -->

**VP SET ROW ATTRIBUTES** ( *rangeObj* : Object ; *propertyObj* : Object  ) <!-- END REF -->

<!-- REF #_method_.VP SET ROW ATTRIBUTES.Params -->

| Parâmetro   | Tipo   |    | Descrição                                   |                  |
| ----------- | ------ | -- | ------------------------------------------- | ---------------- |
| rangeObj    | Object | -> | Intervalo de linhas                         |                  |
| propertyObj | Object | -> | Objeto que contém as propriedades da linhas | <!-- END REF --> |

## Descrição

O comando `VP SET ROW ATTRIBUTES` <!-- REF #_method_.VP SET ATTRIBUTES. Resumo -->aplica os atributos definidos na *propriedadeObj* às linhas no *intervaloObj*<!-- END REF -->.

Em *rangeObj*, passe um objeto que contenha um intervalo. Se o intervalo contiver colunas e linhas, os atributos são aplicados apenas às linhas.

O parâmetro *propertyObj* permite-lhe especificar os atributos a aplicar às linhas no\* rangeObj\*. Estes atributos são:

| Propriedade | Tipo    | Descrição                                                                                |
| ----------- | ------- | ---------------------------------------------------------------------------------------- |
| height      | number  | Altura da linha expressa em píxeis                                                       |
| pageBreak   | boolean | True para inserir uma quebra de página antes da primeira linha do intervalo, senão false |
| visible     | boolean | True se a linha for visível, senão false                                                 |
| resizable   | boolean | True se a linha puder ser redimensionada, senão false                                    |
| header      | text    | Texto do cabeçalho da linha                                                              |

## Exemplo

Pretende-se alterar o tamanho da segunda linha e definir o cabeçalho:

```4d
var $row; $properties : Object
 
$row:=VP Row("ViewProArea";1)
$properties:=New object("height";75;"header";"June")
 
VP SET ROW ATTRIBUTES($row;$properties)
```

![](../../assets/en/ViewPro/cmd_vpSetRowAttributes.PNG)

## Veja também

[VP Get row attributes](vp-get-row-attributes.md)<br/>
[VP get column attributes](vp-get-column-attributes.md)<br/>
[VP SET ROW ATTRIBUTES](vp-set-row-attributes.md)
