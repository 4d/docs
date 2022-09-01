---
id: propertiesEntry
title: Entrada
---

## Corrección ortográfica automática

4D incluye funcionalidades de corrección ortográfica integradas y personalizables. Text type [inputs](input_overview.md) can be checked, as well as [4D Write Pro](writeProArea_overview.md) documents.

The Auto Spellcheck property activates the spell-check for each object. Cuando se utiliza, se realiza automáticamente una corrección ortográfica durante la entrada de datos. You can also execute the `SPELL CHECKING` 4D language command for each object to be checked.

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles |
| ---------- | -------------- | ---------------- |
| spellcheck | boolean        | true, false      |

#### Objetos soportados

[Área 4D Write Pro](writeProArea_overview.md) - [Área de entrada](input_overview.md)

---

## Menú contextual

Allows the user access to a standard context menu in the object when the form is executed.

For a picture type [input](input_overview.md), in addition to standard editing commands (Cut, Copy, Paste and Clear), the menu contains the **Import...** command, which can be used to import a picture stored in a file, as well as the **Save as...** command, which can be used to save the picture to disk. The menu can also be used to modify the display format of the picture: the **Truncated non-centered**, **Scaled to fit** and **Scaled to fit centered prop.** options are provided. The modification of the [display format](properties_Display.md#picture-format) using this menu is temporary; it is not saved with the record.

For a [multi-style](properties_Text.md#multi-style) text type [input](input_overview.md), in addition to standard editing commands, the context menu provides the following commands:

- **Fonts...**: displays the font system dialog box
- **Recent fonts**: displays the names of recent fonts selected during the session. The list can store up to 10 fonts (beyond that, the last font used replaces the oldest). Por defecto, esta lista está vacía y la opción no se muestra. You can manage this list using the `SET RECENT FONTS` and `FONT LIST` commands.
- commands for supported style modifications: font, size, style, color and background color. When the user modifies a style attribute via this pop-up menu, 4D generates the `On After Edit` form event.

For a [Web Area](webArea_overview.md), the contents of the menu depend of the rendering engine of the platform. It is possible to control access to the context menu via the [`WA SET PREFERENCE`](https://doc.4d.com/4Dv17R6/4D/17-R6/WA-SET-PREFERENCE.301-4310780.en.html) command.

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles                          |
| ----------- | -------------- | ----------------------------------------- |
| contextMenu | string         | "automatic" (se utiliza si falta), "none" |

#### Objetos soportados

[Input](input_overview.md) - [Web Area](webArea_overview.md) - [4D Write Pro areas](writeProArea_overview.md)

---

## Editable

The Enterable attribute indicates whether users can enter values into the object.

Los objetos son editables por defecto. If you want to make a field or an object non-enterable for that form, you can disable the Enterable property for the object. Un objeto no editable sólo muestra datos. Los datos se controlan mediante métodos que utilizan el nombre del campo o de la variable. You can still use the `On Clicked`, `On Double Clicked`, `On Drag Over`, `On Drop`, `On Getting Focus` and `On Losing Focus` form events with non-enterable objects. This makes it easier to manage custom context menus and lets you design interfaces where you can drag-and-drop and select non-enterable variables.

When this property is disabled, any pop-up menus associated with a list box column via a list are disabled.

#### Gramática JSON

| Nombre   | Tipos de datos | Valores posibles |
| -------- | -------------- | ---------------- |
| editable | boolean        | true, false      |

#### Objetos soportados

[4D Write Pro areas](writeProArea_overview.md) - [Check Box](checkbox_overview.md) - [Hierarchical List](list_overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [Progress Bar](progressIndicator.md) - [Ruler](ruler.md) - [Stepper](stepper.md)

---

## Filtro de entrada

Un filtro de entrada controla exactamente lo que el usuario puede escribir durante la entrada de datos. Unlike [required lists](properties_RangeOfValues.md#required-list) for example, entry filters operate on a character-by-character basis. For example, if a part number always consists of two letters followed by three digits, you can use an entry filter to restrict the user to that pattern. Incluso puede controlar las letras y números en particular.

Un filtro de entrada sólo funciona durante la entrada de datos. No tiene efecto en la visualización de los datos después de que el usuario deseleccione el objeto. In general, you use entry filters and [display formats](properties_Display.md) together. The filter constrains data entry and the format ensures proper display of the value after data entry.

Durante la entrada de datos, un filtro de entrada evalúa cada caracter a medida que se escribe. If the user attempts to type an invalid character (a number instead of a letter, for example), 4D simply does not accept it. The null character remains unchanged until the user types a valid character.

Entry filters can also be used to display required formatting characters so that the user need not enter them. For example, an American telephone number consists of a three-digit area code, followed by a seven-digit number that is broken up into two groups of three and four digits, respectively. A display format can be used to enclose the area code in parentheses and display a dash after the third digit of the telephone number. When such a format is used, the user does not need to enter the parentheses or the dashes.

### Definir un filtro de entrada

Most of the time, you can use one of the [built-in filters](#default-entry-filters) of 4D for what you need; however, you can also create and use custom filters:

- puede introducir directamente una cadena de definición de filtro
- or you can enter the name of an entry filter created in the Filters editor in the Toolbox. Los nombres de los filtros personalizados que se crean comienzan con una barra vertical (|).

For information about creating entry filters, see [Filter and format codes](https://doc.4d.com/4Dv18/4D/18/Filter-and-format-codes.300-4575706.en.html).

### Filtros de entrada por defecto

Here is a table that explains each of the entry filter choices in the Entry Filter drop-down list:

| Filtro de entrada                      | Descripción                                                                                                                                                              |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ~A                                     | Permitir la entrada de toda letra, pero convertir a mayúsculas.                                                                                                          |
| &9                                     | Permitir sólo números.                                                                                                                                                   |
| &A                                     | Permitir sólo letras mayúsculas.                                                                                                                                         |
| &a                                     | Permitir sólo letras (mayúsculas y minúsculas).                                                                                                                          |
| &@                                     | Permitir sólo caracteres alfanuméricos. No hay caracteres especiales.                                                                                                    |
| ~a##                                   | Abreviatura del nombre del estado (por ej., CA). Permite la entrada de dos letras, pero las convierte en mayúsculas.                                                     |
| !0&9##/##/##                           | Formato de entrada de fechas estándar. Mostrar ceros en los espacios de entrada. Permitir cualquier número.                                                              |
| !0&9 Día: ## Mes: ## Año: ##           | Time entry format. Mostrar ceros en los espacios de entrada. Permitir cualquier número. Limited to hours and minutes.                                                    |
| !0&9##:##                              | Formato de entrada de hora. Limitado a horas y minutos. Mostrar ceros en los espacios de entrada. Permitir cuatro números, separados por dos puntos.                     |
| !0&9## Horas ## Minutos ## Segundos    | Formato de entrada de hora. Mostrar ceros en los espacios de entrada. Permitir dos números antes de cada palabra.                                                        |
| !0&9Horas: ## Minutas: ## Segundos: ## | Formato de entrada de hora. Mostrar ceros en los espacios de entrada. Permitir dos números después de cada palabra.                                                      |
| !0&9##-##-##-##                        | Formato de número de teléfono local. Mostrar ceros en los espacios de entrada. Permitir cualquier número. Tres entradas, guión, cuatro entradas.                         |
| !_&9(###)!0###-####                    | Número de teléfono de larga distancia. Display underscores in first three entry spaces, zeros in remainder.                                                              |
| !0&9###-###-###                        | Número de teléfono de larga distancia. Mostrar ceros en los espacios de entrada. Permitir cualquier número. Tres entradas, guión, tres entradas, guión, cuatro entradas. |
| !0&9###-##-###                         | Número de la Seguridad Social. Mostrar ceros en los espacios de entrada. Permitir cualquier número.                                                                      |
| ~"A-Z;0-9; ;,;.;-"                     | Letras mayúsculas y puntuación. Permita sólo letras mayúsculas, números, espacios, comas, puntos y guiones.                                                              |
| &"a-z;0-9; ;,;.;-"                     | Letras mayúsculas y minúsculas y puntuación. Allow lowercase letters, numbers, spaces, commas, periods, and hyphens.                                                     |
| &"0-9;.;-"                             | Números. Sólo se permiten números, puntos decimales y guiones (signo menos).                                                                                             |

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles                                    |
| ----------- | -------------- | --------------------------------------------------- |
| entryFilter | string         | <li>Entry filter code</li> o <li>Nombre del filtro de entrada (los nombres de los filtros empiezan por &#124;)</li> |

#### Objetos soportados

[Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Hierarchical List](list_overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Focusable

When the **Focusable** property is enabled for an object, the object can have the focus (and can thus be activated by the keyboard for instance). It is outlined by a gray dotted line when it is selected — except when the [Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle) option has also been selected.

> An [input object](input_overview.md) is always focusable if it has the [Enterable](#enterable) property.

- ![](../assets/en/FormObjects/property_focusable1.png)<br/>Casilla de verificación muestra el foco cuando se selecciona

- ![](../assets/en/FormObjects/property_focusable2.png)<br/>La casilla de verificación está seleccionada pero no se puede mostrar el foco|

When the **Focusable** property is selected for a non-enterable object, the user can select, copy or even drag-and-drop the contents of the area.

#### Gramática JSON

| Nombre    | Tipos de datos | Valores posibles |
| --------- | -------------- | ---------------- |
| focusable | boolean        | true, false      |

#### Objetos soportados

[4D Write Pro areas](writeProArea_overview.md) - [Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Hierarchical List](list_overview.md) - [Input](input_overview.md) - [List Box](listbox_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Radio Button](radio_overview.md) - [Subform](subform_overview.md)

---

## Disposición del teclado

This property associates a specific keyboard layout to an [input object](input_overview.md). For example, in an international application, if a form contains a field whose contents must be entered in Greek characters, you can associate the "Greek" keyboard layout with this field. This way, during data entry, the keyboard configuration is automatically changed when this field has the focus.

Por defecto, el objeto utiliza la disposición actual del teclado.

> You can also set and get the keyboard dynamically using the `OBJECT SET KEYBOARD LAYOUT` and `OBJECT Get keyboard layout` commands.

#### Gramática JSON

| Nombre          | Tipos de datos | Valores posibles                                                               |
| --------------- | -------------- | ------------------------------------------------------------------------------ |
| keyboardDialect | text           | Código del lenguaje, por ejemplo "ar-ma" o "cs". Ver RFC3066, ISO639 e ISO3166 |

#### Objetos soportados

[4D Write Pro areas](writeProArea_overview.md) - [Input](input_overview.md)

---

## Multilínea

Esta propiedad está disponible para [objetos de entrada](input_overview.md) que contienen expresiones de tipo Texto y campos de tipo Alfa y Texto. Puede tener tres valores diferentes: Sí, No, Automático (por defecto).

#### Automático

- En las entradas de una línea, las palabras situadas al final de las líneas se truncan y no hay retornos de línea.
- En las entradas multilínea, 4D realiza retornos de línea automáticos:  
  ![](../assets/en/FormObjects/multilineAuto.png)

#### No

- En las entradas de una línea, las palabras situadas al final de las líneas se truncan y no hay retornos de línea.
- Nunca hay retornos de línea: el texto siempre se muestra en una sola línea. Si el campo o la variable Alfa o Texto contiene retornos de carro, el texto situado después del primer retorno de carro se elimina en cuanto se modifica el área:  
  ![](../assets/en/FormObjects/multilineNo.png)

#### Sí

Cuando se selecciona este valor, la propiedad es gestionada por la opción [Retorno de línea](properties_Display.md#wordwrap).

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles                                       |
| ---------- | -------------- | ------------------------------------------------------ |
| multilínea | text           | "yes", "no", "automatic" (por defecto si no se define) |

#### Objetos soportados

[Entrada](input_overview.md)

---

## Marcador

4D puede mostrar texto con marcador de posición en los campos de sus formularios.

Placeholder text appears as watermark text in a field, supplying a help tip, indication or example for the data to be entered. Este texto desaparece tan pronto como el usuario ingrese un carácter en el área:

![](../assets/en/FormObjects/property_placeholder.png)

The placeholder text is displayed again if the contents of the field is erased.

Se puede mostrar un marcador de posición para los siguientes tipos de datos:

- cadena (text o alpha)
- date and time when the **Blank if null** property is enabled.

You can use an XLIFF reference in the ":xliff:resname" form as a placeholder, for example:

 :xliff:PH_Lastname

You only pass the reference in the "Placeholder" field; it is not possible to combine a reference with static text.
> You can also set and get the placeholder text by programming using the [OBJECT SET PLACEHOLDER](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-PLACEHOLDER.301-4128243.en.html) and [OBJECT Get placeholder](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-Get-placeholder.301-4128249.en.html) commands.

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles                                                    |
| ----------- | -------------- | ------------------------------------------------------------------- |
| placeholder | string         | Texto a mostrar (en gris) cuando el objeto no contiene ningún valor |

#### Objetos soportados

[Combo Box](comboBox_overview.md) - [Área de entrada](input_overview.md)

#### Ver también

[Mensaje de ayuda](properties_Help.md)

---

## Selección siempre visible

This property keeps the selection visible within the object after it has lost the focus. This makes it easier to implement interfaces that allow the text style to be modified (see [Multi-style](properties_Text.md#multi-style)).

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles |
| ------------- | -------------- | ---------------- |
| showSelection | boolean        | true, false      |

#### Objetos soportados

[4D Write Pro areas](writeProArea_overview.md) - [Input](input_overview.md)

---

## Atajo

This property allows setting special meaning keys (keyboard shortcuts) for [buttons](button_overview.md), [radio buttons](radio_overview.md), and [checkboxes](checkbox_overview.md). They allow the user to use the control using the keyboard instead of having to use the mouse.

You can configure this option by clicking the [...] button in the Shortcuts property in the Property List.

![](../assets/en/FormObjects/property_shortcut.png)
> También puede asignar un acceso directo a un comando de menú personalizado. If there is a conflict between two shortcuts, the active object has priority. For more information about associating shortcuts with menus, refer to [Setting menu properties](https://doc.4d.com/4Dv17R5/4D/17-R5/Setting-menu-properties.300-4163525.en.html).

To view a list of all the shortcuts used in the 4D Design environment, see the [Shortcuts Page](https://doc.4d.com/4Dv17R5/4D/17-R5/Shortcuts-Page.300-4163701.en.html) in the Preferences dialog box.

#### Gramática JSON

| Nombre          | Tipos de datos | Valores posibles                                   |
| --------------- | -------------- | -------------------------------------------------- |
| shortcutAccel   | boolean        | true, false (Windows: Ctrl/macOS: Command)         |
| shortcutAlt     | boolean        | true, false                                        |
| shortcutCommand | boolean        | true, false                                        |
| shortcutControl | boolean        | true, false (macOS: Control)                       |
| shortcutShift   | boolean        | true, false                                        |
|                 |                |                                                    |
| shortcutKey     | string         | <li>toda llave de caracter: "a", "b"...</li><li>[F1]" -> "[F15]", "[Return]", "[Enter]", "[Backspace]", "[Tab]", "[Esc]", "[Del]", "[Home]", "[End]", "[Help]", "[Page up]", "[Page down]", "[left arrow]", "[right arrow]", "[up arrow]", "[down arrow]"</li> |

#### Objetos soportados

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Picture Button](pictureButton_overview.md) - [Radio Button](radio_overview.md)

---

## Edición con un solo clic

Permite el paso directo al modo de edición en list boxes.

When this option is enabled, list box cells switch to edit mode after a single user click, regardless of whether or not this area of the list box was selected beforehand. Note that this option allows cells to be edited even when the list box [selection mode](properties_ListBox.md#selection-mode) is set to "None".

When this option is not enabled, users must first select the cell row and then click on a cell in order to edit its contents.

#### Gramática JSON

| Nombre          | Tipos de datos | Valores posibles |
| --------------- | -------------- | ---------------- |
| singleClickEdit | boolean        | true, false      |

#### Objetos soportados

[List Box](listbox_overview.md)
