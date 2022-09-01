---
id: propertiesForm
title: Propiedades de los formularios
---

---

## Esquema de colores
> La propiedad de esquema de color sólo se aplica en macOS.

Esta propiedad define el esquema de colores para el formulario. This property defines the color scheme for the form. Esto se puede cambiar para el formulario a una de las dos opciones siguientes:

* dark -- texto claro sobre fondo oscuro
* light - dark text on a light background > A defined color scheme can not be overridden by a CSS.
> El número de caracteres para el título de una ventana está limitado a 31.

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles |
| ----------- | -------------- | ---------------- |
| colorScheme | string         | "dark", "light"  |

---

## Pages

Cada formulario consta de al menos dos páginas:

* una página 0 (página de fondo)
* una página 1 (página principal)

Para más información, consulte [Páginas formulario](forms.md#form-pages).

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles                                                                  |
| ------ | -------------- | --------------------------------------------------------------------------------- |
| pages  | collection     | Colección de páginas (cada página es un objeto, la página 0 es el primer elemento |

---

## Nombre del formulario

This property is the name of the form itself and is used to refer to the form by name using the 4D language. The form name must comply with the [rules specified for identifiers](Concepts/identifiers.md) in 4D.

#### Gramática JSON

The form name is defined by the name of the folder that contains the form.4Dform file. See [project architecture](Project/architecture.md#sources-folder) for more information.

---

## Tipo de formulario

The form type, *i.e.* its destination, defines the features that will be available to the form. For example, [markers](properties_Markers.md) can only be set for list (output) table forms.

Cada tabla de una base de datos suele tener al menos dos formas de tabla. One for listing records on-screen and the other for displaying one record at a time (used for data entry and modifications):

* Output form - the *output form* or *list form* displays a list of records, with a single line per record. The results of queries are shown in an output form and users can double-click a line to display the input form for that record. ![](../assets/en/FormObjects/formOutput.png)

* Formulario de entrada - utilizado para la entrada de datos. It displays a single record per screen and typically has buttons for saving and canceling modifications to the record and for navigating from record to record (*i.e.*, First Record, Last Record, Previous Record, Next Record). ![](../assets/en/FormObjects/formInput.png)

Los tipos soportados dependen de la categoría de formulario:

| Tipo de formulario              | Gramática JSON   | Descripción                                                      | Soportado con                            |
| ------------------------------- | ---------------- | ---------------------------------------------------------------- | ---------------------------------------- |
| Formulario detallado            | detailScreen     | Un formulario de visualización para introducir y modificar datos | Formularios proyecto - Formularios tabla |
| Formulario detallado imprimible | detailPrinter    | Un informe impreso con una página por registro, como una factura | Formularios proyecto - Formularios tabla |
| Formulario listado              | listScreen       | Un formulario para listar los registros en la pantalla           | Formularios tabla                        |
| Formulario de lista imprimible  | listPrinter      | Un informe impreso que lista los registros                       | Formularios tabla                        |
| Ninguno                         | *no destination* | A form with no specific feature                                  | Formularios proyecto - Formularios tabla |

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles                                             |
| ----------- | -------------- | ------------------------------------------------------------ |
| destination | string         | "detailScreen", "listScreen", "detailPrinter", "listPrinter" |

---

## Nombre del formulario heredado

This property designates the [form to inherit](forms.md#inherited-forms) in the current form.

To inherit from a table form, set the table in the [Inherited Form Table](#inherited-form-table) property.

To remove inheritance, select `\&#060;None&#062;` in the Property List (or " " in JSON).

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles                                                                                                   |
| ------------- | -------------- | ------------------------------------------------------------------------------------------------------------------ |
| inheritedForm | string         | Name of table or project form OR a POSIX path to a .json file describing the form OR an object describing the form |

---

## Tablas de formulario heredadas

This property specifies the database table from which to [inherit a form](forms.md#inherited-forms) in the current form.

Set to `\&#060;None&#062;` in the Property List (or " " in JSON) to inherited from a project form.

#### Gramática JSON

| Nombre             | Tipos de datos  | Valores posibles                  |
| ------------------ | --------------- | --------------------------------- |
| inheritedFormTable | string o number | nombre de tabla o número de tabla |

---

## Publicado como Subformulario

Para que un formulario componente sea seleccionado como [subformulario](FormObjects/subform_overview.md) en una aplicación anfitriona, debe haber sido compartido explícitamente. When this property is selected, the form will be published in the host application.

Sólo los proyectos formulario se pueden especificar como subformularios publicados.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles |
| ------ | -------------- | ---------------- |
| shared | boolean        | true, false      |

---

## Memorizar geometría

Cuando se utiliza esta opción, si la ventana se abre utilizando el comando `Open form window` con el parámetro `*`, varios parámetros del formulario son guardados automáticamente por 4D cuando se cierra la ventana, independientemente de cómo se hayan modificado durante la sesión:

* la página actual,
* la posición, el tamaño y la visibilidad de cada objeto del formulario (incluyendo el tamaño y la visibilidad de las columnas de list box).
> > This option does not take into account objects generated using the `OBJECT DUPLICATE` command. Para que un usuario pueda recuperar su entorno al utilizar este comando, el desarrollador debe repetir la secuencia de creación, definición y posicionamiento de los objetos.

Cuando se selecciona esta opción, la opción [Guardar valor](FormObjects/properties_Object.md#save-value) está disponible para ciertos objetos.

#### Gramática JSON

| Nombre           | Tipos de datos | Valores posibles |
| ---------------- | -------------- | ---------------- |
| memorizeGeometry | boolean        | true, false      |

#### Ver también

[**Guardar valor**](FormObjects/properties_Object.md#save-value)

---

## Título de la ventana

El título de la ventana se utiliza cuando se abre el formulario mediante los comandos `Open form window` y `Open window`4D en el entorno de la aplicación. El nombre de la ventana aparece en la barra de título de la ventana.

Puede utilizar referencias dinámicas para definir los nombres de ventana de los formularios, *es decir*:

* Una referencia estándar XLIFF almacenada en la carpeta Resources.
* A table or field label: The syntax to apply is `<?[TableNum]FieldNum>` or `<?[TableName]FieldName>`.
* A variable or a field: The syntax to apply is `\&#060;VariableName&#062;` or `&#060;[TableName]FieldName&#062;`. El valor actual del campo o de la variable se mostrará en el título de la ventana.

> El número de caracteres para el título de una ventana está limitado a 31.

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles                                         |
| ----------- | -------------- | -------------------------------------------------------- |
| windowTitle | string         | El nombre de la ventana como texto plano o de referencia |
