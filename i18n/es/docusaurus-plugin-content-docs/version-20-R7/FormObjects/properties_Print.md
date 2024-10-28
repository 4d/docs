---
id: propertiesPrint
title: Imprimir
---

## Impresión marco

Esta propiedad gestiona el modo de impresión de los objetos cuyo tamaño puede variar de un registro a otro en función de su contenido. Estos objetos pueden configurarse para imprimirse con un marco fijo o variable. Los objetos de marco fijo se imprimen dentro de los límites del objeto tal y como fue creado en el formulario. Los objetos de marco variable se expanden durante la impresión para incluir todo el contenido del objeto. Tenga en cuenta que el ancho de los objetos impresos como tamaño variable no se ve afectado por esta propiedad; sólo la altura varía automáticamente en función del contenido del objeto.

No se puede colocar más de un objeto de marco variable uno al lado del otro en un formulario. Puede colocar objetos de marco no variable a ambos lados de un objeto que se imprimirá con un tamaño variable siempre que el objeto de marco variable sea al menos una línea más largo que el objeto de al lado y que todos los objetos estén alineados en la parte superior. Si no se respeta esta condición, el contenido de los otros campos se repetirá para cada corte horizontal del objeto marco variable.

> Los comandos `objeto Print` y `Print form` no soportan esta propiedad.

Las opciones de impresión son:

- La opción **Variable** / **Imprimir marco variable** marcada: 4D amplía o reduce el área del objeto del formulario para imprimir todos los subregistros.

- **Opción fija (truncamiento)** / **Imprimir marco variable** no seleccionada: 4D sólo imprime el contenido que aparece en el área del objeto. El formulario sólo se imprime una vez y el contenido no impreso se ignora.

- **Fijo (Múltiples Registros)** (sólo subformularios): se mantiene el tamaño inicial del área del subformulario pero 4D imprime el formulario varias veces para imprimir todos los registros.

> Esta propiedad puede definirse por programación utilizando el comando `OBJECT SET PRINT VARIABLE FRAME`.

#### Gramática JSON

|   Nombre   | Tipos de datos | Valores posibles                                                                   |
| :--------: | :------------: | ---------------------------------------------------------------------------------- |
| printFrame |     string     | "fixed", "variable", (subformulario únicamente) "fixedMultiple" |

#### Objetos soportados

[Entrada](input_overview.md) - [Subformularios](subform_overview.md) (sólo subformularios lista) - [Áreas 4D Write Pro](writeProArea_overview.md)
