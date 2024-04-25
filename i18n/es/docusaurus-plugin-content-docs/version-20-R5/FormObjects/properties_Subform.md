---
id: propertiesSubform
title: Subformulario
---

---

## Autorizar la eliminación

Especifica si el usuario puede eliminar subregistros en un subformulario listado.

#### Gramática JSON

| Nombre          | Tipos de datos | Valores posibles                                                   |
| --------------- | -------------- | ------------------------------------------------------------------ |
| deletableInList | boolean        | true, false (por defecto: true) |

#### Objetos soportados

[Subform](subform_overview.md)

---

## Formulario detallado

Esta propiedad se utiliza para declarar el formulario detallado que se utilizará en el subformulario. Puede ser:

- un widget, es decir, un subformulario de tipo página dotado de funciones específicas. In this case, the [list subform](#list-form) and [Source](#source) properties must be empty or not present.\
  You can select a component form name when it is published in the component.

> You can generate [components](Concepts/components.md) providing additional functionalities through subforms.

- the detail form to associate a with the [list subform](#list-form). El formulario detallado puede utilizarse para introducir o ver los subregistros. Generalmente contiene más información que el subformulario lista. Naturalmente, el formulario detallado debe pertenecer a la misma tabla que el subformulario. Normalmente se utiliza un formulario de salida como formulario lista y un formulario de entrada como formulario detallado. Si no especifica el formulario a utilizar para la entrada de la página completa, 4D utiliza automáticamente el formato de entrada por defecto de la tabla.

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles                                                                                                                                                                                                       |
| ---------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| detailForm | string         | Nombre (cadena) de la tabla o formulario proyecto, una ruta POSIX (cadena) a un archivo .json que describa el formulario, o un objeto que describa el formulario |

#### Objetos soportados

[Subform](subform_overview.md)

---

## Doble clic en línea vacía

Acción a realizar en caso de doble clic en una línea vacía de un subformulario listado. Las siguientes opciones están disponibles:

- <strong x-id="1">No hacer nada</strong> (por defecto): hacer doble clic en una línea no desencadena ninguna acción automática.
- Añadir registro: crea un nuevo registro en el subformulario y cambia al modo edición. The record will be created directly in the list if the [Enterable in List](#enterable-in-list) property is enabled. Otherwise, it will be created in page mode, in the [detail form](#detail-form) associated with the subform.

#### Gramática JSON

| Nombre                       | Tipos de datos | Valores posibles                  |
| ---------------------------- | -------------- | --------------------------------- |
| doubleClickInEmptyAreaAction | string         | "addSubrecord" o "" to do nothing |

#### Objetos soportados

[Subform](subform_overview.md)

#### Ver también

[Double click on row](#double-click-on-row)

---

## Doble clic en línea

`Sub-formularios lista`

Define la acción a realizar cuando un usuario haga doble clic en una línea en un subformulario lista. Las opciones disponibles son:

- **Do nothing** (default): Double-clicking a row does not trigger any automatic action.
- **Edit Record**: Double-clicking a row displays the corresponding record in the [detail form defined for the list subform](#detail-form). El registro se abre en modo de lectura-escritura para que pueda ser modificado.
- **Display Record**: Identical to the previous action, except that the record is opened in read-only mode so it cannot be modified.

Regardless of the action selected/chosen, the `On Double clicked` form event is generated.

For the last two actions, the On `Open Detail` form event is also generated. The `On Close Detail` is then generated when a record displayed in the detail form associated with the list box is about to be closed (regardless of whether or not the record was modified).

#### Gramática JSON

| Nombre                 | Tipos de datos | Valores posibles                    |
| ---------------------- | -------------- | ----------------------------------- |
| doubleClickInRowAction | string         | "editSubrecord", "displaySubrecord" |

#### Objetos soportados

[Subform](subform_overview.md)

#### Ver también

[Double click on empty row](#double-click-on-empty-row)

---

## Editable en lista

When a list subform has this property enabled, the user can modify record data directly in the list, without having to use the [associated detail form](#detail-form).

> Para ello, basta con hacer dos clics en el campo a modificar para que pase al modo edición (asegúrese de dejar suficiente tiempo entre los dos clics para no generar un doble clic).

#### Gramática JSON

| Nombre          | Tipos de datos | Valores posibles |
| --------------- | -------------- | ---------------- |
| enterableInList | boolean        | true, false      |

#### Objetos soportados

[Subform](subform_overview.md)

---

## Formulario listado

Esta propiedad se utiliza para declarar el formulario listado que se utilizará en el subformulario. Un subformulario lista le permite introducir, ver y modificar datos en otras tablas.

List subforms can be used for data entry in two ways: the user can enter data directly in the subform, or enter it in an [input form](#detail-form). En esta configuración, el formulario utilizado como subformulario se denomina formulario Lista. El formulario de entrada se denomina formulario detallado.

#### Gramática JSON

| Nombre   | Tipos de datos | Valores posibles                                                                                                                                                                                                       |
| -------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| listForm | string         | Nombre (cadena) de la tabla o formulario proyecto, una ruta POSIX (cadena) a un archivo .json que describa el formulario, o un objeto que describa el formulario |

#### Objetos soportados

[Subform](subform_overview.md)

---

## Source

Especifica la tabla a la que pertenece el subformulario Lista (si la hay).

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles                                             |
| ------ | -------------- | ------------------------------------------------------------ |
| tabla  | string         | Nombre de la tabla 4D, o "" si no hay tabla. |

#### Objetos soportados

[Subform](subform_overview.md)

---

## Modo de selección

Designa la opción para permitir a los usuarios seleccionar líneas:

- **None**: Rows cannot be selected if this mode is chosen. Clicking on the list will have no effect unless the [Enterable in list](subform_overview.md#enterable-in-list) option is enabled. The navigation keys only cause the list to scroll; the `On Selection Change` form event is not generated.
- **Single**: One row at a time can be selected in this mode. Si hace clic en una línea, la seleccionará. A **Ctrl+click** (Windows) or **Command+click** (macOS) on a row toggles its state (between selected or not).\
  The Up and Down arrow keys select the previous/next row in the list. Las otras teclas de navegación se desplazan por la lista. The `On Selection Change` form event is generated every time the current row is changed.
- **Multiple**: Several rows can be selected simultaneously in this mode.
  - The selected subrecords are returned by the `GET HIGHLIGHTED RECORDS` command.
  - Al hacer clic en el registro se selecciona, pero no se modifica el registro actual.
  - A **Ctrl+click** (Windows) or **Command+click** (macOS) on a record toggles its state (between selected or not). Las teclas de flecha arriba y abajo seleccionan el registro anterior/siguiente en la lista. Las otras teclas de navegación se desplazan por la lista. The `On Selection Change` form event is generated every time the selected record is changed.

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles             |
| ------------- | -------------- | ---------------------------- |
| selectionMode | string         | "multiple", "single", "none" |

#### Objetos soportados

[Subform](subform_overview.md)
