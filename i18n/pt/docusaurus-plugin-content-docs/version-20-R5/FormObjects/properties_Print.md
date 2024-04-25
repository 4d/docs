---
id: propertiesPrint
title: Imprimir
---

## Impressão quadro

This property handles the print mode for objects whose size can vary from one record to another depending on their contents. Estes objetos podem ser definidos para imprimir com uma moldura fixa ou variável. Fixed frame objects print within the confines of the object as it was created on the form. Variable frame objects expand during printing to include the entire contents of the object. Note that the width of objects printed as a variable size is not affected by this property; only the height varies automatically based on the contents of the object.

You cannot place more than one variable frame object side-by-side on a form. You can place non-variable frame objects on either side of an object that will be printed with a variable size provided that the variable frame object is at least one line longer than the object beside it and that all objects are aligned on the top. If this condition is not respected, the contents of the other fields will be repeated for every horizontal slice of the variable frame object.

> The `Print object` and `Print form` commands do not support this property.

As opções de impressão são:

- **Variable** option / **Print Variable Frame** checked: 4D enlarges or reduces the form object area in order to print all the subrecords.

- **Fixed (Truncation)** option / **Print Variable Frame** unchecked: 4D only prints the contents that appear in the object area. O formulário só é impresso uma vez e os conteúdos não impressos são ignorados.

- **Fixed (Multiple Records)** (subforms only): the initial size of the subform area is kept but 4D prints the form several times in order to print all the records.

> This property can be set by programming using the `OBJECT SET PRINT VARIABLE FRAME` command.

#### Gramática JSON

|    Nome    | Tipo de dados | Valores possíveis                                                              |
| :--------: | :-----------: | ------------------------------------------------------------------------------ |
| printFrame |     string    | "fixed", "variable", (apenas subformulário) "fixedMultiple" |

#### Objectos suportados

[Input](input_overview.md) - [Subforms](subform_overview.md) (list subforms only) - [4D Write Pro areas](writeProArea_overview.md)
