---
id: propertiesForm
title: Propiedades de los formularios
---

---

## Color Scheme
> Color scheme property is only applied on macOS.

This property defines the color scheme for the form. By default when the property is not set, the value for a color scheme is **inherited** (the form uses the scheme defined at the [application level](https://doc.4d.com/4dv19/help/command/en/page1762.html)). This can be changed for the form to one of the following two options:

*   dark - light text on a dark background
*   light - dark text on a light background
> A defined color scheme can not be overridden by a CSS.

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles |
| ----------- | -------------- | ---------------- |
| colorScheme | cadena         | "dark", "light"  |

---

## Pages

Cada formulario consta de al menos dos páginas:

- una página 0 (página de fondo)
- una página 1 (página principal)

Para más información, consulte [Páginas formulario](forms.md#form-pages).


#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles                                                                  |
| ------ | -------------- | --------------------------------------------------------------------------------- |
| pages  | colección      | Colección de páginas (cada página es un objeto, la página 0 es el primer elemento |

---


## Form Name

This property is the name of the form itself and is used to refer to the form by name using the 4D language. The form name must comply with the [rules specified for identifiers](Concepts/identifiers.md) in 4D.


#### Gramática JSON

The form name is defined by the name of the folder that contains the form.4Dform file. See [project architecture](Project/architecture.md#sources-folder) for more information.

---

## Form Type

The form type, *i.e.* its destination, defines the features that will be available to the form. For example, [markers](properties_Markers.md) can only be set for list (output) table forms.

Each table in a database generally has at least two table forms. One for listing records on-screen and the other for displaying one record at a time (used for data entry and modifications):

- Output form - the *output form* or *list form* displays a list of records, with a single line per record. The results of queries are shown in an output form and users can double-click a line to display the input form for that record. ![](assets/en/FormObjects/formOutput.png)

- Input form - used for data entry. It displays a single record per screen and typically has buttons for saving and canceling modifications to the record and for navigating from record to record (*i.e.*, First Record, Last Record, Previous Record, Next Record). ![](assets/en/FormObjects/formInput.png)


Supported types depend on the form category:


| Form Type                | Gramática JSON   | Descripción                                                   | Supported with              |
| ------------------------ | ---------------- | ------------------------------------------------------------- | --------------------------- |
| Formulario detallado     | detailScreen     | A display form for data entry and modification                | Project forms - Table forms |
| Detail Form for Printing | detailPrinter    | A printed report with one page per record, such as an invoice | Project forms - Table forms |
| List Form                | listScreen       | A form for listing records on the screen                      | Table forms                 |
| List Form for Printing   | listPrinter      | A printed report that list records                            | Table forms                 |
| Ninguno                  | *no destination* | A form with no specific feature                               | Project forms - Table forms |


#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles                                             |
| ----------- | -------------- | ------------------------------------------------------------ |
| destination | cadena         | "detailScreen", "listScreen", "detailPrinter", "listPrinter" |

---

## Inherited Form Name

This property designates the [form to inherit](forms.md#inherited-forms) in the current form.

To inherit from a table form, set the table in the [Inherited Form Table](#inherited-form-table) property.

To remove inheritance, select **\<None>** in the Property List (or " " in JSON).


#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles                                                                                                   |
| ------------- | -------------- | ------------------------------------------------------------------------------------------------------------------ |
| inheritedForm | cadena         | Name of table or project form OR a POSIX path to a .json file describing the form OR an object describing the form |

---


## Inherited Form Table

This property specifies the database table from which to [inherit a form](forms.md#inherited-forms) in the current form.

Set to **\<None>** in the Property List (or " " in JSON) to inherited from a project form.


#### Gramática JSON

| Nombre             | Tipos de datos  | Valores posibles           |
| ------------------ | --------------- | -------------------------- |
| inheritedFormTable | string o number | table name or table number |


---

## Publicado como Subformulario

Para que un formulario componente sea seleccionado como [subformulario](FormObjects/subform_overview.md) en una aplicación anfitriona, debe haber sido compartido explícitamente. When this property is selected, the form will be published in the host application.

Only project forms can be specified as published subforms.



#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles |
| ------ | -------------- | ---------------- |
| shared | booleano       | true, false      |


---

## Memorizar geometría

Cuando se utiliza esta opción, si la ventana se abre utilizando el comando `Open form window` con el parámetro `*`, varios parámetros del formulario son guardados automáticamente por 4D cuando se cierra la ventana, independientemente de cómo se hayan modificado durante la sesión:

*   la página actual,
*   la posición, el tamaño y la visibilidad de cada objeto del formulario (incluyendo el tamaño y la visibilidad de las columnas de list box).
> Esta opción no tiene en cuenta los objetos generados con el comando `OBJECT DUPLICATE`. Para que un usuario pueda recuperar su entorno al utilizar este comando, el desarrollador debe repetir la secuencia de creación, definición y posicionamiento de los objetos.

Cuando se selecciona esta opción, la opción [Guardar valor](FormObjects/properties_Object.md#save-value) está disponible para ciertos objetos.

#### Gramática JSON

| Nombre           | Tipos de datos | Valores posibles |
| ---------------- | -------------- | ---------------- |
| memorizeGeometry | booleano       | true, false      |

#### Ver también
[**Guardar valor**](FormObjects/properties_Object.md#save-value)


---

## Título de la ventana

El título de la ventana se utiliza cuando se abre el formulario mediante los comandos `Open form window` y `Open window`4D en el entorno de la aplicación. El nombre de la ventana aparece en la barra de título de la ventana.

Puede utilizar referencias dinámicas para definir los nombres de ventana de los formularios, *es decir*:

*   Una referencia estándar XLIFF almacenada en la carpeta Resources.
*   Una etiqueta de tabla o de campo: la sintaxis a aplicar es <?[TableNum]FieldNum> o 
  
  <?[TableName]FieldName>.
*   Una variable o un campo: la sintaxis a aplicar es \<VariableName> o <[TableName]FieldName>. El valor actual del campo o de la variable se mostrará en el título de la ventana.

> El número de caracteres para el título de una ventana está limitado a 31.

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles                                         |
| ----------- | -------------- | -------------------------------------------------------- |
| windowTitle | cadena         | El nombre de la ventana como texto plano o de referencia |


