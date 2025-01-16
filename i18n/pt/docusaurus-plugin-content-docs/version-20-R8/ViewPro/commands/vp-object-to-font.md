---
id: vp-object-to-font
title: VP Object to font
---

<!-- REF #_method_.VP Object to font.Syntax -->

**VP Object to font** ( *fontObj* : Object ) : Text <!-- END REF -->

<!-- REF #_method_.VP Object to font.Params -->

| Parâmetro  | Tipo   |                             | Descrição       |                  |
| ---------- | ------ | --------------------------- | --------------- | ---------------- |
| fontObj    | Object | ->                          | Objecto letra   |                  |
| Resultados | Text   | <- | Fonte abreviada | <!-- END REF --> |

#### Descrição

O comando `VP Object to font` <!-- REF #_method_.VP Object to font.Summary -->retorna uma string abreviada de fonte de *fontObj*<!-- END REF -->.

Em *fontObj*, passe um objeto que contém as propriedades da fonte. As propriedades abaixo são compatíveis:

| Propriedade | Tipo | Descrição                                                                                                                                                                           | Valores possíveis                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Obrigatório |
| ----------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| family      | text | Especifica o tipo de letra.                                                                                                                                         | qualquer família de tipos de letra padrão ou genérica. Ex. Ex. Ex. "Arial", "Helvetica", "serif", "arial,sans-serif"                                                                                                                                                                                                                                                                                        | Sim         |
| size        | text | Defines the size of the font. The line-height can be added to the font-size: font-size/line-height: Ex: "15pt/20pt" | um número com uma das seguintes unidades: <li>"em", "ex", "%", "px", "cm", "mm", "in", "pt", "pc", "ch", "rem", "vh", "vw", "vmin", "vmax "</li>ou uma das seguintes::<li>`vk font size large`</li><li>`vk font size larger`</li><li>`vk font size x large`</li><li>`vk font size xx large`</li><li>`vk font size small`</li><li>`vk font size smaller`</li><li>`vk font size x small`</li><li>`vk font size xx small`</li> | Sim         |
| style       | text | O estilo do tipo de letra.                                                                                                                                          | <li>`vk font style italic`</li><li>`vk font style oblique`</li>                                                                                                                                                                                                                                                                                                                                                                                                             | Não         |
| variant     | text | Especifica o tipo de letra em pequenas maiúsculas.                                                                                                                  | <li>`vk font variant small caps`</li>                                                                                                                                                                                                                                                                                                                                                                                                                                       | Não         |
| weight      | text | Define a espessura do tipo de letra.                                                                                                                                | <li>`vk font weight 100`</li><li>`vk font weight 200`</li><li>`vk font weight 300`</li><li>`vk font weight 400`</li><li>`vk font weight 500`</li><li>`vk font weight 600`</li><li>`vk font weight 700`</li><li>`vk font weight 800`</li><li>`vk font weight 900`</li><li>`vk font weight bold`</li><li>`vk font weight bolder`</li><li>`vk font weight lighter`</li>                                                                                                        | Não         |

Esse objeto pode ser criado com o comando [VP Font to object](vp-font-to-object.md).

A cadeia de caracteres abreviada retornada pode ser atribuída à propriedade "font" de uma célula com o comando [VP SET CELL STYLE](vp-set-cell-style.md), por exemplo.

#### Exemplo

```4d
$cellStyle:=VP Get cell style($range)
 
$font:=VP Font to object($cellStyle.font)
$font.style:=vk font style oblique
$font.variant:=vk font variant small caps
$font.weight:=vk font weight bolder
 
$cellStyle.font:=VP Object to font($font)
//$cellStyle.font contém "bolder oblique small-caps 16pt arial"
```

#### Veja também

[4D View Pro Style Objects and Style Sheets](../configuring.md#style-objects--style-sheets)<br/>
[VP Font to object](vp-font-to-object.md)<br/>
[VP SET CELL STYLE](vp-set-cell-style.md)<br/>
[VP SET DEFAULT STYLE](vp-set-default-style.md)
