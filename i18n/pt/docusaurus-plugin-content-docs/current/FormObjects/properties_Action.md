---
id: propertiesAction
title: Ação
---

---

## Arrastável

Controlar se e como o usuário pode arrastar o objeto. Por defeito, não é permitida qualquer operação de arrastamento.

Estão disponíveis dois modos de arrastamento:

- **Personalizado**: en este modo, toda operación de arrastrar realizada en el objeto dispara el evento formulario `On Begin Drag` en el contexto del objeto. Em seguida, a ação de arrastamento é gerida através de um método.\
  In custom mode, basically the whole drag-and-drop operation is handled by the programmer. This mode lets you implement any interface based upon drag-on-drop, including interfaces that do not necessarily transport data, but can perform any action like opening files or triggering a calculation. Este modo se basa en una combinación de propiedades, eventos y comandos específicos del tema `Portapapeles`.
- **Automático**: en este modo, 4D **copia** el texto o las imágenes directamente desde el objeto formulario. It can then be used in the same 4D area, between two 4D areas, or between 4D and another application. For example, automatic drag (and drop) lets you copy a value between two fields without using programming:\
  ![](../assets/en/FormObjects/property_automaticDragDrop.png)\
  ![](../assets/en/FormObjects/property_automaticDragDrop2.png)
  In this mode, the `On Begin Drag` form event is NOT generated. Si quiere "forzar" el uso del arrastre personalizado mientras está activado el arrastre automático, mantenga presionada la tecla **Alt** (Windows) o **Opción** (macOS) durante la acción. Esta opção não está disponível para as imagens.

Para más información, consulte [Arrastrar y soltar](https://doc.4d.com/4Dv18/4D/18/Drag-and-Drop.300-4505037.en.html) en el manual _Lenguaje 4D_.

#### Gramática JSON

| Nome     | Tipo de dados | Valores possíveis                                                                                  |
| -------- | ------------- | -------------------------------------------------------------------------------------------------- |
| dragging | text          | "none" (por padrão), "custom", "automatic" (exceto list box) |

#### Objectos suportados

[Áreas 4D Write Pro](writeProArea_overview.md) - [Entrada](input_overview.md) - [Lista jerárquica](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Área de Plug-in](pluginArea_overview.md#overview)

#### Veja também

[Droppable](#droppable)

---

## Soltável

Control whether and how the object can be the destination of a drag and drop operation.

Há dois modos de soltar em 4D:

- **Personalizado**: en este modo, cualquier operación de soltar realizada en el objeto activa los eventos formulario `On Drag Over` y `On Drop` en el contexto del objeto. Em seguida, a ação de largar é gerida através de um método.\
  In custom mode, basically the whole drag-and-drop operation is handled by the programmer. This mode lets you implement any interface based upon drag-on-drop, including interfaces that do not necessarily transport data, but can perform any action like opening files or triggering a calculation. Este modo se basa en una combinación de propiedades, eventos y comandos específicos del tema `Portapapeles`.
- **Automático**: en este modo, 4D gestiona automáticamente, si es posible, la inserción de los datos arrastrados de tipo texto o imagen que se sueltan sobre el objeto (los datos se pegan en el objeto). Los eventos `On Drag Over` y `On Drop` NO se generan. Por otra parte, se generan los eventos `On After Edit` (durante el soltar) y `On Data Change` (cuando el objeto pierde el foco).

Para más información, consulte [Arrastrar y soltar](https://doc.4d.com/4Dv18/4D/18/Drag-and-Drop.300-4505037.en.html) en el manual _Lenguaje 4D_.

#### Gramática JSON

| Nome     | Tipo de dados | Valores possíveis                                                                                  |
| -------- | ------------- | -------------------------------------------------------------------------------------------------- |
| dropping | text          | "none" (por padrão), "custom", "automatic" (exceto list box) |

#### Objectos suportados

[Áreas 4D Write Pro](writeProArea_overview.md) - [Botón](button_overview.md) - [Entrada](input_overview.md) - [Lista jerárquica](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Área de Plug-in](pluginArea_overview.md#overview)

#### Veja também

[Draggable](#draggable)

---

## Executar método objecto

Cuando esta opción está activada, el método objeto se ejecuta con el evento `On Data Change` _en el mismo momento_ en que el usuario cambia el valor del indicador. Cuando la opción está desactivada, el método se ejecuta _tras_ la modificación.

#### Gramática JSON

| Nome                | Tipo de dados | Valores possíveis |
| ------------------- | ------------- | ----------------- |
| continuousExecution | boolean       | true, false       |

#### Objectos suportados

[Indicador de progreso](progressIndicator.md) - [Regla](ruler.md) - [Stepper](stepper.md)

---

## Métodos

Referência de um método ligado ao objeto. Object methods generally "manage" the object while the form is displayed or printed. You do not call an object method—4D calls it automatically when an event involves the object to which the object method is attached.

São suportados vários tipos de referências de métodos:

- a standard object method file path, i.e. that uses the following pattern:\
  `ObjectMethods/objectName.4dm`\
  ... where `objectName` is the actual [object name](properties_Object.md#object-name). Este tipo de referencia indica que el archivo del método se encuentra en la ubicación por defecto ("sources/forms/_formName_/ObjectMethods/"). In this case, 4D automatically handles the object method when operations are executed on the form object (renaming, duplication, copy/paste...)

- a project method name: name of an existing project method without file extension, i.e.: `myMethod` In this case, 4D does not provide automatic support for object operations.

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

Autoriza a deslocação de linhas durante a execução. Esta opção é selecionada por defeito. No está disponible para los [list box de tipo selección](listbox_overview.md#selection-list-boxes) ni para los [list box en modo jerárquico](properties_Hierarchy.md#hierarchical-list-box).

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis |
| ----------- | ------------- | ----------------- |
| movableRows | boolean       | true, false       |

#### Objectos suportados

[List Box](listbox_overview.md#overview)

---

## Multi-seleccionável

Permite la selección de múltiples registros/opciones en una [lista jerárquica](list_overview.md).

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis            |
| ------------- | ------------- | ---------------------------- |
| selectionMode | text          | "multiple", "single", "none" |

#### Objectos suportados

[Hierarchical List](list_overview.md)

---

## Ordenável

Permite ordenar los datos de las columnas haciendo clic en un encabezado [listbox](listbox_overview.md). Esta opção é selecionada por defeito. Os arrays de tipo imagem (colunas) não podem ser ordenadas com esta funcionalidade.

In list boxes based on a selection of records, the standard sort function is available only:

- Cuando la fuente de datos es _Selección actual_,
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

Typical activities to be performed by active objects (_e.g._, letting the user accept, cancel, or delete records, move between records or from page to page in a multi-page form, etc.) have been predefined by 4D as standard actions. Se describen con detalle en la sección [Acciones estándar](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html) de la _manual de Diseño_.

You can assign both a standard action and a project method to an object. In this case, the standard action is usually executed after the method and 4D uses this action to enable/disable the object according to the current context. When an object is deactivated, the associated project method cannot be executed.

También puede definir esta propiedad utilizando el comando `OBJECT SET ACTION`.

#### Gramática JSON

| Nome   | Tipo de dados | Valores possíveis                                                                                                                    |
| ------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| action | string        | El nombre de una [acción estándar válida](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html). |

#### Objectos suportados

[Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [List Box](listbox_overview.md) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Tab control](tabControl.md)
