---
id: vp-font-to-object
title: VP Font to object
---

<!-- REF #_method_.VP Font to object.Syntax -->

**VP Font to object** (  *font* : Text ) : Object<!-- END REF -->

<!-- REF #_method_.VP Font to object.Params -->

| Parâmetro  | Tipo   |                             | Descrição                               |
| ---------- | ------ | --------------------------- | --------------------------------------- |
| font       | Text   | ->                          | Cadeia de caracteres abreviada da fonte |
| Resultados | Object | <- | Objecto letra                           |

<!-- END REF -->

#### Descrição

The `VP Font to object` utility command <!-- REF #_method_.VP Font to object.Summary -->returns an object from a font shorthand string<!-- END REF -->. Esse objeto pode ser usado para definir ou obter configurações de propriedade de fonte por meio de notação de objeto.

In the *font* parameter, pass a font shorthand string to specify the different properties of a font (e.g., "12 pt Arial"). You can learn more about font shorthand strings [in this page](https://www.w3schools.com/cssref/pr_font_font.asp) for example.

O objeto retornado contém atributos de fonte definidos como propriedades. Para obter mais informações sobre as propriedades disponíveis, consulte o comando [VP Object to font](vp-object-to-font.md).

#### Exemplo 1

Este código:

```4d
$font:=VP Font to object("16pt arial")
```

devolverá o seguinte objeto $font:

```4d
{

family:arial
size:16pt
}
```

#### Exemplo 2

Veja um exemplo para [`VP Object to font`](vp-object-to-font.md).

#### Veja também

[4D View Pro Style Objects and Style Sheets](../configuring.md#style-objects--style-sheets)<br/>
[VP Object to font](vp-object-to-font.md)<br/>
[VP SET CELL STYLE](vp-set-cell-style.md)<br/>
[VP SET DEFAULT STYLE](vp-set-default-style.md)
