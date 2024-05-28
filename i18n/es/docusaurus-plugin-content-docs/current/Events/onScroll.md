---
id: onScroll
title: On Scroll
---

| Code | Puede ser llamado por                                                                                                                                    | Definición                                                                                                                     |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| 59   | [Área de entrada](FormObjects/input_overview.md) de [tipo](FormObjects/properties_Object.md#type) `imagen` - [List Box](FormObjects/listbox_overview.md) | El usuario se desplaza por el contenido de un objeto imagen o de un list box utilizando el ratón o el teclado. |

## Descripción

Este evento puede generarse en el contexto de una entrada de imagen o de un list box.

Este evento se desencadena después de cualquier otro evento usuario relacionado con la acción de desplazamiento ([On Clicked](onClicked.md), [On After Keystroke](onAfterKeystroke.md), etc.). El evento sólo se genera en el método objeto (no en el método formulario).

El evento se dispara cuando el desplazamiento es el resultado de una acción del usuario: utilizando las barras de desplazamiento y/o los cursores, utilizando la rueda del ratón o [el teclado](FormObjects/properties_Appearance.md#vertical-scroll-bar). No se genera cuando el objeto se desplaza debido a la ejecución del comando `OBJECT SET SCROLL POSITION`.

### Entrada de imagen

El evento se genera en cuanto un usuario se desplaza por una imagen dentro de la entrada de imagen (campo o variable) que la contiene. Puede desplazar el contenido de un área de imagen cuando el tamaño del área es menor que su contenido y el [formato de visualización](FormObjects/properties_Display.md#picture-format) es "Truncado (no centrado)".

### List box

El evento se genera en cuanto un usuario se desplaza por las líneas o columnas del list box.
