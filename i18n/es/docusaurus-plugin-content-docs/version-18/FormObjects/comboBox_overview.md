---
id: comboBoxOverview
title: Combo Box
---

## Generalidades

Un combo box es similar a una [lista desplegable](dropdownList_Overview.md#overview), excepto que acepta texto introducido desde el teclado y tiene opciones adicionales.

![](../assets/en/FormObjects/combo_box.png)

Un combo box se inicializa exactamente igual que una lista desplegable. Si el usuario introduce un texto en el combo box, llena el elemento 0 del array. En otros aspectos, debe considerar un combo box como un área editable que utiliza su array o una lista de selección como el conjunto de valores por defecto.

Utilice el evento `On Data Change` para gestionar las entradas en el área editable, como lo haría con cualquier objeto de área editable. Para más información, consulte la descripción del comando [Form event](https://doc.4d.com/4Dv17R5/4D/17-R5/Form-event.301-4127796.en.html) en el manual *Lenguaje de 4D*.

## Opciones de los combo box

Los objetos de tipo Combo box aceptan dos opciones específicas relativas a las listas de selección asociadas a ellos:

- [Inserción automática](properties_DataSource.md#automatic-insertion): permite añadir automáticamente un valor a una lista almacenada en memoria cuando el usuario introduce un valor que no se encuentra en la lista de selección asociada al combo box.
- [Exclusión](properties_RangeOfValues.md#excluded-list) (lista de valores excluidos): permite establecer una lista cuyos valores no pueden introducirse en el combo box. Si se introduce un valor excluido, no se acepta y se muestra un mensaje de error.
> > Associating a [list of required values](properties_RangeOfValues.md#required-list) is not available for combo boxes. En una interfaz, si un objeto debe proponer una lista finita de valores requeridos, entonces debe utilizar un objeto [Tipo menú desplegable](dropdownList_Overview.md#overview).

## Propiedades soportadas

[Formato Alfa](properties_Display.md#alpha-format) - [Negrita](properties_Text.md#bold) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - \[Estilo del botón\](properties_TextAndPicture. md#button-style) - [Lista de opciones](properties_DataSource.md#choice-list) - [Clase](properties_Object.md#css-class) - [Formato de fecha](properties_Display.md#date-format) - \[Focusable\](properties_Entry. md#focusable) - [Fuente](properties_Text.md#font) - [Color de la fuente](properties_Text.md#font-color) - [Tamaño de la fuente](properties_Text.md#font-size) - \[Altura\](properties_CoordinatesAndSizing. md#height) - [Consejo de ayuda](properties_Help.md#help-tip) - [Tamaño horizontal](properties_ResizingOptions.md#horizontal-sizing) - \[Itálica\](properties_Text. md#italic) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [No renderizado](properties_Display.md#not-rendered) - [Nombre del objeto](properties_Object.md#object-name) - \[Derecha\](properties_CoordinatesAndSizing. md#right) - [Acción estándar](properties_Action.md#standard-action) - [Formato de hora](properties_Display.md#time-format) - \[Top\](properties_CoordinatesAndSizing. md#top) - [Tipo](properties_Object.md#type) - [Subrayado](properties_Text.md#underline) - [Variable o Expresión](properties_Object.md#variable-or-expression) - \[Tamaño vertical\](properties_ResizingOptions. md#vertical-sizing) - [Visibilidad](properties_Display.md#visibility) - [Ancho](properties_CoordinatesAndSizing.md#width)  
