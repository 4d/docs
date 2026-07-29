---
id: formObjectsOverview
title: Objetos formularios
---

Usted crea y personaliza los formularios de su aplicación manipulando los objetos que contienen. Puede añadir objetos, reposicionar objetos, definir propiedades de los objetos, aplicar reglas de negocio especificando restricciones de entrada de datos o escribir métodos de objetos que se ejecuten automáticamente cuando se utilice el objeto.

## Objetos activos y estáticos

Los formularios 4D soportan una gran cantidad de objetos **activos** y **estáticos** integrados:

- **Los objetos activos** realizan una tarea o una función de la interfaz. Los campos son objetos activos. Los otros objetos activos (objetos editables (variables), combo box, listas desplegables, botones imagen, etc.) almacenan los datos temporalmente en la memoria o realizan alguna acción, como abrir un cuadro de diálogo, imprimir un informe o iniciar un proceso en segundo plano.
- **Los objetos estáticos** se utilizan generalmente para definir la apariencia del formulario y sus etiquetas, así como para la interfaz gráfica. Los objetos estáticos no tienen variables asociadas como los objetos activos. Sin embargo, se pueden insertar objetos dinámicos en objetos estáticos.

## Gestión de objetos de formulario

Puede añadir o modificar objetos formulario 4D de las siguientes maneras:

- **[Editor de formularios](FormEditor/formEditor.md):** arrastre un objeto de la barra de herramientas del editor de formularios al formulario. A continuación, utilice la Lista de propiedades para especificar las propiedades del objeto.

- Lenguaje **4D**: los comandos del tema `Objects (Forms)` como [`OBJECT DUPLICATE`](../commands/object-duplicate) o [`OBJECT SET FONT STYLE`](../commands/object-set-font-style) permiten crear y definir objetos de formulario.

- **Código JSON en formularios dinámicos:** defina las propiedades utilizando JSON. Utilice la propiedad [type](properties_Object.md#type) para definir el tipo de objeto y, a continuación, defina sus [propiedades disponibles](properties_Reference.md).
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

### Acceso a objetos de formulario mediante su nombre o su fuente de datos en el lenguaje 4D

Muchos comandos que gestionan objetos de formulario, como los de los temas [Objetos (Formularios)](../commands/theme/Objects_Forms.md), [List Box](../commands/theme/List_Box.md) o [Styled Text](../commands/theme/Styled_Text.md), comparten las mismas sintaxis genéricas que se describen aquí:

```4d
COMMAND NAME( * ; *object* : Text { ; *additional parameters* } )
//o
COMMAND NAME( *object* : Variable, Field { ; *additional parameters* })
```

Si especifica el parámetro \*, indica que *objeto* es el [nombre del objeto](./properties_Object.md#object-name) (una cadena). Si no pasa el \*, está indicando que *objeto* es un campo o una variable; es decir, su [fuente de datos](./properties_Object.md#variable-or-expression).

Al utilizar el [nombre del objeto](./properties_Object.md#object-name), puede utilizar el caracter @ dentro de ese nombre si desea hacer referencia a varios objetos de ese tipo en una sola llamada. La siguiente tabla muestra ejemplos de nombres de objetos que puede especificar a este comando.

| Nombres de objetos                | Objetos afectados por la llamada                                                 |
| --------------------------------- | -------------------------------------------------------------------------------- |
| mainGroupBox                      | Sólo el objeto mainGroupBox.                                     |
| main@                | Los objetos cuyo nombre comienza por “main”.                     |
| @GroupBox            | Los objetos cuyo nombre termina con “GroupBox”.                  |
| @Group@ | Los objetos cuyo nombre contiene “Group”.                        |
| main@Btn             | Los objetos cuyo nombre comienza con “main” y termina con “Btn”. |
| @                    | Todos los objetos presentes en el formulario.                    |

Los nombres de objetos de formulario pueden contener hasta 255 bytes, permitiéndole definir y aplicar reglas de nombres personalizadas, como "xxxx_Button" o "xx_Mac".

:::warning

Puede [configurar la forma en que se interpreta el caracter @](../settings/database.md#text-comparison) cuando aparece en una cadena de caracteres. Esta opción afecta al funcionamiento de los comandos del objeto de formulario.

:::

