---
id: onBeforeKeystroke
title: On Before Keystroke
---

| Code | Puede ser llamado por                                                                                                                                                                                                                                                                  | Definición                                                                                                                                                                         |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17   | [Área 4D Write Pro](FormObjects/writeProArea_overview) - [Combo Box](FormObjects/comboBox_overview.md) - Formulario - [Entrada](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Columna de list Box](FormObjects/listbox_overview.md#list-box-columns) | Un personaje está a punto de ser introducido en el objeto que tiene el foco. `Get edited text` devuelve el texto del objeto **sin** este carácter. |

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                                                                |
| ----------- | --------------------------------------------------------------------------------------------- |
| 18 R5       | - Soporte en list boxes no editables - El evento se activa ahora después de la validación IME |

</details>

## Descripción

Después de que se seleccionen los eventos `On Before Keystroke` y [`On After Keystroke`](onAfterKeystroke.md) para un objeto, puede detectar y manejar las pulsaciones de teclas dentro del objeto, utilizando el comando `Form event code` que devolverá `On Before Keystroke` y luego [`On After Keystroke`](onAfterKeystroke.md) (para más información, consulte la descripción del comando `Get edited text`). En el evento `On Before Keystroke`, se puede utilizar el comando `FILTER KEYSTROKE` para filtrar los caracteres digitados.

> Estos eventos también son activados por comandos del lenguaje que simulan una acción del usuario como `POST KEY`.

El evento `On Before Keystroke` no se genera:

- en un método [columnas de list box](FormObjects/listbox_overview.md#list-box-columns) excepto cuando se está editando una celda (sin embargo se genera en cualquier caso en el método de [list box](FormObjects/listbox_overview.md)),
- cuando las modificaciones usuario no se realizan con el teclado (pegar, arrastrar y soltar, casilla de verificación, lista desplegable, combo box). Para procesar estos eventos, debe utilizar [`On After Edit`](onAfterEdit.md).

### Objetos no editables

El evento `On Before Keystroke` puede generarse en objetos no introducibles, por ejemplo, en un list box aunque las celdas del list box no sean introducibles, o las líneas no sean seleccionables. Esto permite crear interfaces en las que el usuario puede desplazarse dinámicamente a una línea específica en un list box introduciendo las primeras letras de un valor. En el caso de que las celdas del cuadro del list box sean editables, puede utilizar el comando `Is editing text` para saber si el usuario está realmente introduciendo texto en una celda o está utilizando la función de tecleo predictivo y entonces, ejecuta

### Secuencia de tecla

Cuando una entrada requiere una secuencia de pulsaciones de teclas, los eventos `On Before Keystroke` y [`On After Keystroke`](onAfterKeystroke.md) se generan solo cuando la entrada es completamente validada por el usuario. El comando `Keystroke` devuelve el carácter validado. Este caso se da principalmente:

- cuando se utilizan las teclas "muertas" como ^ o ~: los eventos se generan sólo cuando se introduce el carácter extendido eventualmente (por ejemplo, "ê" o ñ),
- cuando un IME (Input Code Editor) muestra una caja de diálogo intermedia en la que el usuario puede introducir una combinación de caracteres: los eventos se generan sólo cuando el diálogo IME se valida.

### Ver también

[On After Keystroke](onAfterKeystroke.md).
