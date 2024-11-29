---
id: propertiesDataSource
title: Fuente de datos
---


## Inserción automática

Cuando se selecciona esta opción, si un usuario introduce un valor que no se encuentra en la lista de selección asociada al objeto, este valor se añade automáticamente a la lista almacenada en memoria. Se pueden asociar listas de selección a los objetos utilizando:

- la propiedad JSON [Choice List](properties_DataSource.md#choice-list)
- los comandos [OBJECT SET LIST BY NAME](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-LIST-BY-NAME.301-4128227.en.html) o [OBJECT SET LIST BY REFERENCE](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-LIST-BY-REFERENCE.301-4128237.en.html).
- la lista de propiedades del editor de formularios.

Por ejemplo, dada una lista de selección que contiene "Francia, Alemania, Italia" que está asociada a un combo box "Países": si la propiedad **inserción automática** está activada y un usuario introduce "España", entonces el valor "España" se añade automáticamente a la lista en memoria:

![](../assets/en/FormObjects/comboBox_AutomaticInsertion_example.png)

Naturalmente, el valor introducido no debe pertenecer a la lista de [valores excluidos](properties_RangeOfValues.md#excluded-list) asociada al objeto, si se ha definido una.
> Si la lista se creó a partir de una lista definida en el modo Diseño, la lista original no se modifica.

Cuando la opción **inserción automática** no está seleccionada (por defecto), el valor introducido se almacena en el objeto pero no en la lista en memoria.

#### Gramática JSON

| Nombre             | Tipos de datos | Valores posibles |
| ------------------ | -------------- | ---------------- |
| automaticInsertion | boolean        | true, false      |

#### Objetos soportados

[Combo Box](comboBox_overview.md) - [Columna List Box](listbox_overview.md#list-box-columns)

---

## Lista de selección

Asocia una lista de selección a un objeto. Puede ser un nombre de lista de elección (una referencia de lista) o una colección de valores por defecto.

#### Gramática JSON

| Nombre     | Tipos de datos   | Valores posibles                                              |
| ---------- | ---------------- | ------------------------------------------------------------- |
| choiceList | list, collection | Una lista de valores posibles                                 |
| lista      | list, collection | Una lista de valores posibles (listas jerárquicas únicamente) |

#### Objetos soportados

[Lista desplegable](dropdownList_Overview.md) - [Combo Box](comboBox_overview.md) - [Lista jerárquica](list_overview.md#overview) - [Columna List Box](listbox_overview.md#list-box-columns)

---

## Lista de selección (lista estática)

Lista de valores estáticos a utilizar como etiquetas para el objeto de control de pestañas.

#### Gramática JSON

| Nombre | Tipos de datos   | Valores posibles                                        |
| ------ | ---------------- | ------------------------------------------------------- |
| labels | list, collection | Una lista de valores para llenar el control de pestañas |

#### Objetos soportados

[Pestañas](tabControl.md)

---

## Elemento actual

`List boxes colección o entity selection`

Especifica una variable o expresión a la que se asignará el elemento/entidad de la colección seleccionado por el usuario. Debe utilizar una variable objeto o una expresión asignable que acepte objetos. Si el usuario no selecciona nada o si ha utilizado una colección de valores escalares, se asigna el valor Null.
> Esta propiedad es de "sólo lectura", se actualiza automáticamente según las acciones del usuario en el list box. No se puede editar su valor para modificar el estado de selección del list box.

#### Gramática JSON

| Nombre            | Tipos de datos | Valores posibles     |
| ----------------- | -------------- | -------------------- |
| currentItemSource | string         | Expresión del objeto |

#### Objetos soportados

[List Box](listbox_overview.md#overview)

---

## Posición elemento actual

`List boxes colección o entity selection`

Indica una variable o expresión a la que se le asignará un entero largo que indica la posición del elemento/entidad de colección seleccionado por el usuario.

- si no se selecciona ningún elemento/entidad, la variable o expresión recibe cero,
- si se selecciona un solo elemento/entidad, la variable o expresión recibe su ubicación,
- si se seleccionan varios elementos/entidades, la variable o expresión recibe la posición del elemento/entidad que se seleccionó de última.
> Esta propiedad es de "sólo lectura", se actualiza automáticamente según las acciones del usuario en el list box. No se puede editar su valor para modificar el estado de selección del list box.

#### Gramática JSON

| Nombre                    | Tipos de datos | Valores posibles   |
| ------------------------- | -------------- | ------------------ |
| currentItemPositionSource | string         | Expresión numérica |

#### Objetos soportados

[List Box](listbox_overview.md)

---

## Tipos de datos

Consulte la sección [Tipo de expresión](properties_Object.md#expression-type).

#### Objetos soportados

[Columna de list box](listbox_overview.md#list-box-columns)

---

## Valores por defecto (lista de)

Lista de valores que se utilizarán como valores por defecto para la columna del list box (sólo de tipo array). Estos valores están disponibles automáticamente en la [variable array](properties_Object.md#variable-or-expression) asociada a esta columna cuando se ejecuta el formulario. Utilizando el lenguaje, se puede gestionar el objeto haciendo referencia a este array.

> Do not make confusion between this property and the "[default value](properties_RangeOfValues.md#default-value)" property that allows to define a field value in new records.

Debe introducir una lista de valores. En el editor de formularios, un diálogo específico permite introducir valores separados por retornos de carro:

![](../assets/en/FormObjects/defaultValues.png)

> También puede definir una [lista de selección](properties_DataSource.md#choice-list) con la columna list box. Sin embargo, se utilizará una lista de selección como lista de valores seleccionables para cada línea de columna, mientras que la lista por defecto rellena todas las líneas de columna.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles                                                                |
| ------ | -------------- | ------------------------------------------------------------------------------- |
| values | collection     | Una colección de valores por defecto (cadenas), por ejemplo: "a", "b", "c", "d" |

#### Objetos soportados

[Columna List Box (sólo tipo array)](listbox_overview.md#list-box-columns)

---

## Expression

This description is specific to [selection](listbox_overview.md#selection-list-boxes) and [collection](listbox_overview.md#collection-or-entity-selection-list-boxes) type list box columns. Ver también la sección **[Variable o Expresión](properties_Object.md#variable-or-expression)**.

Una expresión 4D que se asociará a una columna. Puede introducir:

- Una **variable simple** (en este caso, debe ser declarada explícitamente para la compilación). Se puede utilizar cualquier tipo de variable excepto BLOBs y arrays. El valor de la variable se calculará generalmente en el evento `On Display Detail`.

- A **field** using the standard [Table]Field syntax ([selection type list box](listbox_overview.md#selection-list-boxes) only), for example: `[Employees]LastName`. Se pueden utilizar los siguientes tipos de campos:
  - String
  - Numeric
  - Fecha
  - Hora
  - Picture
  - Boolean  
    Puede utilizar campos de la tabla maestra o de otras tablas.

- Una **expresión 4D** (expresión simple, fórmula o método 4D). La expresión debe devolver un valor. El valor se evaluará en los eventos `On Display Detail` y `On Data Change`. El resultado de la expresión se mostrará automáticamente cuando cambie al modo Aplicación. La expresión se evaluará para cada registro de la selección (actual o temporal) de la tabla maestra (para list boxes de tipo selección), cada elemento de la colección (para list boxes de tipo colección) o cada entidad de la selección (para list boxes selección de entidades). Si está vacía, la columna no mostrará ningún resultado. Se soportan los siguientes tipos de expresiones:
  - String
  - Numeric
  - Fecha
  - Picture
  - Boolean

 En los list boxes colecciones/selección de entidades, los tipos Null o no soportados se muestran como cadenas vacías.  
Al utilizar selecciones de entidades o colecciones, normalmente declarará la propiedad de elemento o el atributo de entidad asociado a una columna dentro de una expresión que contenga [This](https://doc.4d.com/4Dv17R6/4D/17-R6/This.301-4310806.en.html). `This` es un comando 4D dedicado que devuelve una referencia al elemento actualmente procesado. Por ejemplo, puede utilizar `**This.\&#060;propertyPath&#062;**` donde `**\&#060;propertyPath&#062;**` es la ruta de una propiedad en la colección o una ruta de atributo de entidad para acceder al valor actual de cada elemento/entidad. Si utiliza una colección de valores escalares, 4D creará un objeto para cada elemento de la colección con una única propiedad (llamada "valor"), llenada con el valor del elemento. En este caso, utilizará **This.value** como expresión.

 Si se utiliza una expresión no asignable [](Concepts/quick-tour.md#expressions) (por ejemplo, `[Person]FirstName+" "+[Person]LastName`), la columna nunca se podrá introducir aunque la propiedad [Editable](properties_Entry.md#enterable) esté activada.

Si se utiliza un campo, una variable o una expresión asignable (*por ejemplo Person.lastName*), la columna puede ser editable o no dependiendo de la propiedad [Editable](properties_Entry.md#enterable).

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles                                                                      |
| ---------- | -------------- | ------------------------------------------------------------------------------------- |
| dataSource | string         | Una variable 4D, un nombre de campo o una expresión del lenguaje compleja arbitraria. |

#### Objetos soportados

[Columna de list box](listbox_overview.md#list-box-columns)

---

## Tabla principal {#master-table}

`Current selection list boxes`

Especifica la tabla cuya selección actual se utilizará. Esta tabla y su selección actual constituirán la referencia de los campos asociados a las columnas del list box (referencias de campo o expresiones que contienen campos). Aunque algunas columnas contengan campos de otras tablas, el número de líneas mostradas será definido por la tabla maestra.

Se pueden utilizar todas las tablas de la base de datos, independientemente de si el formulario está relacionado con una tabla (formulario tabla) o no (formulario proyecto).

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles |
| ------ | -------------- | ---------------- |
| tabla  | number         | Número de tabla  |

#### Objetos soportados

[List Box](listbox_overview.md#overview)

---

## Guardar como

Esta propiedad está disponible en las siguientes condiciones:

- una [lista de selección](#choice-list) está asociada al objeto
- para las [entradas](input_overview.md) y [columnas list box](listbox_overview.md#list-box-columns), también se define una [lista obligatoria](properties_RangeOfValues.md#required-list) para el objeto (ambas opciones deben utilizar normalmente la misma lista), de modo que el usuario sólo pueda introducir valores de la lista.

Esta propiedad especifica, en el contexto de un campo o variable asociado a una lista de valores, el tipo de contenido a guardar:

- **Guardar como valor** (opción por defecto): el valor del elemento elegido en la lista por el usuario se guarda directamente. Por ejemplo, si el usuario elige el valor "Azul", este valor se guarda en el campo.
- **Guardar como referencia**: la referencia del elemento de la lista de opciones se guarda en el objeto. Esta referencia es el valor numérico asociado a cada elemento, ya sea a través del parámetro *itemRef* de los comandos `APPEND TO LIST` o `SET LIST ITEM`, o en el editor de listas.

Esta opción permite optimizar el uso de la memoria: almacenar valores numéricos en los campos ocupa menos espacio que almacenar cadenas. También facilita la traducción de aplicaciones: basta con crear varias listas en distintos idiomas pero con las mismas referencias de elementos y, a continuación, cargar la lista en función del idioma de la aplicación.

El uso de esta propiedad requiere el cumplimiento de los siguientes principios:

- Para poder almacenar la referencia, el campo o fuente de datos variable debe ser de tipo Número (independientemente del tipo de valor que aparezca en la lista).
- Las referencias válidas y únicas deben estar asociadas a los elementos de la lista.
- Si utiliza esta propiedad para una lista desplegable [](dropdownList_Overview.md), debe estar asociada a un campo.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles     |
| ------ | -------------- | -------------------- |
| saveAs | string         | "value", "reference" |

#### Objetos soportados

[Lista desplegable](dropdownList_Overview.md) - [Entrada](input_overview.md) - [Columna de ist Box](listbox_overview.md#list-box-columns)

---

## Elementos seleccionados

`List boxes colección o entity selection`

Especifica una variable o expresión a la que se asignarán los elementos o entidades seleccionados por el usuario.

- para un list box colección, debe utilizar una variable colección o una expresión asignable que acepte colecciones,
- para un list box selección de entidades, se crea un objeto de selección de entidades. Debe utilizar una variable objeto o una expresión asignable que acepte objetos.
> Esta propiedad es de "sólo lectura", se actualiza automáticamente según las acciones del usuario en el list box. No se puede editar su valor para modificar el estado de selección del list box.

#### Gramática JSON

| Nombre              | Tipos de datos | Valores posibles                          |
| ------------------- | -------------- | ----------------------------------------- |
| selectedItemsSource | string         | Colección asignable o expresión de objeto |

#### Objetos soportados

[List Box](listbox_overview.md#overview)

---

## Nombre de selección {#selection-name}

`List boxes de tipo selección nombrada`

Especifica la selección con nombre que se utilizará. Debe introducir el nombre de una selección nombrada válida. Puede ser una selección nombrada proceso o interproceso. El contenido del list box se basará en esta selección. La selección elegida debe existir y ser válida en el momento en que se muestre el list box; de lo contrario, el list box se mostrará en blanco.

> Las selecciones con nombre son listas ordenadas de registros. Se utilizan para mantener en memoria el orden y el registro actual de una selección. Para más información, consulte la sección **Selecciones temporales** del manual *Lenguaje 4D*.

#### Gramática JSON

| Nombre         | Tipos de datos | Valores posibles       |
| -------------- | -------------- | ---------------------- |
| namedSelection | string         | Nombre de la selección |

#### Objetos soportados

[List Box](listbox_overview.md#overview)
