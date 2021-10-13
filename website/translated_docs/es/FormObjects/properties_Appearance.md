---
id: propertiesAppearance
title: Apariencia
---

---
## Botón por defecto

The default button property designates the button that gets the initial focus at runtime when no button of the form has the [Focusable](properties_Entry.md#focusable) property.

There can only be one default button per form page.

In addition, on macOS, the default button property modifies the button's appearance in order to indicate a "recommended choice" to the user. The default button can be different from the focused button. Default buttons have a specific blue appearance on macOS:

![](assets/en/FormObjects/property_defaultButtonmacOS.en.png)

> Button must have a standard height to get the default button appearance.

On Windows, the concept of "recommended choice" is not supported: only the focused button has a different appearance at runtime. However, in the 4D form editor, the default button is represented with a blue outline:

![](assets/en/FormObjects/property_defaultButtonWindows.en.png)


#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles |
| ------ | -------------- | ---------------- |
|        |                |                  |
 defaultButton|boolean|true, false |

#### Objetos soportados

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular)




---
## Ocultar rectángulo de enfoque

During execution, a field or any enterable area is outlined by a selection rectangle when it has the focus (via the Tab key or a single click). You can hide this rectangle by enabling this property. Hiding the focus rectangle may be useful in the case of specific interfaces.

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles |
| ------------- | -------------- | ---------------- |
| hideFocusRing | booleano       | true, false      |

#### Objetos soportados

[4D Write Pro area](writeProArea_overview.md) - [Hierarchical List](list_overview.md) - [Input](input_overview.md) - [List Box](listbox_overview.md) - [Subform](subform_overview.md)



---
## Ocultar resaltado selección
`Selection type list boxes`

This property is used to disable the selection highlight in list boxes.

When this option is enabled, the selection highlight is no longer visible for selections made in list boxes. Selections themselves are still valid and work in exactly the same way as previously; however, they are no longer represented graphically onscreen, and you will need to [define their appearance programmatically](listbox_overview.md#customizing-appearance-of-selected-rows).

Por defecto, esta opción no está activada.


#### Gramática JSON

| Nombre              | Tipos de datos | Valores posibles |
| ------------------- | -------------- | ---------------- |
| hideSystemHighlight | booleano       | true, false      |

#### Objetos soportados

[List Box](listbox_overview.md)




---
## Barra de desplazamiento horizontal

Una herramienta de interfaz que permite al usuario desplazar el área de visualización hacia la izquierda o la derecha.

Valores disponibles:

| Lista de propiedades | Valor JSON  | Descripción                                                                                                                                                      |
| -------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sí                   | "visible"   | La barra de desplazamiento está siempre visible, incluso cuando no es necesaria (es decir, cuando el tamaño del contenido del objeto es menor que el del marco). |
| No                   | "hidden"    | La barra de desplazamiento nunca es visible                                                                                                                      |
| Automático           | "automatic" | La barra de desplazamiento aparece automáticamente cuando es necesario y el usuario puede introducir un texto mayor que el ancho del objeto                      |


> Los objetos imagen pueden tener las barras de desplazamiento cuando el formato de visualización de la imagen está definido como "Truncado (no centrado)."


#### Gramática JSON

| Nombre              | Tipos de datos | Valores posibles                 |
| ------------------- | -------------- | -------------------------------- |
| scrollbarHorizontal | texto          | "visible", "hidden", "automatic" |

#### Objetos soportados

[Lista jerárquica](list_overview.md#overview) - [Sub formulario](subform_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Área de entrada](input_overview.md) - [Área 4D Write Pro](writeProArea_overview.md)

#### Ver también
[Barra de desplazamiento vertical](#vertical-scroll-bar)

---
## Resolution

Define la resolución de la pantalla para el contenido del área 4D Write Pro. Por defecto, se define a 72 ppp (macOS), que es la resolución estándar para los formularios 4D en todas las plataformas. Si se define esta propiedad en 96 ppp, se establecerá un renderizado Windows/Web tanto en plataformas macOS como Windows. Si se define esta propiedad como **automática** significa que la representación del documento diferirá entre las plataformas macOS y Windows.


#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles |
| ------ | -------------- | ---------------- |
|        |                |                  |
 dpi|number|0=automatic, 72, 96 |

#### Objetos soportados

[Área 4D Write Pro](writeProArea_overview.md)



---
## Mostrar el fondo

Muestra/oculta tanto las imágenes de fondo como el color de fondo.


#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles |
| ------ | -------------- | ---------------- |
|        |                |                  |
 showBackground|boolean|true (por defecto), false|

#### Objetos soportados

[Área 4D Write Pro](writeProArea_overview.md)

---
## Mostrar los pies de página

Displays/hides the footers when [Page view mode](#view-mode) is set to "Page".


#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles |
| ------ | -------------- | ---------------- |
|        |                |                  |
 showFooters|boolean|true (default), false|

#### Objetos soportados

[Área 4D Write Pro](writeProArea_overview.md)


---
## Mostrar la barra de fórmula

When enabled, the formula bar is visible below the Toolbar interface in the 4D View Pro area. If not selected, the formula bar is hidden.

> This property is available only for the [Toolbar](#user-interface) interface.


#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles |
| ------ | -------------- | ---------------- |
|        |                |                  |
 withFormulaBar|boolean|true (default), false|

#### Objetos soportados

[Área 4D View Pro](viewProArea_overview.md)

---
## Mostrar los encabezados

Displays/hides the headers when [Page view mode](#view-mode) is set to "Page".


#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles |
| ------ | -------------- | ---------------- |
|        |                |                  |
 showHeaders|boolean|true (default), false|

#### Objetos soportados

[Área 4D Write Pro](writeProArea_overview.md)



---
## Mostrar los caracteres ocultos

Displays/hides invisible characters


#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles |
| ------ | -------------- | ---------------- |
|        |                |                  |
 showHiddenChars|boolean|true (default), false|

#### Objetos soportados

[Área 4D Write Pro](writeProArea_overview.md)


---
## Mostrar la regla horizontal

Muestra/oculta la regla horizontal cuando la vista del documento está en modo [Página](#modo-de-vista).


#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles |
| ------ | -------------- | ---------------- |
|        |                |                  |
 showHorizontalRuler|boolean|true (por defecto), false|

#### Objetos soportados

[Área 4D Write Pro](writeProArea_overview.md)





---
## Mostrar HTML WYSYWIG

Enables/disables the HTML WYSIWYG view, in which any 4D Write Pro advanced attributes which are not compliant with all browsers are removed.


#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles |
| ------ | -------------- | ---------------- |
|        |                |                  |
 showHTMLWysiwyg|boolean|true, false (por defecto)|

#### Objetos soportados

[Área 4D Write Pro](writeProArea_overview.md)

---
## Mostrar el marco de la página

Muestra/oculta el marco de la página cuando [modo visualización de página ](#view-mode) está definido como "Página".


#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles |
| ------ | -------------- | ---------------- |
|        |                |                  |
 showPageFrames|boolean|true, false|

#### Objetos soportados

[Área 4D Write Pro](writeProArea_overview.md)



---
## Mostrar las referencias

Muestra todas las expresiones 4D insertadas en el documento de 4D Write Pro como *referencias*. When this option is disabled, 4D expressions are displayed as *values*. By default when you insert a 4D field or expression, 4D Write Pro computes and displays its current value. Select this property if you wish to know which field or expression is displayed. The field or expression references then appear in your document, with a gray background.

For example, you have inserted the current date along with a format, the date is displayed:

![](assets/en/FormObjects/writePro1.png)

With the Show references property on, the reference is displayed:

![](assets/en/FormObjects/writeProExpr.png)

> 4D expressions can be inserted using the `ST INSERT EXPRESSION` command.


#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles |
| ------ | -------------- | ---------------- |
|        |                |                  |
 showReferences|boolean|true, false (default)|

#### Objetos soportados

[Área 4D Write Pro](writeProArea_overview.md)

---
## Mostrar regla vertical

Displays/hides the vertical ruler when the document view is in [Page mode](#view-mode).


#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles |
| ------ | -------------- | ---------------- |
|        |                |                  |
 showVerticalRuler|boolean|true (default), false|

#### Objetos soportados

[Área 4D Write Pro](writeProArea_overview.md)


---
## Pestañas

You can set the direction of tab controls in your forms. This property is available on all the platforms but can only be displayed in macOS. You can choose to place the tab controls on top (standard) or on the bottom.

When tab controls with a custom direction are displayed under Windows, they automatically return to the standard direction (top).

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles |
| ------ | -------------- | ---------------- |
|        |                |                  |
 labelsPlacement|boolean|"top", "bottom" |

#### Objetos soportados

[Pestañas](tabControl.md)


---
## Interfaz de usuario

You can add an interface to 4D View Pro areas to allow end users to perform basic modifications and data manipulations. 4D View Pro offers two optional interfaces to choose from, **Ribbon** and **Toolbar**.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles |
| ------ | -------------- | ---------------- |
|        |                |                  |
 userInterface|text|"none" (default), "ribbon", "toolbar" |

#### Objetos soportados

[Área 4D View Pro](viewProArea_overview.md)


#### Ver también

[4D View Pro reference guide](https://doc.4d.com/4Dv18/4D/18/4D-View-Pro-Reference.100-4522233.en.html)

---
## Barra de desplazamiento vertical

An interface tool allowing the user to move the viewing area up and down.

Valores disponibles:

| Lista de propiedades | Valor JSON  | Descripción                                                                                                                                                      |
| -------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sí                   | "visible"   | La barra de desplazamiento está siempre visible, incluso cuando no es necesaria (es decir, cuando el tamaño del contenido del objeto es menor que el del marco). |
| No                   | "hidden"    | La barra de desplazamiento nunca es visible                                                                                                                      |
| Automático           | "automatic" | The scrollbar appears automatically whenever necessary (in other words, when the size of the object contents is greater than that of the frame)                  |

> Los objetos imagen pueden tener las barras de desplazamiento cuando el formato de visualización de la imagen está definido como "Truncado (no centrado)."


> If a text input object does not have a scroll bar, the user can scroll the information using the arrow keys.


#### Gramática JSON

| Nombre            | Tipos de datos | Valores posibles                 |
| ----------------- | -------------- | -------------------------------- |
| scrollbarVertical | texto          | "visible", "hidden", "automatic" |

#### Objetos soportados

[Lista jerárquica](list_overview.md#overview) - [Sub formulario](subform_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Área de entrada](input_overview.md) - [Área 4D Write Pro](writeProArea_overview.md)

#### Ver también

[Barra de desplazamiento horizontal](#horizontal-scroll-bar)

---
## Modo de visualización

Sets the mode for displaying the 4D Write Pro document in the form area. Hay tres valores disponibles:

- **Page**: the most complete view mode, which includes page outlines, orientation, margins, page breaks, headers and footers, etc.
- **Draft**: draft mode with basic document properties
- **Embedded**: view mode suitable for embedded areas; it does not display margins, footers, headers, page frames, etc. This mode can also be used to produce a web-like view output (if you also select the [96 dpi resolution](#resolution) and the [Show HTML WYSIWYG](#show-html-wysiwyg) properties).

> The View mode property is only used for onscreen rendering. Regarding printing settings, specific rendering rules are automatically used.



#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles |
| ------ | -------------- | ---------------- |
|        |                |                  |
 layoutMode|text|"page", "draft", "embedded"|

#### Objetos soportados

[Área 4D Write Pro](writeProArea_overview.md)

---
## Zoom

Sets the zoom percentage for displaying 4D Write Pro area contents.


#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles |
| ------ | -------------- | ---------------- |
|        |                |                  |
 zoom|número|minimum = 0 |

#### Objetos soportados

[Área 4D Write Pro](writeProArea_overview.md)


