---
id: propertiesListBox
title: List Box
---

---

## Columnas

Colección de columnas del list box.

#### Gramática JSON

| Nombre  | Tipos de datos               | Valores posibles                                     |
| ------- | ---------------------------- | ---------------------------------------------------- |
| columns | colección de objetos columna | Contiene las propiedades de las columnas de list box |

For a list of properties supported by column objects, please refer to the [Column Specific Properties](listbox_overview.md#column-specific-properties) section.

#### Objetos soportados

[List Box](listbox_overview.md)

---

## Nombre formulario detallado

`List box del tipo selección`

Especifica el formulario que se utilizará para modificar o mostrar los registros individuales del list box.

Se muestra el formulario especificado:

- when using `Add Subrecord` and `Edit Subrecord` standard actions applied to the list box (see [Using standard actions](https://doc.4d.com/4Dv20/4D/20/Using-standard-actions.300-6263819.en.html)),
- when a row is double-clicked and the [Double-click on Row](#double-click-on-row) property is set to "Edit Record" or "Display Record".

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles                                                                                                                                   |
| ---------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| detailForm | string         | <li>Name (string) of table or project form</li><li>POSIX path (string) to a .json file describing the form</li><li>Object describing the form</li> |

#### Objetos soportados

[List Box](listbox_overview.md)

---

## Doble clic en línea

`List box del tipo selección`

Define la acción a realizar cuando un usuario haga doble clic en una línea en el list box. Las opciones disponibles son:

- **Do nothing** (default): Double-clicking a row does not trigger any automatic action.
- **Edit Record**: Double-clicking a row displays the corresponding record in the detail form defined [for the list box](#detail-form-name). El registro se abre en modo de lectura-escritura para que pueda ser modificado.
- **Display Record**: Identical to the previous action, except that the record is opened in read-only mode so it cannot be modified.

> \> Double-clicking an empty row is ignored in list boxes.

Regardless of the action selected/chosen, the `On Double clicked` form event is generated.

For the last two actions, the On `Open Detail` form event is also generated. The `On Close Detail` is then generated when a record displayed in the detail form associated with the list box is about to be closed (regardless of whether or not the record was modified).

#### Gramática JSON

| Nombre                 | Tipos de datos | Valores posibles                    |
| ---------------------- | -------------- | ----------------------------------- |
| doubleClickInRowAction | string         | "editSubrecord", "displaySubrecord" |

#### Objetos soportados

[List Box](listbox_overview.md)

---

## Conjunto resaltado

`List box del tipo selección`

This property is used to specify the set to be used to manage highlighted records in the list box (when the **Arrays** data source is selected, a Boolean array with the same name as the list box is used).

4D creates a default set named _ListBoxSetN_ where _N_ starts at 0 and is incremented according to the number of list boxes in the form. Si es necesario, puede modificar el conjunto por defecto. It can be a local, process or interprocess set (we recommend using a local set, for example _$LBSet_, in order to limit network traffic). A continuación, 4D lo mantiene automáticamente. Si el usuario selecciona una o varias líneas en el list box, el conjunto se actualiza inmediatamente. Si desea seleccionar una o varias líneas por programación, puede aplicar a este conjunto los comandos del tema "Conjuntos".

> - El estado de resaltado de las líneas del list box y el estado de resaltado de los registros de la tabla son completamente independientes.
> - Si la propiedad "Conjunto resaltado" no contiene un nombre, no será posible realizar selecciones en el list box.

#### Gramática JSON

| Nombre       | Tipos de datos | Valores posibles    |
| ------------ | -------------- | ------------------- |
| highlightSet | string         | Nombre del conjunto |

#### Objetos soportados

[List Box](listbox_overview.md)

---

## Columnas bloqueadas y columnas estáticas

Las columnas bloqueadas y las columnas estáticas son dos funcionalidades distintas e independientes en los list boxes:

- Las columnas bloqueadas siempre se muestran a la izquierda del list box; no se desplazan horizontalmente.
- Las columnas estáticas no pueden moverse arrastrándolas y soltándolas dentro del list box.

> You can set static and locked columns by programming, refer to "List Box" section in the _4D Language Reference_ manual.

Estas propiedades interactúan de la siguiente manera:

- Si define columnas que sólo son estáticas, no se pueden mover.

- Si define columnas bloqueadas pero no estáticas, puede seguir cambiando su posición libremente dentro del área bloqueada. Sin embargo, una columna bloqueada no puede moverse fuera de esta área bloqueada.

![](../assets/en/FormObjects/property_lockedStaticColumns1.png)

- Si define todas las columnas del área bloqueada como estáticas, no podrá mover estas columnas dentro del área bloqueada.

![](../assets/en/FormObjects/property_lockedStaticColumns2.png)

- Puede definir una combinación de columnas bloqueadas y estáticas según sus necesidades. Por ejemplo, si define tres columnas bloqueadas y una columna estática, el usuario puede intercambiar las dos columnas situadas más a la derecha dentro del área bloqueada (ya que sólo la primera columna es estática).

### Número de columnas bloqueadas

Número de columnas que deben permanecer visualizadas permanentemente en la parte izquierda del list box, incluso cuando el usuario se desplaza horizontalmente por las columnas.

#### Gramática JSON

| Nombre            | Tipos de datos | Valores posibles          |
| ----------------- | -------------- | ------------------------- |
| lockedColumnCount | integer        | mínimo: 0 |

#### Objetos soportados

[List Box](listbox_overview.md)

### Número de columnas estáticas

Número de columnas que no se pueden mover durante la ejecución.

#### Gramática JSON

| Nombre            | Tipos de datos | Valores posibles          |
| ----------------- | -------------- | ------------------------- |
| staticColumnCount | integer        | mínimo: 0 |

#### Objetos soportados

[List Box](listbox_overview.md)

---

## Número de columnas

Define el número de columnas del list box.

> You can add or remove columns dynamically by programming, using commands such as [`LISTBOX INSERT COLUMN`](https://doc.4d.com/4dv20/help/command/en/page829.html) or [`LISTBOX DELETE COLUMN`](https://doc.4d.com/4dv20/help/command/en/page830.html).

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles          |
| ----------- | -------------- | ------------------------- |
| columnCount | integer        | mínimo: 1 |

#### Objetos soportados

[List Box](listbox_overview.md)

---

## Array de control de líneas

`List box de tipo array`

Un array 4D que controla la visualización de las líneas del list box.

Puede definir las propiedades de interfaz "oculta", "desactivada" y "seleccionable" para cada línea de un list box basado en arrays utilizando este array. It can also be designated using the `LISTBOX SET ARRAY` command.

El array de control de líneas debe ser de tipo Longint e incluir el mismo número de líneas que el list box. Each element of the _Row Control Array_ defines the interface status of its corresponding row in the list box. Hay tres propiedades de interfaz disponibles utilizando constantes en el tema de constantes "List Box":

| Constante                | Valor | Comentario                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------ | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lk row is disabled       | 2     | La línea correspondiente está desactivada. El texto y los controles, como las casillas de selección, aparecen atenuados o en gris. Las áreas de entrada de texto introducibles ya no lo son. Valor por defecto: Activado                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| lk row is hidden         | 1     | La línea correspondiente está oculta. Ocultar las líneas sólo afecta a la visualización del list box. Las líneas ocultas siguen presentes en los arrays y pueden gestionarse por programación. The language commands, more particularly `LISTBOX Get number of rows` or `LISTBOX GET CELL POSITION`, do not take the displayed/hidden status of rows into account. For example, in a list box with 10 rows where the first 9 rows are hidden, `LISTBOX Get number of rows` returns 10. Desde el punto de vista del usuario, la presencia de líneas ocultas en un list box no es visiblemente perceptible. Sólo pueden seleccionarse las líneas visibles (por ejemplo, utiliznado el comando Seleccionar todo). Valor por defecto: Visible |
| lk row is not selectable | 4     | La línea correspondiente no es seleccionable (no es posible resaltarla). Enterable text input areas are no longer enterable unless the [Single-Click Edit](properties_Entry.md#single-click-edit) option is enabled. Sin embargo, los controles como las casillas de verificación y las listas siguen siendo funcionales. Esta configuración se ignora si el modo de selección del list box es "Ninguno". Valor por defecto: Seleccionable                                                                                                                                                                                                                                                                                                                                                |

Para cambiar el estado de una línea, basta con definir la(s) constante(s) adecuada(s) en el elemento array correspondiente. Por ejemplo, si no quiere que la línea #10 sea seleccionable, puede escribir:

```4d
 aLControlArr{10}:=lk row is not selectable
```

![](../assets/en/FormObjects/listbox_styles5.png)

Puede definir varias propiedades de la interfaz a la vez:

```4d
 aLControlArr{8}:=lk row is not selectable + lk row is disabled
```

![](../assets/en/FormObjects/listbox_styles6.png)

Tenga en cuenta que la configuración de las propiedades de un elemento anula cualquier otro valor de este elemento (si no se restablece). Por ejemplo:

```4d
 aLControlArr{6}:=lk row is disabled + lk row is not selectable 
 //define la línea 6 como desactivada Y no seleccionable
 aLControlArr{6}:=lk row is disabled 
 //define la línea 6 como desactivada pero seleccionable nuevamente
```

#### Gramática JSON

| Nombre           | Tipos de datos | Valores posibles                      |
| ---------------- | -------------- | ------------------------------------- |
| rowControlSource | string         | Nombre del array de control de líneas |

#### Objetos soportados

[List Box](listbox_overview.md)

---

## Modo de selección

Designa la opción para permitir a los usuarios seleccionar líneas:

- **None**: Rows cannot be selected if this mode is chosen. Clicking on the list will have no effect unless the [Single-Click Edit](properties_Entry.md#single-click-edit) option is enabled. The navigation keys only cause the list to scroll; the `On Selection Change` form event is not generated.
- **Single**: One row at a time can be selected in this mode. Si hace clic en una línea, la seleccionará. A **Ctrl+click** (Windows) or **Command+click** (macOS) on a row toggles its state (between selected or not).\
  The Up and Down arrow keys select the previous/next row in the list. Las otras teclas de navegación se desplazan por la lista. The `On Selection Change` form event is generated every time the current row is changed.
- **Multiple**: Several rows can be selected simultaneously in this mode.

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles             |
| ------------- | -------------- | ---------------------------- |
| selectionMode | string         | "multiple", "single", "none" |

#### Objetos soportados

[List Box](listbox_overview.md)
