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

Para ver una lista de las propiedades que soportan los objetos columna, consulte la sección [Propiedades específicas de la columna](listbox_overview.md#column-specific-properties).

#### Objetos soportados

[List Box](listbox_overview.md)

---

## Nombre formulario detallado

`List box del tipo selección`

Especifica el formulario que se utilizará para modificar o mostrar los registros individuales del list box.

Se muestra el formulario especificado:

- cuando se utilizan las acciones estándar `Add Subrecord` y `Edit Subrecord` aplicadas al list box (ver [Utilización de las acciones estándar](https://doc.4d.com/4Dv20/4D/20/Using-standard-actions.300-6263819.en.html)),
- cuando se hace doble clic en una línea y la propiedad [Doble clic en la línea ](#double-click-on-row)está definida en "Editar registro" o "Mostrar registro".

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles                                                                                                                                                               |
| ---------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| detailForm | string         | <li>Nombre (cadena) de la tabla o formulario proyecto</li><li>Ruta POSIX (cadena) a un archivo .json que describe el formulario</li><li>Objeto que describe el formulario</li> |

#### Objetos soportados

[List Box](listbox_overview.md)

---

## Doble clic en línea

`List box del tipo selección`

Define la acción a realizar cuando un usuario haga doble clic en una línea en el list box. Las opciones disponibles son:

- **No hacer nada** (por defecto): hacer doble clic en una línea no desencadena ninguna acción automática.
- **Editar registro**: al hacer doble clic en una línea se muestra el registro correspondiente en el formulario detallado definido [ para el list box](#detail-form-name). El registro se abre en modo de lectura-escritura para que pueda ser modificado.
- **Mostrar registro**: idéntica a la acción anterior, salvo que el registro se abre en modo de sólo lectura para que no pueda ser modificado.

> \> Double-clicking an empty row is ignored in list boxes.

Independientemente de la acción seleccionada/elegida, se genera el evento de formulario `On Double clicked`.

Para las dos últimas acciones, también se genera el evento de formulario `On Open Detail`. `On Close Detail` se genera cuando un registro mostrado en el formulario detallado asociado al list box está a punto de cerrarse (independientemente de que el registro se haya modificado o no).

#### Gramática JSON

| Nombre                 | Tipos de datos | Valores posibles                    |
| ---------------------- | -------------- | ----------------------------------- |
| doubleClickInRowAction | string         | "editSubrecord", "displaySubrecord" |

#### Objetos soportados

[List Box](listbox_overview.md)

---

## Conjunto resaltado

`List box del tipo selección`

Esta propiedad se utiliza para especificar el conjunto a utilizar para gestionar los registros resaltados en el list box (cuando se selecciona la fuente de datos **Arrays**, se utiliza un conjunto booleano con el mismo nombre que el list box).

4D crea un conjunto por defecto llamado _ListBoxSetN_ donde _N_ empieza en 0 y se incrementa según el número de list boxes en el formulario. Si es necesario, puede modificar el conjunto por defecto. Puede ser un conjunto local, proceso o interproceso (recomendamos utilizar un conjunto local, por ejemplo _$LBSet_, para limitar el tráfico de red). A continuación, 4D lo mantiene automáticamente. Si el usuario selecciona una o varias líneas en el list box, el conjunto se actualiza inmediatamente. Si desea seleccionar una o varias líneas por programación, puede aplicar a este conjunto los comandos del tema "Conjuntos".

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

> Puede definir columnas estáticas y bloqueadas por programación, consulte la sección "List Box" en el manual _de Lenguaje 4D_.

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

> Puede añadir o eliminar columnas dinámicamente por programación, utilizando comandos como [`LISTBOX INSERT COLUMN`](https://doc.4d.com/4dv20/help/command/en/page829.html) o [`LISTBOX DELETE COLUMN`](https://doc.4d.com/4dv20/help/command/en/page830.html).

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

Puede definir las propiedades de interfaz "oculta", "desactivada" y "seleccionable" para cada línea de un list box basado en arrays utilizando este array. También puede ser designado utilizando el comando `LISTBOX SET ARRAY`.

El array de control de líneas debe ser de tipo Longint e incluir el mismo número de líneas que el list box. Cada elemento del _Array de control de líneas_ define el estado de la interfaz de su línea correspondiente en el list box. Hay tres propiedades de interfaz disponibles utilizando constantes en el tema de constantes "List Box":

| Constante                | Valor | Comentario                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------ | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| lk row is disabled       | 2     | La línea correspondiente está desactivada. El texto y los controles, como las casillas de selección, aparecen atenuados o en gris. Las áreas de entrada de texto introducibles ya no lo son. Valor por defecto: Activado                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| lk row is hidden         | 1     | La línea correspondiente está oculta. Ocultar las líneas sólo afecta a la visualización del list box. Las líneas ocultas siguen presentes en los arrays y pueden gestionarse por programación. Los comandos de lenguaje, más concretamente `LISTBOX Get number of rows` o `LISTBOX GET CELL POSITION`, no tienen en cuenta el estado mostrado/oculto de las líneas. Por ejemplo, en un list box con 10 líneas en el que las 9 primeras líneas están ocultas, `LISTBOX Get number of rows` devuelve 10. Desde el punto de vista del usuario, la presencia de líneas ocultas en un list box no es visiblemente perceptible. Sólo pueden seleccionarse las líneas visibles (por ejemplo, utiliznado el comando Seleccionar todo). Valor por defecto: Visible |
| lk row is not selectable | 4     | La línea correspondiente no es seleccionable (no es posible resaltarla). Las áreas de entrada de texto ya no se pueden modificar a menos que esté activada la opción [Single-Click Edit](properties_Entry.md#single-click-edit). Sin embargo, los controles como las casillas de verificación y las listas siguen siendo funcionales. Esta configuración se ignora si el modo de selección del list box es "Ninguno". Valor por defecto: Seleccionable                                                                                                                                                                                                                                                                                                                                                    |

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

- **Ninguna**: las líneas no se pueden seleccionar si se elige este modo. Hacer clic en la lista no tendrá ningún efecto a menos que la opción [Edición con un solo clic](properties_Entry.md#single-click-edit) esté activada. Las teclas de navegación sólo hacen que la lista se desplace; no se genera el evento de formulario `On Selection Change`.
- **Simple**: en este modo se puede seleccionar una línea a la vez. Si hace clic en una línea, la seleccionará. Un **Ctrl+clic** (Windows) o **Comando+clic** (macOS) en una fila cambia su estado (entre seleccionado o no).\
  Las teclas de flecha arriba y abajo seleccionan el registro anterior/siguiente en la lista. Las otras teclas de navegación se desplazan por la lista. El evento de formulario `On Selection Change` se genera cada vez que se cambia la línea actual.
- **Múltiple**: en este modo se pueden seleccionar varias líneas simultáneamente.

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles             |
| ------------- | -------------- | ---------------------------- |
| selectionMode | string         | "multiple", "single", "none" |

#### Objetos soportados

[List Box](listbox_overview.md)
