---
id: propertiesAction
title: Ação
---

---

## Arrastável

Controlar se e como o usuário pode arrastar o objeto. Por defeito, não é permitida qualquer operação de arrastamento.

Estão disponíveis dois modos de arrastamento:

- **Custom**: In this mode, any drag operation performed on the object triggers the `On Begin Drag` form event in the context of the object. Em seguida, a ação de arrastamento é gerida através de um método.\
  In custom mode, basically the whole drag-and-drop operation is handled by the programmer. This mode lets you implement any interface based upon drag-on-drop, including interfaces that do not necessarily transport data, but can perform any action like opening files or triggering a calculation. This mode is based upon a combination of specific properties, events, and commands from the `Pasteboard` theme.
- **Automatic**: In this mode, 4D **copies** text or pictures directly from the form object. It can then be used in the same 4D area, between two 4D areas, or between 4D and another application. For example, automatic drag (and drop) lets you copy a value between two fields without using programming:\
  ![](../assets/en/FormObjects/property_automaticDragDrop.png)\
  ![](../assets/en/FormObjects/property_automaticDragDrop2.png)
  In this mode, the `On Begin Drag` form event is NOT generated. If you want to "force" the use of the custom drag while automatic drag is enabled, hold down the **Alt** (Windows) or **Option** (macOS) key during the action. Esta opção não está disponível para as imagens.

For more information, refer to [Drag and Drop](https://doc.4d.com/4Dv18/4D/18/Drag-and-Drop.300-4505037.en.html) in the _4D Language Reference_ manual.

#### Gramática JSON

| Nome     | Tipo de dados | Valores possíveis                                                                                  |
| -------- | ------------- | -------------------------------------------------------------------------------------------------- |
| dragging | text          | "none" (por padrão), "custom", "automatic" (exceto list box) |

#### Objectos suportados

[4D Write Pro areas](writeProArea_overview.md) - [Input](input_overview.md) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Plug-in Area](pluginArea_overview.md#overview)

#### Veja também

[Droppable](#droppable)

---

## Soltável

Control whether and how the object can be the destination of a drag and drop operation.

Há dois modos de soltar em 4D:

- **Custom**: In this mode, any drop operation performed on the object triggers the `On Drag Over` and `On Drop` form events in the context of the object. Em seguida, a ação de largar é gerida através de um método.\
  In custom mode, basically the whole drag-and-drop operation is handled by the programmer. This mode lets you implement any interface based upon drag-on-drop, including interfaces that do not necessarily transport data, but can perform any action like opening files or triggering a calculation. This mode is based upon a combination of specific properties, events, and commands from the `Pasteboard` theme.
- **Automatic**: In this mode, 4D automatically manages — if possible — the insertion of dragged data of the text or picture type that is dropped onto the object (the data are pasted into the object). The `On Drag Over` and `On Drop` form events are NOT generated. On the other hand, the `On After Edit` (during the drop) and `On Data Change` (when the object loses the focus) events are generated.

For more information, refer to [Drag and Drop](https://doc.4d.com/4Dv18/4D/18/Drag-and-Drop.300-4505037.en.html) in the _4D Language Reference_ manual.

#### Gramática JSON

| Nome     | Tipo de dados | Valores possíveis                                                                                  |
| -------- | ------------- | -------------------------------------------------------------------------------------------------- |
| dropping | text          | "none" (por padrão), "custom", "automatic" (exceto list box) |

#### Objectos suportados

[4D Write Pro areas](writeProArea_overview.md) - [Button](button_overview.md) - [Input](input_overview.md) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Plug-in Area](pluginArea_overview.md#overview)

#### Veja também

[Draggable](#draggable)

---

## Executar método objecto

When this option is enabled, the object method is executed with the `On Data Change` event _at the same moment_ the user changes the value of the indicator. When the option is disabled, the method is executed _after_ the modification.

#### Gramática JSON

| Nome                | Tipo de dados | Valores possíveis |
| ------------------- | ------------- | ----------------- |
| continuousExecution | boolean       | true, false       |

#### Objectos suportados

[Progress bar](progressIndicator.md) - [Ruler](ruler.md) - [Stepper](stepper.md)

---

## Métodos

Referência de um método ligado ao objeto. Object methods generally "manage" the object while the form is displayed or printed. You do not call an object method—4D calls it automatically when an event involves the object to which the object method is attached.

São suportados vários tipos de referências de métodos:

- a standard object method file path, i.e. that uses the following pattern:\
  `ObjectMethods/objectName.4dm`\
  ... where `objectName` is the actual [object name](properties_Object.md#object-name). This type of reference indicates that the method file is located at the default location ("sources/forms/_formName_/ObjectMethods/"). In this case, 4D automatically handles the object method when operations are executed on the form object (renaming, duplication, copy/paste...)

- a project method name: name of an existing project method without file extension, i.e.:
  `myMethod`
  In this case, 4D does not provide automatic support for object operations.

- a custom method file path including the .4dm extension, e.g.:\
  `../../CustomMethods/myMethod.4dm`
  You can also use a filesystem:\
  `/RESOURCES/Buttons/bOK.4dm`
  In this case, 4D does not provide automatic support for object operations.

#### Gramática JSON

| Nome   | Tipo de dados | Valores possíveis                                                                       |
| ------ | ------------- | --------------------------------------------------------------------------------------- |
| method | text          | Caminho de ficheiro padrão ou personalizado do método objeto, ou nome do método projeto |

#### Objectos suportados

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Forms](FormEditor/forms.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Web Area](webArea_overview.md#overview)

---

## Linhas móveis

`Array type list boxes`

Autoriza a deslocação de linhas durante a execução. Esta opção é selecionada por defeito. It is not available for [selection type list boxes](listbox_overview.md#selection-list-boxes) nor for [list boxes in hierarchical mode](properties_Hierarchy.md#hierarchical-list-box).

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis |
| ----------- | ------------- | ----------------- |
| movableRows | boolean       | true, false       |

#### Objectos suportados

[List Box](listbox_overview.md#overview)

---

## Multi-seleccionável

Allows the selection of multiple records/options in a [hierarchical list](list_overview.md).

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis            |
| ------------- | ------------- | ---------------------------- |
| selectionMode | text          | "multiple", "single", "none" |

#### Objectos suportados

[Hierarchical List](list_overview.md)

---

## Ordenável

Allows sorting column data by clicking a [listbox](listbox_overview.md) header. Esta opção é selecionada por defeito. Os arrays de tipo imagem (colunas) não podem ser ordenadas com esta funcionalidade.

In list boxes based on a selection of records, the standard sort function is available only:

- When the data source is _Current Selection_,
- With columns associated with fields (of the Alpha, Number, Date, Time or Boolean type).

In other cases (list boxes based on named selections, columns associated with expressions), the standard sort function is not available. A standard list box sort changes the order of the current selection in the database. However, the highlighted records and the current record are not changed. A standard sort synchronizes all the columns of the list box, including calculated columns.

#### Gramática JSON

| Nome     | Tipo de dados | Valores possíveis |
| -------- | ------------- | ----------------- |
| sortable | boolean       | true, false       |

#### Objectos suportados

[List Box](listbox_overview.md)

---

## Ação padrão

Typical activities to be performed by active objects (_e.g._, letting the user accept, cancel, or delete records, move between records or from page to page in a multi-page form, etc.) have been predefined by 4D as standard actions. They are described in detail in the [Standard actions](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html) section of the _Design Reference_.

You can assign both a standard action and a project method to an object. In this case, the standard action is usually executed after the method and 4D uses this action to enable/disable the object according to the current context. When an object is deactivated, the associated project method cannot be executed.

You can also set this property using the `OBJECT SET ACTION` command.

#### Gramática JSON

| Nome   | Tipo de dados | Valores possíveis                                                                                                                |
| ------ | ------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| action | string        | The name of a [valid standard action](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html). |

#### Objectos suportados

[Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [List Box](listbox_overview.md) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Tab control](tabControl.md)
