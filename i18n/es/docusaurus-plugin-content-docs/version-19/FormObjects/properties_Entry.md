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

[Área 4D Write Pro](writeProArea_overview.md) - [Área de entrada](input_overview.md)

---

## Menú contextual

Allows the user access to a standard context menu in the object when the form is executed.

For a picture type [input](input_overview.md), in addition to standard editing commands (Cut, Copy, Paste and Clear), the menu contains the **Import...** command, which can be used to import a picture stored in a file, as well as the **Save as...** command, which can be used to save the picture to disk. The menu can also be used to modify the display format of the picture: the **Truncated non-centered**, **Scaled to fit** and **Scaled to fit centered prop.** options are provided. La modificación del formato de visualización [](properties_Display#picture-format) utilizando este menú es temporal; no se guarda con el registro.

For a [multi-style](properties_Text.md#multi-style) text type [input](input_overview.md), in addition to standard editing commands, the context menu provides the following commands:

- **Fuentes...**: muestra el diálogo del sistema de fuentes
- **Fuentes recientes**: muestra los nombres de las fuentes recientes seleccionadas durante la sesión. La lista puede almacenar hasta 10 fuentes (más allá, la última fuente utilizada sustituye a la más antigua). Por defecto, esta lista está vacía y la opción no se muestra. Puede gestionar esta lista utilizando los comandos `SET RECENT FONTS` y `FONT LIST`.
- comandos para las modificaciones de estilo soportados: fuente, tamaño, estilo, color y color de fondo. Cuando el usuario modifica un atributo de estilo a través de este menú emergente, 4D genera el evento de formulario `On After Edit`.

Para un [Área Web](webArea_overview.md), el contenido del menú depende del motor de renderizado de la plataforma. Es posible controlar el acceso al menú contextual mediante el comando [`WA SET PREFERENCE`](https://doc.4d.com/4Dv17R6/4D/17-R6/WA-SET-PREFERENCE.301-4310780.en.html).

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

Un filtro de entrada sólo funciona durante la entrada de datos. No tiene efecto en la visualización de los datos después de que el usuario deseleccione el objeto. En general, se utilizan conjuntamente los filtros de entrada con los [formatos de visualización](properties_Display.md). El filtro restringe la entrada de datos y el formato asegura la correcta visualización del valor tras la entrada de datos.

Durante la entrada de datos, un filtro de entrada evalúa cada caracter a medida que se escribe. Si el usuario intenta escribir un caracter no válido (un número en lugar de una letra, por ejemplo), 4D simplemente no lo acepta. El caracter null permanece sin cambios hasta que el usuario escribe un caracter válido.

Los filtros de entrada también pueden utilizarse para mostrar los caracteres de formato necesarios para que el usuario no tenga que introducirlos. Por ejemplo, un número de teléfono estadounidense consta de un código de área de tres dígitos, seguido de un número de siete dígitos que se divide en dos grupos de tres y cuatro dígitos, respectivamente. Se puede utilizar un formato de visualización para encerrar el código de área entre paréntesis y para mostrar un guión después del tercer dígito del número de teléfono. Cuando se utiliza este formato, el usuario no necesita introducir los paréntesis ni los guiones.

### Definir un filtro de entrada

La mayoría de las veces, puede utilizar uno de los [filtros integrados](#default-entry-filters) de 4D para lo que necesite; sin embargo, también puede crear y utilizar filtros personalizados:

- puede introducir directamente una cadena de definición de filtro
- o puede introducir el nombre de un filtro de entrada creado en el editor de filtros de la caja de herramientas. Los nombres de los filtros personalizados que se crean comienzan con una barra vertical (|).

For information about creating entry filters, see [Filter and format codes](https://doc.4d.com/4Dv18/4D/18/Filter-and-format-codes.300-4575706.en.html).

### Filtros de entrada por defecto

A continuación se presenta una tabla que explica cada una de las opciones de filtro de entrada en la lista desplegable Filtro de entrada:

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
| !_&9(###)!0###-####                    | Número de teléfono de larga distancia. Mostrar guiones bajos en los tres primeros espacios de entrada, ceros en el resto.                                                |
| !0&9###-###-###                        | Número de teléfono de larga distancia. Mostrar ceros en los espacios de entrada. Permitir cualquier número. Tres entradas, guión, tres entradas, guión, cuatro entradas. |
| !0&9###-##-###                         | Número de la Seguridad Social. Mostrar ceros en los espacios de entrada. Permitir cualquier número.                                                                      |
| ~"A-Z;0-9; ;,;.;-"                     | Letras mayúsculas y puntuación. Permita sólo letras mayúsculas, números, espacios, comas, puntos y guiones.                                                              |
| &"a-z;0-9; ;,;.;-"                     | Letras mayúsculas y minúsculas y puntuación. Permite letras minúsculas, números, espacios, comas, puntos y guiones.                                                      |
| &"0-9;.;-"                             | Números. Sólo se permiten números, puntos decimales y guiones (signo menos).                                                                                             |

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles                                   |
| ----------- | -------------- | -------------------------------------------------- |
| entryFilter | string         | <li>Código de filtro de entrada o </li><li>Nombre del filtro de entrada (los nombres de los filtros empiezan por &#124;)</li> |

#### Objetos soportados

[Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [ Lista jerárquica](list_overview.md) - [Área de entrada](input_overview.md) - [Columna List Box](listbox_overview.md#list-box-columns)

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

This property associates a specific keyboard layout to an [input object](input_overview.md). For example, in an international application, if a form contains a field whose contents must be entered in Greek characters, you can associate the "Greek" keyboard layout with this field. De este modo, durante la entrada de datos, la configuración del teclado cambia automáticamente cuando este campo tiene el foco.

Por defecto, el objeto utiliza la disposición actual del teclado.

> You can also set and get the keyboard dynamically using the `OBJECT SET KEYBOARD LAYOUT` and `OBJECT Get keyboard layout` commands.

#### Gramática JSON

| Nombre          | Tipos de datos | Valores posibles                                                               |
| --------------- | -------------- | ------------------------------------------------------------------------------ |
| keyboardDialect | text           | Código del lenguaje, por ejemplo "ar-ma" o "cs". Ver RFC3066, ISO639 e ISO3166 |

#### Objetos soportados

[Áreas 4D Write Pro](writeProArea_overview.md) - [Área de entrada](input_overview.md)

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

El texto del marcador de posición vuelve a aparecer si se borra el contenido del campo.

Se puede mostrar un marcador de posición para los siguientes tipos de datos:

- cadena (text o alpha)
- date and time when the **Blank if null** property is enabled.

Puede utilizar una referencia XLIFF en la forma ":xliff:resname" como marcador de posición, por ejemplo:

 :xliff:PH_Lastname

Sólo se pasa la referencia en el campo "Marcador de posición"; no es posible combinar una referencia con texto estático.
> También puede definir y obtener el texto del marcador de posición por programación utilizando los comandos [OBJECT SET PLACEHOLDER](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-PLACEHOLDER.301-4128243.en.html) y [OBJECT Get placeholder](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-Get-placeholder.301-4128249.en.html).

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

Esta propiedad mantiene la selección visible dentro del objeto después de haber perdido el foco. Esto facilita la implementación de interfaces que permiten modificar el estilo del texto (ver [Multi estilo](properties_Text.md#multi-style)).

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles |
| ------------- | -------------- | ---------------- |
| showSelection | boolean        | true, false      |

#### Objetos soportados

[Áreas 4D Write Pro](writeProArea_overview.md) - [Área de entrada](input_overview.md)

---

## Atajo

Esta propiedad permite definir teclas de significado especial (atajos de teclado) para los [botones](button_overview.md), los [botones radio](radio_overview.md) y las [casillas de selección](checkbox_overview.md). Permiten al usuario utilizar el control utilizando el teclado en lugar de tener que utilizar el ratón.

Puede configurar esta opción haciendo clic en el botón [...] de la propiedad Accesos directos de la Lista de propiedades.

![](../assets/en/FormObjects/property_shortcut.png)
> También puede asignar un acceso directo a un comando de menú personalizado. Si hay un conflicto entre dos accesos directos, el objeto activo tiene prioridad. Para más información sobre cómo asociar accesos directos a los menús, consulte [Configuración de las propiedades de los menús](https://doc.4d.com/4Dv17R5/4D/17-R5/Setting-menu-properties.300-4163525.en.html).

Para ver una lista de todos los métodos abreviados utilizados en el entorno Diseño de 4D, consulte la página [Shortcuts Page](https://doc.4d.com/4Dv17R5/4D/17-R5/Shortcuts-Page.300-4163701.en.html) en la caja de diálogo Preferencias.

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

Cuando esta opción está activada, las celdas del list box cambian al modo de edición tras un solo clic del usuario, independientemente de si esta área del list box estaba seleccionada de antemano o no. Tenga en cuenta que esta opción permite editar celdas incluso cuando el list box [modo selección](properties_ListBox.md#selection-mode) está en "Ninguno".

Cuando esta opción no está activa, los usuarios deben seleccionar primero la línea de celdas y luego, hacer clic en una celda para editar su contenido.

#### Gramática JSON

| Nombre          | Tipos de datos | Valores posibles |
| --------------- | -------------- | ---------------- |
| singleClickEdit | boolean        | true, false      |

#### Objetos soportados

[List Box](listbox_overview.md)
