---
id: onAfterKeystroke
title: On After Keystroke
---

| Code | Puede ser llamado por                                                                                                                                                                                                                                                                  | Definición                                                                                                                                                                                |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 28   | [Área 4D Write Pro](FormObjects/writeProArea_overview) - [Combo Box](FormObjects/comboBox_overview.md) - Formulario - [Entrada](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Columna de list Box](FormObjects/listbox_overview.md#list-box-columns) | Un personaje está a punto de ser introducido en el objeto que tiene el foco. `Get edited text` devuelve el texto del objeto **incluyendo** este caracter. |

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                                                                |
| ----------- | --------------------------------------------------------------------------------------------- |
| 18 R5       | - Soporte en list boxes no editables - El evento se activa ahora después de la validación IME |

</details>

## Descripción

> El evento `On After Keystroke` generalmente puede ser reemplazado por el evento [`On After Edit`](onAfterEdit.md) (ver abajo).

Después de haber seleccionado las propiedades [`On Before Keystroke`](onBeforeKeystroke.md) y `On After Keystroke` para un objeto, puede detectar y manejar las pulsaciones de teclas dentro del objeto, utilizando el comando `FORM event` que devolverá `On Before Keystroke` y luego `On After Keystroke` (para más información, consulte la descripción del comando `Get edited text`).

> Estos eventos también son activados por comandos del lenguaje que simulan una acción del usuario como `POST KEY`.

El evento `On After Keystroke` no se genera:

- en el método [de las columnas de list box](FormObjects/listbox_overview.md#list-box-columns) excepto cuando se está editando una celda (sin embargo se genera en cualquier caso en el método de [list box](FormObjects/listbox_overview.md)),
- cuando las modificaciones usuario no se realizan con el teclado (pegar, arrastrar y soltar, casilla de verificación, lista desplegable, combo box). Para procesar estos eventos, debe utilizar [`On After Edit`](onAfterEdit.md).

### Secuencia de tecla

Cuando una entrada requiere una secuencia de presiones de teclas, los eventos [`On Before Keystroke`](onBeforeKeystroke.md) y [`On After Keystroke event`] se generan sólo cuando la entrada es completamente validada por el usuario. El comando `Keystroke` devuelve el carácter validado. Este caso se da principalmente:

- cuando se utilizan las teclas "muertas" como ^ o ~: los eventos se generan sólo cuando se introduce el carácter extendido eventualmente (por ejemplo, "ê" o ñ),
- cuando un IME (Input Code Editor) muestra una caja de diálogo intermedia en la que el usuario puede introducir una combinación de caracteres: los eventos se generan sólo cuando el diálogo IME se valida.

### Ver también

[On Before Keystroke](onBeforeKeystroke.md).
