---
id: comboBoxOverview
title: Combo Box
---

Un combo box es similar a una [lista desplegable](dropdownList_Overview.md#overview), excepto que acepta texto introducido desde el teclado y tiene opciones adicionales.

![](../assets/en/FormObjects/combo_box.png)

Em outros aspectos, você deve tratar uma combo box como uma área editável que usa seu array ou uma lista de escolha como um conjunto de valores padrão.

## Gestão do combo boxes

Use the [`On Data Change`](Events/onDataChange.md) event to manage entries into the enterable area, as you would for any input form object.

Un combo box se inicializa exactamente igual que una [lista desplegable](dropdownList_Overview.md#overview): utilizando un objeto, un array o una lista de selección.

### Utilização de um objecto

> Esta funcionalidade só está disponível em projectos 4D.

Un [objeto](Concepts/dt_object.md) encapsulando una [colección](../Concepts/dt_collection.md) puede utilizarse como fuente de datos de un combo box. O objeto deve conter as seguintes propriedades:

| Propriedade    | Tipo             | Descrição                                                                                                                                                                                                                                                         |
| -------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `valores`      | Collection       | Obrigatório - Coleção de valores escalares. Todos os valores devem ser do mesmo tipo. Supported types:<li>strings</li><li>numbers</li><li>dates</li><li>times</li>If empty or not defined, the combo box is empty |
| `currentValue` | igual a Colecção | Texto introduzido pelo usuário                                                                                                                                                                                                                                    |

Se o objeto contiver outras propriedades, estas são ignoradas.

Cuando el usuario introduce texto en el combo box, la propiedad `currentValue` del objeto obtiene el texto introducido.

### Usar um array

Consulte **Utilización de un array** en la [página de la lista desplegable](dropdownList_Overview.md#using-an-array) para obtener información sobre cómo inicializar el array.

Um combo box é iniciado em exatamente da mesma forma que uma lista drop down Se o usuário digitar texto em uma combo box, preenche o 0imo elemento do array.

### Utilizar uma lista de seleção

If you want to use a combo box to manage the values of an input area (listed field or variable), 4D lets you reference the field or variable directly as the form object's data source. Isso facilita gerenciar variáveis/campos listados.

> Se usar uma lista hierárquica, só o primeiro nível é mostrado e pode ser selecionado.

Para asociar un combo box a un campo o variable, basta con introducir el nombre del campo o variable directamente en [Variable o Expresión](properties_Object.md#variable-or-expression) del objeto formulario en la Lista de Propiedades.

When the form is executed, 4D automatically manages the combo box during input or display: when a user chooses a value, it is saved in the field; this field value is shown in the combo box when the form is displayed:

Para más información, consulte **Utilizar una opción** en la [página lista desplegable](dropdownList_Overview.md#using-a-choice-list).

## Opções

Objetos do tipo combo box aceitam duas opções específicas referentes a listas de escolhas associadas com elas:

- [Inserción automática](properties_DataSource.md#automatic-insertion): permite añadir automáticamente un valor a la fuente de datos cuando un usuario introduce un valor que no se encuentra en la lista asociada al combo box.
- [Exclusión](properties_RangeOfValues.md#excluded-list) (lista de valores excluidos): permite establecer una lista cuyos valores no pueden introducirse en el combo box. Se um valor excluído for digitado, não será aceito e uma mensagem de erro é exibido.

> > Associating a [list of required values](properties_RangeOfValues.md#required-list) is not available for combo boxes. En una interfaz, si un objeto debe proponer una lista finita de valores requeridos, entonces debe utilizar un objeto [lista desplegable](dropdownList_Overview.md#overview).

## Propriedades compatíveis

[Alpha Format](properties_Display.md#alpha-format) - [Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Choice List](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Date Format](properties_Display.md#date-format) - [Expression Type](properties_Object.md#expression-type) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Time Format](properties_Display.md#time-format) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)
