---
id: propertiesEntry
title: Entrada
---

## Verificação automática da ortografia

4D inclui funcionalidades de verificação ortográfica integrado e personalizável. O tipo de texto [entradas](input_overview.md) pode ser verificado, assim como os documentos [4D Write Pro](writeProArea_overview.md).

A propriedade Auto Spellcheck ativa a verificação ortográfica para cada objeto. Quando usada, a verificação ortográfica é realizada automaticamente durante a entrada de dados. Você também pode executar o comando de linguagem 4D `SPELL CHECKING` para cada objeto a ser verificado.

#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis |
| ---------- | ------------- | ----------------- |
| spellcheck | boolean       | true, false       |

#### Objectos suportados

[Área 4D Write Pro](writeProArea_overview.md) - [Área de entrada](input_overview.md)

---

## Menu de contexto

Permite ao usuário aceder a um menu de contexto padrão no objeto quando o formulário é executado.

Para uma imagem do tipo [entrada](input_overview.md), além dos comandos de edição padrão (Recortar, Copiar, Colar e Limpar), o menu contém o comando **Importar...**, que pode ser usado para importar uma imagem armazenada em um arquivo, bem como o comando **Salvar como...**, que pode ser usado para salvar a imagem no disco. O menu também pode ser usado para modificar o formato de exibição da imagem: são oferecidas as opções **Truncado não centralizado**, **Escalonado para caber** e **Escalonado para caber na imagem centralizada**. A modificação do [formato de exibição](properties_Display.md#picture-format) usando esse menu é temporária; ela não é salva com o registro.

For a [multi-style](properties_Text.md#multi-style) text type [input](input_overview.md), in addition to standard editing commands, the context menu provides the following commands:

- **Fuentes...**: muestra el diálogo del sistema de fuentes
- **Fuentes recientes**: muestra los nombres de las fuentes recientes seleccionadas durante la sesión. The list can store up to 10 fonts (beyond that, the last font used replaces the oldest). Por defeito, esta lista está vazia e a opção não é apresentada. Puede gestionar esta lista utilizando los comandos `SET RECENT FONTS` y `FONT LIST`.
- comandos para as modificações de estilo suportadas: tipo de letra, tamanho, estilo, cor e cor de fundo.
  Cuando el usuario modifica un atributo de estilo a través de este menú emergente, 4D genera el evento de formulario `On After Edit`.

Para un [Área Web](webArea_overview.md), el contenido del menú depende del motor de renderizado de la plataforma. It is possible to control access to the context menu via the [`WA SET PREFERENCE`](../commands-legacy/wa-set-preference.md) command.

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis                                                      |
| ----------- | ------------- | ---------------------------------------------------------------------- |
| contextMenu | string        | "automatic" (utilizado se estiver em falta), "none" |

#### Objectos suportados

[Entrada](input_overview.md) - [Área Web](webArea_overview.md) - [Áreas 4D Write Pro](writeProArea_overview.md)

---

## Enterable

The Enterable attribute indicates whether users can enter values into the object.

Os objectos são inseríveis por defeito. If you want to make a field or an object non-enterable for that form, you can disable the Enterable property for the object. Um objeto não inserível apenas exibe dados. Você controla os dados por meio de métodos que usam o nome do campo ou da variável. Puede seguir utilizando los eventos de formulario `On Clicked`, `On Double Clicked`, `On Drag Over`, `On Drop`, `On Getting Focus` y `On Losing Focus` con objetos no editables. Isto facilita a gerenciamento de menus de contexto personalizados e permite-lhe conceber interfaces onde pode arrastar e largar e selecionar variáveis não introduzíveis.

When this property is disabled, any pop-up menus associated with a list box column via a list are disabled.

#### Gramática JSON

| Nome      | Tipo de dados | Valores possíveis |
| --------- | ------------- | ----------------- |
| enterable | boolean       | true, false       |

#### Objectos suportados

[4D Write Pro areas](writeProArea_overview.md) - [Check Box](checkbox_overview.md) - [Hierarchical List](list_overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [Progress Bar](progressIndicator.md) - [Ruler](ruler.md) - [Stepper](stepper.md)

---

## Filtro de entrada

Um filtro de entrada controla exatamente o que o usuário pode digitar durante a entrada de dados. A diferencia de las [listas obligatorias ](properties_RangeOfValues.md#required-list), por ejemplo, los filtros de entrada funcionan caracter por caracter. For example, if a part number always consists of two letters followed by three digits, you can use an entry filter to restrict the user to that pattern. Pode até controlar as letras e os números específicos.

Um filtro de entrada funciona apenas durante a introdução de dados. Não tem nenhum efeito na apresentação de dados após o usuário ter anulado a seleção do objeto. En general, se utilizan conjuntamente los filtros de entrada con los [formatos de visualización](properties_Display.md). The filter constrains data entry and the format ensures proper display of the value after data entry.

Durante a entrada de dados, um filtro de entrada avalia cada caractere conforme é digitado. If the user attempts to type an invalid character (a number instead of a letter, for example), 4D simply does not accept it. The null character remains unchanged until the user types a valid character.

Entry filters can also be used to display required formatting characters so that the user need not enter them. For example, an American telephone number consists of a three-digit area code, followed by a seven-digit number that is broken up into two groups of three and four digits, respectively. A display format can be used to enclose the area code in parentheses and display a dash after the third digit of the telephone number. When such a format is used, the user does not need to enter the parentheses or the dashes.

### Definição de um filtro de entrada

La mayoría de las veces, puede utilizar uno de los [filtros integrados](#default-entry-filters) de 4D para lo que necesite; sin embargo, también puede crear y utilizar filtros personalizados:

- pode introduzir diretamente uma cadeia de definição de filtro
- or you can enter the name of an entry filter created in the Filters editor in the Toolbox. Os nomes dos filtros personalizados que criar começam com uma barra vertical (|).

Para obtener información sobre la creación de filtros de entrada, consulte [Códigos de filtro y formato](https://doc.4d.com/4Dv18/4D/18/Filter-and-format-codes.300-4575706.en.html).

### Filtros de entrada predefinidos

Here is a table that explains each of the entry filter choices in the Entry Filter drop-down list:

| Filtro de entrada                                                                                          | Descrição                                                                                                                                                                                                                             |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ~A                                                                                         | Permite quaisquer letras, mas converte-as em maiúsculas.                                                                                                                                                              |
| &9                                                                                     | Permitir apenas números.                                                                                                                                                                                              |
| &A                                                                                     | Permitir apenas letras maiúsculas.                                                                                                                                                                                    |
| &a                                                                                     | Permitir apenas letras (maiúsculas e minúsculas).                                                                                                                                                  |
| &@                                                                        | Permitir apenas caracteres alfanuméricos. Sem caracteres especiais.                                                                                                                                   |
| ~a##                                                                                       | Abreviatura do nome do estado (por exemplo, CA). Permite duas letras quaisquer, mas converte-as em maiúsculas.                                                                     |
| !0&9##/##/##                                                                           | Formato de entrada de data standard. Apresentar zeros nos espaços de entrada. Permitir quaisquer números.                                                                             |
| !0&9 Día: ## Mes: ## Año: ##           | Time entry format. Apresentar zeros nos espaços de entrada. Permitir quaisquer números. Limited to hours and minutes.                                                 |
| !0&9##:##                                                              | Formato do registo de horas. Limitado a horas e minutos. Apresentar zeros nos espaços de entrada. São permitidos quatro números quaisquer, separados por dois pontos. |
| !0&9## Horas ## Minutos ## Segundos                                                    | Formato do registo de horas. Apresentar zeros nos espaços de entrada. Permitir dois números antes de cada palavra.                                                                    |
| !0&9Horas: ## Minutas: ## Segundos: ## | Formato do registo de horas. Apresentar zeros nos espaços de entrada. Permitir dois números quaisquer depois de cada palavra.                                                         |
| !0&9##-##-##-##                                                                        | Formato do número de telefone local. Apresentar zeros nos espaços de entrada. Permitir qualquer número. Três entradas, hífen, quatro entradas.                        |
| !_&9(###)!0###-####                            | Número de telefone interurbano. Mostrar sublinhados nos três primeiros espaços de entrada, zeros nos restantes.                                                                                       |
| !0&9###-###-###                                                                        | Número de telefone interurbano. Apresentar zeros nos espaços de entrada. Permitir qualquer número. Três entradas, hífen, três entradas, hífen, quatro entradas.       |
| !0&9###-##-###                                                                         | Número de segurança social. Apresentar zeros nos espaços de entrada. Permitir quaisquer números.                                                                                      |
| ~"A-Z;0-9; ;,;.;-"                                                         | Letras maiúsculas e pontuação. Permita apenas letras maiúsculas, números, espaços, vírgulas, pontos e hifens.                                                                                         |
| &"a-z;0-9; ;,;.;-"                                                     | Letras maiúsculas e minúsculas e pontuação. Permitir letras minúsculas, números, espaços, vírgulas, pontos e hífens.                                                                                  |
| &"0-9;.;-"                                                             | Números. Só são permitidos números, pontos decimais e hífenes (sinal de menos).                                                                                                    |

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis                                                                          |
| ----------- | ------------- | ------------------------------------------------------------------------------------------ |
| entryFilter | string        | <li>Entry filter code</li> or <li>Entry filter name (filter names start with &#124; )</li> |

#### Objectos suportados

[Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [ Lista jerárquica](list_overview.md) - [Área de entrada](input_overview.md) - [Columna List Box](listbox_overview.md#list-box-columns)

---

## Focável

Cuando la propiedad **Enfocable** está activada para un objeto, el objeto puede tener el foco (y por lo tanto puede ser activado por el teclado por ejemplo). Cuando está seleccionado, aparece delimitado por una línea de puntos gris, excepto si también se ha seleccionado la opción [Ocultar rectángulo de enfoque](properties_Appearance.md#hide-focus-rectangle).

> Un [objeto de entrada](input_overview.md) es siempre enfocable si tiene la propiedad [Editable](#enterable).

- ![](../assets/en/FormObjects/property_focusable1.png)<br/>Check box shows focus when selected

- ![](../assets/en/FormObjects/property_focusable2.png)<br/>Check box is selected but cannot show focus|

Cuando se selecciona la propiedad **Enfocable** para un objeto no editable, el usuario puede seleccionar, copiar o incluso arrastrar y soltar el contenido del área.

#### Gramática JSON

| Nome    | Tipo de dados | Valores possíveis |
| ------- | ------------- | ----------------- |
| focável | boolean       | true, false       |

#### Objectos suportados

[4D Write Pro areas](writeProArea_overview.md) - [Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Hierarchical List](list_overview.md) - [Input](input_overview.md) - [List Box](listbox_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Radio Button](radio_overview.md) - [Subform](subform_overview.md)

---

## Layout do teclado

Esta propiedad asocia una distribución de teclado específica a un [objeto de entrada](input_overview.md). For example, in an international application, if a form contains a field whose contents must be entered in Greek characters, you can associate the "Greek" keyboard layout with this field. This way, during data entry, the keyboard configuration is automatically changed when this field has the focus.

Por padrão, o objeto utiliza a disposição atual do teclado.

> También puede configurar y obtener el teclado dinámicamente utilizando los comandos `OBJECT SET KEYBOARD LAYOUT` y `OBJECT Get keyboard layout`.

#### Gramática JSON

| Nome            | Tipo de dados | Valores possíveis                                                                                |
| --------------- | ------------- | ------------------------------------------------------------------------------------------------ |
| keyboardDialect | text          | Código da linguajem, por exemplo, "ar-ma" ou "cs". Ver RFC3066, ISO639 e ISO3166 |

#### Objectos suportados

[Áreas 4D Write Pro](writeProArea_overview.md) - [Área de entrada](input_overview.md)

---

## Multilinha

Esta propiedad está disponible para [objetos de entrada](input_overview.md) que contienen expresiones de tipo Texto y campos de tipo Alfa y Texto. Pode ter três valores diferentes: Sim, Não, Automático (padrão).

#### Automático

- In single-line inputs, words located at the end of lines are truncated and there are no line returns.
- In multiline inputs, 4D carries out automatic line returns:\
  ![](../assets/en/FormObjects/multilineAuto.png)

#### Não

- In single-line inputs, words located at the end of lines are truncated and there are no line returns.
- Nunca há retornos de linha: o texto é sempre exibido em uma única linha. If the Alpha or Text field or variable contains carriage returns, the text located after the first carriage return is removed as soon as the area is modified:\
  ![](../assets/en/FormObjects/multilineNo.png)

#### Sim

Cuando se selecciona este valor, la propiedad es gestionada por la opción [Retorno de línea](properties_Display.md#wordwrap).

#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis                                                        |
| ---------- | ------------- | ------------------------------------------------------------------------ |
| multilinha | text          | "yes", "no", "automatic" (padrão se não for definido) |

#### Objectos suportados

[Entrada](input_overview.md)

---

## Placeholder (valores provisórios)

4D pode exibir texto com marcador de posição nos campos de seus formulários.

Placeholder text appears as watermark text in a field, supplying a help tip, indication or example for the data to be entered. This text disappears as soon as the user enters a character in the area:

![](../assets/en/FormObjects/property_placeholder.png)

O texto do marcador de posição é apresentado novamente se o conteúdo do campo for apagado.

Pode ser apresentado um marcador de posição para os seguintes tipos de dados:

- string (text ou alpha)
- fecha y hora en que se activa la propiedad **Blank if null**.

You can use an XLIFF reference in the ":xliff:resname" form as a placeholder, for example:

:xliff:PH_Lastname

You only pass the reference in the "Placeholder" field; it is not possible to combine a reference with static text.

> You can also set and get the placeholder text by programming using the [`OBJECT SET PLACEHOLDER`](../commands-legacy/object-set-placeholder.md) and [`OBJECT Get placeholder`](../commands-legacy/object-get-placeholder.md) commands.

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis                                                                               |
| ----------- | ------------- | ----------------------------------------------------------------------------------------------- |
| placeholder | string        | Text to be displayed (grayed out) when the object does not contain any value |

#### Objectos suportados

[Combo Box](comboBox_overview.md) - [Área de entrada](input_overview.md)

#### Veja também

[Dica de ajuda](properties_Help.md)

---

## Selecção sempre visível

This property keeps the selection visible within the object after it has lost the focus. Esto facilita la implementación de interfaces que permiten modificar el estilo del texto (ver [Multi estilo](properties_Text.md#multi-style)).

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis |
| ------------- | ------------- | ----------------- |
| showSelection | boolean       | true, false       |

#### Objectos suportados

[Áreas 4D Write Pro](writeProArea_overview.md) - [Área de entrada](input_overview.md)

---

## Atalho

Esta propriedade permite a configuração de chaves especiais (atalhos de teclado) para [botões](button_overview.md), [botões rádio](radio_overview.md), e [caixas de seleção](checkbox_overview.md). They allow the user to use the control using the keyboard instead of having to use the mouse.

You can configure this option by clicking the [...] button in the Shortcuts property in the Property List.

![](../assets/en/FormObjects/property_shortcut.png)

> Também é possível atribuir um atalho a um comando de menu personalizado. Se houver um conflito entre dois atalhos, o objeto ativo terá prioridade. For more information about associating shortcuts with menus, refer to [Setting menu properties](../Menus/properties.md).

To view a list of all the shortcuts used in the 4D Design environment, see the [Shortcuts Page](../Preferences/shortcuts.md) in the Preferences dialog box.

#### Gramática JSON

| Nome            | Tipo de dados | Valores possíveis                                                                                                                                                                                                                                         |
| --------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| shortcutAccel   | boolean       | true, false (Windows: Ctrl/macOS: Command)                                                                                                                                                             |
| shortcutAlt     | boolean       | true, false                                                                                                                                                                                                                                               |
| shortcutCommand | boolean       | true, false                                                                                                                                                                                                                                               |
| shortcutControl | boolean       | true, false (macOS: Control)                                                                                                                                                                                           |
| shortcutShift   | boolean       | true, false                                                                                                                                                                                                                                               |
|                 |               |                                                                                                                                                                                                                                                           |
| shortcutKey     | string        | <li>any character key: "a", "b"...</li><li>[F1]" -> "[F15]", "[Return]", "[Enter]", "[Backspace]", "[Tab]", "[Esc]", "[Del]", "[Home]", "[End]", "[Help]", "[Page up]", "[Page down]", "[left arrow]", "[right arrow]", "[up arrow]", "[down arrow]"</li> |

#### Objectos suportados

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Picture Button](pictureButton_overview.md) - [Radio Button](radio_overview.md)

---

## Editar com um clique

Permite a passagem direta para o modo de edição em list boxes.

When this option is enabled, list box cells switch to edit mode after a single user click, regardless of whether or not this area of the list box was selected beforehand. Tenga en cuenta que esta opción permite editar celdas incluso cuando el list box [modo selección](properties_ListBox.md#selection-mode) está en "Ninguno".

When this option is not enabled, users must first select the cell row and then click on a cell in order to edit its contents.

#### Gramática JSON

| Nome            | Tipo de dados | Valores possíveis |
| --------------- | ------------- | ----------------- |
| singleClickEdit | boolean       | true, false       |

#### Objectos suportados

[List Box](listbox_overview.md)
