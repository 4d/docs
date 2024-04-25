---
id: subformOverview
title: Subformulario
---

Un subformulario es un formulario incluido en otro formulario.

## Terminología

Con el fin de definir claramente los conceptos implementados con los subformularios, aquí hay algunas definiciones para ciertos términos utilizados:

- **Subform**: a form intended for inclusion in another form, itself called the parent form.
- **Parent form**: a form containing one or more subform(s).
- **Subform container**: an object included in the parent form, displaying an instance of the subform.
- **Subform instance**: the representation of a subform in a parent form. Este concepto es importante porque es posible mostrar varias instancias del mismo subformulario en un formulario padre.
- **List form**: instance of subform displayed as a list.
- **Detail form**: page-type input form associated with a list-type subform that can be accessed by double-clicking in the list.

## Sub-formularios en lista

Un subformulario lista le permite introducir, ver y modificar datos en otras tablas. Normalmente se utilizan subformularios lista en bases de datos en las que se han establecido relaciones Uno a Muchos. Un subformulario lista en un formulario de una tabla Uno relacionada le permite ver, introducir y modificar datos en una tabla Muchos relacionada. Puede tener varios subformularios procedentes de diferentes tablas en el mismo formulario. Sin embargo, no es posible colocar dos subformularios que pertenecen a la misma tabla en la misma página de un formulario.

Por ejemplo, una base de datos del gestor de contactos puede utilizar un subformulario lista para mostrar todos los números de teléfono de un contacto. Aunque los números de teléfono aparecen en la pantalla Contactos, la información se almacena realmente en una tabla relacionada. Utilizando una relación de Uno a Muchos, este diseño de base de datos facilita el almacenamiento de un número ilimitado de números de teléfono por contacto. Con las relaciones automáticas, se puede soportar la entrada de datos directamente en la tabla Muchos relacionada sin programar.

Aunque los subformularios lista suelen estar asociados a muchas tablas, una instancia de subformulario puede mostrar los registros de cualquier otra tabla de la base de datos.

También puede permitir que el usuario introduzca datos en el formulario lista.
Dependiendo de la configuración del subformulario, el usuario puede mostrar el formulario detallado haciendo doble clic en un subregistro o utilizando los comandos para añadir y editar subregistros.

> 4D offers three standard actions to meet the basic needs for managing subrecords: `Edit Subrecord`, `Delete Subrecord`, and `Add Subrecord`. Cuando el formulario incluye varias instancias de subformulario, la acción se aplicará al subformulario que tenga el foco.

## Sub-formularios en página

Los subformularios en modo página pueden mostrar los datos del subregistro actual o todo valor pertinente en función del contexto (variables, imágenes, etc.). Una de las principales ventajas de utilizar subformularios página es que pueden incluir funcionalidades avanzadas y pueden interactuar directamente con el formulario padre (widgets). Los subformularios en página también tienen sus propiedades y eventos específicos; puede gestionarlos completamente por programación.

The page subform uses the input form indicated by the [Detail Form](properties_Subform.md#detail-form) property. A diferencia de un subformulario en modo lista, el formulario utilizado puede proceder de la misma tabla que el formulario padre. También es posible utilizar un formulario proyecto. Cuando se ejecuta, un subformulario en modo página tiene las mismas características de visualización estándar que un formulario de entrada.

> Los widgets 4D son objetos compuestos predefinidos basados en subformularios página. They are described in detail in a separate manual, [4D Widgets](https://doc.4d.com/4Dv19/4D/19/4D-Widgets.100-5462909.en.html).

### Utilización de la variable o expresión asociada

You can bind [a variable or an expression](properties_Object.md#variable-or-expression) to a subform container object. Esto es muy útil para sincronizar valores del formulario padre y su(s) subformulario(s).

By default, 4D creates a variable or expression of [object type](properties_Object.md#expression-type) for a subform container, which allows you to share values in the context of the subform using the `Form` command ([see below](#using-the-subform-bound-object)). However, you can use a variable or expression of any scalar type (time, integer, etc.) especially if you only need to share a single value:

- Define a bound variable or expression of a scalar type and call the `OBJECT Get subform container value` and `OBJECT SET SUBFORM CONTAINER VALUE` commands to exchange values when [On Bound Variable Change](../Events/onBoundVariableChange.md) or [On Data Change](../Events/onDataChange.md) form events occur. Esta solución se recomienda para sincronizar un solo valor.
- Define a bound variable or expression of the **object** type and use the `Form` command to access its properties from the subform. Esta solución se recomienda para sincronizar varios valores.

### Sincronizando formulario padre y subformulario (valor único)

Vincular la misma variable o expresión al contenedor del subformulario y a otros objetos del formulario principal permite vincular los contextos del formulario principal y del subformulario para dar los toques finales a interfaces sofisticadas. Imagine a subform that contains a clock displaying a static time, inserted into a parent form containing an [input area](input_overview.md):

![](../assets/en/FormObjects/subforms1.png)

In the parent form, both objects (input area and subform container) **have the same value as _Variable or Expression_**. It can be a variable (e.g. `parisTime`), or an expression (e.g. `Form.parisTime`).

:::info

To display a static time, you must use the appropriate [data type](properties_DataSource.md#data-type-expression-type) for the [variable or expression](properties_Object.md#variable-or-expression):

- If you use a variable (e.g. `parisTime`), it must be of the `text` or `time` type.
- If you use an expression (e.g. `Form.myValue`), it must contain a `text` value.

El valor del texto debe tener el formato "hh:mm:ss".

:::

In the subform, the clock object is managed through the `Form.clockValue` property.

#### Actualizando el contenido de un subformulario

Caso 1: se modifica el valor de la variable o expresión del formulario padre y esta modificación debe pasarse al subformulario.

`parisTime` or `Form.parisTime` changes to "12:15:00" in the parent form, either because the user entered it, or because it was updated dynamically (via the `String(Current time)` statement for example). This triggers the [On Bound Variable Change](../Events/onBoundVariableChange.md) event in the subform's Form method.

Se ejecuta el siguiente código:

```4d
// Subform form method
If (Form event code=On Bound Variable Change) //bound variable or expression was modified in the parent form
	Form.clockValue:=OBJECT Get subform container value //synchonize the local value
End if
```

It updates the value of `Form.clockValue` in the subform:

![](../assets/en/FormObjects/update-subform.png)

The [On Bound Variable Change](../Events/onBoundVariableChange.md) form event is generated:

- en cuanto se asigna un valor a la variable/expresión del formulario padre, incluso si se reasigna el mismo valor
- si el subformulario pertenece a la página formulario actual o a la página 0.

Note that, as in the above example, it is preferable to use the `OBJECT Get subform container value` command which returns the value of the expression in the subform container rather than the expression itself because it is possible to insert several subforms in the same parent form (for example, a window displaying different time zones contains several clocks).

La modificación de la variable o expresión asociada desencadena eventos de formulario que permiten sincronizar los valores del formulario padre y del subformulario:

- Use the [On Bound Variable Change](../Events/onBoundVariableChange.md) form event to indicate to the subform (form method of subform) that the variable or expression was modified in the parent form.
- Use the [On Data Change](../Events/onDataChange.md) form event to indicate to the subform container that the variable or expression value was modified in the subform.

#### Actualizar el contenido de un formulario padre

Caso 2: se modifica el contenido del subformulario y esta modificación debe pasar al formulario padre.

Inside the subform, the button changes the value of the `Form.clockValue` expression of type Text attached to the clock object. This triggers the [On Data Change](../Events/onDataChange.md) form event inside the clock object (this event must be selected for the object), which updates the `Form.parisTime` value in the main form.

Se ejecuta el siguiente código:

```4d
// subform clock object method
If (Form event code=On Data Change) //whatever the way the value is changed
	OBJECT SET SUBFORM CONTAINER VALUE(Form.clockValue) //Push the value to the container
End if
```

![](../assets/en/FormObjects/update-main-form.png)

Everytime the value of `Form.clockValue` changes in the subform, `parisTime` or `Form.parisTime` in the subform container is also updated.

> Si el valor de la variable o expresión se establece en varias ubicaciones, 4D utiliza el valor que se cargó en último lugar. Aplica el siguiente orden de carga: 1-Métodos objeto del subformulario, 2-Método formulario del subformulario, 3-Métodos objeto del formulario padre, 4-Método formulario del formulario padre

### Sincronizando formulario padre y subformulario (múltiples valores)

By default, 4D binds a variable or expression of [object type](properties_Object.md#expression-type) to each subform. El contenido de este objeto puede leerse y/o modificarse desde el formulario padre y desde el subformulario, lo que permite compartir múltiples valores en un contexto local.

When bound a the subform container, this object is returned by the `Form` command directly in the subform. Dado que los objetos se pasan siempre por referencia, si el usuario modifica el valor de una propiedad en el subformulario, se guardará automáticamente en el propio objeto y, por tanto, estará disponible para el formulario padre. Por otro lado, si una propiedad del objeto es modificada por el usuario en el formulario padre o por programación, se actualizará automáticamente en el subformulario. No es necesaria ninguna gestión de eventos.

For example, in a subform, inputs are bound to the `Form` object properties (of the subform form):

![](../assets/en/FormObjects/subnew1.png)

En el formulario padre, se muestra el subfomulario dos veces. Each subform container is bound to an expression which is a property of the `Form` object (of the parent form):

![](../assets/en/FormObjects/subnew2.png)

The button only creates `mother` and `father` properties in the parent's `Form` object:

```4d
//Método objeto botón añadir valores
Form.mother:=New object("lastname"; "Hotel"; "firstname"; "Anne")
Form.father:=New object("lastname"; "Golf"; "firstname"; "Félix")
```

Cuando ejecuta el formulario y presiona el botón, ve que todos los valores se muestran correctamente:

![](../assets/en/FormObjects/subnew3.png)

Si modifica un valor en el formulario padre o en el subformulario, se actualiza automáticamente en el otro formulario porque se utiliza el mismo objeto:

![](../assets/en/FormObjects/subnew4.png)
![](../assets/en/FormObjects/subnew5.png)

### Uso de punteros (compatibilidad)

In versions prior to 4D v19 R5, synchronization between parent forms and subforms was handled through **pointers**. Por ejemplo, para actualizar un objeto subformulario, podría llamar al siguiente código:

```4d
// Subform form method
If (Form event code=On Bound Variable Change) 
	ptr:=OBJECT Get pointer(Object subform container) 
	clockValue:=ptr-> 
End if
```

**This principle is still supported for compatibility but is now deprecated since it does not allow binding expressions to subforms.** It should no longer be used in your developments. In any cases, we recommend to use the [`Form` command](#synchronizing-parent-form-and-subform-multiple-values) or the [`OBJECT Get subform container value` and `OBJECT SET SUBFORM CONTAINER VALUE` commands](#synchronizing-parent-form-and-subform-single-value) to synchronize form and subform values.

### Programación entre formularios avanzada

La comunicación entre el formulario padre y las instancias del subformulario puede requerir ir más allá del intercambio de valores a través de la variable asociada. De hecho, es posible que desee actualizar las variables de los subformularios en función de las acciones realizadas en el formulario principal y viceversa. Si utilizamos el ejemplo anterior del subformulario de tipo "reloj dinámico", es posible que queramos definir una o varias horas de alarma para cada reloj.

4D ha implementado los siguientes mecanismos para satisfacer estas necesidades:

- Calling of a container object from the subform using the `CALL SUBFORM CONTAINER` command
- Execution of a method in the context of the subform via the `EXECUTE METHOD IN SUBFORM` command

> The `GOTO OBJECT` command looks for the destination object in the parent form even if it is executed from a subform.

#### Comando CALL SUBFORM CONTAINER

The `CALL SUBFORM CONTAINER` command lets a subform instance send an [event](../Events/overview.md) to the subform container object, which can then process it in the context of the parent form. El evento se recibe en el método del objeto contenedor. Puede estar en el origen de todo evento detectado por el subformulario (clic, arrastrar y soltar, etc.).

El código del evento no tiene restricciones (por ejemplo, 20000 o -100). You can use a code that corresponds to an existing event (for example, 3 for `On Validate`), or use a custom code. En el primer caso, sólo puede utilizar los eventos que haya marcado en la lista de propiedades para los contenedores de subformulario. En el segundo caso, el código no debe corresponder a ningún evento de formulario existente. Se recomienda utilizar un valor negativo para asegurarse de que este código no será utilizado por 4D en futuras versiones.

For more information, refer to the description of the `CALL SUBFORM CONTAINER` command.

#### Comando EXECUTE METHOD IN SUBFORM

The `EXECUTE METHOD IN SUBFORM` command lets a form or one of its objects request the execution of a method in the context of the subform instance, which gives it access to the subform variables, objects, etc. Este método también puede recibir parámetros.

Este mecanismo se ilustra en el siguiente diagrama:

![](../assets/en/FormObjects/subforms6.png)

For more information, refer to the description of the `EXECUTE METHOD IN SUBFORM` command.

## Propiedades soportadas

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Detail Form](properties_Subform.md#detail-form) - [Double click on empty row](properties_Subform.md#double-click-on-empty-row) - [Double click on row](properties_Subform.md#double-click-on-row) - [Enterable in list](properties_Subform.md#enterable-in-list) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Height](properties_CoordinatesAndSizing.md#height) -
[Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle) -
[Horizontal Scroll Bar](properties_Appearance.md#horizontal-scroll-bar) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [List Form](properties_Subform.md#list-form) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Print Frame](properties_Print.md#print-frame) - [Right](properties_CoordinatesAndSizing.md#right) - [Selection mode](properties_Subform.md#selection-mode) - [Source](properties_Subform.md#source) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Scroll Bar](properties_Appearance.md#vertical-scroll-bar) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)
