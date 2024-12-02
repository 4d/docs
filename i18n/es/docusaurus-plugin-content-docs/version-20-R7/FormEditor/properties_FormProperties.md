---
id: propertiesForm
title: Propiedades de los formularios
---

---

## Esquema de colores

> La propiedad de esquema de color sólo se aplica en macOS.

Esta propiedad define el esquema de colores para el formulario. This property defines the color scheme for the form. Esto se puede cambiar para el formulario a una de las dos opciones siguientes:

- dark -- texto claro sobre fondo oscuro
- light - dark text on a light background
  \> A defined color scheme can not be overridden by a CSS.

> El número de caracteres para el título de una ventana está limitado a 31.

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles |
| ----------- | -------------- | ---------------- |
| colorScheme | string         | "dark", "light"  |

---

## CSS

Esta propiedad le permite cargar archivos CSS específicos para el formulario.

Un archivo CSS definido a nivel de formulario anulará la(s) hoja(s) de estilo predeterminada(s). Para más información, consulte la página [Hojas de estilo](createStylesheet.md).

#### Gramática JSON

| Nombre | Tipos de datos     | Valores posibles                                                                                                                                                                                                                                                                                                                  |
| ------ | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| css    | cadena o colección | CSS file path(s) provided as:<li>a string (a file for both platforms)</li><li>a collection of strings (a list of files for both platform)</li><li>a collection of {"path":string;"media":"mac" \\| "win"} objects </li> |

---

## Pages

Cada formulario consta de al menos dos páginas:

- una página 0 (página de fondo)
- una página 1 (página principal)

Para más información, consulte [Páginas formulario](forms.md#form-pages).

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles                                                                                     |
| ------ | -------------- | ---------------------------------------------------------------------------------------------------- |
| pages  | collection     | Colección de páginas (cada página es un objeto, la página 0 es el primer elemento |

---

## Nombre del formulario

Esta propiedad es el nombre del propio formulario y se utiliza para referirse al formulario por su nombre utilizando el lenguaje 4D. Esta propiedad es el nombre del propio formulario y se utiliza para referirse al formulario por su nombre utilizando el lenguaje 4D.

#### Gramática JSON

El nombre del formulario está definido por el nombre de la carpeta que contiene el archivo form.4Dform. Ver [arquitectura del proyecto](Project/architecture.md#sources-folder) para más información.

---

## Tipo de formulario

El tipo de formulario, *es decir,* su destino, define las características que tendrá el formulario. Por ejemplo, [marcadores](properties_Markers.md) sólo puede definirse para formularios tabla listados (de salida).

Cada tabla de una base de datos suele tener al menos dos formas de tabla. Uno para listar los registros en pantalla y el otro para mostrar un registro a la vez (utilizado para la entrada de datos y las modificaciones):

- Formulario de salida: el *formulario de salida* o *formulario lista* muestra una lista de registros, con una sola línea por registro. Los resultados de las consultas se muestran en un formulario de salida y los usuarios pueden hacer doble clic en una línea para mostrar el formulario de entrada de ese registro.
  ![](../assets/en/FormObjects/formOutput.png)

- Formulario de entrada - utilizado para la entrada de datos. Muestra un único registro por pantalla y suele tener botones para guardar y cancelar las modificaciones del registro y para navegar de registro en registro (\*es decir, \*, Primer registro, Último registro, Registro anterior, Registro siguiente).
  ![](../assets/en/FormObjects/formInput.png)

Los tipos soportados dependen de la categoría de formulario:

| Tipo de formulario              | Gramática JSON   | Descripción                                                      | Soportado con                            |
| ------------------------------- | ---------------- | ---------------------------------------------------------------- | ---------------------------------------- |
| Formulario detallado            | detailScreen     | Un formulario de visualización para introducir y modificar datos | Formularios proyecto - Formularios tabla |
| Formulario detallado imprimible | detailPrinter    | Un informe impreso con una página por registro, como una factura | Formularios proyecto - Formularios tabla |
| Formulario listado              | listScreen       | Un formulario para listar los registros en la pantalla           | Formularios tabla                        |
| Formulario de lista imprimible  | listPrinter      | Un informe impreso que lista los registros                       | Formularios tabla                        |
| Ninguno                         | *no destination* | Un formulario sin característica específica                      | Formularios proyecto - Formularios tabla |

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles                                             |
| ----------- | -------------- | ------------------------------------------------------------ |
| destination | string         | "detailScreen", "listScreen", "detailPrinter", "listPrinter" |

---

## Nombre del formulario heredado

Esta propiedad designa el [formulario a heredar](forms.md#inherited-forms) en el formulario actual.

Para heredar de un formulario tabla, defina la tabla en la propiedad [Tabla de formulario heredada](#inherited-form-table).

Para eliminar la herencia, seleccione `\<None>` en la lista de propiedades (o " " en JSON).

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles                                                                                                                                               |
| ------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| inheritedForm | string         | Nombre de la tabla o formulario proyecto O una ruta POSIX a un archivo .json que describa el formulario O un objeto que describa el formulario |

---

## Tablas de formulario heredadas

Esta propiedad especifica la tabla de la base de datos de la que [hereda un formulario](forms.md#inherited-forms) en el formulario actual.

Define `\<None>` en la lista de propiedades (o " " en JSON) para heredar un formulario proyecto.

#### Gramática JSON

| Nombre             | Tipos de datos  | Valores posibles                  |
| ------------------ | --------------- | --------------------------------- |
| inheritedFormTable | string o number | nombre de tabla o número de tabla |

---

## Publicado como Subformulario

Para que un formulario componente sea seleccionado como [subformulario](FormObjects/subform_overview.md) en una aplicación anfitriona, debe haber sido compartido explícitamente. Cuando se selecciona esta propiedad, el formulario se publicará en la aplicación local.

Sólo los proyectos formulario se pueden especificar como subformularios publicados.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles |
| ------ | -------------- | ---------------- |
| shared | boolean        | true, false      |

---

## Memorizar geometría

Cuando se utiliza esta opción, si la ventana se abre utilizando el comando `Open form window` con el parámetro `*`, varios parámetros del formulario son guardados automáticamente por 4D cuando se cierra la ventana, independientemente de cómo se hayan modi

- la página actual,
- la posición, el tamaño y la visibilidad de cada objeto del formulario (incluyendo el tamaño y la visibilidad de las columnas de list box).

> > This option does not take into account objects generated using the `OBJECT DUPLICATE` command. Para que un usuario pueda recuperar su entorno al utilizar este comando, el desarrollador debe repetir la secuencia de creación, definición y posicionamiento de los objetos.

Cuando se selecciona esta opción, la opción [Guardar valor](FormObjects/properties_Object.md#save-value) está disponible para ciertos objetos.

#### Gramática JSON

| Nombre           | Tipos de datos | Valores posibles |
| ---------------- | -------------- | ---------------- |
| memorizeGeometry | boolean        | true, false      |

#### Ver también

[**Guardar Valor**](FormObjects/properties_Object.md#save-value)

---

## Título de la ventana

El título de la ventana se utiliza cuando se abre el formulario mediante los comandos `Open form window` y `Open window`4D en el entorno de la aplicación. El nombre de la ventana aparece en la barra de título de la ventana.

Puede utilizar referencias dinámicas para definir los nombres de ventana de los formularios, *es decir*:

- Una referencia estándar XLIFF almacenada en la carpeta Resources.
- Una etiqueta de tabla o de campo: la sintaxis a aplicar es `<?[TableNum]FieldNum>` o `<?[TableName]FieldName>`.
- Una variable o un campo: la sintaxis a aplicar es `\<VariableName>` o `<[TableName]FieldName>`. El valor actual del campo o de la variable se mostrará en el título de la ventana.

> El número de caracteres para el título de una ventana está limitado a 31.

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles                                         |
| ----------- | -------------- | -------------------------------------------------------- |
| windowTitle | string         | El nombre de la ventana como texto plano o de referencia |
