---
id: formObjectsOverview
title: Objetos formularios
---

Usted crea y personaliza los formularios de su aplicación manipulando los objetos que contienen. Puede añadir objetos, reposicionar objetos, definir propiedades de los objetos, aplicar reglas de negocio especificando restricciones de entrada de datos o escribir métodos de objetos que se ejecuten automáticamente cuando se utilice el objeto.

## Objetos activos y estáticos

Los formularios 4D soportan una gran cantidad de objetos **activos** y **estáticos** integrados:

- **Los objetos activos** realizan una tarea o una función de la interfaz. Los campos son objetos activos. Los otros objetos activos -objetos editable (variables), combo box, listas desplegables, botones imagen, etc.- almacenan los datos temporalmente en la memoria o realizan alguna acción, como abrir una caja de diálogo, imprimir un informe o iniciar un proceso en segundo plano.
- **Los objetos estáticos** se utilizan generalmente para definir la apariencia del formulario y sus etiquetas, así como para la interfaz gráfica. Los objetos estáticos no tienen variables asociadas como los objetos activos. Sin embargo, se pueden insertar objetos dinámicos en objetos estáticos.

## Gestión de objetos de formulario

Puede añadir o modificar objetos formulario 4D de las siguientes maneras:

- **[Editor de formularios](FormEditor/formEditor.md):** arrastre un objeto de la barra de herramientas del editor de formularios al formulario. A continuación, utilice la Lista de propiedades para especificar las propiedades del objeto.

- Lenguaje **4D**: los comandos del tema `Objects (Forms)` como [`OBJECT DUPLICATE`](../commands/object-duplicate) o [`OBJECT SET FONT STYLE`](../commands/object-set-font-style) permiten crear y definir objetos de formulario.

- **Código JSON en formularios dinámicos:** define las propiedades utilizando JSON. Utilice la propiedad [type](properties_Object.md#type) para definir el tipo de objeto y, a continuación, defina sus [propiedades disponibles](properties_Reference.md).
  Ejemplo para un objeto botón:

```json
	{
		"type": "button", 
		"style": "bevel", 
		"text": "OK", 
		"action": "Cancel", 
		"left": 60, 
		"top": 160, 
		"width": 100, 
		"height": 20
	}
```

### Accessing form objects using their name or their data source in the 4D language

Many commands handling form objects such as commands from [Objects (Forms)](../commands/theme/Objects_Forms.md), [List Box](../commands/theme/List_Box.md), or [Styled Text](../commands/theme/Styled_Text.md) themes share the same generic syntaxes described here:

```4d
COMMAND NAME( * ; *object* : Text { ; *additional parameters* } )
//or
COMMAND NAME( *object* : Variable, Field { ; *additional parameters* })
```

If you specify the \* parameter, you indicate that *object* is the [name of the object](./properties_Object.md#object-name) (a string). If you don't pass the \*, you indicate that *object* is a field or a variable, i.e. its [data source](./properties_Object.md#variable-or-expression).

When using the [object name](./properties_Object.md#object-name), you can rely on the @ character within that name if you want to address several objects of the form in one call. The following table shows examples of object names you can specify to this command.

| Object Names                        | Objects affected by the call                                                   |
| ----------------------------------- | ------------------------------------------------------------------------------ |
| mainGroupBox                        | Only the object mainGroupBox.                                  |
| main@                  | The objects whose name starts with “main”.                     |
| @GroupBox              | The objects whose name ends with “GroupBox”.                   |
| @Agrupar@ | The objects whose name contains “Group”.                       |
| main@Btn               | The objects whose name starts with “main” and ends with “Btn”. |
| @                      | All the objects present in the form.                           |

Form object names can contain up 255 bytes, allowing you to define and apply custom naming rules, such as "xxxx_Button" or "xxx_Mac".

:::warning

You can [configure the way the @ character is interpreted](../settings/database.md#text-comparison) when it is included in a character string. This option affects the functioning of the form object commands.

:::

