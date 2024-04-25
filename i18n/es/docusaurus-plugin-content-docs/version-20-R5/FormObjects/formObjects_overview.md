---
id: formObjectsOverview
title: Objetos formularios
---

Usted crea y personaliza los formularios de su aplicación manipulando los objetos que contienen. Puede añadir objetos, reposicionar objetos, definir propiedades de los objetos, aplicar reglas de negocio especificando restricciones de entrada de datos o escribir métodos de objetos que se ejecuten automáticamente cuando se utilice el objeto.

## Objetos activos y estáticos

4D forms support a large number of built-in **active** and **static** objects:

- **active objects** perform a database task or an interface function. Los campos son objetos activos. Los otros objetos activos -objetos editable (variables), combo box, listas desplegables, botones imagen, etc.- almacenan los datos temporalmente en la memoria o realizan alguna acción, como abrir una caja de diálogo, imprimir un informe o iniciar un proceso en segundo plano.
- **static objects** are generally used for setting the appearance of the form and its labels as well as for the graphic interface. Los objetos estáticos no tienen variables asociadas como los objetos activos. Sin embargo, se pueden insertar objetos dinámicos en objetos estáticos.

## Gestión de objetos de formulario

Puede añadir o modificar objetos formulario 4D de las siguientes maneras:

- **[Form Editor](FormEditor/formEditor.md):** Drag an object from the Form Editor toolbar onto the form. A continuación, utilice la Lista de propiedades para especificar las propiedades del objeto.

- **4D language**: Commands from the `Objects (Forms)` theme such as [`OBJECT DUPLICATE`](https://doc.4d.com/4dv20/help/command/en/page1111.html) or [`OBJECT SET FONT STYLE`](https://doc.4d.com/4dv20/help/command/en/page166.html) allow to create and define form objects.

- **JSON code in dynamic forms:** Define the properties using JSON. Use the [type](properties_Object.md#type) property to define the object type, then set its [available properties](properties_Reference.md).
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
