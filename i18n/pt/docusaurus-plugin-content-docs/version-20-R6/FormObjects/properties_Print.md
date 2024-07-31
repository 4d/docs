---
id: propertiesPrint
title: Imprimir
---

## Impressão quadro

This property handles the print mode for objects whose size can vary from one record to another depending on their contents. Estes objetos podem ser definidos para imprimir com uma moldura fixa ou variável. Fixed frame objects print within the confines of the object as it was created on the form. Variable frame objects expand during printing to include the entire contents of the object. Note that the width of objects printed as a variable size is not affected by this property; only the height varies automatically based on the contents of the object.

You cannot place more than one variable frame object side-by-side on a form. You can place non-variable frame objects on either side of an object that will be printed with a variable size provided that the variable frame object is at least one line longer than the object beside it and that all objects are aligned on the top. If this condition is not respected, the contents of the other fields will be repeated for every horizontal slice of the variable frame object.

> Los comandos `objeto Print` y `Print form` no soportan esta propiedad.

As opções de impressão são:

- La opción **Variable** / **Imprimir marco variable** marcada: 4D amplía o reduce el área del objeto del formulario para imprimir todos los subregistros.

- **Opción fija (truncamiento)** / **Imprimir marco variable** no seleccionada: 4D sólo imprime el contenido que aparece en el área del objeto. O formulário só é impresso uma vez e os conteúdos não impressos são ignorados.

- **Fijo (Múltiples Registros)** (sólo subformularios): se mantiene el tamaño inicial del área del subformulario pero 4D imprime el formulario varias veces para imprimir todos los registros.

> Esta propiedad puede definirse por programación utilizando el comando `OBJECT SET PRINT VARIABLE FRAME`.

#### Gramática JSON

|    Nome    | Tipo de dados | Valores possíveis                                                              |
| :--------: | :-----------: | ------------------------------------------------------------------------------ |
| printFrame |     string    | "fixed", "variable", (apenas subformulário) "fixedMultiple" |

#### Objectos suportados

[Entrada](input_overview.md) - [Subformularios](subform_overview.md) (sólo subformularios lista) - [Áreas 4D Write Pro](writeProArea_overview.md)
