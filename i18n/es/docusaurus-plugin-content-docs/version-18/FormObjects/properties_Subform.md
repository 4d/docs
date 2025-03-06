---
id: propertiesSubform
title: Subformulario
---

---
## Autorizar la eliminación

Especifica si el usuario puede eliminar subregistros en un subformulario listado.

#### Gramática JSON

| Nombre          | Tipos de datos | Valores posibles                |
| --------------- | -------------- | ------------------------------- |
| deletableInList | boolean        | true, false (por defecto: true) |

#### Objetos soportados

[Subformulario](subform_overview.md)


---
## Formulario detallado

Esta propiedad se utiliza para declarar el formulario detallado que se utilizará en el subformulario. Puede ser:

- un widget, es decir, un subformulario de tipo página dotado de funciones específicas. En este caso, las propiedades [subformulario de lista](#list-form) y [Fuente](#source) deben estar vacías o no estar presentes.   
  Se puede seleccionar el nombre de un formulario de componente cuando se publica en el componente.
> Para ello, basta con hacer dos clics en el campo a modificar para que pase al modo edición (asegúrese de dejar suficiente tiempo entre los dos clics para no generar un doble clic).

- el formulario detallado a asociar al [subformulario listado](#formulario-de-lista). El formulario detallado puede utilizarse para introducir o ver los subregistros. Generalmente contiene más información que el subformulario lista. Naturalmente, el formulario detallado debe pertenecer a la misma tabla que el subformulario. Normalmente se utiliza un formulario de salida como formulario lista y un formulario de entrada como formulario detallado. Si no especifica el formulario a utilizar para la entrada de la página completa, 4D utiliza automáticamente el formato de entrada por defecto de la tabla.


#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles                                                                                                                                                 |
| ---------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| detailForm | string         | Nombre (cadena) de la tabla o formulario proyecto, una ruta POSIX (cadena) a un archivo .json que describa el formulario, o un objeto que describa el formulario |

#### Objetos soportados

[Subformulario](subform_overview.md)

---
## Doble clic en línea vacía

Acción a realizar en caso de doble clic en una línea vacía de un subformulario listado. Las siguientes opciones están disponibles:
- **No hacer nada** (por defecto): hacer doble clic en una línea no desencadena ninguna acción automática.
- Añadir registro: crea un nuevo registro en el subformulario y cambia al modo edición. El registro se creará directamente en la lista si la propiedad [Editable en la lista] está activada. En caso contrario, se creará en modo página, en el [formulario detallado](detail-form) asociado al subformulario.


#### Gramática JSON

| Nombre                       | Tipos de datos | Valores posibles                  |
| ---------------------------- | -------------- | --------------------------------- |
| doubleClickInEmptyAreaAction | string         | "addSubrecord" o "" to do nothing |

#### Objetos soportados

[Subformulario](subform_overview.md)

#### Ver también
[Doble clic en línea](#double-click-on-row)

---
## Doble clic en línea

`Sub-formularios lista`

Define la acción a realizar cuando un usuario haga doble clic en una línea en un subformulario lista. Las opciones disponibles son:

*   **No hacer nada** (por defecto): hacer doble clic en una línea no desencadena ninguna acción automática.
*   **Editar registro**: al hacer doble clic en una línea se muestra el registro correspondiente en el [formulario detallado](#detail-form) definido para el subformulario lista. El registro se abre en modo de lectura-escritura para que pueda ser modificado.
*   **Mostrar registro**: idéntica a la acción anterior, salvo que el registro se abre en modo de sólo lectura para que no pueda ser modificado.

Independientemente de la acción seleccionada/elegida, se genera el evento de formulario `On Double clicked`.

Para las dos últimas acciones, también se genera el evento de formulario `On Open Detail`. `On Close Detail` se genera cuando un registro mostrado en el formulario detallado asociado al list box está a punto de cerrarse (independientemente de que el registro se haya modificado o no).

#### Gramática JSON

| Nombre                 | Tipos de datos | Valores posibles                    |
| ---------------------- | -------------- | ----------------------------------- |
| doubleClickInRowAction | string         | "editSubrecord", "displaySubrecord" |

#### Objetos soportados

[Subformulario](subform_overview.md)


#### Ver también
[Doble clic en línea vacía](#double-click-on-empty-row)

---
## Editable en lista

Cuando un subformulario lista tiene esta propiedad activada, el usuario puede modificar los datos del registro directamente en la lista, sin tener que utilizar el [formulario detallado asociado](#detail-form).

> Para ello, basta con hacer dos clics en el campo a modificar para que pase al modo edición (asegúrese de dejar suficiente tiempo entre los dos clics para no generar un doble clic).


#### Gramática JSON

| Nombre          | Tipos de datos | Valores posibles |
| --------------- | -------------- | ---------------- |
| enterableInList | boolean        | true, false      |


#### Objetos soportados

[Subformulario](subform_overview.md)


---
## Formulario listado

Esta propiedad se utiliza para declarar el formulario listado que se utilizará en el subformulario. Un subformulario lista le permite introducir, ver y modificar datos en otras tablas.

Los subformularios de lista pueden utilizarse para la entrada de datos de dos maneras: el usuario puede introducir los datos directamente en el subformulario, o introducirlos en un [formulario de entrada](#detail-form). En esta configuración, el formulario utilizado como subformulario se denomina formulario Lista. El formulario de entrada se denomina formulario detallado.

#### Gramática JSON

| Nombre   | Tipos de datos | Valores posibles                                                                                                                                                 |
| -------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| listForm | string         | Nombre (cadena) de la tabla o formulario proyecto, una ruta POSIX (cadena) a un archivo .json que describa el formulario, o un objeto que describa el formulario |

#### Objetos soportados

[Subformulario](subform_overview.md)



---
## Source

Especifica la tabla a la que pertenece el subformulario Lista (si la hay).

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles                             |
| ------ | -------------- | -------------------------------------------- |
| tabla  | string         | Nombre de la tabla 4D, o "" si no hay tabla. |

#### Objetos soportados

[Subformulario](subform_overview.md)

---
## Modo de selección

Designa la opción para permitir a los usuarios seleccionar líneas:
- **Ninguna**: las líneas no se pueden seleccionar si se elige este modo. Hacer clic en la lista no tendrá ningún efecto a menos que la opción [Editable en lista](#enterable-in-list) esté activada. Las teclas de navegación sólo hacen que la lista se desplace; no se genera el evento de formulario `On Selection Change`.
- **Simple**: en este modo se puede seleccionar una línea a la vez. Si hace clic en una línea, la seleccionará. Un **Ctrl+clic** (Windows) o **Comando+clic** (macOS) en una línea cambia su estado (entre seleccionada o no).  
  Las teclas de flecha arriba y abajo seleccionan la línea anterior/siguiente de la lista. Las otras teclas de navegación se desplazan por la lista. El evento de formulario `On Selection Change` se genera cada vez que se cambia la línea actual.
- **Múltiple**: en este modo se pueden seleccionar varias líneas simultáneamente.
    - Los subregistros seleccionados son devueltos por el comando `GET HIGHLIGHTED RECORDS`.
    - Al hacer clic en el registro se selecciona, pero no se modifica el registro actual.
    - Un **Ctrl+clic** (Windows) o **Comando+clic** (macOS) en un registro cambia su estado (entre seleccionado o no). Las teclas de flecha arriba y abajo seleccionan el registro anterior/siguiente en la lista. Las otras teclas de navegación se desplazan por la lista. El evento de formulario `On Selection Change` se genera cada vez que el registro seleccionado se modifica.


#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles             |
| ------------- | -------------- | ---------------------------- |
| selectionMode | string         | "multiple", "single", "none" |

#### Objetos soportados

[Subformulario](subform_overview.md)
