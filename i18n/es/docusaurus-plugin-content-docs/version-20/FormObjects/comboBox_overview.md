---
id: comboBoxOverview
title: Combo Box
---

A combo box is similar to a [drop-down list](dropdownList_Overview.md), except that it accepts text entered from the keyboard and has additional options.

![](../assets/en/FormObjects/combo_box.png)

Fundamentalmente, debe considerar un combo box como un área editable que utiliza su objeto, array o una lista de selección como el conjunto de valores por defecto.

## Gestión de combo boxes

Utilice el evento [`On Data Change`](Events/onDataChange.md) para gestionar las entradas en el área editable, como lo haría con cualquier objeto del formulario de entrada.

You initialize a combo box in exactly the same way as a [drop-down list](dropdownList_Overview.md): using an object, an array, or a choice list.

### Utilizar un objeto

> Esta funcionalidad sólo está disponible en proyectos 4D.

Un [objeto](Concepts/dt_object.md) encapsulando una [colección](../Concepts/dt_collection.md) puede utilizarse como fuente de datos de un combo box. El objeto debe contener las siguientes propiedades:

| Propiedad      | Tipo                 | Descripción                                                                                                                                                                                                                                                              |
| -------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `values`       | Collection           | Obligatorio - Colección de valores escalares. Todos los valores deben ser del mismo tipo. Tipos soportados:<li>cadenas</li><li>numbers</li><li>dates</li><li>horas</li>Si está vacío o no está definido, el combo box está vacío |
| `currentValue` | igual que Collection | Texto introducido por el usuario                                                                                                                                                                                                                                         |

Si el objeto contiene otras propiedades, se ignoran.

Cuando el usuario introduce texto en el combo box, la propiedad `currentValue` del objeto obtiene el texto introducido.

### Utilizar un array

Consulte **Utilización de un array** en la [página de la lista desplegable](dropdownList_Overview.md#using-an-array) para obtener información sobre cómo inicializar el array.

Cuando el usuario introduce texto en el combo box, el elemento 0 del array recibe el texto introducido.

### Utilizar una lista de selección

Si desea utilizar un combo box para gestionar los valores de un área de entrada (campo listado o variable), 4D le permite referenciar el campo o variable directamente como fuente de datos del objeto formulario. Esto facilita la gestión de los campos/variables listados.
> Si utiliza una lista jerárquica, sólo se muestra el primer nivel y se puede seleccionar.

Para asociar un combo box a un campo o variable, basta con introducir el nombre del campo o variable directamente en [Variable o Expresión](properties_Object.md#variable-or-expression) del objeto formulario en la Lista de Propiedades.

Cuando se ejecuta el formulario, 4D gestiona automáticamente el combo box durante la entrada o visualización: cuando un usuario elige un valor, éste se guarda en el campo; este valor de campo se muestra en el combo box cuando se visualiza el formulario:

Para más información, consulte **Utilizar una opción** en la [página lista desplegable](dropdownList_Overview.md#using-a-choice-list).


## Opciones

Los objetos de tipo combo box aceptan dos opciones específicas:

- [Inserción automática](properties_DataSource.md#automatic-insertion): permite añadir automáticamente un valor a la fuente de datos cuando un usuario introduce un valor que no se encuentra en la lista asociada al combo box.
- [Exclusión](properties_RangeOfValues.md#excluded-list) (lista de valores excluidos): permite establecer una lista cuyos valores no pueden introducirse en el combo box. Si se introduce un valor excluido, no se acepta y se muestra un mensaje de error.
> > > > Associating a [list of required values](properties_RangeOfValues.md#required-list) is not available for combo boxes. In an interface, if an object must propose a finite list of required values, then you must use a [drop-down list](dropdownList_Overview.md) object.

## Propiedades soportadas
[Alpha Format](properties_Display.md#alpha-format) - [Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Choice List](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Date Format](properties_Display.md#date-format) - [Expression Type](properties_Object.md#expression-type) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Time Format](properties_Display.md#time-format) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)  