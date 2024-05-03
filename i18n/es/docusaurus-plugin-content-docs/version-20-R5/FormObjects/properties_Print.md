---
id: propertiesPrint
title: Imprimir
---

## Impresión marco

Esta propiedad gestiona el modo de impresión de los objetos cuyo tamaño puede variar de un registro a otro en función de su contenido. Estos objetos pueden configurarse para imprimirse con un marco fijo o variable. Los objetos de marco fijo se imprimen dentro de los límites del objeto tal y como fue creado en el formulario. Los objetos de marco variable se expanden durante la impresión para incluir todo el contenido del objeto. Tenga en cuenta que el ancho de los objetos impresos como tamaño variable no se ve afectado por esta propiedad; sólo la altura varía automáticamente en función del contenido del objeto.

No se puede colocar más de un objeto de marco variable uno al lado del otro en un formulario. Puede colocar objetos de marco no variable a ambos lados de un objeto que se imprimirá con un tamaño variable siempre que el objeto de marco variable sea al menos una línea más largo que el objeto de al lado y que todos los objetos estén alineados en la parte superior. Si no se respeta esta condición, el contenido de los otros campos se repetirá para cada corte horizontal del objeto marco variable.

> The `Print object` and `Print form` commands do not support this property.

Las opciones de impresión son:

- **Variable** option / **Print Variable Frame** checked: 4D enlarges or reduces the form object area in order to print all the subrecords.

- **Fixed (Truncation)** option / **Print Variable Frame** unchecked: 4D only prints the contents that appear in the object area. El formulario sólo se imprime una vez y el contenido no impreso se ignora.

- **Fixed (Multiple Records)** (subforms only): the initial size of the subform area is kept but 4D prints the form several times in order to print all the records.

> This property can be set by programming using the `OBJECT SET PRINT VARIABLE FRAME` command.

#### Gramática JSON

|   Nombre   | Tipos de datos | Valores posibles                                                                   |
| :--------: | :------------: | ---------------------------------------------------------------------------------- |
| printFrame |     string     | "fixed", "variable", (subformulario únicamente) "fixedMultiple" |

#### Objetos soportados

[Input](input_overview.md) - [Subforms](subform_overview.md) (list subforms only) - [4D Write Pro areas](writeProArea_overview.md)
