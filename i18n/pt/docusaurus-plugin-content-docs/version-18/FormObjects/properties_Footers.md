---
id: propertiesFooters
title: Rodapés
---

## Exibir rodapés

This property is used to display or hide [list box column footers](listbox_overview.md#list-box-footers). There is one footer per column; each footer is configured separately.

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis |
| ----------- | ------------- | ----------------- |
| showFooters | boolean       | true, false       |

#### Objectos suportados

[List Box](listbox_overview.md)

---

## Alto

This property is used to set the row height for a list box footer in **pixels** or **text lines** (when displayed). Both types of units can be used in the same list box:

* *Pixel* - the height value is applied directly to the row concerned, regardless of the font size contained in the columns. Se um tipo de letra for demasiado grande, o texto é truncado. Moreover, pictures are truncated or resized according to their format.

* *Line* - the height is calculated while taking into account the font size of the row concerned.
  * If more than one size is set, 4D uses the biggest one. For example, if a row contains "Verdana 18", "Geneva 12" and "Arial 9", 4D uses "Verdana 18" to determine the row height (for instance, 25 pixels). This height is then multiplied by the number of rows defined.
  * This calculation does not take into account the size of pictures nor any styles applied to the fonts.
  * In macOS, the row height may be incorrect if the user enters characters that are not available in the selected font. When this occurs, a substitute font is used, which may cause variations in size.
> > > This property can also be set dynamically using the [LISTBOX SET FOOTERS HEIGHT](https://doc.4d.com/4Dv17R6/4D/17-R6/List-box-footer-specific-properties.300-4354808.en.html) command.

Conversion of units: When you switch from one unit to the other, 4D converts them automatically and displays the result in the Property List. For example, if the font used is "Lucida grande 24", a height of "1 line" is converted to "30 pixels" and a height of "60 pixels" is converted to "2 lines".

Note that converting back and forth may lead to an end result that is different from the starting value due to the automatic calculations made by 4D. Este facto é ilustrado nas sequências seguintes:

*(font Arial 18)*: 52 pixels -> 2 lines -> 40 pixels *(font Arial 12)*: 3 pixels -> 0.4 line rounded up to 1 line -> 19 pixels

#### JSON Exemplo

```
 "List Box": {
  "type": "listbox",
  "showFooters": true,
  "footerHeight": "44px",  
  ...
  }
```

#### Gramática JSON

| Nome         | Tipo de dados | Valores possíveis                 |
| ------------ | ------------- | --------------------------------- |
| footerHeight | string        | décimales positives +px &#124; em |

#### Objectos suportados

[List Box](listbox_overview.md)

#### Veja também

[Headers](properties_Headers.md) - [List box footers](listbox_overview.md#list-box-footers)
