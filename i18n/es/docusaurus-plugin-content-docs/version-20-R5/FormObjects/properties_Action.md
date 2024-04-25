---
id: propertiesAction
title: Acción
---

---

## Arrastrable

Controle si el usuario puede arrastrar el objeto y cómo. Por defecto, no se permite ninguna operación de arrastre.

Hay dos modos de arrastrar disponibles:

- **Custom**: In this mode, any drag operation performed on the object triggers the `On Begin Drag` form event in the context of the object. A continuación, gestiona la acción arrastrar utilizando un método.\
  En el modo personalizado, básicamente toda la operación de arrastrar y soltar es realizada por el programador. Este modo le permite implementar cualquier interfaz basada en la función de arrastrar y soltar, incluidas las interfaces que no necesariamente transportan datos, sino que pueden realizar cualquier acción como abrir archivos o activar un cálculo. This mode is based upon a combination of specific properties, events, and commands from the `Pasteboard` theme.
- **Automatic**: In this mode, 4D **copies** text or pictures directly from the form object. Puede utilizarse en la misma área 4D, entre dos áreas 4D o entre 4D y otra aplicación. For example, automatic drag (and drop) lets you copy a value between two fields without using programming:\
  ![](../assets/en/FormObjects/property_automaticDragDrop.png)\
  ![](../assets/en/FormObjects/property_automaticDragDrop2.png)
  In this mode, the `On Begin Drag` form event is NOT generated. If you want to "force" the use of the custom drag while automatic drag is enabled, hold down the **Alt** (Windows) or **Option** (macOS) key during the action. Esta opción no está disponible para las imágenes.

For more information, refer to [Drag and Drop](https://doc.4d.com/4Dv18/4D/18/Drag-and-Drop.300-4505037.en.html) in the _4D Language Reference_ manual.

#### Gramática JSON

| Nombre   | Tipos de datos | Valores posibles                                                                                        |
| -------- | -------------- | ------------------------------------------------------------------------------------------------------- |
| dragging | text           | "none" (por defecto), "custom", "automatic" (excluyendo list box) |

#### Objetos soportados

[4D Write Pro areas](writeProArea_overview.md) - [Input](input_overview.md) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Plug-in Area](pluginArea_overview.md#overview)

#### Ver también

[Droppable](#droppable)

---

## Soltable

Controla si el objeto puede ser el destino de una operación de arrastrar y soltar y cómo hacerlo.

Hay dos modos de soltar disponibles:

- **Custom**: In this mode, any drop operation performed on the object triggers the `On Drag Over` and `On Drop` form events in the context of the object. A continuación, gestiona la acción soltar utilizando un método.\
  En el modo personalizado, básicamente toda la operación de arrastrar y soltar es realizada por el programador. Este modo le permite implementar cualquier interfaz basada en la función de arrastrar y soltar, incluidas las interfaces que no necesariamente transportan datos, sino que pueden realizar cualquier acción como abrir archivos o activar un cálculo. This mode is based upon a combination of specific properties, events, and commands from the `Pasteboard` theme.
- **Automatic**: In this mode, 4D automatically manages — if possible — the insertion of dragged data of the text or picture type that is dropped onto the object (the data are pasted into the object). The `On Drag Over` and `On Drop` form events are NOT generated. On the other hand, the `On After Edit` (during the drop) and `On Data Change` (when the object loses the focus) events are generated.

For more information, refer to [Drag and Drop](https://doc.4d.com/4Dv18/4D/18/Drag-and-Drop.300-4505037.en.html) in the _4D Language Reference_ manual.

#### Gramática JSON

| Nombre   | Tipos de datos | Valores posibles                                                                                        |
| -------- | -------------- | ------------------------------------------------------------------------------------------------------- |
| dropping | text           | "none" (por defecto), "custom", "automatic" (excluyendo list box) |

#### Objetos soportados

[4D Write Pro areas](writeProArea_overview.md) - [Button](button_overview.md) - [Input](input_overview.md) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Plug-in Area](pluginArea_overview.md#overview)

#### Ver también

[Draggable](#draggable)

---

## Ejecutar método objeto

When this option is enabled, the object method is executed with the `On Data Change` event _at the same moment_ the user changes the value of the indicator. When the option is disabled, the method is executed _after_ the modification.

#### Gramática JSON

| Nombre              | Tipos de datos | Valores posibles |
| ------------------- | -------------- | ---------------- |
| continuousExecution | boolean        | true, false      |

#### Objetos soportados

[Progress bar](progressIndicator.md) - [Ruler](ruler.md) - [Stepper](stepper.md)

---

## Método

Referencia de un método adjunto al objeto. Los métodos de objeto generalmente "gestionan" el objeto mientras el formulario se muestra o se imprime. No llame a un método objeto, 4D lo llama automáticamente cuando un evento implica el objeto al que el método objeto está asociado.

Se soportan varios tipos de referencias de métodos:

- a standard object method file path, i.e. that uses the following pattern:\
  `ObjectMethods/objectName.4dm`\
  ... where `objectName` is the actual [object name](properties_Object.md#object-name). This type of reference indicates that the method file is located at the default location ("sources/forms/_formName_/ObjectMethods/"). En este caso, 4D maneja automáticamente el método objeto cuando se ejecutan operaciones en el objeto formulario (renombrar, duplicar, copiar/pegar...)

- a project method name: name of an existing project method without file extension, i.e.:
  `myMethod`
  In this case, 4D does not provide automatic support for object operations.

- a custom method file path including the .4dm extension, e.g.:\
  `../../CustomMethods/myMethod.4dm`
  You can also use a filesystem:\
  `/RESOURCES/Buttons/bOK.4dm`
  In this case, 4D does not provide automatic support for object operations.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles                                                                        |
| ------ | -------------- | --------------------------------------------------------------------------------------- |
| method | text           | Ruta de archivo estándar o personalizada del método objeto o nombre del método proyecto |

#### Objetos soportados

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Forms](FormEditor/forms.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Web Area](webArea_overview.md#overview)

---

## Líneas desplazables

`Array type list boxes`

Autoriza el desplazamiento de líneas durante la ejecución. Esta opción está seleccionada por defecto. It is not available for [selection type list boxes](listbox_overview.md#selection-list-boxes) nor for [list boxes in hierarchical mode](properties_Hierarchy.md#hierarchical-list-box).

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles |
| ----------- | -------------- | ---------------- |
| movableRows | boolean        | true, false      |

#### Objetos soportados

[List Box](listbox_overview.md#overview)

---

## Multi-seleccionable

Allows the selection of multiple records/options in a [hierarchical list](list_overview.md).

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles             |
| ------------- | -------------- | ---------------------------- |
| selectionMode | text           | "multiple", "single", "none" |

#### Objetos soportados

[Hierarchical List](list_overview.md)

---

## Ordenable

Allows sorting column data by clicking a [listbox](listbox_overview.md) header. Esta opción está seleccionada por defecto. Los arrays de tipo imagen (columnas) no pueden ordenarse utilizando esta función.

En los list box basados en una selección de registros, sólo está disponible la función de ordenación estándar:

- When the data source is _Current Selection_,
- Con columnas asociadas a campos (de tipo Alfa, Número, Fecha, Hora o Booleano).

En otros casos (list box basados en selecciones temporales, columnas asociadas a expresiones), la función de ordenación estándar no está disponible. Una ordenación estándar del list box cambia el orden de la selección actual en la base de datos. Sin embargo, los registros resaltados y el registro actual no se modifican. Una ordenación estándar sincroniza todas las columnas del list box, incluidas las columnas calculadas.

#### Gramática JSON

| Nombre   | Tipos de datos | Valores posibles |
| -------- | -------------- | ---------------- |
| sortable | boolean        | true, false      |

#### Objetos soportados

[List Box](listbox_overview.md)

---

## Acción estándar

Typical activities to be performed by active objects (_e.g._, letting the user accept, cancel, or delete records, move between records or from page to page in a multi-page form, etc.) have been predefined by 4D as standard actions. They are described in detail in the [Standard actions](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html) section of the _Design Reference_.

Puede asignar al mismo tiempo una acción estándar y un método proyecto de un objeto. En este caso, la acción estándar suele ejecutarse después del método y 4D utiliza esta acción para activar/desactivar el objeto según el contexto actual. Cuando se desactiva un objeto, no se puede ejecutar el método proyecto asociado.

You can also set this property using the `OBJECT SET ACTION` command.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles                                                                                                                 |
| ------ | -------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| action | string         | The name of a [valid standard action](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html). |

#### Objetos soportados

[Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [List Box](listbox_overview.md) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Tab control](tabControl.md)
