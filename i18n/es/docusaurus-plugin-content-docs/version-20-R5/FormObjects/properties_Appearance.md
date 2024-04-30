---
id: propertiesAppearance
title: Apariencia
---

## Botón por defecto

The default button property designates the button that gets the initial focus at runtime when no button of the form has the [Focusable](properties_Entry.md#focusable) property.

Sólo puede haber un botón por defecto por página de formulario.

In addition, on macOS, the default button property modifies the button's appearance in order to indicate a "recommended choice" to the user and is automatically bound to the **Enter** key, even if it does not have the focus. El botón por defecto puede ser diferente del botón enfocado. Los botones por defecto tienen un aspecto azul específico en macOS:

![](../assets/en/FormObjects/property_defaultButtonmacOS.en.png)

> El botón debe tener una altura estándar para obtener la apariencia de botón por defecto.

On Windows, the concept of "recommended choice" is not supported: only the focused button has a different appearance at runtime and the **Enter** key is bound to the focused button. Sin embargo, en el editor de formularios de 4D, el botón por defecto se representa con un contorno azul:

![](../assets/en/FormObjects/property_defaultButtonWindows.en.png)

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles |
| ------------- | -------------- | ---------------- |
| defaultButton | boolean        | true, false      |

#### Objetos soportados

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular)

---

## Ocultar rectángulo de enfoque

Durante la ejecución, un campo o toda área introducible es delimitada por un rectángulo de selección cuando tiene el foco (a través de la tecla Tab o un simple clic). Puede ocultar este rectángulo activando esta propiedad. Ocultar el rectángulo de enfoque puede ser útil en el caso de interfaces específicas.

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles |
| ------------- | -------------- | ---------------- |
| hideFocusRing | boolean        | true, false      |

#### Objetos soportados

[4D Write Pro area](writeProArea_overview.md) - [Hierarchical List](list_overview.md) - [Input](input_overview.md) - [List Box](listbox_overview.md) - [Subform](subform_overview.md)

---

## Ocultar resaltado selección

`List boxes de tipo selección`

Esta propiedad se utiliza para desactivar el resaltado de la selección en los list box.

Cuando esta opción está activada, el resaltado de la selección ya no es visible para las selecciones realizadas en los list box. Selections themselves are still valid and work in exactly the same way as previously; however, they are no longer represented graphically onscreen, and you will need to [define their appearance programmatically](listbox_overview.md#customizing-appearance-of-selected-rows).

Por defecto, esta opción no está activa.

#### Gramática JSON

| Nombre              | Tipos de datos | Valores posibles |
| ------------------- | -------------- | ---------------- |
| hideSystemHighlight | boolean        | true, false      |

#### Objetos soportados

[List Box](listbox_overview.md)

---

## Barra de desplazamiento horizontal

Una herramienta de interfaz que permite al usuario desplazar el área de visualización hacia la izquierda o la derecha.

Valores disponibles:

| Lista de propiedades | Valor JSON  | Descripción                                                                                                                                                                                         |
| -------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sí                   | "visible"   | La barra de desplazamiento está siempre visible, incluso cuando no es necesaria (es decir, cuando el tamaño del contenido del objeto es menor que el del marco). |
| No                   | "hidden"    | La barra de desplazamiento nunca es visible                                                                                                                                                         |
| Automático           | "automatic" | La barra de desplazamiento aparece automáticamente cuando es necesario y el usuario puede introducir un texto mayor que el ancho del objeto                                                         |

> Los objetos imagen pueden tener las barras de desplazamiento cuando el formato de visualización de la imagen está definido como "Truncado (no centrado)."

#### Gramática JSON

| Nombre              | Tipos de datos | Valores posibles                 |
| ------------------- | -------------- | -------------------------------- |
| scrollbarHorizontal | text           | "visible", "hidden", "automatic" |

#### Objetos soportados

[Hierarchical List](list_overview.md#overview) - [Subform](subform_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Input](input_overview.md) - [4D Write Pro area](writeProArea_overview.md)

#### Ver también

[Vertical scroll bar](#vertical-scroll-bar)

---

## Resolution

Define la resolución de la pantalla para el contenido del área 4D Write Pro. Por defecto, se define a 72 ppp (macOS), que es la resolución estándar para los formularios 4D en todas las plataformas. Si se define esta propiedad en 96 ppp, se establecerá un renderizado Windows/Web tanto en plataformas macOS como Windows. Setting this property to **automatic** means that document rendering will differ between macOS and Windows platforms.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles    |
| ------ | -------------- | ------------------- |
| dpi    | number         | 0=automatic, 72, 96 |

#### Objetos soportados

[4D Write Pro area](writeProArea_overview.md)

---

## Mostrar el fondo

Muestra/oculta tanto las imágenes de fondo como el color de fondo.

#### Gramática JSON

| Nombre         | Tipos de datos | Valores posibles                             |
| -------------- | -------------- | -------------------------------------------- |
| showBackground | boolean        | true (por defecto), false |

#### Objetos soportados

[4D Write Pro area](writeProArea_overview.md)

---

## Mostrar los pies de página

Displays/hides the footers when [Page view mode](#view-mode) is set to "Page".

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles                             |
| ----------- | -------------- | -------------------------------------------- |
| showFooters | boolean        | true (por defecto), false |

#### Objetos soportados

[4D Write Pro area](writeProArea_overview.md)

---

## Mostrar la barra de fórmula

Cuando está activada, la barra de fórmulas es visible debajo de la interfaz de la barra de herramientas en el área 4D View Pro. Si no se selecciona, la barra de fórmulas se oculta.

> This property is available only for the [Toolbar](#user-interface) interface.

#### Gramática JSON

| Nombre         | Tipos de datos | Valores posibles                             |
| -------------- | -------------- | -------------------------------------------- |
| withFormulaBar | boolean        | true (por defecto), false |

#### Objetos soportados

[4D View Pro area](viewProArea_overview.md)

---

## Mostrar los encabezados

Displays/hides the headers when [Page view mode](#view-mode) is set to "Page".

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles                             |
| ----------- | -------------- | -------------------------------------------- |
| showHeaders | boolean        | true (por defecto), false |

#### Objetos soportados

[4D Write Pro area](writeProArea_overview.md)

---

## Mostrar los caracteres ocultos

Muestra/oculta los caracteres invisibles

#### Gramática JSON

| Nombre          | Tipos de datos | Valores posibles                             |
| --------------- | -------------- | -------------------------------------------- |
| showHiddenChars | boolean        | true (por defecto), false |

#### Objetos soportados

[4D Write Pro area](writeProArea_overview.md)

---

## Mostrar la regla horizontal

Displays/hides the horizontal ruler when the document view is in [Page mode](#view-mode).

#### Gramática JSON

| Nombre              | Tipos de datos | Valores posibles                             |
| ------------------- | -------------- | -------------------------------------------- |
| showHorizontalRuler | boolean        | true (por defecto), false |

#### Objetos soportados

[4D Write Pro area](writeProArea_overview.md)

---

## Mostrar HTML WYSYWIG

Activa/desactiva la vista HTML WYSIWYG, en la que se eliminan los atributos avanzados de 4D Write Pro que no son compatibles con todos los navegadores.

#### Gramática JSON

| Nombre          | Tipos de datos | Valores posibles                             |
| --------------- | -------------- | -------------------------------------------- |
| showHTMLWysiwyg | boolean        | true, false (por defecto) |

#### Objetos soportados

[4D Write Pro area](writeProArea_overview.md)

---

## Mostrar el marco de la página

Displays/hides the page frame when [Page view mode](#view-mode) is set to "Page".

#### Gramática JSON

| Nombre         | Tipos de datos | Valores posibles |
| -------------- | -------------- | ---------------- |
| showPageFrames | boolean        | true, false      |

#### Objetos soportados

[4D Write Pro area](writeProArea_overview.md)

---

## Mostrar las referencias

Displays all 4D expressions inserted in the 4D Write Pro document as _references_. When this option is disabled, 4D expressions are displayed as _values_. Por defecto, cuando se inserta un campo o expresión 4D, 4D Write Pro calcula y muestra su valor actual. Seleccione esta propiedad si desea saber qué campo o expresión se muestra. Las referencias de campo o de expresión aparecen entonces en su documento, con un fondo gris.

Por ejemplo, ha insertado la fecha actual junto con un formato, la fecha se muestra:

![](../assets/en/FormObjects/writePro1.png)

Con la propiedad Mostrar referencias activada, se muestra la referencia:

![](../assets/en/FormObjects/writeProExpr.png)

> 4D expressions can be inserted using the `ST INSERT EXPRESSION` command.

#### Gramática JSON

| Nombre         | Tipos de datos | Valores posibles                             |
| -------------- | -------------- | -------------------------------------------- |
| showReferences | boolean        | true, false (por defecto) |

#### Objetos soportados

[4D Write Pro area](writeProArea_overview.md)

---

## Mostrar regla vertical

Displays/hides the vertical ruler when the document view is in [Page mode](#view-mode).

#### Gramática JSON

| Nombre            | Tipos de datos | Valores posibles                             |
| ----------------- | -------------- | -------------------------------------------- |
| showVerticalRuler | boolean        | true (por defecto), false |

#### Objetos soportados

[4D Write Pro area](writeProArea_overview.md)

---

## Pestañas

Puede definir la dirección de las pestañas en sus formularios. Esta propiedad está disponible en todas las plataformas, pero sólo puede mostrarse en macOS. Puede elegir colocar los controles de las pestañas en la parte superior (estándar) o en la parte inferior.

Cuando los controles de pestañas con una dirección personalizada se muestran en Windows, vuelven automáticamente a la dirección estándar (superior).

#### Gramática JSON

| Nombre          | Tipos de datos | Valores posibles |
| --------------- | -------------- | ---------------- |
| labelsPlacement | boolean        | "top", "bottom"  |

#### Objetos soportados

[Tab Control](tabControl.md)

---

## Interfaz de usuario

Puede añadir una interfaz a las áreas 4D View Pro para permitir a los usuarios finales realizar modificaciones básicas y manipulaciones de datos. 4D View Pro offers two optional interfaces to choose from, **Ribbon** and **Toolbar**.

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles                                             |
| ------------- | -------------- | ------------------------------------------------------------ |
| userInterface | text           | "none" (por defecto), "ribbon", "toolbar" |

#### Objetos soportados

[4D View Pro area](viewProArea_overview.md)

#### Ver también

[4D View Pro reference guide](../ViewPro/getting-started.md)

---

## Barra de desplazamiento vertical

Una herramienta de interfaz que permite al usuario mover el área de visualización hacia arriba y hacia abajo.

Valores disponibles:

| Lista de propiedades | Valor JSON  | Descripción                                                                                                                                                                                         |
| -------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sí                   | "visible"   | La barra de desplazamiento está siempre visible, incluso cuando no es necesaria (es decir, cuando el tamaño del contenido del objeto es menor que el del marco). |
| No                   | "hidden"    | La barra de desplazamiento nunca es visible                                                                                                                                                         |
| Automático           | "automatic" | La barra de desplazamiento aparece automáticamente cuando es necesario (es decir, cuando el tamaño del contenido del objeto es mayor que el del marco)                           |

> Los objetos imagen pueden tener las barras de desplazamiento cuando el formato de visualización de la imagen está definido como "Truncado (no centrado)."

> Si un objeto de entrada de texto no tiene una barra de desplazamiento, el usuario puede desplazarse por la información utilizando las teclas de flecha.

#### Gramática JSON

| Nombre            | Tipos de datos | Valores posibles                 |
| ----------------- | -------------- | -------------------------------- |
| scrollbarVertical | text           | "visible", "hidden", "automatic" |

#### Objetos soportados

[Hierarchical List](list_overview.md#overview) - [Subform](subform_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Input](input_overview.md) - [4D Write Pro area](writeProArea_overview.md)

#### Ver también

[Horizontal scroll bar](#horizontal-scroll-bar)

---

## Modo de visualización

Establece el modo de visualización del documento de 4D Write Pro en el área del formulario. Hay tres valores disponibles:

- **Page**: the most complete view mode, which includes page outlines, orientation, margins, page breaks, headers and footers, etc.
- **Draft**: draft mode with basic document properties
- **Embedded**: view mode suitable for embedded areas; it does not display margins, footers, headers, page frames, etc. This mode can also be used to produce a web-like view output (if you also select the [96 dpi resolution](#resolution) and the [Show HTML WYSIWYG](#show-html-wysiwyg) properties).

> La propiedad Modo vista sólo se utiliza para la renderización en pantalla. En cuanto a la configuración de la impresión, se utilizan automáticamente reglas de renderización específicas.

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles            |
| ---------- | -------------- | --------------------------- |
| layoutMode | text           | "page", "draft", "embedded" |

#### Objetos soportados

[4D Write Pro area](writeProArea_overview.md)

---

## Zoom

Define el porcentaje de zoom para mostrar el contenido del área 4D Write Pro.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles |
| ------ | -------------- | ---------------- |
| zoom   | number         | minimum = 0      |

#### Objetos soportados

[4D Write Pro area](writeProArea_overview.md)
