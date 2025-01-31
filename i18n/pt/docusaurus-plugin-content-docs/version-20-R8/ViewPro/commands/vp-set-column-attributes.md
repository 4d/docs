---
id: vp-set-column-attributes
title: VP SET COLUMN ATTRIBUTES
---

<!-- REF #_method_.VP SET COLUMN ATTRIBUTES.Syntax -->

**VP SET COLUMN ATTRIBUTES** ( *rangeObj* : Object  ; *propertyObj* : Object) <!-- END REF -->

<!-- REF #_method_.VP SET COLUMN ATTRIBUTES.Params -->

| Parâmetro   | Tipo   |    | Descrição                                   |                  |
| ----------- | ------ | -- | ------------------------------------------- | ---------------- |
| rangeObj    | Object | -> | Objeto intervalo                            |                  |
| propertyObj | Object | -> | Objeto que contém as propriedades da coluna | <!-- END REF --> |

#### Descrição

The `VP SET COLUMN ATTRIBUTES` command <!-- REF #_method_.VP SET COLUMN ATTRIBUTES.Summary --> applies the attributes defined in the *propertyObj* to the columns in the *rangeObj*<!-- END REF -->.

Em *rangeObj*, passe um objeto que contenha um intervalo. If the range contains both columns and rows, attributes are applied only to the columns.

The *propertyObj* parameter lets you specify the attributes to apply to the columns in the *rangeObj*. Estes atributos são:

| Propriedade | Tipo    | Descrição                                                                                 |
| ----------- | ------- | ----------------------------------------------------------------------------------------- |
| width       | number  | Largura da coluna expressa em píxeis                                                      |
| pageBreak   | boolean | True para inserir uma quebra de página antes da primeira coluna do intervalo, senão false |
| visible     | boolean | True se a coluna for visível, senão false                                                 |
| resizable   | boolean | True se a coluna puder ser redimensionada, senão false                                    |
| header      | text    | Texto do cabeçalho da coluna                                                              |

#### Exemplo

Para alterar o tamanho da segunda coluna e definir o cabeçalho, escreve-se:

```4d
C_OBJECT($column;$properties)
 
$column:=VP Column("ViewProArea";1) //column B
$properties:=New object("width";100;"header";"Hello World")
 
VP SET COLUMN ATTRIBUTES($column;$properties)
```

![](../../assets/en/ViewPro/cmd_vpSetColumnAttributes.PNG)

#### Veja também

[VP Column](vp-column.md)<br/>
[VP Get column attributes](vp-get-column-attributes.md)<br/>
[VP Get row attributes](vp-get-row-attributes.md)<br/>
[VP SET ROW ATTRIBUTES](vp-set-row-attributes.md)
