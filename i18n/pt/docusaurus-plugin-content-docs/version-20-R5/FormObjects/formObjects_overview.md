---
id: formObjectsOverview
title: Objectos formulário
---

O usuário constrói e personaliza os seus formulários de aplicação manipulando os objetos neles contidos. You can add objects, reposition objects, set object properties, enforce business rules by specifying data entry constraints, or write object methods that run automatically when the object is used.

## Objectos activos e estáticos

Los formularios 4D soportan una gran cantidad de objetos **activos** y **estáticos** integrados:

- **Los objetos activos** realizan una tarea o una función de la interfaz. Os campos são objetos ativos. Other active objects — enterable objects (variables), combo boxes, drop-down lists, picture buttons, and so on — store data temporarily in memory or perform some action such as opening a dialog box, printing a report, or starting a background process.
- **Los objetos estáticos** se utilizan generalmente para definir la apariencia del formulario y sus etiquetas, así como para la interfaz gráfica. Os objetos estáticos não têm variáveis associadas como os objetos ativos. No entanto, é possível inserir objetos dinâmicos em objetos estáticos.

## Manipulação de objectos de formulário

Pode adicionar ou modificar objetos de formulários 4D das seguintes formas:

- **[Editor de formularios](FormEditor/formEditor.md):** arrastre un objeto de la barra de herramientas del editor de formularios al formulario. Em seguida, use a Lista de propriedades para especificar as propriedades do objeto.

- **4D language**: Commands from the `Objects (Forms)` theme such as [`OBJECT DUPLICATE`](https://doc.4d.com/4dv20/help/command/en/page1111.html) or [`OBJECT SET FONT STYLE`](https://doc.4d.com/4dv20/help/command/en/page166.html) allow to create and define form objects.

- **Código JSON en formularios dinámicos:** define las propiedades utilizando JSON. Utilice la propiedad [type](properties_Object.md#type) para definir el tipo de objeto y, a continuación, defina sus [propiedades disponibles](properties_Reference.md).
  Exemplo de um objeto botão:

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
