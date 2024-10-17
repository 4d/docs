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

- Lenguaje **4D**: los comandos del tema `Objects (Forms)` como [`OBJECT DUPLICATE`](https://doc.4d.com/4dv20/help/command/en/page1111.html) o [`OBJECT SET FONT STYLE`](https://doc.4d.com/4dv20/help/command/en/page166.html) permiten crear y definir objetos de formulario.

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
