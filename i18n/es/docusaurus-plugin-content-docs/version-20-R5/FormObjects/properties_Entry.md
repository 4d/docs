---
id: propertiesEntry
title: Entrada
---

## Corrección ortográfica automática

4D incluye funcionalidades de corrección ortográfica integradas y personalizables. Text type [inputs](input_overview.md) can be checked, as well as [4D Write Pro](writeProArea_overview.md) documents.

La propiedad de corrección ortográfica automática activa la corrección ortográfica de cada objeto. Cuando se utiliza, se realiza automáticamente una corrección ortográfica durante la entrada de datos. You can also execute the `SPELL CHECKING` 4D language command for each object to be checked.

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles |
| ---------- | -------------- | ---------------- |
| spellcheck | boolean        | true, false      |

#### Objetos soportados

[4D Write Pro area](writeProArea_overview.md) - [Input](input_overview.md)

---

## Menú contextual

Permite al usuario acceder a un menú contextual estándar en el objeto cuando se ejecuta el formulario.

For a picture type [input](input_overview.md), in addition to standard editing commands (Cut, Copy, Paste and Clear), the menu contains the **Import...** command, which can be used to import a picture stored in a file, as well as the **Save as...** command, which can be used to save the picture to disk. The menu can also be used to modify the display format of the picture: the **Truncated non-centered**, **Scaled to fit** and **Scaled to fit centered prop.** options are provided. The modification of the [display format](properties_Display.md#picture-format) using this menu is temporary; it is not saved with the record.

For a [multi-style](properties_Text.md#multi-style) text type [input](input_overview.md), in addition to standard editing commands, the context menu provides the following commands:

- **Fonts...**: displays the font system dialog box
- **Recent fonts**: displays the names of recent fonts selected during the session. La lista puede almacenar hasta 10 fuentes (más allá, la última fuente utilizada sustituye a la más antigua). Por defecto, esta lista está vacía y la opción no se muestra. You can manage this list using the `SET RECENT FONTS` and `FONT LIST` commands.
- comandos para las modificaciones de estilo soportados: fuente, tamaño, estilo, color y color de fondo.
  When the user modifies a style attribute via this pop-up menu, 4D generates the `On After Edit` form event.

For a [Web Area](webArea_overview.md), the contents of the menu depend of the rendering engine of the platform. It is possible to control access to the context menu via the [`WA SET PREFERENCE`](https://doc.4d.com/4Dv17R6/4D/17-R6/WA-SET-PREFERENCE.301-4310780.en.html) command.

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles                                             |
| ----------- | -------------- | ------------------------------------------------------------ |
| contextMenu | string         | "automatic" (se utiliza si falta), "none" |

#### Objetos soportados

[Input](input_overview.md) - [Web Area](webArea_overview.md) - [4D Write Pro areas](writeProArea_overview.md)

---

## Editable

El atributo Editable indica si los usuarios pueden introducir valores en el objeto.

Los objetos son editables por defecto. Si desea hacer que un campo o un objeto no se pueda introducir en ese formulario, puede desactivar la propiedad Editable del objeto. Un objeto no editable sólo muestra datos. Los datos se controlan mediante métodos que utilizan el nombre del campo o de la variable. You can still use the `On Clicked`, `On Double Clicked`, `On Drag Over`, `On Drop`, `On Getting Focus` and `On Losing Focus` form events with non-enterable objects. Esto facilita la gestión de menús contextuales personalizados y permite diseñar interfaces en las que es posible arrastrar y soltar y seleccionar variables no introducibles.

Cuando esta propiedad está desactivada, se desactiva todo menú emergente asociado a una columna list box a través de una lista.

#### Gramática JSON

| Nombre   | Tipos de datos | Valores posibles |
| -------- | -------------- | ---------------- |
| editable | boolean        | true, false      |

#### Objetos soportados

[4D Write Pro areas](writeProArea_overview.md) - [Check Box](checkbox_overview.md) - [Hierarchical List](list_overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [Progress Bar](progressIndicator.md) - [Ruler](ruler.md) - [Stepper](stepper.md)

---

## Filtro de entrada

Un filtro de entrada controla exactamente lo que el usuario puede escribir durante la entrada de datos. Unlike [required lists](properties_RangeOfValues.md#required-list) for example, entry filters operate on a character-by-character basis. Por ejemplo, si un número de componente siempre tiene dos letras seguidas de tres dígitos, puede utilizar un filtro de entrada para restringir al usuario a respetar ese patrón. Incluso puede controlar las letras y números en particular.

Un filtro de entrada sólo funciona durante la entrada de datos. No tiene efecto en la visualización de los datos después de que el usuario deseleccione el objeto. In general, you use entry filters and [display formats](properties_Display.md) together. El filtro restringe la entrada de datos y el formato asegura la correcta visualización del valor tras la entrada de datos.

Durante la entrada de datos, un filtro de entrada evalúa cada caracter a medida que se escribe. Si el usuario intenta escribir un caracter no válido (un número en lugar de una letra, por ejemplo), 4D simplemente no lo acepta. El caracter null permanece sin cambios hasta que el usuario escribe un caracter válido.

Los filtros de entrada también pueden utilizarse para mostrar los caracteres de formato necesarios para que el usuario no tenga que introducirlos. Por ejemplo, un número de teléfono estadounidense tiene un código de área de tres dígitos, seguido de un número de siete dígitos que se divide en dos grupos de tres y cuatro dígitos, respectivamente. Se puede utilizar un formato de visualización para encerrar el código de área entre paréntesis y para mostrar un guión después del tercer dígito del número de teléfono. Cuando se utiliza este formato, el usuario no necesita introducir los paréntesis ni los guiones.

### Definir un filtro de entrada

Most of the time, you can use one of the [built-in filters](#default-entry-filters) of 4D for what you need; however, you can also create and use custom filters:

- puede introducir directamente una cadena de definición de filtro
- o puede introducir el nombre de un filtro de entrada creado en el editor de filtros de la caja de herramientas. Los nombres de los filtros personalizados que se crean comienzan con una barra vertical (|).

For information about creating entry filters, see [Filter and format codes](https://doc.4d.com/4Dv18/4D/18/Filter-and-format-codes.300-4575706.en.html).

### Filtros de entrada por defecto

A continuación se presenta una tabla que explica cada una de las opciones de filtro de entrada en la lista desplegable Filtro de entrada:

| Filtro de entrada                                                                                   | Descripción                                                                                                                                                                                                                              |
| --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ~A                                                                                  | Permite la entrada de todas las letras, pero las conviete a mayúsculas.                                                                                                                                                  |
| &9                                                                              | Permitir sólo números.                                                                                                                                                                                                   |
| &A                                                                              | Permitir sólo letras mayúsculas.                                                                                                                                                                                         |
| &a                                                                              | Permitir sólo letras (mayúsculas y minúsculas).                                                                                                                                                       |
| &@                                                                 | Permitir sólo caracteres alfanuméricos. No hay caracteres especiales.                                                                                                                                    |
| ~a##                                                                                | Abreviatura del nombre del estado (por ej., CA). Permite la entrada de dos letras, pero las convierte en mayúsculas.                                                  |
| !0&9##/##/##                                                                    | Formato de entrada de fechas estándar. Mostrar ceros en los espacios de entrada. Permitir cualquier número.                                                                              |
| !0&9 Day: ## Month: ## Year: ## | Time entry format. Mostrar ceros en los espacios de entrada. Permitir cualquier número. Limited to hours and minutes.                                                    |
| !0&9##:##                                                       | Formato de entrada de hora. Limitado a horas y minutos. Mostrar ceros en los espacios de entrada. Permitir cuatro números, separados por dos puntos.                     |
| !0&9## Hrs ## Mins ## Secs                                                      | Formato de entrada de hora. Mostrar ceros en los espacios de entrada. Permitir dos números antes de cada palabra.                                                                        |
| !0&9Hrs: ## Mins: ## Secs: ##   | Formato de entrada de hora. Mostrar ceros en los espacios de entrada. Permitir dos números después de cada palabra.                                                                      |
| !0&9##-##-##-##                                                                 | Formato de número de teléfono local. Mostrar ceros en los espacios de entrada. Permitir cualquier número. Tres entradas, guión, cuatro entradas.                         |
| !_&9(###)!0###-####                     | Número de teléfono de larga distancia. Mostrar guiones bajos en los tres primeros espacios de entrada, ceros en el resto.                                                                                |
| !0&9###-###-###                                                                 | Número de teléfono de larga distancia. Mostrar ceros en los espacios de entrada. Permitir cualquier número. Tres entradas, guión, tres entradas, guión, cuatro entradas. |
| !0&9###-##-###                                                                  | Número de la Seguridad Social. Mostrar ceros en los espacios de entrada. Permitir cualquier número.                                                                                      |
| ~"A-Z;0-9; ;,;.;-"                                                  | Letras mayúsculas y puntuación. Permita sólo letras mayúsculas, números, espacios, comas, puntos y guiones.                                                                                              |
| &"a-z;0-9; ;,;.;-"                                              | Letras mayúsculas y minúsculas y puntuación. Permite letras minúsculas, números, espacios, comas, puntos y guiones.                                                                                      |
| &"0-9;.;-"                                                      | Números. Sólo se permiten números, puntos decimales y guiones (signo menos).                                                                                                          |

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles                                                                           |
| ----------- | -------------- | ------------------------------------------------------------------------------------------ |
| entryFilter | string         | <li>Entry filter code</li> or <li>Entry filter name (filter names start with &#124; )</li> |

#### Objetos soportados

[Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Hierarchical List](list_overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Focusable

When the **Focusable** property is enabled for an object, the object can have the focus (and can thus be activated by the keyboard for instance). It is outlined by a gray dotted line when it is selected — except when the [Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle) option has also been selected.

> An [input object](input_overview.md) is always focusable if it has the [Enterable](#enterable) property.

- ![](../assets/en/FormObjects/property_focusable1.png)<br/>Check box shows focus when selected

- ![](../assets/en/FormObjects/property_focusable2.png)<br/>Check box is selected but cannot show focus|

When the **Focusable** property is selected for a non-enterable object, the user can select, copy or even drag-and-drop the contents of the area.

#### Gramática JSON

| Nombre    | Tipos de datos | Valores posibles |
| --------- | -------------- | ---------------- |
| focusable | boolean        | true, false      |

#### Objetos soportados

[4D Write Pro areas](writeProArea_overview.md) - [Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Hierarchical List](list_overview.md) - [Input](input_overview.md) - [List Box](listbox_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Radio Button](radio_overview.md) - [Subform](subform_overview.md)

---

## Disposición del teclado

This property associates a specific keyboard layout to an [input object](input_overview.md). Por ejemplo, en una aplicación internacional, si un formulario contiene un campo cuyo contenido debe introducirse en caracteres griegos, puede asociar a este campo la disposición de teclado "griego". De este modo, durante la entrada de datos, la configuración del teclado cambia automáticamente cuando este campo tiene el foco.

Por defecto, el objeto utiliza la disposición actual del teclado.

> You can also set and get the keyboard dynamically using the `OBJECT SET KEYBOARD LAYOUT` and `OBJECT Get keyboard layout` commands.

#### Gramática JSON

| Nombre          | Tipos de datos | Valores posibles                                                                               |
| --------------- | -------------- | ---------------------------------------------------------------------------------------------- |
| keyboardDialect | text           | Código del lenguaje, por ejemplo "ar-ma" o "cs". Ver RFC3066, ISO639 e ISO3166 |

#### Objetos soportados

[4D Write Pro areas](writeProArea_overview.md) - [Input](input_overview.md)

---

## Multilínea

This property is available for [inputs objects](input_overview.md) containing expressions of the Text type and fields of the Alpha and Text type. Puede tener tres valores diferentes: Sí, No, Automático (por defecto).

#### Automático

- En las entradas de una línea, las palabras situadas al final de las líneas se truncan y no hay retornos de línea.
- In multiline inputs, 4D carries out automatic line returns:\
  ![](../assets/en/FormObjects/multilineAuto.png)

#### No

- En las entradas de una línea, las palabras situadas al final de las líneas se truncan y no hay retornos de línea.
- Nunca hay retornos de línea: el texto siempre se muestra en una sola línea. If the Alpha or Text field or variable contains carriage returns, the text located after the first carriage return is removed as soon as the area is modified:\
  ![](../assets/en/FormObjects/multilineNo.png)

#### Sí

When this value is selected, the property is managed by the [Wordwrap](properties_Display.md#wordwrap) option.

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles                                                          |
| ---------- | -------------- | ------------------------------------------------------------------------- |
| multilínea | text           | "yes", "no", "automatic" (por defecto si no se define) |

#### Objetos soportados

[Input](input_overview.md)

---

## Marcador

4D puede mostrar texto con marcador de posición en los campos de sus formularios.

El texto del marcador de posición aparece como texto de marca de agua en un campo, suministrando un mensaje de ayuda, una indicación o un ejemplo de los datos que deben introducirse. Este texto desaparece tan pronto como el usuario ingrese un caracter en el área:

![](../assets/en/FormObjects/property_placeholder.png)

El texto del marcador de posición vuelve a aparecer si se borra el contenido del campo.

Se puede mostrar un marcador de posición para los siguientes tipos de datos:

- cadena (text o alpha)
- date and time when the **Blank if null** property is enabled.

Puede utilizar una referencia XLIFF en la forma ":xliff:resname" como marcador de posición, por ejemplo:

:xliff:PH_Lastname

Sólo se pasa la referencia en el campo "Marcador de posición"; no es posible combinar una referencia con texto estático.

> You can also set and get the placeholder text by programming using the [OBJECT SET PLACEHOLDER](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-PLACEHOLDER.301-4128243.en.html) and [OBJECT Get placeholder](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-Get-placeholder.301-4128249.en.html) commands.

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles                                                                       |
| ----------- | -------------- | -------------------------------------------------------------------------------------- |
| placeholder | string         | Texto a mostrar (en gris) cuando el objeto no contiene ningún valor |

#### Objetos soportados

[Combo Box](comboBox_overview.md) - [Input](input_overview.md)

#### Ver también

[Help tip](properties_Help.md)

---

## Selección siempre visible

Esta propiedad mantiene la selección visible dentro del objeto después de haber perdido el foco. This makes it easier to implement interfaces that allow the text style to be modified (see [Multi-style](properties_Text.md#multi-style)).

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles |
| ------------- | -------------- | ---------------- |
| showSelection | boolean        | true, false      |

#### Objetos soportados

[4D Write Pro areas](writeProArea_overview.md) - [Input](input_overview.md)

---

## Atajo

This property allows setting special meaning keys (keyboard shortcuts) for [buttons](button_overview.md), [radio buttons](radio_overview.md), and [checkboxes](checkbox_overview.md). Permiten al usuario utilizar el control utilizando el teclado en lugar de tener que utilizar el ratón.

You can configure this option by clicking the [...] button in the Shortcuts property in the Property List.

![](../assets/en/FormObjects/property_shortcut.png)

> También puede asignar un acceso directo a un comando de menú personalizado. Si hay un conflicto entre dos accesos directos, el objeto activo tiene prioridad. For more information about associating shortcuts with menus, refer to [Setting menu properties](https://doc.4d.com/4Dv17R5/4D/17-R5/Setting-menu-properties.300-4163525.en.html).

To view a list of all the shortcuts used in the 4D Design environment, see the [Shortcuts Page](https://doc.4d.com/4Dv17R5/4D/17-R5/Shortcuts-Page.300-4163701.en.html) in the Preferences dialog box.

#### Gramática JSON

| Nombre          | Tipos de datos | Valores posibles                                                                                                                                                                                                                                          |
| --------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| shortcutAccel   | boolean        | true, false (Windows: Ctrl/macOS: Command)                                                                                                                                                             |
| shortcutAlt     | boolean        | true, false                                                                                                                                                                                                                                               |
| shortcutCommand | boolean        | true, false                                                                                                                                                                                                                                               |
| shortcutControl | boolean        | true, false (macOS: Control)                                                                                                                                                                                           |
| shortcutShift   | boolean        | true, false                                                                                                                                                                                                                                               |
|                 |                |                                                                                                                                                                                                                                                           |
| shortcutKey     | string         | <li>any character key: "a", "b"...</li><li>[F1]" -> "[F15]", "[Return]", "[Enter]", "[Backspace]", "[Tab]", "[Esc]", "[Del]", "[Home]", "[End]", "[Help]", "[Page up]", "[Page down]", "[left arrow]", "[right arrow]", "[up arrow]", "[down arrow]"</li> |

#### Objetos soportados

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Picture Button](pictureButton_overview.md) -
[Radio Button](radio_overview.md)

---

## Edición con un solo clic

Permite el paso directo al modo de edición en list boxes.

Cuando esta opción está activada, las celdas del list box cambian al modo de edición tras un solo clic del usuario, independientemente de si esta área del list box estaba seleccionada de antemano o no. Note that this option allows cells to be edited even when the list box [selection mode](properties_ListBox.md#selection-mode) is set to "None".

Cuando esta opción no está activa, los usuarios deben seleccionar primero la línea de celdas y luego, hacer clic en una celda para editar su contenido.

#### Gramática JSON

| Nombre          | Tipos de datos | Valores posibles |
| --------------- | -------------- | ---------------- |
| singleClickEdit | boolean        | true, false      |

#### Objetos soportados

[List Box](listbox_overview.md)
