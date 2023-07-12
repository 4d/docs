---
id: propertiesEntry
title: Entrada
---

## Verificação automática da ortografia

4D includes an integrated and customizable spell-check utility. Text type [inputs](input_overview.md) can be checked, as well as [4D Write Pro](writeProArea_overview.md) documents.

The Auto Spellcheck property activates the spell-check for each object. When used, a spell-check is automatically performed during data entry. You can also execute the `SPELL CHECKING` 4D language command for each object to be checked.

#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis |
| ---------- | ------------- | ----------------- |
| spellcheck | boolean       | true, false       |

#### Objectos suportados

[4D Write Pro area](writeProArea_overview.md) - [Input](input_overview.md)

---

## Menu de contexto

Permite ao usuário aceder a um menu de contexto padrão no objeto quando o formulário é executado.

For a picture type [input](input_overview.md), in addition to standard editing commands (Cut, Copy, Paste and Clear), the menu contains the **Import...** command, which can be used to import a picture stored in a file, as well as the **Save as...** command, which can be used to save the picture to disk. The menu can also be used to modify the display format of the picture: the **Truncated non-centered**, **Scaled to fit** and **Scaled to fit centered prop.** options are provided. The modification of the [display format](properties_Display#picture-format) using this menu is temporary; it is not saved with the record.

For a [multi-style](properties_Text.md#multi-style) text type [input](input_overview.md), in addition to standard editing commands, the context menu provides the following commands:

- **Fonts...**: displays the font system dialog box
- **Recent fonts**: displays the names of recent fonts selected during the session. The list can store up to 10 fonts (beyond that, the last font used replaces the oldest). By default, this list is empty and the option is not displayed. You can manage this list using the `SET RECENT FONTS` and `FONT LIST` commands.
- comandos para as modificações de estilo suportadas: tipo de letra, tamanho, estilo, cor e cor de fundo. When the user modifies a style attribute via this pop-up menu, 4D generates the `On After Edit` form event.

For a [Web Area](webArea_overview.md), the contents of the menu depend of the rendering engine of the platform. It is possible to control access to the context menu via the [`WA SET PREFERENCE`](https://doc.4d.com/4Dv17R6/4D/17-R6/WA-SET-PREFERENCE.301-4310780.en.html) command.

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis                                   |
| ----------- | ------------- | --------------------------------------------------- |
| contextMenu | string        | "automatic" (utilizado se estiver em falta), "none" |

#### Objectos suportados

[Input](input_overview.md) - [Web Area](webArea_overview.md) - [4D Write Pro areas](writeProArea_overview.md)

---

## Enterable

The Enterable attribute indicates whether users can enter values into the object.

Objects are enterable by default. If you want to make a field or an object non-enterable for that form, you can disable the Enterable property for the object. Um objeto não inserível apenas exibe dados. You control the data by methods that use the field or variable name. You can still use the `On Clicked`, `On Double Clicked`, `On Drag Over`, `On Drop`, `On Getting Focus` and `On Losing Focus` form events with non-enterable objects. This makes it easier to manage custom context menus and lets you design interfaces where you can drag-and-drop and select non-enterable variables.

When this property is disabled, any pop-up menus associated with a list box column via a list are disabled.

#### Gramática JSON

| Nome      | Tipo de dados | Valores possíveis |
| --------- | ------------- | ----------------- |
| enterable | boolean       | true, false       |

#### Objectos suportados

[4D Write Pro areas](writeProArea_overview.md) - [Hierarchical List](list_overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [Progress Bar](progressIndicator.md) - [Ruler](ruler.md) - [Stepper](stepper.md)

---

## Filtro de entrada

An entry filter controls exactly what the user can type during data entry. Unlike [required lists](properties_RangeOfValues.md#required-list) for example, entry filters operate on a character-by-character basis. For example, if a part number always consists of two letters followed by three digits, you can use an entry filter to restrict the user to that pattern. You can even control the particular letters and numbers.

Um filtro de entrada funciona apenas durante a introdução de dados. It has no effect on data display after the user deselects the object. In general, you use entry filters and [display formats](properties_Display.md) together. The filter constrains data entry and the format ensures proper display of the value after data entry.

During data entry, an entry filter evaluates each character as it is typed. If the user attempts to type an invalid character (a number instead of a letter, for example), 4D simply does not accept it. The null character remains unchanged until the user types a valid character.

Entry filters can also be used to display required formatting characters so that the user need not enter them. For example, an American telephone number consists of a three-digit area code, followed by a seven-digit number that is broken up into two groups of three and four digits, respectively. A display format can be used to enclose the area code in parentheses and display a dash after the third digit of the telephone number. When such a format is used, the user does not need to enter the parentheses or the dashes.

### Definição de um filtro de entrada

Most of the time, you can use one of the [built-in filters](#default-entry-filters) of 4D for what you need; however, you can also create and use custom filters:

- you can directly enter a filter definition string
- or you can enter the name of an entry filter created in the Filters editor in the Toolbox. The names of custom filters you create begin with a vertical bar (|).

For information about creating entry filters, see [Filter and format codes](https://doc.4d.com/4Dv18/4D/18/Filter-and-format-codes.300-4575706.en.html).

### Filtros de entrada predefinidos

Here is a table that explains each of the entry filter choices in the Entry Filter drop-down list:

| Filtro de entrada             | Descrição                                                                                                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ~A                            | Permite quaisquer letras, mas converte-as em maiúsculas.                                                                                                      |
| &9                            | Permitir apenas números.                                                                                                                                      |
| &A                            | Permitir apenas letras maiúsculas.                                                                                                                            |
| &a                            | Permitir apenas letras (maiúsculas e minúsculas).                                                                                                             |
| &@                            | Permitir apenas caracteres alfanuméricos. Sem caracteres especiais.                                                                                           |
| ~a##                          | Abreviatura do nome do estado (por exemplo, CA). Permite duas letras quaisquer, mas converte-as em maiúsculas.                                                |
| !0&9##/##/##                  | Formato de entrada de data standard. Display zeros in entry spaces. Permitir quaisquer números.                                                               |
| !0&9 Dia: ## Mês: ## Ano: ##  | Time entry format. Display zeros in entry spaces. Permitir quaisquer números. Limited to hours and minutes.                                                   |
| !0&9##:##                     | Formato do registo de horas. Limited to hours and minutes. Display zeros in entry spaces. São permitidos quatro números quaisquer, separados por dois pontos. |
| !0&9## Hrs ## Mins ## Secs    | Formato do registo de horas. Display zeros in entry spaces. Permitir dois números antes de cada palavra.                                                      |
| !0&9Hrs: ## Mins: ## Secs: ## | Formato do registo de horas. Display zeros in entry spaces. Permitir dois números quaisquer depois de cada palavra.                                           |
| !0&9##-##-##-##               | Local telephone number format. Display zeros in entry spaces. Permitir qualquer número. Três entradas, hífen, quatro entradas.                                |
| !_&9(###)!0###-####           | Long distance telephone number. Display underscores in first three entry spaces, zeros in remainder.                                                          |
| !0&9###-###-###               | Long distance telephone number. Display zeros in entry spaces. Permitir qualquer número. Three entries, hyphen, three entries, hyphen, four entries.          |
| !0&9###-##-####               | Número de segurança social. Display zeros in entry spaces. Permitir quaisquer números.                                                                        |
| ~"A-Z;0-9; ;,;.;-"            | Letras maiúsculas e pontuação. Allow only capital letters, numbers, spaces, commas, periods, and hyphens.                                                     |
| &"a-z;0-9; ;,;.;-"            | Letras maiúsculas e minúsculas e pontuação. Allow lowercase letters, numbers, spaces, commas, periods, and hyphens.                                           |
| &"0-9;.;-"                    | Números. Allow only numbers, decimal points, and hyphens (minus sign).                                                                                        |

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis                                    |
| ----------- | ------------- | ---------------------------------------------------- |
| entryFilter | string        | <li>Entry filter code or</li> ou <li>Entry filter code or Entry filter name (filter names start with &#124; )</li> |

#### Objectos suportados

[Combo Box](comboBox_overview.md) - [Hierarchical List](list_overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Focável

When the **Focusable** property is enabled for an object, the object can have the focus (and can thus be activated by the keyboard for instance). It is outlined by a gray dotted line when it is selected — except when the [Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle) option has also been selected.

> An [input object](input_overview.md) is always focusable if it has the [Enterable](#enterable) property.

- ![](../assets/en/FormObjects/property_focusable1.png)<br/>A caixa de verificação mostra o foco quando selecionada

- ![](../assets/en/FormObjects/property_focusable2.png)<br/>A caixa de verificação está selecionada mas não pode mostrar o foco|

When the **Focusable** property is selected for a non-enterable object, the user can select, copy or even drag-and-drop the contents of the area.

#### Gramática JSON

| Nome    | Tipo de dados | Valores possíveis |
| ------- | ------------- | ----------------- |
| focável | boolean       | true, false       |

#### Objectos suportados

[4D Write Pro areas](writeProArea_overview.md) - [Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Hierarchical List](list_overview.md) - [Input](input_overview.md) - [List Box](listbox_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Radio Button](radio_overview.md) - [Subform](subform_overview.md)

---

## Layout do teclado

This property associates a specific keyboard layout to an [input object](input_overview.md). For example, in an international application, if a form contains a field whose contents must be entered in Greek characters, you can associate the "Greek" keyboard layout with this field. This way, during data entry, the keyboard configuration is automatically changed when this field has the focus.

By default, the object uses the current keyboard layout.

> You can also set and get the keyboard dynamically using the `OBJECT SET KEYBOARD LAYOUT` and `OBJECT Get keyboard layout` commands.

#### Gramática JSON

| Nome            | Tipo de dados | Valores possíveis                                                                  |
| --------------- | ------------- | ---------------------------------------------------------------------------------- |
| keyboardDialect | text          | Código da linguajem, por exemplo, "ar-ma" ou "cs". See RFC3066, ISO639 and ISO3166 |

#### Objectos suportados

[4D Write Pro areas](writeProArea_overview.md) - [Input](input_overview.md)

---

## Multilinha

This property is available for [inputs objects](input_overview.md) containing expressions of the Text type and fields of the Alpha and Text type. It can have three different values: Yes, No, Automatic (default).

#### Automático

- In single-line inputs, words located at the end of lines are truncated and there are no line returns.
- In multiline inputs, 4D carries out automatic line returns:  
  ![](../assets/en/FormObjects/multilineAuto.png)

#### Não

- In single-line inputs, words located at the end of lines are truncated and there are no line returns.
- There are never line returns: the text is always displayed on a single row. If the Alpha or Text field or variable contains carriage returns, the text located after the first carriage return is removed as soon as the area is modified:  
  ![](../assets/en/FormObjects/multilineNo.png)

#### Sim

When this value is selected, the property is managed by the [Wordwrap](properties_Display.md#wordwrap) option.

#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis                                 |
| ---------- | ------------- | ------------------------------------------------- |
| multilinha | text          | "yes", "no", "automatic" (default if not defined) |

#### Objectos suportados

[Entrada](input_overview.md)

---

## Placeholder (valores provisórios)

4D can display placeholder text in the fields of your forms.

Placeholder text appears as watermark text in a field, supplying a help tip, indication or example for the data to be entered. This text disappears as soon as the user enters a character in the area:

![](../assets/en/FormObjects/property_placeholder.png)

The placeholder text is displayed again if the contents of the field is erased.

A placeholder can be displayed for the following types of data:

- string (text or alpha)
- date and time when the **Blank if null** property is enabled.

You can use an XLIFF reference in the ":xliff:resname" form as a placeholder, for example:

 :xliff:PH_Lastname

You only pass the reference in the "Placeholder" field; it is not possible to combine a reference with static text.
> You can also set and get the placeholder text by programming using the [OBJECT SET PLACEHOLDER](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-PLACEHOLDER.301-4128243.en.html) and [OBJECT Get placeholder](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-Get-placeholder.301-4128249.en.html) commands.

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis                                                            |
| ----------- | ------------- | ---------------------------------------------------------------------------- |
| placeholder | string        | Text to be displayed (grayed out) when the object does not contain any value |

#### Objectos suportados

[Combo Box](comboBox_overview.md) - [Input](input_overview.md)

#### Veja também

[Dica de ajuda](properties_Help.md)

---

## Selecção sempre visível

This property keeps the selection visible within the object after it has lost the focus. This makes it easier to implement interfaces that allow the text style to be modified (see [Multi-style](properties_Text.md#multi-style)).

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis |
| ------------- | ------------- | ----------------- |
| showSelection | boolean       | true, false       |

#### Objectos suportados

[4D Write Pro areas](writeProArea_overview.md) - [Input](input_overview.md)

---

## Atalho

This property allows setting special meaning keys (keyboard shortcuts) for [buttons](button_overview.md), [radio buttons](radio_overview.md), and [checkboxes](checkbox_overview.md). They allow the user to use the control using the keyboard instead of having to use the mouse.

You can configure this option by clicking the [...] button in the Shortcuts property in the Property List.

![](../assets/en/FormObjects/property_shortcut.png)
> You can also assign a shortcut to a custom menu command. If there is a conflict between two shortcuts, the active object has priority. For more information about associating shortcuts with menus, refer to [Setting menu properties](https://doc.4d.com/4Dv17R5/4D/17-R5/Setting-menu-properties.300-4163525.en.html).

To view a list of all the shortcuts used in the 4D Design environment, see the [Shortcuts Page](https://doc.4d.com/4Dv17R5/4D/17-R5/Shortcuts-Page.300-4163701.en.html) in the Preferences dialog box.

#### Gramática JSON

| Nome            | Tipo de dados | Valores possíveis                                  |
| --------------- | ------------- | -------------------------------------------------- |
| shortcutAccel   | boolean       | true, false (Windows: Ctrl/macOS: Command)         |
| shortcutAlt     | boolean       | true, false                                        |
| shortcutCommand | boolean       | true, false                                        |
| shortcutControl | boolean       | true, false (macOS: Control)                       |
| shortcutShift   | boolean       | true, false                                        |
|                 |               |                                                    |
| shortcutKey     | string        | <li>any character key: "a", "b"...</li><li>[F1]" -> "[F15]", "[Return]", "[Enter]", "[Backspace]", "[Tab]", "[Esc]", "[Del]", "[Home]", "[End]", "[Help]", "[Page up]", "[Page down]", "[left arrow]", "[right arrow]", "[up arrow]", "[down arrow]"</li> |

#### Objectos suportados

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Picture Button](pictureButton_overview.md) - [Radio Button](radio_overview.md)

---

## Editar com um clique

Enables direct passage to edit mode in list boxes.

When this option is enabled, list box cells switch to edit mode after a single user click, regardless of whether or not this area of the list box was selected beforehand. Note that this option allows cells to be edited even when the list box [selection mode](properties_ListBox.md#selection-mode) is set to "None".

When this option is not enabled, users must first select the cell row and then click on a cell in order to edit its contents.

#### Gramática JSON

| Nome            | Tipo de dados | Valores possíveis |
| --------------- | ------------- | ----------------- |
| singleClickEdit | boolean       | true, false       |

#### Objectos suportados

[List Box](listbox_overview.md)
